// onyx-cutom/web/src/app/chat/HistorySidebar.tsx (or its correct path)
"use client";

import React, {
  ForwardedRef,
  forwardRef,
  useContext,
  useCallback,
} from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { useRouter, useSearchParams } from "next/navigation";
import { ChatSession } from "../interfaces"; // Assuming correct path
import { Folder } from "../folders/interfaces"; // Assuming correct path
import { SettingsContext } from "@/components/settings/SettingsProvider";

import {
  DocumentIcon2,
  KnowledgeGroupIcon,
  NewChatIcon,
} from "@/components/icons/icons";
import { PagesTab } from "./PagesTab"; // Assuming correct path
import { pageType } from "./types"; // Assuming correct path
import LogoWithText from "@/components/header/LogoWithText";
import { Persona } from "@/app/admin/assistants/interfaces"; // Assuming correct path
import { DragEndEvent } from "@dnd-kit/core";
import { useAssistants } from "@/components/context/AssistantsContext";
import { AssistantIcon } from "@/components/assistants/AssistantIcon";
import { buildChatUrl } from "../lib"; // Assuming correct path
import { reorderPinnedAssistants } from "@/lib/assistants/updateAssistantPreferences";
import { useUser } from "@/components/user/UserProvider";
import { DragHandle } from "@/components/table/DragHandle";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CircleX, PinIcon } from "lucide-react"; // lucide-react is used for some icons
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { TruncatedText } from "@/components/ui/truncatedText";

// NEW: Import for the "Projects" icon
import { FiPackage } from "react-icons/fi";

interface HistorySidebarProps {
  liveAssistant?: Persona | null;
  page: pageType;
  existingChats?: ChatSession[];
  currentChatSession?: ChatSession | null | undefined;
  folders?: Folder[];
  toggleSidebar?: () => void;
  toggled?: boolean;
  removeToggle?: () => void;
  reset?: () => void; // Make sure this prop is passed if handleNewChat uses it
  showShareModal?: (chatSession: ChatSession) => void;
  showDeleteModal?: (chatSession: ChatSession) => void;
  explicitlyUntoggle: () => void;
  setShowAssistantsModal: (show: boolean) => void;
  toggleChatSessionSearchModal?: () => void;
}

interface SortableAssistantProps {
  assistant: Persona;
  active: boolean;
  onClick: () => void;
  onPinAction: (e: React.MouseEvent) => void;
  pinned?: boolean;
}

const SortableAssistant: React.FC<SortableAssistantProps> = ({
  assistant,
  active,
  onClick,
  onPinAction,
  pinned = true,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: assistant.id === 0 ? "assistant-0" : assistant.id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    ...(isDragging ? { zIndex: 1000, position: "relative" as const } : {}),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center group"
    >
      <DragHandle
        size={16}
        className={`w-3 ml-[2px] mr-[2px] group-hover:visible invisible flex-none cursor-grab ${
          !pinned ? "opacity-0" : ""
        }`}
      />
      <div
        data-testid={`assistant-[${assistant.id}]`}
        onClick={(e) => {
          e.preventDefault();
          if (!isDragging) {
            onClick();
          }
        }}
        className={`cursor-pointer w-full group hover:bg-background-chat-hover ${
          active ? "bg-accent-background-selected" : ""
        } relative flex items-center gap-x-2 py-1 px-2 rounded-md`}
      >
        <AssistantIcon assistant={assistant} size={16} className="flex-none" />
        <TruncatedText
          className="text-base mr-4 text-left w-fit line-clamp-1 text-ellipsis text-black dark:text-[#D4D4D4]"
          text={assistant.name}
        />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPinAction(e);
                }}
                className="group-hover:block hidden absolute right-2"
              >
                {pinned ? (
                  <CircleX
                    size={16}
                    className="text-text-history-sidebar-button"
                  />
                ) : (
                  <PinIcon
                    size={16}
                    className="text-text-history-sidebar-button"
                  />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              {pinned
                ? "Unpin this assistant from the sidebar"
                : "Pin this assistant to the sidebar"}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export const HistorySidebar = forwardRef<HTMLDivElement, HistorySidebarProps>(
  (
    {
      liveAssistant,
      reset = () => null, // Providing a default if not passed
      setShowAssistantsModal = () => null, // Providing a default
      toggled,
      page,
      existingChats,
      currentChatSession,
      folders,
      explicitlyUntoggle,
      toggleSidebar,
      removeToggle,
      showShareModal,
      toggleChatSessionSearchModal,
      showDeleteModal,
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { user, toggleAssistantPinnedStatus } = useUser(); // Assuming useUser() provides the user object
    const { refreshAssistants, pinnedAssistants, setPinnedAssistants } =
      useAssistants();

    const currentChatId = currentChatSession?.id;

    const sensors = useSensors(
      useSensor(PointerSensor, {
        activationConstraint: {
          distance: 8,
        },
      }),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      })
    );

    const handleDragEnd = useCallback(
      (event: DragEndEvent) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
          setPinnedAssistants((prevAssistants: Persona[]) => {
            const oldIndex = prevAssistants.findIndex(
              (a: Persona) => (a.id === 0 ? "assistant-0" : a.id) === active.id
            );
            const newIndex = prevAssistants.findIndex(
              (a: Persona) => (a.id === 0 ? "assistant-0" : a.id) === over?.id
            );

            const newOrder = arrayMove(prevAssistants, oldIndex, newIndex);
            const reorderedIds = newOrder.map((a: Persona) => a.id);
            reorderPinnedAssistants(reorderedIds);
            return newOrder;
          });
        }
      },
      [setPinnedAssistants] // Removed reorderPinnedAssistants from deps if it's stable
    );

    const combinedSettings = useContext(SettingsContext);
    if (!combinedSettings) {
      // This check might be too strict if SettingsContext is optional or provided higher up
      // Consider if this component should render a fallback or if context is guaranteed
      // return null; 
      console.warn("SettingsContext not found in HistorySidebar");
    }

    const handleNewChat = useCallback(() => {
      if (reset) reset(); // Call reset if it's provided and is a function
      // console.log("currentChatSession for new chat URL:", currentChatSession); // For debugging

      const newChatUrl =
        `/${page}` +
        (currentChatSession?.persona_id !== undefined // Check if persona_id exists
          ? `?assistantId=${currentChatSession.persona_id}`
          : "");
      router.push(newChatUrl);
    }, [reset, page, currentChatSession, router]);


    return (
      <>
        <div
          ref={ref}
          className={`
            flex
            flex-none
            gap-y-4
            bg-background-sidebar
            w-full
            border-r 
            dark:border-none
            dark:text-[#D4D4D4]
            dark:bg-[#000]
            border-sidebar-border 
            flex 
            flex-col relative
            h-screen
            pt-2
            transition-transform 
            `}
        >
          <div className="px-4 pl-2">
            <LogoWithText
              showArrow={true}
              toggled={toggled}
              page={page}
              toggleSidebar={toggleSidebar}
              explicitlyUntoggle={explicitlyUntoggle}
            />
          </div>
          {page == "chat" && (
            <div className="px-4 px-1 -mx-2 gap-y-1 flex-col text-text-history-sidebar-button flex gap-x-1.5 items-center items-center"> {/* Matched from user HTML */}
              <Link
                className="w-full px-2 py-1 group rounded-md items-center hover:bg-accent-background-hovered cursor-pointer transition-all duration-150 flex gap-x-2"
                href={
                  `/${page}` +
                  (currentChatSession?.persona_id !== undefined
                    ? `?assistantId=${currentChatSession?.persona_id}`
                    : "")
                }
                onClick={(e) => {
                  if (e.metaKey || e.ctrlKey) {
                    return; // Allow default browser behavior (open in new tab/window)
                  }
                  e.preventDefault(); // Prevent default link navigation for programmatic navigation
                  handleNewChat();
                }}
              >
                <NewChatIcon size={20} className="flex-none" />
                <p className="my-auto flex font-normal items-center ">
                  New Chat
                </p>
              </Link>
              <Link
                className="w-full px-2 py-1 rounded-md items-center hover:bg-hover cursor-pointer transition-all duration-150 flex gap-x-2"
                href="/chat/my-documents"
              >
                <KnowledgeGroupIcon
                  size={20}
                  className="flex-none text-text-history-sidebar-button"
                />
                <p className="my-auto flex font-normal items-center text-base">
                  My Documents
                </p>
              </Link>
              {user?.preferences?.shortcut_enabled && (
                <Link
                  className="w-full px-2 py-1 rounded-md items-center hover:bg-accent-background-hovered cursor-pointer transition-all duration-150 flex gap-x-2"
                  href="/chat/input-prompts"
                >
                  <DocumentIcon2
                    size={20}
                    className="flex-none text-text-history-sidebar-button"
                  />
                  <p className="my-auto flex font-normal items-center text-base">
                    Prompt Shortcuts
                  </p>
                </Link>
              )}

              {/* === NEW "PROJECTS" BUTTON/LINK === */}
              <Link
                className="w-full px-2 py-1 group rounded-md items-center hover:bg-accent-background-hovered cursor-pointer transition-all duration-150 flex gap-x-2"
                href="/custom-projects-ui/projects"
	        target="_blank"  // ADDED: Opens in a new tab/window
                rel="noopener noreferrer" // ADDED: Security measure for target="_blank" 
              >
                <FiPackage size={20} className="flex-none text-text-history-sidebar-button" /> 
                <p className="my-auto flex font-normal items-center text-base">
                  Projects
                </p>
              </Link>
              {/* === END OF NEW "PROJECTS" LINK === */}

            </div>
          )}
          <div className="h-full relative overflow-x-hidden overflow-y-auto">
            <div className="flex px-4 font-normal text-sm gap-x-2 leading-normal text-text-500/80 dark:text-[#D4D4D4] items-center font-normal leading-normal">
              Assistants
            </div>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
              modifiers={[restrictToVerticalAxis]}
            >
              <SortableContext
                items={pinnedAssistants.map((a) =>
                  a.id === 0 ? "assistant-0" : a.id
                )}
                strategy={verticalListSortingStrategy}
              >
                <div className="flex px-0 mr-4 flex-col gap-y-1 mt-1"> {/* Adjusted mr-4 for consistency if needed */}
                  {pinnedAssistants.map((assistant: Persona) => (
                    <SortableAssistant
                      key={assistant.id === 0 ? "assistant-0" : assistant.id}
                      assistant={assistant}
                      active={assistant.id === liveAssistant?.id}
                      onClick={() => {
                        router.push(
                          buildChatUrl(searchParams, null, assistant.id)
                        );
                      }}
                      onPinAction={async (e: React.MouseEvent) => {
                        e.stopPropagation();
                        await toggleAssistantPinnedStatus(
                          pinnedAssistants.map((a) => a.id),
                          assistant.id,
                          false
                        );
                        await refreshAssistants();
                      }}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
            {!pinnedAssistants.some((a) => a.id === liveAssistant?.id) &&
              liveAssistant && (
                <div className="w-full mt-1 pr-4"> {/* Adjusted pr-4 for consistency */}
                  <SortableAssistant
                    pinned={false}
                    assistant={liveAssistant}
                    active={liveAssistant.id === liveAssistant?.id} // This will always be true here
                    onClick={() => {
                      router.push(
                        buildChatUrl(searchParams, null, liveAssistant.id)
                      );
                    }}
                    onPinAction={async (e: React.MouseEvent) => {
                      e.stopPropagation();
                      await toggleAssistantPinnedStatus(
                        [...pinnedAssistants.map((a) => a.id)],
                        liveAssistant.id,
                        true
                      );
                      await refreshAssistants();
                    }}
                  />
                </div>
              )}

            <div className="w-full px-4">
              <button
                aria-label="Explore Assistants"
                onClick={() => setShowAssistantsModal(true)} // Ensure setShowAssistantsModal is correctly passed as prop
                className="w-full cursor-pointer text-base text-black dark:text-[#D4D4D4] hover:bg-background-chat-hover flex items-center gap-x-2 py-1 px-2 rounded-md"
              >
                Explore Assistants
              </button>
            </div>

            <PagesTab
              toggleChatSessionSearchModal={toggleChatSessionSearchModal}
              showDeleteModal={showDeleteModal}
              showShareModal={showShareModal}
              closeSidebar={removeToggle}
              existingChats={existingChats}
              currentChatId={currentChatId}
              folders={folders}
            />
          </div>
        </div>
      </>
    );
  }
);
HistorySidebar.displayName = "HistorySidebar";

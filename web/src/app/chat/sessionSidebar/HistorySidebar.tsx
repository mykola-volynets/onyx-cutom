// onyx-cutom/web/src/app/chat/sessionSidebar/HistorySidebar.tsx
"use client";

import React, {
  ForwardedRef,
  forwardRef,
  useContext,
  useCallback,
  useState, // Added useState
} from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { useRouter, useSearchParams } from "next/navigation";
import { ChatSession } from "../interfaces";
import { Folder } from "../folders/interfaces";
import { SettingsContext } from "@/components/settings/SettingsProvider";

import {
  DocumentIcon2,
  KnowledgeGroupIcon,
  NewChatIcon,
} from "@/components/icons/icons";
import { PagesTab } from "./PagesTab";
import { pageType } from "./types";
import LogoWithText from "@/components/header/LogoWithText";
import { Persona } from "@/app/admin/assistants/interfaces";
import { DragEndEvent } from "@dnd-kit/core";
import { useAssistants } from "@/components/context/AssistantsContext";
import { AssistantIcon } from "@/components/assistants/AssistantIcon";
import { buildChatUrl } from "../lib";
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
import { CircleX, PinIcon, ChevronDown, ChevronRight, Settings2, Construction } from "lucide-react"; // Added Chevrons and Construction (for Builder Tools icon)
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { TruncatedText } from "@/components/ui/truncatedText";

import { FiPackage, FiSliders } from "react-icons/fi";

interface HistorySidebarProps {
  liveAssistant?: Persona | null;
  page: pageType;
  existingChats?: ChatSession[];
  currentChatSession?: ChatSession | null | undefined;
  folders?: Folder[];
  toggleSidebar?: () => void;
  toggled?: boolean;
  removeToggle?: () => void;
  reset?: () => void;
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
      reset = () => null,
      setShowAssistantsModal = () => null,
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
    const { user, toggleAssistantPinnedStatus } = useUser();
    const { refreshAssistants, pinnedAssistants, setPinnedAssistants } =
      useAssistants();

    // === NEW STATE FOR COLLAPSIBLE SECTION ===
    const [isBuilderToolsOpen, setIsBuilderToolsOpen] = useState(false); // Default to closed

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
      [setPinnedAssistants]
    );

    const combinedSettings = useContext(SettingsContext);
    if (!combinedSettings) {
      console.warn("SettingsContext not found in HistorySidebar");
    }

    const handleNewChat = useCallback(() => {
      if (reset) reset();
      const newChatUrl =
        `/${page}` +
        (currentChatSession?.persona_id !== undefined
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
            gap-y-4 /* This might need adjustment if sections are too close */
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
            <div className="px-4 px-1 -mx-2 gap-y-1 flex-col text-text-history-sidebar-button flex"> {/* Removed gap-x-1.5 items-center */}
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
                    return;
                  }
                  e.preventDefault();
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
              
              {/* === NEW COLLAPSIBLE BUILDER TOOLS SECTION === */}
              <div className="mt-1"> {/* Added some top margin */}
                <button
                  onClick={() => setIsBuilderToolsOpen(!isBuilderToolsOpen)}
                  className="w-full flex items-center justify-between px-2 py-1 group rounded-md hover:bg-accent-background-hovered cursor-pointer transition-all duration-150"
                  aria-expanded={isBuilderToolsOpen}
                >
                  <div className="flex items-center gap-x-2">
                    <Construction size={18} className="flex-none text-text-history-sidebar-button" /> {/* Example Icon */}
                    <p className="my-auto flex font-normal items-center text-base">
                      Builder Tools
                    </p>
                  </div>
                  {isBuilderToolsOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                </button>

                {isBuilderToolsOpen && (
                  <div className="pl-3 mt-1 space-y-1"> {/* Indented links */}
                    <Link
                      className="w-full pl-2 pr-1 py-1 group rounded-md items-center hover:bg-accent-background-hovered cursor-pointer transition-all duration-150 flex gap-x-2"
                      href="/custom-projects-ui/projects"
                      target="_blank" // Kept target blank as in original
                      rel="noopener noreferrer"
                    >
                      <FiPackage size={18} className="flex-none text-text-history-sidebar-button" />
                      <p className="my-auto flex font-normal items-center text-sm"> {/* Adjusted text size for nested items */}
                        Projects
                      </p>
                    </Link>

                    <Link
                      className="w-full pl-2 pr-1 py-1 group rounded-md items-center hover:bg-accent-background-hovered cursor-pointer transition-all duration-150 flex gap-x-2"
                      href="/custom-projects-ui/pipelines"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiSliders size={18} className="flex-none text-text-history-sidebar-button" />
                      <p className="my-auto flex font-normal items-center text-sm">
                        Products
                      </p>
                    </Link>

                    <Link
                      className="w-full pl-2 pr-1 py-1 group rounded-md items-center hover:bg-accent-background-hovered cursor-pointer transition-all duration-150 flex gap-x-2"
                      href="/custom-projects-ui/admin/design-templates"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* Using FiPackage again, or you can choose another icon */}
                      <Settings2 size={18} className="flex-none text-text-history-sidebar-button" /> 
                      <p className="my-auto flex font-normal items-center text-sm">
                        Templates (Designs)
                      </p>
                    </Link>
                    
                    {user?.preferences?.shortcut_enabled && (
                      <Link
                        className="w-full pl-2 pr-1 py-1 group rounded-md items-center hover:bg-accent-background-hovered cursor-pointer transition-all duration-150 flex gap-x-2"
                        href="/chat/input-prompts" 
                        // target="_blank" rel="noopener noreferrer" // Consider if this should open in new tab too
                      >
                        <DocumentIcon2
                          size={18} // Adjusted size to match others
                          className="flex-none text-text-history-sidebar-button"
                        />
                        <p className="my-auto flex font-normal items-center text-sm">
                          Prompt Shortcuts
                        </p>
                      </Link>
                    )}
                  </div>
                )}
              </div>
              {/* === END OF NEW COLLAPSIBLE SECTION === */}

              {/* Original Prompt Shortcuts link is removed from here as it's moved above */}
            </div>
          )}
          <div className="h-full relative overflow-x-hidden overflow-y-auto pt-2"> {/* Added pt-2 for spacing */}
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
                <div className="flex px-0 mr-4 flex-col gap-y-1 mt-1">
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
                          false // This means unpin
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
                <div className="w-full mt-1 pr-4"> {/* Added pr-4 to align with items above */}
                  <SortableAssistant
                    pinned={false}
                    assistant={liveAssistant}
                    active={liveAssistant.id === liveAssistant?.id}
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
                        true // This means pin
                      );
                      await refreshAssistants();
                    }}
                  />
                </div>
              )}

            <div className="w-full px-4 mt-1"> {/* Added mt-1 for spacing */}
              <button
                aria-label="Explore Assistants"
                onClick={() => setShowAssistantsModal(true)}
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

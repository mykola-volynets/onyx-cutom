// onyx-cutom/web/src/app/chat/sessionSidebar/HistorySidebar.tsx
"use client";

import React, {
  ForwardedRef,
  forwardRef,
  useContext,
  useCallback,
  useState, // Keep useState
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
  // DocumentIcon2, // No longer needed here if Prompt Shortcuts moves
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
import { CircleX, PinIcon, ChevronDown, ChevronRight } from "lucide-react"; // Removed Settings2, UserCog
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { TruncatedText } from "@/components/ui/truncatedText";

import { FiPackage } from "react-icons/fi"; // Removed FiSliders

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
  // setShowAssistantsModal: (show: boolean) => void; // Removed: No longer needed here
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
      // setShowAssistantsModal = () => null, // Removed
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
    const { toggleAssistantPinnedStatus } = useUser();
    const { refreshAssistants, pinnedAssistants, setPinnedAssistants } =
      useAssistants();

    const [isAssistantsOpen, setIsAssistantsOpen] = useState(true);

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

    const renderAssistantsSection = (isCompactStyle: boolean) => (
        <>
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
                <div className={`flex flex-col gap-y-1 ${isCompactStyle ? "px-0" : "px-0 mr-4 mt-1"}`}>
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
                <div className={`w-full mt-1 ${isCompactStyle ? "" : "pr-4"}`}>
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

            {/* "Explore Assistants" button REMOVED from here */}
        </>
    );


    return (
      <>
        <div
          ref={ref}
          className={`
            flex
            flex-none
            flex-col relative
            w-full
            h-screen
            bg-background-sidebar
            border-r dark:border-none border-sidebar-border
            dark:text-[#D4D4D4] dark:bg-[#000]
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

          <div className="px-4 px-1 -mx-2 gap-y-1 flex-col text-text-history-sidebar-button flex pt-4">
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
            <Link
              className="w-full px-2 py-1 group rounded-md items-center hover:bg-accent-background-hovered cursor-pointer transition-all duration-150 flex gap-x-2"
              href="/custom-projects-ui/projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiPackage size={18} className="flex-none text-text-history-sidebar-button" />
              <p className="my-auto flex font-normal items-center text-base">
                Projects
              </p>
            </Link>
            
            <div className="mt-1">
              <button
                onClick={() => setIsAssistantsOpen(!isAssistantsOpen)}
                className="w-full flex items-center justify-between px-2 py-1 group rounded-md hover:bg-accent-background-hovered cursor-pointer transition-all duration-150"
                aria-expanded={isAssistantsOpen}
              >
                <div className="flex items-center gap-x-2">
                  <p className="my-auto flex font-normal items-center text-base">
                    Assistants
                  </p>
                </div>
                {isAssistantsOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
              </button>

              {isAssistantsOpen && (
                <div className="pl-3 mt-1 space-y-1"> 
                  <div className="pt-2">
                      {renderAssistantsSection(true)} 
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex-grow relative overflow-x-hidden overflow-y-auto pt-4"> 
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

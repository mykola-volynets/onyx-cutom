// onyx-custom/web/src/app/chat/sessionSidebar/HistorySidebar.tsx
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
import { ChatSession } from "../interfaces";
import { Folder } from "../folders/interfaces";
import { SettingsContext } from "@/components/settings/SettingsProvider";

import {
  KnowledgeGroupIcon,
  NewChatIcon,
} from "@/components/icons/icons";
import { PagesTab } from "./PagesTab";
import { pageType } from "./types";
import LogoWithText from "@/components/header/LogoWithText";
import { Persona } from "@/app/admin/assistants/interfaces"; // Re-added Persona import
import { TruncatedText } from "@/components/ui/truncatedText";

import { FiPackage } from "react-icons/fi";

interface HistorySidebarProps {
  liveAssistant?: Persona | null; // Re-added liveAssistant as an optional prop
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
  toggleChatSessionSearchModal?: () => void;
}

export const HistorySidebar = forwardRef<HTMLDivElement, HistorySidebarProps>(
  (
    {
      liveAssistant, // Re-added liveAssistant to props destructuring (will be unused)
      reset = () => null,
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

    const currentChatId = currentChatSession?.id;

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

    // liveAssistant is now accepted as a prop but is intentionally not used in the component body.

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
                New Product
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
                My Drive
              </p>
            </Link>
            <Link
              className="w-full px-2 py-1 group rounded-md items-center hover:bg-accent-background-hovered cursor-pointer transition-all duration-150 flex gap-x-2"
              href="/custom-projects-ui/projects"
            >
              <FiPackage size={18} className="flex-none text-text-history-sidebar-button" />
              <p className="my-auto flex font-normal items-center text-base">
                My Products
              </p>
            </Link>
            
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

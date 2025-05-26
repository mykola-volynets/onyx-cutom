"use client";

import {
  Trash,
  XSquare,
  LinkBreak,
  Link,
  Plug,
  Brain,
  Question,
  Gear,
  ArrowSquareOut,
} from "@phosphor-icons/react";
import {
  FiChevronsDown,
  FiChevronsUp,
  FiEdit2,
  FiClipboard,
  FiFile,
  FiGlobe,
  FiThumbsDown,
  FiThumbsUp,
  FiChevronDown,
  FiChevronUp,
  FiAlertCircle,
  FiChevronRight,
  FiChevronLeft,
  FiAlertTriangle,
  FiCopy,
  FiCpu,
  FiInfo,
  FiBarChart2,
} from "react-icons/fi";
import { SiBookstack } from "react-icons/si";
import { StaticImageData } from "next/image";
import jiraSVG from "../../../public/Jira.svg";
import confluenceSVG from "../../../public/Confluence.svg";
import deepseekSVG from "../../../public/Deepseek.svg";
import openAISVG from "../../../public/Openai.svg";
import amazonSVG from "../../../public/Amazon.svg";
import geminiSVG from "../../../public/Gemini.svg";
import metaSVG from "../../../public/Meta.svg";
import mistralSVG from "../../../public/Mistral.svg";
import openSourceIcon from "../../../public/OpenSource.png";
import litellmIcon from "../../../public/litellm.png";
import azureIcon from "../../../public/Azure.png";
import asanaIcon from "../../../public/Asana.png";
import anthropicSVG from "../../../public/Anthropic.svg";
import nomicSVG from "../../../public/nomic.svg";
import microsoftIcon from "../../../public/microsoft.png";
import microsoftSVG from "../../../public/Microsoft.svg";
import mixedBreadSVG from "../../../public/Mixedbread.png";
import OCIStorageSVG from "../../../public/OCI.svg";
import googleCloudStorageIcon from "../../../public/GoogleCloudStorage.png";
import guruIcon from "../../../public/Guru.svg";
import gongIcon from "../../../public/Gong.png";
import zulipIcon from "../../../public/Zulip.png";
import linearIcon from "../../../public/Linear.png";
import hubSpotIcon from "../../../public/HubSpot.png";
import document360Icon from "../../../public/Document360.png";
import googleSitesIcon from "../../../public/GoogleSites.png";
import zendeskIcon from "../../../public/Zendesk.svg";
import dropboxIcon from "../../../public/Dropbox.png";
import egnyteIcon from "../../../public/Egnyte.png";
import slackIcon from "../../../public/Slack.png";
import discordIcon from "../../../public/discord.png";
import airtableIcon from "../../../public/Airtable.svg";
import s3Icon from "../../../public/S3.png";
import r2Icon from "../../../public/r2.png";
import salesforceIcon from "../../../public/Salesforce.png";
import freshdeskIcon from "../../../public/Freshdesk.png";
import firefliesIcon from "../../../public/Fireflies.png";
import gitbookDarkIcon from "../../../public/GitBookDark.png";
import gitbookLightIcon from "../../../public/GitBookLight.png";
import sharepointIcon from "../../../public/Sharepoint.png";
import teamsIcon from "../../../public/Teams.png";
import mediawikiIcon from "../../../public/MediaWiki.svg";
import wikipediaIcon from "../../../public/Wikipedia.png";
import discourseIcon from "../../../public/Discourse.png";
import clickupIcon from "../../../public/Clickup.svg";
import cohereIcon from "../../../public/Cohere.svg";
import googleIcon from "../../../public/Google.png";
import xenforoIcon from "../../../public/Xenforo.svg";
import highspotIcon from "../../../public/Highspot.png";
import { FaGithub, FaRobot } from "react-icons/fa";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface IconProps {
  size?: number;
  className?: string;
}

export interface LogoIconProps extends IconProps {
  src: string | StaticImageData;
}

export const OpenAIISVG = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <svg
    fill="currentColor"
    width={size}
    style={{ width: `${size}px`, height: `${size}px` }}
    height={size}
    className={`w-[${size}px] h-[${size}px] ` + className}
    viewBox="0 0 24 24"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
    />
  </svg>
);

export const LogoIcon = ({
  size = 16,
  className = defaultTailwindCSS,
  src,
}: LogoIconProps) => (
  <Image
    style={{ width: `${size}px`, height: `${size}px` }}
    className={`w-[${size}px] h-[${size}px] ` + className}
    src={src}
    alt="Logo"
    width="96"
    height="96"
  />
);

export const AssistantsIconSkeleton = ({
  size,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M8.88 21.25h9.87a2.5 2.5 0 0 0 2.5-2.5v-3.63a2.5 2.5 0 0 0-2.5-2.48h-1.27m-6.1 6.09l6.1-6.11l1.87-1.87a2.49 2.49 0 0 0 0-3.53l-2.57-2.57a2.49 2.49 0 0 0-3.53 0l-1.87 1.87" />
        <path d="M8.88 2.75H5.25a2.5 2.5 0 0 0-2.5 2.5v13.5a2.5 2.5 0 0 0 2.5 2.5h3.63a2.5 2.5 0 0 0 2.5-2.5V5.25a2.5 2.5 0 0 0-2.5-2.5" />
        <path d="M7.065 18.594a1.594 1.594 0 1 0 0-3.188a1.594 1.594 0 0 0 0 3.188" />
      </g>
    </svg>
  );
};

export const LightBulbIcon = ({
  size,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
    </svg>
  );
};

export const AssistantsIcon = ({
  size,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M20.893 12.84a3.23 3.23 0 0 0-1.796-.91l.639-.64c.3-.304.537-.664.698-1.06a3.207 3.207 0 0 0 0-2.48a3.16 3.16 0 0 0-.698-1.06l-2.564-2.56a2.993 2.993 0 0 0-.997-.71a3.244 3.244 0 0 0-2.484 0a3.113 3.113 0 0 0-.998.7l-.638.64a3.242 3.242 0 0 0-1.086-1.973A3.227 3.227 0 0 0 8.863 2H5.242a3.248 3.248 0 0 0-2.29.955A3.264 3.264 0 0 0 2 5.25v13.5c0 .862.342 1.689.95 2.298c.608.61 1.432.952 2.292.952h13.466a3.254 3.254 0 0 0 2.295-1A3.239 3.239 0 0 0 22 18.7v-3.58a3.246 3.246 0 0 0-1.107-2.28M6.928 19.35a2.34 2.34 0 0 1-2.166-1.45a2.356 2.356 0 0 1 .508-2.562A2.341 2.341 0 0 1 9.272 17a2.344 2.344 0 0 1-2.344 2.35m5.057-12.52l1.646-1.65c.162-.163.356-.293.569-.38c.426-.17.9-.17 1.326 0c.21.093.402.221.569.38l2.563 2.57a2 2 0 0 1 .38.57a1.788 1.788 0 0 1 0 1.34c-.09.21-.219.4-.38.56l-6.673 6.7z"
      />
      <path
        fill="currentColor"
        d="M7.795 17a.852.852 0 0 1-1.007.845a.847.847 0 0 1-.671-.665a.852.852 0 0 1 .83-1.02a.847.847 0 0 1 .848.84"
      />
    </svg>
  );
};

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="200"
  height="200"
  viewBox="0 0 24 24"
>
  <g fill="none" stroke="currentColor" strokeWidth="1.5">
    <path
      strokeLinecap="round"
      d="M21.483 19c-.04.936-.165 1.51-.569 1.914c-.586.586-1.528.586-3.414.586c-1.886 0-2.828 0-3.414-.586c-.586-.586-.586-1.528-.586-3.414v-2c0-1.886 0-2.828.586-3.414c.586-.586 1.528-.586 3.414-.586c1.886 0 2.828 0 3.414.586c.532.531.581 1.357.585 2.914"
    />
    <path d="M2 8.5c0 1.886 0 2.828.586 3.414c.586.586 1.528.586 3.414.586c1.886 0 2.828 0 3.414-.586C10 11.328 10 10.386 10 8.5v-2c0-1.886 0-2.828-.586-3.414C8.828 2.5 7.886 2.5 6 2.5c-1.886 0-2.828 0-3.414.586C2 3.672 2 4.614 2 6.5v2Z" />
    <path
      strokeLinecap="round"
      d="M15.5 2.513c-.327.017-.562.055-.765.14a2 2 0 0 0-1.083 1.082c-.152.367-.152.833-.152 1.765c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083c.367.152.833.152 1.765.152h2c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.152-.367.152-.833.152-1.765c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083c-.204-.084-.438-.122-.765-.139"
    />
    <path d="M2 18.5c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083c.367.152.833.152 1.765.152h2c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C10 19.898 10 19.432 10 18.5c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C8.398 15.5 7.932 15.5 7 15.5H5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 17.102 2 17.568 2 18.5Z" />
  </g>
</svg>;

export const ConfigureIcon = ({
  size,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          d="M21.483 19c-.04.936-.165 1.51-.569 1.914c-.586.586-1.528.586-3.414.586c-1.886 0-2.828 0-3.414-.586c-.586-.586-.586-1.528-.586-3.414v-2c0-1.886 0-2.828.586-3.414c.586-.586 1.528-.586 3.414-.586c1.886 0 2.828 0 3.414.586c.532.531.581 1.357.585 2.914"
        />
        <path d="M2 8.5c0 1.886 0 2.828.586 3.414c.586.586 1.528.586 3.414.586c1.886 0 2.828 0 3.414-.586C10 11.328 10 10.386 10 8.5v-2c0-1.886 0-2.828-.586-3.414C8.828 2.5 7.886 2.5 6 2.5c-1.886 0-2.828 0-3.414.586C2 3.672 2 4.614 2 6.5v2Z" />
        <path
          strokeLinecap="round"
          d="M15.5 2.513c-.327.017-.562.055-.765.14a2 2 0 0 0-1.083 1.082c-.152.367-.152.833-.152 1.765c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083c.367.152.833.152 1.765.152h2c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.152-.367.152-.833.152-1.765c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083c-.204-.084-.438-.122-.765-.139"
        />
        <path d="M2 18.5c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083c.367.152.833.152 1.765.152h2c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C10 19.898 10 19.432 10 18.5c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C8.398 15.5 7.932 15.5 7 15.5H5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 17.102 2 17.568 2 18.5Z" />
      </g>
    </svg>
  );
};

export const defaultTailwindCSS = "my-auto flex flex-shrink-0 text-default";
export const defaultTailwindCSSBlue = "my-auto flex flex-shrink-0 text-link";

export const ColorSlackIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <LogoIcon size={size} className={className} src={slackIcon} />;
};

export const ColorDiscordIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <LogoIcon size={size} className={className} src={discordIcon} />;
};

export const LiteLLMIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <LogoIcon size={size} className={className} src={litellmIcon} />;
};

export const OpenSourceIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <LogoIcon size={size} className={className} src={openSourceIcon} />;
};

export const MixedBreadIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <LogoIcon size={size} className={className} src={mixedBreadSVG} />;
};

export const NomicIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <LogoIcon size={size} className={className} src={nomicSVG} />;
};

export const MicrosoftIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <LogoIcon size={size} className={className} src={microsoftIcon} />;
};

export const AnthropicIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <LogoIcon size={size} className={className} src={anthropicSVG} />;
};

export const LeftToLineIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 19V5m10 1l-6 6l6 6m-6-6h14"
      />
    </svg>
  );
};

export const RightToLineIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 12H3m8 6l6-6l-6-6m10-1v14"
      />
    </svg>
  );
};

export const PlusCircleIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const PlugIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <Plug size={size} className={className} />;
};

export const ExtendIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M16.75 11.989a1.82 1.82 0 0 1-.57 1.36l-6.82 6.1a1.27 1.27 0 0 1-.65.31h-.19a1.3 1.3 0 0 1-.52-.1a1.23 1.23 0 0 1-.54-.47a1.19 1.19 0 0 1-.21-.68v-13a1.2 1.2 0 0 1 .21-.69a1.23 1.23 0 0 1 1.25-.56c.24.039.464.143.65.3l6.76 6.09c.19.162.344.363.45.59c.114.234.175.49.18.75"
      />
    </svg>
  );
};
export const GearIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <Gear size={size} className={className} />;
};

export const ArrowSquareOutIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <ArrowSquareOut size={size} className={className} />;
};

export const TrashIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <Trash size={size} className={className} />;
};

export const LinkBreakIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <LinkBreak size={size} className={className} />;
};

export const LinkIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <Link size={size} className={className} />;
};

export const XSquareIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <XSquare size={size} className={className} />;
};

export const FileIcon = ({
  size = 16,
  className = defaultTailwindCSSBlue,
}: IconProps) => {
  return <FiFile size={size} className={className} />;
};

export const FileIcon2 = ({
  size = 16,
  className = defaultTailwindCSSBlue,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 14 14"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h5l5 5Zm-8-8h2m-2 3h5m-5 3h5"
      />
    </svg>
  );
};

export const InfoIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <FiInfo size={size} className={className} />;
};

export const QuestionIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <Question size={size} className={className} />;
};

export const BrainIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <Brain size={size} className={className} />;
};

export const EditIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <FiEdit2 size={size} className={className} />;
};

export const ThumbsDownIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <FiThumbsDown size={size} className={className} />;
};

export const ChevronsUpIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <FiChevronsUp size={size} className={className} />;
};

export const ChevronsDownIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <FiChevronsDown size={size} className={className} />;
};

export const ChevronUpIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <FiChevronUp size={size} className={className} />;
};

export const ChevronDownIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <FiChevronDown size={size} className={className} />;
};

export const ChevronRightIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <FiChevronRight size={size} className={className} />;
};

export const ChevronLeftIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <FiChevronLeft size={size} className={className} />;
};

export const XIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18 6L6 18M6 6l12 12"
      />
    </svg>
  );
};

export const UndoIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px]` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.715 22 12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Zm5.795 4.51A.75.75 0 1 0 8.24 6.872L5.99 8.949a.75.75 0 0 0 0 1.102l2.25 2.077a.75.75 0 1 0 1.018-1.102l-.84-.776h5.62c.699 0 1.168 0 1.526.036c.347.034.507.095.614.164c.148.096.275.223.37.371c.07.106.13.267.165.614c.035.358.036.827.036 1.526c0 .7 0 1.169-.036 1.527c-.035.346-.095.507-.164.614a1.25 1.25 0 0 1-.371.37c-.107.07-.267.13-.614.165c-.358.035-.827.036-1.526.036H9.5a.75.75 0 1 0 0 1.5h4.576c.652 0 1.196 0 1.637-.044c.462-.046.89-.145 1.28-.397c.327-.211.605-.49.816-.816c.252-.39.351-.818.397-1.28c.044-.441.044-.985.044-1.637v-.075c0-.652 0-1.196-.044-1.637c-.046-.462-.145-.891-.397-1.28a2.748 2.748 0 0 0-.816-.817c-.39-.251-.818-.35-1.28-.396c-.44-.044-.985-.044-1.637-.044H8.418l.84-.776Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const BackIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px]` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M9.32 3.5L4.11 8.71a1.214 1.214 0 0 0 0 1.724l5.21 5.209" />
        <path d="M20.249 20.5v-7.286a3.643 3.643 0 0 0-3.643-3.643H3.759" />
      </g>
    </svg>
  );
};

export const MagnifyingIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06zM10.5 7a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const ToggleDown = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const ToggleUp = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06L5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const BroomIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px]` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M18.221 19.643c.477-.903.942-1.937 1.24-2.98c.411-1.438.56-2.788.602-3.818l-1.552-1.552l-5.804-5.804l-1.552-1.552c-1.03.042-2.38.19-3.817.602c-1.045.298-2.078.763-2.981 1.24C2.1 6.97 1.427 9.71 2.497 11.807l.013.025l.7 1.15a23.338 23.338 0 0 0 7.808 7.809l1.15.699l.025.013c2.096 1.07 4.837.396 6.028-1.86Zm3.554-16.33a.77.77 0 0 0-1.088-1.088L19.012 3.9a4.877 4.877 0 0 0-5.718 0l1.109 1.109l4.588 4.588l1.109 1.109a4.877 4.877 0 0 0 0-5.718l1.675-1.675Z"
      />
    </svg>
  );
};

export const ChevronIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m-.23 10.77a2.109 2.109 0 0 1-.46.67l-3.68 3.68a1 1 0 0 1-1.41 0a1 1 0 0 1 0-1.41l3.68-3.68v-.12L9.5 8.3a1 1 0 1 1 1.4-1.43l3.67 3.59a2.069 2.069 0 0 1 .63 1.49a2.07 2.07 0 0 1-.18.82"
      />
    </svg>
  );
};

export const StarFeedback = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m12.495 18.587l4.092 2.15a1.044 1.044 0 0 0 1.514-1.106l-.783-4.552a1.045 1.045 0 0 1 .303-.929l3.31-3.226a1.043 1.043 0 0 0-.575-1.785l-4.572-.657A1.044 1.044 0 0 1 15 7.907l-2.088-4.175a1.044 1.044 0 0 0-1.88 0L8.947 7.907a1.044 1.044 0 0 1-.783.575l-4.51.657a1.044 1.044 0 0 0-.584 1.785l3.309 3.226a1.044 1.044 0 0 1 .303.93l-.783 4.55a1.044 1.044 0 0 0 1.513 1.107l4.093-2.15a1.043 1.043 0 0 1 .991 0"
      />
    </svg>
  );
};

export const DislikeFeedback = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M5.75 2.75H4.568c-.98 0-1.775.795-1.775 1.776v8.284c0 .98.795 1.775 1.775 1.775h1.184c.98 0 1.775-.794 1.775-1.775V4.526c0-.98-.795-1.776-1.775-1.776" />
        <path d="m21.16 11.757l-1.42-7.101a2.368 2.368 0 0 0-2.367-1.906h-7.48a2.367 2.367 0 0 0-2.367 2.367v7.101a3.231 3.231 0 0 0 1.184 2.367l.982 5.918a.887.887 0 0 0 1.278.65l1.1-.543a3.551 3.551 0 0 0 1.87-4.048l-.496-1.965h5.396a2.368 2.368 0 0 0 2.32-2.84" />
      </g>
    </svg>
  );
};

export const LikeFeedback = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M5.75 9.415H4.568c-.98 0-1.775.794-1.775 1.775v8.284c0 .98.795 1.776 1.775 1.776h1.184c.98 0 1.775-.795 1.775-1.776V11.19c0-.98-.795-1.775-1.775-1.775" />
        <path d="m21.16 12.243l-1.42 7.101a2.367 2.367 0 0 1-2.367 1.906h-7.48a2.367 2.367 0 0 1-2.367-2.367v-7.101A3.231 3.231 0 0 1 8.71 9.415l.982-5.918a.888.888 0 0 1 1.278-.65l1.1.544a3.55 3.55 0 0 1 1.87 4.047l-.496 1.965h5.396a2.367 2.367 0 0 1 2.32 2.84" />
      </g>
    </svg>
  );
};

export const CheckmarkIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 6L9 17l-5-5"
      />
    </svg>
  );
};

export const ClipboardIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <FiClipboard size={size} className={className} />;
};

export const AlertIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <FiAlertCircle size={size} className={className} />;
};

export const TriangleAlertIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <FiAlertTriangle size={size} className={className} />;
};

export const CopyIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <FiCopy size={size} className={className} />;
};

export const CPUIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <FiCpu size={size} className={className} />;
};
export const ChatIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
    </svg>
  );
};

export const SendIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 19V5m-7 7l7-7l7 7"
      />
    </svg>
  );
};
export const SearchIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
  );
};

export const BellIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25A7.75 7.75 0 0 0 4.25 9v.704a3.53 3.53 0 0 1-.593 1.958L2.51 13.385c-1.334 2-.316 4.718 2.003 5.35c.755.206 1.517.38 2.284.523l.002.005C7.567 21.315 9.622 22.75 12 22.75s4.433-1.435 5.202-3.487l.002-.005a28.472 28.472 0 0 0 2.284-.523c2.319-.632 3.337-3.35 2.003-5.35l-1.148-1.723a3.53 3.53 0 0 1-.593-1.958V9A7.75 7.75 0 0 0 12 1.25Zm3.376 18.287a28.46 28.46 0 0 1-6.753 0c.711 1.021 1.948 1.713 3.377 1.713c1.429 0 2.665-.692 3.376-1.713ZM5.75 9a6.25 6.25 0 1 1 12.5 0v.704c0 .993.294 1.964.845 2.79l1.148 1.723a2.02 2.02 0 0 1-1.15 3.071a26.96 26.96 0 0 1-14.187 0a2.021 2.021 0 0 1-1.15-3.07l1.15-1.724a5.03 5.03 0 0 0 .844-2.79V9Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const LightSettingsIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M12.132 15.404a3.364 3.364 0 1 0 0-6.728a3.364 3.364 0 0 0 0 6.728" />
        <path d="M20.983 15.094a9.43 9.43 0 0 1-1.802 3.1l-2.124-.482a7.245 7.245 0 0 1-2.801 1.56l-.574 2.079a9.462 9.462 0 0 1-1.63.149a9.117 9.117 0 0 1-2.032-.23l-.609-2.146a7.475 7.475 0 0 1-2.457-1.493l-2.1.54a9.357 9.357 0 0 1-1.837-3.33l1.55-1.722a7.186 7.186 0 0 1 .069-2.652L3.107 8.872a9.356 9.356 0 0 1 2.067-3.353l2.17.54A7.68 7.68 0 0 1 9.319 4.91l.574-2.124a8.886 8.886 0 0 1 2.17-.287c.585 0 1.17.054 1.745.16l.551 2.113c.83.269 1.608.68 2.296 1.217l2.182-.563a9.368 9.368 0 0 1 2.043 3.1l-1.48 1.607a7.405 7.405 0 0 1 .068 3.364z" />
      </g>
    </svg>
  );
};

//  COMPANY LOGOS

export const LoopioIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon
    size={size}
    className={`${className} dark:invert`}
    src="/Loopio.png"
  />
);

export const NewIconTest = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src="/NewIconTest.svg" />
);

export const GitlabIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src="/Gitlab.png" />
);

export const GithubIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <FaGithub size={size} className={cn(className, "text-black")} />
);

export const GlobeIcon = ({
  size = 16,
  className = defaultTailwindCSSBlue,
}: IconProps) => {
  return <FiGlobe size={size} className={className} />;
};

export const GlobeIcon2 = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
    >
      <g stroke="#3B82F6" strokeLinecap="round" strokeLinejoin="round">
        <circle fill="transparent" cx="7" cy="7" r="6.5" />
        <path
          fill="transparent"
          d="M.5 7h13m-4 0A11.22 11.22 0 0 1 7 13.5A11.22 11.22 0 0 1 4.5 7A11.22 11.22 0 0 1 7 .5A11.22 11.22 0 0 1 9.5 7Z"
        />
      </g>
    </svg>
  );
};

export const GmailIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src="/Gmail.png" />
);

export const GoogleDriveIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src="/GoogleDrive.png" />
);

export const BookstackIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <SiBookstack size={size} className={className} />;
};

export const ConfluenceIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon
    size={size + 4}
    className={`${className} -m-0.5`}
    src={confluenceSVG}
  />
);

export const OCIStorageIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon
    size={size + 4}
    className={`${className} -m-0.5`}
    src={OCIStorageSVG}
  />
);

export const JiraIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size + 4} className={`${className} -m-0.5`} src={jiraSVG} />
);

export const ZulipIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => <LogoIcon size={size} className={className} src={zulipIcon} />;

export const OpenAIIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => <LogoIcon size={size} className={className} src={openAISVG} />;

export const GeminiIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => <LogoIcon size={size} className={className} src={geminiSVG} />;

export const AmazonIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => <LogoIcon size={size} className={className} src={amazonSVG} />;

export const MetaIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => <LogoIcon size={size} className={className} src={metaSVG} />;

export const DeepseekIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src={deepseekSVG} />
);

export const MicrosoftIconSVG = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src={microsoftSVG} />
);

export const MistralIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src={mistralSVG} />
);

export const VoyageIconSVG = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <svg
    style={{ width: `${size}px`, height: `${size}px` }}
    className={`w-[${size}px] h-[${size}px] ` + className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    width="200"
    height="200"
  >
    <path
      d="M0 0 C18.56364691 14.8685395 31.52865476 35.60458591 34.68359375 59.39453125 C36.85790415 84.17093249 31.86661083 108.64738046 15.83569336 128.38696289 C-0.18749615 147.32766215 -21.13158775 159.50726579 -46 162 C-70.46026633 163.68595557 -94.53744209 157.16585411 -113.375 141.1875 C-131.5680983 125.12913912 -143.31327081 103.12304227 -145.16845703 78.79052734 C-146.52072106 52.74671426 -138.40787353 29.42123969 -121 10 C-120.39929688 9.30519531 -119.79859375 8.61039063 -119.1796875 7.89453125 C-88.7732111 -25.07872563 -34.66251161 -26.29920259 0 0 Z M-111 6 C-111.96292969 6.76441406 -112.92585938 7.52882813 -113.91796875 8.31640625 C-129.12066 21.0326872 -138.48510826 41.64930525 -141 61 C-142.57102569 86.19086606 -137.40498471 109.10013392 -120.54980469 128.68505859 C-106.05757815 144.84161953 -85.8110604 156.92053779 -63.68798828 158.12597656 C-39.72189393 158.83868932 -17.08757891 154.40601729 1.1875 137.6875 C3.15800523 135.82115685 5.07881363 133.91852176 7 132 C8.22396484 130.7934375 8.22396484 130.7934375 9.47265625 129.5625 C26.2681901 112.046746 31.70691205 89.639394 31.3125 66 C30.4579168 43.32505919 19.07700136 22.58412979 3 7 C-29.27431062 -21.68827611 -78.26536136 -21.67509486 -111 6 Z "
      fill="currentColor"
      transform="translate(155,29)"
    />
    <path
      d="M0 0 C2.62278901 2.33427271 3.96735488 4.64596813 5.4453125 7.81640625 C6.10080078 9.20956055 6.10080078 9.20956055 6.76953125 10.63085938 C7.21683594 11.59830078 7.66414063 12.56574219 8.125 13.5625 C8.58003906 14.53380859 9.03507812 15.50511719 9.50390625 16.50585938 C10.34430119 18.30011504 11.18198346 20.09564546 12.01611328 21.89282227 C12.65935931 23.27045415 13.32005367 24.64010734 14 26 C12.02 26 10.04 26 8 26 C6.515 22.535 6.515 22.535 5 19 C1.7 19 -1.6 19 -5 19 C-5.99 21.31 -6.98 23.62 -8 26 C-9.32 26 -10.64 26 -12 26 C-10.34176227 20.46347949 -7.92776074 15.38439485 -5.4375 10.1875 C-5.02564453 9.31673828 -4.61378906 8.44597656 -4.18945312 7.54882812 C-1.13502139 1.13502139 -1.13502139 1.13502139 0 0 Z M-1 8 C-3.2013866 11.80427492 -3.2013866 11.80427492 -4 16 C-1.69 16 0.62 16 3 16 C2.43260132 11.87026372 2.43260132 11.87026372 1 8 C0.34 8 -0.32 8 -1 8 Z "
      fill="currentColor"
      transform="translate(158,86)"
    />
    <path
      d="M0 0 C2.64453125 1.0234375 2.64453125 1.0234375 4.4453125 4.296875 C4.96971298 5.65633346 5.47294966 7.0241056 5.95703125 8.3984375 C6.22064453 9.08421875 6.48425781 9.77 6.75585938 10.4765625 C7.8687821 13.4482107 8.64453125 15.82826389 8.64453125 19.0234375 C9.30453125 19.0234375 9.96453125 19.0234375 10.64453125 19.0234375 C10.75667969 18.34925781 10.86882813 17.67507812 10.984375 16.98046875 C11.77373626 13.44469078 12.95952974 10.10400184 14.20703125 6.7109375 C14.44099609 6.06576172 14.67496094 5.42058594 14.91601562 4.75585938 C15.48900132 3.17722531 16.06632589 1.60016724 16.64453125 0.0234375 C17.96453125 0.0234375 19.28453125 0.0234375 20.64453125 0.0234375 C20.11164835 5.93359329 17.66052325 10.65458241 15.08203125 15.8984375 C14.65728516 16.77757813 14.23253906 17.65671875 13.79492188 18.5625 C12.75156566 20.71955106 11.70131241 22.87294038 10.64453125 25.0234375 C9.65453125 25.0234375 8.66453125 25.0234375 7.64453125 25.0234375 C6.36851794 22.52596727 5.09866954 20.02565814 3.83203125 17.5234375 C3.29739258 16.47929688 3.29739258 16.47929688 2.75195312 15.4140625 C0.37742917 10.70858383 -1.58321849 5.98797449 -3.35546875 1.0234375 C-2.35546875 0.0234375 -2.35546875 0.0234375 0 0 Z "
      fill="currentColor"
      transform="translate(23.35546875,86.9765625)"
    />
    <path
      d="M0 0 C4.56944444 2.13888889 4.56944444 2.13888889 6 5 C6.58094684 9.76376411 6.98189835 13.6696861 4.0625 17.625 C-0.08290736 19.4862033 -3.52913433 19.80184004 -8 19 C-11.18487773 17.20850628 -12.56721386 16.06753914 -13.9375 12.6875 C-14.04047475 8.25958558 -13.25966827 4.50191217 -10.375 1.0625 C-6.92547207 -0.48070986 -3.67744273 -0.55453501 0 0 Z M-7.66796875 3.21484375 C-9.3387892 5.45403713 -9.40271257 6.72874309 -9.375 9.5 C-9.38273437 10.2734375 -9.39046875 11.046875 -9.3984375 11.84375 C-8.90844456 14.49547648 -8.12507645 15.38331504 -6 17 C-3.17884512 17.42317323 -1.66049093 17.38718434 0.8125 15.9375 C2.65621741 12.92932949 2.30257262 10.44932782 2 7 C1.54910181 4.59436406 1.54910181 4.59436406 0 3 C-4.00690889 1.63330935 -4.00690889 1.63330935 -7.66796875 3.21484375 Z "
      fill="currentColor"
      transform="translate(58,93)"
    />
    <path
      d="M0 0 C0.91007812 0.00902344 1.82015625 0.01804687 2.7578125 0.02734375 C3.45648438 0.03894531 4.15515625 0.05054687 4.875 0.0625 C5.205 1.3825 5.535 2.7025 5.875 4.0625 C4.6375 3.815 3.4 3.5675 2.125 3.3125 C-1.0391959 2.93032359 -1.83705309 2.89394571 -4.6875 4.5625 C-6.71059726 8.08093001 -6.12332701 10.21181009 -5.125 14.0625 C-3.22744856 16.41223818 -3.22744856 16.41223818 0 16.1875 C0.94875 16.14625 1.8975 16.105 2.875 16.0625 C2.875 14.4125 2.875 12.7625 2.875 11.0625 C4.525 11.3925 6.175 11.7225 7.875 12.0625 C8.1875 14.375 8.1875 14.375 7.875 17.0625 C5.25185816 19.29988569 3.33979578 19.9932751 -0.0625 20.5 C-3.96030088 19.9431713 -6.06489651 18.49667323 -9.125 16.0625 C-11.6165904 12.3251144 -11.58293285 10.48918417 -11.125 6.0625 C-7.83836921 1.02299945 -5.86190884 -0.07515268 0 0 Z "
      fill="currentColor"
      transform="translate(113.125,92.9375)"
    />
    <path
      d="M0 0 C4.28705043 1.42901681 5.23208702 4.57025431 7.1875 8.375 C7.55552734 9.06078125 7.92355469 9.7465625 8.30273438 10.453125 C11 15.59744608 11 15.59744608 11 19 C9.35 19 7.7 19 6 19 C5.67 17.68 5.34 16.36 5 15 C2.03 14.67 -0.94 14.34 -4 14 C-4.33 15.65 -4.66 17.3 -5 19 C-5.99 19 -6.98 19 -8 19 C-7.38188466 14.44684052 -5.53234107 10.71540233 -3.4375 6.6875 C-2.9434668 5.71973633 -2.9434668 5.71973633 -2.43945312 4.73242188 C-1.63175745 3.15214772 -0.81662387 1.57567895 0 0 Z M0 6 C-0.33 7.65 -0.66 9.3 -1 11 C0.32 11 1.64 11 3 11 C2.34 9.35 1.68 7.7 1 6 C0.67 6 0.34 6 0 6 Z "
      fill="currentColor"
      transform="translate(90,93)"
    />
    <path
      d="M0 0 C3.63 0 7.26 0 11 0 C11 0.66 11 1.32 11 2 C8.69 2 6.38 2 4 2 C4 3.98 4 5.96 4 8 C5.98 8 7.96 8 10 8 C9.67 8.99 9.34 9.98 9 11 C7.68 11 6.36 11 5 11 C4.67 12.98 4.34 14.96 4 17 C7.465 16.505 7.465 16.505 11 16 C11 16.99 11 17.98 11 19 C7.37 19 3.74 19 0 19 C0 12.73 0 6.46 0 0 Z "
      fill="currentColor"
      transform="translate(124,93)"
    />
    <path
      d="M0 0 C2.25 -0.3125 2.25 -0.3125 5 0 C9 4.10810811 9 4.10810811 9 7 C9.78375 6.21625 10.5675 5.4325 11.375 4.625 C12.91666667 3.08333333 14.45833333 1.54166667 16 0 C16.99 0 17.98 0 19 0 C17.84356383 2.5056117 16.63134741 4.4803655 14.9375 6.6875 C12.52118995 10.81861073 12.20924288 14.29203528 12 19 C10.68 19 9.36 19 8 19 C8.00902344 18.443125 8.01804687 17.88625 8.02734375 17.3125 C7.78294047 11.0217722 5.92390505 8.0388994 1.49609375 3.62890625 C0 2 0 2 0 0 Z "
      fill="currentColor"
      transform="translate(64,93)"
    />
    <path
      d="M0 0 C1.32 0 2.64 0 4 0 C4 8.25 4 16.5 4 25 C2.68 25 1.36 25 0 25 C0 16.75 0 8.5 0 0 Z "
      fill="currentColor"
      transform="translate(173,87)"
    />
    <path
      d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.125 5.75 1.125 5.75 0 8 C1.093125 7.95875 2.18625 7.9175 3.3125 7.875 C7 8 7 8 10 10 C4.555 10.495 4.555 10.495 -1 11 C-1.99 13.31 -2.98 15.62 -4 18 C-5.32 18 -6.64 18 -8 18 C-6.65150163 13.64029169 -4.95092154 9.68658562 -2.875 5.625 C-2.33617187 4.56539063 -1.79734375 3.50578125 -1.2421875 2.4140625 C-0.83226562 1.61742188 -0.42234375 0.82078125 0 0 Z "
      fill="currentColor"
      transform="translate(154,94)"
    />
    <path
      d="M0 0 C0.66 0.33 1.32 0.66 2 1 C2 1.66 2 2.32 2 3 C1.34 3 0.68 3 0 3 C-0.05429959 4.74965358 -0.09292823 6.49979787 -0.125 8.25 C-0.14820313 9.22453125 -0.17140625 10.1990625 -0.1953125 11.203125 C0.00137219 14.0196498 0.55431084 15.60949036 2 18 C1.34 18.33 0.68 18.66 0 19 C-4.69653179 15.74855491 -4.69653179 15.74855491 -5.9375 12.6875 C-6.02161912 9.07037805 -5.30970069 6.36780178 -4 3 C-1.875 1.0625 -1.875 1.0625 0 0 Z "
      fill="currentColor"
      transform="translate(50,93)"
    />
    <path
      d="M0 0 C2.79192205 -0.05380578 5.5828141 -0.09357669 8.375 -0.125 C9.1690625 -0.14175781 9.963125 -0.15851563 10.78125 -0.17578125 C12.85492015 -0.19335473 14.92883241 -0.10335168 17 0 C17.66 0.66 18.32 1.32 19 2 C17 4 17 4 13.0859375 4.1953125 C11.51550649 4.18200376 9.94513779 4.15813602 8.375 4.125 C7.57320312 4.11597656 6.77140625 4.10695312 5.9453125 4.09765625 C3.96341477 4.07406223 1.98167019 4.03819065 0 4 C0 2.68 0 1.36 0 0 Z "
      fill="currentColor"
      transform="translate(92,187)"
    />
    <path
      d="M0 0 C0.99 0.33 1.98 0.66 3 1 C1.66666667 4.33333333 0.33333333 7.66666667 -1 11 C0.65 11 2.3 11 4 11 C4 11.33 4 11.66 4 12 C1.36 12.33 -1.28 12.66 -4 13 C-4.33 14.98 -4.66 16.96 -5 19 C-5.99 19 -6.98 19 -8 19 C-7.38188466 14.44684052 -5.53234107 10.71540233 -3.4375 6.6875 C-2.9434668 5.71973633 -2.9434668 5.71973633 -2.43945312 4.73242188 C-1.63175745 3.15214772 -0.81662387 1.57567895 0 0 Z "
      fill="currentColor"
      transform="translate(90,93)"
    />
    <path
      d="M0 0 C0.99 0 1.98 0 3 0 C2.43454163 3.95820859 1.19097652 6.6659053 -1 10 C-1.66 9.67 -2.32 9.34 -3 9 C-2.44271087 5.65626525 -1.64826111 2.96687001 0 0 Z "
      fill="currentColor"
      transform="translate(37,97)"
    />
    <path
      d="M0 0 C4.92127034 -0.16682272 8.50343896 -0.24828052 13 2 C9.60268371 4.09065618 6.95730595 4.42098999 3 4 C1.125 2.5625 1.125 2.5625 0 1 C0 0.67 0 0.34 0 0 Z "
      fill="currentColor"
      transform="translate(110,12)"
    />
    <path
      d="M0 0 C0 0.99 0 1.98 0 3 C-3.08888522 5.05925681 -3.70935927 5.2390374 -7.1875 5.125 C-9.0746875 5.063125 -9.0746875 5.063125 -11 5 C-10.67 4.34 -10.34 3.68 -10 3 C-7.96875 2.40234375 -7.96875 2.40234375 -5.5 1.9375 C-2.46226779 1.54135157 -2.46226779 1.54135157 0 0 Z "
      fill="currentColor"
      transform="translate(62,107)"
    />
    <path
      d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.25 5.75 1.25 5.75 -1 8 C-1.66 8 -2.32 8 -3 8 C-1.125 1.125 -1.125 1.125 0 0 Z "
      fill="currentColor"
      transform="translate(154,94)"
    />
    <path
      d="M0 0 C2.64 0 5.28 0 8 0 C8.33 1.32 8.66 2.64 9 4 C6.03 3.01 3.06 2.02 0 1 C0 0.67 0 0.34 0 0 Z "
      fill="currentColor"
      transform="translate(110,93)"
    />
    <path
      d="M0 0 C1.67542976 0.28604898 3.34385343 0.61781233 5 1 C4.67 2.32 4.34 3.64 4 5 C2.0625 4.6875 2.0625 4.6875 0 4 C-0.33 3.01 -0.66 2.02 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z "
      fill="currentColor"
      transform="translate(21,87)"
    />
  </svg>
);

export const GoogleIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src={googleIcon} />
);

export const CohereIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src={cohereIcon} />
);

export const GoogleStorageIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon
    size={size + 4}
    className={`${className} -m-0.5`}
    src={googleCloudStorageIcon}
  />
);

export const ProductboardIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src="/Productboard.png" />
);

export const AzureIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => <LogoIcon size={size} className={className} src={azureIcon} />;

export const LinearIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src={linearIcon} />
);

export const SlabIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src="/SlabLogo.png" />
);

export const NotionIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src="/Notion.png" />
);

export const GuruIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => <LogoIcon size={size} className={className} src={guruIcon} />;

export const SalesforceIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src={salesforceIcon} />
);

export const R2Icon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => <LogoIcon size={size} className={className} src={r2Icon} />;

export const S3Icon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => <LogoIcon size={size} className={className} src={s3Icon} />;

export const SharepointIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src={sharepointIcon} />
);

export const TeamsIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => <LogoIcon size={size} className={className} src={teamsIcon} />;

export const GongIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => <LogoIcon size={size} className={className} src={gongIcon} />;

export const HubSpotIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src={hubSpotIcon} />
);

export const Document360Icon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src={document360Icon} />
);

export const GoogleSitesIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src={googleSitesIcon} />
);
export const ZendeskIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <div
    className="rounded-full overflow-visible dark:overflow-hidden flex items-center justify-center dark:bg-[#fff]/90"
    style={{ width: size, height: size }}
  >
    <LogoIcon
      size={
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? size * 0.8
          : size
      }
      className={`${className}`}
      src={zendeskIcon}
    />
  </div>
);

export const DropboxIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src={dropboxIcon} />
);

export const DiscourseIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src={discourseIcon} />
);

export const AxeroIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src="/Axero.jpeg" />
);

export const ClickupIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src={clickupIcon} />
);

export const MediaWikiIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src={mediawikiIcon} />
);

export const WikipediaIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src={wikipediaIcon} />
);

export const XenforoIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src={xenforoIcon} />
);

export const AsanaIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => <LogoIcon size={size} className={className} src={asanaIcon} />;

export const FreshdeskIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src={freshdeskIcon} />
);

export const FirefliesIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <LogoIcon size={size} className={className} src={firefliesIcon} />
);

/* 
EE Icons
*/

export const BarChartIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <FiBarChart2 size={size} className={className} />;
};

//  Admin Icons

export const NotebookIconSkeleton = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
      />
    </svg>
  );
};

export const NotebookIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555a.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533Zm1.5 16.103A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"
      />
    </svg>
  );
};

export const ConnectorIconSkeleton = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775a5.25 5.25 0 0 1 10.233-2.33a3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
      />
    </svg>
  );
};

export const ConnectorIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 13a3.5 3.5 0 0 1-1.41-6.705a3.5 3.5 0 0 1 6.63-2.171a2.5 2.5 0 0 1 3.197 3.018A3.001 3.001 0 0 1 12 13zm.72-5.03a.75.75 0 0 0 1.06 1.06l.97-.97v2.69a.75.75 0 0 0 1.5 0V8.06l.97.97a.75.75 0 1 0 1.06-1.06L8.53 5.72a.75.75 0 0 0-1.06 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const DocumentSetIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M22 9.885v7.7a3.85 3.85 0 0 1-2.373 3.542a3.8 3.8 0 0 1-1.467.288H5.83A3.82 3.82 0 0 1 2 17.585V6.425a3.82 3.82 0 0 1 3.83-3.84h3.08a3.87 3.87 0 0 1 3.2 1.71l.87 1.33a1 1 0 0 0 .36.32a.94.94 0 0 0 .47.12h4.35a3.79 3.79 0 0 1 2.71 1.11A3.85 3.85 0 0 1 22 9.885"
      />
    </svg>
  );
};

export const DocumentSetIconSkeleton = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21.25 9.883v7.698a3.083 3.083 0 0 1-3.083 3.083H5.833a3.083 3.083 0 0 1-3.083-3.083V6.419a3.083 3.083 0 0 1 3.083-3.083h3.084a3.083 3.083 0 0 1 2.57 1.377l.873 1.326a1.748 1.748 0 0 0 1.449.77h4.358a3.084 3.084 0 0 1 3.083 3.074"
      />
    </svg>
  );
};
export const BookmarkIconSkeleton = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25L4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
      />
    </svg>
  );
};
export const BookmarkIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M3.75 2a.75.75 0 0 0-.75.75v10.5a.75.75 0 0 0 1.28.53L8 10.06l3.72 3.72a.75.75 0 0 0 1.28-.53V2.75a.75.75 0 0 0-.75-.75z"
      />
    </svg>
  );
};

export const BookIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        d="M10.75 16.82A7.462 7.462 0 0 1 15 15.5a7.5 7.5 0 0 1 2.046.282a.75.75 0 0 0 .954-.722v-11a.75.75 0 0 0-.546-.721A9.006 9.006 0 0 0 15 3a8.963 8.963 0 0 0-4.25 1.065V16.82ZM9.25 4.065A8.963 8.963 0 0 0 5 3a9 9 0 0 0-2.454.339A.75.75 0 0 0 2 4.06v11a.75.75 0 0 0 .954.721A7.506 7.506 0 0 1 5 15.5c1.579 0 3.042.487 4.25 1.32V4.065Z"
      />
    </svg>
  );
};

export const ZoomInIconSkeleton = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0a2.625 2.625 0 0 1 5.25 0Z"
      />
    </svg>
  );
};

export const ZoomInIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 20 20"
    >
      <g fill="currentColor">
        <path d="M8 10a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z" />
        <path
          fillRule="evenodd"
          d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm5 5a3 3 0 1 0 1.524 5.585l1.196 1.195a.75.75 0 1 0 1.06-1.06l-1.195-1.196A3 3 0 0 0 9.5 7Z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
};

export const ThumbsUpIconSkeleton = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.625 9.75a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227c1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332a48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
      />
    </svg>
  );
};

export const FilledLikeIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 14 14"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.41 12.961a2.5 2.5 0 0 0 1.076.244h5.346a2.5 2.5 0 0 0 2.47-2.114l.626-4.003a2 2 0 0 0-1.976-2.31H8.67V2.422a1.625 1.625 0 0 0-3.044-.794l-2.077 3.71a1.5 1.5 0 0 0-.191.733v5.442a1.5 1.5 0 0 0 .854 1.354l.2.095Zm-3.366-7.44a.996.996 0 0 0-.997.996v5.112a.997.997 0 0 0 .997.997h.496a.5.5 0 0 0 .5-.5V6.02a.5.5 0 0 0-.5-.5h-.496Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const StopGeneratingIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 14 14"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 0A1.5 1.5 0 0 0 0 1.5v11A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const LikeFeedbackIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M5.75 9.415H4.568c-.98 0-1.775.794-1.775 1.775v8.284c0 .98.795 1.776 1.775 1.776h1.184c.98 0 1.775-.795 1.775-1.776V11.19c0-.98-.795-1.775-1.775-1.775" />
        <path d="m21.16 12.243l-1.42 7.101a2.367 2.367 0 0 1-2.367 1.906h-7.48a2.367 2.367 0 0 1-2.367-2.367v-7.101A3.231 3.231 0 0 1 8.71 9.415l.982-5.918a.888.888 0 0 1 1.278-.65l1.1.544a3.55 3.55 0 0 1 1.87 4.047l-.496 1.965h5.396a2.367 2.367 0 0 1 2.32 2.84" />
      </g>
    </svg>
  );
};

export const CopyMessageIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M18.327 7.286h-8.044a1.932 1.932 0 0 0-1.925 1.938v10.088c0 1.07.862 1.938 1.925 1.938h8.044a1.932 1.932 0 0 0 1.925-1.938V9.224c0-1.07-.862-1.938-1.925-1.938" />
        <path d="M15.642 7.286V4.688c0-.514-.203-1.007-.564-1.37a1.918 1.918 0 0 0-1.361-.568H5.673c-.51 0-1 .204-1.36.568a1.945 1.945 0 0 0-.565 1.37v10.088c0 .514.203 1.007.564 1.37c.361.364.85.568 1.361.568h2.685" />
      </g>
    </svg>
  );
};

export const DislikeFeedbackIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M5.75 2.75H4.568c-.98 0-1.775.795-1.775 1.776v8.284c0 .98.795 1.775 1.775 1.775h1.184c.98 0 1.775-.794 1.775-1.775V4.526c0-.98-.795-1.776-1.775-1.776" />
        <path d="m21.16 11.757l-1.42-7.101a2.368 2.368 0 0 0-2.367-1.906h-7.48a2.367 2.367 0 0 0-2.367 2.367v7.101a3.231 3.231 0 0 0 1.184 2.367l.982 5.918a.887.887 0 0 0 1.278.65l1.1-.543a3.551 3.551 0 0 0 1.87-4.048l-.496-1.965h5.396a2.368 2.368 0 0 0 2.32-2.84" />
      </g>
    </svg>
  );
};

export const ThumbsUpIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <FiThumbsUp size={size} className={className} />;
};

export const RobotIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <FaRobot size={size} className={className} />;
};

export const SlackIconSkeleton = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 14 14"
    >
      <g fill="none" stroke="currentColor">
        <path d="M5.5 2a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m6 4a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m-4 6a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m-6-4a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.793 1.219v4.937m-3.59 1.692v4.937M1.215 5.207h4.937m1.692 3.59h4.937"
        />
      </g>
    </svg>
  );
};

export const SlackIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M16.923 16.52h-2.39a1.984 1.984 0 0 1-1.973-1.195a2.006 2.006 0 0 1 .47-2.263a1.99 1.99 0 0 1 1.502-.53h4.858a1.978 1.978 0 0 1 1.969 1.63a1.951 1.951 0 0 1-1.147 2.173a2.21 2.21 0 0 1-.876.174c-.8.022-1.601.01-2.413.01m-9.435.501v-2.477a2.003 2.003 0 0 1 .56-1.402a1.987 1.987 0 0 1 1.377-.608a1.942 1.942 0 0 1 1.393.522c.377.352.6.84.62 1.357c.043 1.738.043 3.477 0 5.215A1.94 1.94 0 0 1 10.805 21a1.922 1.922 0 0 1-1.423.495a1.954 1.954 0 0 1-1.359-.614a1.97 1.97 0 0 1-.535-1.395c-.01-.815 0-1.64 0-2.466m8.938-9.963v2.434a1.996 1.996 0 0 1-.524 1.5a1.98 1.98 0 0 1-2.242.469a1.981 1.981 0 0 1-1.078-1.165a1.996 1.996 0 0 1-.106-.804V4.46a1.963 1.963 0 0 1 .605-1.386a1.947 1.947 0 0 1 1.408-.537a1.962 1.962 0 0 1 1.383.602a1.979 1.979 0 0 1 .553 1.408c.011.836 0 1.673 0 2.51M6.97 11.511H4.545a1.962 1.962 0 0 1-1.393-.579a1.978 1.978 0 0 1-.427-2.155a1.978 1.978 0 0 1 1.066-1.07a1.97 1.97 0 0 1 .754-.15h4.923a1.962 1.962 0 0 1 1.392.579a1.98 1.98 0 0 1-1.392 3.375zm4.478-6.171v.902c0 .18-.06.261-.216.261H9.165A1.916 1.916 0 0 1 7.9 5.787a1.929 1.929 0 0 1-.4-1.402c.022-.492.227-.958.574-1.306a1.965 1.965 0 0 1 3.342 1.12c.032.38.032.487.032.832v.214zm-5.009 7.204c.06.813.06 1.63 0 2.444a1.902 1.902 0 0 1-.754 1.18a1.887 1.887 0 0 1-1.356.34a1.988 1.988 0 0 1-1.293-.627a2.003 2.003 0 0 1-.536-1.338a1.96 1.96 0 0 1 .497-1.346c.33-.369.786-.599 1.278-.643c.736-.065 1.471-.01 2.164-.01M17.443 11.5V9.329c.052-.509.299-.977.689-1.305c.39-.329.891-.492 1.399-.455c.522 0 1.023.208 1.392.579a1.981 1.981 0 0 1 0 2.796c-.37.371-.87.58-1.392.58c-.671 0-1.363-.022-2.088-.022m-4.967 6.072c.8-.055 1.603-.055 2.402 0c.488.09.92.367 1.208.773c.286.406.405.908.329 1.4a1.99 1.99 0 0 1-.67 1.264a1.98 1.98 0 0 1-1.343.485a1.922 1.922 0 0 1-1.314-.528a1.937 1.937 0 0 1-.6-1.287c-.044-.695-.012-1.401-.012-2.107"
      />
    </svg>
  );
};

export const ToolIconSkeleton = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
        <path d="M4.867 19.125h.008v.008h-.008v-.008Z" />
      </g>
    </svg>
  );
};
export const ToolIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025a.75.75 0 0 1 .313 1.248l-3.32 3.319a2.248 2.248 0 0 0 1.941 1.939l3.318-3.319a.75.75 0 0 1 1.248.313a5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const CpuIconSkeleton = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
      />
    </svg>
  );
};
export const CpuIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <g fill="currentColor">
        <path d="M16.5 7.5h-9v9h9v-9Z" />
        <path
          fillRule="evenodd"
          d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
};

export const EmbeddingIconSkeleton = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
      />
    </svg>
  );
};

export const EmbeddingIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const PackageIconSkeleton = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
      />
    </svg>
  );
};
export const PackageIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 20 20"
    >
      <g fill="currentColor">
        <path d="M2 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2Z" />
        <path
          fillRule="evenodd"
          d="M2 7.5h16l-.811 7.71a2 2 0 0 1-1.99 1.79H4.802a2 2 0 0 1-1.99-1.79L2 7.5ZM7 11a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
};
export const UsersIconSkeleton = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="6" r="4" />
        <path
          strokeLinecap="round"
          d="M19.997 18c.003-.164.003-.331.003-.5c0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S4 22 12 22c2.231 0 3.84-.157 5-.437"
        />
      </g>
    </svg>
  );
};
export const UsersIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M8 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m4.735 6c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139z"
      />
    </svg>
  );
  // return <FiUser size={size} className={className} />;
};

export const GroupsIconSkeleton = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="6" r="4" />
        <path strokeLinecap="round" d="M15 9a3 3 0 1 0 0-6" />
        <ellipse cx="9" cy="17" rx="7" ry="4" />
        <path
          strokeLinecap="round"
          d="M18 14c1.754.385 3 1.359 3 2.5c0 1.03-1.014 1.923-2.5 2.37"
        />
      </g>
    </svg>
  );
};
export const GroupsIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M8.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2.4 7.506c.11.542-.348.994-.9.994H2c-.553 0-1.01-.452-.902-.994a5.002 5.002 0 0 1 9.803 0M14.002 12h-1.59a2.556 2.556 0 0 0-.04-.29a6.476 6.476 0 0 0-1.167-2.603a3.002 3.002 0 0 1 3.633 1.911c.18.522-.283.982-.836.982M12 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
      />
    </svg>
  );
};
export const KeyIconSkeleton = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
      />
    </svg>
  );
};
export const KeyIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 7a5 5 0 1 1 3.61 4.804l-1.903 1.903A1 1 0 0 1 9 14H8v1a1 1 0 0 1-1 1H6v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 .293-.707L8.196 8.39A5.002 5.002 0 0 1 8 7Zm5-3a.75.75 0 0 0 0 1.5A1.5 1.5 0 0 1 14.5 7A.75.75 0 0 0 16 7a3 3 0 0 0-3-3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export const ShieldIconSkeleton = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 12.75L11.25 15L15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6A11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623c5.176-1.332 9-6.03 9-11.622c0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  );
};
export const ShieldIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.5 1.709a.75.75 0 0 0-1 0a8.963 8.963 0 0 1-4.84 2.217a.75.75 0 0 0-.654.72a10.499 10.499 0 0 0 5.647 9.672a.75.75 0 0 0 .694-.001a10.499 10.499 0 0 0 5.647-9.672a.75.75 0 0 0-.654-.719A8.963 8.963 0 0 1 8.5 1.71m2.34 5.504a.75.75 0 0 0-1.18-.926L7.394 9.17l-1.156-.99a.75.75 0 1 0-.976 1.138l1.75 1.5a.75.75 0 0 0 1.078-.106z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export const DatabaseIconSkeleton = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" d="M4 18V6m16 0v12" />
        <path d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4s-8 1.79-8 4s3.582 4 8 4Zm8 2c0 2.21-3.582 4-8 4s-8-1.79-8-4m16 6c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </g>
    </svg>
  );
};
export const DatabaseIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 14 14"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M.552 2.278c0-.155.077-.368.357-.63c.28-.262.722-.527 1.319-.762C3.418.416 5.105.112 7 .112c1.895 0 3.582.304 4.772.774c.597.235 1.038.5 1.32.762c.28.262.356.475.356.63c0 .155-.077.368-.357.63c-.28.261-.722.526-1.319.762c-1.19.47-2.877.774-4.772.774c-1.895 0-3.582-.304-4.772-.774c-.597-.236-1.038-.5-1.32-.763c-.28-.261-.356-.474-.356-.63Zm12.96 1.89a6.317 6.317 0 0 1-1.281.665c-1.37.54-3.22.86-5.231.86c-2.012 0-3.861-.32-5.231-.86a6.315 6.315 0 0 1-1.281-.666v3.178c.056.085.135.178.246.279c.29.263.745.53 1.36.766c1.224.471 2.959.776 4.906.776c1.947 0 3.682-.305 4.907-.776c.614-.237 1.069-.503 1.359-.766c.11-.101.19-.194.246-.28zM.488 11.208V8.993c.341.213.732.4 1.156.564c1.402.539 3.295.859 5.356.859c2.06 0 3.954-.32 5.356-.86a6.821 6.821 0 0 0 1.156-.563v2.216C13.512 12.749 10.597 14 7 14C3.403 14 .488 12.75.488 11.209Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export const SettingsIconSkeleton = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" d="M4 18V6m16 0v12" />
        <path d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4s-8 1.79-8 4s3.582 4 8 4Zm8 2c0 2.21-3.582 4-8 4s-8-1.79-8-4m16 6c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </g>
    </svg>
  );
};
export const SettingsIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m21.51 14.59l-1.25-1.32a7.878 7.878 0 0 0-.06-2.9l1.22-1.32a.76.76 0 0 0 .14-.79a10.257 10.257 0 0 0-2.2-3.35a.74.74 0 0 0-.72-.19l-1.84.47a8.48 8.48 0 0 0-1.83-1l-.45-1.72a.73.73 0 0 0-.59-.55a9.92 9.92 0 0 0-1.89-.17a9.36 9.36 0 0 0-2.35.31a.73.73 0 0 0-.53.53l-.48 1.77a8.23 8.23 0 0 0-1.52.88l-1.82-.45a.73.73 0 0 0-.72.21a10 10 0 0 0-2.23 3.62a.76.76 0 0 0 .16.77l1.26 1.31a8.85 8.85 0 0 0-.1 1.27c0 .3 0 .6.05.9l-1.31 1.46a.75.75 0 0 0-.16.73a10 10 0 0 0 2 3.59a.75.75 0 0 0 .76.24l1.72-.44a7.918 7.918 0 0 0 2 1.23l.5 1.79a.77.77 0 0 0 .56.53c.721.163 1.459.247 2.2.25c.59-.006 1.178-.063 1.76-.17a.75.75 0 0 0 .59-.53l.47-1.69a8.109 8.109 0 0 0 2.38-1.34l1.76.4a.74.74 0 0 0 .73-.24a10.118 10.118 0 0 0 2-3.34a.76.76 0 0 0-.21-.75m-9.39 1.27a3.81 3.81 0 1 1-.021-7.619a3.81 3.81 0 0 1 .02 7.62"
      />
    </svg>
  );
};

export const PaintingIconSkeleton = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 14 14"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1.5 12h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1" />
        <path d="M9.502 6.212a1.245 1.245 0 1 0 0-2.49a1.245 1.245 0 0 0 0 2.49M9.083 12a7.098 7.098 0 0 0-7.136-5.786A7.6 7.6 0 0 0 .5 6.349" />
        <path d="M13.5 8.94a7.716 7.716 0 0 0-5.506.225" />
      </g>
    </svg>
  );
};

export const ImageIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
};

export const PaintingIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 36 36"
    >
      <path
        fill="currentColor"
        d="M32 4H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM8.92 8a3 3 0 1 1-3 3a3 3 0 0 1 3-3ZM6 27v-4.1l6-6.08a1 1 0 0 1 1.41 0L16 19.35L8.32 27Zm24 0H11.15l6.23-6.23l5.4-5.4a1 1 0 0 1 1.41 0L30 21.18Z"
      />
      <path fill="none" d="M0 0h36v36H0z" />
    </svg>
  );
};

export const StarIconSkeleton = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m14.92 8.797l-.624 1.86a4.75 4.75 0 0 1-3.029 3.03l-1.882.626a.316.316 0 0 0 0 .601l1.882.626a4.744 4.744 0 0 1 3.005 3.007l.625 1.883a.317.317 0 0 0 .6 0l.649-1.86a4.749 4.749 0 0 1 3.005-3.007l1.881-.625a.316.316 0 0 0 0-.601l-1.858-.65a4.744 4.744 0 0 1-3.028-3.03l-.625-1.884a.317.317 0 0 0-.6.024M6.859 3.516l-.446 1.329A3.392 3.392 0 0 1 4.25 7.01l-1.345.446a.226.226 0 0 0 0 .43l1.345.447a3.388 3.388 0 0 1 2.146 2.148l.446 1.345a.226.226 0 0 0 .43 0l.462-1.328A3.392 3.392 0 0 1 9.88 8.35l1.345-.447a.226.226 0 0 0 0-.43L9.897 7.01a3.388 3.388 0 0 1-2.163-2.165l-.446-1.346a.226.226 0 0 0-.43.017"
      />
    </svg>
  );
};

export const SwapIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M3.53 11.47v2.118a4.235 4.235 0 0 0 4.235 4.236H20.47M3.53 6.176h12.705a4.235 4.235 0 0 1 4.236 4.236v2.117" />
        <path d="m17.294 14.647l3.177 3.176L17.294 21M6.706 9.353L3.529 6.176L6.706 3" />
      </g>
    </svg>
  );
};

export const ClosedBookIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 14 14"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.5 13.54H3a1.5 1.5 0 0 1 0-3h8.5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H3A1.5 1.5 0 0 0 1.5 2v10m10-1.46v3"
      />
    </svg>
  );
};

export const PinIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m17.942 6.076l2.442 2.442a1.22 1.22 0 0 1-.147 1.855l-1.757.232a1.697 1.697 0 0 0-.94.452c-.72.696-1.453 1.428-2.674 2.637c-.21.212-.358.478-.427.769l-.94 3.772a1.22 1.22 0 0 1-1.978.379l-3.04-3.052l-3.052-3.04a1.221 1.221 0 0 1 .379-1.978l3.747-.964a1.8 1.8 0 0 0 .77-.44c1.379-1.355 1.88-1.855 2.66-2.698c.233-.25.383-.565.428-.903l.232-1.783a1.221 1.221 0 0 1 1.856-.146zm-9.51 9.498L3.256 20.75"
      />
    </svg>
  );
};

export const TwoRightArrowIcons = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m5.36 19l5.763-5.763a1.738 1.738 0 0 0 0-2.474L5.36 5m7 14l5.763-5.763a1.738 1.738 0 0 0 0-2.474L12.36 5"
      />
    </svg>
  );
};

export const PlusIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5z"
      />
    </svg>
  );
};

export const MinusIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z"
      />
    </svg>
  );
};

export const CameraIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 14 14"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13.5 5a1 1 0 0 0-1-1h-2L9 2H5L3.5 4h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1z" />
        <path d="M7 9.75a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5" />
      </g>
    </svg>
  );
};

export const MacIcon = ({
  size = 16,
  className = "my-auto flex flex-shrink-0 ",
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M6.5 4.5a2 2 0 0 1 2 2v2h-2a2 2 0 1 1 0-4Zm4 4v-2a4 4 0 1 0-4 4h2v3h-2a4 4 0 1 0 4 4v-2h3v2a4 4 0 1 0 4-4h-2v-3h2a4 4 0 1 0-4-4v2h-3Zm0 2h3v3h-3v-3Zm5-2v-2a2 2 0 1 1 2 2h-2Zm0 7h2a2 2 0 1 1-2 2v-2Zm-7 0v2a2 2 0 1 1-2-2h2Z"
      />
    </svg>
  );
};

export const DocumentIcon2 = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
    </svg>
  );
};

export const WindowsIcon = ({
  size = 16,
  className = "my-auto flex flex-shrink-0 ",
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        fill="currentColor"
        d="M3 3h8v8H3V3zm10 0h8v8h-8V3zm-10 10h8v8H3v-8zm10 0h8v8h-8v-8z"
      />
    </svg>
  );
};

export const OpenIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 14 14"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 13.5a9.26 9.26 0 0 0-5.61-2.95a1 1 0 0 1-.89-1V1.5A1 1 0 0 1 1.64.51A9.3 9.3 0 0 1 7 3.43zm0 0a9.26 9.26 0 0 1 5.61-2.95a1 1 0 0 0 .89-1V1.5a1 1 0 0 0-1.14-.99A9.3 9.3 0 0 0 7 3.43z"
      />
    </svg>
  );
};

export const DexpandTwoIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 14 14"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m.5 13.5l5-5m-4 0h4v4m8-12l-5 5m4 0h-4v-4"
      />
    </svg>
  );
};

export const ExpandTwoIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 14 14"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.5 5.5l5-5m-4 0h4v4m-8 4l-5 5m4 0h-4v-4"
      />
    </svg>
  );
};

export const DownloadCSVIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 14 14"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M.5 10.5v1a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1M4 6l3 3.5L10 6M7 9.5v-9"
      />
    </svg>
  );
};

export const UserIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19.618 21.25c0-3.602-4.016-6.53-7.618-6.53c-3.602 0-7.618 2.928-7.618 6.53M12 11.456a4.353 4.353 0 1 0 0-8.706a4.353 4.353 0 0 0 0 8.706"
      />
    </svg>
  );
};

export const EgnyteIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <LogoIcon size={size} className={className} src={egnyteIcon} />;
};

export const AirtableIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <LogoIcon size={size} className={className} src={airtableIcon} />;
};

export const GitbookIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => (
  <div className="flex items-center justify-center">
    <div className="dark:hidden">
      <LogoIcon size={size} className={className} src={gitbookDarkIcon} />
    </div>
    <div className="hidden dark:block">
      <LogoIcon size={size} className={className} src={gitbookLightIcon} />
    </div>
  </div>
);

export const HighspotIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return <LogoIcon size={size} className={className} src={highspotIcon} />;
};

export const PinnedIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M5.33165 8.74445L1 13M2.33282 5.46113L8.4591 11.4798L9.58999 10.3688L9.32809 7.88941L13 4.83L9.10152 1L5.98673 4.6074L3.46371 4.3501L2.33282 5.46113Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const OnyxLogoTypeIcon = ({
  size = 16, // You might want to adjust the default size for a logotype
  className = defaultTailwindCSS,
}: IconProps) => {
  // Updated aspect ratio for the new "ContentBuilder.ai" SVG (572 / 47)
  const aspectRatio = 572 / 47;
  const height = size / aspectRatio;

  // Updated viewBox for the new "ContentBuilder.ai" SVG
  const svgViewBox = "0 0 572 47";

  return (
    <svg
      // The 'width', 'height', and 'fill="none"' attributes from your provided SVG
      // are not strictly needed here as they are controlled by props/CSS below.
      xmlns="http://www.w3.org/2000/svg"
      width={size} // Calculated width based on size prop
      height={height} // Calculated height based on size prop and aspect ratio
      viewBox={svgViewBox}
      style={{ width: `${size}px`, height: `${height}px` }} // Inline styles for explicit sizing
      className={`w-[${size}px] h-[${height}px] ` + className} // Tailwind classes
      // The 'fill' on the parent SVG is intended to be 'currentColor' via className.
      // For this to apply to the paths, their fill should be 'currentColor'.
    >
      {/* START: NEW SVG code for "ContentBuilder.ai" */}
      {/* Note: fill="white" has been changed to fill="currentColor" on paths */}
      <path d="M553.842 45.9186V12.5233H559.023V17.5673H559.387C560.023 15.915 561.175 14.5742 562.842 13.5451C564.508 12.516 566.387 12.0014 568.478 12.0014C568.872 12.0014 569.364 12.0087 569.955 12.0232C570.546 12.0377 570.993 12.0594 571.296 12.0884V17.3064C571.114 17.263 570.698 17.1977 570.046 17.1108C569.41 17.0093 568.735 16.9586 568.023 16.9586C566.326 16.9586 564.811 17.2992 563.478 17.9804C562.16 18.6472 561.114 19.5748 560.342 20.7634C559.584 21.9374 559.205 23.2782 559.205 24.7856V45.9186H553.842Z" fill="currentColor"/>
      <path d="M528.988 46.6143C525.624 46.6143 522.723 45.9041 520.283 44.4836C517.859 43.0487 515.988 41.0484 514.67 38.4829C513.367 35.9029 512.715 32.9025 512.715 29.4818C512.715 26.0611 513.367 23.0463 514.67 20.4373C515.988 17.8137 517.821 15.77 520.17 14.3061C522.533 12.8276 525.291 12.0884 528.443 12.0884C530.261 12.0884 532.056 12.3783 533.829 12.9581C535.602 13.5379 537.215 14.48 538.67 15.7845C540.124 17.0745 541.283 18.7849 542.147 20.9156C543.011 23.0463 543.443 25.6698 543.443 28.7861V30.9603H516.533V26.5249H537.988C537.988 24.6407 537.594 22.9593 536.806 21.4809C536.033 20.0024 534.927 18.8356 533.488 17.9804C532.064 17.1253 530.382 16.6977 528.443 16.6977C526.306 16.6977 524.458 17.205 522.897 18.2196C521.352 19.2197 520.162 20.5242 519.329 22.1331C518.496 23.742 518.079 25.4668 518.079 27.3076V30.2645C518.079 32.7866 518.533 34.9245 519.443 36.6783C520.367 38.4177 521.647 39.7439 523.283 40.6571C524.92 41.5557 526.821 42.0051 528.988 42.0051C530.397 42.0051 531.67 41.8166 532.806 41.4398C533.958 41.0484 534.95 40.4687 535.783 39.7004C536.617 38.9177 537.261 37.9466 537.715 36.787L542.897 38.1785C542.352 39.8599 541.435 41.3383 540.147 42.6138C538.859 43.8749 537.268 44.8605 535.374 45.5707C533.48 46.2665 531.352 46.6143 528.988 46.6143Z" fill="currentColor"/>
      <path d="M485.543 46.6143C482.634 46.6143 480.066 45.9113 477.839 44.5054C475.612 43.0849 473.869 41.0847 472.612 38.5046C471.354 35.9101 470.725 32.8445 470.725 29.3079C470.725 25.8002 471.354 22.7564 472.612 20.1763C473.869 17.5963 475.619 15.6033 477.862 14.1974C480.104 12.7914 482.695 12.0884 485.634 12.0884C487.907 12.0884 489.703 12.4508 491.021 13.1755C492.354 13.8857 493.369 14.6974 494.066 15.6106C494.778 16.5092 495.331 17.2485 495.725 17.8282H496.18V1.39147H501.543V45.9186H496.362V40.7875H495.725C495.331 41.3963 494.771 42.1645 494.043 43.0922C493.316 44.0053 492.278 44.8242 490.93 45.549C489.581 46.2592 487.786 46.6143 485.543 46.6143ZM486.271 42.0051C488.422 42.0051 490.24 41.4688 491.725 40.3962C493.21 39.3091 494.339 37.8089 495.112 35.8956C495.884 33.9679 496.271 31.743 496.271 29.2209C496.271 26.7279 495.892 24.5464 495.134 22.6766C494.377 20.7924 493.256 19.3284 491.771 18.2848C490.286 17.2267 488.453 16.6977 486.271 16.6977C483.998 16.6977 482.104 17.2557 480.589 18.3718C479.089 19.4734 477.96 20.9735 477.203 22.8723C476.46 24.7566 476.089 26.8728 476.089 29.2209C476.089 31.598 476.468 33.7577 477.225 35.7C477.998 37.6277 479.134 39.1641 480.634 40.3092C482.149 41.4398 484.028 42.0051 486.271 42.0051Z" fill="currentColor"/>
      <path d="M460.298 1.39147V45.9186H454.934V1.39147H460.298Z" fill="currentColor"/>
      <path d="M437.507 45.9186V12.5232H442.87V45.9186H437.507ZM440.234 6.95736C439.188 6.95736 438.287 6.61674 437.529 5.9355C436.787 5.25426 436.416 4.43532 436.416 3.47868C436.416 2.52204 436.787 1.7031 437.529 1.02186C438.287 0.34062 439.188 0 440.234 0C441.279 0 442.173 0.34062 442.916 1.02186C443.673 1.7031 444.052 2.52204 444.052 3.47868C444.052 4.43532 443.673 5.25426 442.916 5.9355C442.173 6.61674 441.279 6.95736 440.234 6.95736Z" fill="currentColor"/>
      <path d="M420.079 32.2648V12.5233H425.443V45.9186H420.079V40.2657H419.715C418.897 41.9616 417.625 43.4038 415.897 44.5923C414.17 45.7664 411.988 46.3534 409.352 46.3534C407.17 46.3534 405.231 45.8968 403.534 44.9837C401.837 44.056 400.503 42.6646 399.534 40.8093C398.564 38.9395 398.079 36.5841 398.079 33.7432V12.5233H403.443V33.3953C403.443 35.8304 404.155 37.7727 405.579 39.2221C407.018 40.6716 408.852 41.3963 411.079 41.3963C412.412 41.3963 413.768 41.0702 415.147 40.4179C416.541 39.7657 417.708 38.7655 418.647 37.4176C419.602 36.0696 420.079 34.352 420.079 32.2648Z" fill="currentColor"/>
      <path d="M354.941 45.9186V1.39147H371.214C374.457 1.39147 377.131 1.92777 379.237 3.00036C381.343 4.05846 382.911 5.48617 383.941 7.28349C384.972 9.06631 385.487 11.0448 385.487 13.219C385.487 15.1323 385.131 16.7122 384.419 17.9587C383.722 19.2052 382.797 20.1908 381.646 20.9156C380.51 21.6403 379.275 22.1766 377.941 22.5245V22.9593C379.366 23.0463 380.797 23.5246 382.237 24.3942C383.676 25.2639 384.881 26.5104 385.85 28.1338C386.82 29.7572 387.305 31.743 387.305 34.0911C387.305 36.3232 386.775 38.3307 385.714 40.1135C384.653 41.8964 382.979 43.3096 380.691 44.3532C378.403 45.3968 375.426 45.9186 371.76 45.9186H354.941ZM360.578 41.1354H371.76C375.441 41.1354 378.055 40.4542 379.6 39.0917C381.161 37.7147 381.941 36.0478 381.941 34.0911C381.941 32.5836 381.54 31.1922 380.737 29.9166C379.934 28.6266 378.79 27.5975 377.305 26.8293C375.82 26.0466 374.063 25.6553 372.032 25.6553H360.578V41.1354ZM360.578 20.959H371.032C372.729 20.959 374.26 20.6402 375.623 20.0024C377.002 19.3646 378.093 18.466 378.896 17.3064C379.714 16.1469 380.123 14.7844 380.123 13.219C380.123 11.2622 379.411 9.60261 377.987 8.24012C376.563 6.86314 374.305 6.17466 371.214 6.17466H360.578V20.959Z" fill="currentColor"/>
      <path d="M344.622 12.5232V19.4806H323.599V12.5232H344.622ZM328.372 4.52228H338.054V35.6565C338.054 36.5117 338.19 37.1784 338.463 37.6567C338.735 38.1205 339.114 38.4467 339.599 38.6351C340.099 38.8235 340.675 38.9177 341.326 38.9177C341.781 38.9177 342.235 38.8815 342.69 38.809C343.145 38.7221 343.493 38.6568 343.735 38.6133L345.258 45.5055C344.773 45.6504 344.092 45.8171 343.213 46.0055C342.334 46.2085 341.266 46.3317 340.008 46.3752C337.675 46.4621 335.629 46.165 333.872 45.4837C332.129 44.8025 330.773 43.7444 329.804 42.3094C328.834 40.8745 328.357 39.0627 328.372 36.874V4.52228Z" fill="currentColor"/>
      <path d="M293.683 26.6119V45.9186H284.001V12.5233H293.228V18.4153H293.638C294.41 16.473 295.706 14.9366 297.524 13.806C299.342 12.661 301.547 12.0884 304.138 12.0884C306.562 12.0884 308.675 12.5957 310.478 13.6103C312.281 14.625 313.683 16.0744 314.683 17.9587C315.683 19.8285 316.183 22.0606 316.183 24.6552V45.9186H306.501V26.3075C306.516 24.2638 305.971 22.6694 304.865 21.5243C303.759 20.3648 302.236 19.785 300.297 19.785C298.994 19.785 297.842 20.0531 296.842 20.5894C295.857 21.1257 295.084 21.9084 294.524 22.9376C293.978 23.9522 293.698 25.177 293.683 26.6119Z" fill="currentColor"/>
      <path d="M259.42 46.5708C255.829 46.5708 252.738 45.8751 250.148 44.4836C247.572 43.0777 245.587 41.0919 244.193 38.5264C242.799 35.9464 242.102 32.8953 242.102 29.3731C242.102 25.9379 242.799 22.9231 244.193 20.3285C245.587 17.734 247.549 15.712 250.079 14.2626C252.625 12.8131 255.61 12.0884 259.034 12.0884C261.337 12.0884 263.481 12.4435 265.466 13.1538C267.466 13.8495 269.208 14.9003 270.693 16.3063C272.193 17.7123 273.36 19.4806 274.193 21.6113C275.026 23.7275 275.443 26.2061 275.443 29.047V31.5908H245.966V25.8509H266.329C266.329 24.5175 266.026 23.3362 265.42 22.307C264.814 21.2779 263.973 20.4735 262.898 19.8937C261.837 19.2994 260.602 19.0023 259.193 19.0023C257.723 19.0023 256.42 19.3284 255.284 19.9807C254.163 20.6184 253.284 21.4809 252.648 22.5679C252.011 23.6405 251.685 24.8363 251.67 26.1553V31.6125C251.67 33.2649 251.988 34.6926 252.625 35.8956C253.276 37.0987 254.193 38.0263 255.375 38.6786C256.557 39.3308 257.958 39.657 259.579 39.657C260.655 39.657 261.64 39.512 262.534 39.2221C263.428 38.9322 264.193 38.4974 264.829 37.9176C265.466 37.3378 265.951 36.6276 266.284 35.7869L275.238 36.3522C274.784 38.4104 273.852 40.2078 272.443 41.7442C271.049 43.2661 269.246 44.4546 267.034 45.3098C264.837 46.1505 262.299 46.5708 259.42 46.5708Z" fill="currentColor"/>
      <path d="M235.339 12.5232V19.4806H214.317V12.5232H235.339ZM219.089 4.52228H228.771V35.6565C228.771 36.5117 228.908 37.1784 229.18 37.6567C229.453 38.1205 229.832 38.4467 230.317 38.6351C230.817 38.8235 231.392 38.9177 232.044 38.9177C232.498 38.9177 232.953 38.8815 233.408 38.809C233.862 38.7221 234.211 38.6568 234.453 38.6133L235.976 45.5055C235.491 45.6504 234.809 45.8171 233.93 46.0055C233.051 46.2085 231.983 46.3317 230.726 46.3752C228.392 46.4621 226.347 46.165 224.589 45.4837C222.847 44.8025 221.491 43.7444 220.521 42.3094C219.551 40.8745 219.074 39.0627 219.089 36.874V4.52228Z" fill="currentColor"/>
      <path d="M184.4 26.6119V45.9186H174.719V12.5233H183.946V18.4153H184.355C185.128 16.473 186.423 14.9366 188.241 13.806C190.06 12.661 192.264 12.0884 194.855 12.0884C197.279 12.0884 199.393 12.5957 201.196 13.6103C202.999 14.625 204.4 16.0744 205.4 17.9587C206.4 19.8285 206.9 22.0606 206.9 24.6552V45.9186H197.219V26.3075C197.234 24.2638 196.688 22.6694 195.582 21.5243C194.476 20.3648 192.953 19.785 191.014 19.785C189.711 19.785 188.56 20.0531 187.56 20.5894C186.575 21.1257 185.802 21.9084 185.241 22.9376C184.696 23.9522 184.416 25.177 184.4 26.6119Z" fill="currentColor"/>
      <path d="M149.001 46.5708C145.471 46.5708 142.418 45.8534 139.842 44.4184C137.282 42.969 135.304 40.9542 133.91 38.3742C132.517 35.7797 131.82 32.7721 131.82 29.3514C131.82 25.9017 132.517 22.8868 133.91 20.3068C135.304 17.7123 137.282 15.6975 139.842 14.2626C142.418 12.8131 145.471 12.0884 149.001 12.0884C152.532 12.0884 155.577 12.8131 158.138 14.2626C160.713 15.6975 162.698 17.7123 164.092 20.3068C165.486 22.8868 166.183 25.9017 166.183 29.3514C166.183 32.7721 165.486 35.7797 164.092 38.3742C162.698 40.9542 160.713 42.969 158.138 44.4184C155.577 45.8534 152.532 46.5708 149.001 46.5708ZM149.047 39.3961C150.653 39.3961 151.994 38.9612 153.07 38.0916C154.145 37.2074 154.956 36.0043 155.501 34.4824C156.062 32.9605 156.342 31.2284 156.342 29.2861C156.342 27.3439 156.062 25.6118 155.501 24.0899C154.956 22.5679 154.145 21.3649 153.07 20.4807C151.994 19.5966 150.653 19.1545 149.047 19.1545C147.426 19.1545 146.062 19.5966 144.956 20.4807C143.865 21.3649 143.039 22.5679 142.479 24.0899C141.933 25.6118 141.66 27.3439 141.66 29.2861C141.66 31.2284 141.933 32.9605 142.479 34.4824C143.039 36.0043 143.865 37.2074 144.956 38.0916C146.062 38.9612 147.426 39.3961 149.047 39.3961Z" fill="currentColor"/>
      <path d="M124.114 16.9803H114.159C113.977 15.7483 113.606 14.6539 113.045 13.6973C112.485 12.7262 111.765 11.9 110.886 11.2187C110.008 10.5375 108.992 10.0157 107.841 9.65334C106.705 9.29098 105.47 9.10979 104.136 9.10979C101.727 9.10979 99.6288 9.68233 97.8409 10.8274C96.053 11.958 94.6667 13.6103 93.6818 15.7845C92.697 17.9442 92.2045 20.5677 92.2045 23.655C92.2045 26.8293 92.697 29.4963 93.6818 31.656C94.6818 33.8157 96.0758 35.4463 97.8636 36.5479C99.6515 37.6495 101.72 38.2003 104.068 38.2003C105.386 38.2003 106.606 38.0336 107.727 37.7002C108.864 37.3668 109.871 36.8813 110.75 36.2435C111.629 35.5912 112.356 34.8013 112.932 33.8736C113.523 32.946 113.932 31.8879 114.159 30.6994L124.114 30.7428C123.856 32.7866 123.212 34.7578 122.182 36.6566C121.167 38.5409 119.795 40.2295 118.068 41.7224C116.356 43.2009 114.311 44.3749 111.932 45.2446C109.568 46.0998 106.894 46.5273 103.909 46.5273C99.7576 46.5273 96.0455 45.6287 92.7727 43.8314C89.5152 42.0341 86.9394 39.4323 85.0455 36.0261C83.1667 32.6199 82.2273 28.4962 82.2273 23.655C82.2273 18.7994 83.1818 14.6684 85.0909 11.2622C87 7.85602 89.5909 5.2615 92.8636 3.47868C96.1364 1.68136 99.8182 0.782701 103.909 0.782701C106.606 0.782701 109.106 1.14506 111.409 1.86979C113.727 2.59451 115.78 3.65261 117.568 5.04408C119.356 6.42106 120.811 8.10967 121.932 10.1099C123.068 12.1102 123.795 14.4003 124.114 16.9803Z" fill="currentColor"/>
      <path d="M0 8.60973C0 5.96805 2.23858 3.82655 5 3.82655H56C58.7614 3.82655 61 5.96805 61 8.60973V38.2655C61 40.9072 58.7614 43.0487 56 43.0487H5C2.23858 43.0487 0 40.9072 0 38.2655V8.60973Z" fill="#3312BB"/>
      <path d="M38.6179 37.3088V16.4368H44.669V37.3088H38.6179ZM41.6577 13.7462C40.758 13.7462 39.9863 13.4609 39.3423 12.8901C38.7079 12.3104 38.3906 11.6173 38.3906 10.8111C38.3906 10.0139 38.7079 9.32993 39.3423 8.75921C39.9863 8.17943 40.758 7.88954 41.6577 7.88954C42.5573 7.88954 43.3243 8.17943 43.9588 8.75921C44.6027 9.32993 44.9247 10.0139 44.9247 10.8111C44.9247 11.6173 44.6027 12.3104 43.9588 12.8901C43.3243 13.4609 42.5573 13.7462 41.6577 13.7462Z" fill="white"/>
      <path d="M21.6364 37.7029C20.2443 37.7029 19.0038 37.4719 17.9148 37.0099C16.8258 36.5388 15.964 35.8458 15.3295 34.9308C14.7045 34.0068 14.392 32.8563 14.392 31.4793C14.392 30.3198 14.6146 29.3459 15.0597 28.5578C15.5047 27.7697 16.1108 27.1355 16.8778 26.6554C17.6449 26.1753 18.5161 25.8129 19.4915 25.5683C20.4763 25.3237 21.5085 25.1516 22.5881 25.0519C23.857 24.9251 24.8797 24.8073 25.6562 24.6986C26.4328 24.5809 26.9962 24.4087 27.3466 24.1823C27.697 23.9558 27.8722 23.6206 27.8722 23.1767V23.0952C27.8722 22.2346 27.5881 21.5687 27.0199 21.0977C26.4612 20.6266 25.6657 20.391 24.6335 20.391C23.5445 20.391 22.678 20.622 22.0341 21.0841C21.3902 21.537 20.964 22.1077 20.7557 22.7962L15.1591 22.3614C15.4432 21.0931 16.0019 19.997 16.8352 19.073C17.6686 18.1399 18.7434 17.4242 20.0597 16.926C21.3854 16.4186 22.9195 16.165 24.6619 16.165C25.8741 16.165 27.0341 16.3009 28.142 16.5726C29.2595 16.8444 30.2491 17.2657 31.1108 17.8364C31.982 18.4071 32.6686 19.1409 33.1705 20.0377C33.6723 20.9255 33.9233 21.99 33.9233 23.2311V37.3088H28.1847V34.4145H28.0142C27.6638 35.0667 27.1951 35.642 26.608 36.1402C26.0208 36.6294 25.3153 37.0144 24.4915 37.2953C23.6676 37.567 22.7159 37.7029 21.6364 37.7029ZM23.3693 33.7079C24.2595 33.7079 25.0455 33.5403 25.7273 33.2051C26.4091 32.8608 26.9441 32.3988 27.3324 31.8191C27.7206 31.2393 27.9148 30.5825 27.9148 29.8487V27.6338C27.7254 27.7515 27.465 27.8602 27.1335 27.9599C26.8116 28.0505 26.447 28.1365 26.0398 28.2181C25.6326 28.2905 25.2254 28.3585 24.8182 28.4219C24.411 28.4763 24.0417 28.5261 23.7102 28.5714C23 28.671 22.3797 28.8296 21.8494 29.047C21.3191 29.2644 20.9072 29.5588 20.6136 29.9302C20.3201 30.2926 20.1733 30.7456 20.1733 31.2891C20.1733 32.0772 20.4716 32.6797 21.0682 33.0964C21.6742 33.504 22.4413 33.7079 23.3693 33.7079Z" fill="white"/>
      {/* END: NEW SVG code for "ContentBuilder.ai" */}
    </svg>
  );
};

export const OnyxIcon = ({
  size = 50, 
  className = "",
}: IconProps) => {
  // Original dimensions of your SVG artwork
  const originalWidth = 278;
  const originalHeight = 249;

  return (
    <svg
      width={size}  // The component will render in a square area of 'size' x 'size'
      height={size} // The SVG content within will scale to fit this, maintaining aspect ratio
      viewBox={`0 0 ${originalWidth} ${originalHeight}`} // Describes the coordinate system of your paths
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet" // Key to maintain aspect ratio and fit
      className={className}
    >
<path d="M0 0 C8.16184686 6.98231085 12.81195791 15.920144 14 26.5625 C14.37326734 36.13171717 11.42707335 42.9326699 6.3046875 50.87109375 C1.86443818 58.11641075 4.24787943 66.5359105 6.03125 74.296875 C8.42218866 83.43643086 11.82735186 91.98226803 16 100.4375 C16.3199292 101.0876709 16.6398584 101.7378418 16.96948242 102.40771484 C17.93403454 104.30178869 18.94595175 106.15431505 20 108 C20.3614209 108.64090576 20.7228418 109.28181152 21.09521484 109.94213867 C23.6571086 114.02598631 25.70673142 115.77588475 30.57104492 116.98608398 C31.2488501 117.13505127 31.92665527 117.28401855 32.625 117.4375 C41.56248009 119.81067141 49.22040747 123.82944149 54.6875 131.5625 C56.83495969 134.39555525 56.83495969 134.39555525 60.4375 134.125 C61.9704413 133.80305279 63.48999676 133.41647239 65 133 C66.19753906 132.67644531 67.39507812 132.35289062 68.62890625 132.01953125 C72.10013764 131.05961831 75.55220047 130.04111924 79 129 C79.14695313 128.09378906 79.29390625 127.18757812 79.4453125 126.25390625 C81.74464537 113.76615016 86.45298695 105.35799493 97 98 C104.9828076 93.80163452 113.06887923 92.55575992 121.85546875 94.6953125 C132.29525773 98.12244323 139.79731349 104.15279628 145 113.8671875 C148.52098114 122.02638417 149.0414951 131.25632828 146.07421875 139.62109375 C141.60706905 149.5137998 135.10136922 156.1777273 125.0546875 160.25390625 C116.27609112 163.44157148 107.55833977 162.43209871 99 159 C95.6875 157.0625 95.6875 157.0625 93 155 C92.113125 154.34 91.22625 153.68 90.3125 153 C88.16186404 151.13999052 86.59071215 149.34420738 85 147 C77.16008251 147.47039505 70.27928865 150.22937188 63 153 C62.89042969 153.78503906 62.78085938 154.57007813 62.66796875 155.37890625 C61.21411871 165.01214029 61.21411871 165.01214029 59.3125 168.9375 C57.83450214 172.38616167 57.66972743 173.54129132 59 177 C61.85021864 182.10664172 65.7378196 186.32626713 69.734375 190.57421875 C72 193 72 193 73.578125 195.08203125 C75.35695975 197.15577808 76.3970635 198.10538106 79 199 C82.3948995 198.64322291 85.56114101 198.03024568 88.87524414 197.24902344 C97.13499985 195.34064603 104.59212269 196.51842545 112.03125 200.6953125 C120.96722417 206.6171684 126.37681035 213.71200817 129.63671875 224.01171875 C131.53260855 234.38814787 129.15893448 243.1334074 124.25 252.25 C118.09364606 259.7744326 110.67080956 265.11516098 101 267 C89.53851624 267.89063759 80.12229442 266.77986089 71.125 259.25 C62.69397608 251.12062273 59.85417854 242.58349955 59.02734375 231.0078125 C58.98286974 226.11567122 59.6338079 221.32862984 62.13671875 217.0625 C63.32066654 214.23388265 62.96594418 212.89783255 62 210 C57.09664679 201.90220711 49.82833904 192.00352463 40.390625 189.234375 C37.66141241 188.96680514 35.77851997 189.69262929 33.19921875 190.50390625 C24.74619078 192.41071718 16.9347195 191.15780234 9.046875 187.875 C1.08569053 185.58871113 -4.95695219 187.23570434 -12.1875 190.875 C-13.01121094 191.27847656 -13.83492188 191.68195313 -14.68359375 192.09765625 C-21.77139419 195.67457417 -28.18923149 199.87957669 -34.42871094 204.77246094 C-35.98790625 205.99055199 -37.5760262 207.17131824 -39.1640625 208.3515625 C-44.56087021 212.49528557 -49.34604879 216.17453937 -51 223 C-51.32587601 226.25040431 -51.50607823 229.49183707 -51.67578125 232.75390625 C-52.6615525 242.62349553 -58.16799198 251.05393198 -65.6875 257.3125 C-73.3198643 262.63774277 -82.87207894 264.14905937 -92 263 C-101.99995145 260.57867113 -109.88393996 255.60710203 -115.74609375 247.109375 C-120.9683619 238.32425101 -121.46469256 228.089112 -119.4140625 218.1640625 C-116.33241701 209.2018458 -109.18380731 201.50040588 -100.96484375 196.89453125 C-92.10993509 192.86317124 -83.18147982 193.34875874 -74 196 C-73.195625 196.391875 -72.39125 196.78375 -71.5625 197.1875 C-65.84539664 199.00024009 -59.64569757 197.55770977 -54.32421875 195.06640625 C-52.76743023 194.25288217 -51.22192757 193.4174526 -49.6875 192.5625 C-48.86644775 192.11656494 -48.04539551 191.67062988 -47.19946289 191.21118164 C-39.86541094 187.12491328 -33.39668321 182.43196604 -27 177 C-25.576875 175.83791016 -25.576875 175.83791016 -24.125 174.65234375 C-14.68375258 166.65198438 -12.94028965 160.85866679 -11.55078125 148.69140625 C-10.56086507 142.05686166 -8.34766786 136.70758841 -4.25 131.4375 C0.21946985 124.39808498 -0.95375412 115.02426999 -2.58007812 107.21435547 C-5.69521965 94.58614892 -10.25653931 83.11205044 -17 72 C-17.79664062 70.61554688 -17.79664062 70.61554688 -18.609375 69.203125 C-21.41213482 64.76279764 -25.32441685 63.87411972 -30.1875 62.6875 C-39.21711407 60.3388268 -46.76252804 55.83158033 -52 48 C-57.0894491 39.27756793 -58.47497855 30.84390048 -56.31640625 20.828125 C-53.17689578 10.56283765 -47.32990714 2.01094569 -37.765625 -3.22265625 C-25.01101961 -9.1933524 -11.64237711 -7.9228211 0 0 Z " fill="#325277" transform="translate(139,13)"/>
<path d="M0 0 C7.24782967 5.04316665 12.68913867 12.01791945 14.7421875 20.6796875 C16.55007128 30.79823082 15.44075461 38.6798438 9.9921875 47.4296875 C4.32086554 55.33052178 -2.48395604 59.64753056 -11.7578125 62.4296875 C-22.00720252 63.4546265 -30.88406337 62.10605311 -39.2578125 55.6796875 C-40.1446875 55.0196875 -41.0315625 54.3596875 -41.9453125 53.6796875 C-44.09594846 51.81967802 -45.66710035 50.02389488 -47.2578125 47.6796875 C-55.09772999 48.15008255 -61.97852385 50.90905938 -69.2578125 53.6796875 C-69.42216797 54.85724609 -69.42216797 54.85724609 -69.58984375 56.05859375 C-71.04369379 65.69182779 -71.04369379 65.69182779 -72.9453125 69.6171875 C-74.42331036 73.06584917 -74.58808507 74.22097882 -73.2578125 77.6796875 C-70.37350267 82.84740928 -66.38084858 86.97987441 -62.37890625 91.3125 C-60.53934596 93.36548994 -58.86888041 95.44581059 -57.2578125 97.6796875 C-60.21190951 96.30814246 -62.69789626 94.69105026 -65.2578125 92.6796875 C-63.18173151 96.62424138 -62.43580893 97.59068928 -58.2578125 99.6796875 C-58.2578125 102.6496875 -58.2578125 105.6196875 -58.2578125 108.6796875 C-66.60027392 107.59546869 -73.34089268 101.25601129 -78.3203125 94.8046875 C-79.29986437 93.42996189 -80.27910486 92.05501427 -81.2578125 90.6796875 C-82.2478125 89.6896875 -82.2478125 89.6896875 -83.2578125 88.6796875 C-82.8828125 86.0546875 -82.8828125 86.0546875 -82.2578125 83.6796875 C-82.9178125 83.6796875 -83.5778125 83.6796875 -84.2578125 83.6796875 C-83.7628125 81.6996875 -83.7628125 81.6996875 -83.2578125 79.6796875 C-80.3828125 79.0546875 -80.3828125 79.0546875 -77.2578125 78.6796875 C-76.2678125 79.6696875 -76.2678125 79.6696875 -75.2578125 80.6796875 C-75.5878125 78.6996875 -75.9178125 76.7196875 -76.2578125 74.6796875 C-77.86366743 75.30033687 -79.46743867 75.9263793 -81.0703125 76.5546875 C-81.96363281 76.90273437 -82.85695312 77.25078125 -83.77734375 77.609375 C-86.43492841 78.66800905 -86.43492841 78.66800905 -89.2578125 80.6796875 C-89.2578125 79.6896875 -89.2578125 78.6996875 -89.2578125 77.6796875 C-92.26040767 77.34750558 -92.26040767 77.34750558 -93.9453125 79.1796875 C-94.3784375 79.6746875 -94.8115625 80.1696875 -95.2578125 80.6796875 C-95.2578125 79.3596875 -95.2578125 78.0396875 -95.2578125 76.6796875 C-96.53011719 77.17082031 -96.53011719 77.17082031 -97.828125 77.671875 C-101.45971261 78.73901578 -104.36117551 78.88165968 -108.1328125 78.8046875 C-109.28523438 78.78664063 -110.43765625 78.76859375 -111.625 78.75 C-112.49382812 78.72679687 -113.36265625 78.70359375 -114.2578125 78.6796875 C-114.2578125 78.0196875 -114.2578125 77.3596875 -114.2578125 76.6796875 C-115.464375 76.4940625 -115.464375 76.4940625 -116.6953125 76.3046875 C-117.96375 75.9953125 -117.96375 75.9953125 -119.2578125 75.6796875 C-119.7528125 74.6896875 -119.7528125 74.6896875 -120.2578125 73.6796875 C-121.2478125 73.3496875 -122.2378125 73.0196875 -123.2578125 72.6796875 C-123.2578125 72.0196875 -123.2578125 71.3596875 -123.2578125 70.6796875 C-124.2065625 70.4115625 -125.1553125 70.1434375 -126.1328125 69.8671875 C-129.2578125 68.6796875 -129.2578125 68.6796875 -131.2578125 65.6796875 C-131.9384375 65.3496875 -132.6190625 65.0196875 -133.3203125 64.6796875 C-135.2578125 63.6796875 -135.2578125 63.6796875 -136.2578125 60.6796875 C-136.78414039 53.75645141 -136.88923659 47.73206098 -133.2578125 41.6796875 C-131.7728125 41.1846875 -131.7728125 41.1846875 -130.2578125 40.6796875 C-130.17789063 39.93203125 -130.09796875 39.184375 -130.015625 38.4140625 C-128.66314568 33.5339825 -124.45847042 31.18105015 -120.2578125 28.6796875 C-116.5078125 27.9296875 -116.5078125 27.9296875 -113.2578125 27.6796875 C-110.63394115 26.28875858 -110.63394115 26.28875858 -108.2578125 24.6796875 C-106.60411893 23.98146133 -104.94054236 23.30470145 -103.2578125 22.6796875 C-103.5878125 21.0296875 -103.9178125 19.3796875 -104.2578125 17.6796875 C-94.16200025 19.25198613 -86.5151681 22.32856762 -79.2578125 29.6796875 C-78.6184375 30.6490625 -77.9790625 31.6184375 -77.3203125 32.6171875 C-75.34604932 35.06850229 -75.34604932 35.06850229 -71.8828125 34.7421875 C-65.58324293 33.52059796 -59.39510766 31.53294376 -53.2578125 29.6796875 C-53.11085938 28.77347656 -52.96390625 27.86726563 -52.8125 26.93359375 C-50.51316713 14.44583766 -45.80482555 6.03768243 -35.2578125 -1.3203125 C-23.40132256 -7.55594795 -11.45675304 -6.69962375 0 0 Z " fill="#B4CDE5" transform="translate(271.2578125,112.3203125)"/>
<path d="M0 0 C8.16184686 6.98231085 12.81195791 15.920144 14 26.5625 C14.37326734 36.13171717 11.42707335 42.9326699 6.3046875 50.87109375 C1.86443818 58.11641075 4.24787943 66.5359105 6.03125 74.296875 C8.42218866 83.43643086 11.82735186 91.98226803 16 100.4375 C16.3199292 101.0876709 16.6398584 101.7378418 16.96948242 102.40771484 C19.79001515 107.94634482 22.74315063 113.49543376 28 117 C27.70727539 118.87768555 27.70727539 118.87768555 27 121 C24.46195867 122.49771343 22.12842985 123.67096653 19.4375 124.8125 C18.74591797 125.13669922 18.05433594 125.46089844 17.34179688 125.79492188 C12.0996982 128.07643174 8.59517112 128.12658676 3 127 C3.20625 126.46375 3.4125 125.9275 3.625 125.375 C4.1314747 122.16732692 3.15400225 119.98682934 2 117 C2 120.63 2 124.26 2 128 C0.68 128.33 -0.64 128.66 -2 129 C-1.91878906 127.89527344 -1.83757812 126.79054687 -1.75390625 125.65234375 C-0.78528097 106.16938095 -6.96818686 88.5306834 -17 72 C-17.79664062 70.61554688 -17.79664062 70.61554688 -18.609375 69.203125 C-21.41213482 64.76279764 -25.32441685 63.87411972 -30.1875 62.6875 C-39.21711407 60.3388268 -46.76252804 55.83158033 -52 48 C-57.0894491 39.27756793 -58.47497855 30.84390048 -56.31640625 20.828125 C-53.17689578 10.56283765 -47.32990714 2.01094569 -37.765625 -3.22265625 C-25.01101961 -9.1933524 -11.64237711 -7.9228211 0 0 Z " fill="#3D4A5A" transform="translate(139,13)"/>
<path d="M0 0 C0.93423645 3.01031744 1.04449911 3.86650268 0 7 C-0.71954961 13.96679503 0.78881946 20.16994379 2.75 26.8125 C3.00265625 27.73998047 3.2553125 28.66746094 3.515625 29.62304688 C4.89458797 34.40460097 5.92635849 37.85859568 10 41 C10.63421875 41.56203125 11.2684375 42.1240625 11.921875 42.703125 C12.52515625 43.21359375 13.1284375 43.7240625 13.75 44.25 C14.36359375 44.77078125 14.9771875 45.2915625 15.609375 45.828125 C16.29773438 46.40820312 16.29773438 46.40820312 17 47 C14.64972352 48.17513824 13.54234248 47.98591028 10.94921875 47.8203125 C5.52339242 47.77044477 1.59879031 49.46595355 -3.1875 51.875 C-4.01121094 52.27847656 -4.83492188 52.68195313 -5.68359375 53.09765625 C-12.77139419 56.67457417 -19.18923149 60.87957669 -25.42871094 65.77246094 C-26.98790625 66.99055199 -28.5760262 68.17131824 -30.1640625 69.3515625 C-35.56087021 73.49528557 -40.34604879 77.17453937 -42 84 C-42.32587601 87.25040431 -42.50607823 90.49183707 -42.67578125 93.75390625 C-43.6615525 103.62349553 -49.16799198 112.05393198 -56.6875 118.3125 C-64.3198643 123.63774277 -73.87207894 125.14905937 -83 124 C-92.99995145 121.57867113 -100.88393996 116.60710203 -106.74609375 108.109375 C-111.9683619 99.32425101 -112.46469256 89.089112 -110.4140625 79.1640625 C-107.33241701 70.2018458 -100.18380731 62.50040588 -91.96484375 57.89453125 C-83.10993509 53.86317124 -74.18147982 54.34875874 -65 57 C-64.195625 57.391875 -63.39125 57.78375 -62.5625 58.1875 C-56.84539664 60.00024009 -50.64569757 58.55770977 -45.32421875 56.06640625 C-43.76743023 55.25288217 -42.22192757 54.4174526 -40.6875 53.5625 C-39.86644775 53.11656494 -39.04539551 52.67062988 -38.19946289 52.21118164 C-30.86541094 48.12491328 -24.39668321 43.43196604 -18 38 C-17.05125 37.22527344 -16.1025 36.45054687 -15.125 35.65234375 C-5.84174954 27.78586844 -3.69292245 21.470763 -2.4921875 9.5859375 C-2.02285969 6.16654917 -1.20115627 3.22624618 0 0 Z " fill="#768099" transform="translate(130,152)"/>
<path d="M0 0 C4.96086323 1.93639643 7.89928562 4.53238083 11.0625 8.75 C12 11 12 11 12 13 C12.639375 13.20625 13.27875 13.4125 13.9375 13.625 C16 15 16 15 16.75 18.125 C16.8325 19.07375 16.915 20.0225 17 21 C17.66 21 18.32 21 19 21 C19.495 25.455 19.495 25.455 20 30 C19.34 29.01 18.68 28.02 18 27 C17.86464844 27.9178125 17.72929687 28.835625 17.58984375 29.78125 C16.36545298 36.76101054 15.21465753 42.52136739 10.10546875 47.65234375 C6.90852982 49.69862191 3.97304618 49.87879828 0.234375 49.8671875 C-2.28946747 49.82872376 -2.28946747 49.82872376 -5 52 C-13.71718828 53.27366888 -23.27411319 51.05697253 -31 47 C-31.33 47 -31.66 47 -32 47 C-32.14695313 46.27296875 -32.29390625 45.5459375 -32.4453125 44.796875 C-34.00726954 37.79499863 -36.29109008 31.95389 -39.79296875 25.69140625 C-41.06033342 22.86547013 -41.24961143 21.05635325 -41 18 C-40.34 18 -39.68 18 -39 18 C-38.67 16.02 -38.34 14.04 -38 12 C-37.34 12 -36.68 12 -36 12 C-35.34 10.02 -34.68 8.04 -34 6 C-33.34 6 -32.68 6 -32 6 C-31.9175 5.38125 -31.835 4.7625 -31.75 4.125 C-31 2 -31 2 -29.3125 0.75 C-26.46305879 -0.17414309 -23.97987718 -0.06477994 -21 0 C-15.39576557 -2.80211722 -6.01801313 -1.00889066 0 0 Z " fill="#EEF2F9" transform="translate(247,218)"/>
<path d="M0 0 C1.625 2.3125 1.625 2.3125 3 5 C3.99 5.804375 4.98 6.60875 6 7.4375 C9.16094525 10.13747407 10.20549277 12.32941702 12 16 C12.66902344 16.27328125 13.33804688 16.5465625 14.02734375 16.828125 C16 18 16 18 16.71484375 20.50390625 C17.2149015 27.3731206 16.82544591 32.67866339 14 39 C14.99 39 15.98 39 17 39 C17.12375 38.21625 17.2475 37.4325 17.375 36.625 C18 34 18 34 20 32 C18.75045646 39.71457314 14.79296688 45.86908648 9 51 C8.01 50.505 8.01 50.505 7 50 C7.639375 49.46375 8.27875 48.9275 8.9375 48.375 C11.38529404 45.55632807 11.66714612 43.66139268 12 40 C11.29875 40.70125 10.5975 41.4025 9.875 42.125 C8.92625 42.74375 7.9775 43.3625 7 44 C3.6875 43.25 3.6875 43.25 1 42 C0.67 42.99 0.34 43.98 0 45 C-5.24604175 47.89067607 -10.2590852 48.35786893 -16.1875 48.5 C-16.87658447 48.53053467 -17.56566895 48.56106934 -18.27563477 48.5925293 C-22.13814064 48.59486653 -23.78008096 48.1868532 -26.75390625 45.66015625 C-27.49511719 44.78230469 -28.23632812 43.90445313 -29 43 C-30.82424754 41.47380865 -32.67594363 39.99561815 -34.546875 38.52734375 C-36 37 -36 37 -36.515625 34.87890625 C-36.75539063 33.94884766 -36.75539063 33.94884766 -37 33 C-37.99 32.67 -38.98 32.34 -40 32 C-40.08213506 27.81111183 -39.89619311 24.08265749 -39 20 C-38.938125 18.741875 -38.87625 17.48375 -38.8125 16.1875 C-38.15084073 11.02071949 -35.68816422 7.58468867 -32 4 C-21.52950503 -3.60141446 -12.19185957 -4.27784546 0 0 Z " fill="#ECF1F8" transform="translate(66,218)"/>
<path d="M0 0 C2.64 0.33 5.28 0.66 8 1 C7.34 2.32 6.68 3.64 6 5 C8.36526056 6.95978732 10.63688818 8.79390951 13.3125 10.3125 C20.31024766 14.70643458 26.281943 20.00717486 29 28 C30.43104467 36.08376377 28.88015539 41.50977123 24.3125 48.234375 C23.879375 48.81703125 23.44625 49.3996875 23 50 C21.35 49.67 19.7 49.34 18 49 C18 49.66 18 50.32 18 51 C15.525 51.495 15.525 51.495 13 52 C13 52.99 13 53.98 13 55 C11.56666979 55.39063507 10.12807321 55.76198474 8.6875 56.125 C7.88699219 56.33382812 7.08648437 56.54265625 6.26171875 56.7578125 C4 57 4 57 1 55 C-1.53397269 54.90270222 -3.99737253 55.06620252 -6.52734375 55.22265625 C-9.54279679 54.95112256 -10.72133899 53.92246774 -13 52 C-15.14733927 51.29485154 -15.14733927 51.29485154 -17 51 C-17 50.34 -17 49.68 -17 49 C-17.99 49 -18.98 49 -20 49 C-24.93698038 41.19638586 -25.74426153 32.27429776 -24.6640625 23.16796875 C-23.70491114 20.03662166 -21.53817658 18.98101586 -19 17 C-17.73152315 14.41501488 -17.73152315 14.41501488 -17 12 C-16 11 -16 11 -12.75 10.625 C-8.98524674 9.99754112 -7.13238334 9.06077851 -4 7 C-2.34630643 6.30177383 -0.68272986 5.62501395 1 5 C0.67 3.35 0.34 1.7 0 0 Z " fill="#F1F5FA" transform="translate(167,130)"/>
<path d="M0 0 C4.8517339 3.13752385 7.66549221 7.16548393 9.40625 12.7265625 C11.061211 21.20243753 10.00095388 28.38596715 5.82421875 35.8671875 C5.32921875 36.8571875 5.32921875 36.8571875 4.82421875 37.8671875 C3.17421875 37.8671875 1.52421875 37.8671875 -0.17578125 37.8671875 C-0.50578125 38.8571875 -0.83578125 39.8471875 -1.17578125 40.8671875 C-3.23828125 41.5546875 -3.23828125 41.5546875 -5.17578125 41.8671875 C-5.17578125 43.1871875 -5.17578125 44.5071875 -5.17578125 45.8671875 C-7.48578125 45.5371875 -9.79578125 45.2071875 -12.17578125 44.8671875 C-12.50578125 43.8771875 -12.83578125 42.8871875 -13.17578125 41.8671875 C-13.79324219 41.91359375 -14.41070312 41.96 -15.046875 42.0078125 C-21.71274294 42.2918982 -26.32731564 41.03157469 -32.17578125 37.8671875 C-32.17578125 37.2071875 -32.17578125 36.5471875 -32.17578125 35.8671875 C-34.15578125 35.8671875 -36.13578125 35.8671875 -38.17578125 35.8671875 C-38.21316406 35.20332031 -38.25054687 34.53945312 -38.2890625 33.85546875 C-38.6204844 28.23428632 -38.6204844 28.23428632 -40.86328125 23.1796875 C-42.17578125 20.8671875 -42.17578125 20.8671875 -41.48828125 17.2421875 C-40.17578125 13.8671875 -40.17578125 13.8671875 -38.17578125 10.8671875 C-38.83578125 10.8671875 -39.49578125 10.8671875 -40.17578125 10.8671875 C-38.86964183 6.94876923 -37.34448277 4.54077941 -34.17578125 1.8671875 C-33.51578125 1.8671875 -32.85578125 1.8671875 -32.17578125 1.8671875 C-31.84578125 0.5471875 -31.51578125 -0.7728125 -31.17578125 -2.1328125 C-30.18578125 -2.1328125 -29.19578125 -2.1328125 -28.17578125 -2.1328125 C-28.17578125 -2.7928125 -28.17578125 -3.4528125 -28.17578125 -4.1328125 C-18.32650387 -6.88613322 -8.9378939 -4.65348157 0 0 Z " fill="#F2F5F9" transform="translate(272.17578125,120.1328125)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C0.60328125 2.09796875 1.2065625 2.1959375 1.828125 2.296875 C5.21141321 3.39218413 6.25553147 5.42134938 8.02734375 8.390625 C9.9035575 13.42400166 9.36246176 18.716113 9 24 C8.34 24 7.68 24 7 24 C7.185625 24.61875 7.37125 25.2375 7.5625 25.875 C8 28 8 28 7 30 C7.99 30.495 7.99 30.495 9 31 C8.34 31 7.68 31 7 31 C7 31.99 7 32.98 7 34 C6.01 34 5.02 34 4 34 C3.855625 34.61875 3.71125 35.2375 3.5625 35.875 C3 38 3 38 2 40 C0.68 40 -0.64 40 -2 40 C-2.495 40.99 -2.495 40.99 -3 42 C-3.5775 41.79375 -4.155 41.5875 -4.75 41.375 C-6.9872819 40.75548346 -6.9872819 40.75548346 -8.65625 41.96875 C-11.98111466 43.43169045 -15.18972208 43.21249265 -18.75 43.125 C-19.44738281 43.11597656 -20.14476563 43.10695312 -20.86328125 43.09765625 C-22.57566958 43.07419888 -24.28788004 43.03833104 -26 43 C-26 42.34 -26 41.68 -26 41 C-26.99 41 -27.98 41 -29 41 C-29.2475 40.236875 -29.495 39.47375 -29.75 38.6875 C-31.1521131 35.67295684 -32.13922645 34.63472774 -35 33 C-36.65 32.67 -38.3 32.34 -40 32 C-39.67 28.37 -39.34 24.74 -39 21 C-39.66 21 -40.32 21 -41 21 C-41 20.01 -41 19.02 -41 18 C-41.66 18 -42.32 18 -43 18 C-43.33 18.66 -43.66 19.32 -44 20 C-43.73760976 18.32070245 -43.37966646 16.65672637 -43 15 C-42.79310547 14.07574219 -42.79310547 14.07574219 -42.58203125 13.1328125 C-40.69912043 6.63740202 -36.63138794 3.47468618 -31 0 C-22.05112487 -4.81862507 -8.40875743 -6.37027078 0 0 Z " fill="#F0F3F9" transform="translate(135,17)"/>
<path d="M0 0 C7.24782967 5.04316665 12.68913867 12.01791945 14.7421875 20.6796875 C16.55007128 30.79823082 15.44075461 38.6798438 9.9921875 47.4296875 C4.32086554 55.33052178 -2.48395604 59.64753056 -11.7578125 62.4296875 C-21.85459464 63.43936571 -31.10374192 62.24271992 -39.2578125 55.6796875 C-42.2578125 52.2796875 -42.2578125 52.2796875 -42.2578125 49.6796875 C-40.6078125 49.6796875 -38.9578125 49.6796875 -37.2578125 49.6796875 C-37.2578125 49.0196875 -37.2578125 48.3596875 -37.2578125 47.6796875 C-41.5478125 47.0196875 -45.8378125 46.3596875 -50.2578125 45.6796875 C-50.7528125 44.1946875 -50.7528125 44.1946875 -51.2578125 42.6796875 C-49.7728125 42.1846875 -49.7728125 42.1846875 -48.2578125 41.6796875 C-48.1959375 40.4215625 -48.1340625 39.1634375 -48.0703125 37.8671875 C-48.03550781 37.15949219 -48.00070313 36.45179688 -47.96484375 35.72265625 C-48.0575043 33.57951574 -48.0575043 33.57951574 -49.73828125 32.265625 C-51.93781677 29.96996582 -51.72514379 28.24929995 -51.7578125 25.1171875 C-51.5105287 16.57559275 -48.29681676 10.5815481 -42.5703125 4.3671875 C-30.31923193 -7.1167476 -14.36140587 -8.39819236 0 0 Z M-27.2578125 3.6796875 C-27.2578125 4.3396875 -27.2578125 4.9996875 -27.2578125 5.6796875 C-28.2478125 5.6796875 -29.2378125 5.6796875 -30.2578125 5.6796875 C-30.3403125 6.2984375 -30.4228125 6.9171875 -30.5078125 7.5546875 C-31.50360135 10.37608924 -32.62103516 10.39896708 -35.2578125 11.6796875 C-38.29889911 14.73452795 -38.29889911 14.73452795 -39.2578125 18.6796875 C-38.5978125 18.6796875 -37.9378125 18.6796875 -37.2578125 18.6796875 C-37.7321875 19.2159375 -38.2065625 19.7521875 -38.6953125 20.3046875 C-40.61565314 23.22360528 -41.1154243 25.1911766 -41.2578125 28.6796875 C-40.8040625 29.4221875 -40.3503125 30.1646875 -39.8828125 30.9296875 C-37.49701631 34.96718874 -37.51766482 39.0650688 -37.2578125 43.6796875 C-35.2778125 43.6796875 -33.2978125 43.6796875 -31.2578125 43.6796875 C-31.2578125 44.3396875 -31.2578125 44.9996875 -31.2578125 45.6796875 C-24.7693955 49.19032858 -19.60956056 50.23221971 -12.2578125 49.6796875 C-11.9278125 50.6696875 -11.5978125 51.6596875 -11.2578125 52.6796875 C-8.9478125 53.0096875 -6.6378125 53.3396875 -4.2578125 53.6796875 C-4.2578125 52.3596875 -4.2578125 51.0396875 -4.2578125 49.6796875 C-2.6078125 49.0196875 -0.9578125 48.3596875 0.7421875 47.6796875 C0.7421875 47.0196875 0.7421875 46.3596875 0.7421875 45.6796875 C2.3921875 45.6796875 4.0421875 45.6796875 5.7421875 45.6796875 C6.39053404 44.4101345 7.03576565 43.13899044 7.6796875 41.8671875 C8.03933594 41.15949219 8.39898437 40.45179688 8.76953125 39.72265625 C11.55001356 33.88252673 11.81000591 26.76685453 10.17578125 20.51171875 C9.35773749 18.48551818 9.35773749 18.48551818 7.7421875 15.6796875 C7.3503125 14.8134375 6.9584375 13.9471875 6.5546875 13.0546875 C1.84009705 6.87694829 -5.82359822 4.10159294 -13.2578125 2.6796875 C-18.10122857 2.29694629 -22.56697164 2.35168689 -27.2578125 3.6796875 Z " fill="#3D4756" transform="translate(271.2578125,112.3203125)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C0.66 2 1.32 2 2 2 C2.144375 2.763125 2.28875 3.52625 2.4375 4.3125 C2.9632594 7.08172908 2.9632594 7.08172908 4 10 C4.66 10 5.32 10 6 10 C7.40234375 12.046875 7.40234375 12.046875 8.9375 14.75 C12.24000983 21.23871633 12.24000983 21.23871633 18 25 C18 24.01 18 23.02 18 22 C18.66 22 19.32 22 20 22 C19.91237 24.85552944 19.80540993 27.70818989 19.6875 30.5625 C19.66494141 31.36236328 19.64238281 32.16222656 19.61914062 32.98632812 C19.37972486 38.31877015 18.53698398 42.27424552 16 47 C13.8125 47.9375 13.8125 47.9375 12 48 C12.76167185 42.4144064 12.76167185 42.4144064 14.046875 40.1796875 C15.32656806 37.25317631 15.11637357 35.04400142 14.875 31.875 C14.81054688 30.82054687 14.74609375 29.76609375 14.6796875 28.6796875 C14.45539063 27.79539063 14.23109375 26.91109375 14 26 C12.10945826 24.82033819 12.10945826 24.82033819 10 24 C8.7265625 22.23046875 8.7265625 22.23046875 7.625 20.1875 C5.95345086 17.32568367 4.42674113 15.29177957 1.8125 13.25 C-1 11 -1 11 -1.6953125 8.91796875 C-2.95164023 6.59303522 -2.95164023 6.59303522 -6.44921875 6.28515625 C-7.8607704 6.19069803 -9.27385364 6.11731226 -10.6875 6.0625 C-11.38294922 6.00771484 -12.07839844 5.95292969 -12.79492188 5.89648438 C-20.82662301 5.46902689 -27.73068317 9.20260973 -34 14 C-37.99561787 18.61032831 -38.53371766 22.1248425 -39 28 C-39.2784375 29.2684375 -39.2784375 29.2684375 -39.5625 30.5625 C-40.1430037 33.79673491 -40.2427956 36.7222594 -40 40 C-38.85602615 41.72840348 -38.85602615 41.72840348 -37 43 C-34.28184043 45.64662906 -31.70401114 48.30822966 -29.3125 51.25 C-27.2957678 54.01742194 -27.2957678 54.01742194 -25 55 C-12.60803391 55.75388659 -12.60803391 55.75388659 -1 52 C-0.505 51.01 -0.505 51.01 0 50 C0.928125 50.226875 1.85625 50.45375 2.8125 50.6875 C3.864375 50.790625 4.91625 50.89375 6 51 C7.77190909 49.64555699 7.77190909 49.64555699 9 48 C9.66 48 10.32 48 11 48 C11.43408951 50.96627829 11.47312185 53.15708177 9.98046875 55.81640625 C5.10080568 62.04032912 -1.32146901 64.7379373 -9 66 C-19.59596396 67.00678162 -28.92303826 64.47417057 -37.21875 57.69140625 C-45.17477277 50.13667411 -48.09840401 42.43544891 -48.4375 31.5625 C-48.15364273 20.6230776 -44.90684243 14.06378254 -37.36328125 6.19921875 C-27.28391813 -3.18041998 -12.74868598 -6.37434299 0 0 Z " fill="#0B182F" transform="translate(67,210)"/>
<path d="M0 0 C7.01162551 5.6139593 12.09063115 13.42916672 13.7265625 22.3828125 C14.69336523 33.04934093 12.62737928 42.94848088 5.7265625 51.3828125 C-2.05020774 59.42530382 -10.66628138 63.45819131 -21.8359375 63.6953125 C-31.17830419 63.6079099 -39.11680981 61.39920195 -46.03515625 54.91015625 C-47.71713194 52.8355427 -48.19551675 51.03211794 -48.2734375 48.3828125 C-46.7884375 47.8878125 -46.7884375 47.8878125 -45.2734375 47.3828125 C-45.2734375 45.7328125 -45.2734375 44.0828125 -45.2734375 42.3828125 C-46.2634375 42.0528125 -47.2534375 41.7228125 -48.2734375 41.3828125 C-48.2528125 40.1865625 -48.2321875 38.9903125 -48.2109375 37.7578125 C-48.20461179 34.20276381 -48.57454875 30.87725626 -49.2734375 27.3828125 C-46.2734375 28.3828125 -46.2734375 28.3828125 -44.95703125 30.60546875 C-43.01995158 35.02006723 -41.18602953 39.20915123 -40.2109375 43.9453125 C-39.68147411 47.38611053 -39.68147411 47.38611053 -37.56640625 48.49609375 C-29.68165013 51.54522431 -19.63619519 54.58384597 -11.30859375 51.703125 C-9.62937715 50.93149374 -7.95136589 50.15724099 -6.2734375 49.3828125 C-5.2628125 49.4653125 -4.2521875 49.5478125 -3.2109375 49.6328125 C0.19205592 49.34319604 0.70292645 48.85107268 2.9765625 46.4453125 C8.06560546 39.82822792 8.08826555 31.42871357 8.7265625 23.3828125 C9.0565625 23.3828125 9.3865625 23.3828125 9.7265625 23.3828125 C10.2215625 25.8578125 10.2215625 25.8578125 10.7265625 28.3828125 C10.7265625 26.4028125 10.7265625 24.4228125 10.7265625 22.3828125 C10.0665625 22.3828125 9.4065625 22.3828125 8.7265625 22.3828125 C8.2934375 21.2896875 7.8603125 20.1965625 7.4140625 19.0703125 C6.19859448 16.2228076 5.01971417 14.4848682 2.7265625 12.3828125 C2.3346875 11.5990625 1.9428125 10.8153125 1.5390625 10.0078125 C-1.39646907 5.75635298 -5.53920185 2.97781576 -10.62719727 1.87060547 C-13.08130727 1.63621719 -15.49611709 1.53893888 -17.9609375 1.5078125 C-18.78916016 1.47429687 -19.61738281 1.44078125 -20.47070312 1.40625 C-24.59703282 1.27410173 -28.22985519 1.48179688 -32.2734375 2.3828125 C-34.61509249 2.11409799 -36.95228039 1.79242846 -39.2734375 1.3828125 C-38.6134375 1.0528125 -37.9534375 0.7228125 -37.2734375 0.3828125 C-37.2115625 -0.2359375 -37.1496875 -0.8546875 -37.0859375 -1.4921875 C-36.2734375 -3.6171875 -36.2734375 -3.6171875 -33.0859375 -5.3046875 C-21.79588405 -9.86658268 -9.58439596 -6.8177662 0 0 Z " fill="#505564" transform="translate(255.2734375,216.6171875)"/>
<path d="M0 0 C4.96086323 1.93639643 7.89928562 4.53238083 11.0625 8.75 C12 11 12 11 12 13 C12.639375 13.20625 13.27875 13.4125 13.9375 13.625 C16 15 16 15 16.75 18.125 C16.8325 19.07375 16.915 20.0225 17 21 C17.66 21 18.32 21 19 21 C19.495 25.455 19.495 25.455 20 30 C19.34 29.01 18.68 28.02 18 27 C17.86464844 27.9178125 17.72929687 28.835625 17.58984375 29.78125 C16.36545298 36.76101054 15.21465753 42.52136739 10.10546875 47.65234375 C6.90852982 49.69862191 3.97304618 49.87879828 0.234375 49.8671875 C-2.28946747 49.82872376 -2.28946747 49.82872376 -5 52 C-13.71718828 53.27366888 -23.27411319 51.05697253 -31 47 C-31.33 47 -31.66 47 -32 47 C-32.14695313 46.27296875 -32.29390625 45.5459375 -32.4453125 44.796875 C-34.00726954 37.79499863 -36.29109008 31.95389 -39.79296875 25.69140625 C-41.06033342 22.86547013 -41.24961143 21.05635325 -41 18 C-40.34 18 -39.68 18 -39 18 C-38.67 16.02 -38.34 14.04 -38 12 C-37.34 12 -36.68 12 -36 12 C-35.34 10.02 -34.68 8.04 -34 6 C-33.34 6 -32.68 6 -32 6 C-31.9175 5.38125 -31.835 4.7625 -31.75 4.125 C-31 2 -31 2 -29.3125 0.75 C-26.46305879 -0.17414309 -23.97987718 -0.06477994 -21 0 C-15.39576557 -2.80211722 -6.01801313 -1.00889066 0 0 Z M-28 3 C-28.33 4.65 -28.66 6.3 -29 8 C-30.32 8.33 -31.64 8.66 -33 9 C-32.52476432 11.95901459 -32.04499898 14.91716903 -31.5625 17.875 C-31.42779297 18.71675781 -31.29308594 19.55851562 -31.15429688 20.42578125 C-31.02216797 21.23144531 -30.89003906 22.03710938 -30.75390625 22.8671875 C-30.63345947 23.61081543 -30.5130127 24.35444336 -30.38891602 25.12060547 C-30.06752895 27.07884647 -30.06752895 27.07884647 -29 29 C-29 29.99 -29 30.98 -29 32 C-27.68 32.33 -26.36 32.66 -25 33 C-25 34.98 -25 36.96 -25 39 C-18.78660274 41.8520512 -13.87264262 43.71096303 -7 43 C-5.6520257 42.36345658 -4.31403276 41.70394612 -3 41 C-2.0409375 41.2784375 -2.0409375 41.2784375 -1.0625 41.5625 C1.11139614 42.23237287 1.11139614 42.23237287 3.4375 40.9375 C7.96197061 37.5921709 7.96197061 37.5921709 11 33 C11.10073659 30.17499556 10.7986399 27.5952242 10.37890625 24.80078125 C10.02764131 22.20431774 10.06324443 19.97591289 10.25 17.375 C10.23413836 12.98132526 9.29868996 9.51579892 7.00390625 5.75 C2.66732177 1.96288529 -3.5466729 2.95837155 -9 3 C-10.83599582 2.84066792 -12.67020453 2.65685333 -14.5 2.4375 C-21.32908789 1.71701481 -21.32908789 1.71701481 -28 3 Z " fill="#B7D0EA" transform="translate(247,218)"/>
<path d="M0 0 C1.0625 1.875 1.0625 1.875 2 4 C1.67 4.66 1.34 5.32 1 6 C1.66 6.33 2.32 6.66 3 7 C2.34 8.32 1.68 9.64 1 11 C8.23310297 11.86797236 13.60766386 9.28626674 20.0234375 6.3125 C23 5 23 5 25 5 C24.505 3.02 24.505 3.02 24 1 C25.32 1.66 26.64 2.32 28 3 C28 4.32 28 5.64 28 7 C27.28972656 7.27714844 26.57945312 7.55429688 25.84765625 7.83984375 C24.92855469 8.20207031 24.00945312 8.56429687 23.0625 8.9375 C22.14597656 9.29714844 21.22945312 9.65679687 20.28515625 10.02734375 C18.07581467 10.7996218 18.07581467 10.7996218 17 12 C15.453125 12.0928125 15.453125 12.0928125 13.875 12.1875 C9.41016565 13.12367494 7.66616713 14.624437 4.48046875 17.72265625 C3 19 3 19 1 19 C1 20.98 1 22.96 1 25 C0.38125 25.04125 -0.2375 25.0825 -0.875 25.125 C-3.22298888 25.82987213 -3.22298888 25.82987213 -4.25 28.3125 C-5.48274217 34.37348234 -5.97475299 41.07574103 -4 47 C-2.67592331 47.68486725 -1.34090759 48.34870203 0 49 C2.25 51 2.25 51 4 53 C4 53.66 4 54.32 4 55 C4.66 55 5.32 55 6 55 C6.33 56.65 6.66 58.3 7 60 C8.32 60.33 9.64 60.66 11 61 C11 61.66 11 62.32 11 63 C17.27 63.66 23.54 64.32 30 65 C30 64.34 30 63.68 30 63 C31.98 62.505 31.98 62.505 34 62 C33.67 63.98 33.34 65.96 33 68 C32.01 68 31.02 68 30 68 C30.66 69.65 31.32 71.3 32 73 C26.65475953 76.56349365 19.52320132 75.66612964 13.35546875 74.5 C8.28018745 72.97828022 4.74275293 70.74275293 1 67 C1 66.34 1 65.68 1 65 C0.21625 64.731875 -0.5675 64.46375 -1.375 64.1875 C-4 63 -4 63 -6 60 C-7.21526288 56.67919692 -8.14699094 53.27229461 -9.125 49.875 C-9.40214844 48.96234375 -9.67929688 48.0496875 -9.96484375 47.109375 C-13.02304464 36.53372462 -12.72911904 27.14350354 -8.0859375 17.00390625 C-6.44874046 14.2286576 -5.34377287 13.10938228 -2.25 12.125 C-1.5075 12.08375 -0.765 12.0425 0 12 C-0.33 11.34 -0.66 10.68 -1 10 C-1.09472912 8.48154798 -1.1298841 6.95889616 -1.125 5.4375 C-1.12757813 4.63183594 -1.13015625 3.82617188 -1.1328125 2.99609375 C-1 1 -1 1 0 0 Z " fill="#0A101E" transform="translate(141,129)"/>
<path d="M0 0 C7.71580632 -0.64298386 12.86160032 2.06824642 18.75 6.9375 C20.96192315 8.88598062 22.28265582 10.42854269 23.9375 12.9375 C25.91176318 15.38881479 25.91176318 15.38881479 29.375 15.0625 C35.67456957 13.84091046 41.86270484 11.85325626 48 10 C48.33 8.35 48.66 6.7 49 5 C49.33 5 49.66 5 50 5 C50.28875 6.11375 50.5775 7.2275 50.875 8.375 C51.69241329 12.00291092 51.69241329 12.00291092 54 14 C54.30078125 15.875 54.30078125 15.875 54.3125 18 C54.32925781 18.70125 54.34601563 19.4025 54.36328125 20.125 C54.24339844 20.74375 54.12351563 21.3625 54 22 C53.01 22.66 52.02 23.32 51 24 C51 24.66 51 25.32 51 26 C51.60328125 25.97679687 52.2065625 25.95359375 52.828125 25.9296875 C54.02695313 25.90261719 54.02695313 25.90261719 55.25 25.875 C56.43335938 25.84019531 56.43335938 25.84019531 57.640625 25.8046875 C60.20731941 26.0171622 61.7916067 26.71345895 64 28 C64 28.66 64 29.32 64 30 C62.35 30 60.7 30 59 30 C59.66 31.32 60.32 32.64 61 34 C57.63279613 32.60667426 56.0140476 31.0210714 54 28 C46.16008251 28.47039505 39.27928865 31.22937188 32 34 C31.86722656 34.83144531 31.73445313 35.66289062 31.59765625 36.51953125 C31.42105469 37.60621094 31.24445313 38.69289062 31.0625 39.8125 C30.88847656 40.89144531 30.71445313 41.97039062 30.53515625 43.08203125 C30 46 30 46 29 49 C25.38357376 50.6691198 21.79425988 49.65669883 18 49 C18.99 48.505 18.99 48.505 20 48 C21.00916033 46.23408113 21.00916033 46.23408113 22 44 C22.53625 43.175 23.0725 42.35 23.625 41.5 C25.95291067 35.57440921 26.24578766 29.30778102 23.98046875 23.29296875 C21.97870735 19.5494935 20.57879404 17.3858627 17 15 C17 14.34 17 13.68 17 13 C16.484375 12.773125 15.96875 12.54625 15.4375 12.3125 C13.30241997 11.16284152 11.50460924 9.93750007 9.5625 8.5 C6.82224885 6.49796306 4.24384908 5.08128303 1 4 C1.66 3.67 2.32 3.34 3 3 C3 2.34 3 1.68 3 1 C2.01 0.67 1.02 0.34 0 0 Z " fill="#3B506F" transform="translate(170,132)"/>
<path d="M0 0 C0.33 0.99 0.66 1.98 1 3 C1.99 3.33 2.98 3.66 4 4 C4.33 6.31 4.66 8.62 5 11 C5.66 11 6.32 11 7 11 C7.08636719 11.58265625 7.17273438 12.1653125 7.26171875 12.765625 C8.3422326 19.07027465 10.308443 24.58331092 12.87890625 30.43359375 C14 33 14 33 15 36 C15.66 36 16.32 36 17 36 C19.39044785 40.24111716 20.05431278 44.21166279 19 49 C16 51.5625 16 51.5625 13 53 C18.7847887 51.77897265 18.7847887 51.77897265 23 48 C23.71447643 45.89667109 23.71447643 45.89667109 24 44 C24.598125 44.78375 25.19625 45.5675 25.8125 46.375 C27.91085249 49.14574323 27.91085249 49.14574323 31 51 C30.70727539 52.87768555 30.70727539 52.87768555 30 55 C27.46195867 56.49771343 25.12842985 57.67096653 22.4375 58.8125 C21.74591797 59.13669922 21.05433594 59.46089844 20.34179688 59.79492188 C15.0996982 62.07643174 11.59517112 62.12658676 6 61 C6.20625 60.46375 6.4125 59.9275 6.625 59.375 C7.1314747 56.16732692 6.15400225 53.98682934 5 51 C5 54.63 5 58.26 5 62 C3.02 62.495 3.02 62.495 1 63 C1.495 54.09 1.495 54.09 2 45 C3.32 45.33 4.64 45.66 6 46 C5.82871582 45.410979 5.65743164 44.82195801 5.48095703 44.21508789 C4.69274438 41.49838873 3.90885178 38.78046047 3.125 36.0625 C2.85558594 35.13630859 2.58617187 34.21011719 2.30859375 33.25585938 C0.66364932 27.53867447 -0.77308144 21.82046522 -2 16 C-2.226875 15.01 -2.45375 14.02 -2.6875 13 C-3.10752139 8.96779466 -2.95734619 4.95425602 -2 1 C-1.34 0.67 -0.68 0.34 0 0 Z " fill="#DCE6F2" transform="translate(136,79)"/>
<path d="M0 0 C4.8517339 3.13752385 7.66549221 7.16548393 9.40625 12.7265625 C11.061211 21.20243753 10.00095388 28.38596715 5.82421875 35.8671875 C5.32921875 36.8571875 5.32921875 36.8571875 4.82421875 37.8671875 C3.17421875 37.8671875 1.52421875 37.8671875 -0.17578125 37.8671875 C-0.50578125 38.8571875 -0.83578125 39.8471875 -1.17578125 40.8671875 C-3.23828125 41.5546875 -3.23828125 41.5546875 -5.17578125 41.8671875 C-5.17578125 43.1871875 -5.17578125 44.5071875 -5.17578125 45.8671875 C-7.48578125 45.5371875 -9.79578125 45.2071875 -12.17578125 44.8671875 C-12.50578125 43.8771875 -12.83578125 42.8871875 -13.17578125 41.8671875 C-13.79324219 41.91359375 -14.41070312 41.96 -15.046875 42.0078125 C-21.71274294 42.2918982 -26.32731564 41.03157469 -32.17578125 37.8671875 C-32.17578125 37.2071875 -32.17578125 36.5471875 -32.17578125 35.8671875 C-34.15578125 35.8671875 -36.13578125 35.8671875 -38.17578125 35.8671875 C-38.17578125 33.2271875 -38.17578125 30.5871875 -38.17578125 27.8671875 C-37.51578125 28.8571875 -36.85578125 29.8471875 -36.17578125 30.8671875 C-33.21042092 31.85564094 -31.05891593 32.04726569 -27.95703125 32.1484375 C-26.43529297 32.20451172 -26.43529297 32.20451172 -24.8828125 32.26171875 C-23.82449219 32.29652344 -22.76617187 32.33132812 -21.67578125 32.3671875 C-19.58189394 32.43604859 -17.48812966 32.50879093 -15.39453125 32.5859375 C-14.46576172 32.61623047 -13.53699219 32.64652344 -12.58007812 32.67773438 C-10.17578125 32.8671875 -10.17578125 32.8671875 -7.17578125 33.8671875 C-6.68078125 32.8771875 -6.68078125 32.8771875 -6.17578125 31.8671875 C-4.50515625 31.9290625 -4.50515625 31.9290625 -2.80078125 31.9921875 C0.867879 32.27840609 0.867879 32.27840609 2.82421875 29.8671875 C3.81421875 29.8671875 4.80421875 29.8671875 5.82421875 29.8671875 C5.36599407 26.39777204 4.93290192 23.19323701 3.82421875 19.8671875 C4.31921875 18.9390625 4.31921875 18.9390625 4.82421875 17.9921875 C6.17900362 15.11326966 5.82490248 13.86923868 4.82421875 10.8671875 C3.52849492 8.84261902 2.19688695 6.84039803 0.82421875 4.8671875 C0.32921875 3.3821875 0.32921875 3.3821875 -0.17578125 1.8671875 C-3.68768934 0.63748872 -3.68768934 0.63748872 -7.17578125 -0.1328125 C-7.50578125 0.5271875 -7.83578125 1.1871875 -8.17578125 1.8671875 C-9.04203125 1.8259375 -9.90828125 1.7846875 -10.80078125 1.7421875 C-14.31674383 1.87240834 -16.87426201 2.71883298 -20.17578125 3.8671875 C-21.49578125 3.8671875 -22.81578125 3.8671875 -24.17578125 3.8671875 C-26.20034973 5.16291133 -28.20257072 6.4945193 -30.17578125 7.8671875 C-30.83578125 7.8671875 -31.49578125 7.8671875 -32.17578125 7.8671875 C-32.46453125 8.7746875 -32.75328125 9.6821875 -33.05078125 10.6171875 C-33.94454324 13.19916659 -34.92795014 15.45471402 -36.17578125 17.8671875 C-36.50578125 18.8571875 -36.83578125 19.8471875 -37.17578125 20.8671875 C-38.16578125 20.8671875 -39.15578125 20.8671875 -40.17578125 20.8671875 C-40.50578125 21.5271875 -40.83578125 22.1871875 -41.17578125 22.8671875 C-42.15630409 20.21977584 -42.2314396 19.04272539 -41.36328125 16.3046875 C-40.17578125 13.8671875 -40.17578125 13.8671875 -38.17578125 10.8671875 C-38.83578125 10.8671875 -39.49578125 10.8671875 -40.17578125 10.8671875 C-38.86964183 6.94876923 -37.34448277 4.54077941 -34.17578125 1.8671875 C-33.51578125 1.8671875 -32.85578125 1.8671875 -32.17578125 1.8671875 C-31.84578125 0.5471875 -31.51578125 -0.7728125 -31.17578125 -2.1328125 C-30.18578125 -2.1328125 -29.19578125 -2.1328125 -28.17578125 -2.1328125 C-28.17578125 -2.7928125 -28.17578125 -3.4528125 -28.17578125 -4.1328125 C-18.32650387 -6.88613322 -8.9378939 -4.65348157 0 0 Z " fill="#C5DBF1" transform="translate(272.17578125,120.1328125)"/>
<path d="M0 0 C1.625 2.3125 1.625 2.3125 3 5 C3.99 5.804375 4.98 6.60875 6 7.4375 C9.16094525 10.13747407 10.20549277 12.32941702 12 16 C12.66902344 16.27328125 13.33804688 16.5465625 14.02734375 16.828125 C16 18 16 18 16.71484375 20.50390625 C17.2149015 27.3731206 16.82544591 32.67866339 14 39 C14.99 39 15.98 39 17 39 C17.12375 38.21625 17.2475 37.4325 17.375 36.625 C18 34 18 34 20 32 C18.75045646 39.71457314 14.79296688 45.86908648 9 51 C8.01 50.505 8.01 50.505 7 50 C7.639375 49.46375 8.27875 48.9275 8.9375 48.375 C11.38529404 45.55632807 11.66714612 43.66139268 12 40 C11.29875 40.70125 10.5975 41.4025 9.875 42.125 C8.92625 42.74375 7.9775 43.3625 7 44 C3.6875 43.25 3.6875 43.25 1 42 C0.67 42.99 0.34 43.98 0 45 C-5.24604175 47.89067607 -10.2590852 48.35786893 -16.1875 48.5 C-16.87658447 48.53053467 -17.56566895 48.56106934 -18.27563477 48.5925293 C-22.13814064 48.59486653 -23.78008096 48.1868532 -26.75390625 45.66015625 C-27.49511719 44.78230469 -28.23632812 43.90445313 -29 43 C-30.82424754 41.47380865 -32.67594363 39.99561815 -34.546875 38.52734375 C-36 37 -36 37 -36.515625 34.87890625 C-36.75539063 33.94884766 -36.75539063 33.94884766 -37 33 C-37.99 32.67 -38.98 32.34 -40 32 C-40.08213506 27.81111183 -39.89619311 24.08265749 -39 20 C-38.938125 18.741875 -38.87625 17.48375 -38.8125 16.1875 C-38.15084073 11.02071949 -35.68816422 7.58468867 -32 4 C-21.52950503 -3.60141446 -12.19185957 -4.27784546 0 0 Z M-27 3 C-27.969375 3.391875 -28.93875 3.78375 -29.9375 4.1875 C-32.42466517 5.95116158 -32.42466517 5.95116158 -32.3125 9.6875 C-32.209375 10.780625 -32.10625 11.87375 -32 13 C-32.99 13 -33.98 13 -35 13 C-35 16.96 -35 20.92 -35 25 C-35.66 25.33 -36.32 25.66 -37 26 C-37.65555119 28.52733235 -37.65555119 28.52733235 -38 31 C-35.69 31 -33.38 31 -31 31 C-30.87625 31.804375 -30.87625 31.804375 -30.75 32.625 C-29.45315457 36.73167718 -27.49901786 40.0577602 -23.8125 42.375 C-15.94236507 44.12391887 -8.61624656 42.5812733 -0.98828125 40.43359375 C1 40 1 40 5 40 C5 39.34 5 38.68 5 38 C5.66 38 6.32 38 7 38 C7.33 36.02 7.66 34.04 8 32 C8.66 32 9.32 32 10 32 C10 30.35 10 28.7 10 27 C9.34 27 8.68 27 8 27 C8.01160156 26.08476562 8.02320313 25.16953125 8.03515625 24.2265625 C8.04417969 23.03804687 8.05320313 21.84953125 8.0625 20.625 C8.07410156 19.44164062 8.08570313 18.25828125 8.09765625 17.0390625 C8.21466593 14.08078479 8.21466593 14.08078479 7 12 C6.34 12 5.68 12 5 12 C5 10.68 5 9.36 5 8 C3.35 8 1.7 8 0 8 C0 6.68 0 5.36 0 4 C-1.98 4.33 -3.96 4.66 -6 5 C-6 4.01 -6 3.02 -6 2 C-16.70870742 0.66009946 -16.70870742 0.66009946 -27 3 Z " fill="#97B5D4" transform="translate(66,218)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C2.67 1.495 2.34 1.99 2 2.5 C-2.58047758 13.95119394 4.56469342 30.41395021 9 41 C10.6933037 44.53986262 12.46538355 48.0380773 14.32104492 51.49560547 C16.33876934 55.32365669 17.76775595 58.65013162 18 63 C15.9764633 65.93739199 14.41357199 67.64530297 10.8828125 68.53125 C8.93160731 68.78122647 6.96461467 68.90010434 5 69 C9.75 65.125 9.75 65.125 12 64 C12.0272415 62.58344207 12.04650467 61.16672955 12.0625 59.75 C12.07410156 58.96109375 12.08570313 58.1721875 12.09765625 57.359375 C12.00385306 55.09308998 11.63241063 53.1711105 11 51 C10.34 51 9.68 51 9 51 C6.15538012 47.12097289 4.58972173 42.66024958 2.8671875 38.20703125 C2.0404557 36.00662743 2.0404557 36.00662743 1 34 C0.86584528 31.3276379 0.95681459 28.67749512 1 26 C0.34 26 -0.32 26 -1 26 C-1.268125 24.906875 -1.53625 23.81375 -1.8125 22.6875 C-3.06706518 18.67458308 -3.06706518 18.67458308 -6 16 C-6.66 16 -7.32 16 -8 16 C-8.05418326 18.08304538 -8.09287551 20.16649768 -8.125 22.25 C-8.14820313 23.41015625 -8.17140625 24.5703125 -8.1953125 25.765625 C-8.00081659 28.98647727 -7.47503604 30.24162935 -6 33 C-5.4688156 35.36390965 -4.99569808 37.74118685 -4.5625 40.125 C-3.54573404 45.55391001 -2.29035659 50.80138628 -0.55078125 56.046875 C0 58 0 58 0 61 C-1.91015625 60.69140625 -1.91015625 60.69140625 -4 60 C-5.77107751 56.22683488 -6.8732909 52.44445652 -8.015625 48.4375 C-10.88976833 38.53150792 -14.81297094 29.90910222 -20 21 C-20.5259375 20.07058594 -21.051875 19.14117187 -21.59375 18.18359375 C-23.90340266 14.59721642 -26.74432891 13.30694182 -30.8125 12.3125 C-31.534375 12.209375 -32.25625 12.10625 -33 12 C-33 11.67 -33 11.34 -33 11 C-32.03320312 10.96261719 -31.06640625 10.92523438 -30.0703125 10.88671875 C-18.95074992 10.32523589 -9.79251594 9.29591748 -1 2 C-0.67 1.34 -0.34 0.68 0 0 Z " fill="#B7CBE5" transform="translate(142,64)"/>
<path d="M0 0 C1.62711336 1.14912835 3.19842933 2.37671222 4.75390625 3.62109375 C1.91423394 3.62109375 -0.48345086 3.21842194 -3.24609375 2.62109375 C-3.24609375 3.61109375 -3.24609375 4.60109375 -3.24609375 5.62109375 C-8.93148701 4.71659937 -8.93148701 4.71659937 -10.99609375 4.08984375 C-14.18033972 3.42645917 -17.24813087 3.52852002 -20.49609375 3.55859375 C-22.39101562 3.57212891 -22.39101562 3.57212891 -24.32421875 3.5859375 C-25.2884375 3.59753906 -26.25265625 3.60914062 -27.24609375 3.62109375 C-27.24609375 4.28109375 -27.24609375 4.94109375 -27.24609375 5.62109375 C-28.23609375 5.62109375 -29.22609375 5.62109375 -30.24609375 5.62109375 C-30.33890625 6.48734375 -30.33890625 6.48734375 -30.43359375 7.37109375 C-31.56378135 10.50084403 -33.65627067 11.58623276 -36.24609375 13.62109375 C-38.03572194 16.2396707 -38.03572194 16.2396707 -39.24609375 18.62109375 C-38.58609375 18.62109375 -37.92609375 18.62109375 -37.24609375 18.62109375 C-37.71015625 19.42546875 -37.71015625 19.42546875 -38.18359375 20.24609375 C-39.47623057 23.13551723 -40.05216829 25.45364464 -40.24609375 28.62109375 C-39.77171875 29.36359375 -39.29734375 30.10609375 -38.80859375 30.87109375 C-36.46852818 34.98960915 -37.00308394 38.98590667 -37.24609375 43.62109375 C-39.22609375 43.62109375 -41.20609375 43.62109375 -43.24609375 43.62109375 C-43.44140625 41.5703125 -43.63671875 39.51953125 -43.83203125 37.46875 C-44.03699219 36.55416016 -44.03699219 36.55416016 -44.24609375 35.62109375 C-44.90609375 35.29109375 -45.56609375 34.96109375 -46.24609375 34.62109375 C-46.24609375 36.27109375 -46.24609375 37.92109375 -46.24609375 39.62109375 C-46.57609375 39.62109375 -46.90609375 39.62109375 -47.24609375 39.62109375 C-47.53484375 38.50734375 -47.82359375 37.39359375 -48.12109375 36.24609375 C-48.93850704 32.61818283 -48.93850704 32.61818283 -51.24609375 30.62109375 C-52.50185672 22.26696539 -51.0314374 15.52549469 -46.24609375 8.62109375 C-34.61715428 -6.05045073 -16.1306016 -9.90278672 0 0 Z " fill="#40444F" transform="translate(271.24609375,112.37890625)"/>
<path d="M0 0 C0.66 0.99 1.32 1.98 2 3 C2.66 2.67 3.32 2.34 4 2 C3.67 4.64 3.34 7.28 3 10 C3.66 10.33 4.32 10.66 5 11 C5.33 9.35 5.66 7.7 6 6 C7.32 5.67 8.64 5.34 10 5 C10 5.99 10 6.98 10 8 C10.66 8 11.32 8 12 8 C11.67 11.63 11.34 15.26 11 19 C12.65 19 14.3 19 16 19 C18.54407165 20.34653684 19.93834583 21.89040039 22 24 C22 25.32 22 26.64 22 28 C22.99 28 23.98 28 25 28 C25 28.66 25 29.32 25 30 C27.41760876 29.88573491 29.83347218 29.75900339 32.25 29.625 C32.93191406 29.5940625 33.61382812 29.563125 34.31640625 29.53125 C38.04152967 29.31425252 40.76146664 28.84727798 44 27 C45.34061543 27.30271961 46.67405895 27.63837971 48 28 C50.68149993 27.61432869 50.68149993 27.61432869 53 27 C53.66 25.02 54.32 23.04 55 21 C55.99 21 56.98 21 58 21 C58 17.7 58 14.4 58 11 C58.66 11 59.32 11 60 11 C60 8.03 60 5.06 60 2 C60.33 2 60.66 2 61 2 C61.12375 2.969375 61.2475 3.93875 61.375 4.9375 C61.58125 5.948125 61.7875 6.95875 62 8 C62.99 8.495 62.99 8.495 64 9 C64.84057704 17.40577035 62.11638645 22.75957026 58 30 C57.34 30 56.68 30 56 30 C56 30.66 56 31.32 56 32 C52.67406051 33.42540264 49.5488061 34.32860425 46 35 C45.01 35.495 45.01 35.495 44 36 C41.42466143 36.12541286 38.88808187 36.18517756 36.3125 36.1875 C35.26932617 36.20586914 35.26932617 36.20586914 34.20507812 36.22460938 C25.49052215 36.2490199 17.79349599 33.52295666 11 28 C9.875 24.625 9.875 24.625 10 22 C9.01 22 8.02 22 7 22 C6.01 19.36 5.02 16.72 4 14 C3.01 14.33 2.02 14.66 1 15 C1.45052734 16.58941406 1.45052734 16.58941406 1.91015625 18.2109375 C2.2946467 19.59885426 2.67874079 20.98688087 3.0625 22.375 C3.26166016 23.07367188 3.46082031 23.77234375 3.66601562 24.4921875 C5.11328125 29.7734375 5.11328125 29.7734375 4 32 C-1.3257559 23.12374017 -3.57623663 15.11218335 -1.546875 4.66796875 C-1.09740059 3.09159777 -0.56018482 1.54050826 0 0 Z " fill="#355994" transform="translate(84,30)"/>
<path d="M0 0 C3.49146627 0.87286657 4.74773871 1.68410807 6.75 4.6875 C7.3125 8.25 7.3125 8.25 6.75 11.6875 C4.51257907 13.70117883 2.23755868 14.50795981 -0.5625 15.5390625 C-5.79713824 17.50205184 -9.63225248 19.47414467 -13.72265625 23.3046875 C-15.71078189 25.10467849 -17.94003415 26.34001992 -20.25 27.6875 C-20.765625 28.22375 -21.28125 28.76 -21.8125 29.3125 C-23.25 30.6875 -23.25 30.6875 -25.125 31.0625 C-27.54384487 31.57664873 -27.54384487 31.57664873 -29.5625 34.1875 C-32.81333342 37.21153109 -34.89695743 37.43143867 -39.25 37.6875 C-39.745 36.2025 -39.745 36.2025 -40.25 34.6875 C-41.57 34.6875 -42.89 34.6875 -44.25 34.6875 C-44.25 35.3475 -44.25 36.0075 -44.25 36.6875 C-45.57 37.3475 -46.89 38.0075 -48.25 38.6875 C-48.58 37.3675 -48.91 36.0475 -49.25 34.6875 C-48.59 34.6875 -47.93 34.6875 -47.25 34.6875 C-47.25 34.0275 -47.25 33.3675 -47.25 32.6875 C-46.54875 32.501875 -45.8475 32.31625 -45.125 32.125 C-42.20881316 30.66690658 -41.36376385 29.75150429 -39.4375 27.25 C-36.65645975 23.77369969 -34.30776073 22.71303454 -30.125 21.4296875 C-27.18801861 20.26713237 -25.42954332 17.92292904 -23.25 15.6875 C-20.91666667 14.6875 -18.58333333 13.6875 -16.25 12.6875 C-13.72906969 10.4170585 -13.72906969 10.4170585 -11.25 7.6875 C-4.53603284 0.95954541 -4.53603284 0.95954541 0 0 Z " fill="#ECF4FA" transform="translate(125.25,185.3125)"/>
<path d="M0 0 C0 0.99 0 1.98 0 3 C1.98 2.67 3.96 2.34 6 2 C6 3.32 6 4.64 6 6 C7.65 6 9.3 6 11 6 C11 7.32 11 8.64 11 10 C11.66 10 12.32 10 13 10 C14.44207941 12.88415883 14.09394887 15.41721528 14.0625 18.625 C14.05347656 19.81351563 14.04445312 21.00203125 14.03515625 22.2265625 C14.02355469 23.14179688 14.01195312 24.05703125 14 25 C14.66 25 15.32 25 16 25 C16 26.65 16 28.3 16 30 C15.34 30 14.68 30 14 30 C13.67 31.98 13.34 33.96 13 36 C12.34 36 11.68 36 11 36 C11 36.66 11 37.32 11 38 C9.906875 37.95875 8.81375 37.9175 7.6875 37.875 C3.91107771 37.67925334 3.91107771 37.67925334 1 40 C-5.47693879 41.29538776 -14.12095277 42.69540112 -20 39 C-22.48361793 35.82648821 -24.38075115 33.02511753 -25 29 C-27.31 29 -29.62 29 -32 29 C-31.625 26.5625 -31.625 26.5625 -31 24 C-30.34 23.67 -29.68 23.34 -29 23 C-29 19.04 -29 15.08 -29 11 C-28.01 11 -27.02 11 -26 11 C-26.103125 9.906875 -26.20625 8.81375 -26.3125 7.6875 C-26 4 -26 4 -23.9375 2.1875 C-22.968125 1.795625 -21.99875 1.40375 -21 1 C-20.030625 0.5875 -19.06125 0.175 -18.0625 -0.25 C-12.24680616 -1.83373805 -5.90260784 -0.60581551 0 0 Z M-16 5 C-17.65721428 5.37753106 -19.32405652 5.71697643 -21 6 C-21.19335938 6.79664063 -21.38671875 7.59328125 -21.5859375 8.4140625 C-22.88130431 13.68530762 -24.20537122 18.8724892 -26 24 C-26.34976758 25.32911682 -26.69096017 26.66082739 -27 28 C-25.35 28 -23.7 28 -22 28 C-21.896875 28.7425 -21.79375 29.485 -21.6875 30.25 C-20.90434017 33.38263933 -20.33250464 34.76192875 -18 37 C-15.31896488 37.35268912 -13.10162784 37.47077754 -10.4375 37.375 C-9.40979492 37.37306641 -9.40979492 37.37306641 -8.36132812 37.37109375 C-4.22407816 37.38802627 -4.22407816 37.38802627 -1 35 C0.134375 34.690625 1.26875 34.38125 2.4375 34.0625 C6.45789409 32.95900592 6.45789409 32.95900592 9 30 C9.25069913 27.37429296 9.25069913 27.37429296 9 25 C9.66 25 10.32 25 11 25 C11 24.34 11 23.68 11 23 C10.50886719 22.59136719 10.01773438 22.18273437 9.51171875 21.76171875 C7.29265335 19.17567613 7.70470091 17.15427191 7.8125 13.8125 C7.85310547 12.18248047 7.85310547 12.18248047 7.89453125 10.51953125 C7.92933594 9.68808594 7.96414062 8.85664063 8 8 C4.20960634 5.87000003 1.34263862 5.83297544 -3 6 C-2.67 5.01 -2.34 4.02 -2 3 C-7.73381747 1.9631659 -11.07951512 1.44631648 -16 5 Z " fill="#CDDDF1" transform="translate(60,220)"/>
<path d="M0 0 C3 1 3 1 4.31640625 3.22265625 C6.25348592 7.63725473 8.08740797 11.82633873 9.0625 16.5625 C9.59196339 20.00329803 9.59196339 20.00329803 11.70703125 21.11328125 C20.50363103 24.51503278 30.65457461 27.30406267 39.625 23.4375 C44.0184604 21.56621131 46.37520815 22.10749631 51 23 C49.33333333 24.66666667 47.66666667 26.33333333 46 28 C45.319375 28.7425 44.63875 29.485 43.9375 30.25 C41.9057238 32.0851527 40.67563 32.61776714 38 33 C38 33.66 38 34.32 38 35 C28.42098265 37.89488731 17.77017319 36.60469513 9 32 C5.19086757 29.53049141 2.49269678 27.51093681 1.0625 23.125 C1.041875 22.42375 1.02125 21.7225 1 21 C1.99 20.67 2.98 20.34 4 20 C4 18.35 4 16.7 4 15 C3.01 14.67 2.02 14.34 1 14 C1.020625 12.80375 1.04125 11.6075 1.0625 10.375 C1.06882571 6.81995131 0.69888875 3.49444376 0 0 Z " fill="#050E1D" transform="translate(206,244)"/>
<path d="M0 0 C0.66 2.97 1.32 5.94 2 9 C2.99 9 3.98 9 5 9 C5.309375 9.86625 5.61875 10.7325 5.9375 11.625 C8.7059761 16.15523361 12.2542579 18.67632723 17 21 C21.88627548 22.16770168 26.75331011 22.18321467 31.75 22.1875 C32.51699219 22.19974609 33.28398438 22.21199219 34.07421875 22.22460938 C36.05089071 22.22982029 38.02713827 22.12278359 40 22 C40.66 21.34 41.32 20.68 42 20 C45.625 20.375 45.625 20.375 49 21 C49.375 23.25 49.375 23.25 49 26 C40.64099762 33.31412709 28.61559382 32.84073439 18.13134766 32.24267578 C13.5748456 31.72387131 10.47676243 29.84669413 7 27 C6.34773438 26.58878906 5.69546875 26.17757812 5.0234375 25.75390625 C-0.1811681 22.14495134 -1.28162794 17.98567649 -2.51171875 11.92578125 C-2.75341797 10.47751953 -2.75341797 10.47751953 -3 9 C-3.13019531 8.23042969 -3.26039062 7.46085937 -3.39453125 6.66796875 C-3.63145084 5.11693517 -3.822842 3.55899042 -4 2 C-1 0 -1 0 0 0 Z " fill="#090F1D" transform="translate(89,43)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C0.60199219 2.08636719 1.20398438 2.17273438 1.82421875 2.26171875 C4.6183278 3.20980961 5.28490384 4.32496426 6.8125 6.8125 C7.25207031 7.49957031 7.69164062 8.18664063 8.14453125 8.89453125 C9.15965671 11.39294506 8.91191297 12.51042165 8 15 C7.60167969 14.30132813 7.20335937 13.60265625 6.79296875 12.8828125 C6.26316406 11.97273438 5.73335937 11.06265625 5.1875 10.125 C4.40439453 8.76761719 4.40439453 8.76761719 3.60546875 7.3828125 C1.13219224 3.71201281 -1.39383372 2.75475089 -5.5625 1.9375 C-7.94015535 1.46509229 -9.82870329 1.08564836 -12 0 C-12 -0.66 -12 -1.32 -12 -2 C-14.29399934 -1.77239693 -16.58527637 -1.51721121 -18.875 -1.25 C-20.15117188 -1.11078125 -21.42734375 -0.9715625 -22.7421875 -0.828125 C-26.08718268 -0.37773178 -26.08718268 -0.37773178 -27.2578125 2.015625 C-27.50273438 2.67046875 -27.74765625 3.3253125 -28 4 C-28.99 4.33 -29.98 4.66 -31 5 C-31.99 6.485 -31.99 6.485 -33 8 C-34.32 8 -35.64 8 -37 8 C-36.85805236 10.06277107 -36.71127784 12.12521031 -36.5625 14.1875 C-36.48128906 15.33605469 -36.40007812 16.48460938 -36.31640625 17.66796875 C-36.06587442 20.92404271 -36.06587442 20.92404271 -35.4375 23.78125 C-34.95861747 26.20986855 -35.22477209 27.67431626 -36 30 C-34.02 30 -32.04 30 -30 30 C-29.71125 30.804375 -29.4225 31.60875 -29.125 32.4375 C-28.26737432 35.1326468 -28.26737432 35.1326468 -26 36 C-24.59845619 36.08340387 -23.19305242 36.1073297 -21.7890625 36.09765625 C-20.95632812 36.09443359 -20.12359375 36.09121094 -19.265625 36.08789062 C-18.39421875 36.07951172 -17.5228125 36.07113281 -16.625 36.0625 C-15.32949219 36.05573242 -15.32949219 36.05573242 -14.0078125 36.04882812 C-12.39402911 36.0401117 -10.78025459 36.02934265 -9.16650391 36.01586914 C-6.11100889 35.99348835 -3.05556301 36 0 36 C0.33 34.68 0.66 33.36 1 32 C2.98 31.505 2.98 31.505 5 31 C5 30.01 5 29.02 5 28 C5.66 28 6.32 28 7 28 C7 28.66 7 29.32 7 30 C7.99 30.495 7.99 30.495 9 31 C8.34 31 7.68 31 7 31 C7 31.99 7 32.98 7 34 C6.01 34 5.02 34 4 34 C3.855625 34.61875 3.71125 35.2375 3.5625 35.875 C3 38 3 38 2 40 C0.68 40 -0.64 40 -2 40 C-2.495 40.99 -2.495 40.99 -3 42 C-3.5775 41.79375 -4.155 41.5875 -4.75 41.375 C-6.9872819 40.75548346 -6.9872819 40.75548346 -8.65625 41.96875 C-11.98111466 43.43169045 -15.18972208 43.21249265 -18.75 43.125 C-19.44738281 43.11597656 -20.14476563 43.10695312 -20.86328125 43.09765625 C-22.57566958 43.07419888 -24.28788004 43.03833104 -26 43 C-26 42.34 -26 41.68 -26 41 C-26.99 41 -27.98 41 -29 41 C-29.2475 40.236875 -29.495 39.47375 -29.75 38.6875 C-31.1521131 35.67295684 -32.13922645 34.63472774 -35 33 C-36.65 32.67 -38.3 32.34 -40 32 C-39.67 28.37 -39.34 24.74 -39 21 C-39.66 21 -40.32 21 -41 21 C-41 20.01 -41 19.02 -41 18 C-41.66 18 -42.32 18 -43 18 C-43.33 18.66 -43.66 19.32 -44 20 C-43.73760976 18.32070245 -43.37966646 16.65672637 -43 15 C-42.79310547 14.07574219 -42.79310547 14.07574219 -42.58203125 13.1328125 C-40.69912043 6.63740202 -36.63138794 3.47468618 -31 0 C-22.05112487 -4.81862507 -8.40875743 -6.37027078 0 0 Z " fill="#A6C3E2" transform="translate(135,17)"/>
<path d="M0 0 C-0.33 1.093125 -0.66 2.18625 -1 3.3125 C-1.54210112 7.69577481 -0.14775361 9.89766786 2.375 13.4375 C6.52534968 18.68776567 11.12150671 23.42641254 16 28 C12.09161134 28 10.88405893 26.49432124 8 24 C10.07608099 27.94455388 10.82200357 28.91100178 15 31 C15 33.97 15 36.94 15 40 C6.65753858 38.91578119 -0.08308018 32.57632379 -5.0625 26.125 C-6.04205187 24.75027439 -7.02129236 23.37532677 -8 22 C-8.66 21.34 -9.32 20.68 -10 20 C-9.625 17.375 -9.625 17.375 -9 15 C-9.66 15 -10.32 15 -11 15 C-10.67 13.68 -10.34 12.36 -10 11 C-7.125 10.375 -7.125 10.375 -4 10 C-3.34 10.66 -2.68 11.32 -2 12 C-2.33 10.02 -2.66 8.04 -3 6 C-4.32 5.67 -5.64 5.34 -7 5 C-7 4.01 -7 3.02 -7 2 C-7.66 2 -8.32 2 -9 2 C-9 2.99 -9 3.98 -9 5 C-10.65 4.67 -12.3 4.34 -14 4 C-13.67 4.99 -13.34 5.98 -13 7 C-13.99 7.495 -13.99 7.495 -15 8 C-15.66 7.67 -16.32 7.34 -17 7 C-16.5625 4.625 -16.5625 4.625 -15 2 C-10.23039862 0.07474508 -5.09824135 -0.26144827 0 0 Z " fill="#68788A" transform="translate(198,181)"/>
<path d="M0 0 C1.0625 1.875 1.0625 1.875 2 4 C1.67 4.66 1.34 5.32 1 6 C1.66 6.33 2.32 6.66 3 7 C2.34 8.32 1.68 9.64 1 11 C8.23310297 11.86797236 13.60766386 9.28626674 20.0234375 6.3125 C23 5 23 5 25 5 C24.505 3.02 24.505 3.02 24 1 C25.32 1.66 26.64 2.32 28 3 C28 4.32 28 5.64 28 7 C27.28972656 7.27714844 26.57945312 7.55429688 25.84765625 7.83984375 C24.92855469 8.20207031 24.00945312 8.56429687 23.0625 8.9375 C22.14597656 9.29714844 21.22945312 9.65679687 20.28515625 10.02734375 C18.07581467 10.7996218 18.07581467 10.7996218 17 12 C15.453125 12.0928125 15.453125 12.0928125 13.875 12.1875 C9.41016565 13.12367494 7.66616713 14.624437 4.48046875 17.72265625 C3 19 3 19 1 19 C1 20.98 1 22.96 1 25 C0.38125 25.04125 -0.2375 25.0825 -0.875 25.125 C-3.22298888 25.82987213 -3.22298888 25.82987213 -4.25 28.3125 C-5.79885955 35.92772613 -6.22174395 42.3400296 -2 49 C-2.3125 51.8125 -2.3125 51.8125 -3 54 C-3.66 54 -4.32 54 -5 54 C-5 54.66 -5 55.32 -5 56 C-4.01 56.33 -3.02 56.66 -2 57 C-2.99 57 -3.98 57 -5 57 C-5.33 57.99 -5.66 58.98 -6 60 C-7.02033009 56.69342496 -8.01239551 53.37898264 -9 50.0625 C-9.28617188 49.13630859 -9.57234375 48.21011719 -9.8671875 47.25585938 C-13.00673251 36.60383167 -12.77375002 27.24096692 -8.0859375 17.00390625 C-6.44874046 14.2286576 -5.34377287 13.10938228 -2.25 12.125 C-1.5075 12.08375 -0.765 12.0425 0 12 C-0.33 11.34 -0.66 10.68 -1 10 C-1.09472912 8.48154798 -1.1298841 6.95889616 -1.125 5.4375 C-1.12757813 4.63183594 -1.13015625 3.82617188 -1.1328125 2.99609375 C-1 1 -1 1 0 0 Z " fill="#152544" transform="translate(141,129)"/>
<path d="M0 0 C3.05340895 0.48165787 3.05340895 0.48165787 5.2734375 0.4375 C7.7484375 5.3875 7.7484375 5.3875 10.2734375 10.4375 C8.9534375 10.4375 7.6334375 10.4375 6.2734375 10.4375 C6.2734375 9.7775 6.2734375 9.1175 6.2734375 8.4375 C5.6753125 8.169375 5.0771875 7.90125 4.4609375 7.625 C2.30118942 6.45256533 0.91553494 5.24380718 -0.7265625 3.4375 C-1.809375 4.4275 -1.809375 4.4275 -2.9140625 5.4375 C-5.94254183 7.5910853 -7.12359656 7.84926754 -10.7265625 7.4375 C-11.0565625 6.7775 -11.3865625 6.1175 -11.7265625 5.4375 C-15.65731894 6.01202746 -15.65731894 6.01202746 -18.7265625 8.4375 C-21.04421979 9.15677295 -23.37752124 9.8284893 -25.7265625 10.4375 C-25.7884375 11.71625 -25.8503125 12.995 -25.9140625 14.3125 C-25.94886719 15.03179687 -25.98367187 15.75109375 -26.01953125 16.4921875 C-25.92285156 17.13414062 -25.82617188 17.77609375 -25.7265625 18.4375 C-24.7365625 19.0975 -23.7465625 19.7575 -22.7265625 20.4375 C-22.9121875 21.46875 -23.0978125 22.5 -23.2890625 23.5625 C-23.86477544 28.60127231 -23.86477544 28.60127231 -22.7265625 33.4375 C-20.48579002 35.1731583 -18.31682796 36.21301087 -15.7265625 37.4375 C-18.7265625 38.4375 -18.7265625 38.4375 -21.9140625 37 C-22.8421875 36.484375 -23.7703125 35.96875 -24.7265625 35.4375 C-24.7265625 33.4575 -24.7265625 31.4775 -24.7265625 29.4375 C-26.0465625 29.1075 -27.3665625 28.7775 -28.7265625 28.4375 C-28.7265625 26.7875 -28.7265625 25.1375 -28.7265625 23.4375 C-29.0565625 23.4375 -29.3865625 23.4375 -29.7265625 23.4375 C-30.7165625 17.1675 -31.7065625 10.8975 -32.7265625 4.4375 C-31.4065625 4.4375 -30.0865625 4.4375 -28.7265625 4.4375 C-28.3965625 2.7875 -28.0665625 1.1375 -27.7265625 -0.5625 C-19.05621317 -3.45261644 -8.88594073 -1.22817372 0 0 Z " fill="#D0DFEF" transform="translate(246.7265625,221.5625)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2.66 2.31 3.32 4.62 4 7 C4.33 4.69 4.66 2.38 5 0 C5.99 0.33 6.98 0.66 8 1 C9.09141544 8.77140391 9.23540512 14.7614665 6 22 C6.99 22 7.98 22 9 22 C9.185625 20.824375 9.185625 20.824375 9.375 19.625 C10 17 10 17 12 15 C10.75045646 22.71457314 6.79296688 28.86908648 1 34 C0.01 33.505 0.01 33.505 -1 33 C-0.360625 32.46375 0.27875 31.9275 0.9375 31.375 C3.38529404 28.55632807 3.66714612 26.66139268 4 23 C3.29875 23.70125 2.5975 24.4025 1.875 25.125 C0.92625 25.74375 -0.0225 26.3625 -1 27 C-4.3125 26.25 -4.3125 26.25 -7 25 C-7.495 26.485 -7.495 26.485 -8 28 C-13.24604175 30.89067607 -18.2590852 31.35786893 -24.1875 31.5 C-24.87658447 31.53053467 -25.56566895 31.56106934 -26.27563477 31.5925293 C-30.13814064 31.59486653 -31.78008096 31.1868532 -34.75390625 28.66015625 C-35.49511719 27.78230469 -36.23632812 26.90445312 -37 26 C-38.82424754 24.47380865 -40.67594363 22.99561815 -42.546875 21.52734375 C-44.26206223 19.72455287 -44.46432491 18.38573814 -45 16 C-45.66 15.67 -46.32 15.34 -47 15 C-45.35 15 -43.7 15 -42 15 C-41.690625 16.051875 -41.690625 16.051875 -41.375 17.125 C-39.49032877 21.0656762 -37.83198596 23.8718333 -34 26 C-28.77198537 27.29870522 -23.35871531 27.63087234 -18 28 C-18 27.34 -18 26.68 -18 26 C-7.75899281 21.47032374 -7.75899281 21.47032374 -3 23 C-3 22.34 -3 21.68 -3 21 C-2.34 21 -1.68 21 -1 21 C-1.495 19.02 -1.495 19.02 -2 17 C-0.68 16.34 0.64 15.68 2 15 C2 13.35 2 11.7 2 10 C1.34 10 0.68 10 0 10 C-0.95024979 6.30458414 -0.95024979 3.69541586 0 0 Z " fill="#86A8D3" transform="translate(74,235)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3 3.64 3 6.28 3 9 C5.97 9.33 8.94 9.66 12 10 C12 10.66 12 11.32 12 12 C12.66 12 13.32 12 14 12 C14.3403125 13.175625 14.3403125 13.175625 14.6875 14.375 C15.75035118 17.15933052 15.75035118 17.15933052 18.2644043 18.12451172 C20.94266397 18.98165042 23.28631152 19.39268933 26.08203125 19.6328125 C27.01337891 19.71660156 27.94472656 19.80039063 28.90429688 19.88671875 C29.86400391 19.96535156 30.82371094 20.04398438 31.8125 20.125 C33.28106445 20.25455078 33.28106445 20.25455078 34.77929688 20.38671875 C37.18568978 20.59801179 39.59246612 20.80220763 42 21 C42 22.32 42 23.64 42 25 C31.55820594 28.66225763 23.39970849 29.15634608 13 25 C9.15142458 22.83080294 6.29039291 20.81732152 4 17 C4 16.34 4 15.68 4 15 C5.65 15 7.3 15 9 15 C9 14.34 9 13.68 9 13 C4.71 12.34 0.42 11.68 -4 11 C-4.33 10.01 -4.66 9.02 -5 8 C-4.01 7.67 -3.02 7.34 -2 7 C-0.77030122 3.48809191 -0.77030122 3.48809191 0 0 Z " fill="#1A2537" transform="translate(225,147)"/>
<path d="M0 0 C3.82524236 1.450954 5.19090966 3.38181932 7 7 C7 7.66 7 8.32 7 9 C7.639375 9.20625 8.27875 9.4125 8.9375 9.625 C11 11 11 11 11.75 14.125 C11.87375 15.548125 11.87375 15.548125 12 17 C12.66 17 13.32 17 14 17 C14.495 21.455 14.495 21.455 15 26 C14.34 25.01 13.68 24.02 13 23 C12.86464844 23.9178125 12.72929687 24.835625 12.58984375 25.78125 C11.30725331 33.09278352 9.93233655 38.27146114 4.81640625 43.7421875 C3 45 3 45 -1 45 C-1.62841797 44.03320312 -1.62841797 44.03320312 -2.26953125 43.046875 C-3.94977587 40.61359881 -3.94977587 40.61359881 -7.57421875 40.390625 C-8.9445155 40.32442709 -10.31589455 40.2781749 -11.6875 40.25 C-12.38939453 40.22035156 -13.09128906 40.19070313 -13.81445312 40.16015625 C-15.54235424 40.08962967 -17.2711832 40.04252932 -19 40 C-19 39.67 -19 39.34 -19 39 C-17.9275 38.87625 -16.855 38.7525 -15.75 38.625 C-12.15907736 38.22238632 -12.15907736 38.22238632 -9.8125 36.875 C-7.46013528 35.73937565 -6.47045602 36.382386 -4 37 C-0.70736015 35.83789182 -0.00979059 35.01468588 2 32 C2.66 32 3.32 32 4 32 C4.87669145 27.8434344 4.87669145 27.8434344 4.515625 23.66015625 C3.94331464 20.7075551 4.04335566 18.12476052 4.1875 15.125 C4.26461676 9.43238114 3.21365716 6.61963217 0 2 C0 1.34 0 0.68 0 0 Z " fill="#BED3ED" transform="translate(252,222)"/>
<path d="M0 0 C1.12051758 0.02090698 1.12051758 0.02090698 2.26367188 0.04223633 C7.57207153 0.22046016 11.93525913 0.64187531 16.5625 3.4375 C17.5 5.9375 17.5 5.9375 17.5625 8.4375 C18.0575 9.9225 18.0575 9.9225 18.5625 11.4375 C19.2225 11.4375 19.8825 11.4375 20.5625 11.4375 C21.96484375 13.484375 21.96484375 13.484375 23.5 16.1875 C26.80250983 22.67621633 26.80250983 22.67621633 32.5625 26.4375 C32.5625 25.4475 32.5625 24.4575 32.5625 23.4375 C33.2225 23.4375 33.8825 23.4375 34.5625 23.4375 C34.47487 26.29302944 34.36790993 29.14568989 34.25 32 C34.22744141 32.79986328 34.20488281 33.59972656 34.18164062 34.42382812 C33.94222486 39.75627015 33.09948398 43.71174552 30.5625 48.4375 C28.375 49.375 28.375 49.375 26.5625 49.4375 C27.32417185 43.8519064 27.32417185 43.8519064 28.609375 41.6171875 C29.88906806 38.69067631 29.67887357 36.48150142 29.4375 33.3125 C29.37304688 32.25804687 29.30859375 31.20359375 29.2421875 30.1171875 C29.01789063 29.23289063 28.79359375 28.34859375 28.5625 27.4375 C26.67195826 26.25783819 26.67195826 26.25783819 24.5625 25.4375 C23.2890625 23.66796875 23.2890625 23.66796875 22.1875 21.625 C20.51595086 18.76318367 18.98924113 16.72927957 16.375 14.6875 C13.5625 12.4375 13.5625 12.4375 12.70703125 10.34375 C11.71051487 8.17787833 11.71051487 8.17787833 9.1796875 7.828125 C8.27476563 7.78171875 7.36984375 7.7353125 6.4375 7.6875 C5.52742188 7.63078125 4.61734375 7.5740625 3.6796875 7.515625 C2.98101562 7.48984375 2.28234375 7.4640625 1.5625 7.4375 C1.5625 6.7775 1.5625 6.1175 1.5625 5.4375 C-1.4075 5.1075 -4.3775 4.7775 -7.4375 4.4375 C-7.4375 5.0975 -7.4375 5.7575 -7.4375 6.4375 C-9.4175 7.0975 -11.3975 7.7575 -13.4375 8.4375 C-14.0975 7.1175 -14.7575 5.7975 -15.4375 4.4375 C-10.08342118 0.88453048 -6.38474424 -0.19791564 0 0 Z " fill="#1C3353" transform="translate(52.4375,208.5625)"/>
<path d="M0 0 C4.14345382 3.69951234 7.67430401 7.80410808 8.25 13.453125 C8.25 15.65041595 8.17873274 17.81052398 8 20 C7.34 20 6.68 20 6 20 C6.495 21.98 6.495 21.98 7 24 C6.01 24 5.02 24 4 24 C4.495 25.98 4.495 25.98 5 28 C3.35 28.33 1.7 28.66 0 29 C-0.495 30.485 -0.495 30.485 -1 32 C-4.0625 33.1875 -4.0625 33.1875 -7 34 C-7.495 33.505 -7.495 33.505 -8 33 C-9.38143305 32.93758024 -10.76596961 32.94046891 -12.1484375 32.97265625 C-12.98890625 32.98490234 -13.829375 32.99714844 -14.6953125 33.00976562 C-16.47404283 33.04476979 -18.25269878 33.0837971 -20.03125 33.12695312 C-20.87429687 33.13791016 -21.71734375 33.14886719 -22.5859375 33.16015625 C-23.74681885 33.18541382 -23.74681885 33.18541382 -24.93115234 33.21118164 C-27 33 -27 33 -30 31 C-30.6875 28.375 -30.6875 28.375 -31 26 C-32.98 26 -34.96 26 -37 26 C-36.979375 24.88625 -36.95875 23.7725 -36.9375 22.625 C-36.73619282 19.16784079 -36.73619282 19.16784079 -38 17 C-38.25310306 15.36045464 -38.45536859 13.71277129 -38.625 12.0625 C-38.72039062 11.18722656 -38.81578125 10.31195313 -38.9140625 9.41015625 C-39 7 -39 7 -38 4 C-37.01 4 -36.02 4 -35 4 C-35.20625 5.11375 -35.4125 6.2275 -35.625 7.375 C-35.74875 8.57125 -35.8725 9.7675 -36 11 C-35.34 11.66 -34.68 12.32 -34 13 C-33.5859375 15.8203125 -33.5859375 15.8203125 -33.375 19.125 C-33.30023438 20.22070312 -33.22546875 21.31640625 -33.1484375 22.4453125 C-33.09945312 23.28835937 -33.05046875 24.13140625 -33 25 C-30.69 25 -28.38 25 -26 25 C-26.66 25.33 -27.32 25.66 -28 26 C-28 26.99 -28 27.98 -28 29 C-26.35 28.34 -24.7 27.68 -23 27 C-22.67 27.66 -22.34 28.32 -22 29 C-20.35636866 29.72159424 -18.68949614 30.39351421 -17 31 C-17 30.34 -17 29.68 -17 29 C-15.125 27.9375 -15.125 27.9375 -13 27 C-12.34 27.33 -11.68 27.66 -11 28 C-10.67 27.01 -10.34 26.02 -10 25 C-7.03 25 -4.06 25 -1 25 C-0.25044562 22.0017825 0.41070989 19.03063487 1 16 C1.66 16 2.32 16 3 16 C2.979375 15.05125 2.95875 14.1025 2.9375 13.125 C3 10 3 10 4 8 C3.34 8 2.68 8 2 8 C0.74335022 5.09399739 0 3.20395416 0 0 Z " fill="#C4D8EB" transform="translate(136,21)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2 0.66 2 1.32 2 2 C3.65 2 5.3 2 7 2 C8.15816682 4.89541706 7.9626232 6.12708113 7.0625 9.1875 C5.56493511 14.5611152 5.22362497 19.67087492 7 25 C6.34 25 5.68 25 5 25 C5.33 25.825 5.66 26.65 6 27.5 C7.16782809 31.5873983 7.1458885 34.76923344 7 39 C7.66 39.33 8.32 39.66 9 40 C9 41.65 9 43.3 9 45 C8.01 45.495 8.01 45.495 7 46 C6.34786708 48.02463255 6.34786708 48.02463255 6 50 C-0.74079839 40.65191167 -4.24741671 30.94611982 -2.61328125 19.2265625 C-2.14782083 17.13364119 -1.58447498 15.06285288 -1 13 C0.32 12.67 1.64 12.34 3 12 C3.33 9.69 3.66 7.38 4 5 C3.01 4.319375 3.01 4.319375 2 3.625 C1.34 3.08875 0.68 2.5525 0 2 C0 1.34 0 0.68 0 0 Z " fill="#424C5F" transform="translate(201,219)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1.28875 1.11375 1.5775 2.2275 1.875 3.375 C2.69241329 7.00291092 2.69241329 7.00291092 5 9 C5.26991906 11.68839385 5.08737357 14.29141936 5 17 C4.360625 17.103125 3.72125 17.20625 3.0625 17.3125 C2.381875 17.539375 1.70125 17.76625 1 18 C0.67 18.99 0.34 19.98 0 21 C0 20.34 0 19.68 0 19 C-0.59167969 19.27714844 -1.18335938 19.55429688 -1.79296875 19.83984375 C-6.93296211 22.19602341 -11.27457802 24 -17 24 C-18.33981486 24.3062434 -19.67511887 24.63451555 -21 25 C-21.53229326 23.73392393 -22.05044544 22.46189588 -22.5625 21.1875 C-22.85253906 20.47980469 -23.14257812 19.77210938 -23.44140625 19.04296875 C-24 17 -24 17 -23 14 C-22.67 14.66 -22.34 15.32 -22 16 C-19.07355759 15.05088354 -16.17085986 14.06459637 -13.29296875 12.9765625 C-12.33003906 12.61304688 -11.36710938 12.24953125 -10.375 11.875 C-9.45460937 11.52179688 -8.53421875 11.16859375 -7.5859375 10.8046875 C-5 10 -5 10 -1 10 C-1 9.34 -1 8.68 -1 8 C-3.31 8 -5.62 8 -8 8 C-5.66785852 6.79371992 -3.50357861 5.8345262 -1 5 C-0.67 3.35 -0.34 1.7 0 0 Z " fill="#E6EEF5" transform="translate(219,137)"/>
<path d="M0 0 C-1.32 0.33 -2.64 0.66 -4 1 C-4 1.66 -4 2.32 -4 3 C-4.99 3 -5.98 3 -7 3 C-7.0928125 3.86625 -7.0928125 3.86625 -7.1875 4.75 C-8.3176876 7.87975028 -10.41017692 8.96513901 -13 11 C-14.78962819 13.61857695 -14.78962819 13.61857695 -16 16 C-15.34 16 -14.68 16 -14 16 C-14.4640625 16.804375 -14.4640625 16.804375 -14.9375 17.625 C-16.23013682 20.51442348 -16.80607454 22.83255089 -17 26 C-16.525625 26.7425 -16.05125 27.485 -15.5625 28.25 C-13.22243443 32.3685154 -13.75699019 36.36481292 -14 41 C-15.98 41 -17.96 41 -20 41 C-20.1953125 38.94921875 -20.390625 36.8984375 -20.5859375 34.84765625 C-20.79089844 33.93306641 -20.79089844 33.93306641 -21 33 C-21.66 32.67 -22.32 32.34 -23 32 C-23 33.65 -23 35.3 -23 37 C-23.33 37 -23.66 37 -24 37 C-24.28875 35.88625 -24.5775 34.7725 -24.875 33.625 C-25.69241329 29.99708908 -25.69241329 29.99708908 -28 28 C-29.01970832 20.29290227 -28.04708412 14.57651169 -24 8 C-23 11 -23 11 -23 13 C-23.66 13 -24.32 13 -25 13 C-25 15.31 -25 17.62 -25 20 C-22.53044606 19.58377402 -22.53044606 19.58377402 -20 18 C-19.06184842 15.98723842 -18.42499924 13.9603424 -17.7578125 11.84375 C-17 10 -17 10 -14.8125 8.5 C-14.214375 8.335 -13.61625 8.17 -13 8 C-13 7.34 -13 6.68 -13 6 C-11.625 4.375 -11.625 4.375 -10 3 C-9.34 3 -8.68 3 -8 3 C-8 2.34 -8 1.68 -8 1 C-5.29120665 -0.35439668 -2.99066732 -0.06501451 0 0 Z " fill="#456087" transform="translate(248,115)"/>
<path d="M0 0 C3 1 3 1 4.75 3.875 C6 7 6 7 5 10 C4.34 9.67 3.68 9.34 3 9 C0.25696104 8.32833293 0.25696104 8.32833293 -3 9 C-5.2617813 10.68162178 -7.25009187 12.50008973 -9.265625 14.46875 C-11 16 -11 16 -13 16 C-13.2475 16.598125 -13.495 17.19625 -13.75 17.8125 C-15.90263283 21.57960745 -18.52629176 22.80544126 -22.5 24.4375 C-25.97874137 25.74045249 -25.97874137 25.74045249 -28 28 C-30 30 -30 30 -33.4375 31.375 C-36.77734635 32.89843869 -37.569521 33.40165243 -39.625 36.125 C-42 39 -42 39 -44.3125 40.125 C-48.40059918 39.93485585 -51.50441623 38.0210199 -55 36 C-55 35.67 -55 35.34 -55 35 C-52.36 35.33 -49.72 35.66 -47 36 C-47 35.34 -47 34.68 -47 34 C-46.34 34 -45.68 34 -45 34 C-45 33.34 -45 32.68 -45 32 C-44.49251221 31.74943848 -43.98502441 31.49887695 -43.4621582 31.24072266 C-26.89332098 22.98718463 -13.05729647 13.2652152 0 0 Z " fill="#737E8F" transform="translate(125,178)"/>
<path d="M0 0 C0.495 2.475 0.495 2.475 1 5 C-0.03125 4.95875 -1.0625 4.9175 -2.125 4.875 C-5.89939579 4.9967547 -8.47959996 5.74830221 -12 7 C-13.32 7 -14.64 7 -16 7 C-18.02456848 8.29572383 -20.02678947 9.6273318 -22 11 C-22.66 11 -23.32 11 -24 11 C-24.28875 11.9075 -24.5775 12.815 -24.875 13.75 C-25.76876199 16.33197909 -26.75216889 18.58752652 -28 21 C-28.33 21.99 -28.66 22.98 -29 24 C-29.99 24 -30.98 24 -32 24 C-32.33 24.66 -32.66 25.32 -33 26 C-33.98052284 23.35258834 -34.05565835 22.17553789 -33.1875 19.4375 C-32 17 -32 17 -30 14 C-30.66 14 -31.32 14 -32 14 C-30.69386058 10.08158173 -29.16870152 7.67359191 -26 5 C-25.34 5 -24.68 5 -24 5 C-23.67 3.68 -23.34 2.36 -23 1 C-22.01 1 -21.02 1 -20 1 C-20 0.34 -20 -0.32 -20 -1 C-13.33304963 -2.9202046 -6.40488031 -2.69679171 0 0 Z " fill="#D1E3F2" transform="translate(264,117)"/>
<path d="M0 0 C3.25438355 1.62719177 3.70359632 4.73080811 5 8 C5.33 8.99 5.66 9.98 6 11 C8.93947469 12.58279407 10.44431869 11.87197597 13.6875 10.9375 C17.29752152 9.33401759 17.29752152 9.33401759 17.9375 5.8125 C17.958125 4.884375 17.97875 3.95625 18 3 C18.763125 3.78375 19.52625 4.5675 20.3125 5.375 C22.90891805 8.07257717 22.90891805 8.07257717 26 10 C25.70727539 11.87768555 25.70727539 11.87768555 25 14 C22.46195867 15.49771343 20.12842985 16.67096653 17.4375 17.8125 C16.40012695 18.29879883 16.40012695 18.29879883 15.34179688 18.79492188 C10.0996982 21.07643174 6.59517112 21.12658676 1 20 C1.309375 19.195625 1.309375 19.195625 1.625 18.375 C2.1314747 15.16732692 1.15400225 12.98682934 0 10 C0 13.63 0 17.26 0 21 C-1.32 21.33 -2.64 21.66 -4 22 C-3.505 13.09 -3.505 13.09 -3 4 C-1.02 4.495 -1.02 4.495 1 5 C0.67 3.35 0.34 1.7 0 0 Z " fill="#DCE9F7" transform="translate(141,120)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C2.505 1.7425 2.505 1.7425 2 2.5 C-2.58047758 13.95119394 4.56469342 30.41395021 9 41 C10.6933037 44.53986262 12.46538355 48.0380773 14.32104492 51.49560547 C16.33876934 55.32365669 17.76775595 58.65013162 18 63 C15.9764633 65.93739199 14.41357199 67.64530297 10.8828125 68.53125 C8.93160731 68.78122647 6.96461467 68.90010434 5 69 C9.75 65.125 9.75 65.125 12 64 C12.0272415 62.58344207 12.04650467 61.16672955 12.0625 59.75 C12.07410156 58.96109375 12.08570313 58.1721875 12.09765625 57.359375 C12.00385306 55.09308998 11.63241063 53.1711105 11 51 C10.34 51 9.68 51 9 51 C6.15538012 47.12097289 4.58972173 42.66024958 2.8671875 38.20703125 C2.0404557 36.00662743 2.0404557 36.00662743 1 34 C0.86584528 31.3276379 0.95681459 28.67749512 1 26 C0.34 26 -0.32 26 -1 26 C-1.28875 24.865625 -1.5775 23.73125 -1.875 22.5625 C-2.24625 21.386875 -2.6175 20.21125 -3 19 C-3.66 18.67 -4.32 18.34 -5 18 C-5 17.01 -5 16.02 -5 15 C-5.66 15 -6.32 15 -7 15 C-7 14.01 -7 13.02 -7 12 C-7.66 11.67 -8.32 11.34 -9 11 C-6.69 11 -4.38 11 -2 11 C-1.67 13.31 -1.34 15.62 -1 18 C-1.33 14.37 -1.66 10.74 -2 7 C-2.99 7 -3.98 7 -5 7 C-5 5 -5 5 -2.5 2.375 C-1.675 1.59125 -0.85 0.8075 0 0 Z " fill="#95A3B4" transform="translate(142,64)"/>
<path d="M0 0 C1.09441406 0.17144531 2.18882812 0.34289062 3.31640625 0.51953125 C6.23874225 1.14496236 8.75148971 1.88328201 11.4375 3.1875 C12.13687532 4.50397119 12.80479133 5.83772151 13.4375 7.1875 C15.4710948 8.45554566 15.4710948 8.45554566 17.4375 9.1875 C17.1075 10.1775 16.7775 11.1675 16.4375 12.1875 C14.28666275 11.7266063 12.51238803 11.22804273 10.57006836 10.17651367 C8.25801138 9.1042592 6.5996958 8.86707397 4.06640625 8.73828125 C3.24462891 8.69509766 2.42285156 8.65191406 1.57617188 8.60742188 C0.72603516 8.57197266 -0.12410156 8.53652344 -1 8.5 C-2.2694043 8.42942383 -2.2694043 8.42942383 -3.56445312 8.35742188 C-7.77939935 8.15608145 -11.42847973 8.23697709 -15.5625 9.1875 C-17.90415499 8.91878549 -20.24134289 8.59711596 -22.5625 8.1875 C-21.9025 7.8575 -21.2425 7.5275 -20.5625 7.1875 C-20.500625 6.56875 -20.43875 5.95 -20.375 5.3125 C-19.5625 3.1875 -19.5625 3.1875 -16.375 1.5 C-10.83996217 -0.73650513 -5.85507326 -0.96086798 0 0 Z " fill="#1A2736" transform="translate(238.5625,209.8125)"/>
<path d="M0 0 C4.29 0 8.58 0 13 0 C12.01 0.495 12.01 0.495 11 1 C11 1.66 11 2.32 11 3 C9.35 3 7.7 3 6 3 C6.825 3.433125 7.65 3.86625 8.5 4.3125 C9.7375 5.1478125 9.7375 5.1478125 11 6 C11 6.99 11 7.98 11 9 C10.34 9 9.68 9 9 9 C9.99 10.485 9.99 10.485 11 12 C11.99 11.67 12.98 11.34 14 11 C14 10.34 14 9.68 14 9 C15.32 9 16.64 9 18 9 C18.33 9.66 18.66 10.32 19 11 C21.97 11 24.94 11 28 11 C26.93934702 14.00518345 25.80847571 16.26697326 23.9375 18.875 C21.71098957 22.46614586 21.35484776 24.81279639 21 29 C20.81591799 30.64621913 20.62835134 32.29205192 20.4375 33.9375 C20.29056661 35.29154775 20.14433868 36.64567321 20 38 C19.67 38 19.34 38 19 38 C18.97300275 35.72923158 18.95360547 33.45837179 18.9375 31.1875 C18.92589844 29.92292969 18.91429688 28.65835938 18.90234375 27.35546875 C19 24 19 24 20 21 C19.34 21 18.68 21 18 21 C18 21.99 18 22.98 18 24 C15.04716096 23.66756117 14.11266903 23.1280648 12.11328125 20.85546875 C11.22189453 19.53482422 11.22189453 19.53482422 10.3125 18.1875 C9.71050781 17.31480469 9.10851562 16.44210938 8.48828125 15.54296875 C7.16268172 13.27796798 6.44768077 11.56073403 6 9 C5.34 9 4.68 9 4 9 C2.3125 6.6875 2.3125 6.6875 1 4 C1.33 3.01 1.66 2.02 2 1 C1.34 0.67 0.68 0.34 0 0 Z " fill="#717D8D" transform="translate(67,211)"/>
<path d="M0 0 C1.65 0 3.3 0 5 0 C5.391875 0.928125 5.78375 1.85625 6.1875 2.8125 C8.15728786 6.27660969 9.63073257 7.08771308 13 9 C13 9.99 13 10.98 13 12 C20.08381711 14.36127237 28.71824591 13.35474495 36 12 C36.66 12.99 37.32 13.98 38 15 C28.07431106 20.37042107 20.37897628 19.65044499 9.6640625 16.8515625 C7.27900081 16.08918208 5.20982301 15.16040934 3 14 C2.67 14 2.34 14 2 14 C-0.29612756 4.58997722 -0.29612756 4.58997722 0 0 Z " fill="#89B0DC" transform="translate(213,251)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2.99 1.98 3.98 3.96 5 6 C5.66 5.67 6.32 5.34 7 5 C9.80835978 15.90850492 9.1515949 24.87445141 4 35 C2.5546875 37.2890625 2.5546875 37.2890625 1 39 C0.01 39 -0.98 39 -2 39 C-2.66 40.32 -3.32 41.64 -4 43 C-4.99 43 -5.98 43 -7 43 C-7 41.35 -7 39.7 -7 38 C-5.515 37.505 -5.515 37.505 -4 37 C-4 36.34 -4 35.68 -4 35 C-3.34 35 -2.68 35 -2 35 C-1.731875 34.319375 -1.46375 33.63875 -1.1875 32.9375 C-0.34158962 30.84498485 0.5845415 28.78415368 1.5625 26.75 C3.36565394 22.62460236 3.70700318 18.4555724 4 14 C3.01 13.67 2.02 13.34 1 13 C0.67 8.71 0.34 4.42 0 0 Z " fill="#667386" transform="translate(144,25)"/>
<path d="M0 0 C3.56333727 0.79185273 4.78414659 1.58246989 6.8125 4.625 C7.375 8.1875 7.375 8.1875 6.8125 11.625 C3.34664798 14.74426682 -1.6523386 16.08366321 -5.98046875 17.7578125 C-8.18087257 18.5845443 -8.18087257 18.5845443 -10.1875 19.625 C-11.1875 16.625 -11.1875 16.625 -10.1875 13.625 C-8.8675 13.625 -7.5475 13.625 -6.1875 13.625 C-6.1875 11.975 -6.1875 10.325 -6.1875 8.625 C-6.8475 8.625 -7.5075 8.625 -8.1875 8.625 C-8.1875 9.285 -8.1875 9.945 -8.1875 10.625 C-10 11.6875 -10 11.6875 -12.1875 12.625 C-13.1775 12.295 -14.1675 11.965 -15.1875 11.625 C-13.54288837 9.93055166 -11.88006061 8.27078129 -10.1875 6.625 C-9.35605469 5.79935547 -9.35605469 5.79935547 -8.5078125 4.95703125 C-5.64490527 2.27862249 -3.91399016 0.76744905 0 0 Z " fill="#E0EDFB" transform="translate(125.1875,185.375)"/>
<path d="M0 0 C1.98 0 3.96 0 6 0 C6.495 6.93 6.495 6.93 7 14 C5 12 5 12 4.875 8.375 C4.91625 7.26125 4.9575 6.1475 5 5 C2.69 5 0.38 5 -2 5 C-2.33 6.32 -2.66 7.64 -3 9 C-4.32 9 -5.64 9 -7 9 C-6.60832379 14.8751432 -4.6367071 19.22333724 -1.9609375 24.44921875 C-0.92110307 27.20942965 -0.94981125 28.29861088 -2 31 C-3.9649819 28.05252715 -5.07834513 25.70620575 -6 22.25 C-6.33 21.1775 -6.66 20.105 -7 19 C-7.99 18.67 -8.98 18.34 -10 18 C-11.7127927 16.02370073 -13.36865294 14.04046231 -15 12 C-18.24192876 8.10968549 -21.08542245 7.13413328 -26 6 C-26 5.67 -26 5.34 -26 5 C-25.03320312 4.96261719 -24.06640625 4.92523438 -23.0703125 4.88671875 C-10.71603809 4.84053451 -10.71603809 4.84053451 0 0 Z " fill="#3C5A86" transform="translate(135,70)"/>
<path d="M0 0 C0.66 0.99 1.32 1.98 2 3 C2.66 2.67 3.32 2.34 4 2 C3.67 4.64 3.34 7.28 3 10 C3.66 10.33 4.32 10.66 5 11 C5.33 9.35 5.66 7.7 6 6 C7.32 5.67 8.64 5.34 10 5 C10 5.99 10 6.98 10 8 C10.66 8 11.32 8 12 8 C11.67 11.63 11.34 15.26 11 19 C12.65 19 14.3 19 16 19 C18.31871189 20.40832826 19.9965715 22.13634558 22 24 C21.67 24.99 21.34 25.98 21 27 C18.95880212 25.38405168 16.95927063 23.7143618 15 22 C15 21.34 15 20.68 15 20 C12.03 20 9.06 20 6 20 C5.34 18.02 4.68 16.04 4 14 C3.01 14.33 2.02 14.66 1 15 C1.45052734 16.58941406 1.45052734 16.58941406 1.91015625 18.2109375 C2.2946467 19.59885426 2.67874079 20.98688087 3.0625 22.375 C3.26166016 23.07367188 3.46082031 23.77234375 3.66601562 24.4921875 C5.11328125 29.7734375 5.11328125 29.7734375 4 32 C-1.3257559 23.12374017 -3.57623663 15.11218335 -1.546875 4.66796875 C-1.09740059 3.09159777 -0.56018482 1.54050826 0 0 Z " fill="#3D5069" transform="translate(84,30)"/>
<path d="M0 0 C2.9843423 5.02563244 2.60308494 10.33100154 2 16 C0.98112893 19.20414204 -0.36384273 22.06937293 -2 25 C-2.33 25.66 -2.66 26.32 -3 27 C-4.65 27 -6.3 27 -8 27 C-8.495 28.485 -8.495 28.485 -9 30 C-11.0625 30.6875 -11.0625 30.6875 -13 31 C-13 32.32 -13 33.64 -13 35 C-16.465 34.505 -16.465 34.505 -20 34 C-20.33 33.01 -20.66 32.02 -21 31 C-21.61746094 31.04640625 -22.23492187 31.0928125 -22.87109375 31.140625 C-29.53696169 31.4247107 -34.15153439 30.16438719 -40 27 C-40 26.34 -40 25.68 -40 25 C-40.66 24.67 -41.32 24.34 -42 24 C-41 23 -41 23 -37.5625 22.75 C-36.386875 22.8325 -35.21125 22.915 -34 23 C-33.34 23.99 -32.68 24.98 -32 26 C-28.65386488 26.58687784 -28.65386488 26.58687784 -24.875 26.6875 C-22.95300781 26.78611328 -22.95300781 26.78611328 -20.9921875 26.88671875 C-20.00476563 26.92410156 -19.01734375 26.96148437 -18 27 C-18 28.98 -18 30.96 -18 33 C-17.01 33 -16.02 33 -15 33 C-14.7834375 32.071875 -14.7834375 32.071875 -14.5625 31.125 C-14 29 -14 29 -13 27 C-12.34 27 -11.68 27 -11 27 C-10.773125 26.360625 -10.54625 25.72125 -10.3125 25.0625 C-9 23 -9 23 -6.5 22.375 C-5.675 22.25125 -4.85 22.1275 -4 22 C-0.14449729 18.14449729 -0.74152926 12.3958701 -0.4375 7.1875 C-0.37272461 6.14819336 -0.37272461 6.14819336 -0.30664062 5.08789062 C-0.20138547 3.39211314 -0.10027137 1.69607948 0 0 Z " fill="#87ACD5" transform="translate(280,131)"/>
<path d="M0 0 C0.8125 1.625 0.8125 1.625 1 4 C-0.61594832 6.04119788 -2.2856382 8.04072937 -4 10 C-5.1333789 13.16541327 -5.10378854 16.16021614 -5.0625 19.5 C-5.04896484 20.90765625 -5.04896484 20.90765625 -5.03515625 22.34375 C-5.02355469 23.2203125 -5.01195312 24.096875 -5 25 C-5 26.32 -5 27.64 -5 29 C-4.69595322 30.67225729 -4.36871088 32.34080104 -4 34 C-4.66 34 -5.32 34 -6 34 C-5.67 35.32 -5.34 36.64 -5 38 C-5.61875 37.319375 -5.61875 37.319375 -6.25 36.625 C-7.92669589 34.90313178 -7.92669589 34.90313178 -10.125 34 C-12 33 -12 33 -13 30 C-13.52632789 23.07676391 -13.63142409 17.05237348 -10 11 C-9.01 10.67 -8.02 10.34 -7 10 C-6.95875 9.278125 -6.9175 8.55625 -6.875 7.8125 C-5.61647835 3.76725183 -3.36410883 2.50518743 0 0 Z " fill="#A0BEE1" transform="translate(148,143)"/>
<path d="M0 0 C2.64 0.33 5.28 0.66 8 1 C7.34 2.32 6.68 3.64 6 5 C8.44795007 7.02830149 10.81537115 8.89192457 13.5625 10.5 C16.1091991 12.06719945 17.96892998 13.81848035 20 16 C13.375 17.25 13.375 17.25 10 15 C7.45597858 14.83300026 7.45597858 14.83300026 4.6875 15 C0.25822102 15.09275977 -2.80412607 14.42838262 -7 13 C-10.34048056 12.82817498 -13.65825395 12.88112366 -17 13 C-16.67 12.34 -16.34 11.68 -16 11 C-14.9275 10.855625 -13.855 10.71125 -12.75 10.5625 C-8.9451701 9.99177551 -7.15445352 9.07529837 -4 7 C-2.34630643 6.30177383 -0.68272986 5.62501395 1 5 C0.67 3.35 0.34 1.7 0 0 Z " fill="#CEE3F1" transform="translate(167,130)"/>
<path d="M0 0 C3.6875 0.375 3.6875 0.375 6 2.5 C7.70584293 5.40625091 8.6695408 8.17569964 9.6875 11.375 C10.3475 11.705 11.0075 12.035 11.6875 12.375 C12.6875 14.375 13.6875 16.375 14.6875 18.375 C15.244375 18.931875 15.80125 19.48875 16.375 20.0625 C16.808125 20.495625 17.24125 20.92875 17.6875 21.375 C17.6875 22.365 17.6875 23.355 17.6875 24.375 C14.3736991 23.80365502 12.90123349 22.87748134 10.6875 20.375 C8.56540925 18.07606836 7.77125495 17.40291832 4.6875 16.375 C4.6875 15.715 4.6875 15.055 4.6875 14.375 C4.09582031 14.27703125 3.50414062 14.1790625 2.89453125 14.078125 C-0.97421723 12.84560336 -3.23869146 9.7646043 -5.3125 6.375 C-5.2115598 1.73175082 -4.60838813 0.52170432 0 0 Z " fill="#E3EFF9" transform="translate(193.3125,194.625)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C0.60199219 2.08636719 1.20398438 2.17273438 1.82421875 2.26171875 C4.6183278 3.20980961 5.28490384 4.32496426 6.8125 6.8125 C7.25207031 7.49957031 7.69164062 8.18664063 8.14453125 8.89453125 C9.15965671 11.39294506 8.91191297 12.51042165 8 15 C7.60167969 14.30132813 7.20335937 13.60265625 6.79296875 12.8828125 C6.26316406 11.97273438 5.73335937 11.06265625 5.1875 10.125 C4.40439453 8.76761719 4.40439453 8.76761719 3.60546875 7.3828125 C1.13219224 3.71201281 -1.39383372 2.75475089 -5.5625 1.9375 C-7.94015535 1.46509229 -9.82870329 1.08564836 -12 0 C-12 -0.66 -12 -1.32 -12 -2 C-14.29399934 -1.77239693 -16.58527637 -1.51721121 -18.875 -1.25 C-20.15117188 -1.11078125 -21.42734375 -0.9715625 -22.7421875 -0.828125 C-26.08718268 -0.37773178 -26.08718268 -0.37773178 -27.2578125 2.015625 C-27.50273438 2.67046875 -27.74765625 3.3253125 -28 4 C-28.99 4.33 -29.98 4.66 -31 5 C-31.99 6.485 -31.99 6.485 -33 8 C-34.32 8 -35.64 8 -37 8 C-37 11.63 -37 15.26 -37 19 C-37.99 18.01 -38.98 17.02 -40 16 C-40.99 16.33 -41.98 16.66 -43 17 C-42.76930843 12.47005651 -42.03733723 9.13483133 -38.921875 5.7265625 C-28.7282308 -2.68475741 -11.89859256 -9.01408527 0 0 Z " fill="#C8D6EC" transform="translate(135,17)"/>
<path d="M0 0 C1.76462683 3.08809695 2 4.23312136 2 8 C1.34 8 0.68 8 0 8 C-1.80168263 13.28814483 -2.12517909 17.28547632 -1.625 22.9375 C-1.56828125 23.62134766 -1.5115625 24.30519531 -1.453125 25.00976562 C-1.31345466 26.67417046 -1.15835535 28.33726886 -1 30 C0.32 30 1.64 30 3 30 C3.33 32.31 3.66 34.62 4 37 C6.31 37.66 8.62 38.32 11 39 C11.33 38.34 11.66 37.68 12 37 C12 37.66 12 38.32 12 39 C13.98 39 15.96 39 18 39 C18 39.66 18 40.32 18 41 C14.94306678 42.52846661 12.37015453 42.23242445 9 42 C6.8125 40.5625 6.8125 40.5625 5 39 C2.85266073 38.29485154 2.85266073 38.29485154 1 38 C1 37.34 1 36.68 1 36 C0.01 36 -0.98 36 -2 36 C-6.93839872 28.19414395 -7.73735992 19.28057156 -6.66796875 10.171875 C-5.70502516 7.04090054 -3.53900176 5.96772637 -1 4 C-0.13034494 1.87053397 -0.13034494 1.87053397 0 0 Z " fill="#C5D8EC" transform="translate(149,143)"/>
<path d="M0 0 C0.33 0.99 0.66 1.98 1 3 C1.99 3.33 2.98 3.66 4 4 C4.33 6.31 4.66 8.62 5 11 C5.66 11 6.32 11 7 11 C7.12117187 11.66386719 7.24234375 12.32773438 7.3671875 13.01171875 C8.36271806 18.47208946 8.36271806 18.47208946 10.1875 23.6875 C11.34509161 26.98218383 10.66073892 29.63023149 10 33 C9.34 33 8.68 33 8 33 C7.505 31.515 7.505 31.515 7 30 C6.34 30.99 5.68 31.98 5 33 C5 29.37 5 25.74 5 22 C4.34 22 3.68 22 3 22 C2.67 22.99 2.34 23.98 2 25 C1.14480802 22.32752505 1.02118115 20.41751847 1.125 17.5625 C1.29464742 14.02926613 1.29464742 14.02926613 -0.5 11.5625 C-2.64068438 7.90549752 -2.21328869 5.19467761 -2 1 C-1.34 0.67 -0.68 0.34 0 0 Z " fill="#E2EBF9" transform="translate(136,79)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3 1.66 3 2.32 3 3 C4.32 3.33 5.64 3.66 7 4 C7 4.66 7 5.32 7 6 C8.65 6.33 10.3 6.66 12 7 C12 7.66 12 8.32 12 9 C14.95888673 8.69215623 17.91703167 8.37894426 20.875 8.0625 C21.71675781 7.97548828 22.55851562 7.88847656 23.42578125 7.79882812 C24.63427734 7.66831055 24.63427734 7.66831055 25.8671875 7.53515625 C26.61081543 7.456604 27.35444336 7.37805176 28.12060547 7.29711914 C30.08446316 7.08362653 30.08446316 7.08362653 32 6 C32 7.32 32 8.64 32 10 C32.99 9.01 33.98 8.02 35 7 C35.66 7.33 36.32 7.66 37 8 C36.25 14.75 36.25 14.75 34 17 C34 16.01 34 15.02 34 14 C33.34 14 32.68 14 32 14 C32.7763932 17.0745356 32.7763932 17.0745356 35 19 C30.375 21.125 30.375 21.125 27 20 C26.505 17.525 26.505 17.525 26 15 C26.99 15 27.98 15 29 15 C28.67 13.68 28.34 12.36 28 11 C28.66 11 29.32 11 30 11 C30 10.34 30 9.68 30 9 C28.68 9.33 27.36 9.66 26 10 C26 10.66 26 11.32 26 12 C19.31344281 12.22124638 13.3835456 12.12784853 7 10 C6.67 9.34 6.34 8.68 6 8 C5.01 7.67 4.02 7.34 3 7 C2.67 5.35 2.34 3.7 2 2 C1.34 2 0.68 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#395D91" transform="translate(145,182)"/>
<path d="M0 0 C1.46953125 0.07250977 1.46953125 0.07250977 2.96875 0.14648438 C4.49242187 0.2305957 4.49242187 0.2305957 6.046875 0.31640625 C7.59375 0.3947168 7.59375 0.3947168 9.171875 0.47460938 C11.71386539 0.60406259 14.25544093 0.73901953 16.796875 0.87890625 C16.796875 1.53890625 16.796875 2.19890625 16.796875 2.87890625 C15.90226562 2.86730469 15.00765625 2.85570313 14.0859375 2.84375 C6.91507985 2.79023614 -0.08823884 2.96085642 -7.203125 3.87890625 C-7.203125 4.53890625 -7.203125 5.19890625 -7.203125 5.87890625 C-7.863125 5.87890625 -8.523125 5.87890625 -9.203125 5.87890625 C-9.533125 6.86890625 -9.863125 7.85890625 -10.203125 8.87890625 C-10.863125 8.87890625 -11.523125 8.87890625 -12.203125 8.87890625 C-12.203125 9.53890625 -12.203125 10.19890625 -12.203125 10.87890625 C-12.80125 11.43578125 -13.399375 11.99265625 -14.015625 12.56640625 C-16.45901607 14.85227923 -16.45901607 14.85227923 -17.578125 18.50390625 C-19.203125 21.87890625 -19.203125 21.87890625 -22.390625 23.31640625 C-23.31875 23.50203125 -24.246875 23.68765625 -25.203125 23.87890625 C-25.328125 18.12890625 -25.328125 18.12890625 -24.203125 15.87890625 C-23.543125 15.87890625 -22.883125 15.87890625 -22.203125 15.87890625 C-22.533125 14.88890625 -22.863125 13.89890625 -23.203125 12.87890625 C-21.91347324 11.50327771 -20.57623207 10.17124232 -19.203125 8.87890625 C-18.543125 8.87890625 -17.883125 8.87890625 -17.203125 8.87890625 C-16.39875 8.07453125 -15.594375 7.27015625 -14.765625 6.44140625 C-12.203125 3.87890625 -12.203125 3.87890625 -9.203125 2.87890625 C-9.203125 2.21890625 -9.203125 1.55890625 -9.203125 0.87890625 C-6.01757908 -0.0865092 -3.31559793 -0.17349059 0 0 Z " fill="#050810" transform="translate(247.203125,112.12109375)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C-0.639375 2.2475 -1.27875 2.495 -1.9375 2.75 C-4.18741541 3.81562433 -4.18741541 3.81562433 -4.75 6.125 C-4.8325 6.74375 -4.915 7.3625 -5 8 C-4.01 7.67 -3.02 7.34 -2 7 C-2.3125 9.375 -2.3125 9.375 -3 12 C-3.99 12.66 -4.98 13.32 -6 14 C-7.16611453 16.46707533 -7.16611453 16.46707533 -8.0625 19.3125 C-9.28770095 22.91921605 -10.55518128 26.47464233 -12 30 C-12.99 29.67 -13.98 29.34 -15 29 C-14.79375 28.21625 -14.5875 27.4325 -14.375 26.625 C-14.25125 25.75875 -14.1275 24.8925 -14 24 C-14.66 23.34 -15.32 22.68 -16 22 C-16.84022103 17.69386722 -15.75001365 15.14540217 -13.5 11.5625 C-5.2690678 0 -5.2690678 0 0 0 Z " fill="#283241" transform="translate(101,11)"/>
<path d="M0 0 C0.66 0.66 1.32 1.32 2 2 C1.1853125 1.84015625 0.370625 1.6803125 -0.46875 1.515625 C-4.51078163 0.92541684 -8.4217188 0.77866982 -12.5 0.75 C-13.23347656 0.729375 -13.96695313 0.70875 -14.72265625 0.6875 C-19.57230392 0.65279769 -22.7399207 1.43855992 -27 4 C-26.01 5.485 -26.01 5.485 -25 7 C-23.35 6.67 -21.7 6.34 -20 6 C-20 5.34 -20 4.68 -20 4 C-17.03 4.33 -14.06 4.66 -11 5 C-11 5.33 -11 5.66 -11 6 C-11.76183594 6.14695313 -12.52367188 6.29390625 -13.30859375 6.4453125 C-22.51810541 8.44588058 -29.67389283 11.84874841 -36 19 C-36.33 18.01 -36.66 17.02 -37 16 C-35.6875 13.8125 -35.6875 13.8125 -34 12 C-33.34 12 -32.68 12 -32 12 C-32.66 11.01 -33.32 10.02 -34 9 C-34.33 9.99 -34.66 10.98 -35 12 C-35.99 12.33 -36.98 12.66 -38 13 C-38.33 13.99 -38.66 14.98 -39 16 C-39.99 16.33 -40.98 16.66 -42 17 C-39.72690162 10.2521111 -34.6683806 5.17495263 -28.58203125 1.56640625 C-19.31322787 -2.67209178 -9.71505898 -3.26522729 0 0 Z " fill="#545E6C" transform="translate(65,209)"/>
<path d="M0 0 C0.93423645 3.01031744 1.04449911 3.86650268 0 7 C-0.71954961 13.96679503 0.78881946 20.16994379 2.75 26.8125 C3.00265625 27.73998047 3.2553125 28.66746094 3.515625 29.62304688 C4.89458797 34.40460097 5.92635849 37.85859568 10 41 C10.63421875 41.56203125 11.2684375 42.1240625 11.921875 42.703125 C12.52515625 43.21359375 13.1284375 43.7240625 13.75 44.25 C14.36359375 44.77078125 14.9771875 45.2915625 15.609375 45.828125 C16.06828125 46.21484375 16.5271875 46.6015625 17 47 C13.7169902 48.6415049 10.57454967 47.51888624 7 47 C7.66 46.34 8.32 45.68 9 45 C8.566875 44.608125 8.13375 44.21625 7.6875 43.8125 C6 42 6 42 4.4375 39.375 C3.22087094 36.88809625 3.22087094 36.88809625 1 36 C-0.0703125 33.93359375 -0.0703125 33.93359375 -1.125 31.4375 C-1.47820312 30.61121094 -1.83140625 29.78492188 -2.1953125 28.93359375 C-2.46085937 28.29550781 -2.72640625 27.65742188 -3 27 C-3.99 27 -4.98 27 -6 27 C-5.690625 26.1646875 -5.38125 25.329375 -5.0625 24.46875 C-3.93406521 20.78474231 -3.43540089 17.32530782 -3 13.5 C-2.45717996 8.73093823 -1.66921565 4.50688226 0 0 Z " fill="#CDDAE8" transform="translate(130,152)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C2 1.99 2 2.98 2 4 C1.35417969 4.54269531 0.70835938 5.08539063 0.04296875 5.64453125 C-2.95198049 9.09759891 -2.63202013 12.2528092 -2.6875 16.6875 C-2.91047297 24.91047297 -2.91047297 24.91047297 -4 26 C-4.36760731 28.32817964 -4.70241581 30.6618385 -5 33 C-5.66 32.67 -6.32 32.34 -7 32 C-7.34375 29.6015625 -7.34375 29.6015625 -7.5 26.625 C-7.70460671 22.74770285 -7.79475989 21.30786016 -10 18 C-10 23.94 -10 29.88 -10 36 C-13.43550706 29.12898587 -13.18941515 19.45657559 -10.75 12.125 C-9 9 -9 9 -6.890625 8.3046875 C-6.26671875 8.20414063 -5.6428125 8.10359375 -5 8 C-4.67 6.68 -4.34 5.36 -4 4 C-3.01 4 -2.02 4 -1 4 C-0.67 2.68 -0.34 1.36 0 0 Z " fill="#40424B" transform="translate(31,217)"/>
<path d="M0 0 C1.11942993 0.01546875 1.11942993 0.01546875 2.26147461 0.03125 C7.56581721 0.18915535 11.7917154 1.00135467 16.5625 3.4375 C16.5625 4.4275 16.5625 5.4175 16.5625 6.4375 C8.08486178 8.05879948 0.84482067 6.5498498 -7.4375 4.4375 C-7.4375 5.0975 -7.4375 5.7575 -7.4375 6.4375 C-9.4175 7.0975 -11.3975 7.7575 -13.4375 8.4375 C-14.0975 7.1175 -14.7575 5.7975 -15.4375 4.4375 C-10.08156458 0.88329844 -6.38586619 -0.19439906 0 0 Z " fill="#030817" transform="translate(52.4375,208.5625)"/>
<path d="M0 0 C3.82524236 1.450954 5.19090966 3.38181932 7 7 C7 7.66 7 8.32 7 9 C7.639375 9.20625 8.27875 9.4125 8.9375 9.625 C11 11 11 11 11.75 14.125 C11.87375 15.548125 11.87375 15.548125 12 17 C12.66 17 13.32 17 14 17 C14.33 19.97 14.66 22.94 15 26 C14.34 25.01 13.68 24.02 13 23 C12.79697266 24.37671875 12.79697266 24.37671875 12.58984375 25.78125 C11.13816977 34.05666096 9.36806551 39.38214494 3 45 C1.68 44.67 0.36 44.34 -1 44 C-0.2575 43.319375 -0.2575 43.319375 0.5 42.625 C2.22609337 41.12364481 2.22609337 41.12364481 2 39 C2.99 39 3.98 39 5 39 C4.79375 38.38125 4.5875 37.7625 4.375 37.125 C4.25125 36.42375 4.1275 35.7225 4 35 C4.66 34.34 5.32 33.68 6 33 C6.6425235 30.93125966 6.6425235 30.93125966 7 29 C7.99 29 8.98 29 10 29 C10 24.05 10 19.1 10 14 C8.68 13.34 7.36 12.68 6 12 C4.94952356 9.68895182 3.94992562 7.35416349 3 5 C1.41754725 3.24850835 1.41754725 3.24850835 0 2 C0 1.34 0 0.68 0 0 Z " fill="#546F98" transform="translate(252,222)"/>
<path d="M0 0 C4.02871174 1.34290391 4.67538369 3.51307554 7 7 C8.62626404 8.38232443 10.2925002 9.71937515 12 11 C12.55171875 11.68964844 13.1034375 12.37929688 13.671875 13.08984375 C16.88812205 15.72867732 19.7742242 15.56333604 23.75 15.4375 C24.46357666 15.4257373 25.17715332 15.41397461 25.91235352 15.40185547 C31.24628016 15.22769141 35.30410425 14.49169979 40 12 C40.33 11.34 40.66 10.68 41 10 C42.32 10.33 43.64 10.66 45 11 C43.37660195 12.70884005 41.70680947 14.37446717 40 16 C39.34 16 38.68 16 38 16 C38 16.66 38 17.32 38 18 C33.57347799 18.85281617 29.38066529 19.13473146 24.875 19.125 C23.07675781 19.12886719 23.07675781 19.12886719 21.2421875 19.1328125 C16.40977752 18.93485836 14.2904515 18.53894914 11 15 C9.67710104 14.0478328 8.34313374 13.11090445 7 12.1875 C3.42882238 9.54850477 1.51819248 7.26991636 0 3 C0 2.01 0 1.02 0 0 Z " fill="#365A8C" transform="translate(26,250)"/>
<path d="M0 0 C1.625 2.3125 1.625 2.3125 3 5 C4.49989444 6.21268061 5.99996275 7.42515712 7.50390625 8.6328125 C10.81215897 11.65601995 12.79827948 14.96001985 13.2421875 19.44921875 C13.24909423 21.64901068 13.17892857 23.80812496 13 26 C10.23776722 23.23776722 10.42143709 20.79293383 10 17 C9.34 17 8.68 17 8 17 C7.505 14.525 7.505 14.525 7 12 C6.34 12 5.68 12 5 12 C5 10.68 5 9.36 5 8 C3.35 8 1.7 8 0 8 C0 6.68 0 5.36 0 4 C-1.98 4.33 -3.96 4.66 -6 5 C-6 4.01 -6 3.02 -6 2 C-6.69867188 2.02320313 -7.39734375 2.04640625 -8.1171875 2.0703125 C-9.02726562 2.08835938 -9.93734375 2.10640625 -10.875 2.125 C-12.23238281 2.15980469 -12.23238281 2.15980469 -13.6171875 2.1953125 C-16 2 -16 2 -18 0 C-19.31747324 -0.69748583 -20.64914193 -1.36959957 -22 -2 C-15.08572737 -4.10917032 -6.6895299 -2.34720348 0 0 Z " fill="#85A6CA" transform="translate(66,218)"/>
<path d="M0 0 C1.98 0 3.96 0 6 0 C6 0.66 6 1.32 6 2 C12.78743178 4.81552726 18.68889006 5.3689719 26 5 C26 6.32 26 7.64 26 9 C28.97 9 31.94 9 35 9 C35 9.66 35 10.32 35 11 C31.29181703 11.08756305 27.58390237 11.14058015 23.875 11.1875 C22.30492187 11.22520508 22.30492187 11.22520508 20.703125 11.26367188 C10.68955786 11.35873739 10.68955786 11.35873739 6 8 C5.125 5.3125 5.125 5.3125 5 3 C4.34 3 3.68 3 3 3 C3 2.34 3 1.68 3 1 C2.01 0.67 1.02 0.34 0 0 Z " fill="#274272" transform="translate(234,156)"/>
<path d="M0 0 C1.0625 1.8125 1.0625 1.8125 2 4 C1.67 4.99 1.34 5.98 1 7 C0.34 6.34 -0.32 5.68 -1 5 C-4.09926819 5.32198966 -4.09926819 5.32198966 -7 6 C-5.94729537 7.15811388 -5.94729537 7.15811388 -4 8 C-4.66 8.66 -5.32 9.32 -6 10 C-6.67651207 12.19704511 -6.67651207 12.19704511 -7.125 14.625 C-7.37636719 15.85089844 -7.37636719 15.85089844 -7.6328125 17.1015625 C-7.75398437 17.72804687 -7.87515625 18.35453125 -8 19 C-11.465 17.02 -11.465 17.02 -15 15 C-15 14.34 -15 13.68 -15 13 C-15.99 12.67 -16.98 12.34 -18 12 C-18 11.01 -18 10.02 -18 9 C-17.01 9.33 -16.02 9.66 -15 10 C-14.505 9.0925 -14.01 8.185 -13.5 7.25 C-10.44866349 2.63471682 -5.50569027 0 0 0 Z " fill="#0C172B" transform="translate(195,187)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C2.29949057 4.51774512 2.36389115 6.43384677 0.42578125 9.44921875 C-0.27160156 10.18785156 -0.96898437 10.92648438 -1.6875 11.6875 C-2.37199219 12.43386719 -3.05648438 13.18023437 -3.76171875 13.94921875 C-9.27428571 19 -9.27428571 19 -13 19 C-13 18.01 -13 17.02 -13 16 C-15.64 16 -18.28 16 -21 16 C-21 15.67 -21 15.34 -21 15 C-17.7 15 -14.4 15 -11 15 C-11 14.34 -11 13.68 -11 13 C-11.66 13 -12.32 13 -13 13 C-13 12.01 -13 11.02 -13 10 C-12.360625 9.71125 -11.72125 9.4225 -11.0625 9.125 C-8.84793921 8.17176549 -8.84793921 8.17176549 -8 6 C-6.35 6 -4.7 6 -3 6 C-2.690625 5.195625 -2.38125 4.39125 -2.0625 3.5625 C-1 1 -1 1 0 0 Z " fill="#121F33" transform="translate(280,152)"/>
<path d="M0 0 C1.0625 1.875 1.0625 1.875 2 4 C1.67 4.66 1.34 5.32 1 6 C1.66 6.33 2.32 6.66 3 7 C2.34 8.32 1.68 9.64 1 11 C8.23310297 11.86797236 13.60766386 9.28626674 20.0234375 6.3125 C23 5 23 5 25 5 C24.67 3.68 24.34 2.36 24 1 C25.32 1.66 26.64 2.32 28 3 C28 4.32 28 5.64 28 7 C27.28972656 7.27714844 26.57945312 7.55429688 25.84765625 7.83984375 C24.46900391 8.38318359 24.46900391 8.38318359 23.0625 8.9375 C22.14597656 9.29714844 21.22945312 9.65679687 20.28515625 10.02734375 C18.07581467 10.7996218 18.07581467 10.7996218 17 12 C15.453125 12.0928125 15.453125 12.0928125 13.875 12.1875 C9.41016565 13.12367494 7.66616713 14.624437 4.48046875 17.72265625 C3 19 3 19 1 19 C1 20.98 1 22.96 1 25 C0.01 24.34 -0.98 23.68 -2 23 C-1.67 22.29875 -1.34 21.5975 -1 20.875 C0.10123871 17.70893872 0.22195686 15.32935296 0 12 C-0.33 11.34 -0.66 10.68 -1 10 C-1.09472912 8.48154798 -1.1298841 6.95889616 -1.125 5.4375 C-1.12886719 4.22900391 -1.12886719 4.22900391 -1.1328125 2.99609375 C-1 1 -1 1 0 0 Z " fill="#4F6277" transform="translate(141,129)"/>
<path d="M0 0 C7.75146595 -0.6459555 12.8926041 2.17753488 18.9375 6.875 C21.49993821 9.1578995 21.97454041 9.90834547 22.9375 13.375 C22.958125 14.24125 22.97875 15.1075 23 16 C17.71138024 14.23712675 14.92767311 12.92767311 11 9 C7.73507963 7.18615535 4.38509314 5.57626474 1 4 C1.66 3.67 2.32 3.34 3 3 C3 2.34 3 1.68 3 1 C2.01 0.67 1.02 0.34 0 0 Z " fill="#445366" transform="translate(170,132)"/>
<path d="M0 0 C3.36016893 1.12005631 4.69064913 2.37211797 7 5 C7 5.66 7 6.32 7 7 C7.66 7 8.32 7 9 7 C9.33 8.65 9.66 10.3 10 12 C11.32 12.33 12.64 12.66 14 13 C14 13.66 14 14.32 14 15 C20.27 15.66 26.54 16.32 33 17 C33 16.34 33 15.68 33 15 C34.32 14.67 35.64 14.34 37 14 C37 14.66 37 15.32 37 16 C34 18 34 18 31 18 C31 18.66 31 19.32 31 20 C22.01120772 20.56179952 15.89525832 18.14501062 8 14 C8 13.34 8 12.68 8 12 C7.01 12 6.02 12 5 12 C5 11.01 5 10.02 5 9 C4.34 9 3.68 9 3 9 C3 8.34 3 7.68 3 7 C2.34 7 1.68 7 1 7 C0.67 4.69 0.34 2.38 0 0 Z " fill="#223B64" transform="translate(138,177)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1.05401695 2.91691525 1.09368066 5.83282724 1.125 8.75 C1.14175781 9.575 1.15851563 10.4 1.17578125 11.25 C1.18544922 12.44882812 1.18544922 12.44882812 1.1953125 13.671875 C1.21102295 14.77160645 1.21102295 14.77160645 1.22705078 15.89355469 C0.96777544 18.29896076 0.19225925 19.91251494 -1 22 C-1.66 21.67 -2.32 21.34 -3 21 C-3.103125 21.639375 -3.20625 22.27875 -3.3125 22.9375 C-3.539375 23.618125 -3.76625 24.29875 -4 25 C-4.99 25.33 -5.98 25.66 -7 26 C-7 26.66 -7 27.32 -7 28 C-10.69418201 29.231394 -13.2056261 28.64432764 -17 28 C-17.33 29.32 -17.66 30.64 -18 32 C-18.33 31.67 -18.66 31.34 -19 31 C-21.69235776 30.76321284 -24.36498156 30.57801975 -27.0625 30.4375 C-28.20041992 30.37272461 -28.20041992 30.37272461 -29.36132812 30.30664062 C-31.24065438 30.20026367 -33.12030244 30.09960066 -35 30 C-35 29.34 -35 28.68 -35 28 C-33.96359375 27.95101562 -32.9271875 27.90203125 -31.859375 27.8515625 C-30.48955792 27.77650403 -29.11976752 27.70095753 -27.75 27.625 C-27.06808594 27.5940625 -26.38617188 27.563125 -25.68359375 27.53125 C-21.95847033 27.31425252 -19.23853336 26.84727798 -16 25 C-14.65938457 25.30271961 -13.32594105 25.63837971 -12 26 C-9.31850007 25.61432869 -9.31850007 25.61432869 -7 25 C-6.34 23.02 -5.68 21.04 -5 19 C-4.01 19 -3.02 19 -2 19 C-2 15.7 -2 12.4 -2 9 C-1.34 9 -0.68 9 0 9 C0 6.03 0 3.06 0 0 Z " fill="#537FB6" transform="translate(144,32)"/>
<path d="M0 0 C2 3 2 3 1.6875 5.4375 C-1.26313497 9.91809384 -6.38501473 11.3639225 -11.45703125 12.59765625 C-18.52806365 13.71642175 -25.26108459 13.39605881 -32 11 C-28.59598052 9.86267574 -26.22543336 10.16010043 -22.75 10.9375 C-21.85796875 11.13214844 -20.9659375 11.32679688 -20.046875 11.52734375 C-19.37140625 11.68332031 -18.6959375 11.83929688 -18 12 C-18 11.34 -18 10.68 -18 10 C-18.99 9.67 -19.98 9.34 -21 9 C-20.20335937 8.80664062 -19.40671875 8.61328125 -18.5859375 8.4140625 C-10.7134296 6.48205464 -10.7134296 6.48205464 -3 4 C-3 3.34 -3 2.68 -3 2 C-2.01 1.34 -1.02 0.68 0 0 Z " fill="#262932" transform="translate(72,263)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C4.09141544 8.77140391 4.23540512 14.7614665 1 22 C1.99 22 2.98 22 4 22 C4.12375 21.21625 4.2475 20.4325 4.375 19.625 C5 17 5 17 7 15 C5.75045646 22.71457314 1.79296688 28.86908648 -4 34 C-4.66 33.67 -5.32 33.34 -6 33 C-5.360625 32.46375 -4.72125 31.9275 -4.0625 31.375 C-1.61470596 28.55632807 -1.33285388 26.66139268 -1 23 C-2.98 23.99 -2.98 23.99 -5 25 C-5 23.68 -5 22.36 -5 21 C-4.34 21 -3.68 21 -3 21 C-3 20.34 -3 19.68 -3 19 C-2.34 19 -1.68 19 -1 19 C-0.67 16.36 -0.34 13.72 0 11 C-0.66 11 -1.32 11 -2 11 C-2 10.34 -2 9.68 -2 9 C-1.34 9 -0.68 9 0 9 C0 6.03 0 3.06 0 0 Z " fill="#5575A3" transform="translate(79,235)"/>
<path d="M0 0 C1.32 0.33 2.64 0.66 4 1 C3.67 1.66 3.34 2.32 3 3 C3.66 3 4.32 3 5 3 C4.125 7.75 4.125 7.75 3 10 C3.99 9.67 4.98 9.34 6 9 C7.01018369 13.34378986 7.25218057 16.058684 5 20 C4.01 20.33 3.02 20.66 2 21 C1.15415002 19.44424022 0.32381601 17.8800388 -0.5 16.3125 C-0.9640625 15.44238281 -1.428125 14.57226562 -1.90625 13.67578125 C-3.04818792 10.88211171 -3.21504208 8.98370887 -3 6 C-2.34 6 -1.68 6 -1 6 C-0.67 4.02 -0.34 2.04 0 0 Z " fill="#9EBDE0" transform="translate(209,230)"/>
<path d="M0 0 C0.02698189 1.62490954 0.04638757 3.24994633 0.0625 4.875 C0.07410156 5.77992188 0.08570313 6.68484375 0.09765625 7.6171875 C0 10 0 10 -1 12 C-1.23274209 14.87910588 -1.41972757 17.74146495 -1.5625 20.625 C-1.62727539 21.82769531 -1.62727539 21.82769531 -1.69335938 23.0546875 C-1.79951457 25.0362511 -1.90026855 27.01810271 -2 29 C-2.66 29 -3.32 29 -4 29 C-7.50450114 20.17616678 -8.06852133 13.0137814 -5 4 C-4.34 4 -3.68 4 -3 4 C-3 3.01 -3 2.02 -3 1 C-1 0 -1 0 0 0 Z " fill="#060912" transform="translate(136,148)"/>
<path d="M0 0 C1.299375 1.1446875 1.299375 1.1446875 2.625 2.3125 C5.53663368 4.76076205 8.58032579 6.32992655 12 8 C12.33 8.66 12.66 9.32 13 10 C12.67 10.99 12.34 11.98 12 13 C12.66 13.66 13.32 14.32 14 15 C13.360625 15.268125 12.72125 15.53625 12.0625 15.8125 C9.66868314 16.88667752 9.66868314 16.88667752 9 20 C8.34 20 7.68 20 7 20 C6.34 21.98 5.68 23.96 5 26 C4.34 26 3.68 26 3 26 C2.67 27.98 2.34 29.96 2 32 C1.34 32 0.68 32 0 32 C0.72008406 27.39146203 2.31295939 23.32762591 4 19 C4.66 19 5.32 19 6 19 C6 15.37 6 11.74 6 8 C4.68 7.34 3.36 6.68 2 6 C0.25 3.375 0.25 3.375 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#4F6893" transform="translate(206,204)"/>
<path d="M0 0 C1.98 0 3.96 0 6 0 C7.52448631 2.9826906 8.93940067 5.818202 10 9 C13.27422865 10.3401494 16.6361951 10.06857602 20.125 10 C25.77882353 9.88941176 25.77882353 9.88941176 28 11 C28.33 10.01 28.66 9.02 29 8 C31.64 8 34.28 8 37 8 C37.0825 7.21625 37.165 6.4325 37.25 5.625 C38 3 38 3 40.0625 1.6875 C40.701875 1.460625 41.34125 1.23375 42 1 C41.67 3.31 41.34 5.62 41 8 C40.34 8 39.68 8 39 8 C39 8.66 39 9.32 39 10 C37.906875 9.95875 36.81375 9.9175 35.6875 9.875 C31.91107771 9.67925334 31.91107771 9.67925334 29 12 C22.52306121 13.29538776 13.87904723 14.69540112 8 11 C5.87072116 8.27925482 4.25858026 6.0630522 3.4375 2.6875 C3.293125 2.130625 3.14875 1.57375 3 1 C2.01 0.67 1.02 0.34 0 0 Z " fill="#C0D5EB" transform="translate(32,248)"/>
<path d="M0 0 C3.2542015 2.83430453 4.5206753 4.68607774 5 9 C6.99723547 9.34951621 8.99810127 9.67826628 11 10 C12.8253125 10.309375 12.8253125 10.309375 14.6875 10.625 C21.48082575 11.46110163 28.3469513 10.41452207 35 9 C35.495 9.99 35.495 9.99 36 11 C26.09209655 16.360798 18.38272903 15.62181502 7.6640625 12.94921875 C4.87719051 11.95624237 3.09733346 11.08766833 1 9 C0.390625 6.73828125 0.390625 6.73828125 0.25 4.3125 C0.19328125 3.50425781 0.1365625 2.69601562 0.078125 1.86328125 C0.05234375 1.24839844 0.0265625 0.63351563 0 0 Z " fill="#537BAF" transform="translate(215,255)"/>
<path d="M0 0 C2.65391468 2.47698704 4.81169744 4.53411752 6 8 C6.0777346 10.33203812 6.08967728 12.66839059 6 15 C5.34 15 4.68 15 4 15 C3.67 18.96 3.34 22.92 3 27 C1.02 27 -0.96 27 -3 27 C-3 27.99 -3 28.98 -3 30 C-4.65 30 -6.3 30 -8 30 C-8.33 29.34 -8.66 28.68 -9 28 C-9.66 28.66 -10.32 29.32 -11 30 C-12.98821313 30.39764263 -14.98944339 30.73775349 -17 31 C-17 30.34 -17 29.68 -17 29 C-15.125 27.9375 -15.125 27.9375 -13 27 C-12.34 27.33 -11.68 27.66 -11 28 C-10.67 27.01 -10.34 26.02 -10 25 C-7.03 25 -4.06 25 -1 25 C-0.25044562 22.0017825 0.41070989 19.03063487 1 16 C1.66 16 2.32 16 3 16 C2.979375 15.05125 2.95875 14.1025 2.9375 13.125 C3 10 3 10 4 8 C3.34 8 2.68 8 2 8 C0.74335022 5.09399739 0 3.20395416 0 0 Z " fill="#CEDFF2" transform="translate(136,21)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.67 1.66 1.34 2.32 1 3 C7.27 3 13.54 3 20 3 C16.40657783 5.39561478 14.15009718 5.41953652 9.875 5.8125 C3.34973455 6.51627456 -1.63242992 8.18887978 -7 12 C-7.33 11.34 -7.66 10.68 -8 10 C-8.66 10 -9.32 10 -10 10 C-9.67 8.35 -9.34 6.7 -9 5 C-7.68 4.67 -6.36 4.34 -5 4 C-5 3.34 -5 2.68 -5 2 C-2.625 0.9375 -2.625 0.9375 0 0 Z " fill="#23314C" transform="translate(106,9)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2 0.66 2 1.32 2 2 C2.66 2.33 3.32 2.66 4 3 C3.34 3 2.68 3 2 3 C2 3.99 2 4.98 2 6 C1.01 6 0.02 6 -1 6 C-1.144375 6.61875 -1.28875 7.2375 -1.4375 7.875 C-2 10 -2 10 -3 12 C-4.32 12 -5.64 12 -7 12 C-7.33 12.66 -7.66 13.32 -8 14 C-8.5775 13.79375 -9.155 13.5875 -9.75 13.375 C-11.9872819 12.75548346 -11.9872819 12.75548346 -13.65625 13.96875 C-16.98111466 15.43169045 -20.18972208 15.21249265 -23.75 15.125 C-24.44738281 15.11597656 -25.14476563 15.10695313 -25.86328125 15.09765625 C-27.57566958 15.07419888 -29.28788004 15.03833104 -31 15 C-31 14.34 -31 13.68 -31 13 C-31.99 12.67 -32.98 12.34 -34 12 C-32.80761719 12.02320313 -31.61523438 12.04640625 -30.38671875 12.0703125 C-28.82031876 12.08907178 -27.253912 12.10727181 -25.6875 12.125 C-24.90181641 12.14175781 -24.11613281 12.15851562 -23.30664062 12.17578125 C-22.54931641 12.18222656 -21.79199219 12.18867187 -21.01171875 12.1953125 C-19.96697388 12.21102295 -19.96697388 12.21102295 -18.90112305 12.22705078 C-16.668827 12.10574595 -16.668827 12.10574595 -14 10 C-11.73828125 9.3671875 -11.73828125 9.3671875 -9.3125 8.875 C-8.50425781 8.70742188 -7.69601563 8.53984375 -6.86328125 8.3671875 C-6.24839844 8.24601562 -5.63351563 8.12484375 -5 8 C-4.67 6.68 -4.34 5.36 -4 4 C-2.68 3.67 -1.36 3.34 0 3 C0 2.01 0 1.02 0 0 Z " fill="#99BAE1" transform="translate(140,45)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2.33 0.99 2.66 1.98 3 3 C2.67 3.66 2.34 4.32 2 5 C0.68 5 -0.64 5 -2 5 C-2 6.98 -2 8.96 -2 11 C-2.928125 10.938125 -3.85625 10.87625 -4.8125 10.8125 C-7.97943248 10.67622737 -7.97943248 10.67622737 -9.75 12.5 C-10.36875 13.2425 -10.36875 13.2425 -11 14 C-11.66 14 -12.32 14 -13 14 C-12.67 14.99 -12.34 15.98 -12 17 C-12.62648438 17.18175781 -13.25296875 17.36351562 -13.8984375 17.55078125 C-14.71570313 17.80214844 -15.53296875 18.05351562 -16.375 18.3125 C-17.59316406 18.67794922 -17.59316406 18.67794922 -18.8359375 19.05078125 C-21.33184629 19.91368185 -21.33184629 19.91368185 -23 23 C-23.66 23 -24.32 23 -25 23 C-25 22.01 -25 21.02 -25 20 C-24.34 20 -23.68 20 -23 20 C-23.33 19.01 -23.66 18.02 -24 17 C-23.42121094 16.89171875 -22.84242187 16.7834375 -22.24609375 16.671875 C-16.18095989 14.85760887 -11.29437889 9.4136672 -7 5 C-3.48275862 2 -3.48275862 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#EFF7FB" transform="translate(117,194)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3 1.66 3 2.32 3 3 C4.051875 3.1546875 4.051875 3.1546875 5.125 3.3125 C8.96964017 4.23187048 12.67702633 5.50927174 15.35546875 8.52734375 C17.5339265 10.47812421 19.32690392 10.70454222 22.1875 11.1875 C23.08855469 11.34605469 23.98960937 11.50460938 24.91796875 11.66796875 C25.94857422 11.83232422 25.94857422 11.83232422 27 12 C27 12.33 27 12.66 27 13 C17.58744108 13.39279612 9.19030338 13.51770784 1.5 7.5 C-1 5 -1 5 -2 2 C-1.34 2 -0.68 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#070D17" transform="translate(143,191)"/>
<path d="M0 0 C1.65 0 3.3 0 5 0 C5.309375 1.051875 5.309375 1.051875 5.625 2.125 C8.01024008 7.11232017 11.15041438 10.21748301 16.25 12.375 C24.1545219 13.69242032 29.93164769 13.63575433 37.08984375 9.77734375 C39 9 39 9 42 10 C41.34 10 40.68 10 40 10 C39.67 10.99 39.34 11.98 39 13 C33.75395825 15.89067607 28.7409148 16.35786893 22.8125 16.5 C22.12341553 16.53053467 21.43433105 16.56106934 20.72436523 16.5925293 C16.86185936 16.59486653 15.21991904 16.1868532 12.24609375 13.66015625 C11.50488281 12.78230469 10.76367188 11.90445312 10 11 C8.17575246 9.47380865 6.32405637 7.99561815 4.453125 6.52734375 C2.73793777 4.72455287 2.53567509 3.38573814 2 1 C1.34 0.67 0.68 0.34 0 0 Z " fill="#577FB1" transform="translate(27,250)"/>
<path d="M0 0 C0.85529297 0.02707031 1.71058594 0.05414063 2.59179688 0.08203125 C7.40931269 0.31339142 10.72755386 0.71268048 14.6875 3.75 C12.6875 5.75 12.6875 5.75 10.75146484 5.79345703 C9.58671631 5.65206299 9.58671631 5.65206299 8.3984375 5.5078125 C7.53863281 5.41113281 6.67882812 5.31445312 5.79296875 5.21484375 C4.89191406 5.10269531 3.99085938 4.99054688 3.0625 4.875 C-9.1534791 3.34500352 -9.1534791 3.34500352 -21.3125 4.75 C-21.6425 5.41 -21.9725 6.07 -22.3125 6.75 C-22.0625 4.875 -22.0625 4.875 -21.3125 2.75 C-18.10971786 0.37756879 -15.17783563 0.66597096 -11.3125 0.75 C-7.80808741 -1.00220629 -3.84186064 -0.18852253 0 0 Z " fill="#A0B9DA" transform="translate(237.3125,217.25)"/>
<path d="M0 0 C0.99 0.66 1.98 1.32 3 2 C-10.10679612 12.36893204 -10.10679612 12.36893204 -15 14 C-15 14.66 -15 15.32 -15 16 C-15.721875 15.95875 -16.44375 15.9175 -17.1875 15.875 C-20.20729369 16.00921305 -22.26935729 16.75170619 -25 18 C-23.41177373 14.45703371 -21.82989627 11.75799051 -18.1328125 10.2265625 C-17.47023438 10.02804688 -16.80765625 9.82953125 -16.125 9.625 C-12.06407646 8.2195802 -10.00510288 6.0821568 -7 3 C-4.64863955 1.58080472 -2.66380817 0.83860628 0 0 Z " fill="#E1EBF8" transform="translate(109,198)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1.0825 0.78375 1.165 1.5675 1.25 2.375 C1.70606263 5.0789957 1.70606263 5.0789957 3.6953125 6.0625 C11.48325992 9.23047861 21.74821887 12.23452333 30 9.28515625 C30.598125 9.00542969 31.19625 8.72570312 31.8125 8.4375 C35.22714954 6.89756001 36.51769749 6.8392325 40 8 C40 8.33 40 8.66 40 9 C37.01163624 10.03762631 34.00891196 11.02375427 31 12 C30.34257812 12.23589844 29.68515625 12.47179687 29.0078125 12.71484375 C23.04680673 14.60703023 17.97474936 13.4262866 12 12 C11.22785156 11.82984375 10.45570313 11.6596875 9.66015625 11.484375 C6.2116069 10.68806193 3.06782771 9.78956616 0 8 C0 5.36 0 2.72 0 0 Z " fill="#34507C" transform="translate(214,259)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2 0.66 2 1.32 2 2 C3.65 2 5.3 2 7 2 C8.34316248 5.3579062 7.62817826 7.50536729 6.546875 10.8515625 C5.45503795 15.14092233 5.30262689 19.5959823 5 24 C3.0625 23.625 3.0625 23.625 1 23 C-0.60725635 19.78548731 -0.05748185 16.56387464 0 13 C0.99 12.67 1.98 12.34 3 12 C3.33 9.69 3.66 7.38 4 5 C3.01 4.319375 3.01 4.319375 2 3.625 C1.34 3.08875 0.68 2.5525 0 2 C0 1.34 0 0.68 0 0 Z " fill="#152742" transform="translate(201,219)"/>
<path d="M0 0 C0 0.99 0 1.98 0 3 C1.98 2.67 3.96 2.34 6 2 C5.67 3.65 5.34 5.3 5 7 C2.36 6.67 -0.28 6.34 -3 6 C-3 5.34 -3 4.68 -3 4 C-4.93596892 3.77788884 -6.87389328 3.57277008 -8.8125 3.375 C-9.89144531 3.25898438 -10.97039063 3.14296875 -12.08203125 3.0234375 C-15.19624332 2.72539844 -15.19624332 2.72539844 -18 5 C-20 4.625 -20 4.625 -22 4 C-22.99 4 -23.98 4 -25 4 C-17.5401229 -2.56469185 -9.24218596 -0.94857387 0 0 Z " fill="#CADBF0" transform="translate(60,220)"/>
<path d="M0 0 C2.375 1.5625 2.375 1.5625 4 4 C4.5625 7.5625 4.5625 7.5625 4 11 C1.625 13 1.625 13 -1 14 C-1.66 13.67 -2.32 13.34 -3 13 C-2.67 12.01 -2.34 11.02 -2 10 C-1.34 10 -0.68 10 0 10 C-0.33 7.69 -0.66 5.38 -1 3 C-2.423125 3.7734375 -2.423125 3.7734375 -3.875 4.5625 C-4.90625 5.036875 -5.9375 5.51125 -7 6 C-7.66 5.67 -8.32 5.34 -9 5 C-9 5.66 -9 6.32 -9 7 C-10.65 7.33 -12.3 7.66 -14 8 C-6.88691438 -0.84329564 -6.88691438 -0.84329564 0 0 Z " fill="#AEC8E5" transform="translate(128,186)"/>
<path d="M0 0 C0.99 1.485 0.99 1.485 2 3 C4.74449828 3.73108671 4.74449828 3.73108671 7.875 4.0625 C13.6300237 4.80485564 13.6300237 4.80485564 15.9921875 6.05078125 C18.79849565 7.37749892 21.16756071 7.19200955 24.25 7.125 C25.86648438 7.09792969 25.86648438 7.09792969 27.515625 7.0703125 C28.33546875 7.04710937 29.1553125 7.02390625 30 7 C29.67 8.65 29.34 10.3 29 12 C29.99 12.33 30.98 12.66 32 13 C31.67 13.99 31.34 14.98 31 16 C30.01 16 29.02 16 28 16 C28 14.02 28 12.04 28 10 C23.38 10 18.76 10 14 10 C13.34 8.68 12.68 7.36 12 6 C7.97007218 6.55312735 3.97977076 7.1558062 0 8 C0 5.36 0 2.72 0 0 Z " fill="#B3CCE8" transform="translate(234,148)"/>
<path d="M0 0 C3.11907866 2.8071708 4.52686579 5.10671674 6 9 C6.66 9.33 7.32 9.66 8 10 C8 14.95 8 19.9 8 25 C6.68 25 5.36 25 4 25 C1.33204327 19.58071289 1.93600848 14.4997351 2.125 8.59375 C2.0059665 5.17153674 1.49684485 3.0404661 0 0 Z " fill="#C8DDF0" transform="translate(254,226)"/>
<path d="M0 0 C0.99 0 1.98 0 3 0 C2.79375 1.11375 2.5875 2.2275 2.375 3.375 C2.25125 4.57125 2.1275 5.7675 2 7 C2.66 7.66 3.32 8.32 4 9 C4.4140625 11.8203125 4.4140625 11.8203125 4.625 15.125 C4.69976562 16.22070312 4.77453125 17.31640625 4.8515625 18.4453125 C4.90054688 19.28835937 4.94953125 20.13140625 5 21 C7.31 21 9.62 21 12 21 C11.34 21.33 10.68 21.66 10 22 C10 22.99 10 23.98 10 25 C11.65 24.34 13.3 23.68 15 23 C15.33 23.66 15.66 24.32 16 25 C16.99 25.66 17.98 26.32 19 27 C17.56344146 27.08131463 16.1255517 27.13933559 14.6875 27.1875 C13.48673828 27.23970703 13.48673828 27.23970703 12.26171875 27.29296875 C10 27 10 27 8.20703125 25.61328125 C7 24 7 24 7 22 C5.02 22 3.04 22 1 22 C1.020625 20.88625 1.04125 19.7725 1.0625 18.625 C1.26380718 15.16784079 1.26380718 15.16784079 0 13 C-0.25310306 11.36045464 -0.45536859 9.71277129 -0.625 8.0625 C-0.72039062 7.18722656 -0.81578125 6.31195312 -0.9140625 5.41015625 C-1 3 -1 3 0 0 Z " fill="#D1E1F1" transform="translate(98,25)"/>
<path d="M0 0 C1.52299523 2.93720508 2.80100302 5.9168649 4 9 C4.66 9 5.32 9 6 9 C8.43559413 13.27690329 8.75095563 17.1645784 8 22 C6.25 24.0625 6.25 24.0625 4 25 C2.68 25 1.36 25 0 25 C-0.66 23.35 -1.32 21.7 -2 20 C-1.01 20.33 -0.02 20.66 1 21 C1 21.66 1 22.32 1 23 C2.32 22.67 3.64 22.34 5 22 C4.67 18.37 4.34 14.74 4 11 C3.01 10.67 2.02 10.34 1 10 C0.67 9.01 0.34 8.02 0 7 C-0.66 7 -1.32 7 -2 7 C-2 9.97 -2 12.94 -2 16 C-4.20914 12.68629 -4.22481553 11.6553979 -4.125 7.8125 C-4.10695312 6.91144531 -4.08890625 6.01039062 -4.0703125 5.08203125 C-4.04710937 4.39496094 -4.02390625 3.70789063 -4 3 C-3.67 3.99 -3.34 4.98 -3 6 C-2.34 6 -1.68 6 -1 6 C-0.67 4.02 -0.34 2.04 0 0 Z " fill="#E0EDF7" transform="translate(147,106)"/>
<path d="M0 0 C2.31 0.66 4.62 1.32 7 2 C7 2.33 7 2.66 7 3 C6.37351563 3.09796875 5.74703125 3.1959375 5.1015625 3.296875 C4.28429687 3.44640625 3.46703125 3.5959375 2.625 3.75 C1.81289062 3.88921875 1.00078125 4.0284375 0.1640625 4.171875 C-2.17709092 4.81749261 -2.17709092 4.81749261 -3.2890625 7.078125 C-3.52367187 7.71234375 -3.75828125 8.3465625 -4 9 C-3.01 8.67 -2.02 8.34 -1 8 C-1 7.34 -1 6.68 -1 6 C0.32 5.67 1.64 5.34 3 5 C3.33 5.66 3.66 6.32 4 7 C4 6.01 4 5.02 4 4 C4.66 4 5.32 4 6 4 C6.33 5.65 6.66 7.3 7 9 C2 11.5 2 11.5 -3 14 C-3 13.01 -3 12.02 -3 11 C-6.00259517 10.66781808 -6.00259517 10.66781808 -7.6875 12.5 C-8.120625 12.995 -8.55375 13.49 -9 14 C-9.33 12.02 -9.66 10.04 -10 8 C-8.35 7.67 -6.7 7.34 -5 7 C-5 5.68 -5 4.36 -5 3 C-3.35 2.67 -1.7 2.34 0 2 C0 1.34 0 0.68 0 0 Z " fill="#859AB7" transform="translate(185,179)"/>
<path d="M0 0 C-1.32 0.33 -2.64 0.66 -4 1 C-4 1.66 -4 2.32 -4 3 C-4.99 3 -5.98 3 -7 3 C-7.0928125 3.86625 -7.0928125 3.86625 -7.1875 4.75 C-8.3224773 7.89301406 -10.37371606 8.99902176 -13 11 C-13.556875 11.7425 -14.11375 12.485 -14.6875 13.25 C-15.120625 13.8275 -15.55375 14.405 -16 15 C-16.66 15 -17.32 15 -18 15 C-18 16.98 -18 18.96 -18 21 C-18.928125 21.12375 -19.85625 21.2475 -20.8125 21.375 C-24.13925235 21.81533082 -24.13925235 21.81533082 -27 24 C-27.55353075 12.29384966 -27.55353075 12.29384966 -24 8 C-23 11 -23 11 -23 13 C-23.66 13 -24.32 13 -25 13 C-25 15.31 -25 17.62 -25 20 C-22.53044606 19.58377402 -22.53044606 19.58377402 -20 18 C-19.06184842 15.98723842 -18.42499924 13.9603424 -17.7578125 11.84375 C-17 10 -17 10 -14.8125 8.5 C-14.214375 8.335 -13.61625 8.17 -13 8 C-13 7.34 -13 6.68 -13 6 C-11.625 4.375 -11.625 4.375 -10 3 C-9.34 3 -8.68 3 -8 3 C-8 2.34 -8 1.68 -8 1 C-5.29120665 -0.35439668 -2.99066732 -0.06501451 0 0 Z " fill="#38475F" transform="translate(248,115)"/>
<path d="M0 0 C2.9843423 5.02563244 2.60308494 10.33100154 2 16 C0.98112893 19.20414204 -0.36384273 22.06937293 -2 25 C-2.33 25.66 -2.66 26.32 -3 27 C-4.65 27 -6.3 27 -8 27 C-8.33 27.99 -8.66 28.98 -9 30 C-10.33333333 30.33333333 -11.66666667 30.66666667 -13 31 C-13.33 31.99 -13.66 32.98 -14 34 C-13.67 31.69 -13.34 29.38 -13 27 C-12.34 27 -11.68 27 -11 27 C-10.773125 26.360625 -10.54625 25.72125 -10.3125 25.0625 C-9 23 -9 23 -6.5 22.375 C-5.675 22.25125 -4.85 22.1275 -4 22 C-0.14449729 18.14449729 -0.74152926 12.3958701 -0.4375 7.1875 C-0.39431641 6.49462891 -0.35113281 5.80175781 -0.30664062 5.08789062 C-0.20138547 3.39211314 -0.10027137 1.69607948 0 0 Z " fill="#9DB2C7" transform="translate(280,131)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C0.90492188 1.96519531 0.90492188 1.96519531 1.828125 1.9296875 C3.02695313 1.90261719 3.02695313 1.90261719 4.25 1.875 C5.03890625 1.85179687 5.8278125 1.82859375 6.640625 1.8046875 C9.20731941 2.0171622 10.7916067 2.71345895 13 4 C13 4.66 13 5.32 13 6 C11.35 6 9.7 6 8 6 C8.66 7.32 9.32 8.64 10 10 C6.63279613 8.60667426 5.0140476 7.0210714 3 4 C-3.57534861 4.62031591 -9.66692592 6.14897283 -16 8 C-16.99 7.01 -17.98 6.02 -19 5 C-18.67 4.34 -18.34 3.68 -18 3 C-17.360625 3.2475 -16.72125 3.495 -16.0625 3.75 C-12.05079774 4.0774859 -9.70843925 2.71228696 -6.18359375 0.91015625 C-4 0 -4 0 0 0 Z " fill="#708094" transform="translate(221,156)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C0.66 2 1.32 2 2 2 C2 1.34 2 0.68 2 0 C3.9375 0.375 3.9375 0.375 6 1 C7.26237731 3.52475462 7.09856404 5.31200466 7.0625 8.125 C7.05347656 9.03507813 7.04445312 9.94515625 7.03515625 10.8828125 C7.02355469 11.58148438 7.01195312 12.28015625 7 13 C5.02 13 3.04 13 1 13 C0.8046875 10.94921875 0.609375 8.8984375 0.4140625 6.84765625 C0.27742187 6.23792969 0.14078125 5.62820312 0 5 C-0.66 4.67 -1.32 4.34 -2 4 C-2 5.65 -2 7.3 -2 9 C-2.33 9 -2.66 9 -3 9 C-3.66 6.36 -4.32 3.72 -5 1 C-2 0 -2 0 0 0 Z " fill="#526583" transform="translate(227,143)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3.84057704 9.40577035 1.11638645 14.75957026 -3 22 C-3.66 22 -4.32 22 -5 22 C-5 22.66 -5 23.32 -5 24 C-6.65 24.66 -8.3 25.32 -10 26 C-10 25.34 -10 24.68 -10 24 C-12.31 23.67 -14.62 23.34 -17 23 C-17.33 23.99 -17.66 24.98 -18 26 C-18 24.68 -18 23.36 -18 22 C-14.7 22 -11.4 22 -8 22 C-8 21.34 -8 20.68 -8 20 C-7.01 19.34 -6.02 18.68 -5 18 C-4.67 17.01 -4.34 16.02 -4 15 C-3.34 15 -2.68 15 -2 15 C-0.9458482 11.83754459 -0.68724328 9.13051782 -0.4375 5.8125 C-0.35371094 4.72582031 -0.26992187 3.63914063 -0.18359375 2.51953125 C-0.09271484 1.27236328 -0.09271484 1.27236328 0 0 Z " fill="#416594" transform="translate(145,38)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C-9 5 -9 5 -18 8 C-18.66 7.67 -19.32 7.34 -20 7 C-20.33 7.66 -20.66 8.32 -21 9 C-22.06775224 7.03533587 -23.06553465 5.03144641 -24 3 C-23.67 2.34 -23.34 1.68 -23 1 C-22.34 1.20625 -21.68 1.4125 -21 1.625 C-17.72382806 2.03452149 -15.41002357 1.3751788 -12.26953125 0.48046875 C-8.21434236 -0.37803079 -4.12340724 -0.15209289 0 0 Z " fill="#5F7693" transform="translate(218,145)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1.12375 0.804375 1.2475 1.60875 1.375 2.4375 C1.684375 3.7059375 1.684375 3.7059375 2 5 C2.66 5.33 3.32 5.66 4 6 C5.28317892 9.84953676 5.06643637 12.94738135 5 17 C3.68 17.33 2.36 17.66 1 18 C1 17.34 1 16.68 1 16 C0.01 15.67 -0.98 15.34 -2 15 C-2.19466332 13.20909747 -2.38051213 11.41723495 -2.5625 9.625 C-2.66691406 8.62726563 -2.77132812 7.62953125 -2.87890625 6.6015625 C-3 4 -3 4 -2 2 C-1.34 2 -0.68 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#EDF3F5" transform="translate(147,111)"/>
<path d="M0 0 C5.875 1.875 5.875 1.875 7 3 C10.07604912 3.03171185 13.14015453 2.93146143 16.21484375 2.83984375 C19 3 19 3 21 5 C22.31747324 5.69748583 23.64914193 6.36959957 25 7 C21.36485259 8.1303319 17.91661659 8.16711496 14.125 8.1875 C12.93132812 8.20167969 11.73765625 8.21585937 10.5078125 8.23046875 C7.00075978 8.00004992 4.26429911 7.26279461 1 6 C1.66 5.34 2.32 4.68 3 4 C2.2575 3.2884375 2.2575 3.2884375 1.5 2.5625 C0 1 0 1 0 0 Z " fill="#2D3C4B" transform="translate(219,272)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C3.25664978 2.90600261 4 4.79604584 4 8 C4.66 8 5.32 8 6 8 C6.33 7.34 6.66 6.68 7 6 C7.02699725 8.27076842 7.04639453 10.54162821 7.0625 12.8125 C7.07410156 14.07707031 7.08570313 15.34164062 7.09765625 16.64453125 C7 20 7 20 6 23 C5.34 23 4.68 23 4 23 C4 24.65 4 26.3 4 28 C3.01 28.33 2.02 28.66 1 29 C2 23 3 17 4 11 C3.01 10.67 2.02 10.34 1 10 C0.67 6.7 0.34 3.4 0 0 Z " fill="#040F27" transform="translate(144,28)"/>
<path d="M0 0 C3.87387012 1.29129004 4.22473604 2.64957136 6.125 6.1875 C6.64320313 7.12980469 7.16140625 8.07210937 7.6953125 9.04296875 C9.05304549 12.12022586 9.76248265 14.64681394 10 18 C7.9764633 20.93739199 6.41357199 22.64530297 2.8828125 23.53125 C0.93160731 23.78122647 -1.03538533 23.90010434 -3 24 C1.75 20.125 1.75 20.125 4 19 C4.0272415 17.58344207 4.04650467 16.16672955 4.0625 14.75 C4.07410156 13.96109375 4.08570313 13.1721875 4.09765625 12.359375 C4.00385306 10.09308998 3.63241063 8.1711105 3 6 C2.34 6 1.68 6 1 6 C0.67 4.02 0.34 2.04 0 0 Z " fill="#6A7B8E" transform="translate(150,109)"/>
<path d="M0 0 C3 1 3 1 4.75 3.875 C6 7 6 7 5 10 C4.34 9.67 3.68 9.34 3 9 C0.01904343 8.59350592 -2.09507107 8.35673727 -4.62109375 10.15234375 C-5.13800781 10.61769531 -5.65492187 11.08304688 -6.1875 11.5625 C-7.115625 12.366875 -8.04375 13.17125 -9 14 C-9.99 13.67 -10.98 13.34 -12 13 C-10.56354149 11.39490066 -9.12579294 9.79095576 -7.6875 8.1875 C-6.88699219 7.29417969 -6.08648437 6.40085938 -5.26171875 5.48046875 C-3.54775419 3.60073214 -1.82122396 1.77407253 0 0 Z " fill="#354156" transform="translate(125,178)"/>
<path d="M0 0 C-6.27 -0.33 -12.54 -0.66 -19 -1 C-19 -0.34 -19 0.32 -19 1 C-18.10796875 0.98839844 -17.2159375 0.97679687 -16.296875 0.96484375 C-15.12640625 0.95582031 -13.9559375 0.94679688 -12.75 0.9375 C-11.58984375 0.92589844 -10.4296875 0.91429687 -9.234375 0.90234375 C-6.59022872 0.98217908 -4.50173909 1.21356222 -2 2 C-2 2.66 -2 3.32 -2 4 C-8.93 3.67 -15.86 3.34 -23 3 C-23.33 2.34 -23.66 1.68 -24 1 C-25.65 1.33 -27.3 1.66 -29 2 C-28 0 -28 0 -25.734375 -0.88671875 C-17.50184523 -3.09570907 -7.4945683 -4.99637886 0 0 Z " fill="#414854" transform="translate(130,9)"/>
<path d="M0 0 C0.99 0 1.98 0 3 0 C4.79881421 2.51833989 5.93616565 4.79937777 6.875 7.75 C7.24625 8.4925 7.6175 9.235 8 10 C12.19218788 11.2820387 16.47068123 11.11651306 20.8125 11.0625 C21.50537109 11.05798828 22.19824219 11.05347656 22.91210938 11.04882812 C24.60811068 11.03713156 26.30406703 11.01919924 28 11 C26.68 11.33 25.36 11.66 24 12 C24 12.66 24 13.32 24 14 C15.95350771 14.29142226 9.2882642 14.41520306 3.0625 8.6875 C0.78740672 6.26005672 0.06249171 5.41958719 -0.4375 2.0625 C-0.293125 1.381875 -0.14875 0.70125 0 0 Z " fill="#99BADD" transform="translate(32,249)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3.87890625 3.51171875 3.87890625 3.51171875 4.5625 6.6875 C5.32388195 10.06162423 6.09249106 13.27747318 7.1875 16.5625 C8 19 8 19 8 22 C6.10546875 21.703125 6.10546875 21.703125 4 21 C0.52533447 14.30805158 0.32874046 7.43633588 0 0 Z " fill="#4A556F" transform="translate(134,103)"/>
<path d="M0 0 C4.51598691 0.38708459 7.49630747 2.19704598 11 5 C12.59381802 7.97029722 13 9.62389977 13 13 C8.72658086 12.52517565 6.89680572 9.96922587 4 7 C3.2575 6.649375 2.515 6.29875 1.75 5.9375 C0 5 0 5 -0.8125 2.9375 C-0.874375 2.298125 -0.93625 1.65875 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#414754" transform="translate(268,114)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2 0.99 2 1.98 2 3 C2.66 3 3.32 3 4 3 C3.67 6.63 3.34 10.26 3 14 C4.65 14 6.3 14 8 14 C10.31871189 15.40832826 11.9965715 17.13634558 14 19 C13.67 19.99 13.34 20.98 13 22 C10.95880212 20.38405168 8.95927063 18.7143618 7 17 C7 16.34 7 15.68 7 15 C4.36 15 1.72 15 -1 15 C-1 13.68 -1 12.36 -1 11 C-0.01 11 0.98 11 2 11 C2 10.34 2 9.68 2 9 C1.34 9 0.68 9 0 9 C-1.3950848 6.70221327 -2.07438619 5.5207033 -1.6875 2.8125 C-1 1 -1 1 0 0 Z " fill="#6F95C2" transform="translate(92,35)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C2.25 7.75 2.25 7.75 0 10 C0 9.01 0 8.02 0 7 C-0.66 7 -1.32 7 -2 7 C-1.2236068 10.0745356 -1.2236068 10.0745356 1 12 C-3.625 14.125 -3.625 14.125 -7 13 C-7.33 11.35 -7.66 9.7 -8 8 C-7.01 8 -6.02 8 -5 8 C-5.33 6.68 -5.66 5.36 -6 4 C-5.38125 3.896875 -4.7625 3.79375 -4.125 3.6875 C-1.63473516 3.12474627 -1.63473516 3.12474627 0 0 Z " fill="#657A95" transform="translate(179,189)"/>
<path d="M0 0 C5.74847213 5.74847213 7.93635661 9.90137872 8 18 C7.67 18.66 7.34 19.32 7 20 C6.34 20 5.68 20 5 20 C4.67 19.01 4.34 18.02 4 17 C3.34 17.99 2.68 18.98 2 20 C1.34 13.4 0.68 6.8 0 0 Z " fill="#ECF4FB" transform="translate(139,92)"/>
<path d="M0 0 C1.2065625 0.0309375 1.2065625 0.0309375 2.4375 0.0625 C6.4375 6.6875 6.4375 6.6875 6.4375 10.0625 C5.7775 10.0625 5.1175 10.0625 4.4375 10.0625 C4.1075 10.3925 3.7775 10.7225 3.4375 11.0625 C-2.65661765 8.92132353 -2.65661765 8.92132353 -4.5625 6.0625 C-3.99439756 0.09742433 -3.99439756 0.09742433 0 0 Z " fill="#F0F9FD" transform="translate(192.5625,194.9375)"/>
<path d="M0 0 C0.5775 0.165 1.155 0.33 1.75 0.5 C4.26664369 1.14462031 4.26664369 1.14462031 8 1 C3.31775896 4.73720157 -2.30392547 7.95246206 -8.4296875 8.03125 C-10.625 7.75 -10.625 7.75 -14 7 C-13.67 5.68 -13.34 4.36 -13 3 C-11.35 2.67 -9.7 2.34 -8 2 C-7.67 2.99 -7.34 3.98 -7 5 C-6.67 4.01 -6.34 3.02 -6 2 C-4.02 2 -2.04 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#C7D2E1" transform="translate(156,133)"/>
<path d="M0 0 C3.25438355 1.62719177 3.70359632 4.73080811 5 8 C5.33 8.99 5.66 9.98 6 11 C6.66 11.33 7.32 11.66 8 12 C7.01 12.33 6.02 12.66 5 13 C4.54625 12.505 4.0925 12.01 3.625 11.5 C2.12364481 9.77390663 2.12364481 9.77390663 0 10 C0 13.63 0 17.26 0 21 C-1.32 21.33 -2.64 21.66 -4 22 C-3.505 13.09 -3.505 13.09 -3 4 C-1.02 4.495 -1.02 4.495 1 5 C0.67 3.35 0.34 1.7 0 0 Z " fill="#566C81" transform="translate(141,120)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3.58340065 15.36894184 3.58340065 15.36894184 0 21 C-2.1875 21.9375 -2.1875 21.9375 -4 22 C-3.24178832 16.43978102 -3.24178832 16.43978102 -1.96484375 14.1171875 C-0.78773266 11.53421498 -0.83218696 9.69738953 -0.9375 6.875 C-1.09722222 2.19444444 -1.09722222 2.19444444 0 0 Z " fill="#040E26" transform="translate(83,236)"/>
<path d="M0 0 C-1.3125 1.5 -1.3125 1.5 -3 3 C-3.99 3 -4.98 3 -6 3 C-6.33 4.65 -6.66 6.3 -7 8 C-7.33 6.68 -7.66 5.36 -8 4 C-8.99 5.485 -8.99 5.485 -10 7 C-10.51949219 6.65066406 -11.03898437 6.30132812 -11.57421875 5.94140625 C-16.87724314 2.45944496 -16.87724314 2.45944496 -23 1 C-23 0.67 -23 0.34 -23 0 C-7.25512528 -1.33257403 -7.25512528 -1.33257403 0 0 Z " fill="#1B2D46" transform="translate(132,75)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C2.86419223 3.59257669 3.17580932 5.34037707 3.31640625 8.01171875 C3.35830078 8.76904297 3.40019531 9.52636719 3.44335938 10.30664062 C3.48267578 11.09232422 3.52199219 11.87800781 3.5625 12.6875 C3.60568359 13.48478516 3.64886719 14.28207031 3.69335938 15.10351562 C3.79927368 17.06881447 3.90012551 19.03438496 4 21 C2.0625 20.3125 2.0625 20.3125 0 19 C-1.28767323 15.17764367 -1.13406073 11.254843 -1.125 7.25 C-1.12757812 6.10015625 -1.13015625 4.9503125 -1.1328125 3.765625 C-1 1 -1 1 0 0 Z " fill="#07050B" transform="translate(21,234)"/>
<path d="M0 0 C4.29 0 8.58 0 13 0 C12.01 0.495 12.01 0.495 11 1 C11 1.66 11 2.32 11 3 C9.35 3 7.7 3 6 3 C6.825 3.433125 7.65 3.86625 8.5 4.3125 C9.7375 5.1478125 9.7375 5.1478125 11 6 C11 6.99 11 7.98 11 9 C10.34 9 9.68 9 9 9 C9.33 11.31 9.66 13.62 10 16 C7.49962266 13.82575883 6.56371414 12.26954202 6 9 C5.34 9 4.68 9 4 9 C2.3125 6.6875 2.3125 6.6875 1 4 C1.33 3.01 1.66 2.02 2 1 C1.34 0.67 0.68 0.34 0 0 Z " fill="#68778F" transform="translate(67,211)"/>
<path d="M0 0 C0.99 0.66 1.98 1.32 3 2 C3.88257262 8.17800832 1.72669709 12.63181511 -1 18 C-1.99 17.67 -2.98 17.34 -4 17 C-3.79375 16.21625 -3.5875 15.4325 -3.375 14.625 C-3.25125 13.75875 -3.1275 12.8925 -3 12 C-3.66 11.34 -4.32 10.68 -5 10 C-5 8.68 -5 7.36 -5 6 C-4.34 6 -3.68 6 -3 6 C-2.01 4.02 -1.02 2.04 0 0 Z " fill="#040E20" transform="translate(90,23)"/>
<path d="M0 0 C2.69082872 0.17635452 5.32851446 0.61835921 8 1 C8 1.33 8 1.66 8 2 C5.36 2 2.72 2 0 2 C0 2.99 0 3.98 0 5 C-5.57067277 6.59162079 -10.21101581 7.20674944 -16 7 C-15.34 6.67 -14.68 6.34 -14 6 C-13.34786708 3.97536745 -13.34786708 3.97536745 -13 2 C-11.71802734 1.90912109 -11.71802734 1.90912109 -10.41015625 1.81640625 C-8.75306641 1.69072266 -8.75306641 1.69072266 -7.0625 1.5625 C-5.96035156 1.48128906 -4.85820312 1.40007812 -3.72265625 1.31640625 C-1.08890097 1.29581916 -1.08890097 1.29581916 0 0 Z " fill="#040E20" transform="translate(232,211)"/>
<path d="M0 0 C4.97093824 0.41153737 9.44508386 0.79600832 14 3 C14 3.99 14 4.98 14 6 C6.58773774 7.18982084 0.30139977 6.67959957 -7 5 C-7 4.67 -7 4.34 -7 4 C-2.545 3.505 -2.545 3.505 2 3 C1.34 2.01 0.68 1.02 0 0 Z " fill="#09111F" transform="translate(55,209)"/>
<path d="M0 0 C0.64324219 0.31710937 1.28648438 0.63421875 1.94921875 0.9609375 C5.92305679 2.31438298 9.64201079 2.45720161 13.8125 2.625 C14.99489258 2.68300781 14.99489258 2.68300781 16.20117188 2.7421875 C18.1337538 2.83588844 20.06684376 2.91900779 22 3 C20 5 20 5 17 6 C17 6.66 17 7.32 17 8 C12.38 7.34 7.76 6.68 3 6 C2.67 5.01 2.34 4.02 2 3 C1.01 2.67 0.02 2.34 -1 2 C-0.67 1.34 -0.34 0.68 0 0 Z " fill="#040A18" transform="translate(37,267)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1.28875 1.11375 1.5775 2.2275 1.875 3.375 C2.69241329 7.00291092 2.69241329 7.00291092 5 9 C5.26991906 11.68839385 5.08737357 14.29141936 5 17 C3.68 17.33 2.36 17.66 1 18 C1 16.35 1 14.7 1 13 C-0.98 12.34 -2.96 11.68 -5 11 C-3.68 10.67 -2.36 10.34 -1 10 C-1 9.34 -1 8.68 -1 8 C-3.31 8 -5.62 8 -8 8 C-5.66785852 6.79371992 -3.50357861 5.8345262 -1 5 C-0.67 3.35 -0.34 1.7 0 0 Z " fill="#A6B5C6" transform="translate(219,137)"/>
<path d="M0 0 C1.46953125 0.07250977 1.46953125 0.07250977 2.96875 0.14648438 C4.49242187 0.2305957 4.49242187 0.2305957 6.046875 0.31640625 C7.59375 0.3947168 7.59375 0.3947168 9.171875 0.47460938 C11.71386539 0.60406259 14.25544093 0.73901953 16.796875 0.87890625 C16.796875 1.53890625 16.796875 2.19890625 16.796875 2.87890625 C15.90226562 2.86730469 15.00765625 2.85570313 14.0859375 2.84375 C6.91507985 2.79023614 -0.08823884 2.96085642 -7.203125 3.87890625 C-7.203125 4.53890625 -7.203125 5.19890625 -7.203125 5.87890625 C-7.863125 5.87890625 -8.523125 5.87890625 -9.203125 5.87890625 C-9.533125 6.86890625 -9.863125 7.85890625 -10.203125 8.87890625 C-10.863125 8.87890625 -11.523125 8.87890625 -12.203125 8.87890625 C-12.203125 9.53890625 -12.203125 10.19890625 -12.203125 10.87890625 C-13.193125 11.20890625 -14.183125 11.53890625 -15.203125 11.87890625 C-15.203125 10.88890625 -15.203125 9.89890625 -15.203125 8.87890625 C-14.584375 8.67265625 -13.965625 8.46640625 -13.328125 8.25390625 C-10.88326823 6.98821984 -10.88326823 6.98821984 -10.203125 3.81640625 C-9.873125 2.84703125 -9.543125 1.87765625 -9.203125 0.87890625 C-6.14293039 -0.33854891 -3.24954446 -0.1700343 0 0 Z " fill="#192A42" transform="translate(247.203125,112.12109375)"/>
<path d="M0 0 C-2.57332268 5.97378478 -7.8330612 9.6664992 -13.25 13 C-16.10162407 14.03695421 -17.2430315 14.16640975 -20 13 C-12.28571429 7 -12.28571429 7 -9 7 C-8.9175 6.21625 -8.835 5.4325 -8.75 4.625 C-8 2 -8 2 -6.1875 0.6875 C-4 0 -4 0 0 0 Z " fill="#434C5C" transform="translate(263,264)"/>
<path d="M0 0 C1.98 0 3.96 0 6 0 C5.65066406 0.57105469 5.30132812 1.14210937 4.94140625 1.73046875 C0.98318794 8.78349797 0.13839603 14.97303018 0 23 C-0.33 23 -0.66 23 -1 23 C-1.02699725 20.72923158 -1.04639453 18.45837179 -1.0625 16.1875 C-1.07410156 14.92292969 -1.08570312 13.65835938 -1.09765625 12.35546875 C-1 9 -1 9 0 6 C-0.66 6 -1.32 6 -2 6 C-2 6.99 -2 7.98 -2 9 C-4.88575819 8.60196439 -5.82189513 8.20990931 -7.75 5.9375 C-8.1625 5.298125 -8.575 4.65875 -9 4 C-8.67 3.34 -8.34 2.68 -8 2 C-7.34 2.66 -6.68 3.32 -6 4 C-2.40320934 3.67673447 -2.40320934 3.67673447 1 3 C0.67 2.01 0.34 1.02 0 0 Z " fill="#8392A6" transform="translate(87,226)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C-0.99 2 -1.98 2 -3 2 C-3 2.99 -3 3.98 -3 5 C-14.52164009 5.3690205 -14.52164009 5.3690205 -20 3 C-20 2.34 -20 1.68 -20 1 C-6.3667426 -0.14806378 -6.3667426 -0.14806378 0 0 Z " fill="#11181A" transform="translate(265,169)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1.22644569 3.24900334 1.42797517 6.49909039 1.625 9.75 C1.68945312 10.67039063 1.75390625 11.59078125 1.8203125 12.5390625 C1.871875 13.42851562 1.9234375 14.31796875 1.9765625 15.234375 C2.02893066 16.05131836 2.08129883 16.86826172 2.13525391 17.70996094 C1.98190334 20.30640198 1.39664496 21.81880491 0 24 C-1.9453125 24.828125 -1.9453125 24.828125 -4.125 25.25 C-5.40375 25.4975 -6.6825 25.745 -8 26 C-6.824375 24.5459375 -6.824375 24.5459375 -5.625 23.0625 C-0.81257111 16.29247292 -0.63934621 8.05912716 0 0 Z " fill="#243758" transform="translate(264,240)"/>
<path d="M0 0 C4.73477222 2.06463862 6.72219474 5.44438948 9 10 C1.71428571 13.42857143 1.71428571 13.42857143 -3 13 C-2.505 12.525625 -2.01 12.05125 -1.5 11.5625 C0.70453669 7.79641649 0.24608113 4.26540621 0 0 Z " fill="#364A67" transform="translate(131,188)"/>
<path d="M0 0 C0.0825 0.61875 0.165 1.2375 0.25 1.875 C0.79922538 4.13720728 0.79922538 4.13720728 2.8125 5.125 C3.534375 5.41375 4.25625 5.7025 5 6 C5.54785156 6.34804687 6.09570312 6.69609375 6.66015625 7.0546875 C9.96336434 8.38920563 13.12948898 8.13392763 16.625 8 C19.11036281 7.90585747 21.50787461 7.90661825 24 8 C24.66 8.66 25.32 9.32 26 10 C22.00204108 10.95619733 18.29196078 11.1039592 14.1875 11.0625 C13.02605469 11.05347656 11.86460937 11.04445312 10.66796875 11.03515625 C9.78753906 11.02355469 8.90710938 11.01195312 8 11 C8 10.34 8 9.68 8 9 C7.195625 8.87625 6.39125 8.7525 5.5625 8.625 C4.716875 8.41875 3.87125 8.2125 3 8 C2.67 7.34 2.34 6.68 2 6 C1.01 5.67 0.02 5.34 -1 5 C-1 4.34 -1 3.68 -1 3 C-2.32 2.34 -3.64 1.68 -5 1 C-3 0 -3 0 0 0 Z " fill="#628DC5" transform="translate(149,180)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C2.12756393 7.90653263 2.34717237 14.59788313 -1 22 C-1.66 22.66 -2.32 23.32 -3 24 C-4.76263621 19.54702432 -5.36687763 17.10758535 -3.625 12.5625 C-3.08875 11.386875 -2.5525 10.21125 -2 9 C-1.67 9 -1.34 9 -1 9 C-0.67 6.03 -0.34 3.06 0 0 Z " fill="#474E5A" transform="translate(285,133)"/>
<path d="M0 0 C-1.0546875 1.51171875 -1.0546875 1.51171875 -3 3 C-6.2578125 3.14453125 -6.2578125 3.14453125 -10.125 2.8125 C-10.79281494 2.75715088 -11.46062988 2.70180176 -12.14868164 2.64477539 C-17.23809447 2.18143023 -22.06515255 1.29864407 -27 0 C-19.64323077 -4.90451282 -8.18929964 -1.6262439 0 0 Z " fill="#B8D0E7" transform="translate(246,222)"/>
<path d="M0 0 C1.0828125 0.37125 1.0828125 0.37125 2.1875 0.75 C0.88042903 4.81644303 -1.56618568 5.93050202 -5.13671875 7.80078125 C-6.94442708 8.72631934 -6.94442708 8.72631934 -8.5625 10.5 C-9.18125 11.11875 -9.18125 11.11875 -9.8125 11.75 C-10.8025 11.75 -11.7925 11.75 -12.8125 11.75 C-12.4825 10.1 -12.1525 8.45 -11.8125 6.75 C-10.4925 6.42 -9.1725 6.09 -7.8125 5.75 C-7.8125 5.09 -7.8125 4.43 -7.8125 3.75 C-3.73086735 -0.33163265 -3.73086735 -0.33163265 0 0 Z " fill="#D7E0F4" transform="translate(111.8125,204.25)"/>
<path d="M0 0 C2.16489954 8.13703619 2.58123606 14.26453011 -1 22 C-4.11269171 17.33096244 -3.48651426 12.47152272 -3 7 C-2.24611862 4.38538251 -1.31092155 2.40335617 0 0 Z " fill="#567FAF" transform="translate(138,154)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2.25 2.8125 2.25 2.8125 2 6 C0 7.875 0 7.875 -2 9 C-2.66 8.01 -3.32 7.02 -4 6 C-4.99 6.33 -5.98 6.66 -7 7 C-7 7.66 -7 8.32 -7 9 C-12.41538462 12.07692308 -12.41538462 12.07692308 -15.375 11.6875 C-15.91125 11.460625 -16.4475 11.23375 -17 11 C-15.35 10.67 -13.7 10.34 -12 10 C-12 9.34 -12 8.68 -12 8 C-9.06666823 4.38974552 -6.37851447 3.33259136 -2 2 C-1.34 1.34 -0.68 0.68 0 0 Z " fill="#112035" transform="translate(76,258)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1.12117187 0.98742187 1.24234375 1.97484375 1.3671875 2.9921875 C1.53476563 4.27351562 1.70234375 5.55484375 1.875 6.875 C2.03742188 8.15117187 2.19984375 9.42734375 2.3671875 10.7421875 C2.69877473 14.07164227 2.69877473 14.07164227 5 16 C5.66 16 6.32 16 7 16 C7 17.32 7 18.64 7 20 C6.34 20.33 5.68 20.66 5 21 C4.34786708 23.02463255 4.34786708 23.02463255 4 25 C2.96674014 23.57140593 1.94872366 22.13177617 0.9375 20.6875 C0.36902344 19.88699219 -0.19945312 19.08648437 -0.78515625 18.26171875 C-1.18605469 17.51535156 -1.58695313 16.76898438 -2 16 C-1.67 15.01 -1.34 14.02 -1 13 C-1 13.66 -1 14.32 -1 15 C-0.34 15 0.32 15 1 15 C0.67 14.34 0.34 13.68 0 13 C-0.07092842 10.7927077 -0.08415025 8.58332548 -0.0625 6.375 C-0.05347656 5.18648437 -0.04445312 3.99796875 -0.03515625 2.7734375 C-0.02355469 1.85820312 -0.01195312 0.94296875 0 0 Z " fill="#626C7D" transform="translate(203,244)"/>
<path d="M0 0 C0.33 0.66 0.66 1.32 1 2 C1.804375 1.835 2.60875 1.67 3.4375 1.5 C7.65887352 0.90752652 11.74664545 0.91493291 16 1 C13.48169253 4.12270126 12.2738451 4.94523098 8.25 5.75 C6.64125 5.87375 6.64125 5.87375 5 6 C4.67 5.01 4.34 4.02 4 3 C2.68 3 1.36 3 0 3 C0 3.66 0 4.32 0 5 C-1.98 5.99 -1.98 5.99 -4 7 C-4.33 5.68 -4.66 4.36 -5 3 C-4.34 3 -3.68 3 -3 3 C-3 2.34 -3 1.68 -3 1 C-2.01 0.67 -1.02 0.34 0 0 Z " fill="#D5DCE6" transform="translate(81,217)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C2.34 1 1.68 1 1 1 C1.33 2.65 1.66 4.3 2 6 C1.030625 6.2475 0.06125 6.495 -0.9375 6.75 C-1.948125 7.1625 -2.95875 7.575 -4 8 C-4.75243555 9.92638012 -4.75243555 9.92638012 -5 12 C-6.4375 13.625 -6.4375 13.625 -8 15 C-8.66 15.66 -9.32 16.32 -10 17 C-10 16.34 -10 15.68 -10 15 C-10.66 15 -11.32 15 -12 15 C-10.69386058 11.08158173 -9.16870152 8.67359191 -6 6 C-5.34 6 -4.68 6 -4 6 C-3.67 4.68 -3.34 3.36 -3 2 C-2.01 2 -1.02 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#A2BEDE" transform="translate(244,116)"/>
<path d="M0 0 C5.24840947 3.3531505 6.80895003 7.43645155 9 13 C9.33 13.66 9.66 14.32 10 15 C10.66 14.67 11.32 14.34 12 14 C12.33 15.32 12.66 16.64 13 18 C12.34 18 11.68 18 11 18 C11.33 20.97 11.66 23.94 12 27 C10.28301818 24.42452727 9.31866256 22.41695395 8.25 19.5625 C6.22275769 14.34849421 3.75366584 9.4278334 1.171875 4.46875 C0 2 0 2 0 0 Z " fill="#505A67" transform="translate(123,85)"/>
<path d="M0 0 C2.64 0.33 5.28 0.66 8 1 C7.34 2.32 6.68 3.64 6 5 C7.32 6.32 8.64 7.64 10 9 C9.34 9 8.68 9 8 9 C8 9.66 8 10.32 8 11 C4.25 12.125 4.25 12.125 2 11 C2 10.34 2 9.68 2 9 C1.01 8.67 0.02 8.34 -1 8 C-0.34 7.01 0.32 6.02 1 5 C0.6878236 2.35367713 0.6878236 2.35367713 0 0 Z " fill="#789EC7" transform="translate(167,130)"/>
<path d="M0 0 C1.0625 1.875 1.0625 1.875 2 4 C1.67 4.66 1.34 5.32 1 6 C1.66 6.33 2.32 6.66 3 7 C2.7525 7.8971875 2.7525 7.8971875 2.5 8.8125 C1.8885876 11.11344336 1.8885876 11.11344336 2 14 C3.98 13.67 5.96 13.34 8 13 C6.38405168 15.04119788 4.7143618 17.04072937 3 19 C2.34 19 1.68 19 1 19 C1 20.98 1 22.96 1 25 C0.01 24.34 -0.98 23.68 -2 23 C-1.67 22.29875 -1.34 21.5975 -1 20.875 C0.10123871 17.70893872 0.22195686 15.32935296 0 12 C-0.33 11.34 -0.66 10.68 -1 10 C-1.09472912 8.48154798 -1.1298841 6.95889616 -1.125 5.4375 C-1.12886719 4.22900391 -1.12886719 4.22900391 -1.1328125 2.99609375 C-1 1 -1 1 0 0 Z " fill="#2C4158" transform="translate(141,129)"/>
<path d="M0 0 C1.5625 1.1875 1.5625 1.1875 3 3 C2.71395102 4.67542976 2.38218767 6.34385343 2 8 C2.66 8.66 3.32 9.32 4 10 C4 11.32 4 12.64 4 14 C3.34 14 2.68 14 2 14 C2.33 15.32 2.66 16.64 3 18 C2.566875 17.525625 2.13375 17.05125 1.6875 16.5625 C-0.02309613 14.76313043 -0.02309613 14.76313043 -3 14 C-2.40380045 9.13103697 -1.43023178 4.67209049 0 0 Z " fill="#79A3D0" transform="translate(140,163)"/>
<path d="M0 0 C0.93423645 3.01031744 1.04449911 3.86650268 0 7 C-0.73042691 14.18253132 0.98081869 19.87607179 3.30908203 26.59057617 C3.92072359 28.37800515 4.46580245 30.18791812 5 32 C4.67 32.66 4.34 33.32 4 34 C-1.43433533 28.02223114 -2.3398936 21.81068155 -2.25 13.9375 C-2.25773437 13.25623047 -2.26546875 12.57496094 -2.2734375 11.87304688 C-2.25680195 7.5436457 -1.58151136 4.02281264 0 0 Z " fill="#758499" transform="translate(130,152)"/>
<path d="M0 0 C0.99 0.66 1.98 1.32 3 2 C2.47963789 6.38590924 1.88756801 10.67310593 1 15 C0.65596692 17.33177975 0.32050798 19.66487041 0 22 C-0.66 21.67 -1.32 21.34 -2 21 C-2.05420701 18.43721301 -2.09377007 15.87558517 -2.125 13.3125 C-2.15013672 12.2306543 -2.15013672 12.2306543 -2.17578125 11.12695312 C-2.21391569 6.95123219 -1.8789919 3.7505862 0 0 Z " fill="#122342" transform="translate(26,228)"/>
<path d="M0 0 C0.78310547 0.32484375 0.78310547 0.32484375 1.58203125 0.65625 C7.843157 3.02473189 13.347837 3.33571664 20 3 C20 4.32 20 5.64 20 7 C22.97 7 25.94 7 29 7 C29 7.66 29 8.32 29 9 C25.7 9 22.4 9 19 9 C19 8.01 19 7.02 19 6 C18.26394531 6.02320313 17.52789062 6.04640625 16.76953125 6.0703125 C15.79371094 6.08835938 14.81789062 6.10640625 13.8125 6.125 C12.84957031 6.14820313 11.88664063 6.17140625 10.89453125 6.1953125 C7.82930559 5.98848216 5.73848141 5.3692407 3 4 C1.1875 1.875 1.1875 1.875 0 0 Z " fill="#4D73A9" transform="translate(240,158)"/>
<path d="M0 0 C7.33695652 5.86956522 7.33695652 5.86956522 9 9 C8.6875 11.75 8.6875 11.75 8 14 C6.87411986 13.04270084 5.7493285 12.08412105 4.625 11.125 C3.99851563 10.59132812 3.37203125 10.05765625 2.7265625 9.5078125 C1.44163349 8.38567993 0.20628025 7.20628025 -1 6 C-0.625 2.875 -0.625 2.875 0 0 Z " fill="#54657C" transform="translate(188,201)"/>
<path d="M0 0 C0.40347656 0.49886719 0.80695313 0.99773437 1.22265625 1.51171875 C2.88620032 3.20121954 2.88620032 3.20121954 5.12109375 3.14453125 C5.88550781 3.03496094 6.64992187 2.92539063 7.4375 2.8125 C8.58025391 2.66748047 8.58025391 2.66748047 9.74609375 2.51953125 C12.07578032 1.98253244 13.91480091 1.15422182 16 0 C16 0.66 16 1.32 16 2 C15.01 2.495 15.01 2.495 14 3 C13.67 3.99 13.34 4.98 13 6 C12.030625 6.12375 11.06125 6.2475 10.0625 6.375 C8.5465625 6.684375 8.5465625 6.684375 7 7 C6.67 7.66 6.34 8.32 6 9 C5.34 8.67 4.68 8.34 4 8 C4.33 7.34 4.66 6.68 5 6 C4.38125 6.185625 3.7625 6.37125 3.125 6.5625 C1 7 1 7 -1 6 C-1.042721 4.33388095 -1.04063832 2.66617115 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#B4C3D3" transform="translate(143,129)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1 1.98 1 3.96 1 6 C1.66 6 2.32 6 3 6 C4.42635741 12.31672565 5.75297849 18.64549677 7 25 C2.5896353 21.50212455 1.06585443 17.37664345 0 12 C-0.22656299 7.98453247 -0.18348758 4.01633927 0 0 Z " fill="#97A0AE" transform="translate(82,37)"/>
<path d="M0 0 C0.66 0.66 1.32 1.32 2 2 C1.01 2 0.02 2 -1 2 C-0.67 3.65 -0.34 5.3 0 7 C0.66 6.01 1.32 5.02 2 4 C5.37116564 5.12372188 5.55882121 5.47162599 7.125 8.4375 C7.45757812 9.05496094 7.79015625 9.67242187 8.1328125 10.30859375 C8.76192316 11.53564293 9.38332668 12.76665336 10 14 C4.78062257 12.6330202 1.76289739 10.76289739 -2 7 C-2.875 4.1875 -2.875 4.1875 -3 2 C-2.01 1.34 -1.02 0.68 0 0 Z " fill="#2B2F38" transform="translate(210,263)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.814375 1.639375 1.62875 2.27875 1.4375 2.9375 C1.293125 3.618125 1.14875 4.29875 1 5 C1.33 5.33 1.66 5.66 2 6 C2.375 9.375 2.375 9.375 2 13 C-0.25 15 -0.25 15 -3 16 C-5.3125 15.6875 -5.3125 15.6875 -7 15 C-6.67 13.68 -6.34 12.36 -6 11 C-4.35 11 -2.7 11 -1 11 C-1.01160156 10.28972656 -1.02320313 9.57945312 -1.03515625 8.84765625 C-1.04869141 7.46900391 -1.04869141 7.46900391 -1.0625 6.0625 C-1.07410156 5.14597656 -1.08570313 4.22945312 -1.09765625 3.28515625 C-1 1 -1 1 0 0 Z " fill="#E7F1FB" transform="translate(276,137)"/>
<path d="M0 0 C2.31 0.33 4.62 0.66 7 1 C6.401875 1.28875 5.80375 1.5775 5.1875 1.875 C2.80672208 3.04742026 2.80672208 3.04742026 0 5 C-2.62758434 5.19677944 -5.125327 5.2787373 -7.75 5.25 C-8.4409375 5.25773437 -9.131875 5.26546875 -9.84375 5.2734375 C-14.5790637 5.25563557 -18.503165 4.48324924 -23 3 C-23 2.67 -23 2.34 -23 2 C-15.41 2.33 -7.82 2.66 0 3 C0 2.01 0 1.02 0 0 Z " fill="#223C66" transform="translate(128,61)"/>
<path d="M0 0 C-0.66 1.32 -1.32 2.64 -2 4 C-3.98 4 -5.96 4 -8 4 C-7.34 5.32 -6.68 6.64 -6 8 C-8.31 7.67 -10.62 7.34 -13 7 C-13 6.01 -13 5.02 -13 4 C-12.34 4.33 -11.68 4.66 -11 5 C-11.33 3.68 -11.66 2.36 -12 1 C-7.915021 0.45533613 -4.1274515 0 0 0 Z " fill="#263C56" transform="translate(95,222)"/>
<path d="M0 0 C0.66 1.32 1.32 2.64 2 4 C2.33 3.34 2.66 2.68 3 2 C3 3.98 3 5.96 3 8 C-0.81756824 9.37432457 -4.07255329 8.67975039 -8 8 C-7.34 7.67 -6.68 7.34 -6 7 C-4.90833725 5.06669397 -4.90833725 5.06669397 -4 3 C-3 1 -3 1 0 0 Z " fill="#1F324D" transform="translate(196,173)"/>
<path d="M0 0 C0.268125 0.639375 0.53625 1.27875 0.8125 1.9375 C1.88667752 4.33131686 1.88667752 4.33131686 5 5 C4.34 6.32 3.68 7.64 3 9 C-0.54404336 9 -1.10267905 8.39010515 -3.6875 6.125 C-4.31011719 5.59132813 -4.93273437 5.05765625 -5.57421875 4.5078125 C-7 3 -7 3 -7 1 C-5.5459375 1.0309375 -5.5459375 1.0309375 -4.0625 1.0625 C-1.12534105 1.35618499 -1.12534105 1.35618499 0 0 Z " fill="#3F4145" transform="translate(96,61)"/>
<path d="M0 0 C0.99 4.62 1.98 9.24 3 14 C2.01 14 1.02 14 0 14 C-2.96823597 10.23262357 -3.53898164 6.70238725 -4 2 C-1 0 -1 0 0 0 Z " fill="#03091B" transform="translate(89,43)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C3.63 2.66 7.26 3.32 11 4 C11 4.33 11 4.66 11 5 C7.7 5.66 4.4 6.32 1 7 C0.01 5.35 -0.98 3.7 -2 2 C-2.495 2.144375 -2.99 2.28875 -3.5 2.4375 C-6.97752922 3.21994407 -10.45955123 3.58694764 -14 4 C-14 3.34 -14 2.68 -14 2 C-4.58997722 -0.29612756 -4.58997722 -0.29612756 0 0 Z " fill="#DCE8F7" transform="translate(123,15)"/>
<path d="M0 0 C0 0.99 0 1.98 0 3 C-1.32 3 -2.64 3 -4 3 C-4.33 4.32 -4.66 5.64 -5 7 C-5.33 6.67 -5.66 6.34 -6 6 C-8.69235776 5.76321284 -11.36498156 5.57801975 -14.0625 5.4375 C-14.82111328 5.39431641 -15.57972656 5.35113281 -16.36132812 5.30664062 C-18.24065438 5.20026367 -20.12030244 5.09960066 -22 5 C-22 4.34 -22 3.68 -22 3 C-20.96359375 2.95101562 -19.9271875 2.90203125 -18.859375 2.8515625 C-17.48955792 2.77650403 -16.11976752 2.70095753 -14.75 2.625 C-14.06808594 2.5940625 -13.38617188 2.563125 -12.68359375 2.53125 C-8.07546348 2.26281523 -4.3879553 0 0 0 Z " fill="#4E78B3" transform="translate(131,57)"/>
<path d="M0 0 C0.5775 0.226875 1.155 0.45375 1.75 0.6875 C1.110625 0.955625 0.47125 1.22375 -0.1875 1.5 C-2.58131686 2.57417752 -2.58131686 2.57417752 -3.25 5.6875 C-3.91 5.6875 -4.57 5.6875 -5.25 5.6875 C-5.91 7.6675 -6.57 9.6475 -7.25 11.6875 C-7.91 11.6875 -8.57 11.6875 -9.25 11.6875 C-9.58 13.6675 -9.91 15.6475 -10.25 17.6875 C-10.91 17.6875 -11.57 17.6875 -12.25 17.6875 C-11.52991594 13.07896203 -9.93704061 9.01512591 -8.25 4.6875 C-7.59 4.6875 -6.93 4.6875 -6.25 4.6875 C-6.25 4.0275 -6.25 3.3675 -6.25 2.6875 C-3.02697842 -0.42041367 -3.02697842 -0.42041367 0 0 Z " fill="#324D73" transform="translate(218.25,218.3125)"/>
<path d="M0 0 C-3.3618226 4.25171681 -6.74828319 7.6381774 -11 11 C-11.66 10.67 -12.32 10.34 -13 10 C-12.34 9.01 -11.68 8.02 -11 7 C-11.66 6.67 -12.32 6.34 -13 6 C-9.70862872 2.32140857 -5.25202969 -2.62601484 0 0 Z " fill="#64748A" transform="translate(106,215)"/>
<path d="M0 0 C-0.99 0.33 -1.98 0.66 -3 1 C-3 1.66 -3 2.32 -3 3 C2.94 3.99 2.94 3.99 9 5 C9 5.33 9 5.66 9 6 C2.16950529 6.33050781 -3.63316889 5.62376027 -10 3 C-10.66 2.34 -11.32 1.68 -12 1 C-8.00439392 -1.83022097 -4.57262677 -0.76210446 0 0 Z " fill="#474D58" transform="translate(248,169)"/>
<path d="M0 0 C0.66 0.66 1.32 1.32 2 2 C3.423125 1.4740625 3.423125 1.4740625 4.875 0.9375 C8 0 8 0 10 1 C9.34 1.66 8.68 2.32 8 3 C7.59952556 5.32275177 7.2602896 7.65739357 7 10 C5.68 10.33 4.36 10.66 3 11 C2.49384702 9.73160474 1.99530901 8.46016898 1.5 7.1875 C1.2215625 6.47980469 0.943125 5.77210938 0.65625 5.04296875 C0 3 0 3 0 0 Z " fill="#B2C9E1" transform="translate(195,151)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.25 2.9375 1.25 2.9375 0 5 C-2.125 5.75 -2.125 5.75 -4 6 C-4.12375 6.86625 -4.2475 7.7325 -4.375 8.625 C-4.98058121 11.89513853 -5.88306035 14.87256899 -7 18 C-7.33 18 -7.66 18 -8 18 C-8.65849383 14.64233343 -9.12613883 11.42677165 -9 8 C-6.8125 5.0625 -6.8125 5.0625 -4 3 C-3.236875 2.401875 -2.47375 1.80375 -1.6875 1.1875 C-1.130625 0.795625 -0.57375 0.40375 0 0 Z " fill="#041028" transform="translate(236,115)"/>
<path d="M0 0 C1.32 0.33 2.64 0.66 4 1 C2.37660195 2.70884005 0.70680947 4.37446717 -1 6 C-1.66 6 -2.32 6 -3 6 C-3 6.66 -3 7.32 -3 8 C-7.41685121 8.84419939 -11.62965097 9.16322706 -16.125 9.1875 C-17.32382812 9.20167969 -18.52265625 9.21585937 -19.7578125 9.23046875 C-22.80284753 9.01401445 -24.45327005 8.60279273 -27 7 C-25.96101563 7.03480469 -24.92203125 7.06960938 -23.8515625 7.10546875 C-12.00741381 7.66436266 -12.00741381 7.66436266 -1 4 C-0.18733817 1.96161898 -0.18733817 1.96161898 0 0 Z " fill="#213C64" transform="translate(67,260)"/>
<path d="M0 0 C-0.66 0 -1.32 0 -2 0 C-2.33 0.99 -2.66 1.98 -3 3 C-7.32257021 5.49859549 -11.71962351 5.29988371 -16.5625 5.25 C-17.69461914 5.26160156 -17.69461914 5.26160156 -18.84960938 5.2734375 C-22.70313167 5.2598568 -25.73842785 5.18014902 -29 3 C-29 2.67 -29 2.34 -29 2 C-27.00045254 1.95745644 -24.99958364 1.95919217 -23 2 C-22.67 2.33 -22.34 2.66 -22 3 C-15.49808385 3.78693826 -10.65147254 2.87202785 -4.91015625 -0.22265625 C-3 -1 -3 -1 0 0 Z " fill="#6A95C9" transform="translate(69,260)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2.36256858 1.4562672 2.71479793 2.91511185 3.0625 4.375 C3.35833984 5.59316406 3.35833984 5.59316406 3.66015625 6.8359375 C4 9 4 9 3 11 C3.66 11 4.32 11 5 11 C4.6875 12.9375 4.6875 12.9375 4 15 C3.01 15.33 2.02 15.66 1 16 C0.26676204 18.01508358 0.26676204 18.01508358 0 20 C-0.66 19.67 -1.32 19.34 -2 19 C-1.34 17.68 -0.68 16.36 0 15 C0.66 15 1.32 15 2 15 C2 13.35 2 11.7 2 10 C1.34 10 0.68 10 0 10 C-0.95024979 6.30458414 -0.95024979 3.69541586 0 0 Z " fill="#98B9DF" transform="translate(74,235)"/>
<path d="M0 0 C4.20497587 2.92012213 7.27485831 6.13566606 9 11 C9.30451843 14.03551706 9.24796513 16.9624271 9 20 C6.23776722 17.23776722 6.42143709 14.79293383 6 11 C5.34 11 4.68 11 4 11 C3.67 9.35 3.34 7.7 3 6 C2.34 6 1.68 6 1 6 C0.67 4.02 0.34 2.04 0 0 Z " fill="#7595C0" transform="translate(70,224)"/>
<path d="M0 0 C0.53109375 0.39703125 1.0621875 0.7940625 1.609375 1.203125 C-3.13108895 5.15351163 -8.17706666 8.203125 -14.390625 8.203125 C-14.390625 7.543125 -14.390625 6.883125 -14.390625 6.203125 C-11.90625 4.40625 -11.90625 4.40625 -8.640625 2.453125 C-7.57328125 1.79828125 -6.5059375 1.1434375 -5.40625 0.46875 C-2.390625 -0.796875 -2.390625 -0.796875 0 0 Z " fill="#62758D" transform="translate(129.390625,199.796875)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1.28875 0.9075 1.5775 1.815 1.875 2.75 C2.84109654 5.84465725 2.84109654 5.84465725 4.06640625 7.91796875 C5.14818284 10.33046633 5.17357181 11.93676249 5.0625 14.5625 C4.94746946 17.52828728 5.039379 19.118137 6 22 C5.34 22.99 4.68 23.98 4 25 C3.51849058 22.95888458 3.03989917 20.91708068 2.5625 18.875 C2.16224609 17.16957031 2.16224609 17.16957031 1.75390625 15.4296875 C0.60341539 10.19584823 -0.12777456 5.36653173 0 0 Z " fill="#D4DDEC" transform="translate(133,83)"/>
<path d="M0 0 C3.95827235 -0.05785647 7.9164367 -0.09354717 11.875 -0.125 C13.00292969 -0.14175781 14.13085938 -0.15851563 15.29296875 -0.17578125 C16.36933594 -0.18222656 17.44570312 -0.18867187 18.5546875 -0.1953125 C19.54968262 -0.20578613 20.54467773 -0.21625977 21.56982422 -0.22705078 C24 0 24 0 26 2 C21.64022997 3.22771614 17.50107569 3.18390489 13 3.1875 C11.78957031 3.20586914 11.78957031 3.20586914 10.5546875 3.22460938 C9.38292969 3.22750977 9.38292969 3.22750977 8.1875 3.23046875 C7.47980469 3.23457764 6.77210937 3.23868652 6.04296875 3.24291992 C3.68164933 2.9621464 2.05607177 2.16578114 0 1 C0 0.67 0 0.34 0 0 Z " fill="#14243E" transform="translate(106,65)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C1.32 2.66 2.64 3.32 4 4 C4 4.66 4 5.32 4 6 C3.34 6 2.68 6 2 6 C2 6.66 2 7.32 2 8 C-1.86933162 7.42676569 -4.15222057 5.61046448 -7 3 C-7 2.34 -7 1.68 -7 1 C-2.25 0 -2.25 0 0 0 Z " fill="#030816" transform="translate(236,161)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3.19412181 2.47831221 3.38012131 3.95769316 3.5625 5.4375 C3.66691406 6.26121094 3.77132812 7.08492187 3.87890625 7.93359375 C3.91886719 8.61550781 3.95882812 9.29742187 4 10 C3 11 3 11 -0.5625 11.0625 C-1.696875 11.041875 -2.83125 11.02125 -4 11 C-4.33 10.01 -4.66 9.02 -5 8 C-4.01 7.67 -3.02 7.34 -2 7 C-0.77030122 3.48809191 -0.77030122 3.48809191 0 0 Z " fill="#152743" transform="translate(225,147)"/>
<path d="M0 0 C-0.29618394 3.55420724 -0.80337043 4.80337043 -3.375 7.375 C-4.24125 7.91125 -5.1075 8.4475 -6 9 C-6.99 8.67 -7.98 8.34 -9 8 C-9 8.99 -9 9.98 -9 11 C-9.66 11 -10.32 11 -11 11 C-9.66629231 7.40924853 -8.19012918 4.15378602 -6 1 C-3 0 -3 0 0 0 Z " fill="#333744" transform="translate(142,141)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C2 2.65 2 4.3 2 6 C0.68 6.33 -0.64 6.66 -2 7 C-2 3.89448334 -1.4606285 2.64738916 0 0 Z M-6 10 C-5.01 10.33 -4.02 10.66 -3 11 C-3.33 11.66 -3.66 12.32 -4 13 C-3.34 13 -2.68 13 -2 13 C-1.67 14.98 -1.34 16.96 -1 19 C-0.34 19 0.32 19 1 19 C1 19.66 1 20.32 1 21 C-0.8125 20.9375 -0.8125 20.9375 -3 20 C-4.81278756 16.5039097 -6 13.96018245 -6 10 Z " fill="#E5EFF6" transform="translate(238,131)"/>
<path d="M0 0 C2.475 0.495 2.475 0.495 5 1 C5 1.66 5 2.32 5 3 C5.61875 3.2475 6.2375 3.495 6.875 3.75 C9.4072196 5.23954094 9.80718658 6.37581048 11 9 C12.5412312 10.70921589 12.5412312 10.70921589 14 12 C9.99133843 12 7.01649801 10.55898289 4 8 C3.0625 4.75 3.0625 4.75 3 2 C2.01 2 1.02 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#254271" transform="translate(91,50)"/>
<path d="M0 0 C0.8971875 0.309375 0.8971875 0.309375 1.8125 0.625 C-0.23983685 2.8727975 -1.19417261 3.6272242 -4.1875 4.625 C-6.76015818 4.69529121 -9.30391431 4.71870832 -11.875 4.6875 C-12.57689453 4.68298828 -13.27878906 4.67847656 -14.00195312 4.67382812 C-15.73050538 4.66206927 -17.45901365 4.64413454 -19.1875 4.625 C-19.1875 3.965 -19.1875 3.305 -19.1875 2.625 C-20.1775 2.295 -21.1675 1.965 -22.1875 1.625 C-20.99511719 1.64820313 -19.80273438 1.67140625 -18.57421875 1.6953125 C-17.00781876 1.71407178 -15.441412 1.73227181 -13.875 1.75 C-13.08931641 1.76675781 -12.30363281 1.78351562 -11.49414062 1.80078125 C-10.73681641 1.80722656 -9.97949219 1.81367187 -9.19921875 1.8203125 C-8.15447388 1.83602295 -8.15447388 1.83602295 -7.08862305 1.85205078 C-4.08443748 1.49326144 -3.12648393 -0.53596867 0 0 Z " fill="#739ACD" transform="translate(128.1875,55.375)"/>
<path d="M0 0 C4.95 0.99 4.95 0.99 10 2 C10 2.66 10 3.32 10 4 C10.60199219 4.08636719 11.20398438 4.17273438 11.82421875 4.26171875 C14.6183278 5.20980961 15.28490384 6.32496426 16.8125 8.8125 C17.25207031 9.49957031 17.69164062 10.18664063 18.14453125 10.89453125 C19.15965671 13.39294506 18.91191297 14.51042165 18 17 C17.60167969 16.30132813 17.20335937 15.60265625 16.79296875 14.8828125 C16.26316406 13.97273438 15.73335937 13.06265625 15.1875 12.125 C14.66542969 11.22007813 14.14335937 10.31515625 13.60546875 9.3828125 C11.401621 6.11189491 9.66971662 5.13131698 5.8125 4.375 C4.884375 4.25125 3.95625 4.1275 3 4 C3 3.34 3 2.68 3 2 C2.01 1.67 1.02 1.34 0 1 C0 0.67 0 0.34 0 0 Z " fill="#7389A6" transform="translate(125,15)"/>
<path d="M0 0 C15.92938497 -0.55353075 15.92938497 -0.55353075 22 3 C21.34 3.66 20.68 4.32 20 5 C19.01 5 18.02 5 17 5 C17 4.34 17 3.68 17 3 C16.35933594 3.01160156 15.71867187 3.02320313 15.05859375 3.03515625 C9.91346778 3.08883119 5.06975076 2.88169578 0 2 C0 1.34 0 0.68 0 0 Z " fill="#00040B" transform="translate(111,8)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C2.19818283 7.70518586 2.30844801 13.65176798 0 20 C-1.72327319 17.0098145 -2.25156728 14.87966022 -2.1875 11.4375 C-2.18105469 10.67308594 -2.17460937 9.90867188 -2.16796875 9.12109375 C-2 7 -2 7 -1 4 C-0.65772583 2.66893378 -0.32248257 1.33599921 0 0 Z " fill="#4F5E77" transform="translate(267,238)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.34 1.66 0.68 2.32 0 3 C-0.67651207 5.19704511 -0.67651207 5.19704511 -1.125 7.625 C-1.29257813 8.44226563 -1.46015625 9.25953125 -1.6328125 10.1015625 C-1.75398437 10.72804687 -1.87515625 11.35453125 -2 12 C-5.465 10.02 -5.465 10.02 -9 8 C-9 7.34 -9 6.68 -9 6 C-8.01 5.67 -7.02 5.34 -6 5 C-5.67 4.34 -5.34 3.68 -5 3 C-4.34 3 -3.68 3 -3 3 C-2.67 2.34 -2.34 1.68 -2 1 C-1.34 0.67 -0.68 0.34 0 0 Z " fill="#303745" transform="translate(189,194)"/>
<path d="M0 0 C3 0.5 3 0.5 5.375 2.0625 C7.62874175 5.44311262 7.65049154 7.5247739 7 11.5 C4.625 13.5 4.625 13.5 2 14.5 C1.34 14.17 0.68 13.84 0 13.5 C1.32 12.84 2.64 12.18 4 11.5 C4 8.53 4 5.56 4 2.5 C0.37 3.16 -3.26 3.82 -7 4.5 C-4.73943528 1.7177665 -3.5944274 0.59907123 0 0 Z " fill="#7393BA" transform="translate(125,185.5)"/>
<path d="M0 0 C5.4863191 0.40143798 9.05734875 2.29629731 13 6 C15.71474078 10.11589731 16.3497368 13.10368478 16 18 C14.45347763 15.68021645 12.930944 13.35384607 11.4375 11 C11.00308594 10.319375 10.56867188 9.63875 10.12109375 8.9375 C9 7 9 7 8 4 C5.67793475 3.29508733 3.34406932 2.62787571 1 2 C0.67 1.34 0.34 0.68 0 0 Z " fill="#ACB9C9" transform="translate(264,118)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C2 1.99 2 2.98 2 4 C0.01399663 5.3540932 -1.98817543 6.68457624 -4 8 C-6.32277416 10.6091387 -6.32277416 10.6091387 -8 13 C-8.33 12.34 -8.66 11.68 -9 11 C-9.99 11.495 -9.99 11.495 -11 12 C-9.49650623 8.33213607 -7.36271208 6.31089607 -4.375 3.75 C-3.14910156 2.69039063 -3.14910156 2.69039063 -1.8984375 1.609375 C-1.27195313 1.07828125 -0.64546875 0.5471875 0 0 Z " fill="#4F5766" transform="translate(236,111)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2.33 0.99 2.66 1.98 3 3 C2.67 3.66 2.34 4.32 2 5 C0.68 5 -0.64 5 -2 5 C-2 6.98 -2 8.96 -2 11 C-3.32 10.67 -4.64 10.34 -6 10 C-6 9.34 -6 8.68 -6 8 C-6.66 7.67 -7.32 7.34 -8 7 C-7 4 -7 4 -5.125 2.8125 C-3 2 -3 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#E5EEF7" transform="translate(117,194)"/>
<path d="M0 0 C0.33 0.99 0.66 1.98 1 3 C1.33 3.78375 1.66 4.5675 2 5.375 C2.96876822 7.91801659 3.54114054 10.32331983 4 13 C4.99 13 5.98 13 7 13 C7 13.66 7 14.32 7 15 C7.66 15 8.32 15 9 15 C9 15.99 9 16.98 9 18 C8.34 18 7.68 18 7 18 C6.67 16.68 6.34 15.36 6 14 C4.02 14.33 2.04 14.66 0 15 C-0.33 13.68 -0.66 12.36 -1 11 C-0.34 11 0.32 11 1 11 C0.67 10.2575 0.34 9.515 0 8.75 C-1 6 -1 6 -1 2 C-0.67 1.34 -0.34 0.68 0 0 Z " fill="#9AB8E2" transform="translate(143,166)"/>
<path d="M0 0 C3.93673644 1.31224548 6.22719294 2.91910327 9 6 C8.236875 5.67 7.47375 5.34 6.6875 5 C4.00930865 3.82563314 4.00930865 3.82563314 1 4 C1 4.99 1 5.98 1 7 C-3.125 6.3125 -7.25 5.625 -11.375 4.9375 C-12.43460938 4.76089844 -13.49421875 4.58429688 -14.5859375 4.40234375 C-15.38257813 4.26957031 -16.17921875 4.13679688 -17 4 C-17 3.67 -17 3.34 -17 3 C-15.94039062 3.03480469 -14.88078125 3.06960937 -13.7890625 3.10546875 C-12.40105748 3.13360399 -11.01303537 3.16090443 -9.625 3.1875 C-8.57699219 3.22520508 -8.57699219 3.22520508 -7.5078125 3.26367188 C-5.23252323 3.32978561 -5.23252323 3.32978561 -2 3 C-1.34 2.01 -0.68 1.02 0 0 Z " fill="#535D6F" transform="translate(267,111)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C2 1.99 2 2.98 2 4 C-0.31 4.66 -2.62 5.32 -5 6 C-5 6.66 -5 7.32 -5 8 C-6.65 8.66 -8.3 9.32 -10 10 C-9.67 8.35 -9.34 6.7 -9 5 C-7.68 4.67 -6.36 4.34 -5 4 C-5 3.34 -5 2.68 -5 2 C-2.625 0.9375 -2.625 0.9375 0 0 Z " fill="#030A15" transform="translate(106,9)"/>
<path d="M0 0 C1.65 0 3.3 0 5 0 C5.391875 0.928125 5.78375 1.85625 6.1875 2.8125 C8.15728786 6.27660969 9.63073257 7.08771308 13 9 C13 9.99 13 10.98 13 12 C9.36603447 10.99056513 8.06608233 10.08394242 5.6875 7.0625 C4 4 4 4 4 1 C3.01 1 2.02 1 1 1 C1.33 1.66 1.66 2.32 2 3 C3.28687011 6.86061033 3.13757618 9.94150283 3 14 C2.67 14 2.34 14 2 14 C-0.29612756 4.58997722 -0.29612756 4.58997722 0 0 Z " fill="#97B6D5" transform="translate(213,251)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2 0.66 2 1.32 2 2 C3.32 2.33 4.64 2.66 6 3 C6 3.66 6 4.32 6 5 C8.475 5.99 8.475 5.99 11 7 C11 7.66 11 8.32 11 9 C12.32 9.33 13.64 9.66 15 10 C14.34 8.35 13.68 6.7 13 5 C14.32 5 15.64 5 17 5 C17 7.31 17 9.62 17 12 C12.52744332 11.46133441 9.84817099 9.7798667 6.25 7.125 C5.28578125 6.42632812 4.3215625 5.72765625 3.328125 5.0078125 C1 3 1 3 0 0 Z " fill="#87A5C6" transform="translate(196,209)"/>
<path d="M0 0 C3.29509356 4.39345808 3.53372798 5.77647079 3.35546875 10.9375 C3 13 3 13 1.25 15.0625 C-1 16 -1 16 -5 16 C-5.66 14.35 -6.32 12.7 -7 11 C-6.01 11.33 -5.02 11.66 -4 12 C-4 12.66 -4 13.32 -4 14 C-2.68 13.67 -1.36 13.34 0 13 C0 8.71 0 4.42 0 0 Z " fill="#AABFD7" transform="translate(152,115)"/>
<path d="M0 0 C0.57073242 0.32597168 1.14146484 0.65194336 1.72949219 0.98779297 C4.16607646 2.07403796 5.68281107 2.2331027 8.328125 2.1953125 C9.12734375 2.18886719 9.9265625 2.18242187 10.75 2.17578125 C11.575 2.15902344 12.4 2.14226562 13.25 2.125 C14.51070312 2.11146484 14.51070312 2.11146484 15.796875 2.09765625 C17.86470604 2.07415817 19.93238995 2.03828908 22 2 C17.66155417 4.89229722 14.62196972 5.15866008 9.5 5.1875 C8.3553125 5.20167969 7.210625 5.21585937 6.03125 5.23046875 C3 5 3 5 0 3 C0 2.01 0 1.02 0 0 Z " fill="#ADCAE6" transform="translate(226,260)"/>
<path d="M0 0 C2.00451121 0.30503431 4.00448218 0.64080679 6 1 C8.27650745 0.6422386 8.27650745 0.6422386 10 0 C9.67 1.65 9.34 3.3 9 5 C3.06 4.67 -2.88 4.34 -9 4 C-9 3.67 -9 3.34 -9 3 C-7.88625 2.87625 -6.7725 2.7525 -5.625 2.625 C-1.96896323 2.3534187 -1.96896323 2.3534187 0 0 Z " fill="#CFDCED" transform="translate(242,258)"/>
<path d="M0 0 C1 3 1 3 -0.5 6.6875 C-2.97802178 11.39050612 -6.36338844 15.15908442 -10 19 C-10.66 18.67 -11.32 18.34 -12 18 C-11.34 17.484375 -10.68 16.96875 -10 16.4375 C-7.34362457 13.20004245 -7.68657868 11.07447719 -8 7 C-6 7 -4 7 -2 7 C-1.855625 6.21625 -1.71125 5.4325 -1.5625 4.625 C-1 2 -1 2 0 0 Z " fill="#717781" transform="translate(85,250)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1 1.65 1 3.3 1 5 C0.67 5 0.34 5 0 5 C0 3.35 0 1.7 0 0 Z M-6.875 8.875 C-5.92625 8.91625 -4.9775 8.9575 -4 9 C-4 9.33 -4 9.66 -4 10 C-5.65 10 -7.3 10 -9 10 C-9 11.32 -9 12.64 -9 14 C-11.29141286 14.05384521 -13.58318188 14.09272087 -15.875 14.125 C-17.78925781 14.15980469 -17.78925781 14.15980469 -19.7421875 14.1953125 C-23 14 -23 14 -25 12 C-23.62714844 11.92652344 -23.62714844 11.92652344 -22.2265625 11.8515625 C-21.03804687 11.77679688 -19.84953125 11.70203125 -18.625 11.625 C-17.44164062 11.55539062 -16.25828125 11.48578125 -15.0390625 11.4140625 C-11.21558774 10.89312635 -10.77046058 9.03081842 -6.875 8.875 Z " fill="#D6E3F1" transform="translate(69,245)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C1.67 2.31 1.34 4.62 1 7 C0.34 7 -0.32 7 -1 7 C-1 7.66 -1 8.32 -1 9 C-2.60875 8.938125 -2.60875 8.938125 -4.25 8.875 C-7.65747485 8.9885825 -9.20739631 9.21273364 -12 11 C-11.67 9.68 -11.34 8.36 -11 7 C-8.36 7 -5.72 7 -3 7 C-2.87625 6.21625 -2.7525 5.4325 -2.625 4.625 C-2 2 -2 2 0 0 Z " fill="#B2CBE7" transform="translate(72,249)"/>
<path d="M0 0 C1.32 0.33 2.64 0.66 4 1 C3.835 1.70125 3.67 2.4025 3.5 3.125 C2.89942288 6.03722875 2.89942288 6.03722875 3.0625 9.1875 C3 12 3 12 1 14 C0.3574765 16.06874034 0.3574765 16.06874034 0 18 C-0.99 17.67 -1.98 17.34 -3 17 C-2.625 15.0625 -2.625 15.0625 -2 13 C-1.34 12.67 -0.68 12.34 0 12 C0 8.04 0 4.08 0 0 Z " fill="#C7DBEF" transform="translate(31,231)"/>
<path d="M0 0 C0 0.33 0 0.66 0 1 C-0.92683594 0.98839844 -1.85367188 0.97679687 -2.80859375 0.96484375 C-4.60490234 0.95130859 -4.60490234 0.95130859 -6.4375 0.9375 C-8.22994141 0.92009766 -8.22994141 0.92009766 -10.05859375 0.90234375 C-12.88873341 0.66098208 -12.88873341 0.66098208 -14 2 C-15.85287502 2.07226502 -17.70833878 2.0838122 -19.5625 2.0625 C-20.57441406 2.05347656 -21.58632812 2.04445312 -22.62890625 2.03515625 C-23.41136719 2.02355469 -24.19382813 2.01195312 -25 2 C-18.6378574 -4.3621426 -7.83861267 -1.59720948 0 0 Z " fill="#5C6679" transform="translate(245,211)"/>
<path d="M0 0 C3.2542015 2.83430453 4.5206753 4.68607774 5 9 C7.97 9.495 7.97 9.495 11 10 C11.33 10.99 11.66 11.98 12 13 C8.67130062 12.67993275 5.71918648 12.30281536 2.625 11 C0.00727774 7.77818799 0.16948219 4.04215031 0 0 Z " fill="#446BA7" transform="translate(215,255)"/>
<path d="M0 0 C1.43861294 0.08746284 2.87597508 0.19565348 4.3125 0.3125 C5.11300781 0.37050781 5.91351563 0.42851562 6.73828125 0.48828125 C9.41960113 1.09493566 10.21143634 1.97095719 12 4 C12.99 4.66 13.98 5.32 15 6 C14.67 6.99 14.34 7.98 14 9 C9.65696373 8.49888043 7.19053604 5.79171904 4 3 C2.67508126 1.9888778 1.34565187 0.98336098 0 0 Z " fill="#040C14" transform="translate(241,213)"/>
<path d="M0 0 C1.53202706 0.25195908 3.05257128 0.57596777 4.5625 0.9375 C5.38878906 1.13214844 6.21507813 1.32679687 7.06640625 1.52734375 C8.02353516 1.76130859 8.02353516 1.76130859 9 2 C6.65085711 5.52371434 5.9208589 5.69304703 2 7 C-0.6875 6.0625 -0.6875 6.0625 -3 5 C-1.125 1.125 -1.125 1.125 0 0 Z " fill="#040910" transform="translate(101,65)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C9.72232891 1.30886376 16.37693767 1.23219764 23 0 C18.53642019 3.42207785 16.31308561 4.13778221 10.625 4.125 C9.48289062 4.12757812 8.34078125 4.13015625 7.1640625 4.1328125 C4.56763848 4.0238268 2.46375117 3.76461243 0 3 C0 2.01 0 1.02 0 0 Z " fill="#92B5DE" transform="translate(106,54)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C2 3.97 2 6.94 2 10 C1.34 10 0.68 10 0 10 C0.33 11.32 0.66 12.64 1 14 C-0.32 14.33 -1.64 14.66 -3 15 C-2.67 11.7 -2.34 8.4 -2 5 C-1.34 5 -0.68 5 0 5 C0 3.35 0 1.7 0 0 Z " fill="#ADC6E5" transform="translate(142,31)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C1.77065591 1.91924787 1.51565657 3.8354406 1.25 5.75 C1.11078125 6.81734375 0.9715625 7.8846875 0.828125 8.984375 C-0.11752402 12.42796484 -1.19583012 13.83314146 -4 16 C-6.25 15.75 -6.25 15.75 -8 15 C-7.505 14.54625 -7.01 14.0925 -6.5 13.625 C-4.77390663 12.12364481 -4.77390663 12.12364481 -5 10 C-4.01 10 -3.02 10 -2 10 C-2.20625 9.38125 -2.4125 8.7625 -2.625 8.125 C-2.74875 7.42375 -2.8725 6.7225 -3 6 C-2.34 5.34 -1.68 4.68 -1 4 C-0.3574765 1.93125966 -0.3574765 1.93125966 0 0 Z " fill="#82A0BF" transform="translate(259,251)"/>
<path d="M0 0 C0.68449219 0.14308594 1.36898437 0.28617188 2.07421875 0.43359375 C5.31053736 1.06011738 8.55335919 1.56869079 11.8125 2.0625 C13.55466797 2.32740234 13.55466797 2.32740234 15.33203125 2.59765625 C16.21246094 2.73042969 17.09289062 2.86320313 18 3 C15.53003576 5.46996424 14.66102667 5.32331778 11.25 5.375 C6.24282676 5.2951755 3.75325637 4.25940684 0 1 C0 0.67 0 0.34 0 0 Z " fill="#94B7DF" transform="translate(152,184)"/>
<path d="M0 0 C0.33 0.66 0.66 1.32 1 2 C1.66 2 2.32 2 3 2 C3.33 3.32 3.66 4.64 4 6 C3.34 6 2.68 6 2 6 C2 6.66 2 7.32 2 8 C1.34 8 0.68 8 0 8 C0 7.34 0 6.68 0 6 C-1.98 6.33 -3.96 6.66 -6 7 C-6.33 6.34 -6.66 5.68 -7 5 C-6.01 5 -5.02 5 -4 5 C-3.71125 4.360625 -3.4225 3.72125 -3.125 3.0625 C-2 1 -2 1 0 0 Z " fill="#1C2C49" transform="translate(227,137)"/>
<path d="M0 0 C-1.32 0.33 -2.64 0.66 -4 1 C-4 1.66 -4 2.32 -4 3 C-4.99 3 -5.98 3 -7 3 C-7.061875 3.5775 -7.12375 4.155 -7.1875 4.75 C-8.3273255 7.90643986 -10.33594629 9.03367464 -13 11 C-14.0173873 11.98230498 -15.02596117 12.97469597 -16 14 C-15.67 12.02 -15.34 10.04 -15 8 C-14.34 8 -13.68 8 -13 8 C-13 7.34 -13 6.68 -13 6 C-11.625 4.375 -11.625 4.375 -10 3 C-9.34 3 -8.68 3 -8 3 C-8 2.34 -8 1.68 -8 1 C-5.29120665 -0.35439668 -2.99066732 -0.06501451 0 0 Z " fill="#405982" transform="translate(248,115)"/>
<path d="M0 0 C3.1875 -0.3125 3.1875 -0.3125 7 0 C9.625 2.3125 9.625 2.3125 12 5 C12.928125 5.556875 13.85625 6.11375 14.8125 6.6875 C15.8953125 7.3371875 15.8953125 7.3371875 17 8 C17 8.66 17 9.32 17 10 C11.63688964 9.73624047 11.63688964 9.73624047 9 9 C7.125 6.5 7.125 6.5 6 4 C5.34 3.67 4.68 3.34 4 3 C4 2.34 4 1.68 4 1 C2.68 0.67 1.36 0.34 0 0 Z " fill="#4B71A9" transform="translate(92,50)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C0.60724746 3.3772445 -0.82273931 4.87070305 -3.9375 6.75 C-4.62714844 7.17796875 -5.31679687 7.6059375 -6.02734375 8.046875 C-8 9 -8 9 -11 9 C-11 9.66 -11 10.32 -11 11 C-13.2727675 12.49524178 -15.5679943 13.78399715 -18 15 C-16.41177373 11.45703371 -14.82989627 8.75799051 -11.1328125 7.2265625 C-10.13894531 6.92878906 -10.13894531 6.92878906 -9.125 6.625 C-5.10097629 5.24174185 -2.88916705 3.14409355 0 0 Z " fill="#AABCD3" transform="translate(102,201)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1.1690907 2.06230268 1.33517133 4.1248523 1.5 6.1875 C1.5928125 7.33605469 1.685625 8.48460937 1.78125 9.66796875 C2 13 2 13 1.90625 15.80078125 C1.76066136 18.21156098 1.76066136 18.21156098 4 20 C2.68 20 1.36 20 0 20 C-0.36590746 18.27327966 -0.71722195 16.54346345 -1.0625 14.8125 C-1.35833984 13.36810547 -1.35833984 13.36810547 -1.66015625 11.89453125 C-2.00727773 8.93801386 -1.74478297 6.86153457 -1 4 C-0.814375 3.236875 -0.62875 2.47375 -0.4375 1.6875 C-0.293125 1.130625 -0.14875 0.57375 0 0 Z " fill="#DDE9F5" transform="translate(148,153)"/>
<path d="M0 0 C1.98 0 3.96 0 6 0 C6.33 4.62 6.66 9.24 7 14 C5 12 5 12 4.875 8.375 C4.91625 7.26125 4.9575 6.1475 5 5 C2.69 5 0.38 5 -2 5 C-1.34 4.67 -0.68 4.34 0 4 C-0.33 3.01 -0.66 2.02 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#283E56" transform="translate(135,70)"/>
<path d="M0 0 C1.65869 3.31738 -0.06011424 6.58808593 -1 10 C-1.15597656 10.68835938 -1.31195313 11.37671875 -1.47265625 12.0859375 C-2.19047922 14.69136902 -3.55293097 16.73502239 -5 19 C-5.625 17.125 -5.625 17.125 -6 15 C-5.34 14.34 -4.68 13.68 -4 13 C-3.95679753 10.66706666 -3.95977609 8.3329866 -4 6 C-3.6875 3.6875 -3.6875 3.6875 -3 2 C-2.01 1.34 -1.02 0.68 0 0 Z " fill="#DDEAF6" transform="translate(37,230)"/>
<path d="M0 0 C5.37295382 2.68647691 8.03147875 4.77540259 11 10 C10.01 10.99 9.02 11.98 8 13 C5.9375 10.6875 5.9375 10.6875 4 8 C4.33 7.01 4.66 6.02 5 5 C4.01 5 3.02 5 2 5 C0 2 0 2 0 0 Z " fill="#272F3C" transform="translate(250,214)"/>
<path d="M0 0 C0.99 0.66 1.98 1.32 3 2 C2.34 3.65 1.68 5.3 1 7 C-3.87362847 6.54663921 -6.39042389 5.2910841 -10 2 C-7.36 2.33 -4.72 2.66 -2 3 C-2 2.34 -2 1.68 -2 1 C-1.34 0.67 -0.68 0.34 0 0 Z " fill="#0A1931" transform="translate(80,211)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C0.84660156 0.97066406 0.69320312 1.94132813 0.53515625 2.94140625 C-0.08209985 7.26219894 -0.33480395 11.58141318 -0.5625 15.9375 C-0.60568359 16.71673828 -0.64886719 17.49597656 -0.69335938 18.29882812 C-0.79828077 20.19907117 -0.8995245 22.09951669 -1 24 C-1.66 24 -2.32 24 -3 24 C-5.09230769 19.56923077 -5.09230769 19.56923077 -4.625 16.6875 C-4.41875 16.130625 -4.2125 15.57375 -4 15 C-3.67 15.66 -3.34 16.32 -3 17 C-3 13.37 -3 9.74 -3 6 C-2.34 6 -1.68 6 -1 6 C-0.67 4.02 -0.34 2.04 0 0 Z " fill="#071224" transform="translate(135,153)"/>
<path d="M0 0 C2.4375 0.375 2.4375 0.375 5 1 C5.33 1.66 5.66 2.32 6 3 C5.67 3.66 5.34 4.32 5 5 C6.32 5 7.64 5 9 5 C9.33 6.32 9.66 7.64 10 9 C8.72554546 8.57316368 7.45554118 8.13302798 6.1875 7.6875 C5.47980469 7.44386719 4.77210938 7.20023438 4.04296875 6.94921875 C1.85527627 5.93275742 0.59103282 4.79179406 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z " fill="#152842" transform="translate(183,139)"/>
<path d="M0 0 C0.99 0.99 1.98 1.98 3 3 C2.4375 5.3125 2.4375 5.3125 1 8 C-4.8125 11.22916667 -4.8125 11.22916667 -8.2265625 10.5703125 C-8.81179687 10.38210937 -9.39703125 10.19390625 -10 10 C-9.36191406 9.61328125 -8.72382813 9.2265625 -8.06640625 8.828125 C-7.24011719 8.30734375 -6.41382813 7.7865625 -5.5625 7.25 C-4.73878906 6.73953125 -3.91507813 6.2290625 -3.06640625 5.703125 C-0.78255407 3.8207818 -0.34485543 2.8842454 0 0 Z " fill="#192438" transform="translate(157,122)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C3.25664978 2.90600261 4 4.79604584 4 8 C4.66 8 5.32 8 6 8 C6.33 7.34 6.66 6.68 7 6 C6.44271087 9.34373475 5.64826111 12.03312999 4 15 C4 13.68 4 12.36 4 11 C3.01 10.67 2.02 10.34 1 10 C0.67 6.7 0.34 3.4 0 0 Z " fill="#1C3153" transform="translate(144,28)"/>
<path d="M0 0 C3 1 3 1 4 3 C4.99 3.33 5.98 3.66 7 4 C9.31940842 7.77977668 10.39168975 10.56084956 10 15 C8.43098663 13.0030739 7.09096237 11.20618137 6.0625 8.875 C5.14083194 6.82011614 5.14083194 6.82011614 2.9375 6.0625 C2.298125 5.711875 1.65875 5.36125 1 5 C0.25 2.375 0.25 2.375 0 0 Z " fill="#354555" transform="translate(140,18)"/>
<path d="M0 0 C5.875 1.875 5.875 1.875 7 3 C10.07604912 3.03171185 13.14015453 2.93146143 16.21484375 2.83984375 C19 3 19 3 21 5 C20.03578125 5.06058594 19.0715625 5.12117188 18.078125 5.18359375 C16.81484375 5.26738281 15.5515625 5.35117187 14.25 5.4375 C12.99703125 5.51871094 11.7440625 5.59992188 10.453125 5.68359375 C7.15437489 5.87914067 7.15437489 5.87914067 4.671875 6.66015625 C4.12015625 6.77230469 3.5684375 6.88445312 3 7 C2.34 6.34 1.68 5.68 1 5 C1.66 4.67 2.32 4.34 3 4 C2.2575 3.2884375 2.2575 3.2884375 1.5 2.5625 C0 1 0 1 0 0 Z " fill="#475565" transform="translate(219,272)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2.433125 0.928125 2.86625 1.85625 3.3125 2.8125 C4.76105525 5.92647854 4.76105525 5.92647854 6.6875 7.6875 C7.120625 8.120625 7.55375 8.55375 8 9 C8 9.99 8 10.98 8 12 C4.6885981 11.42906864 3.24945577 10.45395174 1 8 C0.34 7.67 -0.32 7.34 -1 7 C-1 6.01 -1 5.02 -1 4 C-0.34 4 0.32 4 1 4 C0.67 2.68 0.34 1.36 0 0 Z " fill="#BEDAF6" transform="translate(203,207)"/>
<path d="M0 0 C-0.48210937 0.39832031 -0.96421875 0.79664063 -1.4609375 1.20703125 C-2.09257813 1.73683594 -2.72421875 2.26664063 -3.375 2.8125 C-4.00148438 3.33457031 -4.62796875 3.85664063 -5.2734375 4.39453125 C-7.2221048 6.08225739 -7.2221048 6.08225739 -9 9 C-9.66 8.67 -10.32 8.34 -11 8 C-11 6.68 -11 5.36 -11 4 C-11.33 3.34 -11.66 2.68 -12 2 C-8.34215498 -0.11029521 -3.98761141 -1.99380571 0 0 Z " fill="#55687F" transform="translate(92,208)"/>
<path d="M0 0 C4.6835443 4.55696203 4.6835443 4.55696203 6.5625 7.1875 C8.18225085 9.22979455 9.61396464 10.01267502 12 11 C12 11.66 12 12.32 12 13 C9.6875 13.25 9.6875 13.25 7 13 C5.1875 11.1875 5.1875 11.1875 4 9 C4 8.01 4 7.02 4 6 C3.01 5.67 2.02 5.34 1 5 C0.67 3.35 0.34 1.7 0 0 Z " fill="#6D8AB1" transform="translate(201,201)"/>
<path d="M0 0 C0 1.65 0 3.3 0 5 C-0.99 4.67 -1.98 4.34 -3 4 C-3 3.01 -3 2.02 -3 1 C-3.66 1 -4.32 1 -5 1 C-5 1.99 -5 2.98 -5 4 C-6.65 3.67 -8.3 3.34 -10 3 C-9.67 3.99 -9.34 4.98 -9 6 C-9.99 6.495 -9.99 6.495 -11 7 C-11.66 6.67 -12.32 6.34 -13 6 C-12.5625 3.625 -12.5625 3.625 -11 1 C-7.44542682 -0.39763936 -3.53150845 -1.76575423 0 0 Z " fill="#4A6081" transform="translate(194,182)"/>
<path d="M0 0 C3.3 0 6.6 0 10 0 C10.33 1.32 10.66 2.64 11 4 C9.96875 3.95875 8.9375 3.9175 7.875 3.875 C4.13170373 3.99575149 1.46265453 4.64872018 -2 6 C-2.33 5.34 -2.66 4.68 -3 4 C-2.34 4 -1.68 4 -1 4 C-0.67 2.68 -0.34 1.36 0 0 Z " fill="#DDE8F2" transform="translate(254,118)"/>
<path d="M0 0 C5.73842251 -0.20413361 10.60539047 -0.27141454 16 2 C16 2.33 16 2.66 16 3 C14.06263299 3.16820551 12.12510094 3.33451095 10.1875 3.5 C8.56908203 3.63921875 8.56908203 3.63921875 6.91796875 3.78125 C4.2658681 3.98006879 1.6573658 4 -1 4 C-0.67 2.68 -0.34 1.36 0 0 Z " fill="#BFD3EC" transform="translate(248,115)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1.185625 1.2065625 1.185625 1.2065625 1.375 2.4375 C1.58125 3.283125 1.7875 4.12875 2 5 C2.66 5.33 3.32 5.66 4 6 C4.4140625 8.06640625 4.4140625 8.06640625 4.625 10.5625 C4.69976562 11.38878906 4.77453125 12.21507813 4.8515625 13.06640625 C4.90054688 13.70449219 4.94953125 14.34257813 5 15 C3.68 15 2.36 15 1 15 C1.04125 13.96875 1.0825 12.9375 1.125 11.875 C1.00391651 8.12141188 0.22316884 5.50641733 -1 2 C-0.67 1.34 -0.34 0.68 0 0 Z " fill="#F0F7FB" transform="translate(147,111)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3.37952295 7.19887485 2.8352113 11.4477112 0 17 C-0.33 17 -0.66 17 -1 17 C-0.67 11.39 -0.34 5.78 0 0 Z " fill="#4A6C99" transform="translate(145,38)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C4 7.625 4 7.625 4 11 C4.66 11.66 5.32 12.32 6 13 C5.01 13.33 4.02 13.66 3 14 C0.56574762 9.03006806 -0.34615998 5.65394631 0 0 Z " fill="#24324F" transform="translate(204,247)"/>
<path d="M0 0 C0.99 0 1.98 0 3 0 C2.6875 1.9375 2.6875 1.9375 2 4 C1.01 4.33 0.02 4.66 -1 5 C-0.67 7.31 -0.34 9.62 0 12 C-1.32 11.67 -2.64 11.34 -4 11 C-4.80967438 8.08517222 -5.21845993 6.53886783 -4.0625 3.6875 C-3.711875 3.130625 -3.36125 2.57375 -3 2 C-2.01 2 -1.02 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#C7DDF4" transform="translate(216,222)"/>
<path d="M0 0 C2.98047995 0.41588092 5.64509232 0.85439685 8.4375 2 C11.59272521 3.2313074 14.64735955 3.60557171 18 4 C18 4.33 18 4.66 18 5 C4.3667426 5.3690205 4.3667426 5.3690205 -2 3 C-1.34 2.01 -0.68 1.02 0 0 Z " fill="#646B7C" transform="translate(152,199)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C-3 4 -3 4 -6 4 C-6 4.66 -6 5.32 -6 6 C-11.77807024 6.2358396 -16.51324804 5.86783046 -22 4 C-18.24600202 2.7960663 -14.66782588 2.90122383 -10.75 2.9375 C-8.85507813 2.95103516 -8.85507813 2.95103516 -6.921875 2.96484375 C-5.95765625 2.97644531 -4.9934375 2.98804688 -4 3 C-4 2.34 -4 1.68 -4 1 C-2 0 -2 0 0 0 Z " fill="#162A49" transform="translate(175,191)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.65 2 3.3 2 5 C1.46375 4.83242187 0.9275 4.66484375 0.375 4.4921875 C-3.44438134 3.70067097 -7.24492811 4.09290944 -11.125 4.2578125 C-14.36526641 3.96724513 -15.63790462 3.1690395 -18 1 C-15.72923158 0.97300275 -13.45837179 0.95360547 -11.1875 0.9375 C-9.92292969 0.92589844 -8.65835937 0.91429687 -7.35546875 0.90234375 C-4 1 -4 1 -1 2 C-0.67 1.34 -0.34 0.68 0 0 Z " fill="#D1E1F0" transform="translate(266,152)"/>
<path d="M0 0 C1.75070517 0.11470137 3.50057536 0.24219028 5.25 0.375 C6.22453125 0.44460937 7.1990625 0.51421875 8.203125 0.5859375 C10.95948857 0.9940025 12.67619642 1.4915661 15 3 C17.25 6.125 17.25 6.125 19 9 C18.67 9.66 18.34 10.32 18 11 C12.18490566 6.4490566 12.18490566 6.4490566 11.125 3.875 C10.14217132 1.73879328 10.14217132 1.73879328 7.6171875 1.390625 C6.25980469 1.32101563 6.25980469 1.32101563 4.875 1.25 C3.96492188 1.19328125 3.05484375 1.1365625 2.1171875 1.078125 C1.41851562 1.05234375 0.71984375 1.0265625 0 1 C0 0.67 0 0.34 0 0 Z " fill="#496691" transform="translate(54,215)"/>
<path d="M0 0 C2.69082872 0.17635452 5.32851446 0.61835921 8 1 C8 1.66 8 2.32 8 3 C8.66 3 9.32 3 10 3 C10 4.32 10 5.64 10 7 C9.01 7 8.02 7 7 7 C7 6.34 7 5.68 7 5 C6.05125 4.71125 5.1025 4.4225 4.125 4.125 C1 3 1 3 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#0F223F" transform="translate(229,156)"/>
<path d="M0 0 C-2.42182607 3.6327391 -3.50445117 3.68131947 -7.625 4.6875 C-8.62789062 4.93886719 -9.63078125 5.19023437 -10.6640625 5.44921875 C-11.43492187 5.63097656 -12.20578125 5.81273437 -13 6 C-13.99 5.01 -14.98 4.02 -16 3 C-15.67 2.34 -15.34 1.68 -15 1 C-14.278125 1.20625 -13.55625 1.4125 -12.8125 1.625 C-8.30811462 2.22558472 -4.70276262 -0.26872929 0 0 Z " fill="#5D6978" transform="translate(218,158)"/>
<path d="M0 0 C0 0.99 0 1.98 0 3 C3.3 3 6.6 3 10 3 C10 3.33 10 3.66 10 4 C3.07 4 -3.86 4 -11 4 C-10 2 -10 2 -7.1875 0.875 C-4 0 -4 0 0 0 Z " fill="#091120" transform="translate(248,109)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3.94921875 3.06640625 3.94921875 3.06640625 4.6875 5.5625 C4.93886719 6.38878906 5.19023437 7.21507813 5.44921875 8.06640625 C5.63097656 8.70449219 5.81273437 9.34257813 6 10 C5.34 10 4.68 10 4 10 C4.33 11.32 4.66 12.64 5 14 C2.25445276 11.62884556 1.04882814 9.46920075 0 6 C-0.125 2.6875 -0.125 2.6875 0 0 Z " fill="#8999A2" transform="translate(146,99)"/>
<path d="M0 0 C4.78908556 1.59636185 6.6914169 5.66792991 9 10 C9.69323868 12.44855456 9.89102326 14.43904668 10 17 C6.632589 14.10028497 5.97850464 11.1352135 4.84375 6.9609375 C4.5653125 6.31382813 4.286875 5.66671875 4 5 C3.01 4.67 2.02 4.34 1 4 C0.3125 1.9375 0.3125 1.9375 0 0 Z " fill="#142640" transform="translate(124,84)"/>
<path d="M0 0 C0 3.78713193 -1.26892594 5.83354401 -3 9.1875 C-3.556875 10.27417969 -4.11375 11.36085938 -4.6875 12.48046875 C-5.120625 13.31191406 -5.55375 14.14335937 -6 15 C-6.99 14.67 -7.98 14.34 -9 14 C-7.64002446 7.95566426 -4.14348206 4.36505864 0 0 Z " fill="#626975" transform="translate(94,15)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1.08144943 2.70894767 1.14070614 5.41541263 1.1875 8.125 C1.22520508 9.26582031 1.22520508 9.26582031 1.26367188 10.4296875 C1.32797453 15.4024261 0.65594442 18.63616482 -2 23 C-2.33 23 -2.66 23 -3 23 C-2.85892253 21.54119891 -2.71197585 20.08296449 -2.5625 18.625 C-2.48128906 17.81289063 -2.40007812 17.00078125 -2.31640625 16.1640625 C-2 14 -2 14 -1 12 C-0.77141886 9.9625237 -0.58975722 7.91959697 -0.4375 5.875 C-0.35371094 4.77929688 -0.26992188 3.68359375 -0.18359375 2.5546875 C-0.12300781 1.71164063 -0.06242187 0.86859375 0 0 Z " fill="#718EB5" transform="translate(262,239)"/>
<path d="M0 0 C3 1 3 1 4.16796875 2.7421875 C4.50441406 3.44601563 4.84085938 4.14984375 5.1875 4.875 C5.53167969 5.57367188 5.87585938 6.27234375 6.23046875 6.9921875 C7 9 7 9 7 12 C6.34 12 5.68 12 5 12 C5 11.34 5 10.68 5 10 C4.01 10 3.02 10 2 10 C0.68373308 6.38026598 0 3.90432869 0 0 Z " fill="#0D1629" transform="translate(206,244)"/>
<path d="M0 0 C5.50366792 -0.32374517 9.43672206 -0.53286034 14 3 C13.34 3.66 12.68 4.32 12 5 C9.27130593 4.96712417 6.7033382 4.43602229 4 4 C4 3.34 4 2.68 4 2 C2.68 1.34 1.36 0.68 0 0 Z " fill="#677DA6" transform="translate(238,218)"/>
<path d="M0 0 C2.97 0.33 5.94 0.66 9 1 C9 1.33 9 1.66 9 2 C8.21496094 2.17015625 7.42992188 2.3403125 6.62109375 2.515625 C0.40756532 3.94892972 -4.66722086 5.48521375 -10 9 C-9.78515625 7.109375 -9.78515625 7.109375 -9 5 C-6.93359375 3.953125 -6.93359375 3.953125 -4.4375 3.25 C-3.61121094 3.00765625 -2.78492188 2.7653125 -1.93359375 2.515625 C-0.97646484 2.26039063 -0.97646484 2.26039063 0 2 C0 1.34 0 0.68 0 0 Z " fill="#2A3C54" transform="translate(45,213)"/>
<path d="M0 0 C0.33 1.32 0.66 2.64 1 4 C0.34 4 -0.32 4 -1 4 C-1 6.97 -1 9.94 -1 13 C-3.15732809 10.84267191 -3.48294825 9.88177557 -4.1875 7 C-4.36667969 6.29875 -4.54585938 5.5975 -4.73046875 4.875 C-5 3 -5 3 -4 1 C-1.9375 0.375 -1.9375 0.375 0 0 Z " fill="#7DA2CC" transform="translate(132,78)"/>
<path d="M0 0 C0.99 0 1.98 0 3 0 C3 3.3 3 6.6 3 10 C2.01 9.01 1.02 8.02 0 7 C-0.99 7.33 -1.98 7.66 -3 8 C-1.125 1.125 -1.125 1.125 0 0 Z " fill="#C0D1E0" transform="translate(95,26)"/>
<path d="M0 0 C3.35435922 1.38801071 5.11290303 2.88629 7 6 C7 6.99 7 7.98 7 9 C3.2273236 8.46104623 1.31787009 7.00464642 -1 4 C-0.75 1.75 -0.75 1.75 0 0 Z " fill="#0B0F1C" transform="translate(274,118)"/>
<path d="M0 0 C0.99580078 0.24556641 0.99580078 0.24556641 2.01171875 0.49609375 C5.62883337 1.10603857 9.15860708 1.10795513 12.8125 1.0625 C13.50537109 1.05798828 14.19824219 1.05347656 14.91210938 1.04882812 C16.60811068 1.03713156 18.30406703 1.01919924 20 1 C18.68 1.33 17.36 1.66 16 2 C16 2.66 16 3.32 16 4 C5.1005291 4.38095238 5.1005291 4.38095238 1 2 C0.67 1.34 0.34 0.68 0 0 Z " fill="#A0C0E4" transform="translate(40,259)"/>
<path d="M0 0 C0.99 0 1.98 0 3 0 C4.52448631 2.9826906 5.93940067 5.818202 7 9 C9.50447516 10.21869929 9.50447516 10.21869929 12 11 C12 11.66 12 12.32 12 13 C9.25 13 9.25 13 6 12 C4.66057775 10.0080387 3.76365632 8.03354185 2.859375 5.8125 C2.13936052 3.81276775 2.13936052 3.81276775 0 3 C0 2.01 0 1.02 0 0 Z " fill="#769CCB" transform="translate(214,252)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3.05386629 3.12472576 3.09273071 5.24983652 3.125 7.375 C3.14820312 8.55835938 3.17140625 9.74171875 3.1953125 10.9609375 C3 14 3 14 1 16 C1 12.7 1 9.4 1 6 C0.34 6 -0.32 6 -1 6 C-0.67 4.02 -0.34 2.04 0 0 Z " fill="#0F192E" transform="translate(83,236)"/>
<path d="M0 0 C1.98 0.66 3.96 1.32 6 2 C6 2.99 6 3.98 6 5 C5.34 5 4.68 5 4 5 C4.33 7.31 4.66 9.62 5 12 C1.89991379 9.46356583 1.0325325 6.81242771 0 3 C0 2.01 0 1.02 0 0 Z " fill="#8999B2" transform="translate(72,215)"/>
<path d="M0 0 C1.32 0.33 2.64 0.66 4 1 C2.49760034 4.61941735 1.17854707 7.7321794 -1 11 C-1.66 11 -2.32 11 -3 11 C-3.33 10.01 -3.66 9.02 -4 8 C-3.34 7.67 -2.68 7.34 -2 7 C-1.26924352 4.6859378 -0.59861742 2.35171131 0 0 Z " fill="#C5D2E5" transform="translate(191,169)"/>
<path d="M0 0 C1.67542976 0.28604898 3.34385343 0.61781233 5 1 C1.28115866 4.71884134 -4.43114905 4.05539879 -9.4375 4.0625 C-10.95839326 4.04663375 -12.4792733 4.02753831 -14 4 C-11.41331224 1.41331224 -10.03108979 1.65770694 -6.4375 1.4375 C-2.90583192 1.50202788 -2.90583192 1.50202788 0 0 Z " fill="#6C91C1" transform="translate(246,264)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2 0.66 2 1.32 2 2 C2.99 2 3.98 2 5 2 C5.268125 2.78375 5.53625 3.5675 5.8125 4.375 C6.84814432 7.28114923 6.84814432 7.28114923 10 9 C9.1875 12.4375 9.1875 12.4375 8 16 C7.01 16.33 6.02 16.66 5 17 C5.433125 15.2675 5.433125 15.2675 5.875 13.5 C6.27568816 10.58070058 6.18281554 9.32794295 4.73046875 6.72265625 C3.21206988 4.75620525 1.61968088 2.88258561 0 1 C0 0.67 0 0.34 0 0 Z " fill="#8091A6" transform="translate(196,215)"/>
<path d="M0 0 C4.455 0.99 4.455 0.99 9 2 C7 4 7 4 4.57421875 4.16015625 C3.62160156 4.12792969 2.66898438 4.09570312 1.6875 4.0625 C-2.06483923 3.94475948 -5.33935886 4.13984935 -9 5 C-8.67 4.34 -8.34 3.68 -8 3 C-5.35139573 2.40644386 -2.70802678 2.25790731 0 2 C0 1.34 0 0.68 0 0 Z " fill="#33476A" transform="translate(232,214)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3 1.66 3 2.32 3 3 C4.32 3.33 5.64 3.66 7 4 C7 4.66 7 5.32 7 6 C8.65 6.33 10.3 6.66 12 7 C12 7.66 12 8.32 12 9 C8.45124947 9.19715281 5.90442032 9.17831524 3 7 C2.25 4.375 2.25 4.375 2 2 C1.34 2 0.68 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#4C75AE" transform="translate(145,182)"/>
<path d="M0 0 C-4.2827388 2.8551592 -7.14458058 3.11672494 -12.1875 3.0625 C-13.81751953 3.04896484 -13.81751953 3.04896484 -15.48046875 3.03515625 C-16.31191406 3.02355469 -17.14335938 3.01195312 -18 3 C-18 2.34 -18 1.68 -18 1 C-11.96445452 0.30739642 -6.07593562 -0.11251733 0 0 Z " fill="#AECCE8" transform="translate(128,53)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.67 2.65 1.34 4.3 1 6 C-3.455 7.485 -3.455 7.485 -8 9 C-6.90101298 5.70303895 -6.05402613 4.95329411 -3.4375 2.8125 C-2.79683594 2.28269531 -2.15617187 1.75289062 -1.49609375 1.20703125 C-0.75552734 0.60955078 -0.75552734 0.60955078 0 0 Z " fill="#AFC0D7" transform="translate(102,18)"/>
<path d="M0 0 C0.99 0.495 0.99 0.495 2 1 C2.40729228 3.32156597 2.74438677 5.6568787 3 8 C3.66 8 4.32 8 5 8 C6.48320272 11.83887763 7.22419163 14.06204091 6 18 C2.63438409 11.9394075 0.38669459 6.96050253 0 0 Z " fill="#AEBED7" transform="translate(138,108)"/>
<path d="M0 0 C3.36016893 1.12005631 4.69064913 2.37211797 7 5 C7 5.66 7 6.32 7 7 C7.66 7 8.32 7 9 7 C9.33 8.32 9.66 9.64 10 11 C8 10 6 9 4 8 C4 7.34 4 6.68 4 6 C3.34 6 2.68 6 2 6 C1.34 4.02 0.68 2.04 0 0 Z " fill="#315482" transform="translate(138,177)"/>
<path d="M0 0 C-1.1446875 0.6496875 -1.1446875 0.6496875 -2.3125 1.3125 C-4.96380508 2.82665516 -4.96380508 2.82665516 -6.625 4.6875 C-8 6 -8 6 -11 6 C-10.67 4.35 -10.34 2.7 -10 1 C-3.375 -1.125 -3.375 -1.125 0 0 Z " fill="#B9C8E3" transform="translate(110,210)"/>
<path d="M0 0 C3.01657791 0.14030595 5.23841273 0.29351465 7.51171875 2.40234375 C8.73256066 3.88904235 9.87246522 5.44134898 11 7 C7.7 6.67 4.4 6.34 1 6 C1.66 5.34 2.32 4.68 3 4 C2.01 2.68 1.02 1.36 0 0 Z " fill="#9BA5B4" transform="translate(136,193)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1 1.65 1 3.3 1 5 C1.99 5 2.98 5 4 5 C3.49287967 8.71888239 2.88391785 11.73454239 1 15 C-0.09506492 11.71480525 -0.09960608 9.26336585 -0.0625 5.8125 C-0.05347656 4.72582031 -0.04445312 3.63914063 -0.03515625 2.51953125 C-0.02355469 1.68808594 -0.01195312 0.85664063 0 0 Z " fill="#47689C" transform="translate(135,161)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2 0.66 2 1.32 2 2 C6.59180605 3.86154299 10.20372009 5.12722441 15.1875 5.0625 C16.08855469 5.05347656 16.98960937 5.04445312 17.91796875 5.03515625 C18.94857422 5.01775391 18.94857422 5.01775391 20 5 C19.67 5.66 19.34 6.32 19 7 C11.64825194 7.55253221 6.488417 6.51064108 0 3 C0 2.01 0 1.02 0 0 Z " fill="#6892C6" transform="translate(240,155)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C2 1.66 2 2.32 2 3 C2.66 3.33 3.32 3.66 4 4 C-0.29 3.67 -4.58 3.34 -9 3 C-4.57142857 -1.42857143 -4.57142857 -1.42857143 0 0 Z " fill="#97B6D4" transform="translate(167,138)"/>
<path d="M0 0 C1.5625 1.75 1.5625 1.75 3 4 C2.6875 6.25 2.6875 6.25 2 8 C1.01 8 0.02 8 -1 8 C-1.33 8.66 -1.66 9.32 -2 10 C-3.01136941 7.26930259 -3.04557718 6.13998707 -2.125 3.3125 C-1 1 -1 1 0 0 Z " fill="#C1D4EB" transform="translate(233,133)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1.0825 0.78375 1.165 1.5675 1.25 2.375 C1.72323153 5.12283152 1.72323153 5.12283152 3.9375 6.25 C4.618125 6.4975 5.29875 6.745 6 7 C6.66 7.33 7.32 7.66 8 8 C8 8.99 8 9.98 8 11 C2.25 9.125 2.25 9.125 0 8 C0 5.36 0 2.72 0 0 Z " fill="#1F3658" transform="translate(214,259)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2.66 2.31 3.32 4.62 4 7 C4.66 7 5.32 7 6 7 C6 7.99 6 8.98 6 10 C5.34 10 4.68 10 4 10 C3.67 10.66 3.34 11.32 3 12 C-0.42857143 4.71428571 -0.42857143 4.71428571 0 0 Z " fill="#5F7EA6" transform="translate(206,236)"/>
<path d="M0 0 C1.32 0 2.64 0 4 0 C4.08114106 1.77007714 4.13925505 3.54122098 4.1875 5.3125 C4.22230469 6.29863281 4.25710937 7.28476563 4.29296875 8.30078125 C4 11 4 11 2.48828125 12.85546875 C1.99714844 13.23316406 1.50601563 13.61085937 1 14 C1.01160156 13.15695313 1.02320312 12.31390625 1.03515625 11.4453125 C1.04417969 10.34960938 1.05320312 9.25390625 1.0625 8.125 C1.07410156 7.03445312 1.08570312 5.94390625 1.09765625 4.8203125 C1.19744303 2.04822454 1.19744303 2.04822454 0 0 Z " fill="#CCDDF3" transform="translate(66,226)"/>
<path d="M0 0 C3.82524236 1.450954 5.19090966 3.38181932 7 7 C7 7.66 7 8.32 7 9 C7.66 9 8.32 9 9 9 C8.67 10.32 8.34 11.64 8 13 C6 12 6 12 4.5625 8.625 C3.20413994 5.47360467 2.42457604 4.19366404 0 2 C0 1.34 0 0.68 0 0 Z " fill="#6E87A9" transform="translate(252,222)"/>
<path d="M0 0 C2.8125 0.125 2.8125 0.125 6 1 C7.875 4.0625 7.875 4.0625 9 7 C7.68 7 6.36 7 5 7 C5 6.34 5 5.68 5 5 C4.360625 4.731875 3.72125 4.46375 3.0625 4.1875 C1 3 1 3 0 0 Z " fill="#D3E5F9" transform="translate(248,225)"/>
<path d="M0 0 C-3.79692186 2.82561627 -6.18569279 4.56638908 -11 4 C-10.67 2.68 -10.34 1.36 -10 0 C-2.25 -1.125 -2.25 -1.125 0 0 Z " fill="#AFC8E3" transform="translate(97,219)"/>
<path d="M0 0 C1.32 0 2.64 0 4 0 C4 0.66 4 1.32 4 2 C3.34 2 2.68 2 2 2 C1.67 2.99 1.34 3.98 1 5 C0.67 4.34 0.34 3.68 0 3 C-0.66 3 -1.32 3 -2 3 C-2 3.66 -2 4.32 -2 5 C-3.8125 6.0625 -3.8125 6.0625 -6 7 C-6.99 6.67 -7.98 6.34 -9 6 C-8.34 5.01 -7.68 4.02 -7 3 C-3.375 2.3125 -3.375 2.3125 0 2 C0 1.34 0 0.68 0 0 Z " fill="#CFDCEA" transform="translate(119,191)"/>
<path d="M0 0 C1.32 0.66 2.64 1.32 4 2 C-1.75 6 -1.75 6 -4 6 C-4 5.01 -4 4.02 -4 3 C-6.64 3 -9.28 3 -12 3 C-12 2.67 -12 2.34 -12 2 C-8.04 2 -4.08 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#343F53" transform="translate(271,165)"/>
<path d="M0 0 C1.32 0.33 2.64 0.66 4 1 C4 2.65 4 4.3 4 6 C-0.21912747 5.5205537 -2.79663178 4.83374881 -6 2 C-4.02 2 -2.04 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#444852" transform="translate(105,69)"/>
<path d="M0 0 C0.99 0 1.98 0 3 0 C3.33 0.99 3.66 1.98 4 3 C2.35 3.33 0.7 3.66 -1 4 C-1.33 4.99 -1.66 5.98 -2 7 C-5.0625 8.1875 -5.0625 8.1875 -8 9 C-7.67 7.68 -7.34 6.36 -7 5 C-6.01 5 -5.02 5 -4 5 C-4 4.01 -4 3.02 -4 2 C-2.68 2 -1.36 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#B8CFE9" transform="translate(137,46)"/>
<path d="M0 0 C2.97 0.495 2.97 0.495 6 1 C4.68 2.32 3.36 3.64 2 5 C1.67 4.34 1.34 3.68 1 3 C0.34 3.66 -0.32 4.32 -1 5 C-2.98821313 5.39764263 -4.98944339 5.73775349 -7 6 C-7 5.34 -7 4.68 -7 4 C-5.125 2.9375 -5.125 2.9375 -3 2 C-2.34 2.33 -1.68 2.66 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z " fill="#D8E4EE" transform="translate(126,46)"/>
<path d="M0 0 C1.50156874 3.00313748 1.09281204 5.79067522 1.0625 9.125 C1.05347656 10.40632813 1.04445313 11.68765625 1.03515625 13.0078125 C1.02355469 13.99523438 1.01195313 14.98265625 1 16 C0.67 16 0.34 16 0 16 C-0.12375 15.236875 -0.2475 14.47375 -0.375 13.6875 C-0.88102792 10.79732864 -0.88102792 10.79732864 -3 8 C-2.65358161 4.53581611 -1.96713413 2.95070119 0 0 Z " fill="#E4EEF7" transform="translate(102,24)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1.33 5.61 1.66 11.22 2 17 C0.68 16.34 -0.64 15.68 -2 15 C-1.34 10.05 -0.68 5.1 0 0 Z " fill="#070D1C" transform="translate(23,238)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3 4.96 3 8.92 3 13 C2.67 12.34 2.34 11.68 2 11 C1.34 11 0.68 11 0 11 C0 7.37 0 3.74 0 0 Z " fill="#A2BEE2" transform="translate(259,235)"/>
<path d="M0 0 C1.32 0.33 2.64 0.66 4 1 C1.7991151 3.47859908 -0.06372969 4.61210366 -3.1875 5.6875 C-3.90292969 5.93886719 -4.61835937 6.19023437 -5.35546875 6.44921875 C-5.89816406 6.63097656 -6.44085938 6.81273437 -7 7 C-7.33 6.01 -7.66 5.02 -8 4 C-4.91190305 2.23537317 -3.76687864 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#C0D2EE" transform="translate(122,198)"/>
<path d="M0 0 C0.33 2.31 0.66 4.62 1 7 C0.34 7 -0.32 7 -1 7 C-1 7.66 -1 8.32 -1 9 C-2.32 8.67 -3.64 8.34 -5 8 C-4.67 7.67 -4.34 7.34 -4 7 C-3.95919217 5.00041636 -3.95745644 2.99954746 -4 1 C-2 0 -2 0 0 0 Z " fill="#D3E4F8" transform="translate(127,189)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.67 2.65 1.34 4.3 1 6 C0.34 6 -0.32 6 -1 6 C-1 6.66 -1 7.32 -1 8 C-0.01 8.33 0.98 8.66 2 9 C1.01 9 0.02 9 -1 9 C-1.33 9.99 -1.66 10.98 -2 12 C-2.33 8.7 -2.66 5.4 -3 2 C-2.01 1.34 -1.02 0.68 0 0 Z " fill="#1B2A42" transform="translate(137,177)"/>
<path d="M0 0 C0.99 0 1.98 0 3 0 C1.64978174 4.41889613 -0.26115668 6.34345343 -4 9 C-4.66 7.68 -5.32 6.36 -6 5 C-5.195625 4.54625 -4.39125 4.0925 -3.5625 3.625 C-0.91143428 2.25274335 -0.91143428 2.25274335 0 0 Z " fill="#393E48" transform="translate(279,157)"/>
<path d="M0 0 C1.98 1.32 3.96 2.64 6 4 C3.8128711 5.32789969 2.52279544 6.04752686 -0.0625 5.8125 C-2.25755282 4.89199398 -3.44866281 3.78403777 -5 2 C-3.35 2 -1.7 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#99ADC4" transform="translate(181,141)"/>
<path d="M0 0 C6.625 -0.25 6.625 -0.25 10 2 C9.67 2.66 9.34 3.32 9 4 C6.0625 4.75 6.0625 4.75 3 5 C2.34 4.34 1.68 3.68 1 3 C1.66 3 2.32 3 3 3 C3 2.34 3 1.68 3 1 C2.01 0.67 1.02 0.34 0 0 Z " fill="#4D6178" transform="translate(170,132)"/>
<path d="M0 0 C5.28 0 10.56 0 16 0 C15.34 0.66 14.68 1.32 14 2 C12.68 2 11.36 2 10 2 C10 2.66 10 3.32 10 4 C6.7 3.01 3.4 2.02 0 1 C0 0.67 0 0.34 0 0 Z " fill="#969EAB" transform="translate(109,75)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C2.52433594 1.84304687 2.52433594 1.84304687 2.0390625 2.703125 C0.93125475 5.15196317 0.61024601 7.08387855 0.375 9.75 C0.30023438 10.54921875 0.22546875 11.3484375 0.1484375 12.171875 C0.09945312 12.77515625 0.05046875 13.3784375 0 14 C-0.33 14 -0.66 14 -1 14 C-1.33 11.69 -1.66 9.38 -2 7 C-2.99 7 -3.98 7 -5 7 C-5 5 -5 5 -2.5 2.375 C-1.675 1.59125 -0.85 0.8075 0 0 Z " fill="#9FACBA" transform="translate(142,64)"/>
<path d="M0 0 C1.9375 0.5625 1.9375 0.5625 4 2 C4.91214879 5.85909105 5.26132231 8.21603308 4 12 C3.01 11.67 2.02 11.34 1 11 C1.309375 9.824375 1.309375 9.824375 1.625 8.625 C1.74875 7.75875 1.8725 6.8925 2 6 C1.34 5.34 0.68 4.68 0 4 C0 2.68 0 1.36 0 0 Z " fill="#232C41" transform="translate(85,29)"/>
<path d="M0 0 C1.98 0.66 3.96 1.32 6 2 C6 4.97 6 7.94 6 11 C2.1334716 7.777893 1.11940982 4.85077588 0 0 Z " fill="#4E4E56" transform="translate(21,253)"/>
<path d="M0 0 C0.66 0.66 1.32 1.32 2 2 C-0.34112451 3.44977894 -1.5796929 4.04314411 -4.359375 3.7578125 C-5.14828125 3.54898438 -5.9371875 3.34015625 -6.75 3.125 C-7.54921875 2.92132813 -8.3484375 2.71765625 -9.171875 2.5078125 C-10.07679688 2.25644531 -10.07679688 2.25644531 -11 2 C-6.93150591 -0.71232939 -4.83523216 -0.30699887 0 0 Z " fill="#C2D8EB" transform="translate(230,220)"/>
<path d="M0 0 C2.375 0.25 2.375 0.25 5 1 C6.3125 3.0625 6.3125 3.0625 7 5 C7.66 5 8.32 5 9 5 C9.66 6.65 10.32 8.3 11 10 C10.34 10.66 9.68 11.32 9 12 C5 5.25 5 5.25 5 3 C2.525 2.01 2.525 2.01 0 1 C0 0.67 0 0.34 0 0 Z " fill="#263E68" transform="translate(64,215)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C0.66 2 1.32 2 2 2 C2.33 1.34 2.66 0.68 3 0 C3.33 2.31 3.66 4.62 4 7 C3.34 6.01 2.68 5.02 2 4 C0.68 4 -0.64 4 -2 4 C-2 5.65 -2 7.3 -2 9 C-2.33 9 -2.66 9 -3 9 C-3.66 6.36 -4.32 3.72 -5 1 C-2 0 -2 0 0 0 Z " fill="#53667F" transform="translate(227,143)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2.33 0.33 2.66 0.66 3 1 C3 0.67 3 0.34 3 0 C6.14624993 -0.26218749 7.61837017 -0.24754367 10.3125 1.5 C11.1478125 2.2425 11.1478125 2.2425 12 3 C10.68 3 9.36 3 8 3 C8 3.66 8 4.32 8 5 C7.34 5 6.68 5 6 5 C6 4.34 6 3.68 6 3 C4.35 3.33 2.7 3.66 1 4 C0.67 2.68 0.34 1.36 0 0 Z " fill="#CADDF0" transform="translate(245,117)"/>
<path d="M0 0 C0.33 0.99 0.66 1.98 1 3 C6.94 2.505 6.94 2.505 13 2 C13 2.33 13 2.66 13 3 C7.42932723 4.59162079 2.78898419 5.20674944 -3 5 C-2.34 4.67 -1.68 4.34 -1 4 C-0.34786708 1.97536745 -0.34786708 1.97536745 0 0 Z " fill="#13274A" transform="translate(219,213)"/>
<path d="M0 0 C0.33 0.99 0.66 1.98 1 3 C-0.11375 2.979375 -1.2275 2.95875 -2.375 2.9375 C-5.83215921 2.73619282 -5.83215921 2.73619282 -8 4 C-7.625 2.0625 -7.625 2.0625 -7 0 C-4.3333581 -1.33332095 -2.83319697 -0.67102033 0 0 Z " fill="#7988A1" transform="translate(195,192)"/>
<path d="M0 0 C0.95465783 2.16967689 1.14401212 3.56328793 0.3984375 5.82421875 C-0.35870385 7.5684743 -1.17609198 9.28627131 -2 11 C-3.20628008 8.66785852 -4.1654738 6.50357861 -5 4 C-4.34 3.01 -3.68 2.02 -3 1 C-3 1.99 -3 2.98 -3 4 C-2.34 3.67 -1.68 3.34 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z " fill="#545D68" transform="translate(285,146)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1.66 4.95 2.32 9.9 3 15 C1.68 15.33 0.36 15.66 -1 16 C-0.67 10.72 -0.34 5.44 0 0 Z " fill="#ABB9C4" transform="translate(138,126)"/>
<path d="M0 0 C0.33 0.66 0.66 1.32 1 2 C1.66 2.33 2.32 2.66 3 3 C-0.13498292 4.85776765 -2.37471432 5.20140476 -6 5 C-5.625 3.0625 -5.625 3.0625 -5 1 C-3 0 -3 0 0 0 Z " fill="#DCEAF6" transform="translate(148,135)"/>
<path d="M0 0 C2.64 0.33 5.28 0.66 8 1 C6.55609075 4.80666984 4.65047197 6.26602582 1 8 C0.34 7.67 -0.32 7.34 -1 7 C-0.34 6.34 0.32 5.68 1 5 C0.67958603 2.39719432 0.67958603 2.39719432 0 0 Z " fill="#748AA9" transform="translate(167,130)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C-3.40652872 5.20614467 -6.51400257 6.74809374 -11 8 C-10.04578192 6.85073734 -9.08647955 5.70569459 -8.125 4.5625 C-7.59132812 3.92441406 -7.05765625 3.28632812 -6.5078125 2.62890625 C-4.27268848 0.21427745 -3.3395179 0 0 0 Z " fill="#E0E8F2" transform="translate(251,120)"/>
<path d="M0 0 C3.03334628 2.446247 3.94350088 3.76593221 4.875 7.625 C4.91625 8.73875 4.9575 9.8525 5 11 C4.34 11.66 3.68 12.32 3 13 C1.32889958 10.03821227 0.67317248 7.62928808 0.375 4.25 C0.30023438 3.45078125 0.22546875 2.6515625 0.1484375 1.828125 C0.09945312 1.22484375 0.05046875 0.6215625 0 0 Z " fill="#F4FAFE" transform="translate(139,92)"/>
<path d="M0 0 C0.66 0.99 1.32 1.98 2 3 C-0.97 2.505 -0.97 2.505 -4 2 C-3.34 2.66 -2.68 3.32 -2 4 C-3.65 3.67 -5.3 3.34 -7 3 C-7 2.34 -7 1.68 -7 1 C-7.99 0.67 -8.98 0.34 -10 0 C-6.23918426 -1.25360525 -3.84551868 -0.83902226 0 0 Z " fill="#A4B7D0" transform="translate(130,14)"/>
<path d="M0 0 C1.32 0 2.64 0 4 0 C2.75023244 3.65316671 2.32901247 4.78065836 -1 7 C-1.99 6.67 -2.98 6.34 -4 6 C-3.34 6 -2.68 6 -2 6 C-1.855625 5.195625 -1.71125 4.39125 -1.5625 3.5625 C-1 1 -1 1 0 0 Z " fill="#3B3E41" transform="translate(70,266)"/>
<path d="M0 0 C2.58926331 2.58926331 2.37398043 4.02705279 2.625 7.625 C2.69976562 8.62789062 2.77453125 9.63078125 2.8515625 10.6640625 C2.90054688 11.43492187 2.94953125 12.20578125 3 13 C2.34 13 1.68 13 1 13 C-0.9078584 9.8250906 -1.1609041 7.89414789 -0.625 4.25 C-0.51414063 3.45078125 -0.40328125 2.6515625 -0.2890625 1.828125 C-0.19367188 1.22484375 -0.09828125 0.6215625 0 0 Z " fill="#7FA2CA" transform="translate(209,230)"/>
<path d="M0 0 C6.47556391 0.61090226 6.47556391 0.61090226 8.9375 2.4375 C10 4 10 4 10 6 C8.68 6 7.36 6 6 6 C6 4.68 6 3.36 6 2 C4.02 2.33 2.04 2.66 0 3 C0 2.01 0 1.02 0 0 Z " fill="#9CBBDF" transform="translate(60,220)"/>
<path d="M0 0 C-0.9590625 0.1546875 -0.9590625 0.1546875 -1.9375 0.3125 C-2.618125 0.539375 -3.29875 0.76625 -4 1 C-4.33 1.99 -4.66 2.98 -5 4 C-6.33333333 4.33333333 -7.66666667 4.66666667 -9 5 C-9.33 5.99 -9.66 6.98 -10 8 C-9.67 5.69 -9.34 3.38 -9 1 C-5.8035914 -0.06546953 -3.34252724 -0.07427838 0 0 Z " fill="#496593" transform="translate(276,157)"/>
<path d="M0 0 C0.33 1.32 0.66 2.64 1 4 C-1.97 6.475 -1.97 6.475 -5 9 C-5.33 7.68 -5.66 6.36 -6 5 C-4.02 3.35 -2.04 1.7 0 0 Z " fill="#8EACD1" transform="translate(148,143)"/>
<path d="M0 0 C1.1446875 1.175625 1.1446875 1.175625 2.3125 2.375 C4.90891805 5.07257717 4.90891805 5.07257717 8 7 C7.34 8.32 6.68 9.64 6 11 C6 10.34 6 9.68 6 9 C5.34 9 4.68 9 4 9 C1.41215739 6.92972591 0.52446442 5.25167938 0 2 C0 1.34 0 0.68 0 0 Z " fill="#9EA7B4" transform="translate(159,123)"/>
<path d="M0 0 C1.32 0 2.64 0 4 0 C4 0.66 4 1.32 4 2 C3.34 2 2.68 2 2 2 C2 2.66 2 3.32 2 4 C1.34 4 0.68 4 0 4 C-0.33 4.99 -0.66 5.98 -1 7 C-1.66 7 -2.32 7 -3 7 C-3 7.66 -3 8.32 -3 9 C-3.99 9.33 -4.98 9.66 -6 10 C-6 9.01 -6 8.02 -6 7 C-5.071875 6.6596875 -5.071875 6.6596875 -4.125 6.3125 C-1.38589791 4.62070165 -0.94975528 3.00755839 0 0 Z " fill="#0E2343" transform="translate(238,114)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C-0.66 2 -1.32 2 -2 2 C-2.33 3.65 -2.66 5.3 -3 7 C-3.99 7 -4.98 7 -6 7 C-6 6.34 -6 5.68 -6 5 C-5.34 4.67 -4.68 4.34 -4 4 C-5.65 3.67 -7.3 3.34 -9 3 C-6.15236477 0.15236477 -3.96383452 0 0 0 Z " fill="#587292" transform="translate(135,72)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1.45732667 5.71658336 0.52273754 8.48649253 -3 13 C-3.99 12.01 -4.98 11.02 -6 10 C-4.68 10 -3.36 10 -2 10 C-2.33 8.68 -2.66 7.36 -3 6 C-2.01 5.67 -1.02 5.34 0 5 C0 3.35 0 1.7 0 0 Z " fill="#454E5E" transform="translate(148,51)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3.33 3.31 3.66 5.62 4 8 C4.66 8 5.32 8 6 8 C6 8.66 6 9.32 6 10 C6.66 10 7.32 10 8 10 C8 10.66 8 11.32 8 12 C4.74905801 10.95505436 3.43126714 9.40864509 1.75 6.5625 C0 3 0 3 0 0 Z " fill="#253A61" transform="translate(26,250)"/>
<path d="M0 0 C0.33 1.32 0.66 2.64 1 4 C1.66 4 2.32 4 3 4 C3.33 6.31 3.66 8.62 4 11 C3.34 11 2.68 11 2 11 C2 10.34 2 9.68 2 9 C1.34 9 0.68 9 0 9 C0 6.03 0 3.06 0 0 Z " fill="#AFC9EB" transform="translate(70,226)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2 0.66 2 1.32 2 2 C3.65 2 5.3 2 7 2 C8.125 5.75 8.125 5.75 7 8 C6.01 7.67 5.02 7.34 4 7 C4 6.34 4 5.68 4 5 C3.34 4.505 2.68 4.01 2 3.5 C1.34 3.005 0.68 2.51 0 2 C0 1.34 0 0.68 0 0 Z " fill="#162F51" transform="translate(201,219)"/>
<path d="M0 0 C2.64 1.98 5.28 3.96 8 6 C7.67 7.32 7.34 8.64 7 10 C6.67 9.34 6.34 8.68 6 8 C5.38125 7.731875 4.7625 7.46375 4.125 7.1875 C1.35873868 5.64164808 0.45344564 3.76154672 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#2C4564" transform="translate(206,204)"/>
<path d="M0 0 C1.32 0 2.64 0 4 0 C3.73958333 1.98567708 3.47916667 3.97135417 3.21875 5.95703125 C2.946767 8.15471706 2.946767 8.15471706 3 11 C0.82361603 7.68811135 -0.55925456 4.96670899 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#8B9AB4" transform="translate(194,181)"/>
<path d="M0 0 C2.7839183 1.39195915 2.97898997 3.15575779 4 6 C3.34 6 2.68 6 2 6 C2 6.66 2 7.32 2 8 C-1.68802044 6.77065985 -2.72356973 5.06140622 -5 2 C-2.525 2.495 -2.525 2.495 0 3 C0 2.01 0 1.02 0 0 Z " fill="#43526F" transform="translate(192,144)"/>
<path d="M0 0 C-1.6875 1.5625 -1.6875 1.5625 -4 3 C-6.25 2.6875 -6.25 2.6875 -9 2 C-11.67364232 1.900423 -14.32323456 1.95463109 -17 2 C-16.67 1.34 -16.34 0.68 -16 0 C-13.671875 -0.44921875 -13.671875 -0.44921875 -10.75 -0.6875 C-9.31914062 -0.81705078 -9.31914062 -0.81705078 -7.859375 -0.94921875 C-5.06574054 -0.99883248 -2.70681091 -0.65694498 0 0 Z " fill="#BDD0E3" transform="translate(167,141)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3.33 3.97 3.66 6.94 4 10 C3.01 9.67 2.02 9.34 1 9 C0.67 6.03 0.34 3.06 0 0 Z " fill="#12192B" transform="translate(134,103)"/>
<path d="M0 0 C1.32 0.33 2.64 0.66 4 1 C3.01 1 2.02 1 1 1 C0.7834375 1.928125 0.7834375 1.928125 0.5625 2.875 C0 5 0 5 -1 7 C-2.32 7 -3.64 7 -5 7 C-5.33 7.66 -5.66 8.32 -6 9 C-6 8.01 -6 7.02 -6 6 C-5.34 6 -4.68 6 -4 6 C-4 5.34 -4 4.68 -4 4 C-3.34 4 -2.68 4 -2 4 C-2 3.34 -2 2.68 -2 2 C-1.34 2 -0.68 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#7EA7D9" transform="translate(138,50)"/>
<path d="M0 0 C2.96844435 -0.35338623 5.15598218 -0.5417682 7.734375 1.11328125 C9.20348819 2.35503168 10.60704814 3.67337918 12 5 C11.67 5.99 11.34 6.98 11 8 C8.95880212 6.38405168 6.95927063 4.7143618 5 3 C5 2.34 5 1.68 5 1 C3.35 1 1.7 1 0 1 C0 0.67 0 0.34 0 0 Z " fill="#749BCD" transform="translate(94,49)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1 5.28 1 10.56 1 16 C0.01 15.67 -0.98 15.34 -2 15 C-2 13.02 -2 11.04 -2 9 C-1.34 9 -0.68 9 0 9 C0 6.03 0 3.06 0 0 Z " fill="#7293C1" transform="translate(144,32)"/>
<path d="M0 0 C2.475 0.99 2.475 0.99 5 2 C4.67 3.32 4.34 4.64 4 6 C2.68 6 1.36 6 0 6 C0 5.34 0 4.68 0 4 C-0.66 4 -1.32 4 -2 4 C-1.34 2.68 -0.68 1.36 0 0 Z " fill="#0C1625" transform="translate(135,13)"/>
<path d="M0 0 C1.32 0.33 2.64 0.66 4 1 C2.37660195 2.70884005 0.70680947 4.37446717 -1 6 C-1.66 6 -2.32 6 -3 6 C-3 6.66 -3 7.32 -3 8 C-4.32 8 -5.64 8 -7 8 C-7 7.34 -7 6.68 -7 6 C-5.5459375 5.62875 -5.5459375 5.62875 -4.0625 5.25 C-2.5465625 4.63125 -2.5465625 4.63125 -1 4 C-0.03122943 1.96756452 -0.03122943 1.96756452 0 0 Z " fill="#284776" transform="translate(67,260)"/>
<path d="M0 0 C1.58873246 3.17746491 1.41026221 6.54012202 1 10 C-0.5 12.5 -0.5 12.5 -2 14 C-2.3690205 4.58997722 -2.3690205 4.58997722 0 0 Z " fill="#375885" transform="translate(27,232)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C-2.625 6.875 -2.625 6.875 -6 8 C-6 6.68 -6 5.36 -6 4 C-3 1.75 -3 1.75 0 0 Z " fill="#556176" transform="translate(104,214)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.67 1.66 1.34 2.32 1 3 C1.33 3.639375 1.66 4.27875 2 4.9375 C3 7 3 7 2 10 C-0.0625 8.3125 -0.0625 8.3125 -2 6 C-1.7 1.7 -1.7 1.7 0 0 Z " fill="#C5D6E7" transform="translate(190,195)"/>
<path d="M0 0 C0 0.99 0 1.98 0 3 C-0.99 3 -1.98 3 -3 3 C-3 3.66 -3 4.32 -3 5 C-6.63 4.67 -10.26 4.34 -14 4 C-14 3.67 -14 3.34 -14 3 C-11.03 3 -8.06 3 -5 3 C-5 2.34 -5 1.68 -5 1 C-2 0 -2 0 0 0 Z " fill="#0C1731" transform="translate(174,194)"/>
<path d="M0 0 C2.31 0.66 4.62 1.32 7 2 C7 2.33 7 2.66 7 3 C6.38511719 3.13277344 5.77023438 3.26554688 5.13671875 3.40234375 C3.92435547 3.66724609 3.92435547 3.66724609 2.6875 3.9375 C1.88699219 4.11152344 1.08648437 4.28554687 0.26171875 4.46484375 C-2.145401 4.99886159 -2.145401 4.99886159 -5 6 C-5 5.01 -5 4.02 -5 3 C-3.35 2.67 -1.7 2.34 0 2 C0 1.34 0 0.68 0 0 Z " fill="#A6B6CB" transform="translate(185,179)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3 2.32 3 3.64 3 5 C1.02 5.66 -0.96 6.32 -3 7 C-2.625 4.0625 -2.625 4.0625 -2 1 C-1.34 0.67 -0.68 0.34 0 0 Z " fill="#20262E" transform="translate(125,178)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1 1.98 1 3.96 1 6 C-0.98 6.66 -2.96 7.32 -5 8 C-5 6.02 -5 4.04 -5 2 C-2.525 2.495 -2.525 2.495 0 3 C0 2.01 0 1.02 0 0 Z " fill="#020C1D" transform="translate(227,128)"/>
<path d="M0 0 C2.90802461 2.21928194 4.95312762 3.92969143 7 7 C6.625 9.6875 6.625 9.6875 6 12 C4.02433812 10.02433812 3.10420928 8.47662906 1.875 6 C1.52179688 5.29875 1.16859375 4.5975 0.8046875 3.875 C0 2 0 2 0 0 Z " fill="#99A3B4" transform="translate(123,85)"/>
<path d="M0 0 C1.98 0 3.96 0 6 0 C6.66 2.31 7.32 4.62 8 7 C6.0625 6.25 6.0625 6.25 4 5 C3.63837971 3.67405895 3.30271961 2.34061543 3 1 C2.01 0.67 1.02 0.34 0 0 Z " fill="#CADEEF" transform="translate(32,248)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C2.67 2.98 2.34 4.96 2 7 C1.01 7.33 0.02 7.66 -1 8 C-1.33 6.35 -1.66 4.7 -2 3 C-1.34 3 -0.68 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#8DA8C8" transform="translate(212,243)"/>
<path d="M0 0 C6.93 0.495 6.93 0.495 14 1 C14 1.99 14 2.98 14 4 C12.04020573 3.71831703 10.08217622 3.42433283 8.125 3.125 C6.48917969 2.88136719 6.48917969 2.88136719 4.8203125 2.6328125 C2 2 2 2 0 0 Z " fill="#B8D2EF" transform="translate(46,219)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C2 4 2 4 0.6875 5.38671875 C-0.875 6.59114583 -2.4375 7.79557292 -4 9 C-4.33 7.68 -4.66 6.36 -5 5 C-3.68 4.67 -2.36 4.34 -1 4 C-0.67 2.68 -0.34 1.36 0 0 Z " fill="#010615" transform="translate(31,217)"/>
<path d="M0 0 C5.75 0.75 5.75 0.75 8 3 C3.375 5.125 3.375 5.125 0 4 C0 2.68 0 1.36 0 0 Z " fill="#7687A0" transform="translate(172,198)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.505 1.433125 1.01 1.86625 0.5 2.3125 C-1.33218192 3.99740483 -1.33218192 3.99740483 -1 7 C-2.98 7.66 -4.96 8.32 -7 9 C-2.85714286 2.57142857 -2.85714286 2.57142857 0 0 Z " fill="#6A7280" transform="translate(115,187)"/>
<path d="M0 0 C1.0625 1.8125 1.0625 1.8125 2 4 C1.67 4.99 1.34 5.98 1 7 C-4.875 3.25 -4.875 3.25 -6 1 C-3 0 -3 0 0 0 Z " fill="#152037" transform="translate(195,187)"/>
<path d="M0 0 C1.32 0 2.64 0 4 0 C4.66 2.31 5.32 4.62 6 7 C5.34 7 4.68 7 4 7 C4 6.34 4 5.68 4 5 C3.01 5 2.02 5 1 5 C0.67 3.35 0.34 1.7 0 0 Z " fill="#BACFE6" transform="translate(146,174)"/>
<path d="M0 0 C2.31 0 4.62 0 7 0 C6.34 1.32 5.68 2.64 5 4 C2.69 4 0.38 4 -2 4 C-1.34 2.68 -0.68 1.36 0 0 Z " fill="#89A4C4" transform="translate(271,154)"/>
<path d="M0 0 C2 2 2 2 2.1953125 4.6015625 C2.17210937 5.59929687 2.14890625 6.59703125 2.125 7.625 C2.10695313 8.62789062 2.08890625 9.63078125 2.0703125 10.6640625 C2.03550781 11.82035156 2.03550781 11.82035156 2 13 C-0.47532211 10.52467789 -0.38704795 9.36068317 -0.6875 5.9375 C-0.77386719 5.03902344 -0.86023438 4.14054688 -0.94921875 3.21484375 C-0.96597656 2.48394531 -0.98273438 1.75304687 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#020917" transform="translate(283,131)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1.33 2.31 1.66 4.62 2 7 C3.32 6.67 4.64 6.34 6 6 C4.6875 8.5 4.6875 8.5 3 11 C2.01 11 1.02 11 0 11 C0 7.37 0 3.74 0 0 Z " fill="#6F7C8F" transform="translate(220,131)"/>
<path d="M0 0 C0.33 0.66 0.66 1.32 1 2 C0.01 2.495 0.01 2.495 -1 3 C-1.33 3.99 -1.66 4.98 -2 6 C-3.98 6.33 -5.96 6.66 -8 7 C-7.9375 5.1875 -7.9375 5.1875 -7 3 C-3.4375 1.25 -3.4375 1.25 0 0 Z " fill="#9DA8B7" transform="translate(158,129)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C2.49396008 3.16874252 2.00016187 4.99967627 1 7 C-0.32 7 -1.64 7 -3 7 C-2.690625 6.401875 -2.38125 5.80375 -2.0625 5.1875 C-0.89790296 2.91043228 -0.89790296 2.91043228 0 0 Z " fill="#2E5181" transform="translate(141,53)"/>
<path d="M0 0 C-0.84304687 0.41378906 -0.84304687 0.41378906 -1.703125 0.8359375 C-4.08618794 2.04368028 -6.4179008 3.32176809 -8.75 4.625 C-9.94882813 5.29402344 -9.94882813 5.29402344 -11.171875 5.9765625 C-11.77515625 6.31429688 -12.3784375 6.65203125 -13 7 C-13 5.68 -13 4.36 -13 3 C-4.57142857 -0.42857143 -4.57142857 -0.42857143 0 0 Z " fill="#30405C" transform="translate(112,14)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2.33 2.31 2.66 4.62 3 7 C3.66 7 4.32 7 5 7 C5 7.66 5 8.32 5 9 C3.0625 8.625 3.0625 8.625 1 8 C-0.35439668 5.29120665 -0.06501451 2.99066732 0 0 Z " fill="#010D23" transform="translate(201,234)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C4.09230769 4.43076923 4.09230769 4.43076923 3.625 7.3125 C3.41875 7.869375 3.2125 8.42625 3 9 C2.34 8.67 1.68 8.34 1 8 C0.26924352 5.6859378 -0.40138258 3.35171131 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#07122A" transform="translate(263,231)"/>
<path d="M0 0 C1.33998047 0.06960937 1.33998047 0.06960937 2.70703125 0.140625 C3.60808594 0.17671875 4.50914063 0.2128125 5.4375 0.25 C6.46810547 0.31960937 6.46810547 0.31960937 7.51953125 0.390625 C7.51953125 0.720625 7.51953125 1.050625 7.51953125 1.390625 C3.19893302 2.48908218 -1.09714818 3.56875239 -5.48046875 4.390625 C-3.17521711 0.50003419 -3.17521711 0.50003419 0 0 Z " fill="#A1C0E6" transform="translate(46.48046875,216.609375)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C1.6875 2.375 1.6875 2.375 1 5 C0.01 5.66 -0.98 6.32 -2 7 C-2.99 6.67 -3.98 6.34 -5 6 C-4.34 6 -3.68 6 -3 6 C-2.690625 5.195625 -2.38125 4.39125 -2.0625 3.5625 C-1 1 -1 1 0 0 Z " fill="#DAECF9" transform="translate(97,212)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C5.01704885 3.1999003 6.49890042 5.61537866 7 10 C3.60582235 6.87378374 1.3937282 4.43458973 0 0 Z " fill="#AFC1D1" transform="translate(195,195)"/>
<path d="M0 0 C2.97 0.495 2.97 0.495 6 1 C5.34 2.65 4.68 4.3 4 6 C2.02 6 0.04 6 -2 6 C-2 5.34 -2 4.68 -2 4 C-1.01 4 -0.02 4 1 4 C0.67 2.68 0.34 1.36 0 0 Z " fill="#4C6081" transform="translate(173,193)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1.05422947 1.4370809 1.09289723 2.87475462 1.125 4.3125 C1.14820313 5.11300781 1.17140625 5.91351563 1.1953125 6.73828125 C1 9 1 9 -1 12 C-1.99 11.34 -2.98 10.68 -4 10 C-3.34 8.68 -2.68 7.36 -2 6 C-1.34 6 -0.68 6 0 6 C0 4.02 0 2.04 0 0 Z " fill="#8191A3" transform="translate(200,166)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3 3.64 3 6.28 3 9 C2.34 9 1.68 9 1 9 C0.63877119 7.68942607 0.28619689 6.37646376 -0.0625 5.0625 C-0.35833984 3.96615234 -0.35833984 3.96615234 -0.66015625 2.84765625 C-0.77230469 2.23792969 -0.88445312 1.62820312 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#DDEAF4" transform="translate(221,145)"/>
<path d="M0 0 C0.99 0 1.98 0 3 0 C3 1.65 3 3.3 3 5 C2.34 5 1.68 5 1 5 C0.67 5.99 0.34 6.98 0 8 C0 7.01 0 6.02 0 5 C-0.66 5 -1.32 5 -2 5 C-1.34 3.35 -0.68 1.7 0 0 Z " fill="#F9FBFD" transform="translate(236,139)"/>
<path d="M0 0 C0.99 0 1.98 0 3 0 C3.66 0.66 4.32 1.32 5 2 C4.01 4.64 3.02 7.28 2 10 C1.67 10 1.34 10 1 10 C0.67 6.7 0.34 3.4 0 0 Z " fill="#0D1C39" transform="translate(227,123)"/>
<path d="M0 0 C4.87362847 0.45336079 7.39042389 1.7089159 11 5 C10.67 5.99 10.34 6.98 10 8 C9.814375 7.38125 9.62875 6.7625 9.4375 6.125 C7.30061462 2.96612595 4.58575921 2.91273871 1 2 C0.67 1.34 0.34 0.68 0 0 Z " fill="#BCCAD8" transform="translate(264,118)"/>
<path d="M0 0 C0.99 0 1.98 0 3 0 C2.67 1.98 2.34 3.96 2 6 C0.02 6.33 -1.96 6.66 -4 7 C-3.67 5.68 -3.34 4.36 -3 3 C-2.01 3 -1.02 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#5C88BD" transform="translate(142,48)"/>
<path d="M0 0 C-0.25 1.875 -0.25 1.875 -1 4 C-2.8125 5.3125 -2.8125 5.3125 -5 6 C-7.25 5.625 -7.25 5.625 -9 5 C-2.40909091 0 -2.40909091 0 0 0 Z " fill="#363E4B" transform="translate(252,272)"/>
<path d="M0 0 C-0.66 0 -1.32 0 -2 0 C-2.33 0.99 -2.66 1.98 -3 3 C-5.375 4.25 -5.375 4.25 -8 5 C-8.99 4.67 -9.98 4.34 -11 4 C-10.34 4 -9.68 4 -9 4 C-9 3.34 -9 2.68 -9 2 C-3.375 -1.125 -3.375 -1.125 0 0 Z " fill="#537BB7" transform="translate(69,260)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1 2.97 1 5.94 1 9 C-0.32 8.34 -1.64 7.68 -3 7 C-3 6.01 -3 5.02 -3 4 C-2.34 3.67 -1.68 3.34 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z " fill="#091123" transform="translate(213,256)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2.33 1.32 2.66 2.64 3 4 C4.32 4.33 5.64 4.66 7 5 C6.34 5.66 5.68 6.32 5 7 C3 6.8125 3 6.8125 1 6 C0.34 5.01 -0.32 4.02 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z " fill="#4B5566" transform="translate(79,224)"/>
<path d="M0 0 C-2 2 -2 2 -5.0625 2.5 C-6.5165625 2.7475 -6.5165625 2.7475 -8 3 C-8.33 3.66 -8.66 4.32 -9 5 C-8.75 3.125 -8.75 3.125 -8 1 C-5.08518252 -1.1107299 -3.34823603 -1.19579858 0 0 Z " fill="#6A84AB" transform="translate(224,219)"/>
<path d="M0 0 C1.093125 0.226875 2.18625 0.45375 3.3125 0.6875 C2.0625 2.25 2.0625 2.25 0.3125 3.6875 C-1.6875 3.375 -1.6875 3.375 -3.6875 2.6875 C-4.6775 2.6875 -5.6675 2.6875 -6.6875 2.6875 C-4.58035839 -0.41123767 -3.86755884 -0.32775922 0 0 Z " fill="#BCD2EA" transform="translate(41.6875,221.3125)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C-1.18595135 3.63978826 -4.30970546 6.10498388 -8 8 C-8.66 7.67 -9.32 7.34 -10 7 C-6.7 4.69 -3.4 2.38 0 0 Z " fill="#8CA9CA" transform="translate(42,217)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.375 2.9375 1.375 2.9375 0 5 C-3.125 5.75 -3.125 5.75 -6 6 C-6 5.34 -6 4.68 -6 4 C-4.03852126 2.61061923 -2.03833424 1.2739589 0 0 Z " fill="#465671" transform="translate(121,202)"/>
<path d="M0 0 C1.2065625 0.0309375 1.2065625 0.0309375 2.4375 0.0625 C-2.3125 5.8125 -2.3125 5.8125 -4.5625 8.0625 C-3.54737544 0.08652135 -3.54737544 0.08652135 0 0 Z " fill="#070E26" transform="translate(189.5625,188.9375)"/>
<path d="M0 0 C1.5625 1.8125 1.5625 1.8125 3 4 C2.67 4.99 2.34 5.98 2 7 C1.34 6.67 0.68 6.34 0 6 C0 5.34 0 4.68 0 4 C-1.65 4 -3.3 4 -5 4 C-4.67 3.34 -4.34 2.68 -4 2 C-2.68 2 -1.36 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#273B58" transform="translate(128,181)"/>
<path d="M0 0 C0.0825 0.61875 0.165 1.2375 0.25 1.875 C0.81258459 4.18437567 0.81258459 4.18437567 3.0625 5.25 C3.701875 5.4975 4.34125 5.745 5 6 C2 6 2 6 -1 5 C-1 4.34 -1 3.68 -1 3 C-2.32 2.34 -3.64 1.68 -5 1 C-3 0 -3 0 0 0 Z " fill="#759FD0" transform="translate(149,180)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C-2.75078884 2.91692961 -4.35948913 3.10886083 -7.1875 3.0625 C-9.0746875 3.0315625 -9.0746875 3.0315625 -11 3 C-7.48550811 -0.37391222 -4.73940561 -0.27342725 0 0 Z " fill="#00050C" transform="translate(265,169)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3 2.98 3 4.96 3 7 C2.34 7 1.68 7 1 7 C0.67 7.99 0.34 8.98 0 10 C-1.125 3.375 -1.125 3.375 0 0 Z " fill="#82A7CF" transform="translate(139,153)"/>
<path d="M0 0 C2.31 0 4.62 0 7 0 C7.66 1.32 8.32 2.64 9 4 C6.03 3.505 6.03 3.505 3 3 C3 2.34 3 1.68 3 1 C1.68 1.33 0.36 1.66 -1 2 C-0.67 1.34 -0.34 0.68 0 0 Z " fill="#95B3D9" transform="translate(239,154)"/>
<path d="M0 0 C2.97 0 5.94 0 9 0 C6.75 2.0625 6.75 2.0625 4 4 C1.6875 3.75 1.6875 3.75 0 3 C0 2.01 0 1.02 0 0 Z " fill="#D8E7F9" transform="translate(269,149)"/>
<path d="M0 0 C1.6396875 0.0928125 1.6396875 0.0928125 3.3125 0.1875 C3.3125 0.8475 3.3125 1.5075 3.3125 2.1875 C0.0125 2.5175 -3.2875 2.8475 -6.6875 3.1875 C-3.6875 0.1875 -3.6875 0.1875 0 0 Z " fill="#26384D" transform="translate(214.6875,144.8125)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C0.625 2.5 0.625 2.5 -1 4 C-1.66 4 -2.32 4 -3 4 C-3 5.98 -3 7.96 -3 10 C-3.99 9.34 -4.98 8.68 -6 8 C-4.6875 4.5625 -4.6875 4.5625 -3 1 C-2.01 0.67 -1.02 0.34 0 0 Z " fill="#4F6E98" transform="translate(145,144)"/>
<path d="M0 0 C1.65 0 3.3 0 5 0 C5.1875 2.375 5.1875 2.375 5 5 C2 7 2 7 -1 7 C-1 6.01 -1 5.02 -1 4 C0.32 4 1.64 4 3 4 C3 3.01 3 2.02 3 1 C2.01 0.67 1.02 0.34 0 0 Z " fill="#040D21" transform="translate(133,64)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3 2.65 3 4.3 3 6 C3.66 6 4.32 6 5 6 C5 6.66 5 7.32 5 8 C3.68 8.33 2.36 8.66 1 9 C0.67 6.03 0.34 3.06 0 0 Z " fill="#3E608F" transform="translate(89,38)"/>
<path d="M0 0 C5.53846154 0.61538462 5.53846154 0.61538462 7.875 2.5625 C8.431875 3.2740625 8.431875 3.2740625 9 4 C7.35 4.33 5.7 4.66 4 5 C4 4.34 4 3.68 4 3 C2.35 2.67 0.7 2.34 -1 2 C-0.67 1.34 -0.34 0.68 0 0 Z " fill="#040913" transform="translate(124,8)"/>
<path d="M0 0 C2.475 0.99 2.475 0.99 5 2 C5 3.65 5 5.3 5 7 C1.83884224 5.63016497 1.0072908 5.0109362 -1 2 C-0.67 1.34 -0.34 0.68 0 0 Z " fill="#33373D" transform="translate(28,262)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1 1.98 1 3.96 1 6 C-1.31 6.66 -3.62 7.32 -6 8 C-5.02471263 6.66382648 -4.04466681 5.3311249 -3.0625 4 C-2.24458984 2.88625 -2.24458984 2.88625 -1.41015625 1.75 C-0.94480469 1.1725 -0.47945313 0.595 0 0 Z " fill="#0F1C35" transform="translate(262,258)"/>
<path d="M0 0 C4.62 0.99 9.24 1.98 14 3 C14 3.33 14 3.66 14 4 C12.41820385 4.10867302 10.83422847 4.18589827 9.25 4.25 C8.36828125 4.29640625 7.4865625 4.3428125 6.578125 4.390625 C4 4 4 4 0 0 Z " fill="#C6D9EA" transform="translate(226,259)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C1.65120368 3.25543229 0.97866739 4.01873107 -1.5625 6.25 C-2.366875 6.8275 -3.17125 7.405 -4 8 C-4 6.68 -4 5.36 -4 4 C-3.34 4 -2.68 4 -2 4 C-2 3.34 -2 2.68 -2 2 C-1.34 2 -0.68 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#5D82AC" transform="translate(78,252)"/>
<path d="M0 0 C3.465 1.485 3.465 1.485 7 3 C7 3.66 7 4.32 7 5 C5.35 5.66 3.7 6.32 2 7 C2.33 6.01 2.66 5.02 3 4 C1.68 3.34 0.36 2.68 -1 2 C-0.67 1.34 -0.34 0.68 0 0 Z " fill="#4E6990" transform="translate(205,218)"/>
<path d="M0 0 C0.33 0.66 0.66 1.32 1 2 C0.67 2.99 0.34 3.98 0 5 C-0.99 5.33 -1.98 5.66 -3 6 C-3.33 6.99 -3.66 7.98 -4 9 C-4.99 9.33 -5.98 9.66 -7 10 C-5.6062718 5.56541027 -3.39417765 3.12621626 0 0 Z " fill="#575B65" transform="translate(30,216)"/>
<path d="M0 0 C5.75 0.75 5.75 0.75 8 3 C8 3.99 8 4.98 8 6 C4.63408134 4.55746343 2.48952921 2.66735273 0 0 Z " fill="#323F4A" transform="translate(142,195)"/>
<path d="M0 0 C1.36125 0.12375 1.36125 0.12375 2.75 0.25 C3.08 0.91 3.41 1.57 3.75 2.25 C0.12 2.91 -3.51 3.57 -7.25 4.25 C-4.83923194 1.28290085 -3.90322061 0.30024774 0 0 Z " fill="#859FC3" transform="translate(125.25,185.75)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2.6875 2.25 2.6875 2.25 3 5 C1.5625 7.3125 1.5625 7.3125 0 9 C-0.66 7.35 -1.32 5.7 -2 4 C-1.34 4 -0.68 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#0B1B38" transform="translate(134,173)"/>
<path d="M0 0 C1.04449911 3.13349732 0.93423645 3.98968256 0 7 C-0.66 7 -1.32 7 -2 7 C-2 6.34 -2 5.68 -2 5 C-2.66 5 -3.32 5 -4 5 C-4 4.01 -4 3.02 -4 2 C-2.68 1.34 -1.36 0.68 0 0 Z " fill="#152D4D" transform="translate(271,160)"/>
<path d="M0 0 C0.33 1.32 0.66 2.64 1 4 C0.34 4 -0.32 4 -1 4 C-1.99 7.465 -1.99 7.465 -3 11 C-3.33 11 -3.66 11 -4 11 C-4.56638908 6.18569279 -2.82561627 3.79692186 0 0 Z " fill="#D3E2ED" transform="translate(150,147)"/>
<path d="M0 0 C2.97 0.495 2.97 0.495 6 1 C6 1.99 6 2.98 6 4 C3.36 3.67 0.72 3.34 -2 3 C-1.34 2.67 -0.68 2.34 0 2 C0 1.34 0 0.68 0 0 Z " fill="#AEC8E3" transform="translate(175,139)"/>
<path d="M0 0 C0.99 0 1.98 0 3 0 C3.66 1.65 4.32 3.3 5 5 C3.0625 5.5625 3.0625 5.5625 1 6 C0 5 0 5 -0.0625 2.4375 C-0.041875 1.633125 -0.02125 0.82875 0 0 Z " fill="#0F2039" transform="translate(91,52)"/>
<path d="M0 0 C1.98 0 3.96 0 6 0 C5.01 1.485 5.01 1.485 4 3 C4.33 3.66 4.66 4.32 5 5 C2.525 4.01 2.525 4.01 0 3 C0 2.01 0 1.02 0 0 Z " fill="#192542" transform="translate(237,272)"/>
<path d="M0 0 C2.15634036 2.15634036 3.47793991 4.37098712 5 7 C2.97954558 6.39816251 0.97888961 5.72693904 -1 5 C-1.33 4.34 -1.66 3.68 -2 3 C-1.34 2.01 -0.68 1.02 0 0 Z " fill="#2F3038" transform="translate(35,266)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3 2.98 3 4.96 3 7 C2.01 7 1.02 7 0 7 C0 4.69 0 2.38 0 0 Z " fill="#456594" transform="translate(79,235)"/>
<path d="M0 0 C0.99 0 1.98 0 3 0 C2.67 1.32 2.34 2.64 2 4 C0.68 4 -0.64 4 -2 4 C-2 4.66 -2 5.32 -2 6 C-2.66 6 -3.32 6 -4 6 C-3.67 4.68 -3.34 3.36 -3 2 C-2.01 2 -1.02 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#B0CAE0" transform="translate(216,222)"/>
<path d="M0 0 C0 0.33 0 0.66 0 1 C-4.65537393 1.83796731 -8.37078475 2.0161692 -13 1 C-13 0.67 -13 0.34 -13 0 C-8.37078475 -1.0161692 -4.65537393 -0.83796731 0 0 Z " fill="#759BC9" transform="translate(175,189)"/>
<path d="M0 0 C0.33 0.66 0.66 1.32 1 2 C1.66 2 2.32 2 3 2 C3 2.66 3 3.32 3 4 C3.639375 4.2475 4.27875 4.495 4.9375 4.75 C7 6 7 6 7.75 8.125 C7.8325 8.74375 7.915 9.3625 8 10 C7.67 9.34 7.34 8.68 7 8 C6.01 8 5.02 8 4 8 C4 7.01 4 6.02 4 5 C3.34 5 2.68 5 2 5 C2 4.34 2 3.68 2 3 C1.34 3 0.68 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#172E4E" transform="translate(139,181)"/>
<path d="M0 0 C0.99 0.99 1.98 1.98 3 3 C2.6875 6.1875 2.6875 6.1875 2 9 C1.01 9 0.02 9 -1 9 C-0.67 6.03 -0.34 3.06 0 0 Z " fill="#7EA7D1" transform="translate(140,163)"/>
<path d="M0 0 C2.8125 -0.3125 2.8125 -0.3125 6 0 C7.8125 2.375 7.8125 2.375 9 5 C9.33 5.66 9.66 6.32 10 7 C7.50638429 5.79618552 5.31856917 4.54571278 3 3 C3 2.34 3 1.68 3 1 C2.01 0.67 1.02 0.34 0 0 Z " fill="#35507F" transform="translate(234,156)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C3.42944945 2.35438733 4.08661261 3.48032433 3.625 6.25 C3.41875 6.8275 3.2125 7.405 3 8 C1.5 6.8125 1.5 6.8125 0 5 C-0.1875 2.3125 -0.1875 2.3125 0 0 Z " fill="#DEEAF3" transform="translate(192,154)"/>
<path d="M0 0 C0.33 0.66 0.66 1.32 1 2 C0.01 2 -0.98 2 -2 2 C-2 2.99 -2 3.98 -2 5 C-0.68 5.66 0.64 6.32 2 7 C0.35 7 -1.3 7 -3 7 C-3.33 5.35 -3.66 3.7 -4 2 C-2.68 1.34 -1.36 0.68 0 0 Z " fill="#F2FBFD" transform="translate(206,152)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3 2.65 3 4.3 3 6 C1.68 6.33 0.36 6.66 -1 7 C-0.67 4.69 -0.34 2.38 0 0 Z " fill="#22354C" transform="translate(225,147)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3 3.64 3 6.28 3 9 C2.01 9.495 2.01 9.495 1 10 C0.67 6.7 0.34 3.4 0 0 Z " fill="#AFC4E0" transform="translate(227,146)"/>
<path d="M0 0 C1.65 0 3.3 0 5 0 C3.9024777 2.99324263 3.32317108 3.84610901 0.375 5.25 C-0.40875 5.4975 -1.1925 5.745 -2 6 C-2 5.34 -2 4.68 -2 4 C-1.34 4 -0.68 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#E9ECEF" transform="translate(151,147)"/>
<path d="M0 0 C1.32 0.66 2.64 1.32 4 2 C4 3.32 4 4.64 4 6 C2.68 6.33 1.36 6.66 0 7 C-0.33 6.01 -0.66 5.02 -1 4 C-0.34 4 0.32 4 1 4 C0.67 2.68 0.34 1.36 0 0 Z " fill="#2B4060" transform="translate(165,130)"/>
<path d="M0 0 C2.31 0 4.62 0 7 0 C6.67 1.32 6.34 2.64 6 4 C4.68 4 3.36 4 2 4 C2 3.01 2 2.02 2 1 C1.34 0.67 0.68 0.34 0 0 Z " fill="#8CA8C7" transform="translate(133,75)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2 0.66 2 1.32 2 2 C2.66 2 3.32 2 4 2 C3.67 4.64 3.34 7.28 3 10 C2.34 10 1.68 10 1 10 C0.67 6.7 0.34 3.4 0 0 Z " fill="#E1EBF8" transform="translate(136,27)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.42415568 3.38564077 0.77772405 5.66682784 0 8 C-0.66 8 -1.32 8 -2 8 C-1.125 1.125 -1.125 1.125 0 0 Z " fill="#131C2C" transform="translate(91,28)"/>
<path d="M0 0 C3.39914975 1.13304992 4.05254451 2.12518475 6 5 C5.67 5.66 5.34 6.32 5 7 C3.0625 6.3125 3.0625 6.3125 1 5 C0.25 2.375 0.25 2.375 0 0 Z " fill="#0A172E" transform="translate(140,18)"/>
<path d="M0 0 C3 1 3 1 4 3 C2 5 2 5 -1.125 5.125 C-2.548125 5.063125 -2.548125 5.063125 -4 5 C-3.01 4.34 -2.02 3.68 -1 3 C-1.33 2.34 -1.66 1.68 -2 1 C-1.34 0.67 -0.68 0.34 0 0 Z " fill="#0A1428" transform="translate(242,273)"/>
<path d="M0 0 C0 1.66666667 0 3.33333333 0 5 C-2.66666667 5 -5.33333333 5 -8 5 C-7.34 4.34 -6.68 3.68 -6 3 C-5.01 3 -4.02 3 -3 3 C-3 2.34 -3 1.68 -3 1 C-2.01 0.67 -1.02 0.34 0 0 Z " fill="#D6E2F3" transform="translate(94,209)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3 3.31 3 5.62 3 8 C2.566875 7.54625 2.13375 7.0925 1.6875 6.625 C-0.10798342 4.79975666 -0.10798342 4.79975666 -3 3 C-2.01 3 -1.02 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#587FAC" transform="translate(140,173)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1 3.63 1 7.26 1 11 C-0.32 11.33 -1.64 11.66 -3 12 C-2.690625 11.505 -2.38125 11.01 -2.0625 10.5 C-0.58355618 7.02013219 -0.37597149 3.75971491 0 0 Z " fill="#596E87" transform="translate(196,162)"/>
<path d="M0 0 C0.99 0 1.98 0 3 0 C3 1.98 3 3.96 3 6 C2.01 6.33 1.02 6.66 0 7 C0 4.69 0 2.38 0 0 Z " fill="#1D3249" transform="translate(197,166)"/>
<path d="M0 0 C0.5775 0.165 1.155 0.33 1.75 0.5 C4.26664369 1.14462031 4.26664369 1.14462031 8 1 C5.64031256 3.09749995 4.45383006 3.96905704 1.25 4.1875 C0.13625 4.0946875 0.13625 4.0946875 -1 4 C-1.33 3.34 -1.66 2.68 -2 2 C-1.34 2 -0.68 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#B3C5D9" transform="translate(156,133)"/>
<path d="M0 0 C0.99 0 1.98 0 3 0 C3 0.99 3 1.98 3 3 C4.32 3 5.64 3 7 3 C7 3.66 7 4.32 7 5 C5.68 5.33 4.36 5.66 3 6 C3 5.34 3 4.68 3 4 C2.01 3.67 1.02 3.34 0 3 C0 2.01 0 1.02 0 0 Z " fill="#DEEAF6" transform="translate(145,123)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C3.26229508 5.47540984 3.26229508 5.47540984 2 8 C1.01 8 0.02 8 -1 8 C-1 7.34 -1 6.68 -1 6 C-1.66 6 -2.32 6 -3 6 C-2.67 5.34 -2.34 4.68 -2 4 C-1.01 4.33 -0.02 4.66 1 5 C0.67 3.35 0.34 1.7 0 0 Z " fill="#6D85A3" transform="translate(141,120)"/>
<path d="M0 0 C1.70840281 1.63412443 2.93453047 2.86906094 4 5 C4.039992 6.99960012 4.04346799 9.00047242 4 11 C0 5 0 5 0 0 Z " fill="#757F8B" transform="translate(129,95)"/>
<path d="M0 0 C0.33 0.66 0.66 1.32 1 2 C0.67 2.99 0.34 3.98 0 5 C0.66 5.33 1.32 5.66 2 6 C0.68 6.33 -0.64 6.66 -2 7 C-2.66 5.35 -3.32 3.7 -4 2 C-3.34 2 -2.68 2 -2 2 C-1.34 1.34 -0.68 0.68 0 0 Z " fill="#4A5869" transform="translate(124,78)"/>
<path d="M0 0 C0.598125 0.309375 1.19625 0.61875 1.8125 0.9375 C4.08956772 2.10209704 4.08956772 2.10209704 7 3 C7 3.66 7 4.32 7 5 C4.69 4.67 2.38 4.34 0 4 C0 2.68 0 1.36 0 0 Z " fill="#587EB7" transform="translate(102,55)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1.1875 2.875 1.1875 2.875 1 6 C0.01 6.66 -0.98 7.32 -2 8 C-2.6875 6.25 -2.6875 6.25 -3 4 C-1.625 1.75 -1.625 1.75 0 0 Z " fill="#030916" transform="translate(77,258)"/>
<path d="M0 0 C3.2542015 2.83430453 4.5206753 4.68607774 5 9 C3.0625 8.4375 3.0625 8.4375 1 7 C0.25 3.375 0.25 3.375 0 0 Z " fill="#587EAE" transform="translate(215,255)"/>
<path d="M0 0 C0.33 1.32 0.66 2.64 1 4 C-0.32 4.33 -1.64 4.66 -3 5 C-3 4.34 -3 3.68 -3 3 C-3.66 2.67 -4.32 2.34 -5 2 C-3.35 1.34 -1.7 0.68 0 0 Z " fill="#D5E3FA" transform="translate(251,258)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C1.34 2.64 0.68 5.28 0 8 C-0.99 8 -1.98 8 -3 8 C-2.5359375 7.13375 -2.5359375 7.13375 -2.0625 6.25 C-1.07416636 4.15705816 -0.4831387 2.25464725 0 0 Z " fill="#99B8DB" transform="translate(259,251)"/>
<path d="M0 0 C0.66 0.99 1.32 1.98 2 3 C0.625 5.5 0.625 5.5 -1 8 C-1.66 8 -2.32 8 -3 8 C-3.33 8.66 -3.66 9.32 -4 10 C-4 9.01 -4 8.02 -4 7 C-3.34 7 -2.68 7 -2 7 C-1.855625 6.21625 -1.71125 5.4325 -1.5625 4.625 C-1 2 -1 2 0 0 Z " fill="#ACC6E2" transform="translate(216,243)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3 3.64 3 6.28 3 9 C0.23776722 6.23776722 0.42143709 3.79293383 0 0 Z " fill="#759DCF" transform="translate(76,235)"/>
<path d="M0 0 C1.32 0 2.64 0 4 0 C2.75023244 3.65316671 2.32901247 4.78065836 -1 7 C-0.67 4.69 -0.34 2.38 0 0 Z " fill="#041025" transform="translate(204,226)"/>
<path d="M0 0 C2.31 0.33 4.62 0.66 7 1 C7 1.99 7 2.98 7 4 C6.01 4 5.02 4 4 4 C4 3.34 4 2.68 4 2 C2.68 1.67 1.36 1.34 0 1 C0 0.67 0 0.34 0 0 Z " fill="#C6D9E9" transform="translate(194,207)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C1.25 5.875 1.25 5.875 -1 7 C-1.33 5.02 -1.66 3.04 -2 1 C-1.34 0.67 -0.68 0.34 0 0 Z " fill="#9DB0C8" transform="translate(177,186)"/>
<path d="M0 0 C0.66 0.66 1.32 1.32 2 2 C1.34 2.66 0.68 3.32 0 4 C0.33 4.99 0.66 5.98 1 7 C-0.32 6.67 -1.64 6.34 -3 6 C-2.625 3.5625 -2.625 3.5625 -2 1 C-1.34 0.67 -0.68 0.34 0 0 Z " fill="#091425" transform="translate(274,159)"/>
<path d="M0 0 C-0.33 2.64 -0.66 5.28 -1 8 C-1.66 7.67 -2.32 7.34 -3 7 C-3 5.02 -3 3.04 -3 1 C-1 0 -1 0 0 0 Z " fill="#010413" transform="translate(136,148)"/>
<path d="M0 0 C2.875 -0.125 2.875 -0.125 6 0 C6.66 0.66 7.32 1.32 8 2 C3.545 2.495 3.545 2.495 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z " fill="#06101B" transform="translate(120,72)"/>
<path d="M0 0 C1.1577506 3.47325181 1.06866652 6.36067448 1 10 C0.01 9.01 -0.98 8.02 -2 7 C-1.34 4.69 -0.68 2.38 0 0 Z " fill="#C6DAE9" transform="translate(97,26)"/>
<path d="M0 0 C0 3.57575896 -1.08840607 5.05295935 -3 8 C-3.66 7.67 -4.32 7.34 -5 7 C-3.70700306 4.11562221 -2.34058637 2.12780579 0 0 Z " fill="#757D86" transform="translate(94,15)"/>
<path d="M0 0 C1.65 0 3.3 0 5 0 C5 0.99 5 1.98 5 3 C3.66666667 3.66666667 2.33333333 4.33333333 1 5 C0.67 3.35 0.34 1.7 0 0 Z " fill="#01060C" transform="translate(209,265)"/>
<path d="M0 0 C1.32 0.33 2.64 0.66 4 1 C2.35 2.65 0.7 4.3 -1 6 C-1.99 5.67 -2.98 5.34 -4 5 C-2.68 3.35 -1.36 1.7 0 0 Z " fill="#E3EBF4" transform="translate(252,253)"/>
<path d="M0 0 C0.33 0.66 0.66 1.32 1 2 C0.67 2.99 0.34 3.98 0 5 C-0.66 5 -1.32 5 -2 5 C-2 5.66 -2 6.32 -2 7 C-2.99 6.67 -3.98 6.34 -5 6 C-3.63016497 2.83884224 -3.0109362 2.0072908 0 0 Z " fill="#789EC9" transform="translate(78,249)"/>
<path d="M0 0 C2.64 0.33 5.28 0.66 8 1 C8 1.99 8 2.98 8 4 C4.64404172 3.40072174 2.62198774 2.15377564 0 0 Z " fill="#303D54" transform="translate(70,213)"/>
<path d="M0 0 C1.65 0.99 3.3 1.98 5 3 C3.35 4.32 1.7 5.64 0 7 C0 4.69 0 2.38 0 0 Z " fill="#687793" transform="translate(214,210)"/>
<path d="M0 0 C3.875 1.75 3.875 1.75 5 4 C3.02 4.33 1.04 4.66 -1 5 C-0.67 3.35 -0.34 1.7 0 0 Z " fill="#0C192D" transform="translate(135,194)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1 1.98 1 3.96 1 6 C-0.32 6.33 -1.64 6.66 -3 7 C-3.33 6.34 -3.66 5.68 -4 5 C-3.34 5 -2.68 5 -2 5 C-1.34 3.35 -0.68 1.7 0 0 Z " fill="#3B4B5E" transform="translate(198,175)"/>
<path d="M0 0 C2.31 0.33 4.62 0.66 7 1 C7 1.33 7 1.66 7 2 C5.35 2 3.7 2 2 2 C2.66 3.32 3.32 4.64 4 6 C2.68 5.34 1.36 4.68 0 4 C0 2.68 0 1.36 0 0 Z " fill="#4B5166" transform="translate(227,160)"/>
<path d="M0 0 C2.76223278 2.76223278 2.57856291 5.20706617 3 9 C2.01 9.33 1.02 9.66 0 10 C0 6.7 0 3.4 0 0 Z " fill="#8094AE" transform="translate(230,143)"/>
<path d="M0 0 C1.65 0.33 3.3 0.66 5 1 C4.01 2.485 4.01 2.485 3 4 C1.68 3.67 0.36 3.34 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z " fill="#050B1D" transform="translate(268,114)"/>
    </svg>
  );
};

export const QuestionMarkIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
};

export const NewChatIcon = ({
  size = 24,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 1.99982H6C3.79086 1.99982 2 3.79068 2 5.99982V13.9998C2 16.209 3.79086 17.9998 6 17.9998H14C16.2091 17.9998 18 16.209 18 13.9998V8.49982"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M17.1471 5.13076C17.4492 4.82871 17.6189 4.41901 17.619 3.9918C17.6191 3.56458 17.4494 3.15484 17.1474 2.85271C16.8453 2.55058 16.4356 2.38082 16.0084 2.38077C15.5812 2.38071 15.1715 2.55037 14.8693 2.85242L11.0562 6.66651L7.24297 10.4806C7.1103 10.6129 7.01218 10.7758 6.95726 10.9549L6.20239 13.4418C6.18762 13.4912 6.18651 13.5437 6.19916 13.5937C6.21182 13.6437 6.23778 13.6894 6.27428 13.7258C6.31078 13.7623 6.35646 13.7881 6.40648 13.8007C6.45651 13.8133 6.509 13.8121 6.5584 13.7972L9.04585 13.0429C9.2248 12.9885 9.38766 12.891 9.52014 12.7589L17.1471 5.13076Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Caret = ({
  size = 24,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m12.37 15.835l6.43-6.63C19.201 8.79 18.958 8 18.43 8H5.57c-.528 0-.771.79-.37 1.205l6.43 6.63c.213.22.527.22.74 0Z"
      />
    </svg>
  );
};

export const OpenAISVG = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
    >
      <path
        fill="currentColor"
        d="M45.403,25.562c-0.506-1.89-1.518-3.553-2.906-4.862c1.134-2.665,0.963-5.724-0.487-8.237	c-1.391-2.408-3.636-4.131-6.322-4.851c-1.891-0.506-3.839-0.462-5.669,0.088C28.276,5.382,25.562,4,22.647,4	c-4.906,0-9.021,3.416-10.116,7.991c-0.01,0.001-0.019-0.003-0.029-0.002c-2.902,0.36-5.404,2.019-6.865,4.549	c-1.391,2.408-1.76,5.214-1.04,7.9c0.507,1.891,1.519,3.556,2.909,4.865c-1.134,2.666-0.97,5.714,0.484,8.234	c1.391,2.408,3.636,4.131,6.322,4.851c0.896,0.24,1.807,0.359,2.711,0.359c1.003,0,1.995-0.161,2.957-0.45	C21.722,44.619,24.425,46,27.353,46c4.911,0,9.028-3.422,10.12-8.003c2.88-0.35,5.431-2.006,6.891-4.535	C45.754,31.054,46.123,28.248,45.403,25.562z M35.17,9.543c2.171,0.581,3.984,1.974,5.107,3.919c1.049,1.817,1.243,4,0.569,5.967	c-0.099-0.062-0.193-0.131-0.294-0.19l-9.169-5.294c-0.312-0.179-0.698-0.177-1.01,0.006l-10.198,6.041l-0.052-4.607l8.663-5.001	C30.733,9.26,33,8.963,35.17,9.543z M29.737,22.195l0.062,5.504l-4.736,2.805l-4.799-2.699l-0.062-5.504l4.736-2.805L29.737,22.195z M14.235,14.412C14.235,9.773,18.009,6,22.647,6c2.109,0,4.092,0.916,5.458,2.488C28,8.544,27.891,8.591,27.787,8.651l-9.17,5.294	c-0.312,0.181-0.504,0.517-0.5,0.877l0.133,11.851l-4.015-2.258V14.412z M6.528,23.921c-0.581-2.17-0.282-4.438,0.841-6.383	c1.06-1.836,2.823-3.074,4.884-3.474c-0.004,0.116-0.018,0.23-0.018,0.348V25c0,0.361,0.195,0.694,0.51,0.872l10.329,5.81	L19.11,34.03l-8.662-5.002C8.502,27.905,7.11,26.092,6.528,23.921z M14.83,40.457c-2.171-0.581-3.984-1.974-5.107-3.919	c-1.053-1.824-1.249-4.001-0.573-5.97c0.101,0.063,0.196,0.133,0.299,0.193l9.169,5.294c0.154,0.089,0.327,0.134,0.5,0.134	c0.177,0,0.353-0.047,0.51-0.14l10.198-6.041l0.052,4.607l-8.663,5.001C19.269,40.741,17.001,41.04,14.83,40.457z M35.765,35.588	c0,4.639-3.773,8.412-8.412,8.412c-2.119,0-4.094-0.919-5.459-2.494c0.105-0.056,0.216-0.098,0.32-0.158l9.17-5.294	c0.312-0.181,0.504-0.517,0.5-0.877L31.75,23.327l4.015,2.258V35.588z M42.631,32.462c-1.056,1.83-2.84,3.086-4.884,3.483	c0.004-0.12,0.018-0.237,0.018-0.357V25c0-0.361-0.195-0.694-0.51-0.872l-10.329-5.81l3.964-2.348l8.662,5.002	c1.946,1.123,3.338,2.937,3.92,5.107C44.053,28.249,43.754,30.517,42.631,32.462z"
      />
    </svg>
  );
};

export const SourcesIcon = ({
  size = 16,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 22.5L14 14.5L22 6.5V14.5H14V22.5H6Z" fill="black" />
    </svg>
  );
};

export const WebSearchIcon = ({
  size = 24,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.65"
        y="0.65"
        width="22.7"
        height="22.7"
        rx="11.35"
        stroke="black"
        strokeWidth="1.3"
      />
      <path
        d="M9.24406 10.8918H10.8918V9.24406L8.96945 7.32174C9.58439 7.02805 10.2753 6.93222 10.9469 7.04746C11.6186 7.1627 12.238 7.48333 12.7199 7.96521C13.2017 8.44708 13.5224 9.0665 13.6376 9.73816C13.7528 10.4098 13.657 11.1007 13.3633 11.7156L16.6587 15.011C16.8772 15.2295 17 15.5259 17 15.8349C17 16.1439 16.8772 16.4402 16.6587 16.6587C16.4402 16.8772 16.1439 17 15.8349 17C15.5259 17 15.2295 16.8772 15.011 16.6587L11.7156 13.3633C11.1007 13.657 10.4098 13.7528 9.73816 13.6376C9.0665 13.5224 8.44708 13.2017 7.96521 12.7199C7.48333 12.238 7.1627 11.6186 7.04746 10.9469C6.93222 10.2753 7.02805 9.58439 7.32174 8.96945L9.24406 10.8918Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArtAsistantIcon = ({
  size = 24,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1.5C9.98656 1.4999 8.01555 2.07871 6.32185 3.16743C4.62815 4.25616 3.28318 5.8089 2.44724 7.6406C1.6113 9.47231 1.31963 11.5057 1.60699 13.4986C1.89435 15.4914 2.74862 17.3596 4.068 18.8805L10.422 12.6285C10.8429 12.2144 11.4096 11.9824 12 11.9824C12.5904 11.9824 13.1571 12.2144 13.578 12.6285L19.932 18.8805C21.2514 17.3596 22.1056 15.4914 22.393 13.4986C22.6804 11.5057 22.3887 9.47231 21.5528 7.6406C20.7168 5.8089 19.3719 4.25616 17.6782 3.16743C15.9845 2.07871 14.0134 1.4999 12 1.5ZM12 22.5C14.5238 22.5042 16.9639 21.5952 18.87 19.941L12.525 13.6965C12.3848 13.5591 12.1963 13.4821 12 13.4821C11.8037 13.4821 11.6152 13.5591 11.475 13.6965L5.13 19.941C7.03607 21.5952 9.47619 22.5042 12 22.5ZM0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12ZM16.5 8.25C16.5 8.05109 16.421 7.86032 16.2803 7.71967C16.1397 7.57902 15.9489 7.5 15.75 7.5C15.5511 7.5 15.3603 7.57902 15.2197 7.71967C15.079 7.86032 15 8.05109 15 8.25C15 8.44891 15.079 8.63968 15.2197 8.78033C15.3603 8.92098 15.5511 9 15.75 9C15.9489 9 16.1397 8.92098 16.2803 8.78033C16.421 8.63968 16.5 8.44891 16.5 8.25ZM18 8.25C18 8.54547 17.9418 8.83806 17.8287 9.11104C17.7157 9.38402 17.5499 9.63206 17.341 9.84099C17.1321 10.0499 16.884 10.2157 16.611 10.3287C16.3381 10.4418 16.0455 10.5 15.75 10.5C15.4545 10.5 15.1619 10.4418 14.889 10.3287C14.616 10.2157 14.3679 10.0499 14.159 9.84099C13.9501 9.63206 13.7843 9.38402 13.6713 9.11104C13.5582 8.83806 13.5 8.54547 13.5 8.25C13.5 7.65326 13.7371 7.08097 14.159 6.65901C14.581 6.23705 15.1533 6 15.75 6C16.3467 6 16.919 6.23705 17.341 6.65901C17.7629 7.08097 18 7.65326 18 8.25Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GeneralAssistantIcon = ({
  size = 24,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.65"
        y="0.65"
        width="22.7"
        height="22.7"
        rx="11.35"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M8.06264 10.3125C8.06253 9.66355 8.22283 9.02463 8.52926 8.45258C8.83569 7.88054 9.27876 7.3931 9.81906 7.03363C10.3594 6.67415 10.9801 6.4538 11.6261 6.39216C12.2722 6.33052 12.9234 6.42951 13.5219 6.68032C14.1204 6.93113 14.6477 7.32598 15.0568 7.82976C15.4659 8.33353 15.7441 8.93061 15.8667 9.56787C15.9893 10.2051 15.9525 10.8628 15.7596 11.4824C15.5667 12.102 15.2236 12.6644 14.7609 13.1194C14.5438 13.3331 14.3525 13.611 14.2603 13.9474L13.8721 15.375H10.1281L9.73889 13.9474C9.64847 13.6321 9.47612 13.3464 9.23939 13.1194C8.86681 12.753 8.57088 12.3161 8.36885 11.8342C8.16682 11.3523 8.06272 10.835 8.06264 10.3125ZM10.4364 16.5H13.5639L13.3715 17.211C13.3389 17.3301 13.2681 17.4351 13.1699 17.5099C13.0717 17.5847 12.9516 17.6252 12.8281 17.625H11.1721C11.0487 17.6252 10.9286 17.5847 10.8304 17.5099C10.7322 17.4351 10.6614 17.3301 10.6288 17.211L10.4364 16.5ZM12.0001 5.25C10.9954 5.25017 10.0134 5.5493 9.17925 6.10932C8.34506 6.66934 7.69637 7.46491 7.31577 8.39477C6.93516 9.32463 6.83985 10.3467 7.04197 11.3309C7.24409 12.3151 7.7345 13.2169 8.45076 13.9215C8.54562 14.0093 8.61549 14.1207 8.65326 14.2444L9.54426 17.5069C9.64173 17.8639 9.85387 18.179 10.148 18.4037C10.4422 18.6283 10.802 18.75 11.1721 18.75H12.8281C13.1983 18.75 13.5581 18.6283 13.8523 18.4037C14.1464 18.179 14.3585 17.8639 14.456 17.5069L15.3459 14.2444C15.384 14.1206 15.4542 14.0092 15.5495 13.9215C16.2658 13.2169 16.7562 12.3151 16.9583 11.3309C17.1604 10.3467 17.0651 9.32463 16.6845 8.39477C16.3039 7.46491 15.6552 6.66934 14.821 6.10932C13.9868 5.5493 13.0049 5.25017 12.0001 5.25Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SearchAssistantIcon = ({
  size = 24,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.65"
        y="0.65"
        width="22.7"
        height="22.7"
        rx="11.35"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M17.0667 18L12.8667 13.8C12.5333 14.0667 12.15 14.2778 11.7167 14.4333C11.2833 14.5889 10.8222 14.6667 10.3333 14.6667C9.12222 14.6667 8.09733 14.2471 7.25867 13.408C6.42 12.5689 6.00044 11.544 6 10.3333C5.99956 9.12267 6.41911 8.09778 7.25867 7.25867C8.09822 6.41956 9.12311 6 10.3333 6C11.5436 6 12.5687 6.41956 13.4087 7.25867C14.2487 8.09778 14.668 9.12267 14.6667 10.3333C14.6667 10.8222 14.5889 11.2833 14.4333 11.7167C14.2778 12.15 14.0667 12.5333 13.8 12.8667L18 17.0667L17.0667 18ZM10.3333 13.3333C11.1667 13.3333 11.8751 13.0418 12.4587 12.4587C13.0422 11.8756 13.3338 11.1671 13.3333 10.3333C13.3329 9.49956 13.0413 8.79133 12.4587 8.20867C11.876 7.626 11.1676 7.33422 10.3333 7.33333C9.49911 7.33244 8.79089 7.62422 8.20867 8.20867C7.62644 8.79311 7.33467 9.50133 7.33333 10.3333C7.332 11.1653 7.62378 11.8738 8.20867 12.4587C8.79356 13.0436 9.50178 13.3351 10.3333 13.3333Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SortIcon = ({
  size = 24,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 3.25a.75.75 0 0 1 .75.75v13.75l1.65-2.2a.75.75 0 1 1 1.2.9l-3 4a.75.75 0 0 1-1.35-.45V4a.75.75 0 0 1 .75-.75ZM7.25 6A.75.75 0 0 1 8 5.25h5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6Zm-2 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Zm-2 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const CirclingArrowIcon = ({
  size = 24,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      fill="currentColor"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="800px"
      height="800px"
      viewBox="0 0 94.073 94.072"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M91.465,5.491c-0.748-0.311-1.609-0.139-2.18,0.434l-8.316,8.316C72.046,5.057,60.125,0,47.399,0
			c-2.692,0-5.407,0.235-8.068,0.697C21.218,3.845,6.542,17.405,1.944,35.244c-0.155,0.599-0.023,1.235,0.355,1.724
			c0.379,0.489,0.962,0.775,1.581,0.775h12.738c0.839,0,1.59-0.524,1.878-1.313c3.729-10.193,12.992-17.971,23.598-19.814
			c1.747-0.303,3.525-0.456,5.288-0.456c8.428,0,16.299,3.374,22.168,9.5l-8.445,8.444c-0.571,0.572-0.742,1.432-0.434,2.179
			c0.311,0.748,1.039,1.235,1.848,1.235h28.181c1.104,0,2-0.896,2-2V7.338C92.7,6.53,92.211,5.801,91.465,5.491z"
          />
          <path
            d="M90.192,56.328H77.455c-0.839,0-1.59,0.523-1.878,1.312c-3.729,10.193-12.992,17.972-23.598,19.814
			c-1.748,0.303-3.525,0.456-5.288,0.456c-8.428,0-16.3-3.374-22.168-9.5l8.444-8.444c0.572-0.572,0.743-1.432,0.434-2.179
			c-0.31-0.748-1.039-1.235-1.848-1.235H3.374c-1.104,0-2,0.896-2,2v28.181c0,0.809,0.487,1.538,1.235,1.848
			c0.746,0.31,1.607,0.138,2.179-0.435l8.316-8.315c8.922,9.183,20.843,14.241,33.569,14.241c2.693,0,5.408-0.235,8.069-0.697
			c18.112-3.146,32.789-16.708,37.387-34.547c0.155-0.6,0.023-1.234-0.354-1.725C91.395,56.615,90.811,56.328,90.192,56.328z"
          />
        </g>
      </g>
    </svg>
  );
};

export const KnowledgeGroupIcon = ({
  size = 24,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21.25 9.883v7.698a3.083 3.083 0 0 1-3.083 3.083H5.833a3.083 3.083 0 0 1-3.083-3.083V6.419a3.083 3.083 0 0 1 3.083-3.083h3.084a3.083 3.083 0 0 1 2.57 1.377l.873 1.326a1.748 1.748 0 0 0 1.449.77h4.358a3.084 3.084 0 0 1 3.083 3.074"
      />
    </svg>
  );
};

export const FileOptionIcon = ({
  size = 24,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`w-[${size}px] h-[${size}px] ` + className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6801 7.02928C20.458 6.5654 20.1451 6.15072 19.76 5.80973L16.76 3.09074C16.0939 2.47491 15.2435 2.09552 14.3401 2.01115C14.2776 1.99628 14.2125 1.99628 14.15 2.01115H8.21008C7.54764 1.98307 6.88617 2.08698 6.26428 2.31683C5.64239 2.54667 5.07249 2.89785 4.58765 3.34995C4.10281 3.80205 3.71274 4.34605 3.44019 4.95025C3.16763 5.55445 3.01797 6.20679 3 6.86934V17.1655C3.03538 18.1647 3.36978 19.1303 3.95984 19.9375C4.5499 20.7448 5.36855 21.3566 6.31006 21.6939C6.92247 21.9253 7.57613 22.0274 8.22998 21.9937H15.79C16.4525 22.0218 17.1138 21.9179 17.7357 21.6881C18.3576 21.4582 18.9276 21.107 19.4125 20.6549C19.8973 20.2028 20.2874 19.6588 20.5599 19.0546C20.8325 18.4504 20.982 17.7981 21 17.1355V8.56872C21.0034 8.03873 20.8944 7.51404 20.6801 7.02928ZM16.0601 7.41915C15.9174 7.42047 15.7759 7.39353 15.6437 7.33986C15.5115 7.2862 15.3913 7.20687 15.2899 7.10649C15.1886 7.00611 15.1081 6.88664 15.0532 6.755C14.9983 6.62336 14.97 6.48215 14.97 6.33953V3.69052C15.63 3.85046 18.2 6.48947 18.76 6.92931C18.9256 7.06878 19.0675 7.23423 19.1801 7.41915H16.0601Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const PDFIcon = ({
  size = 24,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`text-red-500 w-[${size}px] h-[${size}px] ` + className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9.5 11.5C9.5 12.3 8.8 13 8 13H7V15H5.5V9H8C8.8 9 9.5 9.7 9.5 10.5V11.5M14.5 13.5C14.5 14.3 13.8 15 13 15H10.5V9H13C13.8 9 14.5 9.7 14.5 10.5V13.5M18.5 10.5H17V11.5H18.5V13H17V15H15.5V9H18.5V10.5M12 10.5H13V13.5H12V10.5M7 10.5H8V11.5H7V10.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const DOCIcon = ({
  size = 24,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`text-blue-600 w-[${size}px] h-[${size}px] ` + className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5,17H14L12,9.5L10,17H8.5L6.1,7H7.8L9.34,14.5L11.3,7H12.7L14.67,14.5L16.2,7H17.9M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ImagesIcon = ({
  size = 24,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`text-blue-600 w-[${size}px] h-[${size}px] ` + className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9 11.5C9 12.3 8.3 13 7.5 13H6.5V15H5V9H7.5C8.3 9 9 9.7 9 10.5V11.5M14 15H12.5L11.5 12.5V15H10V9H11.5L12.5 11.5V9H14V15M19 10.5H16.5V13.5H17.5V12H19V13.7C19 14.4 18.5 15 17.7 15H16.4C15.6 15 15.1 14.3 15.1 13.7V10.4C15 9.7 15.5 9 16.3 9H17.6C18.4 9 18.9 9.7 18.9 10.3V10.5H19M6.5 10.5H7.5V11.5H6.5V10.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const XMLIcon = ({
  size = 24,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`text-teal-500 w-[${size}px] h-[${size}px] ` + className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3M8 15H6.5L6 13L5.5 15H4L4.75 12L4 9H5.5L6 11L6.5 9H8L7.25 12L8 15M15.5 15H14V10.5H13V14H11.5V10.5H10.5V15H9V11C9 9.9 9.9 9 11 9H13.5C14.61 9 15.5 9.9 15.5 11V15M20 15H17V9H18.5V13.5H20V15Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TXTIcon = ({
  size = 24,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`text-blue-600 w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.998 14.768H8.895v3.274h-.917v-3.274H6.893V14h3.105v.768zm2.725 3.274-.365-.731c-.15-.282-.246-.492-.359-.726h-.013c-.083.233-.185.443-.312.726l-.335.731h-1.045l1.171-2.045L10.336 14h1.05l.354.738c.121.245.21.443.306.671h.013c.096-.258.174-.438.276-.671l.341-.738h1.043l-1.139 1.973 1.198 2.069h-1.055zm4.384-3.274h-1.104v3.274h-.917v-3.274h-1.085V14h3.105v.768zM14 9h-1V4l5 5h-4z"></path>
    </svg>
  );
};

export const HTMLIcon = ({
  size = 24,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`text-orange-600 w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2 5 5h-5V4zM8.531 18h-.76v-1.411H6.515V18h-.767v-3.373h.767v1.296h1.257v-1.296h.76V18zm3-2.732h-.921V18h-.766v-2.732h-.905v-.641h2.592v.641zM14.818 18l-.05-1.291c-.017-.405-.03-.896-.03-1.387h-.016c-.104.431-.245.911-.375 1.307l-.41 1.316h-.597l-.359-1.307a15.154 15.154 0 0 1-.306-1.316h-.011c-.021.456-.034.976-.059 1.396L12.545 18h-.705l.216-3.373h1.015l.331 1.126c.104.391.21.811.284 1.206h.017c.095-.391.209-.836.32-1.211l.359-1.121h.996L15.563 18h-.745zm3.434 0h-2.108v-3.373h.767v2.732h1.342V18z"></path>
    </svg>
  );
};

export const JSONIcon = ({
  size = 24,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`text-yellow-500 w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m3.25 8a1.25 1.25 0 1 0-2.5 0v2a1.25 1.25 0 1 0 2.5 0v-2m4.25-1.25a1.25 1.25 0 0 0-1.25 1.25v2a1.25 1.25 0 1 0 2.5 0v-2a1.25 1.25 0 0 0-1.25-1.25m4.25 1.25a1.25 1.25 0 1 0-2.5 0v2a1.25 1.25 0 1 0 2.5 0v-2z"
      />
    </svg>
  );
};

export const FolderMoveIcon = ({
  size = 24,
  className = defaultTailwindCSS,
}: IconProps) => {
  return (
    <svg
      style={{ width: `${size}px`, height: `${size}px` }}
      className={` w-[${size}px] h-[${size}px] ` + className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 8 8 12 12 16"></polyline>
      <line x1="16" y1="12" x2="8" y2="12"></line>
    </svg>
  );
};

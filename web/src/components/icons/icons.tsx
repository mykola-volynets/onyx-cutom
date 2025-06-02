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
  size = 115, // This will set the width of the logotype
  className = defaultTailwindCSS, // Apply a suitable default or pass via props
}: IconProps) => {
  // Aspect ratio from your new SVG: width="234" height="45"
  const aspectRatio = 234 / 45;
  const width = size;
  const height = size / aspectRatio;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 234 45" // ViewBox from your new SVG
      fill="none" // Outer SVG fill, as per your new SVG
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet" // Ensures proper scaling
      className={className} // Apply className for styling (e.g., fill color via text-...)
    >
      <path d="M21.6222 2.04095C22.8918 3.13715 23.6152 4.54036 23.8 6.21117C23.8581 7.71351 23.3998 8.78123 22.603 10.0275C21.9122 11.165 22.283 12.4869 22.5604 13.7053C22.9323 15.1402 23.462 16.4819 24.1111 17.8093C24.1609 17.9114 24.2106 18.0134 24.2619 18.1186C24.412 18.416 24.5694 18.7068 24.7333 18.9966C24.7896 19.0972 24.8458 19.1978 24.9037 19.3015C25.3022 19.9426 25.621 20.2174 26.3777 20.4074C26.4832 20.4308 26.5886 20.4541 26.6972 20.4782C28.0875 20.8508 29.2787 21.4818 30.1292 22.6958C30.4632 23.1406 30.4632 23.1406 31.0236 23.0981C31.2621 23.0476 31.4984 22.9869 31.7333 22.9215C31.9196 22.8707 32.1059 22.8199 32.2978 22.7676C32.8378 22.6169 33.3748 22.457 33.9111 22.2935C33.934 22.1512 33.9568 22.009 33.9804 21.8624C34.3381 19.9018 35.0705 18.5818 36.7111 17.4266C37.9529 16.7675 39.2107 16.5719 40.5775 16.9078C42.2015 17.4458 43.3685 18.3926 44.1778 19.9177C44.7255 21.1987 44.8065 22.6477 44.3449 23.961C43.65 25.5141 42.638 26.5603 41.0752 27.2003C39.7096 27.7007 38.3535 27.5422 37.0222 27.0034C36.5069 26.6992 36.5069 26.6992 36.0889 26.3754C35.9509 26.2718 35.813 26.1682 35.6708 26.0614C35.3363 25.7694 35.0919 25.4875 34.8444 25.1194C33.6249 25.1933 32.5546 25.6265 31.4222 26.0614C31.4052 26.1847 31.3881 26.3079 31.3706 26.4349C31.1444 27.9473 31.1444 27.9473 30.8486 28.5636C30.6187 29.105 30.5931 29.2863 30.8 29.8293C31.2434 30.6311 31.8481 31.2935 32.4698 31.9605C32.8222 32.3413 32.8222 32.3413 33.0677 32.6682C33.3444 32.9937 33.5062 33.1428 33.9111 33.2833C34.4392 33.2273 34.9317 33.131 35.4473 33.0084C36.7321 32.7088 37.8921 32.8937 39.0493 33.5494C40.4394 34.4791 41.2808 35.593 41.7879 37.21C42.0829 38.8391 41.7136 40.2121 40.95 41.6433C39.9923 42.8246 38.8377 43.6631 37.3333 43.959C35.5504 44.0989 34.0857 43.9245 32.6861 42.7423C31.3746 41.466 30.9329 40.1257 30.8043 38.3084C30.7973 37.5403 30.8986 36.7888 31.2879 36.119C31.4721 35.6749 31.4169 35.4652 31.2667 35.0102C30.5039 33.7389 29.3733 32.1848 27.9052 31.7501C27.4807 31.7081 27.1878 31.822 26.7865 31.9494C25.4716 32.2488 24.2565 32.0521 23.0295 31.5367C21.7911 31.1777 20.8511 31.4363 19.7264 32.0077C19.5983 32.071 19.4701 32.1344 19.3381 32.1996C18.2356 32.7612 17.2372 33.4214 16.2666 34.1895C16.0241 34.3808 15.7771 34.5661 15.53 34.7514C14.6905 35.402 13.9462 35.9796 13.6889 37.0512C13.6382 37.5615 13.6102 38.0704 13.5838 38.5825C13.4304 40.132 12.5739 41.4556 11.4042 42.4381C10.2169 43.2742 8.73101 43.5114 7.31111 43.3311C5.75556 42.9509 4.52916 42.1704 3.61727 40.8363C2.80492 39.457 2.72771 37.8502 3.0467 36.292C3.52606 34.8849 4.63807 33.6758 5.91658 32.9527C7.29401 32.3198 8.68288 32.396 10.1111 32.8123C10.2362 32.8738 10.3614 32.9353 10.4903 32.9987C11.3796 33.2833 12.344 33.0568 13.1718 32.6657C13.414 32.538 13.6544 32.4068 13.8931 32.2726C14.0208 32.2026 14.1485 32.1326 14.2801 32.0605C15.4209 31.4189 16.4272 30.6821 17.4222 29.8293C17.6436 29.6469 17.6436 29.6469 17.8694 29.4608C19.3381 28.2047 19.6093 27.2952 19.8254 25.385C19.9794 24.3434 20.3237 23.5036 20.9611 22.6762C21.6564 21.571 21.4739 20.0994 21.2209 18.8732C20.7363 16.8907 20.0268 15.0893 18.9778 13.3447C18.8539 13.1273 18.8539 13.1274 18.7274 12.9056C18.2914 12.2085 17.6829 12.069 16.9264 11.8827C15.5218 11.5139 14.348 10.8063 13.5333 9.57679C12.7416 8.2074 12.5261 6.88334 12.8619 5.3109C13.3503 3.69928 14.2598 2.35666 15.7476 1.53501C17.7316 0.597627 19.8112 0.797096 21.6222 2.04095Z" fill="#325277"/>
<path d="M42.1957 17.6339C43.3231 18.4257 44.1695 19.5207 44.4889 20.8805C44.7701 22.4691 44.5976 23.7065 43.75 25.0802C42.8678 26.3206 41.8093 26.9984 40.3667 27.4351C38.7723 27.5961 37.3915 27.3843 36.0889 26.3754C35.9509 26.2718 35.813 26.1682 35.6708 26.0614C35.3363 25.7694 35.0919 25.4875 34.8444 25.1195C33.6249 25.1933 32.5546 25.6265 31.4222 26.0614C31.3967 26.2463 31.3967 26.2463 31.3706 26.4349C31.1444 27.9473 31.1444 27.9473 30.8486 28.5636C30.6187 29.105 30.5931 29.2863 30.8 29.8293C31.2487 30.6407 31.8697 31.2894 32.4923 31.9697C32.7784 32.292 33.0383 32.6186 33.2889 32.9693C32.8294 32.754 32.4427 32.5001 32.0444 32.1843C32.3674 32.8036 32.4834 32.9553 33.1333 33.2833C33.1333 33.7496 33.1333 34.2158 33.1333 34.6962C31.8356 34.526 30.7871 33.5308 30.0125 32.5179C29.8601 32.3021 29.7078 32.0862 29.5556 31.8703C29.4016 31.7149 29.4016 31.7149 29.2444 31.5563C29.3028 31.1442 29.3028 31.1442 29.4 30.7713C29.2973 30.7713 29.1947 30.7713 29.0889 30.7713C29.1659 30.4605 29.1659 30.4605 29.2444 30.1433C29.6917 30.0452 29.6917 30.0452 30.1778 29.9863C30.3318 30.1418 30.3318 30.1418 30.4889 30.3003C30.4376 29.9895 30.3862 29.6786 30.3333 29.3584C30.0835 29.4558 29.8341 29.5541 29.5847 29.6527C29.4458 29.7074 29.3068 29.762 29.1636 29.8183C28.7502 29.9845 28.7502 29.9845 28.3111 30.3003C28.3111 30.1449 28.3111 29.9895 28.3111 29.8293C27.844 29.7772 27.844 29.7772 27.5819 30.0648C27.5146 30.1426 27.4472 30.2203 27.3778 30.3003C27.3778 30.0931 27.3778 29.8859 27.3778 29.6724C27.1799 29.7495 27.1799 29.7495 26.978 29.8281C26.413 29.9957 25.9617 30.0181 25.375 30.006C25.1957 30.0031 25.0165 30.0003 24.8318 29.9974C24.6966 29.9937 24.5615 29.9901 24.4222 29.9863C24.4222 29.8827 24.4222 29.7791 24.4222 29.6724C24.2345 29.6432 24.2345 29.6432 24.0431 29.6135C23.8457 29.5649 23.8457 29.5649 23.6444 29.5154C23.5674 29.3599 23.5674 29.3599 23.4889 29.2014C23.3349 29.1496 23.1809 29.0977 23.0222 29.0444C23.0222 28.9407 23.0222 28.8371 23.0222 28.7304C22.8746 28.6883 22.7271 28.6462 22.575 28.6028C22.0889 28.4164 22.0889 28.4164 21.7778 27.9454C21.6719 27.8936 21.566 27.8418 21.4569 27.7884C21.1556 27.6314 21.1556 27.6314 21 27.1604C20.9181 26.0735 20.9018 25.1277 21.4667 24.1775C21.6977 24.0998 21.6977 24.0998 21.9333 24.0205C21.9458 23.9031 21.9582 23.7857 21.971 23.6648C22.1814 22.8986 22.8355 22.5292 23.4889 22.1365C24.0722 22.0188 24.0722 22.0188 24.5778 21.9795C24.9859 21.7611 24.9859 21.7611 25.3556 21.5085C25.6128 21.3989 25.8716 21.2927 26.1333 21.1945C26.082 20.9355 26.0307 20.6764 25.9778 20.4096C27.5482 20.6564 28.7377 21.1394 29.8667 22.2935C29.9661 22.4457 30.0656 22.5979 30.1681 22.7547C30.4752 23.1395 30.4752 23.1395 31.0139 23.0883C31.9938 22.8965 32.9564 22.5845 33.9111 22.2935C33.934 22.1512 33.9568 22.009 33.9804 21.8624C34.3381 19.9018 35.0705 18.5818 36.7111 17.4266C38.5555 16.4476 40.4135 16.5821 42.1957 17.6339Z" fill="#B4CDE5"/>
<path d="M21.6222 2.04095C22.8918 3.13715 23.6152 4.54036 23.8 6.21117C23.8581 7.71351 23.3998 8.78123 22.603 10.0275C21.9122 11.165 22.283 12.4869 22.5604 13.7053C22.9323 15.1402 23.462 16.4819 24.1111 17.8093C24.1609 17.9114 24.2106 18.0134 24.2619 18.1186C24.7007 18.9882 25.16 19.8593 25.9778 20.4096C25.9322 20.7043 25.9322 20.7043 25.8222 21.0375C25.4274 21.2727 25.0644 21.4569 24.6458 21.6361C24.5383 21.687 24.4307 21.7379 24.3198 21.7903C23.5044 22.1485 22.9592 22.1564 22.0889 21.9795C22.121 21.8953 22.1531 21.8111 22.1861 21.7244C22.2649 21.2208 22.1128 20.8785 21.9333 20.4096C21.9333 20.9795 21.9333 21.5493 21.9333 22.1365C21.728 22.1883 21.5227 22.2401 21.3111 22.2935C21.3237 22.1201 21.3364 21.9466 21.3494 21.7679C21.5001 18.7092 20.5383 15.94 18.9778 13.3447C18.8539 13.1274 18.8539 13.1274 18.7274 12.9056C18.2914 12.2085 17.6829 12.069 16.9264 11.8827C15.5218 11.5139 14.3481 10.8063 13.5333 9.57679C12.7416 8.2074 12.5261 6.88334 12.8619 5.3109C13.3503 3.69928 14.2598 2.35666 15.7476 1.53501C17.7316 0.597627 19.8112 0.797096 21.6222 2.04095Z" fill="#3D4A5A"/>
<path d="M20.2222 23.8635C20.3675 24.3361 20.3847 24.4705 20.2222 24.9625C20.1103 26.0562 20.3449 27.0301 20.65 28.073C20.6893 28.2186 20.7286 28.3642 20.7691 28.5142C20.9836 29.2649 21.1441 29.8072 21.7778 30.3003C21.8764 30.3886 21.9751 30.4768 22.0767 30.5677C22.1706 30.6479 22.2644 30.728 22.3611 30.8106C22.4566 30.8923 22.552 30.9741 22.6503 31.0583C22.7574 31.1494 22.7574 31.1494 22.8667 31.2423C22.5011 31.4268 22.3288 31.3971 21.9254 31.3711C21.0814 31.3633 20.4709 31.6295 19.7264 32.0077C19.5983 32.071 19.4701 32.1344 19.3381 32.1996C18.2356 32.7612 17.2372 33.4214 16.2666 34.1895C16.0241 34.3808 15.7771 34.5661 15.53 34.7514C14.6905 35.402 13.9462 35.9796 13.6889 37.0512C13.6382 37.5615 13.6102 38.0704 13.5838 38.5825C13.4304 40.132 12.5739 41.4556 11.4042 42.4381C10.2169 43.2742 8.73101 43.5115 7.31111 43.3311C5.75556 42.9509 4.52916 42.1704 3.61727 40.8363C2.80492 39.457 2.72771 37.8502 3.0467 36.292C3.52606 34.8849 4.63807 33.6758 5.91658 32.9527C7.29401 32.3198 8.68288 32.396 10.1111 32.8123C10.2362 32.8738 10.3614 32.9353 10.4903 32.9987C11.3796 33.2833 12.344 33.0568 13.1718 32.6657C13.414 32.538 13.6544 32.4068 13.8931 32.2726C14.0208 32.2026 14.1485 32.1326 14.2801 32.0605C15.4209 31.4189 16.4272 30.6822 17.4222 29.8293C17.5698 29.7077 17.7174 29.5861 17.8694 29.4608C19.3135 28.2258 19.6478 27.2343 19.8345 25.3684C19.9076 24.8316 20.0354 24.37 20.2222 23.8635Z" fill="#768099"/>
<path d="M38.4222 34.2253C39.1939 34.5293 39.651 34.9368 40.1431 35.599C40.2889 35.9522 40.2889 35.9522 40.2889 36.2662C40.3884 36.2986 40.4878 36.331 40.5903 36.3643C40.9111 36.5802 40.9111 36.5802 41.0278 37.0708C41.0406 37.2198 41.0534 37.3687 41.0667 37.5222C41.1693 37.5222 41.272 37.5222 41.3778 37.5222C41.4548 38.2216 41.4548 38.2216 41.5333 38.9351C41.4307 38.7797 41.328 38.6243 41.2222 38.4642C41.2012 38.6083 41.1801 38.7523 41.1584 38.9008C40.968 39.9966 40.789 40.901 39.9942 41.7065C39.4969 42.0278 39.0403 42.0561 38.4587 42.0542C38.0661 42.0482 38.0661 42.0482 37.6444 42.3891C36.2884 42.589 34.8018 42.241 33.6 41.6041C33.5487 41.6041 33.4973 41.6041 33.4444 41.6041C33.4216 41.4899 33.3987 41.3758 33.3752 41.2582C33.1322 40.1589 32.7769 39.2419 32.2322 38.2587C32.0351 37.8151 32.0056 37.531 32.0444 37.0512C32.1471 37.0512 32.2498 37.0512 32.3556 37.0512C32.4069 36.7403 32.4582 36.4295 32.5111 36.1092C32.6138 36.1092 32.7164 36.1092 32.8222 36.1092C32.9249 35.7984 33.0276 35.4875 33.1333 35.1672C33.236 35.1672 33.3387 35.1672 33.4444 35.1672C33.4573 35.0701 33.4701 34.9729 33.4833 34.8729C33.6 34.5392 33.6 34.5392 33.8625 34.343C34.3058 34.1979 34.692 34.2151 35.1556 34.2253C36.0273 33.7853 37.4861 34.0669 38.4222 34.2253Z" fill="#EEF2F9"/>
<path d="M10.2667 34.2253C10.5194 34.5883 10.5194 34.5883 10.7333 35.0102C10.8873 35.1365 11.0413 35.2628 11.2 35.3929C11.6917 35.8168 11.8542 36.1609 12.1333 36.7372C12.2374 36.7801 12.3415 36.823 12.4487 36.8672C12.7556 37.0512 12.7556 37.0512 12.8668 37.4443C12.9445 38.5227 12.884 39.3557 12.4444 40.3481C12.5984 40.3481 12.7524 40.3481 12.9111 40.3481C12.9304 40.2251 12.9496 40.102 12.9694 39.9753C13.0667 39.5631 13.0667 39.5631 13.3778 39.2491C13.1834 40.4603 12.5678 41.4265 11.6667 42.2321C11.5127 42.1544 11.5127 42.1544 11.3556 42.0751C11.455 41.9909 11.5545 41.9067 11.6569 41.82C12.0377 41.3774 12.0816 41.0799 12.1333 40.5051C12.0243 40.6152 11.9152 40.7253 11.8028 40.8387C11.6552 40.9359 11.5076 41.033 11.3556 41.1331C10.8403 41.0154 10.8403 41.0154 10.4222 40.8191C10.3709 40.9745 10.3196 41.13 10.2667 41.2901C9.45061 41.7439 8.67081 41.8173 7.74861 41.8396C7.64142 41.8444 7.53423 41.8492 7.42379 41.8541C6.82296 41.8545 6.56754 41.7904 6.10495 41.3937C5.98965 41.2559 5.87435 41.1181 5.75556 40.9761C5.47178 40.7365 5.18374 40.5044 4.89271 40.2739C4.66667 40.0341 4.66667 40.0341 4.58646 39.7011C4.54916 39.5551 4.54916 39.5551 4.51111 39.4061C4.35711 39.3543 4.20311 39.3025 4.04444 39.2491C4.03167 38.5915 4.06059 38.0061 4.2 37.3652C4.20962 37.1677 4.21925 36.9701 4.22917 36.7666C4.33209 35.9555 4.71517 35.416 5.28889 34.8532C6.91763 33.6598 8.37015 33.5536 10.2667 34.2253Z" fill="#ECF1F8"/>
<path d="M25.9778 20.4096C26.3884 20.4614 26.7991 20.5132 27.2222 20.5666C27.1196 20.7738 27.0169 20.981 26.9111 21.1945C27.279 21.5022 27.6324 21.7902 28.0486 22.0286C29.1371 22.7184 30.0661 23.5506 30.4889 24.8055C30.7115 26.0746 30.4702 26.9265 29.7597 27.9822C29.6923 28.0737 29.625 28.1651 29.5556 28.2594C29.2989 28.2076 29.0422 28.1558 28.7778 28.1024C28.7778 28.206 28.7778 28.3096 28.7778 28.4164C28.3928 28.4941 28.3928 28.4941 28 28.5734C28 28.7288 28 28.8842 28 29.0444C27.777 29.1057 27.5533 29.164 27.3292 29.221C27.2046 29.2538 27.0801 29.2866 26.9518 29.3203C26.6 29.3584 26.6 29.3584 26.1333 29.0444C25.7392 29.0291 25.356 29.0548 24.9624 29.0793C24.4933 29.0367 24.31 28.8752 23.9556 28.5734C23.6215 28.4627 23.6215 28.4627 23.3333 28.4164C23.3333 28.3128 23.3333 28.2092 23.3333 28.1024C23.1793 28.1024 23.0253 28.1024 22.8667 28.1024C22.0987 26.8773 21.9731 25.4765 22.1411 24.0469C22.2903 23.5552 22.6274 23.3895 23.0222 23.0785C23.2195 22.6727 23.2195 22.6727 23.3333 22.2935C23.4889 22.1365 23.4889 22.1365 23.9944 22.0776C24.5801 21.9791 24.8683 21.8321 25.3556 21.5085C25.6128 21.3989 25.8716 21.2927 26.1333 21.1945C26.082 20.9355 26.0307 20.6765 25.9778 20.4096Z" fill="#F1F5FA"/>
<path d="M42.3385 18.8604C43.0932 19.353 43.5309 19.9854 43.8016 20.8585C44.0591 22.1891 43.8942 23.3169 43.2444 24.4915C43.1674 24.6469 43.1674 24.6469 43.0889 24.8055C42.8322 24.8055 42.5756 24.8055 42.3111 24.8055C42.2598 24.9609 42.2084 25.1163 42.1556 25.2764C41.8347 25.3844 41.8347 25.3844 41.5333 25.4334C41.5333 25.6407 41.5333 25.8479 41.5333 26.0614C41.174 26.0096 40.8147 25.9578 40.4444 25.9044C40.3931 25.749 40.3418 25.5936 40.2889 25.4334C40.1928 25.4407 40.0968 25.448 39.9978 25.4555C38.9609 25.5001 38.2431 25.3023 37.3333 24.8055C37.3333 24.7018 37.3333 24.5982 37.3333 24.4915C37.0253 24.4915 36.7173 24.4915 36.4 24.4915C36.3942 24.3872 36.3884 24.283 36.3824 24.1756C36.3308 23.2931 36.3308 23.2931 35.9819 22.4996C35.7778 22.1365 35.7778 22.1365 35.8847 21.5674C36.0889 21.0375 36.0889 21.0375 36.4 20.5665C36.2973 20.5665 36.1947 20.5665 36.0889 20.5665C36.2921 19.9514 36.5293 19.5733 37.0222 19.1536C37.1249 19.1536 37.2276 19.1536 37.3333 19.1536C37.3847 18.9463 37.436 18.7391 37.4889 18.5256C37.6429 18.5256 37.7969 18.5256 37.9556 18.5256C37.9556 18.422 37.9556 18.3184 37.9556 18.2116C39.4877 17.7793 40.9481 18.1299 42.3385 18.8604Z" fill="#F2F5F9"/>
<path d="M21 2.66894C21 2.77256 21 2.87618 21 2.98293C21.0938 2.99832 21.1877 3.0137 21.2844 3.02954C21.8107 3.2015 21.9731 3.52008 22.2487 3.98624C22.5406 4.77646 22.4564 5.60731 22.4 6.43686C22.2973 6.43686 22.1947 6.43686 22.0889 6.43686C22.1178 6.534 22.1466 6.63114 22.1764 6.73123C22.2444 7.06485 22.2444 7.06485 22.0889 7.37884C22.2429 7.45655 22.2429 7.45655 22.4 7.53584C22.2973 7.53584 22.1947 7.53584 22.0889 7.53584C22.0889 7.69126 22.0889 7.84669 22.0889 8.00683C21.9349 8.00683 21.7809 8.00683 21.6222 8.00683C21.5998 8.10397 21.5773 8.20111 21.5542 8.30119C21.4667 8.63481 21.4667 8.63481 21.3111 8.94881C21.1058 8.94881 20.9004 8.94881 20.6889 8.94881C20.6119 9.10423 20.6119 9.10423 20.5333 9.2628C20.4435 9.23042 20.3537 9.19804 20.2611 9.16468C19.9131 9.06741 19.9131 9.06741 19.6535 9.25789C19.1363 9.48757 18.6372 9.45316 18.0833 9.43942C17.9749 9.438 17.8664 9.43659 17.7546 9.43513C17.4882 9.43144 17.2219 9.42581 16.9556 9.4198C16.9556 9.31618 16.9556 9.21256 16.9556 9.1058C16.8016 9.1058 16.6476 9.1058 16.4889 9.1058C16.4504 8.98599 16.4119 8.86619 16.3722 8.74275C16.1541 8.26947 16.0006 8.10648 15.5556 7.84983C15.2989 7.79802 15.0422 7.74621 14.7778 7.69283C14.8291 7.12294 14.8804 6.55304 14.9333 5.96587C14.8307 5.96587 14.728 5.96587 14.6222 5.96587C14.6222 5.81044 14.6222 5.65502 14.6222 5.49488C14.5196 5.49488 14.4169 5.49488 14.3111 5.49488C14.2598 5.5985 14.2084 5.70212 14.1556 5.80887C14.1964 5.54523 14.2521 5.28399 14.3111 5.02389C14.3433 4.87879 14.3433 4.87879 14.3761 4.73075C14.669 3.71099 15.3018 3.21446 16.1778 2.66894C17.5698 1.91243 19.692 1.66883 21 2.66894Z" fill="#F0F3F9"/>
<path d="M42.1957 17.6339C43.3231 18.4257 44.1695 19.5207 44.4889 20.8805C44.7701 22.4691 44.5976 23.7065 43.75 25.0802C42.8678 26.3206 41.8093 26.9984 40.3667 27.4351C38.7961 27.5937 37.3573 27.4058 36.0889 26.3754C35.6222 25.8416 35.6222 25.8416 35.6222 25.4334C35.8789 25.4334 36.1356 25.4334 36.4 25.4334C36.4 25.3298 36.4 25.2262 36.4 25.1194C35.7327 25.0158 35.0653 24.9122 34.3778 24.8055C34.3008 24.5723 34.3008 24.5723 34.2222 24.3345C34.4532 24.2568 34.4532 24.2568 34.6889 24.1775C34.6985 23.9799 34.7081 23.7824 34.7181 23.5789C34.7235 23.4678 34.7289 23.3567 34.7345 23.2422C34.72 22.9058 34.72 22.9058 34.4586 22.6995C34.1164 22.3391 34.1495 22.0689 34.1444 21.5772C34.1829 20.2362 34.6828 19.2952 35.5736 18.3195C37.4793 16.5166 39.9617 16.3154 42.1957 17.6339ZM37.9556 18.2116C37.9556 18.3152 37.9556 18.4188 37.9556 18.5256C37.8016 18.5256 37.6476 18.5256 37.4889 18.5256C37.4761 18.6227 37.4632 18.7199 37.45 18.82C37.2951 19.2629 37.1213 19.2665 36.7111 19.4676C36.238 19.9472 36.238 19.9472 36.0889 20.5665C36.1916 20.5665 36.2942 20.5665 36.4 20.5665C36.3262 20.6507 36.2524 20.7349 36.1764 20.8217C35.8777 21.2799 35.7999 21.5888 35.7778 22.1365C35.8484 22.2531 35.9189 22.3697 35.9917 22.4898C36.3628 23.1236 36.3596 23.767 36.4 24.4915C36.708 24.4915 37.016 24.4915 37.3333 24.4915C37.3333 24.5951 37.3333 24.6987 37.3333 24.8055C38.3426 25.3566 39.1453 25.5202 40.2889 25.4334C40.3402 25.5889 40.3916 25.7443 40.4444 25.9044C40.8038 25.9562 41.1631 26.008 41.5333 26.0614C41.5333 25.8542 41.5333 25.647 41.5333 25.4334C41.79 25.3298 42.0467 25.2262 42.3111 25.1194C42.3111 25.0158 42.3111 24.9122 42.3111 24.8055C42.5678 24.8055 42.8244 24.8055 43.0889 24.8055C43.1897 24.6061 43.2901 24.4066 43.3903 24.2069C43.4462 24.0958 43.5022 23.9847 43.5598 23.8702C43.9923 22.9533 44.0328 21.8362 43.7786 20.8542C43.6513 20.5361 43.6513 20.5361 43.4 20.0956C43.339 19.9596 43.2781 19.8236 43.2153 19.6834C42.4819 18.7136 41.2898 18.2778 40.1333 18.0546C39.3799 17.9945 38.6852 18.0031 37.9556 18.2116Z" fill="#3D4756"/>
<path d="M10.4222 32.9693C10.4222 33.0729 10.4222 33.1765 10.4222 33.2833C10.5249 33.2833 10.6276 33.2833 10.7333 33.2833C10.7558 33.4031 10.7782 33.5229 10.8014 33.6463C10.8832 34.0811 10.8832 34.0811 11.0444 34.5392C11.1471 34.5392 11.2498 34.5392 11.3556 34.5392C11.5737 34.8606 11.5737 34.8606 11.8125 35.285C12.3262 36.3037 12.3262 36.3037 13.2222 36.8942C13.2222 36.7388 13.2222 36.5833 13.2222 36.4232C13.3249 36.4232 13.4276 36.4232 13.5333 36.4232C13.5197 36.8715 13.5031 37.3194 13.4847 37.7675C13.4812 37.8931 13.4777 38.0186 13.4741 38.148C13.4368 38.9852 13.3057 39.6062 12.9111 40.3481C12.5708 40.4953 12.5708 40.4953 12.2889 40.5051C12.4074 39.6282 12.4074 39.6282 12.6073 39.2774C12.8064 38.8179 12.7737 38.4711 12.7361 37.9735C12.7261 37.808 12.7161 37.6425 12.7057 37.4719C12.6708 37.3331 12.6359 37.1942 12.6 37.0512C12.3059 36.866 12.3059 36.866 11.9778 36.7372C11.7797 36.4594 11.7797 36.4594 11.6083 36.1387C11.3483 35.6894 11.1108 35.37 10.7042 35.0495C10.2667 34.6962 10.2667 34.6962 10.1585 34.3694C9.96307 34.0044 9.96307 34.0044 9.41901 33.956C9.19943 33.9412 8.97962 33.9297 8.75972 33.9211C8.65154 33.9125 8.54336 33.9039 8.4319 33.895C7.18252 33.8279 6.10856 34.4141 5.13333 35.1672C4.51179 35.891 4.42809 36.4428 4.35555 37.3652C4.31224 37.5643 4.31224 37.5643 4.26805 37.7675C4.17775 38.2753 4.16223 38.7346 4.2 39.2491C4.37795 39.5205 4.37795 39.5205 4.66666 39.7201C5.08949 40.1356 5.49048 40.5535 5.8625 41.0154C6.17621 41.4498 6.17621 41.4498 6.53333 41.6041C8.46097 41.7225 8.46097 41.7225 10.2667 41.1331C10.3437 40.9777 10.3437 40.9777 10.4222 40.8191C10.5666 40.8547 10.711 40.8903 10.8597 40.927C11.0233 40.9432 11.187 40.9594 11.3556 40.9761C11.6312 40.7635 11.6312 40.7635 11.8222 40.5051C11.9249 40.5051 12.0276 40.5051 12.1333 40.5051C12.2009 40.9708 12.2069 41.3148 11.9747 41.7323C11.2157 42.7094 10.2167 43.1329 9.02222 43.3311C7.37396 43.4891 5.92308 43.0915 4.63264 42.0266C3.39503 40.8406 2.94025 39.6315 2.8875 37.9245C2.93165 36.207 3.43671 35.1772 4.61015 33.9425C6.17805 32.47 8.43909 31.9685 10.4222 32.9693Z" fill="#0B182F"/>
<path d="M39.7092 34.0082C40.7999 34.8895 41.59 36.1165 41.8444 37.5222C41.9948 39.1968 41.6735 40.7509 40.6 42.0751C39.3903 43.3377 38.05 43.9709 36.3125 44.0081C34.8592 43.9944 33.6244 43.6476 32.5482 42.6289C32.2865 42.3032 32.2121 42.02 32.2 41.6041C32.431 41.5264 32.431 41.5264 32.6667 41.4471C32.6667 41.188 32.6667 40.929 32.6667 40.6621C32.5127 40.6103 32.3587 40.5585 32.2 40.5051C32.2032 40.3173 32.2064 40.1295 32.2097 39.936C32.2107 39.3779 32.1532 38.8558 32.0444 38.3072C32.5111 38.4642 32.5111 38.4642 32.7159 38.8131C33.0172 39.5062 33.3025 40.1639 33.4542 40.9074C33.5365 41.4476 33.5365 41.4476 33.8655 41.6219C35.0921 42.1006 36.6547 42.5776 37.9501 42.1254C38.2113 42.0042 38.4723 41.8827 38.7333 41.7611C38.8905 41.774 39.0478 41.787 39.2097 41.8003C39.7391 41.7549 39.8186 41.6776 40.1722 41.2999C40.9639 40.261 40.9674 38.9424 41.0667 37.6792C41.118 37.6792 41.1693 37.6792 41.2222 37.6792C41.2992 38.0677 41.2992 38.0677 41.3778 38.4642C41.3778 38.1533 41.3778 37.8425 41.3778 37.5222C41.2751 37.5222 41.1724 37.5222 41.0667 37.5222C40.9993 37.3506 40.9319 37.1789 40.8625 37.0021C40.6734 36.5551 40.4901 36.2822 40.1333 35.9522C40.0724 35.8292 40.0114 35.7061 39.9486 35.5793C39.492 34.9119 38.8476 34.4757 38.0561 34.3018C37.6743 34.265 37.2987 34.2498 36.9153 34.2449C36.7864 34.2396 36.6576 34.2344 36.5249 34.2289C35.883 34.2082 35.3179 34.2408 34.6889 34.3822C34.3246 34.3401 33.9611 34.2896 33.6 34.2253C33.7027 34.1734 33.8053 34.1216 33.9111 34.0683C33.9207 33.9711 33.9304 33.874 33.9403 33.7739C34.0667 33.4403 34.0667 33.4403 34.5625 33.1753C36.3187 32.4591 38.2183 32.9378 39.7092 34.0082Z" fill="#505564"/>
<path d="M38.4222 34.2253C39.1939 34.5293 39.651 34.9368 40.1431 35.599C40.2889 35.9522 40.2889 35.9522 40.2889 36.2662C40.3884 36.2986 40.4878 36.331 40.5903 36.3643C40.9111 36.5802 40.9111 36.5802 41.0278 37.0708C41.0406 37.2198 41.0534 37.3687 41.0667 37.5222C41.1693 37.5222 41.272 37.5222 41.3778 37.5222C41.4548 38.2216 41.4548 38.2216 41.5333 38.9351C41.4307 38.7797 41.328 38.6243 41.2222 38.4642C41.2012 38.6083 41.1801 38.7523 41.1584 38.9008C40.968 39.9966 40.789 40.901 39.9942 41.7065C39.4969 42.0278 39.0403 42.0561 38.4587 42.0542C38.0661 42.0482 38.0661 42.0482 37.6444 42.3891C36.2884 42.589 34.8018 42.241 33.6 41.6041C33.5487 41.6041 33.4973 41.6041 33.4444 41.6041C33.4216 41.4899 33.3987 41.3758 33.3752 41.2582C33.1322 40.1589 32.7769 39.2419 32.2322 38.2587C32.0351 37.8151 32.0056 37.531 32.0444 37.0512C32.1471 37.0512 32.2498 37.0512 32.3556 37.0512C32.4069 36.7403 32.4582 36.4295 32.5111 36.1092C32.6138 36.1092 32.7164 36.1092 32.8222 36.1092C32.9249 35.7984 33.0276 35.4875 33.1333 35.1672C33.236 35.1672 33.3387 35.1672 33.4444 35.1672C33.4573 35.0701 33.4701 34.9729 33.4833 34.8729C33.6 34.5392 33.6 34.5392 33.8625 34.343C34.3058 34.1979 34.692 34.2151 35.1556 34.2253C36.0273 33.7853 37.4861 34.0669 38.4222 34.2253ZM34.0667 34.6962C34.0153 34.9553 33.964 35.2143 33.9111 35.4812C33.7058 35.533 33.5004 35.5848 33.2889 35.6382C33.3628 36.1028 33.4374 36.5672 33.5125 37.0316C33.5335 37.1637 33.5544 37.2959 33.576 37.432C33.5966 37.5585 33.6171 37.685 33.6383 37.8153C33.657 37.9321 33.6758 38.0488 33.6951 38.1691C33.7451 38.4765 33.7451 38.4765 33.9111 38.7782C33.9111 38.9336 33.9111 39.089 33.9111 39.2491C34.1164 39.301 34.3218 39.3528 34.5333 39.4061C34.5333 39.717 34.5333 40.0278 34.5333 40.3481C35.4999 40.7959 36.2643 41.0877 37.3333 40.9761C37.543 40.8762 37.7512 40.7726 37.9556 40.6621C38.1047 40.7058 38.1047 40.7058 38.2569 40.7504C38.5951 40.8556 38.5951 40.8556 38.9569 40.6523C39.6608 40.1271 39.6608 40.1271 40.1333 39.4061C40.149 38.9626 40.102 38.5576 40.0367 38.1189C39.9821 37.7113 39.9876 37.3614 40.0167 36.9531C40.0142 36.2633 39.8687 35.7192 39.5117 35.128C38.8371 34.5334 37.8705 34.6897 37.0222 34.6962C36.7366 34.6712 36.4513 34.6424 36.1667 34.6079C35.1044 34.4948 35.1044 34.4948 34.0667 34.6962Z" fill="#B7D0EA"/>
<path d="M21.9333 20.2526C22.0986 20.5469 22.0986 20.5469 22.2444 20.8805C22.1931 20.9842 22.1418 21.0878 22.0889 21.1945C22.1916 21.2464 22.2942 21.2982 22.4 21.3515C22.2973 21.5588 22.1947 21.766 22.0889 21.9795C23.214 22.1158 24.0501 21.7105 25.0481 21.2436C25.5111 21.0375 25.5111 21.0375 25.8222 21.0375C25.7452 20.7267 25.7452 20.7267 25.6667 20.4096C25.872 20.5132 26.0773 20.6168 26.2889 20.7236C26.2889 20.9308 26.2889 21.138 26.2889 21.3515C26.1784 21.3951 26.0679 21.4386 25.9541 21.4834C25.8111 21.5403 25.6681 21.5971 25.5208 21.6557C25.3783 21.7122 25.2357 21.7686 25.0888 21.8268C24.7451 21.9481 24.7451 21.9481 24.5778 22.1365C24.3371 22.1511 24.3371 22.1511 24.0917 22.166C23.3971 22.3129 23.1258 22.5486 22.6303 23.035C22.4 23.2355 22.4 23.2355 22.0889 23.2355C22.0889 23.5464 22.0889 23.8572 22.0889 24.1775C21.9926 24.184 21.8964 24.1904 21.7972 24.1971C21.432 24.3078 21.432 24.3078 21.2722 24.6975C21.0805 25.6491 21.0039 26.7013 21.3111 27.6314C21.5171 27.7389 21.7247 27.8431 21.9333 27.9454C22.2833 28.2594 22.2833 28.2594 22.5556 28.5734C22.5556 28.677 22.5556 28.7806 22.5556 28.8874C22.6582 28.8874 22.7609 28.8874 22.8667 28.8874C22.918 29.1464 22.9693 29.4055 23.0222 29.6724C23.2276 29.7242 23.4329 29.776 23.6444 29.8294C23.6444 29.933 23.6444 30.0366 23.6444 30.1433C24.6198 30.247 25.5951 30.3506 26.6 30.4573C26.6 30.3537 26.6 30.2501 26.6 30.1433C26.908 30.0656 26.908 30.0656 27.2222 29.9864C27.1709 30.2972 27.1196 30.6081 27.0667 30.9283C26.9127 30.9283 26.7587 30.9283 26.6 30.9283C26.7027 31.1874 26.8053 31.4464 26.9111 31.7133C26.0796 32.2728 24.9703 32.1319 24.0108 31.9488C23.2214 31.7099 22.6711 31.3589 22.0889 30.7713C22.0889 30.6677 22.0889 30.5641 22.0889 30.4573C21.967 30.4152 21.8451 30.3732 21.7194 30.3298C21.3111 30.1433 21.3111 30.1433 21 29.6724C20.811 29.151 20.666 28.6161 20.5139 28.0828C20.4708 27.9395 20.4277 27.7962 20.3832 27.6486C19.9075 25.9882 19.9532 24.514 20.6755 22.9221C20.9302 22.4864 21.1021 22.3107 21.5833 22.1561C21.6988 22.1497 21.8143 22.1432 21.9333 22.1365C21.882 22.0329 21.8307 21.9293 21.7778 21.8225C21.763 21.5841 21.7576 21.3451 21.7583 21.1062C21.7579 20.9797 21.7575 20.8533 21.7571 20.7229C21.7778 20.4096 21.7778 20.4096 21.9333 20.2526Z" fill="#0A101E"/>
<path d="M26.4444 20.7235C27.6447 20.6226 28.4451 21.0483 29.3611 21.8127C29.7052 22.1186 29.9106 22.3608 30.1681 22.7547C30.4752 23.1395 30.4752 23.1395 31.0139 23.0883C31.9938 22.8965 32.9564 22.5845 33.9111 22.2935C33.9624 22.0345 34.0138 21.7754 34.0667 21.5085C34.118 21.5085 34.1693 21.5085 34.2222 21.5085C34.2671 21.6834 34.3121 21.8582 34.3583 22.0384C34.4855 22.608 34.4855 22.608 34.8444 22.9215C34.8912 23.2159 34.8912 23.2159 34.8931 23.5495C34.8957 23.6596 34.8983 23.7697 34.901 23.8831C34.8823 23.9802 34.8637 24.0774 34.8444 24.1775C34.6904 24.2811 34.5364 24.3847 34.3778 24.4915C34.3778 24.5951 34.3778 24.6987 34.3778 24.8055C34.4716 24.8018 34.5655 24.7982 34.6622 24.7944C34.8486 24.7902 34.8486 24.7902 35.0389 24.7858C35.223 24.7804 35.223 24.7804 35.4108 24.7748C35.81 24.8082 36.0565 24.9175 36.4 25.1194C36.4 25.2231 36.4 25.3267 36.4 25.4334C36.1433 25.4334 35.8867 25.4334 35.6222 25.4334C35.7249 25.6407 35.8276 25.8479 35.9333 26.0614C35.4095 25.8427 35.1577 25.5937 34.8444 25.1194C33.6249 25.1933 32.5546 25.6265 31.4222 26.0614C31.4016 26.192 31.3809 26.3225 31.3596 26.457C31.3322 26.6276 31.3047 26.7982 31.2764 26.974C31.2493 27.1434 31.2222 27.3128 31.1944 27.4873C31.1111 27.9454 31.1111 27.9454 30.9556 28.4164C30.393 28.6784 29.8347 28.5195 29.2444 28.4164C29.3984 28.3387 29.3984 28.3387 29.5556 28.2594C29.7125 27.9821 29.7125 27.9821 29.8667 27.6314C29.9501 27.5019 30.0335 27.3724 30.1194 27.2389C30.4816 26.3086 30.5271 25.3248 30.1747 24.3805C29.8634 23.7927 29.6456 23.4531 29.0889 23.0785C29.0889 22.9749 29.0889 22.8713 29.0889 22.7645C29.0087 22.7289 28.9285 22.6933 28.8458 22.6566C28.5137 22.4761 28.234 22.2837 27.9319 22.058C27.5057 21.7437 27.1046 21.5213 26.6 21.3515C26.7027 21.2997 26.8053 21.2479 26.9111 21.1945C26.9111 21.0909 26.9111 20.9873 26.9111 20.8805C26.7571 20.8287 26.6031 20.7769 26.4444 20.7235Z" fill="#3B506F"/>
<path d="M21.1556 12.4027C21.2069 12.5582 21.2582 12.7136 21.3111 12.8737C21.4651 12.9255 21.6191 12.9773 21.7778 13.0307C21.8291 13.3934 21.8804 13.756 21.9333 14.1297C22.036 14.1297 22.1387 14.1297 22.2444 14.1297C22.2579 14.2212 22.2713 14.3126 22.2852 14.4069C22.4532 15.3967 22.7591 16.2622 23.1589 17.1807C23.3333 17.5836 23.3333 17.5836 23.4889 18.0546C23.5916 18.0546 23.6942 18.0546 23.8 18.0546C24.1719 18.7204 24.2751 19.3438 24.1111 20.0956C23.6444 20.4979 23.6444 20.4979 23.1778 20.7235C24.0776 20.5318 24.0776 20.5318 24.7333 19.9386C24.8445 19.6083 24.8445 19.6083 24.8889 19.3106C24.9819 19.4336 25.075 19.5567 25.1708 19.6834C25.4972 20.1184 25.4972 20.1184 25.9778 20.4096C25.9322 20.7043 25.9322 20.7043 25.8222 21.0375C25.4274 21.2727 25.0644 21.4569 24.6458 21.6361C24.5383 21.687 24.4307 21.7379 24.3198 21.7903C23.5044 22.1485 22.9593 22.1564 22.0889 21.9795C22.121 21.8953 22.1531 21.8111 22.1861 21.7244C22.2649 21.2208 22.1128 20.8785 21.9333 20.4096C21.9333 20.9794 21.9333 21.5493 21.9333 22.1365C21.6253 22.2142 21.6253 22.2142 21.3111 22.2935C21.3881 20.8947 21.3881 20.8947 21.4667 19.4676C21.672 19.5194 21.8773 19.5712 22.0889 19.6246C22.0622 19.5321 22.0356 19.4396 22.0082 19.3443C21.8855 18.9178 21.7636 18.4911 21.6417 18.0644C21.5998 17.919 21.5579 17.7736 21.5147 17.6238C21.2588 16.7262 21.0353 15.8285 20.8444 14.9147C20.8092 14.7592 20.7739 14.6038 20.7375 14.4437C20.6722 13.8106 20.6955 13.1805 20.8444 12.5597C20.9471 12.5079 21.0498 12.4561 21.1556 12.4027Z" fill="#DCE6F2"/>
<path d="M42.3385 18.8604C43.0932 19.353 43.5309 19.9854 43.8016 20.8585C44.0591 22.1891 43.8942 23.3169 43.2444 24.4915C43.1674 24.6469 43.1674 24.6469 43.0889 24.8055C42.8322 24.8055 42.5756 24.8055 42.3111 24.8055C42.2598 24.9609 42.2084 25.1163 42.1556 25.2764C41.8347 25.3844 41.8347 25.3844 41.5333 25.4334C41.5333 25.6407 41.5333 25.8479 41.5333 26.0614C41.174 26.0096 40.8147 25.9578 40.4444 25.9044C40.3931 25.749 40.3418 25.5936 40.2889 25.4334C40.1928 25.4407 40.0968 25.448 39.9978 25.4555C38.9609 25.5001 38.2431 25.3023 37.3333 24.8055C37.3333 24.7018 37.3333 24.5982 37.3333 24.4915C37.0253 24.4915 36.7173 24.4915 36.4 24.4915C36.4 24.077 36.4 23.6625 36.4 23.2355C36.5027 23.3909 36.6053 23.5463 36.7111 23.7065C37.1724 23.8617 37.5071 23.8917 37.9896 23.9076C38.2263 23.9164 38.2263 23.9164 38.4678 23.9254C38.6324 23.9309 38.797 23.9363 38.9667 23.942C39.2924 23.9528 39.6181 23.9642 39.9437 23.9763C40.0882 23.9811 40.2327 23.9858 40.3816 23.9907C40.7556 24.0205 40.7556 24.0205 41.2222 24.1775C41.2992 24.022 41.2992 24.022 41.3778 23.8635C41.6377 23.8732 41.6377 23.8732 41.9028 23.8831C42.4735 23.928 42.4735 23.928 42.7778 23.5495C42.9318 23.5495 43.0858 23.5495 43.2444 23.5495C43.1732 23.0048 43.1058 22.5017 42.9333 21.9795C43.0103 21.8338 43.0103 21.8338 43.0889 21.6851C43.2996 21.2332 43.2445 21.0379 43.0889 20.5665C42.8873 20.2487 42.6802 19.9344 42.4667 19.6246C42.3897 19.3914 42.3897 19.3914 42.3111 19.1536C41.7648 18.9605 41.7648 18.9605 41.2222 18.8396C41.1709 18.9432 41.1196 19.0468 41.0667 19.1536C40.9319 19.1471 40.7972 19.1406 40.6583 19.134C40.1114 19.1544 39.7136 19.2873 39.2 19.4676C38.9947 19.4676 38.7893 19.4676 38.5778 19.4676C38.2628 19.671 37.9514 19.8801 37.6444 20.0956C37.5418 20.0956 37.4391 20.0956 37.3333 20.0956C37.2884 20.238 37.2435 20.3805 37.1972 20.5273C37.0582 20.9327 36.9052 21.2868 36.7111 21.6655C36.6598 21.821 36.6084 21.9764 36.5556 22.1365C36.4016 22.1365 36.2476 22.1365 36.0889 22.1365C36.0376 22.2401 35.9862 22.3438 35.9333 22.4505C35.7808 22.0349 35.7691 21.8501 35.9042 21.4202C36.0889 21.0375 36.0889 21.0375 36.4 20.5665C36.2973 20.5665 36.1947 20.5665 36.0889 20.5665C36.2921 19.9514 36.5293 19.5733 37.0222 19.1536C37.1249 19.1536 37.2276 19.1536 37.3333 19.1536C37.3847 18.9463 37.436 18.7391 37.4889 18.5256C37.6429 18.5256 37.7969 18.5256 37.9556 18.5256C37.9556 18.422 37.9556 18.3184 37.9556 18.2116C39.4877 17.7793 40.9481 18.1299 42.3385 18.8604Z" fill="#C5DBF1"/>
<path d="M10.2667 34.2253C10.5194 34.5883 10.5194 34.5883 10.7333 35.0102C10.8873 35.1365 11.0413 35.2628 11.2 35.3929C11.6917 35.8168 11.8542 36.1609 12.1333 36.7372C12.2374 36.7801 12.3415 36.823 12.4487 36.8672C12.7556 37.0512 12.7556 37.0512 12.8668 37.4443C12.9445 38.5227 12.884 39.3557 12.4444 40.3481C12.5984 40.3481 12.7524 40.3481 12.9111 40.3481C12.9304 40.2251 12.9496 40.102 12.9694 39.9753C13.0667 39.5631 13.0667 39.5631 13.3778 39.2491C13.1834 40.4603 12.5678 41.4265 11.6667 42.2321C11.5127 42.1544 11.5127 42.1544 11.3556 42.0751C11.455 41.9909 11.5545 41.9067 11.6569 41.82C12.0377 41.3774 12.0816 41.0799 12.1333 40.5051C12.0243 40.6152 11.9152 40.7253 11.8028 40.8387C11.6552 40.9359 11.5076 41.033 11.3556 41.1331C10.8403 41.0154 10.8403 41.0154 10.4222 40.8191C10.3709 40.9745 10.3196 41.13 10.2667 41.2901C9.45061 41.7439 8.67081 41.8173 7.74861 41.8396C7.64142 41.8444 7.53423 41.8492 7.42379 41.8541C6.82296 41.8545 6.56754 41.7904 6.10495 41.3937C5.98965 41.2559 5.87435 41.1181 5.75556 40.9761C5.47178 40.7365 5.18374 40.5044 4.89271 40.2739C4.66667 40.0341 4.66667 40.0341 4.58646 39.7011C4.54916 39.5551 4.54916 39.5551 4.51111 39.4061C4.35711 39.3543 4.20311 39.3025 4.04444 39.2491C4.03167 38.5915 4.06059 38.0061 4.2 37.3652C4.20962 37.1677 4.21925 36.9701 4.22917 36.7666C4.33209 35.9555 4.71517 35.416 5.28889 34.8532C6.91763 33.6598 8.37015 33.5536 10.2667 34.2253ZM6.06667 34.6962C5.91587 34.7578 5.76508 34.8193 5.60972 34.8827C5.22283 35.1596 5.22283 35.1596 5.24028 35.7462C5.25632 35.9178 5.27236 36.0894 5.28889 36.2662C5.13489 36.2662 4.98089 36.2662 4.82222 36.2662C4.82222 36.8879 4.82222 37.5096 4.82222 38.1502C4.71955 38.202 4.61689 38.2538 4.51111 38.3072C4.40914 38.7039 4.40914 38.7039 4.35555 39.0921C4.71489 39.0921 5.07422 39.0921 5.44444 39.0921C5.46369 39.2184 5.46369 39.2184 5.48333 39.3473C5.68506 39.992 5.98904 40.5142 6.5625 40.878C7.78674 41.1526 8.92636 40.9104 10.1129 40.5732C10.4222 40.5051 10.4222 40.5051 11.0444 40.5051C11.0444 40.4015 11.0444 40.2979 11.0444 40.1911C11.1471 40.1911 11.2498 40.1911 11.3556 40.1911C11.4069 39.8803 11.4582 39.5694 11.5111 39.2491C11.6138 39.2491 11.7164 39.2491 11.8222 39.2491C11.8222 38.9901 11.8222 38.7311 11.8222 38.4642C11.7196 38.4642 11.6169 38.4642 11.5111 38.4642C11.5129 38.3205 11.5147 38.1768 11.5166 38.0287C11.518 37.8421 11.5194 37.6556 11.5208 37.4633C11.5226 37.2775 11.5244 37.0917 11.5263 36.9003C11.5445 36.4359 11.5445 36.4359 11.3556 36.1092C11.2529 36.1092 11.1502 36.1092 11.0444 36.1092C11.0444 35.902 11.0444 35.6947 11.0444 35.4812C10.7878 35.4812 10.5311 35.4812 10.2667 35.4812C10.2667 35.274 10.2667 35.0668 10.2667 34.8532C9.95867 34.905 9.65067 34.9569 9.33333 35.0102C9.33333 34.8548 9.33333 34.6994 9.33333 34.5392C7.66753 34.3289 7.66753 34.3289 6.06667 34.6962Z" fill="#97B5D4"/>
<path d="M22.0889 10.0478C22.2429 10.0996 22.3969 10.1514 22.5556 10.2048C22.5042 10.2825 22.4529 10.3602 22.4 10.4403C21.6875 12.2381 22.7989 14.8227 23.4889 16.4846C23.7523 17.0404 24.0279 17.5896 24.3166 18.1324C24.6305 18.7334 24.8528 19.2557 24.8889 19.9386C24.5741 20.3997 24.331 20.6679 23.7818 20.807C23.4782 20.8462 23.1723 20.8649 22.8667 20.8805C23.6056 20.2722 23.6056 20.2722 23.9556 20.0956C23.9598 19.8732 23.9628 19.6508 23.9653 19.4283C23.9671 19.3045 23.9689 19.1806 23.9707 19.053C23.9562 18.6972 23.8984 18.3955 23.8 18.0546C23.6973 18.0546 23.5947 18.0546 23.4889 18.0546C23.0464 17.4456 22.8028 16.7453 22.5349 16.0462C22.4063 15.7007 22.4063 15.7007 22.2444 15.3857C22.2236 14.9661 22.2377 14.5501 22.2444 14.1297C22.1418 14.1297 22.0391 14.1297 21.9333 14.1297C21.8916 13.9581 21.8499 13.7865 21.8069 13.6096C21.6118 12.9796 21.6118 12.9796 21.1556 12.5597C21.0529 12.5597 20.9502 12.5597 20.8444 12.5597C20.836 12.8868 20.83 13.2139 20.825 13.541C20.8214 13.7231 20.8178 13.9052 20.8141 14.0929C20.8443 14.5986 20.9261 14.7956 21.1556 15.2287C21.2382 15.5998 21.3118 15.973 21.3792 16.3473C21.5373 17.1996 21.7326 18.0234 22.0032 18.847C22.0889 19.1536 22.0889 19.1536 22.0889 19.6246C21.7917 19.5761 21.7917 19.5761 21.4667 19.4676C21.1912 18.8752 21.0197 18.2814 20.842 17.6523C20.3949 16.0971 19.7846 14.7434 18.9778 13.3447C18.896 13.1988 18.8141 13.0529 18.7299 12.9025C18.3706 12.3395 17.9287 12.1369 17.2958 11.9808C17.1835 11.9646 17.0712 11.9484 16.9556 11.9317C16.9556 11.8799 16.9556 11.8281 16.9556 11.7747C17.1059 11.7689 17.2563 11.763 17.4113 11.757C19.141 11.6688 20.5656 11.5072 21.9333 10.3618C21.9847 10.2582 22.036 10.1545 22.0889 10.0478Z" fill="#B7CBE5"/>
<path d="M42.1938 17.6431C42.4469 17.8235 42.6914 18.0162 42.9333 18.2116C42.4916 18.2116 42.1186 18.1484 41.6889 18.0546C41.6889 18.21 41.6889 18.3655 41.6889 18.5256C40.8045 18.3836 40.8045 18.3836 40.4833 18.2852C39.988 18.181 39.5108 18.1971 39.0056 18.2018C38.7108 18.2039 38.7108 18.2039 38.4101 18.2061C38.2601 18.2079 38.1101 18.2097 37.9556 18.2116C37.9556 18.3152 37.9556 18.4188 37.9556 18.5256C37.8016 18.5256 37.6476 18.5256 37.4889 18.5256C37.4745 18.6616 37.4745 18.6616 37.4597 18.8003C37.2839 19.2917 36.9584 19.4621 36.5556 19.7816C36.2772 20.1927 36.2772 20.1927 36.0889 20.5665C36.1916 20.5665 36.2942 20.5665 36.4 20.5665C36.3278 20.6928 36.3278 20.6928 36.2542 20.8217C36.0531 21.2753 35.9635 21.6392 35.9333 22.1365C36.0071 22.2531 36.0809 22.3697 36.1569 22.4898C36.521 23.1363 36.4378 23.7638 36.4 24.4915C36.092 24.4915 35.784 24.4915 35.4667 24.4915C35.4363 24.1695 35.4059 23.8475 35.3755 23.5256C35.3436 23.382 35.3436 23.382 35.3111 23.2355C35.2084 23.1837 35.1058 23.1319 35 23.0785C35 23.3375 35 23.5966 35 23.8635C34.9487 23.8635 34.8973 23.8635 34.8444 23.8635C34.7995 23.6886 34.7546 23.5138 34.7083 23.3336C34.5812 22.764 34.5812 22.764 34.2222 22.4505C34.0269 21.1389 34.2556 20.0805 35 18.9966C36.8089 16.6932 39.6846 16.0884 42.1938 17.6431Z" fill="#40444F"/>
<path d="M13.0667 4.7099C13.1693 4.86533 13.272 5.02075 13.3778 5.18089C13.4804 5.12908 13.5831 5.07727 13.6889 5.02389C13.6376 5.43836 13.5862 5.85284 13.5333 6.27987C13.636 6.33167 13.7387 6.38348 13.8444 6.43686C13.8958 6.17782 13.9471 5.91877 14 5.65188C14.2053 5.60007 14.4107 5.54826 14.6222 5.49488C14.6222 5.65031 14.6222 5.80574 14.6222 5.96587C14.7249 5.96587 14.8276 5.96587 14.9333 5.96587C14.882 6.53577 14.8307 7.10567 14.7778 7.69284C15.0344 7.69284 15.2911 7.69284 15.5556 7.69284C15.9513 7.90424 16.1682 8.14662 16.4889 8.47782C16.4889 8.68505 16.4889 8.89229 16.4889 9.1058C16.6429 9.1058 16.7969 9.1058 16.9556 9.1058C16.9556 9.20942 16.9556 9.31304 16.9556 9.4198C17.3316 9.40186 17.7074 9.38196 18.0833 9.36092C18.1894 9.35607 18.2955 9.35121 18.4048 9.34621C18.9842 9.31214 19.4073 9.23882 19.9111 8.94881C20.1197 8.99633 20.3271 9.04903 20.5333 9.1058C20.9505 9.04526 20.9505 9.04526 21.3111 8.94881C21.4138 8.63795 21.5164 8.3271 21.6222 8.00683C21.7762 8.00683 21.9302 8.00683 22.0889 8.00683C22.0889 7.48874 22.0889 6.97065 22.0889 6.43686C22.1916 6.43686 22.2942 6.43686 22.4 6.43686C22.4 5.97058 22.4 5.5043 22.4 5.02389C22.4513 5.02389 22.5027 5.02389 22.5556 5.02389C22.5748 5.17608 22.5941 5.32827 22.6139 5.48507C22.646 5.64374 22.6781 5.8024 22.7111 5.96587C22.8651 6.04359 22.8651 6.04359 23.0222 6.12287C23.153 7.44255 22.7292 8.28308 22.0889 9.4198C21.9862 9.4198 21.8836 9.4198 21.7778 9.4198C21.7778 9.52342 21.7778 9.62703 21.7778 9.73379C21.2604 9.95757 20.7743 10.0994 20.2222 10.2048C20.0682 10.2825 20.0682 10.2825 19.9111 10.3618C19.5105 10.3815 19.1159 10.3908 18.7153 10.3912C18.553 10.3941 18.553 10.3941 18.3875 10.397C17.0319 10.4009 15.8345 9.97289 14.7778 9.1058C14.6028 8.57594 14.6028 8.57594 14.6222 8.16383C14.4682 8.16383 14.3142 8.16383 14.1556 8.16383C14.0016 7.74935 13.8476 7.33488 13.6889 6.90785C13.5349 6.95966 13.3809 7.01147 13.2222 7.06485C13.2923 7.31438 13.2923 7.31438 13.3638 7.56895C13.4236 7.78685 13.4834 8.00477 13.5431 8.2227C13.574 8.33239 13.605 8.44208 13.6369 8.55509C13.8621 9.38423 13.8621 9.38423 13.6889 9.73379C12.8604 8.34025 12.5104 7.08246 12.826 5.44276C12.896 5.19527 12.9795 4.95175 13.0667 4.7099Z" fill="#355994"/>
<path d="M19.4833 29.0934C20.0264 29.2305 20.2219 29.3578 20.5333 29.8294C20.6208 30.3887 20.6208 30.3887 20.5333 30.9283C20.1853 31.2445 19.8314 31.3711 19.3958 31.533C18.5816 31.8412 17.985 32.1508 17.3487 32.7522C17.0394 33.0348 16.6927 33.2287 16.3333 33.4403C16.2531 33.5245 16.1729 33.6087 16.0903 33.6954C15.8667 33.9113 15.8667 33.9113 15.575 33.9701C15.1987 34.0509 15.1987 34.0509 14.8847 34.4608C14.379 34.9355 14.0549 34.97 13.3778 35.0102C13.3008 34.7771 13.3008 34.7771 13.2222 34.5392C13.0169 34.5392 12.8116 34.5392 12.6 34.5392C12.6 34.6429 12.6 34.7465 12.6 34.8532C12.3947 34.9569 12.1893 35.0605 11.9778 35.1672C11.9264 34.96 11.8751 34.7528 11.8222 34.5392C11.9249 34.5392 12.0276 34.5392 12.1333 34.5392C12.1333 34.4356 12.1333 34.332 12.1333 34.2253C12.2424 34.1961 12.3515 34.167 12.4639 34.1369C12.9175 33.908 13.049 33.7643 13.3486 33.3716C13.7812 32.8258 14.1466 32.6593 14.7972 32.4578C15.2541 32.2753 15.5276 31.9073 15.8667 31.5563C16.2296 31.3993 16.5926 31.2423 16.9556 31.0853C17.3477 30.7289 17.3477 30.7289 17.7333 30.3003C18.7777 29.2441 18.7777 29.2441 19.4833 29.0934Z" fill="#ECF4FA"/>
<path d="M9.33333 34.5392C9.33333 34.6947 9.33333 34.8501 9.33333 35.0102C9.64133 34.9584 9.94933 34.9066 10.2667 34.8532C10.2667 35.0605 10.2667 35.2677 10.2667 35.4812C10.5233 35.4812 10.78 35.4812 11.0444 35.4812C11.0444 35.6885 11.0444 35.8957 11.0444 36.1092C11.1471 36.1092 11.2498 36.1092 11.3556 36.1092C11.5799 36.562 11.5257 36.9597 11.5208 37.4633C11.5194 37.6499 11.518 37.8365 11.5166 38.0287C11.5148 38.1724 11.513 38.3161 11.5111 38.4642C11.6138 38.4642 11.7164 38.4642 11.8222 38.4642C11.8222 38.7232 11.8222 38.9822 11.8222 39.2491C11.7196 39.2491 11.6169 39.2491 11.5111 39.2491C11.4598 39.56 11.4084 39.8708 11.3556 40.1911C11.2529 40.1911 11.1502 40.1911 11.0444 40.1911C11.0444 40.2947 11.0444 40.3984 11.0444 40.5051C10.8744 40.4986 10.7044 40.4922 10.5292 40.4855C9.94172 40.4548 9.94172 40.4548 9.48889 40.8191C8.48136 41.0225 7.13674 41.2423 6.22222 40.6621C5.83588 40.1639 5.54077 39.7241 5.44444 39.0921C5.08511 39.0921 4.72577 39.0921 4.35555 39.0921C4.41389 38.7095 4.41389 38.7095 4.51111 38.3072C4.61377 38.2553 4.71644 38.2035 4.82222 38.1502C4.82222 37.5285 4.82222 36.9067 4.82222 36.2662C4.97622 36.2662 5.13022 36.2662 5.28889 36.2662C5.27284 36.0946 5.2568 35.923 5.24027 35.7462C5.28889 35.1672 5.28889 35.1672 5.60972 34.8827C5.76051 34.8211 5.9113 34.7596 6.06666 34.6962C6.21746 34.6315 6.36825 34.5667 6.52361 34.5C7.42827 34.2513 8.41515 34.4441 9.33333 34.5392ZM6.84444 35.3242C6.58665 35.3835 6.32737 35.4368 6.06666 35.4812C6.03659 35.6063 6.00651 35.7314 5.97552 35.8602C5.77402 36.6878 5.56805 37.5022 5.28889 38.3072C5.23448 38.5158 5.1814 38.7249 5.13333 38.9351C5.39 38.9351 5.64666 38.9351 5.91111 38.9351C5.92715 39.0517 5.94319 39.1683 5.95972 39.2884C6.08154 39.7802 6.1705 39.9967 6.53333 40.3481C6.95038 40.4035 7.2953 40.422 7.70972 40.407C7.86958 40.4067 7.86958 40.4067 8.03268 40.4064C8.67625 40.409 8.67625 40.409 9.17777 40.0341C9.35423 39.9856 9.53069 39.937 9.7125 39.8869C10.3379 39.7137 10.3379 39.7137 10.7333 39.2491C10.7723 38.8369 10.7723 38.8369 10.7333 38.4642C10.836 38.4642 10.9387 38.4642 11.0444 38.4642C11.0444 38.3605 11.0444 38.2569 11.0444 38.1502C10.968 38.086 10.8916 38.0219 10.8129 37.9558C10.4677 37.5498 10.5318 37.2324 10.5486 36.7078C10.5549 36.4518 10.5549 36.4518 10.5614 36.1908C10.5668 36.0602 10.5722 35.9297 10.5778 35.7952C9.98816 35.4608 9.54219 35.455 8.86666 35.4812C8.918 35.3258 8.96933 35.1704 9.02222 35.0102C8.13029 34.8475 7.60985 34.7663 6.84444 35.3242Z" fill="#CDDDF1"/>
<path d="M32.0444 38.3072C32.5111 38.4642 32.5111 38.4642 32.7159 38.8131C33.0172 39.5062 33.3025 40.1639 33.4542 40.9074C33.5365 41.4476 33.5365 41.4476 33.8655 41.6219C35.2339 42.1559 36.8129 42.5938 38.2083 41.9868C38.8918 41.693 39.2584 41.778 39.9778 41.9181C39.7185 42.1797 39.4593 42.4414 39.2 42.7031C39.0941 42.8196 38.9883 42.9362 38.8792 43.0563C38.5631 43.3444 38.3718 43.428 37.9556 43.488C37.9556 43.5917 37.9556 43.6953 37.9556 43.802C36.4655 44.2565 34.8087 44.054 33.4444 43.3311C32.8519 42.9433 32.4322 42.6263 32.2097 41.9377C32.2065 41.8276 32.2033 41.7175 32.2 41.6041C32.354 41.5523 32.508 41.5005 32.6667 41.4471C32.6667 41.188 32.6667 40.929 32.6667 40.6621C32.5127 40.6103 32.3587 40.5585 32.2 40.5051C32.2032 40.3173 32.2064 40.1295 32.2097 39.936C32.2107 39.3779 32.1532 38.8558 32.0444 38.3072Z" fill="#050E1D"/>
<path d="M13.8444 6.75085C13.9471 7.21713 14.0498 7.68341 14.1556 8.16382C14.3096 8.16382 14.4636 8.16382 14.6222 8.16382C14.6703 8.29982 14.7185 8.43582 14.7681 8.57594C15.1987 9.28717 15.7507 9.68297 16.4889 10.0478C17.249 10.2311 18.0061 10.2335 18.7833 10.2342C18.9026 10.2361 19.022 10.2381 19.1449 10.24C19.4524 10.2409 19.7598 10.2241 20.0667 10.2048C20.1693 10.1012 20.272 9.99754 20.3778 9.89079C20.9417 9.94966 20.9417 9.94966 21.4667 10.0478C21.525 10.401 21.525 10.401 21.4667 10.8328C20.1664 11.9811 18.2958 11.9067 16.6649 11.8128C15.9561 11.7314 15.4742 11.4367 14.9333 10.9898C14.8319 10.9252 14.7304 10.8606 14.6259 10.7941C13.8163 10.2275 13.6451 9.57454 13.4537 8.62316C13.4161 8.39579 13.4161 8.39579 13.3778 8.16382C13.3575 8.043 13.3373 7.92218 13.3164 7.7977C13.2796 7.5542 13.2498 7.3096 13.2222 7.06485C13.6889 6.75085 13.6889 6.75085 13.8444 6.75085Z" fill="#090F1D"/>
<path d="M21 2.66894C21 2.77256 21 2.87618 21 2.98293C21.0936 2.99649 21.1873 3.01005 21.2838 3.02402C21.7184 3.17287 21.8221 3.34795 22.0597 3.73848C22.1281 3.84635 22.1965 3.95422 22.2669 4.06535C22.4248 4.4576 22.3863 4.63304 22.2444 5.02389C22.1825 4.9142 22.1205 4.80451 22.0567 4.6915C21.9743 4.54862 21.8919 4.40574 21.8069 4.25853C21.6851 4.04543 21.6851 4.04543 21.5609 3.82802C21.1761 3.25172 20.7832 3.10143 20.1347 2.97312C19.7649 2.89896 19.4711 2.83938 19.1333 2.66894C19.1333 2.56532 19.1333 2.46171 19.1333 2.35495C18.7765 2.39068 18.4201 2.43074 18.0639 2.4727C17.8654 2.49455 17.6669 2.51641 17.4623 2.53893C16.942 2.60964 16.942 2.60964 16.7599 2.98539C16.7218 3.0882 16.6837 3.191 16.6444 3.29693C16.4904 3.34874 16.3364 3.40055 16.1778 3.45392C16.0238 3.68706 16.0238 3.68706 15.8667 3.92491C15.6613 3.92491 15.456 3.92491 15.2444 3.92491C15.2665 4.24876 15.2894 4.57256 15.3125 4.89633C15.3251 5.07665 15.3378 5.25697 15.3508 5.44275C15.3898 5.95394 15.3898 5.95395 15.4875 6.40252C15.562 6.7838 15.5206 7.01372 15.4 7.37884C15.708 7.37884 16.016 7.37884 16.3333 7.37884C16.3783 7.50512 16.4232 7.63141 16.4694 7.76152C16.6029 8.18465 16.6029 8.18465 16.9556 8.32082C17.1736 8.33391 17.3922 8.33767 17.6106 8.33615C17.7401 8.33565 17.8697 8.33514 18.0031 8.33462C18.1387 8.3333 18.2742 8.33199 18.4139 8.33063C18.6154 8.32957 18.6154 8.32957 18.821 8.32849C19.072 8.32712 19.3231 8.32543 19.5741 8.32331C20.0494 8.3198 20.5247 8.32082 21 8.32082C21.0513 8.11358 21.1027 7.90635 21.1556 7.69283C21.4636 7.61512 21.4636 7.61512 21.7778 7.53584C21.7778 7.38041 21.7778 7.22498 21.7778 7.06485C21.8804 7.06485 21.9831 7.06485 22.0889 7.06485C22.0889 7.16846 22.0889 7.27208 22.0889 7.37884C22.2429 7.45655 22.2429 7.45655 22.4 7.53584C22.2973 7.53584 22.1947 7.53584 22.0889 7.53584C22.0889 7.69126 22.0889 7.84669 22.0889 8.00683C21.9349 8.00683 21.7809 8.00683 21.6222 8.00683C21.5998 8.10397 21.5773 8.20111 21.5542 8.30119C21.4667 8.63481 21.4667 8.63481 21.3111 8.94881C21.1058 8.94881 20.9004 8.94881 20.6889 8.94881C20.6119 9.10423 20.6119 9.10423 20.5333 9.2628C20.4435 9.23042 20.3537 9.19804 20.2611 9.16468C19.9131 9.06741 19.9131 9.06741 19.6535 9.25789C19.1363 9.48757 18.6372 9.45316 18.0833 9.43942C17.9749 9.438 17.8664 9.43659 17.7546 9.43513C17.4882 9.43144 17.2219 9.42581 16.9556 9.4198C16.9556 9.31618 16.9556 9.21256 16.9556 9.1058C16.8016 9.1058 16.6476 9.1058 16.4889 9.1058C16.4504 8.98599 16.4119 8.86619 16.3722 8.74275C16.1541 8.26947 16.0006 8.10648 15.5556 7.84983C15.2989 7.79802 15.0422 7.74621 14.7778 7.69283C14.8291 7.12294 14.8804 6.55304 14.9333 5.96587C14.8307 5.96587 14.728 5.96587 14.6222 5.96587C14.6222 5.81044 14.6222 5.65502 14.6222 5.49488C14.5196 5.49488 14.4169 5.49488 14.3111 5.49488C14.2598 5.5985 14.2084 5.70212 14.1556 5.80887C14.1964 5.54523 14.2521 5.28399 14.3111 5.02389C14.3433 4.87879 14.3433 4.87879 14.3761 4.73075C14.669 3.71099 15.3018 3.21446 16.1778 2.66894C17.5698 1.91243 19.692 1.66883 21 2.66894Z" fill="#A6C3E2"/>
<path d="M30.8 28.4164C30.7487 28.588 30.6973 28.7596 30.6444 28.9364C30.5601 29.6246 30.777 29.9703 31.1694 30.526C31.8151 31.3503 32.53 32.0943 33.2889 32.8123C32.6809 32.8123 32.4931 32.5759 32.0444 32.1843C32.3674 32.8036 32.4834 32.9553 33.1333 33.2833C33.1333 33.7496 33.1333 34.2158 33.1333 34.6963C31.8356 34.526 30.7871 33.5308 30.0125 32.5179C29.8601 32.3021 29.7078 32.0862 29.5556 31.8703C29.4529 31.7667 29.3502 31.6631 29.2444 31.5563C29.3028 31.1442 29.3028 31.1442 29.4 30.7713C29.2973 30.7713 29.1947 30.7713 29.0889 30.7713C29.1402 30.5641 29.1916 30.3569 29.2444 30.1434C29.6917 30.0452 29.6917 30.0452 30.1778 29.9864C30.2804 30.09 30.3831 30.1936 30.4889 30.3003C30.4376 29.9895 30.3862 29.6786 30.3333 29.3584C30.128 29.3066 29.9227 29.2548 29.7111 29.2014C29.7111 29.0459 29.7111 28.8905 29.7111 28.7304C29.6084 28.7304 29.5058 28.7304 29.4 28.7304C29.4 28.8858 29.4 29.0412 29.4 29.2014C29.1433 29.1496 28.8867 29.0978 28.6222 29.0444C28.6736 29.1998 28.7249 29.3552 28.7778 29.5154C28.6238 29.5931 28.6238 29.5931 28.4667 29.6724C28.364 29.6206 28.2613 29.5687 28.1556 29.5154C28.2236 29.1425 28.2236 29.1425 28.4667 28.7304C29.2086 28.4281 30.0069 28.3753 30.8 28.4164Z" fill="#68788A"/>
<path d="M21.9333 20.2526C22.0986 20.5469 22.0986 20.5469 22.2444 20.8805C22.1931 20.9842 22.1418 21.0878 22.0889 21.1945C22.1916 21.2464 22.2942 21.2982 22.4 21.3515C22.2973 21.5588 22.1947 21.766 22.0889 21.9795C23.214 22.1158 24.0501 21.7105 25.0481 21.2436C25.5111 21.0375 25.5111 21.0375 25.8222 21.0375C25.7452 20.7267 25.7452 20.7267 25.6667 20.4096C25.872 20.5132 26.0773 20.6168 26.2889 20.7236C26.2889 20.9308 26.2889 21.138 26.2889 21.3515C26.1784 21.3951 26.0679 21.4386 25.9541 21.4834C25.8111 21.5403 25.6681 21.5971 25.5208 21.6557C25.3783 21.7122 25.2357 21.7686 25.0888 21.8268C24.7451 21.9481 24.7451 21.9481 24.5778 22.1365C24.3372 22.1511 24.3372 22.1511 24.0917 22.166C23.3971 22.3129 23.1258 22.5485 22.6303 23.035C22.4 23.2355 22.4 23.2355 22.0889 23.2355C22.0889 23.5464 22.0889 23.8572 22.0889 24.1775C21.9926 24.184 21.8964 24.1904 21.7972 24.1971C21.432 24.3078 21.432 24.3078 21.2722 24.6975C21.0313 25.8931 20.9655 26.8998 21.6222 27.9454C21.5736 28.3869 21.5736 28.3869 21.4667 28.7304C21.364 28.7304 21.2613 28.7304 21.1556 28.7304C21.1556 28.834 21.1556 28.9376 21.1556 29.0444C21.3096 29.0962 21.4636 29.148 21.6222 29.2014C21.4682 29.2014 21.3142 29.2014 21.1556 29.2014C21.1042 29.3568 21.0529 29.5122 21 29.6724C20.8413 29.1532 20.687 28.6329 20.5333 28.1122C20.4888 27.9668 20.4443 27.8214 20.3984 27.6716C19.9101 25.9992 19.9463 24.5293 20.6755 22.9221C20.9302 22.4864 21.1021 22.3107 21.5833 22.1561C21.6988 22.1497 21.8143 22.1432 21.9333 22.1365C21.882 22.0329 21.8307 21.9293 21.7778 21.8225C21.763 21.5841 21.7576 21.3451 21.7583 21.1062C21.7579 20.9797 21.7575 20.8533 21.7571 20.7229C21.7778 20.4096 21.7778 20.4096 21.9333 20.2526Z" fill="#152544"/>
<path d="M38.3797 34.7845C38.8547 34.8602 38.8547 34.8602 39.2 34.8532C39.585 35.6304 39.585 35.6304 39.9778 36.4232C39.7724 36.4232 39.5671 36.4232 39.3556 36.4232C39.3556 36.3196 39.3556 36.216 39.3556 36.1092C39.2625 36.0671 39.1695 36.025 39.0736 35.9816C38.7376 35.7976 38.5221 35.6078 38.2667 35.3242C38.0982 35.4796 38.0982 35.4797 37.9264 35.6382C37.4553 35.9763 37.2716 36.0169 36.7111 35.9522C36.6598 35.8486 36.6084 35.745 36.5556 35.6382C35.9441 35.7284 35.9441 35.7284 35.4667 36.1092C35.1061 36.2221 34.7432 36.3276 34.3778 36.4232C34.3682 36.624 34.3585 36.8247 34.3486 37.0316C34.3432 37.1445 34.3378 37.2574 34.3322 37.3738C34.3472 37.4745 34.3623 37.5753 34.3778 37.6792C34.5318 37.7828 34.6858 37.8864 34.8444 37.9932C34.8156 38.1551 34.7867 38.317 34.7569 38.4838C34.6674 39.2748 34.6674 39.2748 34.8444 40.0341C35.193 40.3066 35.5304 40.4699 35.9333 40.6621C35.4667 40.8191 35.4667 40.8191 34.9708 40.5934C34.8265 40.5125 34.6821 40.4315 34.5333 40.3481C34.5333 40.0373 34.5333 39.7264 34.5333 39.4061C34.328 39.3543 34.1227 39.3025 33.9111 39.2491C33.9111 38.9901 33.9111 38.731 33.9111 38.4642C33.8598 38.4642 33.8084 38.4642 33.7556 38.4642C33.6016 37.4798 33.4476 36.4954 33.2889 35.4812C33.4942 35.4812 33.6996 35.4812 33.9111 35.4812C33.9624 35.2222 34.0138 34.9631 34.0667 34.6962C35.4154 34.2425 36.9974 34.5917 38.3797 34.7845Z" fill="#D0DFEF"/>
<path d="M11.5111 36.8942C11.6138 36.8942 11.7164 36.8942 11.8222 36.8942C11.9249 37.2569 12.0276 37.6195 12.1333 37.9932C12.1847 37.6305 12.236 37.2678 12.2889 36.8942C12.4429 36.946 12.5969 36.9978 12.7556 37.0512C12.9253 38.2713 12.9477 39.2117 12.4444 40.3481C12.5984 40.3481 12.7524 40.3481 12.9111 40.3481C12.94 40.1636 12.94 40.1636 12.9694 39.9753C13.0667 39.5631 13.0667 39.5631 13.3778 39.2491C13.1834 40.4603 12.5678 41.4265 11.6667 42.2321C11.5127 42.1544 11.5127 42.1544 11.3556 42.0751C11.455 41.9909 11.5545 41.9067 11.6569 41.82C12.0377 41.3774 12.0816 41.0799 12.1333 40.5051C12.0242 40.6152 11.9152 40.7253 11.8028 40.8387C11.6552 40.9359 11.5076 41.033 11.3556 41.1331C10.8403 41.0154 10.8403 41.0154 10.4222 40.8191C10.3452 41.0523 10.3452 41.0523 10.2667 41.2901C9.45061 41.7439 8.67081 41.8173 7.74861 41.8396C7.64142 41.8444 7.53423 41.8492 7.42379 41.8541C6.82295 41.8545 6.56754 41.7904 6.10494 41.3937C5.98965 41.2559 5.87435 41.1181 5.75555 40.9761C5.47178 40.7365 5.18374 40.5044 4.89271 40.2739C4.6259 39.9909 4.59444 39.7807 4.51111 39.4061C4.40844 39.3543 4.30577 39.3025 4.2 39.2491C4.45666 39.2491 4.71333 39.2491 4.97777 39.2491C5.0259 39.4143 5.0259 39.4143 5.075 39.5828C5.36817 40.2014 5.62613 40.642 6.22222 40.9761C7.03547 41.18 7.87753 41.2321 8.71111 41.2901C8.71111 41.1865 8.71111 41.0829 8.71111 40.9761C10.3042 40.265 10.3042 40.265 11.0444 40.5051C11.0444 40.4015 11.0444 40.2979 11.0444 40.1911C11.1471 40.1911 11.2498 40.1911 11.3556 40.1911C11.2786 39.8803 11.2786 39.8803 11.2 39.5631C11.4053 39.4595 11.6107 39.3559 11.8222 39.2491C11.8222 38.9901 11.8222 38.7311 11.8222 38.4642C11.7196 38.4642 11.6169 38.4642 11.5111 38.4642C11.3633 37.884 11.3633 37.4744 11.5111 36.8942Z" fill="#86A8D3"/>
<path d="M35 23.0785C35.154 23.1303 35.308 23.1821 35.4667 23.2355C35.4667 23.65 35.4667 24.0644 35.4667 24.4915C35.9287 24.5433 36.3907 24.5951 36.8667 24.6485C36.8667 24.7521 36.8667 24.8557 36.8667 24.9625C36.9693 24.9625 37.072 24.9625 37.1778 24.9625C37.2307 25.147 37.2307 25.147 37.2847 25.3353C37.4501 25.7724 37.4501 25.7724 37.8411 25.924C38.2577 26.0585 38.6223 26.1231 39.0572 26.1608C39.2021 26.1739 39.347 26.1871 39.4962 26.2006C39.6455 26.213 39.7948 26.2253 39.9486 26.238C40.1771 26.2584 40.1771 26.2584 40.4101 26.2791C40.7844 26.3123 41.1588 26.3444 41.5333 26.3754C41.5333 26.5827 41.5333 26.7899 41.5333 27.0034C39.9091 27.5784 38.64 27.6559 37.0222 27.0034C36.4236 26.6628 35.9785 26.3467 35.6222 25.7474C35.6222 25.6438 35.6222 25.5402 35.6222 25.4334C35.8789 25.4334 36.1356 25.4334 36.4 25.4334C36.4 25.3298 36.4 25.2262 36.4 25.1194C35.7327 25.0158 35.0653 24.9122 34.3778 24.8055C34.3264 24.65 34.2751 24.4946 34.2222 24.3345C34.3762 24.2827 34.5302 24.2308 34.6889 24.1775C34.8802 23.6261 34.8802 23.6261 35 23.0785Z" fill="#1A2537"/>
<path d="M39.2 34.8532C39.795 35.081 40.0075 35.3842 40.2889 35.9522C40.2889 36.0558 40.2889 36.1595 40.2889 36.2662C40.3883 36.2986 40.4878 36.331 40.5903 36.3643C40.9111 36.5802 40.9111 36.5802 41.0278 37.0708C41.047 37.2942 41.047 37.2942 41.0667 37.5222C41.1693 37.5222 41.272 37.5222 41.3778 37.5222C41.4548 38.2216 41.4548 38.2216 41.5333 38.9352C41.4307 38.7797 41.328 38.6243 41.2222 38.4642C41.2012 38.6083 41.1801 38.7523 41.1584 38.9008C40.9589 40.0487 40.745 40.8617 39.9492 41.7206C39.6667 41.9181 39.6667 41.9181 39.0444 41.9181C38.9467 41.7663 38.9467 41.7663 38.847 41.6115C38.5856 41.2294 38.5856 41.2294 38.0218 41.1944C37.8086 41.184 37.5953 41.1768 37.3819 41.1724C37.2728 41.1677 37.1636 41.163 37.0511 41.1582C36.7823 41.1472 36.5134 41.1398 36.2444 41.1331C36.2444 41.0813 36.2444 41.0295 36.2444 40.9761C36.4113 40.9567 36.5781 40.9373 36.75 40.9172C37.3086 40.854 37.3086 40.854 37.6736 40.6425C38.0395 40.4642 38.1935 40.5652 38.5778 40.6621C39.09 40.4797 39.1985 40.3504 39.5111 39.8771C39.6138 39.8771 39.7164 39.8771 39.8222 39.8771C39.9586 39.2246 39.9586 39.2246 39.9024 38.5678C39.8134 38.1043 39.829 37.6988 39.8514 37.2278C39.8634 36.3341 39.6999 35.8925 39.2 35.1672C39.2 35.0636 39.2 34.96 39.2 34.8532Z" fill="#BED3ED"/>
<path d="M8.15694 32.7436C8.33125 32.7469 8.33125 32.7469 8.50907 32.7502C9.33482 32.7782 10.0135 32.8444 10.7333 33.2833C10.8792 33.6758 10.8792 33.6758 10.8889 34.0683C10.9659 34.3014 10.9659 34.3014 11.0444 34.5393C11.1471 34.5393 11.2498 34.5393 11.3556 34.5393C11.5737 34.8606 11.5737 34.8606 11.8125 35.285C12.3262 36.3037 12.3262 36.3037 13.2222 36.8942C13.2222 36.7388 13.2222 36.5833 13.2222 36.4232C13.3249 36.4232 13.4276 36.4232 13.5333 36.4232C13.5197 36.8715 13.5031 37.3194 13.4847 37.7675C13.4812 37.8931 13.4777 38.0186 13.4741 38.148C13.4368 38.9852 13.3058 39.6062 12.9111 40.3481C12.5708 40.4953 12.5708 40.4953 12.2889 40.5051C12.4074 39.6282 12.4074 39.6282 12.6073 39.2774C12.8064 38.8179 12.7737 38.4711 12.7361 37.9736C12.7261 37.808 12.7161 37.6425 12.7057 37.4719C12.6708 37.3331 12.6359 37.1942 12.6 37.0512C12.3059 36.866 12.3059 36.866 11.9778 36.7372C11.7797 36.4594 11.7797 36.4594 11.6083 36.1387C11.3483 35.6894 11.1108 35.37 10.7042 35.0495C10.2667 34.6962 10.2667 34.6962 10.1336 34.3675C9.97858 34.0275 9.97858 34.0275 9.58489 33.9726C9.44413 33.9653 9.30336 33.958 9.15833 33.9505C9.01676 33.9416 8.8752 33.9327 8.72934 33.9235C8.62066 33.9195 8.51197 33.9154 8.4 33.9113C8.4 33.8076 8.4 33.704 8.4 33.5973C7.938 33.5455 7.476 33.4937 7 33.4403C7 33.5439 7 33.6475 7 33.7543C6.692 33.8579 6.384 33.9615 6.06667 34.0683C5.964 33.861 5.86133 33.6538 5.75555 33.4403C6.58841 32.8825 7.16376 32.7125 8.15694 32.7436Z" fill="#1C3353"/>
<path d="M21.1556 3.29693C21.8001 3.87774 22.3493 4.52215 22.4389 5.40902C22.4389 5.75399 22.4278 6.09312 22.4 6.43686C22.2973 6.43686 22.1947 6.43686 22.0889 6.43686C22.1659 6.74771 22.1659 6.74771 22.2444 7.06485C22.0904 7.06485 21.9364 7.06485 21.7778 7.06485C21.8548 7.3757 21.8548 7.3757 21.9333 7.69283C21.6767 7.74464 21.42 7.79645 21.1556 7.84983C21.0786 8.08297 21.0786 8.08297 21 8.32082C20.5236 8.50725 20.5236 8.50725 20.0667 8.63481C19.9897 8.5571 19.9897 8.5571 19.9111 8.47782C19.6962 8.46802 19.4809 8.46847 19.2658 8.47352C19.1351 8.47545 19.0043 8.47737 18.8696 8.47935C18.5929 8.48484 18.3162 8.49097 18.0396 8.49775C17.9084 8.49947 17.7773 8.50119 17.6422 8.50296C17.4616 8.50693 17.4616 8.50693 17.2774 8.51097C16.9556 8.47782 16.9556 8.47782 16.4889 8.16382C16.3819 7.75171 16.3819 7.75171 16.3333 7.37884C16.0253 7.37884 15.7173 7.37884 15.4 7.37884C15.4032 7.20398 15.4064 7.02913 15.4097 6.84898C15.441 6.30621 15.441 6.30621 15.2444 5.96587C15.2051 5.70847 15.1736 5.44979 15.1472 5.1907C15.1324 5.05328 15.1175 4.91587 15.1023 4.77429C15.0889 4.3959 15.0889 4.3959 15.2444 3.92491C15.3984 3.92491 15.5524 3.92491 15.7111 3.92491C15.679 4.09977 15.6469 4.27462 15.6139 4.45478C15.5946 4.64259 15.5754 4.83039 15.5556 5.02389C15.6582 5.12751 15.7609 5.23113 15.8667 5.33788C15.9311 5.78066 15.9311 5.78066 15.9639 6.29949C15.9755 6.47151 15.9872 6.64353 15.9991 6.82077C16.0068 6.95312 16.0144 7.08548 16.0222 7.22184C16.3816 7.22184 16.7409 7.22184 17.1111 7.22184C17.0084 7.27365 16.9058 7.32546 16.8 7.37884C16.8 7.53427 16.8 7.68969 16.8 7.84983C17.0567 7.74621 17.3133 7.64259 17.5778 7.53584C17.6291 7.63945 17.6804 7.74307 17.7333 7.84983C17.989 7.96312 18.2483 8.06861 18.5111 8.16382C18.5111 8.0602 18.5111 7.95659 18.5111 7.84983C18.8028 7.68302 18.8028 7.68302 19.1333 7.53584C19.236 7.58765 19.3387 7.63945 19.4444 7.69283C19.4958 7.53741 19.5471 7.38198 19.6 7.22184C20.062 7.22184 20.524 7.22184 21 7.22184C21.1166 6.75113 21.2194 6.28467 21.3111 5.80887C21.4138 5.80887 21.5164 5.80887 21.6222 5.80887C21.619 5.65992 21.6158 5.51097 21.6125 5.35751C21.6222 4.86689 21.6222 4.86689 21.7778 4.5529C21.6751 4.5529 21.5724 4.5529 21.4667 4.5529C21.2712 4.09667 21.1556 3.79994 21.1556 3.29693Z" fill="#C4D8EB"/>
<path d="M31.2667 34.3822C31.3693 34.3822 31.472 34.3822 31.5778 34.3822C31.5778 34.4859 31.5778 34.5895 31.5778 34.6962C31.8344 34.6962 32.0911 34.6962 32.3556 34.6962C32.5357 35.1508 32.5053 35.3442 32.3653 35.8247C32.1323 36.6683 32.0792 37.4705 32.3556 38.3072C32.2529 38.3072 32.1502 38.3072 32.0444 38.3072C32.0958 38.4367 32.1471 38.5662 32.2 38.6997C32.3817 39.3414 32.3783 39.8409 32.3556 40.5051C32.4582 40.5569 32.5609 40.6087 32.6667 40.6621C32.6667 40.9212 32.6667 41.1802 32.6667 41.4471C32.5127 41.5248 32.5127 41.5248 32.3556 41.6041C32.2541 41.922 32.2541 41.922 32.2 42.2321C31.1514 40.7645 30.606 39.2407 30.8602 37.4008C30.9326 37.0722 31.0202 36.7471 31.1111 36.4232C31.3164 36.3714 31.5218 36.3196 31.7333 36.2662C31.7847 35.9035 31.836 35.5409 31.8889 35.1672C31.7349 35.0604 31.7349 35.0604 31.5778 34.9514C31.4751 34.8672 31.3724 34.783 31.2667 34.6962C31.2667 34.5926 31.2667 34.489 31.2667 34.3822Z" fill="#424C5F"/>
<path d="M34.0667 21.5085C34.118 21.5085 34.1693 21.5085 34.2222 21.5085C34.2671 21.6834 34.3121 21.8582 34.3583 22.0384C34.4855 22.608 34.4855 22.608 34.8444 22.9215C34.8864 23.3436 34.858 23.7522 34.8444 24.1775C34.745 24.1937 34.6455 24.2099 34.543 24.2265C34.4372 24.2622 34.3313 24.2978 34.2222 24.3345C34.1709 24.4899 34.1195 24.6453 34.0667 24.8055C34.0667 24.7018 34.0667 24.5982 34.0667 24.4915C33.9746 24.535 33.8826 24.5785 33.7878 24.6233C32.9882 24.9932 32.3128 25.2764 31.4222 25.2764C31.2138 25.3245 31.0061 25.3761 30.8 25.4334C30.7172 25.2347 30.6366 25.035 30.5569 24.8349C30.5118 24.7238 30.4667 24.6127 30.4202 24.4982C30.3333 24.1775 30.3333 24.1775 30.4889 23.7065C30.5402 23.8101 30.5916 23.9137 30.6444 24.0205C31.0997 23.8715 31.5512 23.7166 31.9989 23.5458C32.1487 23.4887 32.2984 23.4317 32.4528 23.3729C32.5959 23.3174 32.7391 23.262 32.8866 23.2048C33.2889 23.0785 33.2889 23.0785 33.9111 23.0785C33.9111 22.9749 33.9111 22.8713 33.9111 22.7645C33.5518 22.7645 33.1924 22.7645 32.8222 22.7645C33.185 22.5751 33.5217 22.4245 33.9111 22.2935C33.9624 22.0345 34.0138 21.7754 34.0667 21.5085Z" fill="#E6EEF5"/>
<path d="M38.5778 18.0546C38.3724 18.1064 38.1671 18.1582 37.9556 18.2116C37.9556 18.3152 37.9556 18.4188 37.9556 18.5256C37.8016 18.5256 37.6476 18.5256 37.4889 18.5256C37.4745 18.6616 37.4745 18.6616 37.4597 18.8003C37.2839 19.2917 36.9584 19.4621 36.5556 19.7816C36.2772 20.1927 36.2772 20.1927 36.0889 20.5665C36.1916 20.5665 36.2942 20.5665 36.4 20.5665C36.3278 20.6928 36.3278 20.6928 36.2542 20.8217C36.0531 21.2753 35.9635 21.6392 35.9333 22.1365C36.0071 22.2531 36.0809 22.3697 36.1569 22.4898C36.521 23.1363 36.4378 23.7638 36.4 24.4915C36.092 24.4915 35.784 24.4915 35.4667 24.4915C35.4363 24.1695 35.4059 23.8475 35.3755 23.5256C35.3436 23.382 35.3436 23.382 35.3111 23.2355C35.2084 23.1837 35.1058 23.1319 35 23.0785C35 23.3375 35 23.5966 35 23.8635C34.9487 23.8635 34.8973 23.8635 34.8444 23.8635C34.7995 23.6886 34.7546 23.5138 34.7083 23.3336C34.5812 22.764 34.5812 22.764 34.2222 22.4505C34.0636 21.2405 34.2149 20.3431 34.8444 19.3106C35 19.7816 35 19.7816 35 20.0956C34.8973 20.0956 34.7947 20.0956 34.6889 20.0956C34.6889 20.4582 34.6889 20.8209 34.6889 21.1945C35.073 21.1292 35.073 21.1292 35.4667 20.8805C35.6126 20.5645 35.7117 20.2463 35.8155 19.914C35.9333 19.6246 35.9333 19.6246 36.2736 19.3891C36.3667 19.3632 36.4597 19.3373 36.5556 19.3106C36.5556 19.207 36.5556 19.1033 36.5556 18.9966C36.7694 18.7415 36.7694 18.7415 37.0222 18.5256C37.1249 18.5256 37.2276 18.5256 37.3333 18.5256C37.3333 18.422 37.3333 18.3184 37.3333 18.2116C37.7547 17.999 38.1126 18.0444 38.5778 18.0546Z" fill="#456087"/>
<path d="M19.4444 27.9454C19.9111 28.1024 19.9111 28.1024 20.1833 28.5538C20.3778 29.0444 20.3778 29.0444 20.2222 29.5154C20.1196 29.4635 20.0169 29.4117 19.9111 29.3584C19.4844 29.2529 19.4844 29.2529 18.9778 29.3584C18.6259 29.6224 18.3166 29.9079 18.0031 30.2169C17.7333 30.4573 17.7333 30.4573 17.4222 30.4573C17.3837 30.5512 17.3452 30.6451 17.3056 30.7419C16.9707 31.3333 16.5626 31.5258 15.9444 31.782C15.4033 31.9866 15.4033 31.9866 15.0889 32.3413C14.7778 32.6553 14.7778 32.6553 14.2431 32.8712C13.7235 33.1103 13.6003 33.1893 13.2806 33.6169C12.9111 34.0683 12.9111 34.0683 12.5514 34.2449C11.9155 34.215 11.4326 33.9146 10.8889 33.5973C10.8889 33.5455 10.8889 33.4936 10.8889 33.4403C11.2996 33.4921 11.7102 33.5439 12.1333 33.5973C12.1333 33.4936 12.1333 33.39 12.1333 33.2833C12.236 33.2833 12.3387 33.2833 12.4444 33.2833C12.4444 33.1797 12.4444 33.076 12.4444 32.9693C12.5234 32.9299 12.6023 32.8906 12.6837 32.8501C15.261 31.5543 17.4133 30.028 19.4444 27.9454Z" fill="#737E8F"/>
<path d="M41.0667 18.3686C41.1437 18.7572 41.1437 18.7572 41.2222 19.1536C41.0618 19.1471 40.9014 19.1406 40.7361 19.134C40.149 19.1531 39.7476 19.2711 39.2 19.4676C38.9947 19.4676 38.7893 19.4676 38.5778 19.4676C38.2628 19.671 37.9514 19.8801 37.6444 20.0956C37.5418 20.0956 37.4391 20.0956 37.3333 20.0956C37.2884 20.238 37.2435 20.3805 37.1972 20.5273C37.0582 20.9327 36.9052 21.2868 36.7111 21.6655C36.6598 21.8209 36.6084 21.9764 36.5556 22.1365C36.4016 22.1365 36.2476 22.1365 36.0889 22.1365C36.0376 22.2401 35.9862 22.3437 35.9333 22.4505C35.7808 22.0349 35.7691 21.8501 35.9042 21.4202C36.0889 21.0375 36.0889 21.0375 36.4 20.5665C36.2973 20.5665 36.1947 20.5665 36.0889 20.5665C36.2921 19.9514 36.5293 19.5733 37.0222 19.1536C37.1249 19.1536 37.2276 19.1536 37.3333 19.1536C37.3847 18.9463 37.436 18.7391 37.4889 18.5256C37.6429 18.5256 37.7969 18.5256 37.9556 18.5256C37.9556 18.422 37.9556 18.3184 37.9556 18.2116C38.9926 17.9101 40.0703 17.9452 41.0667 18.3686Z" fill="#D1E3F2"/>
<path d="M21.9333 18.8396C22.4396 19.095 22.5094 19.5823 22.7111 20.0956C22.7624 20.251 22.8138 20.4064 22.8667 20.5665C23.3239 20.815 23.558 20.7034 24.0625 20.5567C24.6241 20.305 24.6241 20.305 24.7236 19.7521C24.7268 19.6064 24.73 19.4607 24.7333 19.3106C24.852 19.4336 24.9708 19.5567 25.0931 19.6834C25.4969 20.107 25.4969 20.107 25.9778 20.4096C25.9322 20.7043 25.9322 20.7043 25.8222 21.0375C25.4274 21.2727 25.0644 21.4569 24.6458 21.6361C24.4845 21.7124 24.4845 21.7124 24.3198 21.7903C23.5044 22.1485 22.9592 22.1564 22.0889 21.9795C22.137 21.8532 22.137 21.8532 22.1861 21.7244C22.2649 21.2208 22.1128 20.8785 21.9333 20.4096C21.9333 20.9794 21.9333 21.5493 21.9333 22.1365C21.728 22.1883 21.5227 22.2401 21.3111 22.2935C21.3881 20.8947 21.3881 20.8947 21.4667 19.4676C21.7747 19.5453 21.7747 19.5453 22.0889 19.6246C22.0376 19.3655 21.9862 19.1065 21.9333 18.8396Z" fill="#DCE9F7"/>
<path d="M22.0889 10.0478C22.2429 10.0996 22.3969 10.1514 22.5556 10.2048C22.4786 10.3213 22.4786 10.3213 22.4 10.4403C21.6875 12.2381 22.799 14.8227 23.4889 16.4846C23.7523 17.0404 24.0279 17.5896 24.3166 18.1324C24.6305 18.7334 24.8528 19.2557 24.8889 19.9386C24.5741 20.3997 24.331 20.6679 23.7818 20.807C23.4782 20.8462 23.1723 20.8649 22.8667 20.8805C23.6056 20.2722 23.6056 20.2722 23.9556 20.0956C23.9598 19.8732 23.9628 19.6508 23.9653 19.4283C23.9671 19.3045 23.9689 19.1806 23.9707 19.053C23.9562 18.6972 23.8984 18.3955 23.8 18.0546C23.6973 18.0546 23.5947 18.0546 23.4889 18.0546C23.0464 17.4456 22.8028 16.7453 22.5349 16.0462C22.4063 15.7007 22.4063 15.7007 22.2444 15.3857C22.2236 14.9661 22.2377 14.5501 22.2444 14.1297C22.1418 14.1297 22.0391 14.1297 21.9333 14.1297C21.8884 13.9516 21.8435 13.7735 21.7972 13.59C21.7395 13.4054 21.6817 13.2209 21.6222 13.0307C21.5196 12.9789 21.4169 12.9271 21.3111 12.8737C21.3111 12.7183 21.3111 12.5629 21.3111 12.4027C21.2084 12.4027 21.1058 12.4027 21 12.4027C21 12.2473 21 12.0919 21 11.9317C20.8973 11.8799 20.7947 11.8281 20.6889 11.7747C21.0482 11.7747 21.4076 11.7747 21.7778 11.7747C21.8291 12.1374 21.8804 12.5001 21.9333 12.8737C21.882 12.3038 21.8307 11.7339 21.7778 11.1468C21.6238 11.1468 21.4698 11.1468 21.3111 11.1468C21.3111 10.8328 21.3111 10.8328 21.7 10.4206C21.8283 10.2976 21.9567 10.1746 22.0889 10.0478Z" fill="#95A3B4"/>
<path d="M37.1097 32.9398C37.28 32.9668 37.4502 32.9937 37.6256 33.0214C38.0802 33.1196 38.4711 33.2355 38.8889 33.4403C38.9977 33.647 39.1016 33.8564 39.2 34.0683C39.5163 34.2673 39.5163 34.2673 39.8222 34.3823C39.7709 34.5377 39.7196 34.6931 39.6667 34.8532C39.3321 34.7809 39.0561 34.7026 38.754 34.5375C38.3943 34.3692 38.1363 34.3319 37.7423 34.3117C37.6144 34.3049 37.4866 34.2982 37.3549 34.2912C37.2227 34.2856 37.0904 34.2801 36.9542 34.2743C36.7567 34.2632 36.7567 34.2632 36.5553 34.2519C35.8996 34.2203 35.332 34.233 34.6889 34.3823C34.3246 34.3401 33.9611 34.2896 33.6 34.2253C33.7027 34.1734 33.8053 34.1216 33.9111 34.0683C33.9207 33.9711 33.9304 33.874 33.9403 33.7739C34.0667 33.4403 34.0667 33.4403 34.5625 33.1753C35.4235 32.8242 36.1989 32.789 37.1097 32.9398Z" fill="#1A2736"/>
<path d="M10.4222 33.1263C11.0896 33.1263 11.7569 33.1263 12.4444 33.1263C12.2904 33.204 12.2904 33.204 12.1333 33.2833C12.1333 33.3869 12.1333 33.4905 12.1333 33.5973C11.8767 33.5973 11.62 33.5973 11.3556 33.5973C11.4839 33.6653 11.6122 33.7333 11.7444 33.8033C11.9369 33.9345 11.9369 33.9345 12.1333 34.0683C12.1333 34.2237 12.1333 34.3791 12.1333 34.5393C12.0307 34.5393 11.928 34.5393 11.8222 34.5393C11.9762 34.7724 11.9762 34.7724 12.1333 35.0102C12.2873 34.9584 12.4413 34.9066 12.6 34.8532C12.6 34.7496 12.6 34.646 12.6 34.5393C12.8053 34.5393 13.0107 34.5393 13.2222 34.5393C13.2736 34.6429 13.3249 34.7465 13.3778 34.8532C13.8398 34.8532 14.3018 34.8532 14.7778 34.8532C14.6128 35.325 14.4369 35.6801 14.1458 36.0896C13.7995 36.6534 13.7441 37.0218 13.6889 37.6792C13.6603 37.9376 13.6311 38.196 13.6014 38.4544C13.5785 38.6669 13.5558 38.8795 13.5333 39.0922C13.482 39.0922 13.4307 39.0922 13.3778 39.0922C13.3736 38.7356 13.3706 38.3791 13.3681 38.0226C13.3663 37.8241 13.3644 37.6255 13.3626 37.421C13.3778 36.8942 13.3778 36.8942 13.5333 36.4232C13.4307 36.4232 13.328 36.4232 13.2222 36.4232C13.2222 36.5786 13.2222 36.7341 13.2222 36.8942C12.7629 36.842 12.6175 36.7573 12.3065 36.4005C12.1679 36.1932 12.1679 36.1932 12.0264 35.9817C11.9327 35.8446 11.8391 35.7076 11.7426 35.5665C11.5364 35.2109 11.4252 34.9413 11.3556 34.5393C11.2529 34.5393 11.1502 34.5393 11.0444 34.5393C10.7819 34.1762 10.7819 34.1762 10.5778 33.7543C10.6291 33.5988 10.6804 33.4434 10.7333 33.2833C10.6307 33.2315 10.528 33.1797 10.4222 33.1263Z" fill="#717D8D"/>
<path d="M33.1333 39.4061C33.39 39.4061 33.6467 39.4061 33.9111 39.4061C33.9721 39.5519 34.033 39.6976 34.0958 39.8477C34.4022 40.3915 34.6314 40.5189 35.1556 40.8191C35.1556 40.9745 35.1556 41.13 35.1556 41.2901C36.2575 41.6608 37.6006 41.5028 38.7333 41.2901C38.836 41.4455 38.9387 41.601 39.0444 41.7611C37.5004 42.6042 36.3034 42.4912 34.6366 42.0518C34.2656 41.9321 33.9437 41.7863 33.6 41.6041C33.5487 41.6041 33.4973 41.6041 33.4444 41.6041C33.0873 40.1268 33.0873 40.1268 33.1333 39.4061Z" fill="#89B0DC"/>
<path d="M22.4 3.92491C22.5027 3.92491 22.6053 3.92491 22.7111 3.92491C22.8651 4.23576 23.0191 4.54662 23.1778 4.86689C23.2804 4.81508 23.3831 4.76327 23.4889 4.70989C23.9257 6.42249 23.8236 7.83012 23.0222 9.41979C22.7974 9.77917 22.7974 9.77917 22.5556 10.0478C22.4016 10.0478 22.2476 10.0478 22.0889 10.0478C21.9862 10.255 21.8836 10.4622 21.7778 10.6758C21.6238 10.6758 21.4698 10.6758 21.3111 10.6758C21.3111 10.4167 21.3111 10.1577 21.3111 9.89078C21.5421 9.81307 21.5421 9.81307 21.7778 9.73378C21.7778 9.63017 21.7778 9.52655 21.7778 9.41979C21.8804 9.41979 21.9831 9.41979 22.0889 9.41979C22.1306 9.31294 22.1723 9.20608 22.2153 9.09599C22.3469 8.76747 22.4909 8.44392 22.6431 8.12457C22.9235 7.4769 22.9766 6.82237 23.0222 6.12286C22.8682 6.07105 22.7142 6.01925 22.5556 5.96587C22.5042 5.29235 22.4529 4.61884 22.4 3.92491Z" fill="#667386"/>
<path d="M19.4736 29.1032C20.0279 29.2276 20.2178 29.3517 20.5333 29.8294C20.6208 30.3887 20.6208 30.3887 20.5333 30.9283C19.9942 31.418 19.2166 31.6283 18.5433 31.8912C18.201 32.021 18.201 32.021 17.8889 32.1843C17.7333 31.7133 17.7333 31.7133 17.8889 31.2423C18.0942 31.2423 18.2996 31.2423 18.5111 31.2423C18.5111 30.9833 18.5111 30.7242 18.5111 30.4573C18.4084 30.4573 18.3058 30.4573 18.2 30.4573C18.2 30.561 18.2 30.6646 18.2 30.7713C17.9181 30.9381 17.9181 30.9381 17.5778 31.0853C17.4238 31.0335 17.2698 30.9817 17.1111 30.9283C17.3669 30.6623 17.6256 30.4017 17.8889 30.1433C18.0182 30.0137 18.0182 30.0137 18.1502 29.8815C18.5955 29.461 18.8648 29.2237 19.4736 29.1032Z" fill="#E0EDFB"/>
<path d="M21 10.9898C21.308 10.9898 21.616 10.9898 21.9333 10.9898C22.0103 12.0777 22.0103 12.0777 22.0889 13.1877C21.7778 12.8737 21.7778 12.8737 21.7583 12.3046C21.7647 12.1298 21.7712 11.9549 21.7778 11.7747C21.4184 11.7747 21.0591 11.7747 20.6889 11.7747C20.6376 11.982 20.5862 12.1892 20.5333 12.4027C20.328 12.4027 20.1227 12.4027 19.9111 12.4027C19.972 13.3251 20.2787 14.0078 20.695 14.8282C20.8567 15.2615 20.8522 15.4325 20.6889 15.8567C20.3832 15.3939 20.21 15.0255 20.0667 14.4829C20.0153 14.3146 19.964 14.1462 19.9111 13.9727C19.7571 13.9209 19.6031 13.8691 19.4444 13.8157C19.178 13.5054 18.9204 13.1941 18.6667 12.8737C18.1624 12.263 17.72 12.1098 16.9556 11.9317C16.9556 11.8799 16.9556 11.8281 16.9556 11.7747C17.1059 11.7689 17.2563 11.763 17.4113 11.757C19.3331 11.7497 19.3331 11.7497 21 10.9898Z" fill="#3C5A86"/>
<path d="M13.0667 4.7099C13.1693 4.86533 13.272 5.02075 13.3778 5.18089C13.4804 5.12908 13.5831 5.07727 13.6889 5.02389C13.6376 5.43836 13.5862 5.85284 13.5333 6.27987C13.636 6.33167 13.7387 6.38348 13.8444 6.43686C13.8958 6.17782 13.9471 5.91877 14 5.65188C14.2053 5.60007 14.4107 5.54826 14.6222 5.49488C14.6222 5.65031 14.6222 5.80574 14.6222 5.96587C14.7249 5.96587 14.8276 5.96587 14.9333 5.96587C14.882 6.53577 14.8307 7.10567 14.7778 7.69284C15.0344 7.69284 15.2911 7.69284 15.5556 7.69284C15.9162 7.91394 16.1772 8.18523 16.4889 8.47782C16.4376 8.63324 16.3862 8.78867 16.3333 8.94881C16.0158 8.69511 15.7048 8.43297 15.4 8.16383C15.4 8.06021 15.4 7.95659 15.4 7.84983C14.938 7.84983 14.476 7.84983 14 7.84983C13.8973 7.53898 13.7947 7.22813 13.6889 6.90785C13.5349 6.95966 13.3809 7.01147 13.2222 7.06485C13.2923 7.31438 13.2923 7.31438 13.3638 7.56895C13.4236 7.78685 13.4834 8.00477 13.5431 8.2227C13.574 8.33239 13.605 8.44208 13.6369 8.55509C13.8621 9.38423 13.8621 9.38423 13.6889 9.73379C12.8604 8.34025 12.5104 7.08246 12.826 5.44276C12.896 5.19527 12.9795 4.95175 13.0667 4.7099Z" fill="#3D5069"/>
<path d="M43.5555 20.5666C44.0198 21.3556 43.9605 22.1885 43.8667 23.0785C43.7082 23.5815 43.499 24.0314 43.2444 24.4915C43.1931 24.5951 43.1418 24.6987 43.0889 24.8055C42.8322 24.8055 42.5755 24.8055 42.3111 24.8055C42.2341 25.0386 42.2341 25.0386 42.1556 25.2765C41.8347 25.3844 41.8347 25.3844 41.5333 25.4335C41.5333 25.6407 41.5333 25.8479 41.5333 26.0614C40.9943 25.9837 40.9943 25.9837 40.4444 25.9044C40.3931 25.749 40.3418 25.5936 40.2889 25.4335C40.1928 25.4407 40.0968 25.448 39.9978 25.4555C38.9609 25.5001 38.2431 25.3023 37.3333 24.8055C37.3333 24.7018 37.3333 24.5982 37.3333 24.4915C37.2307 24.4397 37.128 24.3879 37.0222 24.3345C37.1778 24.1775 37.1778 24.1775 37.7125 24.1382C37.8954 24.1512 38.0782 24.1641 38.2667 24.1775C38.3693 24.3329 38.472 24.4883 38.5778 24.6485C39.0983 24.7406 39.0983 24.7406 39.6861 24.7564C39.9851 24.7719 39.9851 24.7719 40.2901 24.7877C40.4437 24.7936 40.5973 24.7994 40.7555 24.8055C40.7555 25.1163 40.7555 25.4272 40.7555 25.7474C40.9095 25.7474 41.0635 25.7474 41.2222 25.7474C41.2559 25.6017 41.2559 25.6017 41.2903 25.4531C41.3778 25.1195 41.3778 25.1195 41.5333 24.8055C41.636 24.8055 41.7387 24.8055 41.8444 24.8055C41.8797 24.7051 41.915 24.6047 41.9514 24.5013C42.1556 24.1775 42.1556 24.1775 42.5444 24.0794C42.6728 24.0599 42.8011 24.0405 42.9333 24.0205C43.5331 23.4152 43.4402 22.5127 43.4875 21.695C43.4976 21.5318 43.4976 21.5318 43.5079 21.3653C43.5242 21.0991 43.54 20.8328 43.5555 20.5666Z" fill="#87ACD5"/>
<path d="M23.0222 22.4505C23.1486 22.7056 23.1486 22.7056 23.1778 23.0785C22.9264 23.399 22.6667 23.7129 22.4 24.0205C22.2237 24.5174 22.2283 24.9876 22.2347 25.5119C22.2368 25.7329 22.2368 25.7329 22.239 25.9584C22.2408 26.096 22.2426 26.2336 22.2444 26.3754C22.2444 26.5827 22.2444 26.7899 22.2444 27.0034C22.2917 27.266 22.3426 27.5279 22.4 27.7884C22.2973 27.7884 22.1947 27.7884 22.0889 27.7884C22.1402 27.9956 22.1916 28.2029 22.2444 28.4164C22.1482 28.3095 22.1482 28.3095 22.05 28.2005C21.7892 27.9302 21.7892 27.9302 21.4472 27.7884C21.1556 27.6314 21.1556 27.6314 21 27.1604C20.9181 26.0735 20.9018 25.1277 21.4667 24.1775C21.6207 24.1257 21.7747 24.0739 21.9333 24.0205C21.9397 23.9071 21.9462 23.7938 21.9528 23.6771C22.1485 23.042 22.4989 22.8438 23.0222 22.4505Z" fill="#A0BEE1"/>
<path d="M25.9778 20.4096C26.3884 20.4614 26.7991 20.5132 27.2222 20.5666C27.1196 20.7738 27.0169 20.981 26.9111 21.1945C27.2919 21.513 27.6602 21.8056 28.0875 22.058C28.4837 22.3041 28.7729 22.579 29.0889 22.9215C28.0583 23.1178 28.0583 23.1178 27.5333 22.7645C27.1376 22.7383 27.1376 22.7383 26.7069 22.7645C26.0179 22.7791 25.5416 22.6748 24.8889 22.4505C24.3693 22.4235 23.8532 22.4319 23.3333 22.4505C23.3847 22.3469 23.436 22.2433 23.4889 22.1365C23.6557 22.1139 23.8226 22.0912 23.9944 22.0678C24.5863 21.9782 24.8649 21.8344 25.3556 21.5085C25.6128 21.3989 25.8716 21.2927 26.1333 21.1945C26.082 20.9355 26.0307 20.6765 25.9778 20.4096Z" fill="#CEE3F1"/>
<path d="M30.0708 30.5555C30.6444 30.6143 30.6444 30.6143 31.0042 30.948C31.2695 31.4042 31.4194 31.839 31.5778 32.3413C31.6804 32.3931 31.7831 32.4449 31.8889 32.4983C32.0444 32.8123 32.2 33.1263 32.3556 33.4403C32.4422 33.5277 32.5288 33.6151 32.6181 33.7052C32.6854 33.7732 32.7528 33.8412 32.8222 33.9113C32.8222 34.0667 32.8222 34.2221 32.8222 34.3823C32.3067 34.2926 32.0777 34.1472 31.7333 33.7543C31.4032 33.3933 31.2797 33.2877 30.8 33.1263C30.8 33.0227 30.8 32.919 30.8 32.8123C30.708 32.7969 30.6159 32.7815 30.5211 32.7657C29.9193 32.5722 29.567 32.0885 29.2444 31.5563C29.2601 30.8273 29.354 30.6374 30.0708 30.5555Z" fill="#E3EFF9"/>
<path d="M21 2.66894C21 2.77256 21 2.87618 21 2.98294C21.0936 2.9965 21.1873 3.01006 21.2838 3.02403C21.7184 3.17287 21.8221 3.34795 22.0597 3.73848C22.1281 3.84635 22.1965 3.95422 22.2669 4.06535C22.4248 4.4576 22.3863 4.63304 22.2444 5.02389C22.1825 4.9142 22.1205 4.80451 22.0567 4.6915C21.9743 4.54862 21.8919 4.40574 21.8069 4.25853C21.6851 4.04543 21.6851 4.04543 21.5609 3.82802C21.1761 3.25172 20.7832 3.10143 20.1347 2.97312C19.7649 2.89896 19.4711 2.83939 19.1333 2.66894C19.1333 2.56533 19.1333 2.46171 19.1333 2.35495C18.7765 2.39068 18.4201 2.43075 18.0639 2.4727C17.8654 2.49455 17.6669 2.51641 17.4623 2.53893C16.942 2.60964 16.942 2.60964 16.7599 2.98539C16.7218 3.0882 16.6837 3.19101 16.6444 3.29693C16.4904 3.34874 16.3364 3.40055 16.1778 3.45393C16.0238 3.68707 16.0238 3.68707 15.8667 3.92492C15.6613 3.92492 15.456 3.92492 15.2444 3.92492C15.2444 4.49481 15.2444 5.06471 15.2444 5.65188C15.0904 5.49645 14.9364 5.34103 14.7778 5.18089C14.6238 5.2327 14.4698 5.28451 14.3111 5.33789C14.347 4.6267 14.4609 4.10308 14.9455 3.56799C16.5312 2.24745 19.1491 1.25376 21 2.66894Z" fill="#C8D6EC"/>
<path d="M23.1778 22.4505C23.4523 22.9353 23.4889 23.1151 23.4889 23.7065C23.3862 23.7065 23.2836 23.7065 23.1778 23.7065C22.8975 24.5367 22.8472 25.1643 22.925 26.0516C22.9338 26.159 22.9426 26.2663 22.9517 26.377C22.9735 26.6383 22.9976 26.8994 23.0222 27.1604C23.2276 27.1604 23.4329 27.1604 23.6444 27.1604C23.6958 27.5231 23.7471 27.8857 23.8 28.2594C24.1593 28.363 24.5187 28.4666 24.8889 28.5734C24.9402 28.4698 24.9916 28.3661 25.0444 28.2594C25.0444 28.363 25.0444 28.4666 25.0444 28.5734C25.3524 28.5734 25.6604 28.5734 25.9778 28.5734C25.9778 28.677 25.9778 28.7806 25.9778 28.8874C25.5023 29.1273 25.102 29.0809 24.5778 29.0444C24.2375 28.8187 24.2375 28.8187 23.9556 28.5734C23.6215 28.4627 23.6215 28.4627 23.3333 28.4164C23.3333 28.3128 23.3333 28.2092 23.3333 28.1024C23.1793 28.1024 23.0253 28.1024 22.8667 28.1024C22.0985 26.8769 21.9742 25.4775 22.1405 24.0475C22.2903 23.5559 22.6273 23.3874 23.0222 23.0785C23.1575 22.7442 23.1575 22.7442 23.1778 22.4505Z" fill="#C5D8EC"/>
<path d="M21.1556 12.4027C21.2069 12.5582 21.2582 12.7136 21.3111 12.8737C21.4651 12.9255 21.6191 12.9773 21.7778 13.0307C21.8291 13.3934 21.8804 13.756 21.9333 14.1297C22.036 14.1297 22.1387 14.1297 22.2444 14.1297C22.2633 14.2339 22.2821 14.3381 22.3016 14.4455C22.4564 15.3028 22.4564 15.3028 22.7403 16.1216C22.9203 16.6388 22.8139 17.0546 22.7111 17.5836C22.6084 17.5836 22.5058 17.5836 22.4 17.5836C22.323 17.3505 22.323 17.3505 22.2444 17.1126C22.1418 17.268 22.0391 17.4235 21.9333 17.5836C21.9333 17.0137 21.9333 16.4438 21.9333 15.8566C21.8307 15.8566 21.728 15.8566 21.6222 15.8566C21.5709 16.0121 21.5196 16.1675 21.4667 16.3276C21.3336 15.9081 21.3144 15.6082 21.3306 15.16C21.3569 14.6053 21.3569 14.6053 21.0778 14.218C20.7448 13.6439 20.8113 13.2183 20.8444 12.5597C20.9471 12.5079 21.0498 12.4561 21.1556 12.4027Z" fill="#E2EBF9"/>
<path d="M22.5556 28.5734C22.7096 28.6252 22.8636 28.677 23.0222 28.7304C23.0222 28.834 23.0222 28.9376 23.0222 29.0444C23.2276 29.0962 23.4329 29.148 23.6444 29.2014C23.6444 29.305 23.6444 29.4086 23.6444 29.5154C23.9011 29.5672 24.1578 29.619 24.4222 29.6724C24.4222 29.776 24.4222 29.8796 24.4222 29.9863C24.8825 29.938 25.3427 29.8888 25.8028 29.8392C25.9337 29.8255 26.0647 29.8118 26.1996 29.7978C26.3876 29.7773 26.3876 29.7773 26.5793 29.7564C26.695 29.744 26.8107 29.7317 26.9299 29.719C27.2354 29.6855 27.2354 29.6855 27.5333 29.5154C27.5333 29.7226 27.5333 29.9298 27.5333 30.1433C27.6873 29.9879 27.8413 29.8325 28 29.6724C28.1027 29.7242 28.2053 29.776 28.3111 29.8294C28.1944 30.8891 28.1944 30.8891 27.8444 31.2423C27.8444 31.0869 27.8444 30.9315 27.8444 30.7713C27.7418 30.7713 27.6391 30.7713 27.5333 30.7713C27.6541 31.254 27.6541 31.254 28 31.5563C27.2806 31.8899 27.2806 31.8899 26.7556 31.7133C26.6786 31.3247 26.6786 31.3247 26.6 30.9283C26.754 30.9283 26.908 30.9283 27.0667 30.9283C27.0153 30.7211 26.964 30.5139 26.9111 30.3003C27.0138 30.3003 27.1164 30.3003 27.2222 30.3003C27.2222 30.1967 27.2222 30.0931 27.2222 29.9863C27.0169 30.0382 26.8116 30.09 26.6 30.1433C26.6 30.247 26.6 30.3506 26.6 30.4573C25.5599 30.4921 24.6374 30.4774 23.6444 30.1433C23.5931 30.0397 23.5418 29.9361 23.4889 29.8294C23.3349 29.7775 23.1809 29.7257 23.0222 29.6724C22.9709 29.4133 22.9196 29.1543 22.8667 28.8874C22.764 28.8874 22.6613 28.8874 22.5556 28.8874C22.5556 28.7838 22.5556 28.6801 22.5556 28.5734Z" fill="#395D91"/>
<path d="M38.4538 17.6026C38.6824 17.614 38.6824 17.614 38.9156 17.6256C39.1526 17.6388 39.1526 17.6388 39.3944 17.6523C39.6351 17.6646 39.6351 17.6646 39.8806 17.6771C40.276 17.6975 40.6713 17.7187 41.0667 17.7406C41.0667 17.8442 41.0667 17.9479 41.0667 18.0546C40.9275 18.0528 40.7883 18.051 40.645 18.0491C39.5295 18.0407 38.4401 18.0675 37.3333 18.2116C37.3333 18.3152 37.3333 18.4188 37.3333 18.5256C37.2307 18.5256 37.128 18.5256 37.0222 18.5256C36.9709 18.681 36.9196 18.8365 36.8667 18.9966C36.764 18.9966 36.6613 18.9966 36.5556 18.9966C36.5556 19.1002 36.5556 19.2038 36.5556 19.3106C36.4625 19.398 36.3695 19.4854 36.2736 19.5755C35.8935 19.9344 35.8935 19.9344 35.7194 20.5077C35.4667 21.0375 35.4667 21.0375 34.9708 21.2632C34.8265 21.2924 34.6821 21.3215 34.5333 21.3515C34.5139 20.4488 34.5139 20.4488 34.6889 20.0956C34.7916 20.0956 34.8942 20.0956 35 20.0956C34.9487 19.9401 34.8973 19.7847 34.8444 19.6246C35.0451 19.4086 35.2531 19.1995 35.4667 18.9966C35.5693 18.9966 35.672 18.9966 35.7778 18.9966C35.9029 18.8703 36.028 18.744 36.1569 18.6139C36.5556 18.2116 36.5556 18.2116 37.0222 18.0546C37.0222 17.951 37.0222 17.8474 37.0222 17.7406C37.5178 17.5891 37.9381 17.5754 38.4538 17.6026Z" fill="#050810"/>
<path d="M15.7111 1.72696C15.7111 1.83058 15.7111 1.93419 15.7111 2.04095C15.6117 2.07981 15.5122 2.11867 15.4097 2.1587C15.0597 2.326 15.0597 2.326 14.9722 2.68856C14.9594 2.7857 14.9466 2.88285 14.9333 2.98293C15.0873 2.93112 15.2413 2.87931 15.4 2.82594C15.3514 3.1988 15.3514 3.1988 15.2444 3.61092C15.0904 3.71454 14.9364 3.81815 14.7778 3.92491C14.5964 4.31223 14.5964 4.31223 14.4569 4.75896C14.2664 5.3252 14.0692 5.88339 13.8444 6.43686C13.6904 6.38505 13.5364 6.33324 13.3778 6.27986C13.4099 6.15681 13.4419 6.03377 13.475 5.90699C13.4942 5.77099 13.5135 5.635 13.5333 5.49488C13.4307 5.39126 13.328 5.28764 13.2222 5.18088C13.0915 4.50484 13.2611 4.10474 13.6111 3.54223C14.8915 1.72696 14.8915 1.72696 15.7111 1.72696Z" fill="#283241"/>
<path d="M10.1111 32.8123C10.2138 32.9159 10.3164 33.0195 10.4222 33.1263C10.2955 33.1012 10.1688 33.0761 10.0382 33.0502C9.40943 32.9576 8.80106 32.9345 8.16666 32.93C8.05257 32.9268 7.93847 32.9236 7.82092 32.9202C7.06653 32.9148 6.57379 33.0381 5.91111 33.4403C6.06511 33.6734 6.06511 33.6734 6.22222 33.9113C6.47888 33.8595 6.73555 33.8077 7 33.7543C7 33.6507 7 33.547 7 33.4403C7.462 33.4921 7.924 33.5439 8.4 33.5973C8.4 33.6491 8.4 33.7009 8.4 33.7543C8.28149 33.7773 8.16298 33.8004 8.04088 33.8242C6.60829 34.1383 5.49517 34.6725 4.51111 35.7952C4.45977 35.6398 4.40844 35.4844 4.35555 35.3242C4.55972 34.9808 4.55972 34.9808 4.82222 34.6963C4.92489 34.6963 5.02755 34.6963 5.13333 34.6963C5.03066 34.5408 4.928 34.3854 4.82222 34.2253C4.77089 34.3807 4.71955 34.5361 4.66666 34.6963C4.51266 34.7481 4.35866 34.7999 4.2 34.8532C4.14866 35.0087 4.09733 35.1641 4.04444 35.3242C3.89044 35.376 3.73644 35.4279 3.57777 35.4812C3.93137 34.4218 4.71825 33.6247 5.66501 33.0582C7.10683 32.3928 8.59988 32.2997 10.1111 32.8123Z" fill="#545E6C"/>
<path d="M20.2222 23.8635C20.3675 24.3361 20.3847 24.4705 20.2222 24.9625C20.1103 26.0562 20.3449 27.0301 20.65 28.073C20.6893 28.2186 20.7286 28.3642 20.7691 28.5142C20.9836 29.2649 21.1441 29.8071 21.7778 30.3003C21.8764 30.3886 21.9751 30.4768 22.0767 30.5677C22.1706 30.6479 22.2644 30.728 22.3611 30.8106C22.4566 30.8923 22.552 30.9741 22.6503 31.0583C22.7217 31.1191 22.7931 31.1798 22.8667 31.2423C22.356 31.5 21.8672 31.3238 21.3111 31.2423C21.4138 31.1387 21.5164 31.0351 21.6222 30.9283C21.5548 30.8668 21.4875 30.8053 21.4181 30.7419C21.1556 30.4573 21.1556 30.4573 20.9125 30.0452C20.7232 29.6548 20.7232 29.6548 20.3778 29.5154C20.2113 29.1909 20.2113 29.1909 20.0472 28.7991C19.9923 28.6693 19.9373 28.5396 19.8807 28.406C19.8394 28.3058 19.7981 28.2056 19.7556 28.1024C19.6016 28.1024 19.4476 28.1024 19.2889 28.1024C19.337 27.9712 19.3851 27.8401 19.4347 27.705C19.6103 27.1266 19.6878 26.5835 19.7556 25.9829C19.84 25.2342 19.9626 24.571 20.2222 23.8635Z" fill="#CDDAE8"/>
<path d="M4.82222 34.0683C4.92489 34.1201 5.02756 34.1719 5.13333 34.2253C5.13333 34.3807 5.13333 34.5361 5.13333 34.6963C5.03287 34.7815 4.93241 34.8667 4.82891 34.9544C4.36303 35.4966 4.4128 35.9919 4.40417 36.6881C4.36948 37.9791 4.36948 37.9791 4.2 38.1502C4.14282 38.5157 4.09074 38.8821 4.04445 39.2492C3.94178 39.1973 3.83911 39.1455 3.73333 39.0922C3.67986 38.7156 3.67986 38.7156 3.65556 38.2483C3.62373 37.6396 3.6097 37.4135 3.26667 36.8942C3.26667 37.8268 3.26667 38.7593 3.26667 39.7201C2.73226 38.6414 2.77054 37.1229 3.15 35.9719C3.42222 35.4812 3.42222 35.4812 3.75035 35.3721C3.8474 35.3563 3.94445 35.3405 4.04445 35.3242C4.09578 35.117 4.14711 34.9098 4.2 34.6963C4.354 34.6963 4.508 34.6963 4.66667 34.6963C4.718 34.489 4.76933 34.2818 4.82222 34.0683Z" fill="#40424B"/>
<path d="M8.15694 32.7436C8.33108 32.746 8.33108 32.746 8.50873 32.7485C9.33385 32.7733 9.99121 32.9008 10.7333 33.2833C10.7333 33.4387 10.7333 33.5941 10.7333 33.7543C9.41459 34.0088 8.28836 33.7719 7 33.4403C7 33.5439 7 33.6475 7 33.7543C6.692 33.8579 6.384 33.9615 6.06667 34.0682C5.964 33.861 5.86133 33.6538 5.75555 33.4403C6.5887 32.8823 7.16359 32.7131 8.15694 32.7436Z" fill="#030817"/>
<path d="M39.2 34.8532C39.795 35.081 40.0075 35.3842 40.2889 35.9522C40.2889 36.0558 40.2889 36.1595 40.2889 36.2662C40.3884 36.2986 40.4878 36.331 40.5903 36.3643C40.9111 36.5802 40.9111 36.5802 41.0278 37.0708C41.047 37.2942 41.047 37.2942 41.0667 37.5222C41.1693 37.5222 41.272 37.5222 41.3778 37.5222C41.4291 37.9885 41.4804 38.4547 41.5333 38.9352C41.4307 38.7797 41.328 38.6243 41.2222 38.4642C41.1906 38.6803 41.1906 38.6803 41.1584 38.9008C40.9326 40.2 40.6573 41.0361 39.6667 41.9181C39.4613 41.8663 39.256 41.8145 39.0444 41.7611C39.1599 41.6542 39.1599 41.6542 39.2778 41.5452C39.5463 41.3095 39.5463 41.3095 39.5111 40.9761C39.6651 40.9761 39.8191 40.9761 39.9778 40.9761C39.9457 40.879 39.9136 40.7818 39.8806 40.6817C39.8613 40.5716 39.8421 40.4616 39.8222 40.3481C39.9249 40.2445 40.0276 40.1409 40.1333 40.0341C40.2333 39.7093 40.2333 39.7093 40.2889 39.4061C40.4429 39.4061 40.5969 39.4061 40.7556 39.4061C40.7556 38.629 40.7556 37.8519 40.7556 37.0512C40.5502 36.9476 40.3449 36.844 40.1333 36.7372C39.9699 36.3744 39.8144 36.0078 39.6667 35.6382C39.4205 35.3632 39.4205 35.3632 39.2 35.1672C39.2 35.0636 39.2 34.96 39.2 34.8532Z" fill="#546F98"/>
<path d="M4.04444 39.2491C4.67113 39.46 4.77172 39.8007 5.13333 40.3481C5.3863 40.5651 5.6455 40.7751 5.91111 40.9761C5.99693 41.0844 6.08275 41.1927 6.17118 41.3042C6.67148 41.7185 7.12043 41.6925 7.73889 41.6728C7.84989 41.6709 7.96089 41.6691 8.07525 41.6672C8.90497 41.6398 9.53619 41.5243 10.2667 41.1331C10.318 41.0295 10.3693 40.9259 10.4222 40.8191C10.6276 40.8709 10.8329 40.9227 11.0444 40.9761C10.7919 41.2444 10.5322 41.5059 10.2667 41.7611C10.164 41.7611 10.0613 41.7611 9.95555 41.7611C9.95555 41.8647 9.95555 41.9683 9.95555 42.0751C9.26698 42.209 8.61477 42.2532 7.91389 42.2517C7.63416 42.2523 7.63416 42.2523 7.34878 42.2529C6.59707 42.2219 6.2674 42.1597 5.75555 41.6041C5.54977 41.4546 5.34226 41.3075 5.13333 41.1625C4.57781 40.7482 4.2806 40.3905 4.04444 39.7201C4.04444 39.5647 4.04444 39.4093 4.04444 39.2491Z" fill="#365A8C"/>
<path d="M10.2667 34.2253C10.5194 34.5883 10.5194 34.5883 10.7333 35.0102C10.9666 35.2006 11.2 35.391 11.4339 35.5806C11.9486 36.0552 12.2575 36.5739 12.3266 37.2787C12.3276 37.6241 12.3167 37.9631 12.2889 38.3072C11.8592 37.8735 11.8878 37.4897 11.8222 36.8942C11.7196 36.8942 11.6169 36.8942 11.5111 36.8942C11.4341 36.5056 11.4341 36.5056 11.3556 36.1092C11.2529 36.1092 11.1502 36.1092 11.0444 36.1092C11.0444 35.902 11.0444 35.6948 11.0444 35.4812C10.7878 35.4812 10.5311 35.4812 10.2667 35.4812C10.2667 35.274 10.2667 35.0668 10.2667 34.8532C9.95867 34.9051 9.65067 34.9569 9.33333 35.0102C9.33333 34.8548 9.33333 34.6994 9.33333 34.5393C9.22465 34.5429 9.11597 34.5465 9.00399 34.5503C8.86243 34.5531 8.72086 34.556 8.575 34.5589C8.36385 34.5643 8.36385 34.5643 8.14844 34.5699C7.77778 34.5393 7.77778 34.5393 7.46667 34.2253C7.26173 34.1158 7.05458 34.0102 6.84444 33.9113C7.92 33.5801 9.22607 33.8568 10.2667 34.2253Z" fill="#85A6CA"/>
<path d="M36.4 24.4915C36.708 24.4915 37.016 24.4915 37.3333 24.4915C37.3333 24.5951 37.3333 24.6987 37.3333 24.8055C38.3892 25.2475 39.3072 25.3344 40.4444 25.2765C40.4444 25.4837 40.4444 25.6909 40.4444 25.9044C40.9064 25.9044 41.3684 25.9044 41.8444 25.9044C41.8444 26.0081 41.8444 26.1117 41.8444 26.2184C41.2676 26.2322 40.6908 26.2405 40.1139 26.2479C39.8697 26.2538 39.8697 26.2538 39.6205 26.2598C38.0628 26.2748 38.0628 26.2748 37.3333 25.7474C37.1972 25.3255 37.1972 25.3255 37.1778 24.9625C37.0751 24.9625 36.9724 24.9625 36.8667 24.9625C36.8667 24.8588 36.8667 24.7552 36.8667 24.6485C36.7127 24.5967 36.5587 24.5448 36.4 24.4915Z" fill="#274272"/>
<path d="M30.3333 29.3584C30.4986 29.6429 30.4986 29.6429 30.6444 29.9864C30.5931 30.1418 30.5418 30.2972 30.4889 30.4573C30.3862 30.3537 30.2836 30.2501 30.1778 30.1434C29.6957 30.1939 29.6957 30.1939 29.2444 30.3003C29.4082 30.4822 29.4082 30.4822 29.7111 30.6143C29.6084 30.718 29.5058 30.8216 29.4 30.9283C29.2948 31.2733 29.2948 31.2733 29.225 31.6544C29.1859 31.8469 29.1859 31.8469 29.146 32.0433C29.1272 32.1416 29.1083 32.24 29.0889 32.3413C28.5499 32.0304 28.5499 32.0305 28 31.7133C28 31.6097 28 31.5061 28 31.3993C27.846 31.3475 27.692 31.2957 27.5333 31.2423C27.5333 31.0869 27.5333 30.9315 27.5333 30.7713C27.6873 30.8231 27.8413 30.875 28 30.9283C28.077 30.7859 28.154 30.6434 28.2333 30.4966C28.708 29.772 29.4769 29.3584 30.3333 29.3584Z" fill="#0C172B"/>
<path d="M43.5556 23.8635C43.6582 23.9153 43.7609 23.9671 43.8667 24.0205C43.9133 24.5728 43.9233 24.8736 43.6218 25.347C43.5133 25.4629 43.4048 25.5789 43.2931 25.6984C43.1866 25.8156 43.0801 25.9327 42.9704 26.0535C42.1129 26.8464 42.1129 26.8464 41.5333 26.8464C41.5333 26.691 41.5333 26.5356 41.5333 26.3754C41.1227 26.3754 40.712 26.3754 40.2889 26.3754C40.2889 26.3236 40.2889 26.2718 40.2889 26.2184C40.8022 26.2184 41.3156 26.2184 41.8444 26.2184C41.8444 26.1148 41.8444 26.0112 41.8444 25.9044C41.7418 25.9044 41.6391 25.9044 41.5333 25.9044C41.5333 25.749 41.5333 25.5936 41.5333 25.4334C41.6328 25.3881 41.7322 25.3428 41.8347 25.2961C42.1792 25.1464 42.1792 25.1464 42.3111 24.8055C42.5678 24.8055 42.8244 24.8055 43.0889 24.8055C43.137 24.6792 43.1851 24.5529 43.2347 24.4228C43.4 24.0205 43.4 24.0205 43.5556 23.8635Z" fill="#121F33"/>
<path d="M21.9333 20.2526C22.0986 20.5469 22.0986 20.5469 22.2444 20.8805C22.1931 20.9842 22.1418 21.0878 22.0889 21.1945C22.1916 21.2464 22.2942 21.2982 22.4 21.3515C22.2973 21.5588 22.1947 21.766 22.0889 21.9795C23.214 22.1158 24.0501 21.7105 25.0481 21.2436C25.5111 21.0375 25.5111 21.0375 25.8222 21.0375C25.7709 20.8303 25.7196 20.6231 25.6667 20.4096C25.872 20.5132 26.0773 20.6168 26.2889 20.7236C26.2889 20.9308 26.2889 21.138 26.2889 21.3515C26.1784 21.3951 26.0679 21.4386 25.9541 21.4834C25.7396 21.5687 25.7396 21.5687 25.5208 21.6557C25.3783 21.7122 25.2357 21.7686 25.0888 21.8268C24.7451 21.9481 24.7451 21.9481 24.5778 22.1365C24.3372 22.1511 24.3372 22.1511 24.0917 22.166C23.3971 22.3129 23.1258 22.5486 22.6303 23.035C22.4 23.2355 22.4 23.2355 22.0889 23.2355C22.0889 23.5464 22.0889 23.8572 22.0889 24.1775C21.9349 24.0739 21.7809 23.9702 21.6222 23.8635C21.6736 23.7534 21.7249 23.6433 21.7778 23.5299C21.9491 23.0328 21.9679 22.6592 21.9333 22.1365C21.882 22.0329 21.8307 21.9293 21.7778 21.8225C21.763 21.5841 21.7576 21.3451 21.7583 21.1062C21.7577 20.9165 21.7577 20.9165 21.7571 20.7229C21.7778 20.4096 21.7778 20.4096 21.9333 20.2526Z" fill="#4F6277"/>
<path d="M26.4444 20.7236C27.6502 20.6221 28.45 21.0654 29.3903 21.8029C29.7889 22.1613 29.8627 22.2791 30.0125 22.8234C30.0157 22.9594 30.0189 23.0954 30.0222 23.2355C29.1995 22.9587 28.7665 22.7532 28.1556 22.1365C27.6477 21.8518 27.1266 21.599 26.6 21.3515C26.7027 21.2997 26.8053 21.2479 26.9111 21.1945C26.9111 21.0909 26.9111 20.9873 26.9111 20.8805C26.7571 20.8287 26.6031 20.7769 26.4444 20.7236Z" fill="#445366"/>
<path d="M21.4667 27.7884C21.9894 27.9642 22.1963 28.1608 22.5556 28.5734C22.5556 28.677 22.5556 28.7806 22.5556 28.8874C22.6582 28.8874 22.7609 28.8874 22.8667 28.8874C22.918 29.1464 22.9693 29.4055 23.0222 29.6724C23.2276 29.7242 23.4329 29.776 23.6444 29.8293C23.6444 29.933 23.6444 30.0366 23.6444 30.1433C24.6198 30.247 25.5951 30.3506 26.6 30.4573C26.6 30.3537 26.6 30.2501 26.6 30.1433C26.8053 30.0915 27.0107 30.0397 27.2222 29.9863C27.2222 30.09 27.2222 30.1936 27.2222 30.3003C26.7556 30.6143 26.7556 30.6143 26.2889 30.6143C26.2889 30.7179 26.2889 30.8216 26.2889 30.9283C24.8906 31.0165 23.9393 30.6371 22.7111 29.9863C22.7111 29.8827 22.7111 29.7791 22.7111 29.6724C22.5571 29.6724 22.4031 29.6724 22.2444 29.6724C22.2444 29.5169 22.2444 29.3615 22.2444 29.2014C22.1418 29.2014 22.0391 29.2014 21.9333 29.2014C21.9333 29.0977 21.9333 28.9941 21.9333 28.8874C21.8307 28.8874 21.728 28.8874 21.6222 28.8874C21.5709 28.5247 21.5196 28.162 21.4667 27.7884Z" fill="#223B64"/>
<path d="M22.4 5.02389C22.4513 5.02389 22.5027 5.02389 22.5556 5.02389C22.564 5.48183 22.5701 5.93962 22.575 6.39761C22.5776 6.52713 22.5802 6.65665 22.5829 6.7901C22.5844 6.97831 22.5844 6.97831 22.5859 7.17033C22.5884 7.34298 22.5884 7.34298 22.5909 7.51912C22.5505 7.89676 22.4299 8.15008 22.2444 8.47781C22.1418 8.426 22.0391 8.37419 21.9333 8.32082C21.9173 8.4212 21.9012 8.52158 21.8847 8.625C21.8494 8.73185 21.8141 8.83871 21.7778 8.9488C21.6238 9.00061 21.4698 9.05242 21.3111 9.1058C21.3111 9.20942 21.3111 9.31303 21.3111 9.41979C20.7365 9.61312 20.3458 9.52095 19.7556 9.41979C19.7042 9.62703 19.6529 9.83426 19.6 10.0478C19.5487 9.99597 19.4973 9.94416 19.4444 9.89078C19.0256 9.85361 18.6099 9.82453 18.1903 9.80247C18.0133 9.7923 18.0133 9.7923 17.8327 9.78193C17.5403 9.76523 17.2479 9.74942 16.9556 9.73379C16.9556 9.63017 16.9556 9.52655 16.9556 9.41979C17.1168 9.4121 17.278 9.40441 17.4441 9.39649C17.6572 9.3847 17.8703 9.37284 18.0833 9.36092C18.1894 9.35606 18.2955 9.3512 18.4048 9.3462C18.9842 9.31213 19.4073 9.23882 19.9111 8.9488C20.1196 8.99633 20.3271 9.04903 20.5333 9.1058C20.9505 9.04525 20.9505 9.04525 21.3111 8.9488C21.4138 8.63795 21.5164 8.3271 21.6222 8.00682C21.7762 8.00682 21.9302 8.00682 22.0889 8.00682C22.0889 7.48873 22.0889 6.97065 22.0889 6.43686C22.1916 6.43686 22.2942 6.43686 22.4 6.43686C22.4 5.97058 22.4 5.5043 22.4 5.02389Z" fill="#537FB6"/>
<path d="M11.2 41.2901C11.5111 41.7611 11.5111 41.7611 11.4625 42.1438C11.0035 42.8472 10.2068 43.0742 9.41779 43.2679C8.31786 43.4435 7.2705 43.3932 6.22222 43.0171C6.75174 42.8385 7.12049 42.8852 7.66111 43.0073C7.79987 43.0378 7.93863 43.0684 8.0816 43.0999C8.18667 43.1243 8.29174 43.1488 8.4 43.1741C8.4 43.0704 8.4 42.9668 8.4 42.8601C8.246 42.8083 8.092 42.7564 7.93333 42.7031C8.05725 42.6727 8.18118 42.6424 8.30885 42.6111C9.53347 42.3078 9.53347 42.3078 10.7333 41.9181C10.7333 41.8145 10.7333 41.7109 10.7333 41.6041C10.8873 41.5005 11.0413 41.3969 11.2 41.2901Z" fill="#262932"/>
<path d="M12.2889 36.8942C12.4429 36.946 12.5969 36.9978 12.7556 37.0512C12.9253 38.2713 12.9477 39.2117 12.4444 40.3481C12.5984 40.3481 12.7524 40.3481 12.9111 40.3481C12.9304 40.2251 12.9496 40.102 12.9694 39.9753C13.0667 39.5631 13.0667 39.5631 13.3778 39.2491C13.1834 40.4603 12.5678 41.4265 11.6667 42.2321C11.564 42.1803 11.4613 42.1285 11.3556 42.0751C11.455 41.9909 11.5545 41.9067 11.6569 41.82C12.0377 41.3774 12.0816 41.0799 12.1333 40.5051C11.8253 40.6605 11.8253 40.6605 11.5111 40.8191C11.5111 40.6119 11.5111 40.4046 11.5111 40.1911C11.6138 40.1911 11.7164 40.1911 11.8222 40.1911C11.8222 40.0875 11.8222 39.9839 11.8222 39.8771C11.9249 39.8771 12.0276 39.8771 12.1333 39.8771C12.1847 39.4627 12.236 39.0482 12.2889 38.6212C12.1862 38.6212 12.0836 38.6212 11.9778 38.6212C11.9778 38.5175 11.9778 38.4139 11.9778 38.3072C12.0804 38.3072 12.1831 38.3072 12.2889 38.3072C12.2889 37.8409 12.2889 37.3746 12.2889 36.8942Z" fill="#5575A3"/>
<path d="M32.5111 36.1092C32.7164 36.161 32.9218 36.2128 33.1333 36.2662C33.082 36.3698 33.0307 36.4735 32.9778 36.5802C33.0804 36.5802 33.1831 36.5802 33.2889 36.5802C33.1528 37.3259 33.1528 37.3259 32.9778 37.6792C33.1318 37.6274 33.2858 37.5756 33.4444 37.5222C33.6016 38.2042 33.6392 38.6304 33.2889 39.2492C33.1349 39.301 32.9809 39.3528 32.8222 39.4062C32.6906 39.1619 32.5615 38.9163 32.4333 38.6702C32.3611 38.5336 32.289 38.397 32.2146 38.2563C32.0369 37.8177 32.011 37.5196 32.0444 37.0512C32.1471 37.0512 32.2498 37.0512 32.3556 37.0512C32.4069 36.7403 32.4582 36.4295 32.5111 36.1092Z" fill="#9EBDE0"/>
<path d="M21.1556 23.2355C21.1598 23.4906 21.1628 23.7457 21.1653 24.0008C21.1671 24.1429 21.1689 24.285 21.1707 24.4314C21.1556 24.8055 21.1556 24.8055 21 25.1194C20.9638 25.5715 20.9347 26.0208 20.9125 26.4735C20.9024 26.6624 20.9024 26.6624 20.8921 26.855C20.8756 27.1661 20.86 27.4772 20.8444 27.7884C20.7418 27.7884 20.6391 27.7884 20.5333 27.7884C19.9882 26.4031 19.9005 25.2786 20.3778 23.8635C20.4804 23.8635 20.5831 23.8635 20.6889 23.8635C20.6889 23.708 20.6889 23.5526 20.6889 23.3925C21 23.2355 21 23.2355 21.1556 23.2355Z" fill="#060912"/>
<path d="M32.0444 32.0273C32.2466 32.207 32.2466 32.207 32.4528 32.3904C32.9057 32.7747 33.3792 33.0211 33.9111 33.2833C33.9624 33.3869 34.0138 33.4905 34.0667 33.5973C34.0153 33.7527 33.964 33.9081 33.9111 34.0683C34.0138 34.1719 34.1164 34.2755 34.2222 34.3823C34.1228 34.4244 34.0233 34.4665 33.9208 34.5098C33.5485 34.6785 33.5485 34.6785 33.4444 35.1672C33.3418 35.1672 33.2391 35.1672 33.1333 35.1672C33.0307 35.4781 32.928 35.789 32.8222 36.1092C32.7196 36.1092 32.6169 36.1092 32.5111 36.1092C32.4598 36.4201 32.4084 36.7309 32.3556 37.0512C32.2529 37.0512 32.1502 37.0512 32.0444 37.0512C32.1565 36.3277 32.4042 35.6897 32.6667 35.0102C32.7693 35.0102 32.872 35.0102 32.9778 35.0102C32.9778 34.4404 32.9778 33.8705 32.9778 33.2833C32.7724 33.1797 32.5671 33.0761 32.3556 32.9693C32.0833 32.5572 32.0833 32.5572 31.8889 32.1843C31.9402 32.1325 31.9916 32.0807 32.0444 32.0273Z" fill="#4F6893"/>
<path d="M4.97778 38.9352C5.28578 38.9352 5.59378 38.9352 5.91111 38.9352C6.14825 39.4034 6.36835 39.8486 6.53333 40.3481C7.04266 40.5585 7.56563 40.5159 8.10833 40.5051C8.98781 40.4878 8.98781 40.4878 9.33333 40.6621C9.38466 40.5067 9.436 40.3513 9.48889 40.1911C9.89955 40.1911 10.3102 40.1911 10.7333 40.1911C10.7462 40.0681 10.759 39.945 10.7722 39.8183C10.8889 39.4061 10.8889 39.4061 11.2097 39.2001C11.3092 39.1645 11.4086 39.1288 11.5111 39.0921C11.4598 39.4548 11.4084 39.8175 11.3556 40.1911C11.2529 40.1911 11.1502 40.1911 11.0444 40.1911C11.0444 40.2947 11.0444 40.3984 11.0444 40.5051C10.8744 40.4986 10.7044 40.4922 10.5292 40.4855C9.94172 40.4548 9.94172 40.4548 9.48889 40.8191C8.48136 41.0225 7.13674 41.2423 6.22222 40.6621C5.891 40.235 5.64022 39.887 5.5125 39.3571C5.49004 39.2697 5.46758 39.1822 5.44444 39.0921C5.29044 39.0403 5.13644 38.9885 4.97778 38.9352Z" fill="#C0D5EB"/>
<path d="M33.4444 40.0341C33.9507 40.4791 34.1477 40.7698 34.2222 41.4471C34.5329 41.502 34.8441 41.5536 35.1556 41.6041C35.4395 41.6527 35.4395 41.6527 35.7292 41.7022C36.7859 41.8335 37.854 41.6692 38.8889 41.4471C38.9659 41.6025 38.9659 41.6025 39.0444 41.7611C37.5032 42.6027 36.304 42.4867 34.6366 42.0671C34.2031 41.9112 33.9263 41.7749 33.6 41.4471C33.5052 41.092 33.5052 41.092 33.4833 40.7112C33.4745 40.5843 33.4657 40.4574 33.4566 40.3267C33.4526 40.2301 33.4486 40.1336 33.4444 40.0341Z" fill="#537BAF"/>
<path d="M21.1556 3.29693C21.5684 3.68581 21.904 4.00877 22.0889 4.5529C22.101 4.91902 22.1028 5.28582 22.0889 5.65188C21.9862 5.65188 21.8836 5.65188 21.7778 5.65188C21.7264 6.27358 21.6751 6.89529 21.6222 7.53584C21.3142 7.53584 21.0062 7.53584 20.6889 7.53584C20.6889 7.69126 20.6889 7.84669 20.6889 8.00683C20.4322 8.00683 20.1756 8.00683 19.9111 8.00683C19.8598 7.90321 19.8084 7.79959 19.7556 7.69283C19.6529 7.79645 19.5502 7.90007 19.4444 8.00683C19.1352 8.06925 18.8239 8.12265 18.5111 8.16382C18.5111 8.0602 18.5111 7.95659 18.5111 7.84983C18.8028 7.68302 18.8028 7.68302 19.1333 7.53584C19.236 7.58765 19.3387 7.63945 19.4444 7.69283C19.4958 7.53741 19.5471 7.38198 19.6 7.22184C20.062 7.22184 20.524 7.22184 21 7.22184C21.1166 6.75113 21.2194 6.28467 21.3111 5.80887C21.4138 5.80887 21.5164 5.80887 21.6222 5.80887C21.619 5.65992 21.6158 5.51097 21.6125 5.35751C21.6222 4.86689 21.6222 4.86689 21.7778 4.5529C21.6751 4.5529 21.5724 4.5529 21.4667 4.5529C21.2712 4.09667 21.1556 3.79994 21.1556 3.29693Z" fill="#CEDFF2"/>
<path d="M16.4889 1.41297C16.5916 1.46478 16.6942 1.51659 16.8 1.56997C16.7487 1.67359 16.6973 1.7772 16.6444 1.88396C17.6198 1.88396 18.5951 1.88396 19.6 1.88396C19.041 2.26006 18.69 2.26382 18.025 2.32551C17.01 2.436 16.235 2.6986 15.4 3.29693C15.3487 3.19331 15.2973 3.0897 15.2444 2.98294C15.1418 2.98294 15.0391 2.98294 14.9333 2.98294C14.9847 2.72389 15.036 2.46485 15.0889 2.19795C15.2942 2.14615 15.4996 2.09434 15.7111 2.04096C15.7111 1.93734 15.7111 1.83372 15.7111 1.72696C16.0806 1.56016 16.0806 1.56016 16.4889 1.41297Z" fill="#23314C"/>
<path d="M21.7778 7.06485C21.8804 7.06485 21.9831 7.06485 22.0889 7.06485C22.0889 7.16847 22.0889 7.27209 22.0889 7.37884C22.1916 7.43065 22.2942 7.48246 22.4 7.53584C22.2973 7.53584 22.1947 7.53584 22.0889 7.53584C22.0889 7.69127 22.0889 7.84669 22.0889 8.00683C21.9349 8.00683 21.7809 8.00683 21.6222 8.00683C21.5998 8.10397 21.5773 8.20111 21.5542 8.3012C21.4667 8.63482 21.4667 8.63482 21.3111 8.94881C21.1058 8.94881 20.9004 8.94881 20.6889 8.94881C20.6376 9.05243 20.5862 9.15604 20.5333 9.2628C20.4435 9.23042 20.3537 9.19804 20.2611 9.16468C19.9131 9.06742 19.9131 9.06742 19.6535 9.2579C19.1363 9.48757 18.6372 9.45316 18.0833 9.43942C17.9749 9.43801 17.8664 9.43659 17.7546 9.43513C17.4882 9.43145 17.2219 9.42582 16.9556 9.4198C16.9556 9.31618 16.9556 9.21256 16.9556 9.10581C16.8016 9.054 16.6476 9.00219 16.4889 8.94881C16.6744 8.95245 16.8599 8.95609 17.051 8.95985C17.2946 8.96279 17.5383 8.96565 17.7819 8.96843C17.9042 8.97106 18.0264 8.9737 18.1523 8.97641C18.2701 8.97742 18.3879 8.97843 18.5093 8.97947C18.6718 8.98194 18.6718 8.98194 18.8376 8.98446C19.1849 8.96541 19.1849 8.96541 19.6 8.63482C19.9518 8.53547 19.9518 8.53547 20.3292 8.45819C20.4549 8.43189 20.5806 8.40558 20.7102 8.37847C20.8058 8.35945 20.9015 8.34042 21 8.32082C21.0513 8.11359 21.1027 7.90635 21.1556 7.69284C21.3609 7.64103 21.5662 7.58922 21.7778 7.53584C21.7778 7.38041 21.7778 7.22499 21.7778 7.06485Z" fill="#99BAE1"/>
<path d="M18.2 30.4573C18.3027 30.4573 18.4053 30.4573 18.5111 30.4573C18.5624 30.6128 18.6138 30.7682 18.6667 30.9283C18.6153 31.0319 18.564 31.1356 18.5111 31.2423C18.3058 31.2423 18.1004 31.2423 17.8889 31.2423C17.8889 31.5532 17.8889 31.864 17.8889 32.1843C17.7445 32.1746 17.6001 32.1649 17.4514 32.1549C16.9588 32.1335 16.9588 32.1335 16.6833 32.4198C16.5871 32.5364 16.5871 32.5364 16.4889 32.6553C16.3862 32.6553 16.2836 32.6553 16.1778 32.6553C16.2291 32.8107 16.2804 32.9661 16.3333 33.1263C16.2359 33.1548 16.1384 33.1833 16.038 33.2127C15.9109 33.2522 15.7838 33.2917 15.6528 33.3323C15.4633 33.3897 15.4633 33.3897 15.27 33.4482C14.8817 33.5837 14.8817 33.5837 14.6222 34.0683C14.5196 34.0683 14.4169 34.0683 14.3111 34.0683C14.3111 33.9128 14.3111 33.7574 14.3111 33.5973C14.4138 33.5973 14.5164 33.5973 14.6222 33.5973C14.5709 33.4418 14.5196 33.2864 14.4667 33.1263C14.5567 33.1093 14.6467 33.0923 14.7395 33.0748C15.683 32.7899 16.4431 31.9353 17.1111 31.2423C17.6582 30.7713 17.6582 30.7713 18.2 30.7713C18.2 30.6677 18.2 30.5641 18.2 30.4573Z" fill="#EFF7FB"/>
<path d="M22.2444 29.9863C22.3984 30.0382 22.5524 30.09 22.7111 30.1433C22.7111 30.247 22.7111 30.3506 22.7111 30.4573C22.8747 30.4816 22.8747 30.4816 23.0417 30.5064C23.6397 30.6507 24.2164 30.8513 24.6331 31.3251C24.9719 31.6314 25.2509 31.6669 25.6958 31.7427C25.836 31.7676 25.9762 31.7925 26.1206 31.8182C26.2809 31.844 26.2809 31.844 26.4444 31.8703C26.4444 31.9221 26.4444 31.9739 26.4444 32.0273C24.9803 32.089 23.674 32.1086 22.4778 31.1638C22.0889 30.7713 22.0889 30.7713 21.9333 30.3003C22.036 30.3003 22.1387 30.3003 22.2444 30.3003C22.2444 30.1967 22.2444 30.0931 22.2444 29.9863Z" fill="#070D17"/>
<path d="M4.2 39.2491C4.45666 39.2491 4.71333 39.2491 4.97777 39.2491C5.0259 39.4143 5.0259 39.4143 5.075 39.5828C5.44603 40.3658 5.93451 40.8533 6.72777 41.192C7.95737 41.3988 8.85603 41.3899 9.96953 40.7842C10.2667 40.6621 10.2667 40.6621 10.7333 40.8191C10.6307 40.8191 10.528 40.8191 10.4222 40.8191C10.3709 40.9745 10.3196 41.13 10.2667 41.2901C9.45061 41.7439 8.67081 41.8173 7.74861 41.8396C7.64142 41.8444 7.53423 41.8492 7.42379 41.8541C6.82295 41.8545 6.56754 41.7904 6.10494 41.3937C5.98965 41.2559 5.87435 41.1181 5.75555 40.9761C5.47178 40.7365 5.18374 40.5044 4.89271 40.2739C4.6259 39.9909 4.59444 39.7807 4.51111 39.4061C4.40844 39.3543 4.30577 39.3025 4.2 39.2491Z" fill="#577FB1"/>
<path d="M36.9153 34.1075C37.0483 34.1118 37.1814 34.116 37.3184 34.1204C38.0678 34.1567 38.584 34.2194 39.2 34.6962C38.8889 35.0102 38.8889 35.0102 38.5877 35.0171C38.4065 34.9949 38.4065 34.9949 38.2217 34.9722C38.088 34.957 37.9542 34.9419 37.8164 34.9262C37.6762 34.9086 37.5361 34.891 37.3917 34.8729C35.4914 34.6327 35.4914 34.6327 33.6 34.8532C33.5487 34.9569 33.4973 35.0605 33.4444 35.1672C33.4833 34.8729 33.4833 34.8729 33.6 34.5392C34.0982 34.1668 34.5543 34.2121 35.1556 34.2253C35.7007 33.9502 36.3177 34.0779 36.9153 34.1075Z" fill="#A0B9DA"/>
<path d="M16.9556 31.0853C17.1096 31.1889 17.2636 31.2926 17.4222 31.3993C15.3834 33.0272 15.3834 33.0272 14.6222 33.2833C14.6222 33.3869 14.6222 33.4905 14.6222 33.5973C14.5099 33.5908 14.3976 33.5843 14.2819 33.5776C13.8122 33.5987 13.4914 33.7153 13.0667 33.9113C13.3137 33.355 13.5598 32.9313 14.1349 32.6909C14.238 32.6597 14.341 32.6285 14.4472 32.5964C15.0789 32.3758 15.3992 32.0402 15.8667 31.5563C16.2324 31.3335 16.5412 31.217 16.9556 31.0853Z" fill="#E1EBF8"/>
<path d="M33.2889 40.6621C33.3402 40.6621 33.3916 40.6621 33.4444 40.6621C33.4573 40.7852 33.4701 40.9082 33.4833 41.035C33.5543 41.4595 33.5543 41.4595 33.8637 41.6139C35.0752 42.1113 36.6719 42.5829 37.9556 42.1198C38.0486 42.0759 38.1416 42.032 38.2375 41.9868C38.7687 41.745 38.9694 41.7358 39.5111 41.9181C39.5111 41.9699 39.5111 42.0217 39.5111 42.0751C39.0463 42.238 38.5792 42.3928 38.1111 42.5461C38.0088 42.5831 37.9066 42.6201 37.8012 42.6583C36.8739 42.9554 36.085 42.77 35.1556 42.5461C35.0354 42.5194 34.9153 42.4926 34.7916 42.4651C34.2551 42.3401 33.7661 42.199 33.2889 41.9181C33.2889 41.5036 33.2889 41.0891 33.2889 40.6621Z" fill="#34507C"/>
<path d="M31.2667 34.3822C31.3693 34.3822 31.472 34.3822 31.5778 34.3822C31.5778 34.4859 31.5778 34.5895 31.5778 34.6962C31.8344 34.6962 32.0911 34.6962 32.3556 34.6962C32.5645 35.2234 32.4533 35.5606 32.2851 36.0859C32.1152 36.7593 32.0915 37.4588 32.0444 38.1502C31.7431 38.0913 31.7431 38.0913 31.4222 37.9932C31.1722 37.4885 31.2577 36.9827 31.2667 36.4232C31.4207 36.3714 31.5747 36.3196 31.7333 36.2662C31.7847 35.9035 31.836 35.5409 31.8889 35.1672C31.7349 35.0604 31.7349 35.0604 31.5778 34.9514C31.4751 34.8672 31.3724 34.783 31.2667 34.6962C31.2667 34.5926 31.2667 34.489 31.2667 34.3822Z" fill="#152742"/>
<path d="M9.33333 34.5392C9.33333 34.6947 9.33333 34.8501 9.33333 35.0102C9.64133 34.9584 9.94933 34.9066 10.2667 34.8532C10.2153 35.1123 10.164 35.3713 10.1111 35.6382C9.70044 35.5864 9.28978 35.5346 8.86667 35.4812C8.86667 35.3776 8.86667 35.274 8.86667 35.1672C8.56551 35.1324 8.26406 35.1002 7.9625 35.0691C7.79466 35.0509 7.62683 35.0327 7.4539 35.0139C6.96947 34.9671 6.96947 34.9671 6.53333 35.3242C6.22222 35.2654 6.22222 35.2654 5.91111 35.1672C5.75711 35.1672 5.60311 35.1672 5.44444 35.1672C6.60487 34.1366 7.89566 34.3903 9.33333 34.5392Z" fill="#CADBF0"/>
<path d="M19.9111 29.2014C20.2806 29.4467 20.2806 29.4467 20.5333 29.8293C20.6208 30.3886 20.6208 30.3886 20.5333 30.9283C20.1639 31.2423 20.1639 31.2423 19.7556 31.3993C19.6529 31.3475 19.5502 31.2957 19.4444 31.2423C19.4958 31.0869 19.5471 30.9315 19.6 30.7713C19.7027 30.7713 19.8053 30.7713 19.9111 30.7713C19.8598 30.4087 19.8084 30.046 19.7556 29.6724C19.5342 29.7938 19.5342 29.7938 19.3083 29.9177C19.1479 29.9921 18.9875 30.0666 18.8222 30.1433C18.7196 30.0915 18.6169 30.0397 18.5111 29.9863C18.5111 30.09 18.5111 30.1936 18.5111 30.3003C18.2544 30.3521 17.9978 30.404 17.7333 30.4573C18.8398 29.069 18.8398 29.069 19.9111 29.2014Z" fill="#AEC8E5"/>
<path d="M36.4 23.2355C36.554 23.4686 36.554 23.4686 36.7111 23.7065C37.138 23.8213 37.138 23.8213 37.625 23.8733C38.5202 23.9898 38.5202 23.9898 38.8877 24.1854C39.3242 24.3937 39.6927 24.3646 40.1722 24.3541C40.4237 24.3498 40.4237 24.3498 40.6802 24.3455C40.8077 24.3419 40.9353 24.3382 41.0667 24.3345C41.0153 24.5935 40.964 24.8526 40.9111 25.1194C41.0651 25.1713 41.2191 25.2231 41.3778 25.2764C41.3264 25.4319 41.2751 25.5873 41.2222 25.7474C41.0682 25.7474 40.9142 25.7474 40.7556 25.7474C40.7556 25.4366 40.7556 25.1257 40.7556 24.8055C40.0369 24.8055 39.3182 24.8055 38.5778 24.8055C38.4751 24.5982 38.3724 24.391 38.2667 24.1775C37.6398 24.2643 37.0191 24.3589 36.4 24.4915C36.4 24.077 36.4 23.6625 36.4 23.2355Z" fill="#B3CCE8"/>
<path d="M39.5111 35.4812C39.9963 35.9219 40.2153 36.283 40.4444 36.8942C40.5471 36.946 40.6498 36.9978 40.7556 37.0512C40.7556 37.8283 40.7556 38.6055 40.7556 39.4061C40.5502 39.4061 40.3449 39.4061 40.1333 39.4061C39.7183 38.5553 39.8123 37.7576 39.8417 36.8304C39.8231 36.2931 39.744 35.9586 39.5111 35.4812Z" fill="#C8DDF0"/>
<path d="M15.2444 3.92491C15.3984 3.92491 15.5524 3.92491 15.7111 3.92491C15.679 4.09977 15.6469 4.27462 15.6139 4.45477C15.5946 4.64258 15.5754 4.83039 15.5556 5.02389C15.6582 5.12751 15.7609 5.23112 15.8667 5.33788C15.9311 5.78066 15.9311 5.78066 15.9639 6.29948C15.9755 6.47151 15.9872 6.64353 15.9991 6.82076C16.0068 6.95312 16.0144 7.08547 16.0222 7.22184C16.3816 7.22184 16.7409 7.22184 17.1111 7.22184C17.0084 7.27365 16.9058 7.32546 16.8 7.37884C16.8 7.53426 16.8 7.68969 16.8 7.84983C17.0567 7.74621 17.3133 7.64259 17.5778 7.53583C17.6291 7.63945 17.6804 7.74307 17.7333 7.84983C17.8873 7.95344 18.0413 8.05706 18.2 8.16382C17.9765 8.17659 17.7529 8.18569 17.5292 8.19326C17.3424 8.20145 17.3424 8.20145 17.1518 8.20981C16.8 8.16382 16.8 8.16382 16.5211 7.94611C16.3333 7.69283 16.3333 7.69283 16.3333 7.37884C16.0253 7.37884 15.7173 7.37884 15.4 7.37884C15.4032 7.20398 15.4064 7.02913 15.4097 6.84897C15.441 6.30621 15.441 6.30621 15.2444 5.96587C15.2051 5.70846 15.1736 5.44978 15.1472 5.1907C15.1324 5.05328 15.1175 4.91587 15.1023 4.77429C15.0889 4.3959 15.0889 4.3959 15.2444 3.92491Z" fill="#D1E1F1"/>
<path d="M22.8667 16.6416C23.1036 17.1028 23.3024 17.5706 23.4889 18.0546C23.5916 18.0546 23.6942 18.0546 23.8 18.0546C24.1789 18.7261 24.2279 19.3364 24.1111 20.0956C23.8389 20.4194 23.8389 20.4194 23.4889 20.5665C23.2836 20.5665 23.0782 20.5665 22.8667 20.5665C22.764 20.3075 22.6613 20.0485 22.5556 19.7816C22.7096 19.8334 22.8636 19.8852 23.0222 19.9386C23.0222 20.0422 23.0222 20.1458 23.0222 20.2526C23.2276 20.2007 23.4329 20.1489 23.6444 20.0956C23.5931 19.5257 23.5418 18.9558 23.4889 18.3686C23.3349 18.3168 23.1809 18.265 23.0222 18.2116C22.9709 18.0562 22.9196 17.9007 22.8667 17.7406C22.764 17.7406 22.6613 17.7406 22.5556 17.7406C22.5556 18.2069 22.5556 18.6732 22.5556 19.1536C22.2119 18.6333 22.2095 18.4715 22.225 17.8682C22.2278 17.7267 22.2306 17.5852 22.2335 17.4395C22.2371 17.3316 22.2407 17.2238 22.2444 17.1126C22.2958 17.268 22.3471 17.4235 22.4 17.5836C22.5027 17.5836 22.6053 17.5836 22.7111 17.5836C22.7624 17.2728 22.8138 16.9619 22.8667 16.6416Z" fill="#E0EDF7"/>
<path d="M28.7778 28.1024C29.1371 28.206 29.4964 28.3096 29.8667 28.4164C29.8667 28.4682 29.8667 28.52 29.8667 28.5734C29.7692 28.5888 29.6718 28.6041 29.5714 28.62C29.4442 28.6435 29.3171 28.6669 29.1861 28.6911C29.0598 28.713 28.9335 28.7348 28.8033 28.7574C28.4391 28.8587 28.4391 28.8587 28.2661 29.2136C28.2297 29.3132 28.1932 29.4128 28.1556 29.5154C28.3096 29.4635 28.4636 29.4117 28.6222 29.3584C28.6222 29.2547 28.6222 29.1511 28.6222 29.0444C28.8276 28.9926 29.0329 28.9407 29.2444 28.8874C29.2958 28.991 29.3471 29.0946 29.4 29.2014C29.4 29.0459 29.4 28.8905 29.4 28.7304C29.5027 28.7304 29.6053 28.7304 29.7111 28.7304C29.7624 28.9894 29.8138 29.2485 29.8667 29.5154C29.0889 29.9078 29.0889 29.9078 28.3111 30.3003C28.3111 30.1449 28.3111 29.9895 28.3111 29.8293C27.844 29.7772 27.844 29.7772 27.5819 30.0648C27.5146 30.1426 27.4472 30.2203 27.3778 30.3003C27.3264 29.9895 27.2751 29.6786 27.2222 29.3584C27.4789 29.3066 27.7356 29.2547 28 29.2014C28 28.9941 28 28.7869 28 28.5734C28.2567 28.5216 28.5133 28.4698 28.7778 28.4164C28.7778 28.3128 28.7778 28.2091 28.7778 28.1024Z" fill="#859AB7"/>
<path d="M38.5778 18.0546C38.3724 18.1064 38.1671 18.1582 37.9556 18.2116C37.9556 18.3152 37.9556 18.4188 37.9556 18.5256C37.8016 18.5256 37.6476 18.5256 37.4889 18.5256C37.4744 18.6616 37.4744 18.6616 37.4597 18.8003C37.2832 19.2938 36.9641 19.4674 36.5556 19.7816C36.4689 19.8981 36.3823 20.0147 36.2931 20.1348C36.2257 20.2255 36.1583 20.3161 36.0889 20.4096C35.9862 20.4096 35.8836 20.4096 35.7778 20.4096C35.7778 20.7204 35.7778 21.0313 35.7778 21.3515C35.6334 21.371 35.489 21.3904 35.3403 21.4104C34.8228 21.4795 34.8228 21.4795 34.3778 21.8225C34.2917 19.9847 34.2917 19.9847 34.8444 19.3106C35 19.7816 35 19.7816 35 20.0956C34.8973 20.0956 34.7947 20.0956 34.6889 20.0956C34.6889 20.4582 34.6889 20.8209 34.6889 21.1945C35.073 21.1292 35.073 21.1292 35.4667 20.8805C35.6126 20.5645 35.7117 20.2463 35.8154 19.914C35.9333 19.6246 35.9333 19.6246 36.2736 19.3891C36.3667 19.3632 36.4597 19.3373 36.5556 19.3106C36.5556 19.207 36.5556 19.1033 36.5556 18.9966C36.7694 18.7415 36.7694 18.7415 37.0222 18.5256C37.1249 18.5256 37.2276 18.5256 37.3333 18.5256C37.3333 18.422 37.3333 18.3184 37.3333 18.2116C37.7547 17.999 38.1126 18.0444 38.5778 18.0546Z" fill="#38475F"/>
<path d="M43.5556 20.5666C44.0198 21.3556 43.9605 22.1885 43.8667 23.0785C43.7082 23.5815 43.499 24.0314 43.2444 24.4915C43.1931 24.5951 43.1418 24.6987 43.0889 24.8055C42.8322 24.8055 42.5756 24.8055 42.3111 24.8055C42.2598 24.9609 42.2084 25.1163 42.1556 25.2765C41.9481 25.3288 41.7407 25.3811 41.5333 25.4335C41.482 25.5889 41.4307 25.7443 41.3778 25.9044C41.4291 25.5418 41.4804 25.1791 41.5333 24.8055C41.636 24.8055 41.7387 24.8055 41.8444 24.8055C41.8797 24.7051 41.915 24.6047 41.9514 24.5013C42.1556 24.1775 42.1556 24.1775 42.5444 24.0794C42.6728 24.0599 42.8011 24.0405 42.9333 24.0205C43.5331 23.4152 43.4402 22.5127 43.4875 21.695C43.4942 21.5862 43.5009 21.4774 43.5079 21.3653C43.5242 21.0991 43.54 20.8328 43.5556 20.5666Z" fill="#9DB2C7"/>
<path d="M34.3778 24.4915C34.3778 24.5951 34.3778 24.6987 34.3778 24.8055C34.5185 24.8 34.5185 24.8 34.6622 24.7944C34.8486 24.7902 34.8486 24.7902 35.0389 24.7858C35.1616 24.7822 35.2843 24.7786 35.4108 24.7748C35.81 24.8082 36.0565 24.9175 36.4 25.1195C36.4 25.2231 36.4 25.3267 36.4 25.4334C36.1433 25.4334 35.8867 25.4334 35.6222 25.4334C35.7249 25.6407 35.8276 25.8479 35.9333 26.0614C35.4095 25.8427 35.1577 25.5938 34.8444 25.1195C33.8216 25.2168 32.874 25.4568 31.8889 25.7474C31.7349 25.592 31.5809 25.4366 31.4222 25.2765C31.4736 25.1728 31.5249 25.0692 31.5778 24.9625C31.6772 25.0013 31.7767 25.0402 31.8792 25.0802C32.5032 25.1316 32.8676 24.9173 33.4159 24.6344C33.7556 24.4915 33.7556 24.4915 34.3778 24.4915Z" fill="#708094"/>
<path d="M35.3111 22.4505C35.3111 22.5541 35.3111 22.6578 35.3111 22.7645C35.4138 22.7645 35.5164 22.7645 35.6222 22.7645C35.6222 22.6609 35.6222 22.5573 35.6222 22.4505C35.9236 22.5094 35.9236 22.5094 36.2444 22.6075C36.4408 23.0039 36.4153 23.2845 36.4097 23.7261C36.4083 23.869 36.4069 24.0119 36.4055 24.1591C36.4037 24.2688 36.4019 24.3785 36.4 24.4915C36.092 24.4915 35.784 24.4915 35.4667 24.4915C35.4363 24.1695 35.4059 23.8475 35.3755 23.5256C35.3543 23.4298 35.333 23.3341 35.3111 23.2355C35.2084 23.1837 35.1058 23.1319 35 23.0785C35 23.3375 35 23.5966 35 23.8635C34.9487 23.8635 34.8973 23.8635 34.8444 23.8635C34.7418 23.449 34.6391 23.0345 34.5333 22.6075C35 22.4505 35 22.4505 35.3111 22.4505Z" fill="#526583"/>
<path d="M22.5556 5.96587C22.7096 6.01768 22.8636 6.06949 23.0222 6.12287C23.153 7.44255 22.7292 8.28308 22.0889 9.4198C21.9862 9.4198 21.8836 9.4198 21.7778 9.4198C21.7778 9.52342 21.7778 9.62703 21.7778 9.73379C21.5211 9.83741 21.2644 9.94103 21 10.0478C21 9.94417 21 9.84055 21 9.73379C20.6407 9.68198 20.2813 9.63017 19.9111 9.5768C19.8598 9.73222 19.8084 9.88765 19.7556 10.0478C19.7556 9.84055 19.7556 9.63331 19.7556 9.4198C20.2689 9.4198 20.7822 9.4198 21.3111 9.4198C21.3111 9.31618 21.3111 9.21256 21.3111 9.10581C21.4651 9.00219 21.6191 8.89857 21.7778 8.79181C21.8291 8.63639 21.8804 8.48096 21.9333 8.32082C22.036 8.32082 22.1387 8.32082 22.2444 8.32082C22.4084 7.82433 22.4486 7.39933 22.4875 6.87842C22.5005 6.70781 22.5136 6.53721 22.527 6.36143C22.5411 6.16563 22.5411 6.16563 22.5556 5.96587Z" fill="#416594"/>
<path d="M33.9111 22.7645C33.9111 22.8681 33.9111 22.9717 33.9111 23.0785C32.5111 23.5495 32.5111 23.5495 31.1111 24.0205C31.0084 23.9687 30.9058 23.9169 30.8 23.8635C30.7487 23.9671 30.6973 24.0707 30.6444 24.1775C30.4784 23.869 30.3231 23.5544 30.1778 23.2355C30.2291 23.1319 30.2804 23.0283 30.3333 22.9215C30.436 22.9539 30.5387 22.9863 30.6444 23.0196C31.1541 23.0839 31.514 22.9804 32.0025 22.8399C32.6333 22.7052 33.2697 22.7406 33.9111 22.7645Z" fill="#5F7693"/>
<path d="M22.8667 17.4266C22.918 17.4266 22.9693 17.4266 23.0222 17.4266C23.0415 17.5529 23.0607 17.6792 23.0806 17.8093C23.1287 18.0084 23.1287 18.0084 23.1778 18.2116C23.2804 18.2634 23.3831 18.3152 23.4889 18.3686C23.6885 18.973 23.6548 19.4593 23.6444 20.0956C23.4391 20.1474 23.2338 20.1992 23.0222 20.2526C23.0222 20.1489 23.0222 20.0453 23.0222 19.9386C22.8682 19.8868 22.7142 19.8349 22.5556 19.7816C22.5253 19.5004 22.4964 19.2191 22.4681 18.9377C22.4518 18.7811 22.4356 18.6244 22.4188 18.463C22.4 18.0546 22.4 18.0546 22.5556 17.7406C22.6582 17.7406 22.7609 17.7406 22.8667 17.7406C22.8667 17.637 22.8667 17.5334 22.8667 17.4266Z" fill="#EDF3F5"/>
<path d="M34.0667 42.7031C34.9806 42.9974 34.9806 42.9974 35.1556 43.1741C35.6341 43.179 36.1107 43.1633 36.589 43.1489C37.0222 43.1741 37.0222 43.1741 37.3333 43.488C37.5383 43.5975 37.7454 43.7031 37.9556 43.802C37.3901 43.9795 36.8537 43.9853 36.2639 43.9885C36.0782 43.9907 35.8925 43.9929 35.7012 43.9952C35.1557 43.959 34.73 43.8433 34.2222 43.645C34.3249 43.5414 34.4276 43.4378 34.5333 43.3311C34.4178 43.2193 34.4178 43.2193 34.3 43.1054C34.0667 42.8601 34.0667 42.8601 34.0667 42.7031Z" fill="#2D3C4B"/>
<path d="M22.4 4.3959C22.5027 4.3959 22.6053 4.3959 22.7111 4.3959C22.9066 4.85214 23.0222 5.14887 23.0222 5.65188C23.1249 5.65188 23.2276 5.65188 23.3333 5.65188C23.3847 5.54826 23.436 5.44464 23.4889 5.33788C23.4931 5.69439 23.4961 6.0509 23.4986 6.40742C23.5004 6.60596 23.5022 6.80449 23.5041 7.00904C23.4889 7.53584 23.4889 7.53584 23.3333 8.00683C23.2307 8.00683 23.128 8.00683 23.0222 8.00683C23.0222 8.26587 23.0222 8.52491 23.0222 8.79181C22.8682 8.84362 22.7142 8.89543 22.5556 8.94881C22.7111 8.00683 22.8667 7.06485 23.0222 6.12287C22.8682 6.07106 22.7142 6.01925 22.5556 5.96587C22.5042 5.44778 22.4529 4.92969 22.4 4.3959Z" fill="#040F27"/>
<path d="M23.3333 17.1126C23.9359 17.3154 23.9905 17.5286 24.2861 18.084C24.3667 18.232 24.4473 18.3799 24.5304 18.5323C24.7416 19.0155 24.8519 19.4121 24.8889 19.9386C24.5741 20.3997 24.331 20.6679 23.7818 20.807C23.4783 20.8462 23.1723 20.8649 22.8667 20.8805C23.6056 20.2722 23.6056 20.2722 23.9556 20.0956C23.9598 19.8732 23.9628 19.6507 23.9653 19.4283C23.9671 19.3045 23.9689 19.1806 23.9707 19.053C23.9562 18.6972 23.8984 18.3955 23.8 18.0546C23.6973 18.0546 23.5947 18.0546 23.4889 18.0546C23.4376 17.7438 23.3862 17.4329 23.3333 17.1126Z" fill="#6A7B8E"/>
<path d="M19.4444 27.9454C19.9111 28.1024 19.9111 28.1024 20.1833 28.5538C20.3778 29.0444 20.3778 29.0444 20.2222 29.5154C20.1196 29.4635 20.0169 29.4117 19.9111 29.3584C19.4474 29.2945 19.1185 29.2574 18.7256 29.5393C18.6452 29.6123 18.5648 29.6854 18.4819 29.7607C18.3376 29.8869 18.1932 30.0132 18.0444 30.1433C17.8904 30.0915 17.7364 30.0397 17.5778 29.9863C17.8012 29.7343 18.0249 29.4825 18.2486 29.2308C18.3731 29.0906 18.4977 28.9503 18.626 28.8058C18.8926 28.5107 19.1611 28.2239 19.4444 27.9454Z" fill="#354156"/>
<path d="M20.2222 1.41297C19.2469 1.36116 18.2716 1.30935 17.2667 1.25597C17.2667 1.35959 17.2667 1.46321 17.2667 1.56997C17.4054 1.56814 17.5442 1.56632 17.6872 1.56445C17.8692 1.56303 18.0513 1.56161 18.2389 1.56015C18.4194 1.55833 18.5998 1.55651 18.7858 1.55463C19.1971 1.56717 19.522 1.60349 19.9111 1.72696C19.9111 1.83058 19.9111 1.9342 19.9111 2.04096C18.8331 1.98915 17.7551 1.93734 16.6444 1.88396C16.5931 1.78034 16.5418 1.67672 16.4889 1.56997C16.2322 1.62177 15.9756 1.67358 15.7111 1.72696C15.8667 1.41297 15.8667 1.41297 16.2191 1.27376C17.4997 0.926953 19.0564 0.628554 20.2222 1.41297Z" fill="#414854"/>
<path d="M4.97778 39.0921C5.13178 39.0921 5.28578 39.0921 5.44444 39.0921C5.72426 39.4875 5.90118 39.8456 6.04722 40.3089C6.10497 40.4254 6.16272 40.542 6.22222 40.6621C6.87434 40.8634 7.53988 40.8374 8.21528 40.8289C8.32306 40.8282 8.43084 40.8275 8.54188 40.8268C8.80571 40.8249 9.06952 40.8221 9.33333 40.8191C9.128 40.8709 8.92267 40.9227 8.71111 40.9761C8.71111 41.0797 8.71111 41.1833 8.71111 41.2901C7.45943 41.3359 6.42262 41.3553 5.45417 40.4561C5.10026 40.075 4.9875 39.943 4.90972 39.416C4.93218 39.3091 4.95464 39.2022 4.97778 39.0921Z" fill="#99BADD"/>
<path d="M20.8444 16.1707C20.9984 16.2225 21.1524 16.2743 21.3111 16.3277C21.4478 16.722 21.4478 16.722 21.5542 17.2206C21.6726 17.7503 21.7922 18.2552 21.9625 18.7709C22.0889 19.1536 22.0889 19.1536 22.0889 19.6246C21.7942 19.578 21.7942 19.578 21.4667 19.4676C20.9262 18.417 20.8956 17.3381 20.8444 16.1707Z" fill="#4A556F"/>
<path d="M41.6889 17.8976C42.3914 17.9584 42.855 18.2425 43.4 18.6826C43.6479 19.1489 43.7111 19.4085 43.7111 19.9386C43.0464 19.864 42.7617 19.4627 42.3111 18.9966C42.1956 18.9415 42.0801 18.8865 41.9611 18.8298C41.6889 18.6826 41.6889 18.6826 41.5625 18.3588C41.5529 18.2584 41.5432 18.158 41.5333 18.0546C41.5847 18.0028 41.636 17.951 41.6889 17.8976Z" fill="#414754"/>
<path d="M14.3111 5.49488C14.4138 5.49488 14.5164 5.49488 14.6222 5.49488C14.6222 5.65031 14.6222 5.80573 14.6222 5.96587C14.7249 5.96587 14.8276 5.96587 14.9333 5.96587C14.882 6.53577 14.8307 7.10567 14.7778 7.69283C15.0344 7.69283 15.2911 7.69283 15.5556 7.69283C15.9162 7.91394 16.1772 8.18523 16.4889 8.47782C16.4376 8.63324 16.3862 8.78867 16.3333 8.94881C16.0158 8.69511 15.7048 8.43297 15.4 8.16382C15.4 8.0602 15.4 7.95659 15.4 7.84983C14.9893 7.84983 14.5787 7.84983 14.1556 7.84983C14.1556 7.64259 14.1556 7.43536 14.1556 7.22184C14.3096 7.22184 14.4636 7.22184 14.6222 7.22184C14.6222 7.11823 14.6222 7.01461 14.6222 6.90785C14.5196 6.90785 14.4169 6.90785 14.3111 6.90785C14.0941 6.54711 13.9884 6.36161 14.0486 5.93643C14.1556 5.65188 14.1556 5.65188 14.3111 5.49488Z" fill="#6F95C2"/>
<path d="M27.8444 29.6724C27.9984 29.7242 28.1524 29.776 28.3111 29.8294C28.1944 30.8891 28.1944 30.8891 27.8444 31.2423C27.8444 31.0869 27.8444 30.9315 27.8444 30.7713C27.7418 30.7713 27.6391 30.7713 27.5333 30.7713C27.6541 31.254 27.6541 31.254 28 31.5563C27.2806 31.8899 27.2806 31.8899 26.7556 31.7133C26.7042 31.4543 26.6529 31.1952 26.6 30.9283C26.754 30.9283 26.908 30.9283 27.0667 30.9283C27.0153 30.7211 26.964 30.5139 26.9111 30.3003C27.0074 30.2842 27.1036 30.268 27.2028 30.2513C27.5902 30.1629 27.5902 30.1629 27.8444 29.6724Z" fill="#657A95"/>
<path d="M21.6222 14.4437C22.5164 15.3462 22.8568 15.9982 22.8667 17.2696C22.8153 17.3732 22.764 17.4769 22.7111 17.5836C22.6084 17.5836 22.5058 17.5836 22.4 17.5836C22.3487 17.4282 22.2973 17.2728 22.2444 17.1126C22.1418 17.268 22.0391 17.4235 21.9333 17.5836C21.8307 16.5474 21.728 15.5113 21.6222 14.4437Z" fill="#ECF4FB"/>
<path d="M29.9542 30.6045C30.1419 30.6094 30.1419 30.6094 30.3333 30.6143C30.9556 31.6544 30.9556 31.6544 30.9556 32.1843C30.8529 32.1843 30.7502 32.1843 30.6444 32.1843C30.5931 32.2361 30.5418 32.2879 30.4889 32.3413C29.5409 32.0051 29.5409 32.0051 29.2444 31.5563C29.3328 30.6198 29.3328 30.6198 29.9542 30.6045Z" fill="#F0F9FD"/>
<path d="M24.2667 20.8806C24.3565 20.9065 24.4463 20.9324 24.5389 20.9591C24.9304 21.0603 24.9304 21.0603 25.5111 21.0376C24.7828 21.6243 23.9083 22.1291 22.9554 22.1414C22.6139 22.0973 22.6139 22.0973 22.0889 21.9795C22.1402 21.7723 22.1916 21.5651 22.2444 21.3515C22.5011 21.2997 22.7578 21.2479 23.0222 21.1945C23.0736 21.35 23.1249 21.5054 23.1778 21.6655C23.2291 21.5101 23.2804 21.3547 23.3333 21.1945C23.6413 21.1945 23.9493 21.1945 24.2667 21.1945C24.2667 21.0909 24.2667 20.9873 24.2667 20.8806Z" fill="#C7D2E1"/>
<path d="M21.9333 18.8396C22.4396 19.095 22.5094 19.5823 22.7111 20.0956C22.7624 20.251 22.8138 20.4064 22.8667 20.5665C22.9693 20.6184 23.072 20.6702 23.1778 20.7235C23.0238 20.7754 22.8698 20.8272 22.7111 20.8805C22.6405 20.8028 22.5699 20.7251 22.4972 20.645C22.2637 20.3741 22.2637 20.3741 21.9333 20.4096C21.9333 20.9794 21.9333 21.5493 21.9333 22.1365C21.728 22.1883 21.5227 22.2401 21.3111 22.2935C21.3881 20.8947 21.3881 20.8947 21.4667 19.4676C21.7747 19.5453 21.7747 19.5453 22.0889 19.6246C22.0376 19.3655 21.9862 19.1065 21.9333 18.8396Z" fill="#566C81"/>
<path d="M12.9111 37.0512C13.0651 37.103 13.2191 37.1548 13.3778 37.2082C13.4685 39.4641 13.4685 39.4641 12.9111 40.3481C12.5708 40.4953 12.5708 40.4953 12.2889 40.5051C12.4068 39.6322 12.4068 39.6322 12.6055 39.2675C12.7886 38.862 12.7817 38.5737 12.7653 38.1305C12.7404 37.3957 12.7404 37.3957 12.9111 37.0512Z" fill="#040E26"/>
<path d="M20.5333 11.7747C20.3292 12.0102 20.3292 12.0102 20.0667 12.2457C19.9127 12.2457 19.7587 12.2457 19.6 12.2457C19.5487 12.5048 19.4973 12.7638 19.4444 13.0307C19.3931 12.8235 19.3418 12.6162 19.2889 12.4027C19.1349 12.6359 19.1349 12.6359 18.9778 12.8737C18.897 12.8189 18.8162 12.764 18.7329 12.7075C17.908 12.1609 17.908 12.1609 16.9556 11.9317C16.9556 11.8799 16.9556 11.8281 16.9556 11.7747C19.4048 11.5655 19.4048 11.5655 20.5333 11.7747Z" fill="#1B2D46"/>
<path d="M3.26667 36.7372C3.36933 36.789 3.472 36.8408 3.57778 36.8942C3.71221 37.3012 3.76068 37.5756 3.78255 37.995C3.78907 38.1139 3.79559 38.2328 3.8023 38.3553C3.80842 38.4787 3.81453 38.602 3.82083 38.7291C3.82755 38.8543 3.83427 38.9794 3.84119 39.1084C3.85766 39.4169 3.87335 39.7255 3.88889 40.0341C3.5875 39.9262 3.5875 39.9262 3.26667 39.7201C3.06636 39.12 3.09026 38.5042 3.09167 37.8754C3.09127 37.6949 3.09086 37.5144 3.09045 37.3284C3.11111 36.8942 3.11111 36.8942 3.26667 36.7372Z" fill="#07050B"/>
<path d="M10.4222 33.1263C11.0896 33.1263 11.7569 33.1263 12.4444 33.1263C12.2904 33.204 12.2904 33.204 12.1333 33.2833C12.1333 33.3869 12.1333 33.4905 12.1333 33.5973C11.8767 33.5973 11.62 33.5973 11.3556 33.5973C11.4839 33.6653 11.6122 33.7333 11.7444 33.8033C11.9369 33.9345 11.9369 33.9345 12.1333 34.0683C12.1333 34.2237 12.1333 34.3791 12.1333 34.5393C12.0307 34.5393 11.928 34.5393 11.8222 34.5393C11.8736 34.9019 11.9249 35.2646 11.9778 35.6382C11.5888 35.2969 11.4432 35.0526 11.3556 34.5393C11.2529 34.5393 11.1502 34.5393 11.0444 34.5393C10.7819 34.1762 10.7819 34.1762 10.5778 33.7543C10.6291 33.5988 10.6804 33.4434 10.7333 33.2833C10.6307 33.2315 10.528 33.1797 10.4222 33.1263Z" fill="#68778F"/>
<path d="M14 3.61092C14.154 3.71454 14.308 3.81816 14.4667 3.92492C14.604 4.89484 14.2686 5.59408 13.8444 6.43686C13.6904 6.38505 13.5364 6.33324 13.3778 6.27987C13.4099 6.15682 13.4419 6.03377 13.475 5.907C13.4942 5.771 13.5135 5.635 13.5333 5.49488C13.4307 5.39126 13.328 5.28765 13.2222 5.18089C13.2222 4.97365 13.2222 4.76642 13.2222 4.5529C13.3249 4.5529 13.4276 4.5529 13.5333 4.5529C13.6873 4.24205 13.8413 3.9312 14 3.61092Z" fill="#040E20"/>
<path d="M36.0889 33.1263C36.5075 33.154 36.9178 33.2234 37.3333 33.2833C37.3333 33.3351 37.3333 33.3869 37.3333 33.4403C36.9227 33.4403 36.512 33.4403 36.0889 33.4403C36.0889 33.5957 36.0889 33.7511 36.0889 33.9113C35.2223 34.1611 34.5005 34.2577 33.6 34.2253C33.7027 34.1734 33.8053 34.1216 33.9111 34.0683C34.0126 33.7504 34.0126 33.7504 34.0667 33.4403C34.2661 33.426 34.2661 33.426 34.4695 33.4115C34.7273 33.3917 34.7273 33.3917 34.9903 33.3716C35.1617 33.3588 35.3332 33.3461 35.5098 33.333C35.9195 33.3297 35.9195 33.3297 36.0889 33.1263Z" fill="#040E20"/>
<path d="M8.55556 32.8123C9.32881 32.8769 10.0248 32.9373 10.7333 33.2833C10.7333 33.4387 10.7333 33.5941 10.7333 33.7543C9.58032 33.9411 8.60244 33.861 7.46667 33.5973C7.46667 33.5455 7.46667 33.4937 7.46667 33.4403C8.15967 33.3626 8.15967 33.3626 8.86667 33.2833C8.764 33.1278 8.66133 32.9724 8.55556 32.8123Z" fill="#09111F"/>
<path d="M5.75555 41.9181C5.85561 41.9679 5.95567 42.0177 6.05877 42.069C6.67692 42.2814 7.25542 42.3039 7.90417 42.3302C8.08809 42.3393 8.08809 42.3393 8.27574 42.3486C8.57636 42.3633 8.87706 42.3764 9.17778 42.3891C8.86667 42.7031 8.86667 42.7031 8.4 42.8601C8.4 42.9637 8.4 43.0673 8.4 43.1741C7.68133 43.0704 6.96267 42.9668 6.22222 42.8601C6.17089 42.7046 6.11955 42.5492 6.06667 42.3891C5.91267 42.3373 5.75867 42.2855 5.6 42.2321C5.65133 42.1285 5.70267 42.0248 5.75555 41.9181Z" fill="#040A18"/>
<path d="M34.0667 21.5085C34.118 21.5085 34.1693 21.5085 34.2222 21.5085C34.2671 21.6834 34.3121 21.8582 34.3583 22.0384C34.4855 22.608 34.4855 22.608 34.8444 22.9215C34.8864 23.3436 34.858 23.7522 34.8444 24.1775C34.6391 24.2293 34.4338 24.2811 34.2222 24.3345C34.2222 24.0754 34.2222 23.8164 34.2222 23.5495C33.9142 23.4459 33.6062 23.3422 33.2889 23.2355C33.4942 23.1837 33.6996 23.1319 33.9111 23.0785C33.9111 22.9749 33.9111 22.8713 33.9111 22.7645C33.5518 22.7645 33.1924 22.7645 32.8222 22.7645C33.185 22.5751 33.5217 22.4245 33.9111 22.2935C33.9624 22.0345 34.0138 21.7754 34.0667 21.5085Z" fill="#A6B5C6"/>
<path d="M38.4538 17.6026C38.6824 17.614 38.6824 17.614 38.9156 17.6256C39.1526 17.6388 39.1526 17.6388 39.3944 17.6523C39.6351 17.6646 39.6351 17.6646 39.8806 17.6771C40.276 17.6975 40.6713 17.7186 41.0667 17.7406C41.0667 17.8442 41.0667 17.9478 41.0667 18.0546C40.9275 18.0528 40.7883 18.051 40.645 18.0491C39.5295 18.0407 38.4401 18.0675 37.3333 18.2116C37.3333 18.3152 37.3333 18.4188 37.3333 18.5256C37.2307 18.5256 37.128 18.5256 37.0222 18.5256C36.9709 18.681 36.9196 18.8364 36.8667 18.9966C36.764 18.9966 36.6613 18.9966 36.5556 18.9966C36.5556 19.1002 36.5556 19.2038 36.5556 19.3106C36.4016 19.3624 36.2476 19.4142 36.0889 19.4676C36.0889 19.3121 36.0889 19.1567 36.0889 18.9966C36.1851 18.9642 36.2814 18.9318 36.3806 18.8985C36.7609 18.6997 36.7609 18.6997 36.8667 18.2018C36.918 18.0496 36.9693 17.8974 37.0222 17.7406C37.4983 17.5495 37.9483 17.5759 38.4538 17.6026Z" fill="#192A42"/>
<path d="M40.9111 41.4471C40.5108 42.385 39.6926 42.9647 38.85 43.4881C38.4064 43.6509 38.2289 43.6712 37.8 43.4881C39 42.5461 39 42.5461 39.5111 42.5461C39.5239 42.423 39.5368 42.3 39.55 42.1732C39.6667 41.7611 39.6667 41.7611 39.9486 41.555C40.2889 41.4471 40.2889 41.4471 40.9111 41.4471Z" fill="#434C5C"/>
<path d="M13.5333 35.4812C13.8413 35.4812 14.1493 35.4812 14.4667 35.4812C14.4123 35.5709 14.358 35.6605 14.302 35.7529C13.6863 36.8602 13.5549 37.8319 13.5333 39.0922C13.482 39.0922 13.4307 39.0922 13.3778 39.0922C13.3736 38.7357 13.3706 38.3791 13.3681 38.0226C13.3662 37.8241 13.3644 37.6255 13.3626 37.421C13.3778 36.8942 13.3778 36.8942 13.5333 36.4232C13.4307 36.4232 13.328 36.4232 13.2222 36.4232C13.2222 36.5786 13.2222 36.7341 13.2222 36.8942C12.7733 36.8317 12.6277 36.7702 12.3278 36.4134C12.2636 36.313 12.1994 36.2126 12.1333 36.1092C12.1847 36.0056 12.236 35.902 12.2889 35.7952C12.3916 35.8988 12.4942 36.0025 12.6 36.1092C13.1595 36.0585 13.1595 36.0585 13.6889 35.9522C13.6376 35.7968 13.5862 35.6414 13.5333 35.4812Z" fill="#8392A6"/>
<path d="M41.2222 26.5324C41.2222 26.636 41.2222 26.7397 41.2222 26.8464C41.0682 26.8464 40.9142 26.8464 40.7556 26.8464C40.7556 27.0018 40.7556 27.1573 40.7556 27.3174C38.9633 27.3753 38.9633 27.3753 38.1111 27.0034C38.1111 26.8998 38.1111 26.7962 38.1111 26.6894C40.2318 26.5092 40.2318 26.5092 41.2222 26.5324Z" fill="#11181A"/>
<path d="M41.0667 37.6792C41.118 37.6792 41.1693 37.6792 41.2222 37.6792C41.2574 38.1893 41.2888 38.6995 41.3194 39.2099C41.3295 39.3544 41.3395 39.4989 41.3498 39.6478C41.3578 39.7874 41.3659 39.9271 41.3741 40.0709C41.3823 40.1992 41.3904 40.3274 41.3988 40.4596C41.375 40.8672 41.2839 41.1047 41.0667 41.4471C40.7641 41.5771 40.7641 41.5771 40.425 41.6433C40.2261 41.6822 40.0272 41.7211 39.8222 41.7611C40.0051 41.5328 40.0051 41.5328 40.1917 41.2999C40.9403 40.237 40.9672 38.9444 41.0667 37.6792Z" fill="#243758"/>
<path d="M20.3778 29.5154C21.1143 29.8395 21.4235 30.3701 21.7778 31.0853C20.6444 31.6236 20.6444 31.6236 19.9111 31.5563C19.9881 31.4818 20.0651 31.4074 20.1444 31.3306C20.4874 30.7394 20.4161 30.185 20.3778 29.5154Z" fill="#364A67"/>
<path d="M23.1778 28.2594C23.1906 28.3565 23.2034 28.4537 23.2167 28.5538C23.3021 28.9089 23.3021 28.9089 23.6153 29.064C23.7276 29.1093 23.8399 29.1547 23.9556 29.2014C24.0408 29.256 24.126 29.3106 24.2138 29.3669C24.7276 29.5765 25.2201 29.5364 25.7639 29.5154C26.1505 29.5006 26.5234 29.5007 26.9111 29.5154C27.0138 29.619 27.1164 29.7226 27.2222 29.8293C26.6003 29.9795 26.0232 30.0027 25.3847 29.9962C25.2041 29.9947 25.0234 29.9933 24.8372 29.9919C24.7003 29.99 24.5633 29.9882 24.4222 29.9863C24.4222 29.8827 24.4222 29.7791 24.4222 29.6724C24.2971 29.6529 24.172 29.6335 24.0431 29.6135C23.9115 29.5811 23.78 29.5487 23.6444 29.5154C23.5931 29.4117 23.5418 29.3081 23.4889 29.2014C23.3349 29.1496 23.1809 29.0977 23.0222 29.0444C23.0222 28.9407 23.0222 28.8371 23.0222 28.7304C22.8169 28.6268 22.6116 28.5231 22.4 28.4164C22.7111 28.2594 22.7111 28.2594 23.1778 28.2594Z" fill="#628DC5"/>
<path d="M44.3333 20.8806C44.3847 20.8806 44.436 20.8806 44.4889 20.8806C44.6643 22.1219 44.6984 23.1724 44.1778 24.3345C44.0751 24.4381 43.9724 24.5417 43.8667 24.6485C43.5925 23.9494 43.4985 23.5664 43.7694 22.8528C43.8529 22.6683 43.9363 22.4837 44.0222 22.2935C44.0736 22.2935 44.1249 22.2935 44.1778 22.2935C44.2291 21.8272 44.2804 21.361 44.3333 20.8806Z" fill="#474E5A"/>
<path d="M38.2667 34.8532C38.1026 35.0906 38.1026 35.0906 37.8 35.3242C37.2932 35.3469 37.2932 35.3469 36.6917 35.2948C36.5878 35.2861 36.4839 35.2774 36.3769 35.2685C35.5852 35.1957 34.8343 35.0571 34.0667 34.8532C35.2111 34.0832 36.9928 34.5979 38.2667 34.8532Z" fill="#B8D0E7"/>
<path d="M17.3931 32.0666C17.5615 32.1248 17.5615 32.1248 17.7333 32.1843C17.53 32.8227 17.1494 32.9976 16.594 33.2913C16.3128 33.4366 16.3128 33.4366 16.0611 33.715C15.9649 33.8122 15.9649 33.8122 15.8667 33.9113C15.7127 33.9113 15.5587 33.9113 15.4 33.9113C15.4513 33.6522 15.5027 33.3932 15.5556 33.1263C15.7609 33.0745 15.9662 33.0227 16.1778 32.9693C16.1778 32.8657 16.1778 32.7621 16.1778 32.6553C16.8127 32.0145 16.8127 32.0145 17.3931 32.0666Z" fill="#D7E0F4"/>
<path d="M21.4667 24.1775C21.8034 25.455 21.8682 26.417 21.3111 27.6314C20.8269 26.8984 20.9243 26.1355 21 25.2765C21.1173 24.866 21.2628 24.5548 21.4667 24.1775Z" fill="#567FAF"/>
<path d="M11.8222 40.5051C11.9249 40.5051 12.0276 40.5051 12.1333 40.5051C12.1722 40.9467 12.1722 40.9467 12.1333 41.4471C11.8222 41.7415 11.8222 41.7415 11.5111 41.9181C11.4084 41.7627 11.3058 41.6072 11.2 41.4471C11.046 41.4989 10.892 41.5507 10.7333 41.6041C10.7333 41.7077 10.7333 41.8113 10.7333 41.9181C9.89094 42.4012 9.89094 42.4012 9.43056 42.34C9.34714 42.3044 9.26372 42.2688 9.17778 42.2321C9.43445 42.1803 9.69111 42.1285 9.95556 42.0751C9.95556 41.9715 9.95556 41.8679 9.95556 41.7611C10.4119 41.1943 10.83 41.0283 11.5111 40.8191C11.6138 40.7155 11.7164 40.6119 11.8222 40.5051Z" fill="#112035"/>
<path d="M31.5778 38.3072C31.6291 38.3072 31.6804 38.3072 31.7333 38.3072C31.7522 38.4622 31.771 38.6172 31.7904 38.7769C31.8165 38.9781 31.8426 39.1793 31.8694 39.3865C31.8947 39.5869 31.92 39.7872 31.946 39.9936C31.9976 40.5164 31.9976 40.5164 32.3556 40.8191C32.4582 40.8191 32.5609 40.8191 32.6667 40.8191C32.6667 41.0263 32.6667 41.2336 32.6667 41.4471C32.564 41.4989 32.4613 41.5507 32.3556 41.6041C32.2541 41.9219 32.2541 41.9219 32.2 42.2321C32.0393 42.0078 31.8809 41.7818 31.7236 41.555C31.6352 41.4293 31.5467 41.3037 31.4556 41.1742C31.3933 41.057 31.3309 40.9398 31.2667 40.8191C31.318 40.6637 31.3693 40.5083 31.4222 40.3481C31.4222 40.4517 31.4222 40.5554 31.4222 40.6621C31.5249 40.6621 31.6276 40.6621 31.7333 40.6621C31.682 40.5585 31.6307 40.4549 31.5778 40.3481C31.5667 40.0016 31.5647 39.6547 31.5681 39.308C31.5695 39.1214 31.5709 38.9348 31.5723 38.7426C31.5741 38.5989 31.5759 38.4552 31.5778 38.3072Z" fill="#626C7D"/>
<path d="M12.6 34.0683C12.6513 34.1719 12.7027 34.2755 12.7556 34.3823C12.8807 34.3564 13.0058 34.3305 13.1347 34.3038C13.7914 34.2107 14.4273 34.2119 15.0889 34.2253C14.6971 34.7155 14.5093 34.8447 13.8833 34.971C13.6331 34.9904 13.6331 34.9904 13.3778 35.0102C13.3264 34.8548 13.2751 34.6994 13.2222 34.5393C13.0169 34.5393 12.8116 34.5393 12.6 34.5393C12.6 34.6429 12.6 34.7465 12.6 34.8533C12.292 35.0087 12.292 35.0087 11.9778 35.1672C11.9264 34.96 11.8751 34.7528 11.8222 34.5393C11.9249 34.5393 12.0276 34.5393 12.1333 34.5393C12.1333 34.4356 12.1333 34.332 12.1333 34.2253C12.2873 34.1735 12.4413 34.1216 12.6 34.0683Z" fill="#D5DCE6"/>
<path d="M37.9556 18.2116C38.1096 18.2634 38.2636 18.3152 38.4222 18.3686C38.3196 18.3686 38.2169 18.3686 38.1111 18.3686C38.1624 18.6276 38.2138 18.8867 38.2667 19.1536C38.1159 19.1924 37.9651 19.2313 37.8097 19.2713C37.6525 19.3361 37.4953 19.4009 37.3333 19.4676C37.2163 19.77 37.2163 19.77 37.1778 20.0956C36.9542 20.3507 36.9542 20.3507 36.7111 20.5666C36.6084 20.6702 36.5058 20.7738 36.4 20.8806C36.4 20.7769 36.4 20.6733 36.4 20.5666C36.2973 20.5666 36.1947 20.5666 36.0889 20.5666C36.2921 19.9514 36.5293 19.5733 37.0222 19.1536C37.1249 19.1536 37.2276 19.1536 37.3333 19.1536C37.3847 18.9464 37.436 18.7391 37.4889 18.5256C37.6429 18.5256 37.7969 18.5256 37.9556 18.5256C37.9556 18.422 37.9556 18.3184 37.9556 18.2116Z" fill="#A2BEDE"/>
<path d="M19.1333 13.3447C19.9498 13.8711 20.1925 14.5122 20.5333 15.3857C20.5847 15.4893 20.636 15.5929 20.6889 15.6997C20.7916 15.6479 20.8942 15.596 21 15.5427C21.0513 15.7499 21.1027 15.9571 21.1556 16.1707C21.0529 16.1707 20.9502 16.1707 20.8444 16.1707C20.8958 16.6369 20.9471 17.1032 21 17.5836C20.7329 17.1793 20.5829 16.8641 20.4167 16.416C20.1013 15.5974 19.7172 14.8248 19.3156 14.0463C19.1333 13.6587 19.1333 13.6587 19.1333 13.3447Z" fill="#505A67"/>
<path d="M25.9778 20.4096C26.3884 20.4614 26.7991 20.5132 27.2222 20.5666C27.1196 20.7738 27.0169 20.981 26.9111 21.1945C27.1164 21.4018 27.3218 21.609 27.5333 21.8225C27.4307 21.8225 27.328 21.8225 27.2222 21.8225C27.2222 21.9261 27.2222 22.0298 27.2222 22.1365C26.6389 22.3131 26.6389 22.3131 26.2889 22.1365C26.2889 22.0329 26.2889 21.9293 26.2889 21.8225C26.1349 21.7707 25.9809 21.7189 25.8222 21.6655C25.9249 21.5101 26.0276 21.3547 26.1333 21.1945C26.0848 20.7791 26.0848 20.7791 25.9778 20.4096Z" fill="#789EC7"/>
<path d="M21.9333 20.2526C22.0986 20.5469 22.0986 20.5469 22.2444 20.8805C22.1931 20.9842 22.1418 21.0878 22.0889 21.1945C22.1916 21.2464 22.2942 21.2982 22.4 21.3515C22.3615 21.4924 22.3615 21.4924 22.3222 21.6361C22.2271 21.9973 22.2271 21.9973 22.2444 22.4505C22.5524 22.3987 22.8604 22.3469 23.1778 22.2935C22.9264 22.614 22.6667 22.9279 22.4 23.2355C22.2973 23.2355 22.1947 23.2355 22.0889 23.2355C22.0889 23.5464 22.0889 23.8572 22.0889 24.1775C21.9349 24.0739 21.7809 23.9702 21.6222 23.8635C21.6736 23.7534 21.7249 23.6433 21.7778 23.5299C21.9491 23.0328 21.9679 22.6592 21.9333 22.1365C21.882 22.0329 21.8307 21.9293 21.7778 21.8225C21.763 21.5841 21.7576 21.3451 21.7583 21.1062C21.7577 20.9165 21.7577 20.9165 21.7571 20.7229C21.7778 20.4096 21.7778 20.4096 21.9333 20.2526Z" fill="#2C4158"/>
<path d="M21.7778 25.5904C22.0208 25.7769 22.0208 25.7769 22.2444 26.0614C22.1999 26.3245 22.1483 26.5864 22.0889 26.8464C22.1916 26.95 22.2942 27.0536 22.4 27.1604C22.4 27.3676 22.4 27.5749 22.4 27.7884C22.2973 27.7884 22.1947 27.7884 22.0889 27.7884C22.1402 27.9956 22.1916 28.2029 22.2444 28.4164C22.1771 28.3419 22.1097 28.2674 22.0403 28.1907C21.7742 27.9082 21.7742 27.9082 21.3111 27.7884C21.4039 27.024 21.5553 26.3239 21.7778 25.5904Z" fill="#79A3D0"/>
<path d="M20.2222 23.8635C20.3675 24.3361 20.3847 24.4705 20.2222 24.9625C20.1086 26.0901 20.3748 26.984 20.737 28.0381C20.8321 28.3187 20.9169 28.6029 21 28.8874C20.9487 28.991 20.8973 29.0946 20.8444 29.2014C19.9991 28.2629 19.8582 27.2877 19.8722 26.0516C19.871 25.9447 19.8698 25.8377 19.8686 25.7275C19.8712 25.0478 19.9762 24.495 20.2222 23.8635Z" fill="#758499"/>
<path d="M4.04445 35.7952C4.19845 35.8988 4.35245 36.0025 4.51111 36.1092C4.43017 36.7978 4.33807 37.4709 4.2 38.1502C4.14649 38.5163 4.0943 38.8825 4.04445 39.2492C3.94178 39.1973 3.83911 39.1455 3.73334 39.0922C3.7249 38.6898 3.71875 38.2876 3.71389 37.8852C3.70998 37.7154 3.70998 37.7154 3.70599 37.5421C3.70006 36.8865 3.75216 36.3841 4.04445 35.7952Z" fill="#122342"/>
<path d="M37.3333 24.8055C37.4551 24.8565 37.4551 24.8565 37.5794 24.9085C38.5534 25.2803 39.4097 25.3292 40.4444 25.2765C40.4444 25.4837 40.4444 25.6909 40.4444 25.9044C40.9064 25.9044 41.3684 25.9044 41.8444 25.9044C41.8444 26.0081 41.8444 26.1117 41.8444 26.2184C41.3311 26.2184 40.8178 26.2184 40.2889 26.2184C40.2889 26.063 40.2889 25.9076 40.2889 25.7474C40.1744 25.7511 40.0599 25.7547 39.9419 25.7585C39.7901 25.7613 39.6383 25.7642 39.4819 25.7671C39.3322 25.7707 39.1824 25.7744 39.028 25.7781C38.5512 25.7456 38.226 25.6484 37.8 25.4335C37.5181 25.0998 37.5181 25.0998 37.3333 24.8055Z" fill="#4D73A9"/>
<path d="M29.2444 31.5563C30.3858 32.4778 30.3858 32.4778 30.6444 32.9693C30.5958 33.401 30.5958 33.401 30.4889 33.7543C30.3138 33.604 30.1388 33.4535 29.9639 33.3029C29.8664 33.2191 29.769 33.1353 29.6686 33.049C29.4687 32.8728 29.2765 32.6877 29.0889 32.4983C29.1472 32.0077 29.1472 32.0077 29.2444 31.5563Z" fill="#54657C"/>
<path d="M22.2444 20.2526C22.3072 20.3309 22.37 20.4092 22.4346 20.4899C22.6934 20.7551 22.6934 20.7551 23.0411 20.7462C23.16 20.729 23.2789 20.7118 23.4014 20.6941C23.5792 20.6713 23.5792 20.6713 23.7605 20.6481C24.1229 20.5638 24.409 20.4338 24.7333 20.2526C24.7333 20.3562 24.7333 20.4598 24.7333 20.5666C24.5793 20.6443 24.5793 20.6443 24.4222 20.7236C24.3709 20.879 24.3196 21.0344 24.2667 21.1945C24.1159 21.214 23.9651 21.2334 23.8097 21.2534C23.5739 21.302 23.5739 21.302 23.3333 21.3515C23.282 21.4552 23.2307 21.5588 23.1778 21.6655C23.0751 21.6137 22.9724 21.5619 22.8667 21.5085C22.918 21.4049 22.9693 21.3013 23.0222 21.1945C22.926 21.2237 22.8297 21.2528 22.7306 21.2829C22.4 21.3515 22.4 21.3515 22.0889 21.1945C22.0822 20.933 22.0826 20.6711 22.0889 20.4096C22.1402 20.3578 22.1916 20.3059 22.2444 20.2526Z" fill="#B4C3D3"/>
<path d="M12.7556 5.80888C12.8069 5.80888 12.8582 5.80888 12.9111 5.80888C12.9111 6.11973 12.9111 6.43058 12.9111 6.75086C13.0138 6.75086 13.1164 6.75086 13.2222 6.75086C13.4441 7.74256 13.6505 8.73616 13.8444 9.73379C13.1584 9.18464 12.9214 8.53695 12.7556 7.69284C12.7203 7.06242 12.727 6.43943 12.7556 5.80888Z" fill="#97A0AE"/>
<path d="M32.6667 41.2901C32.7693 41.3937 32.872 41.4973 32.9778 41.6041C32.8238 41.6041 32.6698 41.6041 32.5111 41.6041C32.5624 41.8631 32.6138 42.1222 32.6667 42.3891C32.7693 42.2336 32.872 42.0782 32.9778 41.9181C33.5022 42.0945 33.5314 42.1491 33.775 42.6148C33.8267 42.7117 33.8785 42.8086 33.9318 42.9085C34.0296 43.1012 34.1263 43.2944 34.2222 43.4881C33.4103 43.2734 32.9409 42.9798 32.3556 42.3891C32.2194 41.9475 32.2194 41.9475 32.2 41.6041C32.354 41.5005 32.508 41.3969 32.6667 41.2901Z" fill="#2B2F38"/>
<path d="M42.9333 21.5085C43.036 21.5603 43.1387 21.6121 43.2444 21.6655C43.2156 21.7659 43.1867 21.8663 43.1569 21.9697C43.1345 22.0766 43.112 22.1834 43.0889 22.2935C43.1402 22.3453 43.1916 22.3971 43.2444 22.4505C43.3028 22.9804 43.3028 22.9804 43.2444 23.5495C42.8944 23.8635 42.8944 23.8635 42.4667 24.0205C42.1069 23.9714 42.1069 23.9714 41.8444 23.8635C41.8958 23.6562 41.9471 23.449 42 23.2355C42.2567 23.2355 42.5133 23.2355 42.7778 23.2355C42.776 23.124 42.7742 23.0125 42.7723 22.8976C42.7702 22.6811 42.7702 22.6811 42.7681 22.4603C42.7663 22.3164 42.7644 22.1725 42.7626 22.0243C42.7778 21.6655 42.7778 21.6655 42.9333 21.5085Z" fill="#E7F1FB"/>
<path d="M19.9111 9.57679C20.2704 9.6286 20.6298 9.68041 21 9.73379C20.907 9.77912 20.8139 9.82445 20.7181 9.87116C20.3477 10.0552 20.3477 10.0552 19.9111 10.3618C19.5024 10.3927 19.1138 10.4055 18.7056 10.401C18.5981 10.4022 18.4906 10.4035 18.3799 10.4047C17.6433 10.4019 17.0328 10.2806 16.3333 10.0478C16.3333 9.99597 16.3333 9.94416 16.3333 9.89078C17.514 9.94259 18.6947 9.9944 19.9111 10.0478C19.9111 9.89235 19.9111 9.73693 19.9111 9.57679Z" fill="#223C66"/>
<path d="M14.7778 34.8532C14.6751 35.0605 14.5724 35.2677 14.4667 35.4812C14.1587 35.4812 13.8507 35.4812 13.5333 35.4812C13.636 35.6885 13.7387 35.8957 13.8444 36.1092C13.4851 36.0574 13.1258 36.0056 12.7556 35.9522C12.7556 35.7968 12.7556 35.6414 12.7556 35.4812C12.8582 35.533 12.9609 35.5848 13.0667 35.6382C13.0153 35.431 12.964 35.2238 12.9111 35.0102C13.5466 34.9247 14.1357 34.8532 14.7778 34.8532Z" fill="#263C56"/>
<path d="M30.4889 27.1604C30.5916 27.3677 30.6942 27.5749 30.8 27.7884C30.8513 27.6848 30.9027 27.5812 30.9556 27.4744C30.9556 27.7853 30.9556 28.0961 30.9556 28.4164C30.3617 28.6322 29.8554 28.5231 29.2444 28.4164C29.3471 28.3646 29.4498 28.3128 29.5556 28.2594C29.7254 27.9559 29.7254 27.9559 29.8667 27.6314C30.0222 27.3174 30.0222 27.3174 30.4889 27.1604Z" fill="#1F324D"/>
<path d="M14.9333 9.57679C14.975 9.67717 15.0167 9.77755 15.0597 9.88097C15.2268 10.2568 15.2268 10.2568 15.7111 10.3618C15.6084 10.569 15.5058 10.7762 15.4 10.9898C14.8487 10.9898 14.7618 10.894 14.3597 10.5384C14.2629 10.4546 14.166 10.3708 14.0662 10.2845C13.8444 10.0478 13.8444 10.0478 13.8444 9.73379C14.0706 9.73864 14.0706 9.73864 14.3014 9.7436C14.7583 9.78971 14.7583 9.78971 14.9333 9.57679Z" fill="#3F4145"/>
<path d="M13.8444 6.75085C13.9984 7.47618 14.1524 8.2015 14.3111 8.94881C14.1571 8.94881 14.0031 8.94881 13.8444 8.94881C13.3827 8.35734 13.2939 7.80311 13.2222 7.06485C13.6889 6.75085 13.6889 6.75085 13.8444 6.75085Z" fill="#03091B"/>
<path d="M19.1333 2.35495C19.1333 2.45857 19.1333 2.56218 19.1333 2.66894C19.698 2.77256 20.2627 2.87618 20.8444 2.98293C20.8444 3.03474 20.8444 3.08655 20.8444 3.13993C20.3311 3.24355 19.8178 3.34717 19.2889 3.45392C19.1349 3.19488 18.9809 2.93584 18.8222 2.66894C18.7452 2.69161 18.6682 2.71427 18.5889 2.73763C18.0479 2.86047 17.5063 2.91809 16.9556 2.98293C16.9556 2.87932 16.9556 2.7757 16.9556 2.66894C18.4193 2.30846 18.4193 2.30846 19.1333 2.35495Z" fill="#DCE8F7"/>
<path d="M20.3778 8.94881C20.3778 9.10423 20.3778 9.25966 20.3778 9.4198C20.1724 9.4198 19.9671 9.4198 19.7556 9.4198C19.7042 9.62703 19.6529 9.83427 19.6 10.0478C19.5487 9.99597 19.4973 9.94417 19.4444 9.89079C19.0256 9.85361 18.6099 9.82454 18.1903 9.80248C18.0723 9.7957 17.9543 9.78892 17.8327 9.78193C17.5403 9.76523 17.2479 9.74943 16.9556 9.73379C16.9556 9.63017 16.9556 9.52655 16.9556 9.4198C17.1168 9.41211 17.278 9.40442 17.4441 9.39649C17.6572 9.38471 17.8703 9.37285 18.0833 9.36092C18.1894 9.35607 18.2955 9.35121 18.4048 9.3462C19.1216 9.30406 19.6952 8.94881 20.3778 8.94881Z" fill="#4E78B3"/>
<path d="M33.95 34.2743C34.0398 34.3099 34.1297 34.3456 34.2222 34.3823C34.1228 34.4243 34.0233 34.4664 33.9208 34.5098C33.5485 34.6785 33.5485 34.6785 33.4444 35.1672C33.3418 35.1672 33.2391 35.1672 33.1333 35.1672C33.0307 35.4781 32.928 35.7889 32.8222 36.1092C32.7196 36.1092 32.6169 36.1092 32.5111 36.1092C32.4598 36.4201 32.4084 36.7309 32.3556 37.0512C32.2529 37.0512 32.1502 37.0512 32.0444 37.0512C32.1565 36.3277 32.4042 35.6897 32.6667 35.0102C32.7693 35.0102 32.872 35.0102 32.9778 35.0102C32.9778 34.9066 32.9778 34.803 32.9778 34.6962C33.4791 34.2083 33.4791 34.2083 33.95 34.2743Z" fill="#324D73"/>
<path d="M16.4889 33.7543C15.9659 34.4218 15.4392 34.9534 14.7778 35.4812C14.6751 35.4294 14.5724 35.3776 14.4667 35.3242C14.5693 35.1688 14.672 35.0134 14.7778 34.8532C14.6751 34.8014 14.5724 34.7496 14.4667 34.6962C14.9787 34.1187 15.6719 33.342 16.4889 33.7543Z" fill="#64748A"/>
<path d="M38.5778 26.5324C38.4238 26.5842 38.2698 26.636 38.1111 26.6894C38.1111 26.793 38.1111 26.8967 38.1111 27.0034C39.0351 27.1588 39.0351 27.1588 39.9778 27.3174C39.9778 27.3692 39.9778 27.421 39.9778 27.4744C38.9153 27.5263 38.0126 27.4153 37.0222 27.0034C36.9196 26.8998 36.8169 26.7962 36.7111 26.6894C37.3327 26.2451 37.8665 26.4128 38.5778 26.5324Z" fill="#474D58"/>
<path d="M30.3333 23.7065C30.436 23.8101 30.5387 23.9137 30.6444 24.0205C30.8658 23.9379 30.8658 23.9379 31.0917 23.8537C31.5778 23.7065 31.5778 23.7065 31.8889 23.8635C31.7862 23.9671 31.6836 24.0707 31.5778 24.1775C31.5155 24.5421 31.4627 24.9087 31.4222 25.2764C31.2169 25.3283 31.0116 25.3801 30.8 25.4334C30.7213 25.2343 30.6437 25.0347 30.5667 24.8349C30.5234 24.7238 30.48 24.6127 30.4354 24.4982C30.3333 24.1775 30.3333 24.1775 30.3333 23.7065Z" fill="#B2C9E1"/>
<path d="M36.7111 18.0546C36.8138 18.1064 36.9164 18.1582 37.0222 18.2116C36.9056 18.5158 36.9056 18.5158 36.7111 18.8396C36.3806 18.9573 36.3806 18.9573 36.0889 18.9966C36.0696 19.1326 36.0504 19.2686 36.0306 19.4087C35.9364 19.9221 35.796 20.3896 35.6222 20.8805C35.5709 20.8805 35.5196 20.8805 35.4667 20.8805C35.3642 20.3534 35.2915 19.8486 35.3111 19.3106C35.6514 18.8494 35.6514 18.8494 36.0889 18.5256C36.2076 18.4317 36.3263 18.3378 36.4486 18.241C36.5352 18.1795 36.6219 18.118 36.7111 18.0546Z" fill="#041028"/>
<path d="M10.4222 40.8191C10.6276 40.8709 10.8329 40.9227 11.0444 40.9761C10.7919 41.2444 10.5322 41.5059 10.2667 41.7611C10.164 41.7611 10.0613 41.7611 9.95555 41.7611C9.95555 41.8647 9.95555 41.9683 9.95555 42.0751C9.26849 42.2076 8.61316 42.2577 7.91389 42.2615C7.7274 42.2637 7.54092 42.266 7.34878 42.2683C6.87511 42.2343 6.61838 42.1697 6.22222 41.9181C6.38384 41.9235 6.54546 41.929 6.71198 41.9346C8.5544 42.0224 8.5544 42.0224 10.2667 41.4471C10.3931 41.1271 10.3931 41.1271 10.4222 40.8191Z" fill="#213C64"/>
<path d="M10.7333 40.8191C10.6307 40.8191 10.528 40.8191 10.4222 40.8191C10.3709 40.9745 10.3196 41.13 10.2667 41.2901C9.59427 41.6824 8.91028 41.6512 8.15694 41.6433C7.98084 41.6452 7.98084 41.6452 7.80117 41.647C7.20173 41.6449 6.72958 41.6324 6.22222 41.2901C6.22222 41.2383 6.22222 41.1865 6.22222 41.1331C6.53326 41.1264 6.84451 41.1267 7.15555 41.1331C7.20689 41.1849 7.25822 41.2367 7.31111 41.2901C8.32252 41.4136 9.07644 41.27 9.96953 40.7842C10.2667 40.6621 10.2667 40.6621 10.7333 40.8191Z" fill="#6A95C9"/>
<path d="M11.5111 36.8942C11.6138 36.8942 11.7164 36.8942 11.8222 36.8942C11.8786 37.1228 11.9334 37.3519 11.9875 37.5811C12.0335 37.7723 12.0335 37.7723 12.0805 37.9674C12.1333 38.3072 12.1333 38.3072 11.9778 38.6212C12.0804 38.6212 12.1831 38.6212 12.2889 38.6212C12.2403 38.9253 12.2403 38.9253 12.1333 39.2491C11.9793 39.301 11.8253 39.3528 11.6667 39.4061C11.5526 39.7225 11.5526 39.7225 11.5111 40.0341C11.4084 39.9823 11.3058 39.9305 11.2 39.8771C11.3027 39.6699 11.4053 39.4627 11.5111 39.2491C11.6138 39.2491 11.7164 39.2491 11.8222 39.2491C11.8222 38.9901 11.8222 38.7311 11.8222 38.4642C11.7196 38.4642 11.6169 38.4642 11.5111 38.4642C11.3633 37.884 11.3633 37.4744 11.5111 36.8942Z" fill="#98B9DF"/>
<path d="M10.8889 35.1672C11.543 35.6257 12.0205 36.1305 12.2889 36.8942C12.3363 37.3708 12.3275 37.8303 12.2889 38.3072C11.8592 37.8735 11.8878 37.4897 11.8222 36.8942C11.7196 36.8942 11.6169 36.8942 11.5111 36.8942C11.4598 36.6352 11.4084 36.3761 11.3556 36.1092C11.2529 36.1092 11.1502 36.1092 11.0444 36.1092C10.9931 35.7984 10.9418 35.4875 10.8889 35.1672Z" fill="#7595C0"/>
<path d="M20.1274 31.3674C20.21 31.4298 20.2927 31.4921 20.3778 31.5563C19.6404 32.1765 18.8554 32.6553 17.8889 32.6553C17.8889 32.5517 17.8889 32.4481 17.8889 32.3413C18.2753 32.0592 18.2753 32.0592 18.7833 31.7526C18.9494 31.6498 19.1154 31.5469 19.2865 31.441C19.7556 31.2423 19.7556 31.2423 20.1274 31.3674Z" fill="#62758D"/>
<path d="M20.6889 13.0307C20.7402 13.0307 20.7916 13.0307 20.8444 13.0307C20.8894 13.1732 20.9343 13.3157 20.9806 13.4625C21.1308 13.9483 21.1308 13.9483 21.3214 14.2738C21.4897 14.6526 21.4937 14.9047 21.4764 15.317C21.4585 15.7826 21.4728 16.0322 21.6222 16.4846C21.5196 16.6401 21.4169 16.7955 21.3111 16.9556C21.2362 16.6352 21.1618 16.3146 21.0875 15.994C21.0252 15.7263 21.0252 15.7263 20.9617 15.4531C20.7828 14.6314 20.669 13.8732 20.6889 13.0307Z" fill="#D4DDEC"/>
<path d="M16.4889 10.2048C17.1046 10.1957 17.7203 10.1901 18.3361 10.1852C18.5116 10.1825 18.687 10.1799 18.8678 10.1772C19.0352 10.1762 19.2027 10.1752 19.3752 10.1741C19.53 10.1725 19.6847 10.1708 19.8442 10.1691C20.2222 10.2048 20.2222 10.2048 20.5333 10.5188C19.8551 10.7115 19.2113 10.7046 18.5111 10.7052C18.3228 10.7081 18.3228 10.7081 18.1307 10.711C17.9485 10.7115 17.9485 10.7115 17.7625 10.7119C17.6524 10.7126 17.5423 10.7132 17.4289 10.7139C17.0616 10.6698 16.8087 10.5448 16.4889 10.3618C16.4889 10.31 16.4889 10.2582 16.4889 10.2048Z" fill="#14243E"/>
<path d="M36.7111 25.2765C36.7111 25.3801 36.7111 25.4837 36.7111 25.5905C36.9164 25.6941 37.1218 25.7977 37.3333 25.9044C37.3333 26.0081 37.3333 26.1117 37.3333 26.2184C37.2307 26.2184 37.128 26.2184 37.0222 26.2184C37.0222 26.3221 37.0222 26.4257 37.0222 26.5324C36.4203 26.4424 36.0652 26.1573 35.6222 25.7474C35.6222 25.6438 35.6222 25.5402 35.6222 25.4335C36.3611 25.2765 36.3611 25.2765 36.7111 25.2765Z" fill="#030816"/>
<path d="M35 23.0785C35.154 23.1303 35.308 23.1821 35.4667 23.2355C35.4969 23.4676 35.5258 23.6998 35.5542 23.9322C35.5704 24.0615 35.5867 24.1908 35.6034 24.324C35.6096 24.4311 35.6158 24.5382 35.6222 24.6485C35.4667 24.8055 35.4667 24.8055 34.9125 24.8153C34.736 24.812 34.5596 24.8088 34.3778 24.8055C34.3264 24.65 34.2751 24.4946 34.2222 24.3345C34.3762 24.2827 34.5302 24.2308 34.6889 24.1775C34.8802 23.6261 34.8802 23.6261 35 23.0785Z" fill="#152743"/>
<path d="M22.0889 22.1365C22.0428 22.6945 21.9639 22.8906 21.5639 23.2944C21.4291 23.3786 21.2944 23.4627 21.1556 23.5495C21.0016 23.4977 20.8476 23.4459 20.6889 23.3925C20.6889 23.5479 20.6889 23.7033 20.6889 23.8635C20.5862 23.8635 20.4836 23.8635 20.3778 23.8635C20.5852 23.2997 20.8149 22.7887 21.1556 22.2935C21.6222 22.1365 21.6222 22.1365 22.0889 22.1365Z" fill="#333744"/>
<path d="M37.0222 20.5666C37.1249 20.6184 37.2276 20.6702 37.3333 20.7236C37.3333 20.9826 37.3333 21.2416 37.3333 21.5085C37.128 21.5603 36.9227 21.6122 36.7111 21.6655C36.7111 21.178 36.795 20.9822 37.0222 20.5666ZM36.0889 22.1365C36.2429 22.1883 36.3969 22.2401 36.5556 22.2935C36.5042 22.3971 36.4529 22.5008 36.4 22.6075C36.5027 22.6075 36.6053 22.6075 36.7111 22.6075C36.7624 22.9184 36.8138 23.2292 36.8667 23.5495C36.9693 23.5495 37.072 23.5495 37.1778 23.5495C37.1778 23.6531 37.1778 23.7567 37.1778 23.8635C36.8958 23.8537 36.8958 23.8537 36.5556 23.7065C36.2736 23.1576 36.0889 22.7583 36.0889 22.1365Z" fill="#E5EFF6"/>
<path d="M14.1556 7.84983C14.5406 7.92754 14.5406 7.92754 14.9333 8.00683C14.9333 8.11044 14.9333 8.21406 14.9333 8.32082C15.0296 8.35968 15.1258 8.39853 15.225 8.43857C15.6189 8.67242 15.6811 8.85081 15.8667 9.2628C16.1064 9.53114 16.1064 9.53114 16.3333 9.73379C15.7098 9.73379 15.247 9.50756 14.7778 9.1058C14.6319 8.59556 14.6319 8.59556 14.6222 8.16382C14.4682 8.16382 14.3142 8.16382 14.1556 8.16382C14.1556 8.06021 14.1556 7.95659 14.1556 7.84983Z" fill="#254271"/>
<path d="M19.9403 8.69369C20.0798 8.74226 20.0798 8.74226 20.2222 8.79181C19.903 9.14471 19.7545 9.26315 19.2889 9.4198C18.8887 9.43083 18.493 9.43451 18.0931 9.42961C17.9839 9.4289 17.8747 9.42819 17.7622 9.42747C17.4933 9.42562 17.2244 9.4228 16.9556 9.4198C16.9556 9.31618 16.9556 9.21256 16.9556 9.10581C16.8016 9.054 16.6476 9.00219 16.4889 8.94881C16.6744 8.95245 16.8599 8.9561 17.051 8.95985C17.2946 8.96279 17.5383 8.96565 17.7819 8.96843C17.9042 8.97106 18.0264 8.9737 18.1523 8.97641C18.2701 8.97742 18.3879 8.97843 18.5093 8.97947C18.6718 8.98194 18.6718 8.98194 18.8376 8.98446C19.3049 8.92813 19.4539 8.60954 19.9403 8.69369Z" fill="#739ACD"/>
<path d="M19.4444 2.35495C20.2144 2.51038 20.2144 2.51038 21 2.66894C21 2.77256 21 2.87618 21 2.98294C21.0936 2.9965 21.1873 3.01006 21.2838 3.02403C21.7184 3.17287 21.8221 3.34795 22.0597 3.73848C22.1281 3.84635 22.1965 3.95422 22.2669 4.06535C22.4248 4.4576 22.3863 4.63304 22.2444 5.02389C22.1825 4.9142 22.1205 4.80451 22.0567 4.6915C21.9743 4.54862 21.8919 4.40574 21.8069 4.25853C21.7257 4.11646 21.6445 3.97439 21.5608 3.82802C21.218 3.3145 20.9486 3.16055 20.3486 3.04181C20.2042 3.02238 20.0599 3.00295 19.9111 2.98294C19.9111 2.87932 19.9111 2.7757 19.9111 2.66894C19.7571 2.61713 19.6031 2.56533 19.4444 2.51195C19.4444 2.46014 19.4444 2.40833 19.4444 2.35495Z" fill="#7389A6"/>
<path d="M17.2667 1.25597C19.7446 1.16907 19.7446 1.16907 20.6889 1.72696C20.5862 1.83058 20.4836 1.9342 20.3778 2.04095C20.2238 2.04095 20.0698 2.04095 19.9111 2.04095C19.9111 1.93734 19.9111 1.83372 19.9111 1.72696C19.8114 1.72878 19.7118 1.7306 19.6091 1.73248C18.8088 1.74091 18.0553 1.70839 17.2667 1.56996C17.2667 1.46635 17.2667 1.36273 17.2667 1.25597Z" fill="#00040B"/>
<path d="M41.5333 37.3652C41.636 37.417 41.7387 37.4688 41.8444 37.5222C41.8753 38.5749 41.8924 39.5085 41.5333 40.5051C41.2653 40.0357 41.1831 39.7012 41.1931 39.1608C41.1941 39.0408 41.1951 38.9208 41.1961 38.7972C41.2222 38.4642 41.2222 38.4642 41.3778 37.9932C41.431 37.7842 41.4832 37.5749 41.5333 37.3652Z" fill="#4F5E77"/>
<path d="M29.4 30.4573C29.5027 30.5091 29.6053 30.561 29.7111 30.6143C29.6084 30.718 29.5058 30.8216 29.4 30.9283C29.2948 31.2733 29.2948 31.2733 29.225 31.6544C29.1989 31.7827 29.1729 31.9111 29.146 32.0432C29.1272 32.1416 29.1083 32.24 29.0889 32.3413C28.5499 32.0304 28.5499 32.0304 28 31.7133C28 31.6097 28 31.5061 28 31.3993C28.154 31.3475 28.308 31.2957 28.4667 31.2423C28.518 31.1387 28.5693 31.0351 28.6222 30.9283C28.7249 30.9283 28.8276 30.9283 28.9333 30.9283C28.9847 30.8247 29.036 30.7211 29.0889 30.6143C29.1916 30.5625 29.2942 30.5107 29.4 30.4573Z" fill="#303745"/>
<path d="M19.4444 29.1229C19.9111 29.2014 19.9111 29.2014 20.2806 29.4467C20.6311 29.9774 20.6345 30.3042 20.5333 30.9283C20.1639 31.2423 20.1639 31.2423 19.7556 31.3993C19.6529 31.3475 19.5502 31.2957 19.4444 31.2423C19.6498 31.1387 19.8551 31.0351 20.0667 30.9283C20.0667 30.462 20.0667 29.9958 20.0667 29.5154C19.502 29.619 18.9373 29.7226 18.3556 29.8293C18.7072 29.3925 18.8853 29.2169 19.4444 29.1229Z" fill="#7393BA"/>
<path d="M41.0667 18.5256C41.9201 18.5886 42.4756 18.8861 43.0889 19.4676C43.5112 20.1138 43.61 20.5828 43.5556 21.3515C43.315 20.9873 43.0781 20.6221 42.8458 20.2526C42.7783 20.1457 42.7107 20.0389 42.6411 19.9288C42.4667 19.6246 42.4667 19.6246 42.3111 19.1536C41.9499 19.0429 41.5869 18.9382 41.2222 18.8396C41.1709 18.736 41.1196 18.6324 41.0667 18.5256Z" fill="#ACB9C9"/>
<path d="M36.7111 17.4266C36.8138 17.4784 36.9164 17.5302 37.0222 17.5836C37.0222 17.739 37.0222 17.8945 37.0222 18.0546C36.7133 18.2672 36.4018 18.4761 36.0889 18.6826C35.7276 19.0922 35.7276 19.0922 35.4667 19.4676C35.4153 19.364 35.364 19.2603 35.3111 19.1536C35.1571 19.2313 35.1571 19.2313 35 19.3106C35.2339 18.7347 35.5658 18.4174 36.0306 18.0154C36.2213 17.849 36.2213 17.849 36.4158 17.6793C36.5133 17.5959 36.6107 17.5125 36.7111 17.4266Z" fill="#4F5766"/>
<path d="M18.2 30.4573C18.3027 30.4573 18.4053 30.4573 18.5111 30.4573C18.5624 30.6128 18.6138 30.7682 18.6667 30.9283C18.6153 31.0319 18.564 31.1356 18.5111 31.2423C18.3058 31.2423 18.1004 31.2423 17.8889 31.2423C17.8889 31.5532 17.8889 31.864 17.8889 32.1843C17.6836 32.1325 17.4782 32.0807 17.2667 32.0273C17.2667 31.9237 17.2667 31.8201 17.2667 31.7133C17.164 31.6615 17.0613 31.6097 16.9556 31.5563C17.1111 31.0853 17.1111 31.0853 17.4028 30.8989C17.7333 30.7713 17.7333 30.7713 18.2 30.7713C18.2 30.6677 18.2 30.5641 18.2 30.4573Z" fill="#E5EEF7"/>
<path d="M22.2444 26.0614C22.2958 26.2169 22.3471 26.3723 22.4 26.5324C22.4513 26.6555 22.5027 26.7785 22.5556 26.9053C22.7063 27.3045 22.7953 27.6822 22.8667 28.1024C23.0207 28.1024 23.1747 28.1024 23.3333 28.1024C23.3333 28.206 23.3333 28.3096 23.3333 28.4164C23.436 28.4164 23.5387 28.4164 23.6444 28.4164C23.6444 28.5718 23.6444 28.7272 23.6444 28.8874C23.5418 28.8874 23.4391 28.8874 23.3333 28.8874C23.282 28.6801 23.2307 28.4729 23.1778 28.2594C22.8698 28.3112 22.5618 28.363 22.2444 28.4164C22.1931 28.2091 22.1418 28.0019 22.0889 27.7884C22.1916 27.7884 22.2942 27.7884 22.4 27.7884C22.3487 27.6718 22.2973 27.5553 22.2444 27.4352C22.0889 27.0034 22.0889 27.0034 22.0889 26.3754C22.1402 26.2718 22.1916 26.1682 22.2444 26.0614Z" fill="#9AB8E2"/>
<path d="M41.5333 17.4266C42.1457 17.6326 42.502 17.8849 42.9333 18.3686C42.8146 18.3168 42.6959 18.265 42.5736 18.2116C42.157 18.0272 42.157 18.0272 41.6889 18.0546C41.6889 18.21 41.6889 18.3655 41.6889 18.5256C41.0472 18.4177 40.4056 18.3097 39.7639 18.2018C39.5991 18.1741 39.4342 18.1463 39.2644 18.1178C39.1405 18.0969 39.0166 18.0761 38.8889 18.0546C38.8889 18.0028 38.8889 17.951 38.8889 17.8976C39.0537 17.9031 39.2185 17.9085 39.3884 17.9142C39.6043 17.9186 39.8202 17.9229 40.0361 17.927C40.1991 17.933 40.1991 17.933 40.3654 17.939C40.7194 17.9494 40.7194 17.9494 41.2222 17.8976C41.3249 17.7422 41.4276 17.5868 41.5333 17.4266Z" fill="#535D6F"/>
<path d="M16.4889 1.41297C16.5916 1.46478 16.6942 1.51659 16.8 1.56997C16.8 1.72539 16.8 1.88082 16.8 2.04096C16.4407 2.14458 16.0813 2.24819 15.7111 2.35495C15.7111 2.45857 15.7111 2.56219 15.7111 2.66894C15.4544 2.77256 15.1978 2.87618 14.9333 2.98294C14.9847 2.72389 15.036 2.46485 15.0889 2.19795C15.2942 2.14615 15.4996 2.09434 15.7111 2.04096C15.7111 1.93734 15.7111 1.83372 15.7111 1.72696C16.0806 1.56016 16.0806 1.56016 16.4889 1.41297Z" fill="#030A15"/>
<path d="M33.1333 39.4061C33.39 39.4061 33.6467 39.4061 33.9111 39.4061C33.9721 39.5519 34.033 39.6976 34.0958 39.8477C34.4022 40.3915 34.6314 40.5189 35.1556 40.8191C35.1556 40.9745 35.1556 41.13 35.1556 41.2901C34.5903 41.1316 34.3881 40.9893 34.0181 40.5149C33.7556 40.0341 33.7556 40.0341 33.7556 39.5631C33.6016 39.5631 33.4476 39.5631 33.2889 39.5631C33.3402 39.6668 33.3916 39.7704 33.4444 39.8771C33.6446 40.4832 33.6214 40.9669 33.6 41.6041C33.5487 41.6041 33.4973 41.6041 33.4444 41.6041C33.0873 40.1268 33.0873 40.1268 33.1333 39.4061Z" fill="#97B6D5"/>
<path d="M30.4889 32.8123C30.5916 32.8123 30.6942 32.8123 30.8 32.8123C30.8 32.9159 30.8 33.0195 30.8 33.1263C31.0053 33.1781 31.2107 33.2299 31.4222 33.2833C31.4222 33.3869 31.4222 33.4905 31.4222 33.5973C31.8072 33.7527 31.8072 33.7527 32.2 33.9113C32.2 34.0149 32.2 34.1185 32.2 34.2253C32.4053 34.2771 32.6107 34.3289 32.8222 34.3823C32.7196 34.1232 32.6169 33.8642 32.5111 33.5973C32.7164 33.5973 32.9218 33.5973 33.1333 33.5973C33.1333 33.9599 33.1333 34.3226 33.1333 34.6962C32.4376 34.6117 32.0208 34.3477 31.4611 33.9309C31.3111 33.8212 31.1611 33.7115 31.0066 33.5985C30.6444 33.2833 30.6444 33.2833 30.4889 32.8123Z" fill="#87A5C6"/>
<path d="M23.6444 18.0546C24.157 18.7444 24.1941 18.9615 24.1664 19.7718C24.1111 20.0956 24.1111 20.0956 23.8389 20.4194C23.4889 20.5666 23.4889 20.5666 22.8667 20.5666C22.764 20.3075 22.6613 20.0485 22.5556 19.7816C22.7096 19.8334 22.8636 19.8852 23.0222 19.9386C23.0222 20.0422 23.0222 20.1458 23.0222 20.2526C23.2276 20.2008 23.4329 20.1489 23.6444 20.0956C23.6444 19.4221 23.6444 18.7485 23.6444 18.0546Z" fill="#AABFD7"/>
<path d="M35.1556 40.8191C35.2443 40.8703 35.3331 40.9215 35.4246 40.9742C35.8036 41.1447 36.0395 41.1697 36.451 41.1638C36.5754 41.1628 36.6997 41.1617 36.8278 41.1607C36.9561 41.1581 37.0844 41.1554 37.2167 41.1527C37.4128 41.1506 37.4128 41.1506 37.6128 41.1484C37.9345 41.1447 38.2561 41.1391 38.5778 41.1331C37.9029 41.5872 37.4301 41.629 36.6333 41.6335C36.4553 41.6358 36.2772 41.638 36.0938 41.6403C35.6222 41.6041 35.6222 41.6041 35.1556 41.2901C35.1556 41.1347 35.1556 40.9792 35.1556 40.8191Z" fill="#ADCAE6"/>
<path d="M37.6444 40.5051C37.9563 40.553 38.2674 40.6057 38.5778 40.6621C38.9319 40.606 38.9319 40.606 39.2 40.5051C39.1487 40.7642 39.0973 41.0232 39.0444 41.2901C38.1204 41.2383 37.1964 41.1865 36.2444 41.1331C36.2444 41.0813 36.2444 41.0295 36.2444 40.9761C36.4177 40.9567 36.5909 40.9373 36.7694 40.9172C37.3382 40.8746 37.3382 40.8746 37.6444 40.5051Z" fill="#CFDCED"/>
<path d="M13.2222 39.2491C13.3778 39.7201 13.3778 39.7201 13.1444 40.2991C12.759 41.0374 12.2324 41.6291 11.6667 42.2321C11.564 42.1803 11.4613 42.1285 11.3556 42.0751C11.4582 41.9941 11.5609 41.9132 11.6667 41.8298C12.0799 41.3215 12.0265 40.9878 11.9778 40.3481C12.2889 40.3481 12.6 40.3481 12.9111 40.3481C12.9336 40.2251 12.956 40.102 12.9792 39.9753C13.0667 39.5631 13.0667 39.5631 13.2222 39.2491Z" fill="#717781"/>
<path d="M10.7333 38.4642C10.7847 38.4642 10.836 38.4642 10.8889 38.4642C10.8889 38.7232 10.8889 38.9823 10.8889 39.2492C10.8376 39.2492 10.7862 39.2492 10.7333 39.2492C10.7333 38.9901 10.7333 38.7311 10.7333 38.4642ZM9.66389 39.8575C9.81147 39.864 9.95906 39.8705 10.1111 39.8771C10.1111 39.929 10.1111 39.9808 10.1111 40.0341C9.85444 40.0341 9.59778 40.0341 9.33333 40.0341C9.33333 40.2414 9.33333 40.4486 9.33333 40.6621C8.97689 40.6706 8.62039 40.6767 8.26389 40.6817C7.96612 40.6872 7.96612 40.6872 7.66233 40.6928C7.15556 40.6621 7.15556 40.6621 6.84444 40.3481C7.058 40.3366 7.058 40.3366 7.27587 40.3248C7.46075 40.3131 7.64563 40.3014 7.83611 40.2893C8.02019 40.2783 8.20427 40.2674 8.39392 40.2561C8.98869 40.1744 9.05793 39.882 9.66389 39.8575Z" fill="#D6E3F1"/>
<path d="M11.2 39.0921C11.3027 39.0921 11.4053 39.0921 11.5111 39.0921C11.4598 39.4548 11.4084 39.8175 11.3556 40.1911C11.2529 40.1911 11.1502 40.1911 11.0444 40.1911C11.0444 40.2947 11.0444 40.3984 11.0444 40.5051C10.7942 40.4954 10.7942 40.4954 10.5389 40.4855C10.0088 40.5033 9.76774 40.5385 9.33334 40.8191C9.38467 40.6119 9.436 40.4046 9.48889 40.1911C9.89956 40.1911 10.3102 40.1911 10.7333 40.1911C10.7526 40.0681 10.7718 39.945 10.7917 39.8183C10.8889 39.4061 10.8889 39.4061 11.2 39.0921Z" fill="#B2CBE7"/>
<path d="M4.82222 36.2662C5.02755 36.318 5.23289 36.3698 5.44444 36.4232C5.41877 36.5333 5.39311 36.6434 5.36666 36.7568C5.27324 37.214 5.27324 37.214 5.29861 37.7086C5.28889 38.1502 5.28889 38.1502 4.97777 38.4642C4.87783 38.7889 4.87783 38.7889 4.82222 39.0921C4.66822 39.0403 4.51422 38.9885 4.35555 38.9351C4.41389 38.631 4.41389 38.631 4.51111 38.3072C4.61377 38.2554 4.71644 38.2035 4.82222 38.1502C4.82222 37.5285 4.82222 36.9068 4.82222 36.2662Z" fill="#C7DBEF"/>
<path d="M38.1111 33.1263C38.1111 33.1781 38.1111 33.2299 38.1111 33.2833C37.9669 33.2814 37.8228 33.2796 37.6742 33.2778C37.3948 33.2756 37.3948 33.2756 37.1097 33.2735C36.8309 33.2707 36.8309 33.2707 36.5464 33.2679C36.1062 33.23 36.1062 33.23 35.9333 33.4403C35.6451 33.4516 35.3565 33.4534 35.0681 33.4501C34.9106 33.4487 34.7532 33.4472 34.5911 33.4458C34.4693 33.444 34.3476 33.4421 34.2222 33.4403C35.2119 32.4414 36.8918 32.8755 38.1111 33.1263Z" fill="#5C6679"/>
<path d="M33.4444 40.0341C33.9507 40.4791 34.1477 40.7698 34.2222 41.4471C34.6842 41.5248 34.6842 41.5248 35.1556 41.6041C35.2069 41.7595 35.2582 41.915 35.3111 42.0751C34.7933 42.0248 34.3341 41.9656 33.8528 41.7611C33.4456 41.2553 33.4708 40.6687 33.4444 40.0341Z" fill="#446BA7"/>
<path d="M37.4889 33.4403C37.7127 33.454 37.9363 33.471 38.1597 33.4893C38.2842 33.4984 38.4088 33.5076 38.5371 33.5169C38.9542 33.6122 39.0773 33.7497 39.3556 34.0683C39.5096 34.1719 39.6636 34.2755 39.8222 34.3823C39.7709 34.5377 39.7196 34.6931 39.6667 34.8532C38.9911 34.7746 38.6074 34.3496 38.1111 33.9113C37.905 33.7525 37.6982 33.5947 37.4889 33.4403Z" fill="#040C14"/>
<path d="M15.7111 10.2048C15.9494 10.2443 16.186 10.2952 16.4208 10.352C16.5494 10.3825 16.6779 10.4131 16.8103 10.4446C16.9592 10.4813 16.9592 10.4813 17.1111 10.5188C16.7457 11.072 16.6321 11.0986 16.0222 11.3038C15.6042 11.1566 15.6042 11.1566 15.2444 10.9898C15.5361 10.3814 15.5361 10.3814 15.7111 10.2048Z" fill="#040910"/>
<path d="M16.4889 8.47781C16.6429 8.52962 16.7969 8.58143 16.9556 8.63481C18.0013 8.6833 19.0364 8.67126 20.0667 8.47781C19.3723 9.01507 19.0265 9.12743 18.1417 9.12542C17.964 9.12583 17.7863 9.12623 17.6033 9.12665C17.1994 9.10954 16.8721 9.06884 16.4889 8.9488C16.4889 8.79338 16.4889 8.63795 16.4889 8.47781Z" fill="#92B5DE"/>
<path d="M22.0889 4.8669C22.1916 4.91871 22.2942 4.97052 22.4 5.02389C22.4 5.49017 22.4 5.95645 22.4 6.43686C22.2973 6.43686 22.1947 6.43686 22.0889 6.43686C22.1402 6.6441 22.1916 6.85133 22.2444 7.06485C22.0391 7.11666 21.8338 7.16847 21.6222 7.22185C21.6736 6.70376 21.7249 6.18567 21.7778 5.65188C21.8804 5.65188 21.9831 5.65188 22.0889 5.65188C22.0889 5.39284 22.0889 5.13379 22.0889 4.8669Z" fill="#ADC6E5"/>
<path d="M40.2889 39.4061C40.3916 39.4061 40.4942 39.4061 40.6 39.4061C40.5643 39.7075 40.5247 40.0083 40.4833 40.3089C40.4617 40.4764 40.44 40.644 40.4177 40.8167C40.2706 41.3573 40.1029 41.5779 39.6667 41.9181C39.3167 41.8788 39.3167 41.8788 39.0444 41.7611C39.1214 41.6899 39.1984 41.6186 39.2778 41.5452C39.5463 41.3095 39.5463 41.3095 39.5111 40.9761C39.6651 40.9761 39.8191 40.9761 39.9778 40.9761C39.9457 40.879 39.9136 40.7818 39.8806 40.6817C39.8613 40.5716 39.8421 40.4616 39.8222 40.3481C39.9249 40.2445 40.0276 40.1409 40.1333 40.0341C40.2333 39.7093 40.2333 39.7093 40.2889 39.4061Z" fill="#82A0BF"/>
<path d="M23.6444 28.8874C23.7509 28.9098 23.8574 28.9323 23.9671 28.9554C24.4705 29.0538 24.975 29.1337 25.4819 29.2112C25.7529 29.2528 25.7529 29.2528 26.0294 29.2952C26.1664 29.316 26.3033 29.3369 26.4444 29.3584C26.0602 29.7461 25.925 29.7231 25.3944 29.7312C24.6155 29.7187 24.2283 29.5561 23.6444 29.0444C23.6444 28.9926 23.6444 28.9408 23.6444 28.8874Z" fill="#94B7DF"/>
<path d="M35.3111 21.5085C35.3624 21.6121 35.4138 21.7158 35.4667 21.8225C35.5693 21.8225 35.672 21.8225 35.7778 21.8225C35.8291 22.0298 35.8804 22.237 35.9333 22.4505C35.8307 22.4505 35.728 22.4505 35.6222 22.4505C35.6222 22.5541 35.6222 22.6577 35.6222 22.7645C35.5196 22.7645 35.4169 22.7645 35.3111 22.7645C35.3111 22.6609 35.3111 22.5573 35.3111 22.4505C35.0031 22.5023 34.6951 22.5541 34.3778 22.6075C34.3264 22.5039 34.2751 22.4003 34.2222 22.2935C34.3762 22.2935 34.5302 22.2935 34.6889 22.2935C34.7338 22.1931 34.7787 22.0928 34.825 21.9893C35 21.6655 35 21.6655 35.3111 21.5085Z" fill="#1C2C49"/>
<path d="M38.5778 18.0546C38.3724 18.1064 38.1671 18.1582 37.9556 18.2116C37.9556 18.3152 37.9556 18.4188 37.9556 18.5256C37.8016 18.5256 37.6476 18.5256 37.4889 18.5256C37.4793 18.6163 37.4696 18.7069 37.4597 18.8003C37.2824 19.2959 36.97 19.4729 36.5556 19.7816C36.3973 19.9358 36.2404 20.0916 36.0889 20.2526C36.1402 19.9417 36.1916 19.6308 36.2444 19.3106C36.3471 19.3106 36.4498 19.3106 36.5556 19.3106C36.5556 19.207 36.5556 19.1033 36.5556 18.9966C36.7694 18.7415 36.7694 18.7415 37.0222 18.5256C37.1249 18.5256 37.2276 18.5256 37.3333 18.5256C37.3333 18.422 37.3333 18.3184 37.3333 18.2116C37.7547 17.999 38.1126 18.0444 38.5778 18.0546Z" fill="#405982"/>
<path d="M14.3111 7.84983C14.8069 7.80077 14.8069 7.80077 15.4 7.84983C15.8083 8.21288 15.8083 8.21288 16.1778 8.63481C16.3222 8.72224 16.4665 8.80967 16.6153 8.89974C16.7837 9.00174 16.7837 9.00174 16.9556 9.1058C16.9556 9.20942 16.9556 9.31304 16.9556 9.4198C16.1213 9.37839 16.1213 9.37839 15.7111 9.2628C15.4194 8.87031 15.4194 8.87031 15.2444 8.47782C15.1418 8.42601 15.0391 8.3742 14.9333 8.32082C14.9333 8.2172 14.9333 8.11358 14.9333 8.00683C14.728 7.95502 14.5227 7.90321 14.3111 7.84983Z" fill="#4B71A9"/>
<path d="M15.8667 31.5563C15.9693 31.5563 16.072 31.5563 16.1778 31.5563C15.9611 32.0865 15.7387 32.321 15.2542 32.616C15.1469 32.6832 15.0396 32.7504 14.9291 32.8197C14.6222 32.9693 14.6222 32.9693 14.1556 32.9693C14.1556 33.0729 14.1556 33.1765 14.1556 33.2833C13.802 33.518 13.445 33.7204 13.0667 33.9113C13.3137 33.355 13.5598 32.9313 14.1349 32.6909C14.2895 32.6441 14.2895 32.6441 14.4472 32.5964C15.0732 32.3793 15.4172 32.0499 15.8667 31.5563Z" fill="#AABCD3"/>
<path d="M23.0222 24.0205C23.0736 24.0205 23.1249 24.0205 23.1778 24.0205C23.2041 24.3443 23.2299 24.6681 23.2556 24.9919C23.27 25.1722 23.2844 25.3525 23.2993 25.5383C23.3333 26.0614 23.3333 26.0614 23.3187 26.5011C23.2961 26.8796 23.2961 26.8796 23.6444 27.1604C23.4391 27.1604 23.2338 27.1604 23.0222 27.1604C22.9653 26.8893 22.9106 26.6177 22.8569 26.346C22.8109 26.1192 22.8109 26.1192 22.764 25.8879C22.71 25.4237 22.7508 25.0977 22.8667 24.6485C22.8955 24.5287 22.9244 24.4088 22.9542 24.2854C22.9766 24.198 22.9991 24.1106 23.0222 24.0205Z" fill="#DDE9F5"/>
<path d="M21 10.9898C21.308 10.9898 21.616 10.9898 21.9333 10.9898C21.9847 11.7151 22.036 12.4404 22.0889 13.1877C21.7778 12.8737 21.7778 12.8737 21.7583 12.3046C21.7647 12.1298 21.7712 11.9549 21.7778 11.7747C21.4184 11.7747 21.0591 11.7747 20.6889 11.7747C20.7916 11.7229 20.8942 11.6711 21 11.6177C20.9487 11.4623 20.8973 11.3069 20.8444 11.1468C20.8958 11.0949 20.9471 11.0431 21 10.9898Z" fill="#283E56"/>
<path d="M5.75555 36.1092C6.01357 36.63 5.7462 37.1435 5.6 37.6792C5.57573 37.7873 5.55147 37.8953 5.52647 38.0067C5.41481 38.4157 5.20287 38.7366 4.97778 39.0922C4.88055 38.7978 4.88055 38.7978 4.82222 38.4642C4.92489 38.3606 5.02755 38.2569 5.13333 38.1502C5.14005 37.7839 5.13959 37.4175 5.13333 37.0512C5.18194 36.6881 5.18194 36.6881 5.28889 36.4232C5.44289 36.3196 5.59689 36.216 5.75555 36.1092Z" fill="#DDEAF6"/>
<path d="M38.8889 33.5973C39.7247 34.019 40.1382 34.347 40.6 35.1672C40.446 35.3227 40.292 35.4781 40.1333 35.6382C39.8125 35.2752 39.8125 35.2752 39.5111 34.8532C39.5624 34.6978 39.6138 34.5424 39.6667 34.3823C39.5127 34.3823 39.3587 34.3823 39.2 34.3823C38.8889 33.9113 38.8889 33.9113 38.8889 33.5973Z" fill="#272F3C"/>
<path d="M12.4444 33.1263C12.5984 33.2299 12.7524 33.3335 12.9111 33.4403C12.8084 33.6993 12.7058 33.9584 12.6 34.2253C11.8419 34.1541 11.4504 33.957 10.8889 33.4403C11.2996 33.4921 11.7102 33.5439 12.1333 33.5973C12.1333 33.4937 12.1333 33.39 12.1333 33.2833C12.236 33.2315 12.3387 33.1797 12.4444 33.1263Z" fill="#0A1931"/>
<path d="M21 24.0205C21.0513 24.0205 21.1027 24.0205 21.1556 24.0205C21.1317 24.1729 21.1078 24.3253 21.0832 24.4823C20.9872 25.1606 20.9479 25.8387 20.9125 26.5226C20.9058 26.6449 20.8991 26.7673 20.8921 26.8933C20.8758 27.1917 20.8601 27.49 20.8444 27.7884C20.7418 27.7884 20.6391 27.7884 20.5333 27.7884C20.2079 27.0928 20.2079 27.0928 20.2806 26.6404C20.3126 26.5529 20.3447 26.4655 20.3778 26.3754C20.4291 26.479 20.4804 26.5827 20.5333 26.6894C20.5333 26.1195 20.5333 25.5496 20.5333 24.9625C20.636 24.9625 20.7387 24.9625 20.8444 24.9625C20.8958 24.6516 20.9471 24.3408 21 24.0205Z" fill="#071224"/>
<path d="M28.4667 21.8225C28.8458 21.8814 28.8458 21.8814 29.2444 21.9795C29.2958 22.0831 29.3471 22.1868 29.4 22.2935C29.3487 22.3971 29.2973 22.5008 29.2444 22.6075C29.4498 22.6075 29.6551 22.6075 29.8667 22.6075C29.918 22.8147 29.9693 23.022 30.0222 23.2355C29.824 23.1685 29.6264 23.0994 29.4292 23.0294C29.3191 22.9912 29.209 22.9529 29.0956 22.9135C28.7553 22.7539 28.5586 22.5748 28.3111 22.2935C28.3624 22.1381 28.4138 21.9827 28.4667 21.8225Z" fill="#152842"/>
<path d="M24.4222 19.1536C24.5762 19.309 24.7302 19.4644 24.8889 19.6246C24.8014 19.9876 24.8014 19.9876 24.5778 20.4096C23.6736 20.9165 23.6736 20.9165 23.1425 20.8131C23.0515 20.7835 22.9605 20.754 22.8667 20.7235C22.9659 20.6628 23.0652 20.6021 23.1674 20.5396C23.296 20.4578 23.4245 20.376 23.5569 20.2918C23.6851 20.2117 23.8132 20.1315 23.9452 20.049C24.3005 19.7534 24.3686 19.6064 24.4222 19.1536Z" fill="#192438"/>
<path d="M22.4 4.3959C22.5027 4.3959 22.6053 4.3959 22.7111 4.3959C22.9066 4.85214 23.0222 5.14887 23.0222 5.65188C23.1249 5.65188 23.2276 5.65188 23.3333 5.65188C23.3847 5.54826 23.436 5.44464 23.4889 5.33788C23.4022 5.86284 23.2786 6.28506 23.0222 6.75085C23.0222 6.54362 23.0222 6.33638 23.0222 6.12287C22.8682 6.07106 22.7142 6.01925 22.5556 5.96587C22.5042 5.44778 22.4529 4.92969 22.4 4.3959Z" fill="#1C3153"/>
<path d="M21.7778 2.82594C22.2444 2.98293 22.2444 2.98293 22.4 3.29693C22.554 3.34873 22.708 3.40054 22.8667 3.45392C23.2275 4.04733 23.3943 4.48395 23.3333 5.18088C23.0893 4.86737 22.8808 4.58527 22.7208 4.21928C22.5775 3.89667 22.5775 3.89667 22.2347 3.77773C22.1353 3.72268 22.0358 3.66763 21.9333 3.61092C21.8167 3.1988 21.8167 3.1988 21.7778 2.82594Z" fill="#354555"/>
<path d="M34.0667 42.7031C34.9806 42.9974 34.9806 42.9974 35.1556 43.1741C35.6341 43.179 36.1107 43.1633 36.589 43.1489C37.0222 43.1741 37.0222 43.1741 37.3333 43.488C37.1833 43.4976 37.0334 43.5071 36.8788 43.5169C36.6823 43.53 36.4858 43.5432 36.2833 43.5567C36.0884 43.5695 35.8935 43.5822 35.6927 43.5954C35.1796 43.6261 35.1796 43.6261 34.7934 43.7487C34.7076 43.7663 34.6218 43.7839 34.5333 43.802C34.4307 43.6984 34.328 43.5948 34.2222 43.488C34.3249 43.4362 34.4276 43.3844 34.5333 43.3311C34.4178 43.2193 34.4178 43.2193 34.3 43.1054C34.0667 42.8601 34.0667 42.8601 34.0667 42.7031Z" fill="#475565"/>
<path d="M31.5778 32.4983C31.6804 32.4983 31.7831 32.4983 31.8889 32.4983C31.9563 32.644 32.0236 32.7897 32.0931 32.9398C32.3184 33.4287 32.3184 33.4287 32.6181 33.7052C32.6854 33.7732 32.7528 33.8412 32.8222 33.9113C32.8222 34.0667 32.8222 34.2221 32.8222 34.3823C32.3071 34.2926 32.0833 34.1395 31.7333 33.7543C31.6307 33.7025 31.528 33.6506 31.4222 33.5973C31.4222 33.4418 31.4222 33.2864 31.4222 33.1263C31.5249 33.1263 31.6276 33.1263 31.7333 33.1263C31.682 32.919 31.6307 32.7118 31.5778 32.4983Z" fill="#BEDAF6"/>
<path d="M14.3111 32.6553C14.2361 32.7178 14.1611 32.7804 14.0839 32.8448C13.9856 32.928 13.8873 33.0112 13.7861 33.0969C13.6887 33.1788 13.5912 33.2608 13.4908 33.3452C13.1877 33.6102 13.1877 33.6102 12.9111 34.0683C12.8084 34.0165 12.7058 33.9647 12.6 33.9113C12.6 33.704 12.6 33.4968 12.6 33.2833C12.5487 33.1797 12.4973 33.076 12.4444 32.9693C13.0134 32.638 13.6908 32.3423 14.3111 32.6553Z" fill="#55687F"/>
<path d="M31.2667 31.5563C31.9952 32.2717 31.9952 32.2717 32.2875 32.6847C32.5395 33.0054 32.7622 33.1283 33.1333 33.2833C33.1333 33.3869 33.1333 33.4905 33.1333 33.5973C32.7736 33.6365 32.7736 33.6365 32.3556 33.5973C32.0736 33.3127 32.0736 33.3127 31.8889 32.9693C31.8889 32.8139 31.8889 32.6584 31.8889 32.4983C31.7349 32.4465 31.5809 32.3947 31.4222 32.3413C31.3709 32.0823 31.3196 31.8232 31.2667 31.5563Z" fill="#6D8AB1"/>
<path d="M30.1778 28.5734C30.1778 28.8324 30.1778 29.0915 30.1778 29.3584C30.0238 29.3066 29.8698 29.2547 29.7111 29.2014C29.7111 29.0459 29.7111 28.8905 29.7111 28.7304C29.6084 28.7304 29.5058 28.7304 29.4 28.7304C29.4 28.8858 29.4 29.0412 29.4 29.2014C29.1433 29.1496 28.8867 29.0978 28.6222 29.0444C28.6736 29.1998 28.7249 29.3552 28.7778 29.5154C28.6238 29.5931 28.6238 29.5931 28.4667 29.6724C28.364 29.6206 28.2613 29.5687 28.1556 29.5154C28.2236 29.1425 28.2236 29.1425 28.4667 28.7304C29.0196 28.511 29.6284 28.2962 30.1778 28.5734Z" fill="#4A6081"/>
<path d="M39.5111 18.5256C40.0244 18.5256 40.5378 18.5256 41.0667 18.5256C41.118 18.7328 41.1693 18.9401 41.2222 19.1536C41.0618 19.1471 40.9014 19.1406 40.7361 19.134C40.1538 19.1529 39.7386 19.2554 39.2 19.4676C39.1487 19.364 39.0973 19.2603 39.0444 19.1536C39.1471 19.1536 39.2498 19.1536 39.3556 19.1536C39.4069 18.9464 39.4582 18.7391 39.5111 18.5256Z" fill="#DDE8F2"/>
<path d="M38.5778 18.0546C39.4704 18.0226 40.2275 18.012 41.0667 18.3686C41.0667 18.4204 41.0667 18.4722 41.0667 18.5256C40.7653 18.552 40.4639 18.5781 40.1625 18.6041C39.9107 18.626 39.9107 18.626 39.6539 18.6483C39.2414 18.6795 38.8356 18.6826 38.4222 18.6826C38.4736 18.4754 38.5249 18.2681 38.5778 18.0546Z" fill="#BFD3EC"/>
<path d="M22.8667 17.4266C22.918 17.4266 22.9693 17.4266 23.0222 17.4266C23.0511 17.616 23.0511 17.616 23.0806 17.8093C23.1126 17.9421 23.1447 18.0748 23.1778 18.2116C23.2804 18.2634 23.3831 18.3152 23.4889 18.3686C23.5533 18.693 23.5533 18.693 23.5861 19.0849C23.5977 19.2146 23.6094 19.3443 23.6214 19.478C23.629 19.5782 23.6366 19.6784 23.6444 19.7816C23.4391 19.7816 23.2338 19.7816 23.0222 19.7816C23.0286 19.6197 23.0351 19.4578 23.0417 19.291C23.0228 18.7017 22.9014 18.2911 22.7111 17.7406C22.7624 17.637 22.8138 17.5334 22.8667 17.4266Z" fill="#F0F7FB"/>
<path d="M22.5556 5.96587C22.7096 6.01768 22.8636 6.06949 23.0222 6.12287C23.0813 7.09607 22.9966 7.76313 22.5556 8.63482C22.5042 8.63482 22.4529 8.63482 22.4 8.63482C22.4513 7.75406 22.5027 6.87331 22.5556 5.96587Z" fill="#4A6C99"/>
<path d="M31.7333 38.7782C31.8873 38.83 32.0413 38.8818 32.2 38.9351C32.3556 39.9753 32.3556 39.9753 32.3556 40.5051C32.4582 40.6087 32.5609 40.7124 32.6667 40.8191C32.5127 40.8709 32.3587 40.9227 32.2 40.9761C31.8213 40.1958 31.6795 39.6658 31.7333 38.7782Z" fill="#24324F"/>
<path d="M33.6 34.8532C33.754 34.8532 33.908 34.8532 34.0667 34.8532C34.0181 35.1574 34.0181 35.1574 33.9111 35.4812C33.7571 35.533 33.6031 35.5848 33.4444 35.6382C33.4958 36.0009 33.5471 36.3635 33.6 36.7372C33.3947 36.6854 33.1893 36.6336 32.9778 36.5802C32.8518 36.1226 32.7882 35.8798 32.9681 35.4322C33.0226 35.3447 33.0771 35.2573 33.1333 35.1672C33.2873 35.1672 33.4413 35.1672 33.6 35.1672C33.6 35.0636 33.6 34.96 33.6 34.8532Z" fill="#C7DDF4"/>
<path d="M23.6444 31.2423C24.1081 31.3076 24.5226 31.3765 24.9569 31.5563C25.4478 31.7496 25.9229 31.8084 26.4444 31.8703C26.4444 31.9221 26.4444 31.9739 26.4444 32.0273C24.3237 32.0852 24.3237 32.0852 23.3333 31.7133C23.436 31.5579 23.5387 31.4025 23.6444 31.2423Z" fill="#646B7C"/>
<path d="M27.2222 29.9863C27.2222 30.09 27.2222 30.1936 27.2222 30.3003C26.7556 30.6143 26.7556 30.6143 26.2889 30.6143C26.2889 30.7179 26.2889 30.8216 26.2889 30.9283C25.3901 30.9653 24.6535 30.9076 23.8 30.6143C24.384 30.4253 24.9406 30.4418 25.55 30.4475C25.8448 30.4496 25.8448 30.4496 26.1455 30.4518C26.2955 30.4536 26.4455 30.4555 26.6 30.4573C26.6 30.3537 26.6 30.2501 26.6 30.1433C26.9111 29.9863 26.9111 29.9863 27.2222 29.9863Z" fill="#162A49"/>
<path d="M41.3778 23.8635C41.4804 23.8635 41.5831 23.8635 41.6889 23.8635C41.6889 24.1225 41.6889 24.3816 41.6889 24.6485C41.6055 24.6222 41.5221 24.5958 41.4361 24.5687C40.842 24.4445 40.2508 24.5061 39.6472 24.5319C39.1432 24.4863 38.9452 24.361 38.5778 24.0205C38.931 24.0162 39.2842 24.0132 39.6375 24.0107C39.8342 24.0088 40.0309 24.007 40.2336 24.0051C40.7556 24.0205 40.7556 24.0205 41.2222 24.1775C41.2736 24.0739 41.3249 23.9702 41.3778 23.8635Z" fill="#D1E1F0"/>
<path d="M8.4 33.7543C8.67233 33.7723 8.94454 33.7923 9.21667 33.8131C9.36826 33.8241 9.51986 33.835 9.67604 33.8463C10.1048 33.9103 10.3719 33.9884 10.7333 34.2253C11.0833 34.7159 11.0833 34.7159 11.3556 35.1672C11.3042 35.2709 11.2529 35.3745 11.2 35.4812C10.2954 34.7668 10.2954 34.7668 10.1306 34.3626C9.97767 34.0273 9.97767 34.0273 9.5849 33.9726C9.37375 33.9617 9.37375 33.9617 9.15833 33.9505C9.01677 33.9416 8.8752 33.9327 8.72934 33.9235C8.62066 33.9195 8.51198 33.9154 8.4 33.9113C8.4 33.8595 8.4 33.8077 8.4 33.7543Z" fill="#496691"/>
<path d="M35.6222 24.4915C36.0408 24.5192 36.4511 24.5886 36.8667 24.6485C36.8667 24.7521 36.8667 24.8557 36.8667 24.9625C36.9693 24.9625 37.072 24.9625 37.1778 24.9625C37.1778 25.1697 37.1778 25.3769 37.1778 25.5904C37.0238 25.5904 36.8698 25.5904 36.7111 25.5904C36.7111 25.4868 36.7111 25.3832 36.7111 25.2765C36.5635 25.2311 36.4159 25.1858 36.2639 25.1391C35.7778 24.9625 35.7778 24.9625 35.4667 24.6485C35.518 24.5967 35.5693 24.5448 35.6222 24.4915Z" fill="#0F223F"/>
<path d="M33.9111 24.8055C33.5344 25.3758 33.366 25.3834 32.725 25.5414C32.569 25.5808 32.413 25.6203 32.2523 25.661C32.1323 25.6895 32.0124 25.718 31.8889 25.7474C31.7349 25.592 31.5809 25.4366 31.4222 25.2764C31.4736 25.1728 31.5249 25.0692 31.5778 24.9625C31.6901 24.9948 31.8024 25.0272 31.9181 25.0606C32.6187 25.1549 33.1796 24.7633 33.9111 24.8055Z" fill="#5D6978"/>
<path d="M38.5778 17.1126C38.5778 17.2681 38.5778 17.4235 38.5778 17.5836C39.0911 17.5836 39.6044 17.5836 40.1333 17.5836C40.1333 17.6354 40.1333 17.6872 40.1333 17.7406C39.0553 17.7406 37.9773 17.7406 36.8667 17.7406C37.0222 17.4266 37.0222 17.4266 37.4597 17.25C37.9556 17.1126 37.9556 17.1126 38.5778 17.1126Z" fill="#091120"/>
<path d="M22.7111 15.5427C22.8651 15.5945 23.0191 15.6463 23.1778 15.6997C23.3254 16.0241 23.3254 16.0241 23.4403 16.416C23.4794 16.5457 23.5185 16.6754 23.5588 16.8091C23.587 16.9092 23.6153 17.0094 23.6444 17.1126C23.5418 17.1126 23.4391 17.1126 23.3333 17.1126C23.3847 17.3199 23.436 17.5271 23.4889 17.7406C23.0618 17.3684 22.8743 17.0293 22.7111 16.4846C22.6917 15.9646 22.6917 15.9646 22.7111 15.5427Z" fill="#8999A2"/>
<path d="M19.2889 13.1877C20.0339 13.4383 20.3298 14.0776 20.6889 14.7577C20.7967 15.1421 20.8275 15.4546 20.8444 15.8567C20.3206 15.4014 20.2189 14.9359 20.0424 14.2806C19.999 14.179 19.9557 14.0774 19.9111 13.9727C19.7571 13.9209 19.6031 13.8691 19.4444 13.8157C19.3375 13.4919 19.3375 13.4919 19.2889 13.1877Z" fill="#142640"/>
<path d="M14.6222 2.35495C14.6222 2.94952 14.4248 3.2708 14.1556 3.79736C14.0689 3.96796 13.9823 4.13857 13.8931 4.31434C13.8257 4.44488 13.7583 4.57541 13.6889 4.7099C13.5349 4.65809 13.3809 4.60628 13.2222 4.5529C13.4338 3.60396 13.9777 3.04025 14.6222 2.35495Z" fill="#626975"/>
<path d="M40.7556 37.5222C40.8069 37.5222 40.8582 37.5222 40.9111 37.5222C40.9238 37.9475 40.933 38.3724 40.9403 38.7978C40.9461 38.9769 40.9461 38.9769 40.9521 39.1596C40.9621 39.9403 40.8576 40.448 40.4444 41.1331C40.3931 41.1331 40.3418 41.1331 40.2889 41.1331C40.3108 40.9041 40.3337 40.6751 40.3569 40.4462C40.3696 40.3187 40.3822 40.1913 40.3952 40.0599C40.4444 39.7201 40.4444 39.7201 40.6 39.4061C40.6356 39.0863 40.6638 38.7655 40.6875 38.4445C40.7005 38.2725 40.7136 38.1005 40.727 37.9233C40.7364 37.7909 40.7458 37.6586 40.7556 37.5222Z" fill="#718EB5"/>
<path d="M32.0444 38.3072C32.5111 38.4642 32.5111 38.4642 32.6928 38.7377C32.7451 38.8482 32.7975 38.9587 32.8514 39.0725C32.9049 39.1822 32.9585 39.2919 33.0136 39.4049C33.1333 39.7201 33.1333 39.7201 33.1333 40.1911C33.0307 40.1911 32.928 40.1911 32.8222 40.1911C32.8222 40.0875 32.8222 39.9839 32.8222 39.8771C32.6682 39.8771 32.5142 39.8771 32.3556 39.8771C32.1508 39.3088 32.0444 38.9201 32.0444 38.3072Z" fill="#0D1629"/>
<path d="M37.0222 34.2253C37.8783 34.1744 38.4902 34.1416 39.2 34.6962C39.0973 34.7999 38.9947 34.9035 38.8889 35.0102C38.4644 35.0051 38.065 34.9217 37.6444 34.8532C37.6444 34.7496 37.6444 34.646 37.6444 34.5393C37.4391 34.4356 37.2338 34.332 37.0222 34.2253Z" fill="#677DA6"/>
<path d="M7 33.4403C7.462 33.4921 7.924 33.5439 8.4 33.5973C8.4 33.6491 8.4 33.7009 8.4 33.7543C8.27788 33.781 8.15576 33.8077 8.02995 33.8352C7.0634 34.0602 6.27399 34.3014 5.44444 34.8532C5.47786 34.5564 5.47786 34.5564 5.6 34.2253C5.92144 34.0609 5.92144 34.0609 6.30972 33.9505C6.43825 33.9125 6.56679 33.8744 6.69922 33.8352C6.8481 33.7952 6.8481 33.7952 7 33.7543C7 33.6507 7 33.547 7 33.4403Z" fill="#2A3C54"/>
<path d="M20.5333 12.2457C20.5847 12.453 20.636 12.6602 20.6889 12.8737C20.5862 12.8737 20.4836 12.8737 20.3778 12.8737C20.3778 13.34 20.3778 13.8063 20.3778 14.2867C20.0422 13.948 19.9915 13.7971 19.8819 13.3447C19.8541 13.2346 19.8262 13.1245 19.7975 13.0111C19.7556 12.7167 19.7556 12.7167 19.9111 12.4027C20.2319 12.3046 20.2319 12.3046 20.5333 12.2457Z" fill="#7DA2CC"/>
<path d="M14.7778 4.08191C14.9318 4.08191 15.0858 4.08191 15.2444 4.08191C15.2444 4.6 15.2444 5.11809 15.2444 5.65188C15.0904 5.49645 14.9364 5.34102 14.7778 5.18089C14.6238 5.23269 14.4698 5.2845 14.3111 5.33788C14.6028 4.25853 14.6028 4.25853 14.7778 4.08191Z" fill="#C0D1E0"/>
<path d="M42.6222 18.5256C43.144 18.7435 43.4176 18.9787 43.7111 19.4676C43.7111 19.623 43.7111 19.7784 43.7111 19.9386C43.1243 19.854 42.8272 19.6253 42.4667 19.1536C42.5056 18.8003 42.5056 18.8003 42.6222 18.5256Z" fill="#0B0F1C"/>
<path d="M6.22222 40.6621C6.37712 40.7007 6.37712 40.7007 6.53516 40.74C7.09782 40.8358 7.64689 40.8361 8.21528 40.8289C8.32306 40.8282 8.43084 40.8275 8.54188 40.8268C8.80571 40.8249 9.06952 40.8221 9.33333 40.8191C9.128 40.8709 8.92267 40.9227 8.71111 40.9761C8.71111 41.0797 8.71111 41.1833 8.71111 41.2901C7.01564 41.3499 7.01564 41.3499 6.37778 40.9761C6.32644 40.8725 6.27511 40.7689 6.22222 40.6621Z" fill="#A0C0E4"/>
<path d="M33.2889 39.5631C33.4429 39.5631 33.5969 39.5631 33.7556 39.5631C33.9927 40.0314 34.2128 40.4766 34.3778 40.9761C34.7674 41.1674 34.7674 41.1674 35.1556 41.2901C35.1556 41.3937 35.1556 41.4973 35.1556 41.6041C34.7278 41.6041 34.7278 41.6041 34.2222 41.4471C34.0139 41.1344 33.8743 40.8244 33.7337 40.4757C33.6217 40.1617 33.6217 40.1617 33.2889 40.0341C33.2889 39.8787 33.2889 39.7233 33.2889 39.5631Z" fill="#769CCB"/>
<path d="M12.9111 37.0512C13.0651 37.103 13.2191 37.1548 13.3778 37.2082C13.3862 37.5418 13.3922 37.8754 13.3972 38.209C13.4008 38.3948 13.4044 38.5806 13.4082 38.772C13.3778 39.2491 13.3778 39.2491 13.0667 39.5631C13.0667 39.045 13.0667 38.527 13.0667 37.9932C12.964 37.9932 12.8613 37.9932 12.7556 37.9932C12.8069 37.6823 12.8582 37.3715 12.9111 37.0512Z" fill="#0F192E"/>
<path d="M11.2 33.7543C11.508 33.8579 11.816 33.9615 12.1333 34.0683C12.1333 34.2237 12.1333 34.3791 12.1333 34.5393C12.0307 34.5393 11.928 34.5393 11.8222 34.5393C11.8736 34.9019 11.9249 35.2646 11.9778 35.6382C11.4955 35.24 11.3606 34.8238 11.2 34.2253C11.2 34.0698 11.2 33.9144 11.2 33.7543Z" fill="#8999B2"/>
<path d="M29.7111 26.5324C29.9164 26.5842 30.1218 26.636 30.3333 26.6894C30.0996 27.2577 29.8944 27.7464 29.5556 28.2594C29.4529 28.2594 29.3502 28.2594 29.2444 28.2594C29.1931 28.104 29.1418 27.9485 29.0889 27.7884C29.1916 27.7366 29.2942 27.6848 29.4 27.6314C29.5137 27.2681 29.618 26.9016 29.7111 26.5324Z" fill="#C5D2E5"/>
<path d="M38.2667 41.4471C38.5273 41.492 38.7868 41.5441 39.0444 41.6041C38.466 42.1879 37.5774 42.0838 36.7986 42.0849C36.562 42.0824 36.3254 42.0794 36.0889 42.0751C36.4913 41.669 36.7063 41.7074 37.2653 41.6728C37.8146 41.6829 37.8146 41.6829 38.2667 41.4471Z" fill="#6C91C1"/>
<path d="M30.4889 33.7543C30.5916 33.7543 30.6942 33.7543 30.8 33.7543C30.8 33.8579 30.8 33.9615 30.8 34.0683C30.954 34.0683 31.108 34.0683 31.2667 34.0683C31.3084 34.1913 31.3501 34.3144 31.3931 34.4411C31.5542 34.8974 31.5542 34.8974 32.0444 35.1672C31.9181 35.7069 31.9181 35.7069 31.7333 36.2662C31.5793 36.318 31.4253 36.3698 31.2667 36.4232C31.334 36.1512 31.334 36.1512 31.4028 35.8737C31.4651 35.4154 31.4507 35.2187 31.2247 34.8097C30.9885 34.501 30.7408 34.2068 30.4889 33.9113C30.4889 33.8595 30.4889 33.8077 30.4889 33.7543Z" fill="#8091A6"/>
<path d="M36.0889 33.5973C36.7819 33.7527 36.7819 33.7527 37.4889 33.9113C37.1778 34.2253 37.1778 34.2253 36.8004 34.2504C36.6522 34.2453 36.5041 34.2403 36.3514 34.2351C35.7677 34.2166 35.2583 34.2472 34.6889 34.3823C34.7402 34.2786 34.7916 34.175 34.8444 34.0683C35.2564 33.9751 35.6676 33.9518 36.0889 33.9113C36.0889 33.8077 36.0889 33.704 36.0889 33.5973Z" fill="#33476A"/>
<path d="M22.5556 28.5734C22.7096 28.6252 22.8636 28.677 23.0222 28.7304C23.0222 28.834 23.0222 28.9376 23.0222 29.0444C23.2276 29.0962 23.4329 29.148 23.6444 29.2014C23.6444 29.305 23.6444 29.4086 23.6444 29.5154C23.9011 29.5672 24.1578 29.619 24.4222 29.6724C24.4222 29.776 24.4222 29.8796 24.4222 29.9863C23.8702 30.0173 23.474 30.0143 23.0222 29.6724C22.9056 29.2602 22.9056 29.2602 22.8667 28.8874C22.764 28.8874 22.6613 28.8874 22.5556 28.8874C22.5556 28.7838 22.5556 28.6801 22.5556 28.5734Z" fill="#4C75AE"/>
<path d="M19.9111 8.32082C19.2449 8.76907 18.7997 8.81014 18.0153 8.80162C17.7617 8.7995 17.7617 8.7995 17.503 8.79733C17.3737 8.79551 17.2444 8.79369 17.1111 8.79181C17.1111 8.68819 17.1111 8.58457 17.1111 8.47782C18.05 8.36908 18.966 8.30316 19.9111 8.32082Z" fill="#AECCE8"/>
<path d="M15.8667 2.82594C15.9693 2.87774 16.072 2.92955 16.1778 2.98293C16.1264 3.24198 16.0751 3.50102 16.0222 3.76791C15.3292 4.00105 15.3292 4.00105 14.6222 4.2389C14.7932 3.72129 14.9249 3.60359 15.3319 3.26749C15.4316 3.18431 15.5313 3.10113 15.6339 3.01544C15.7491 2.92163 15.7491 2.92163 15.8667 2.82594Z" fill="#AFC0D7"/>
<path d="M21.4667 16.9556C21.6207 17.0333 21.6207 17.0333 21.7778 17.1126C21.8411 17.4771 21.8936 17.8437 21.9333 18.2116C22.036 18.2116 22.1387 18.2116 22.2444 18.2116C22.4752 18.8143 22.5904 19.1633 22.4 19.7816C21.8765 18.8301 21.5268 18.0484 21.4667 16.9556Z" fill="#AEBED7"/>
<path d="M21.4667 27.7884C21.9894 27.9642 22.1963 28.1608 22.5556 28.5734C22.5556 28.677 22.5556 28.7806 22.5556 28.8874C22.6582 28.8874 22.7609 28.8874 22.8667 28.8874C22.918 29.0946 22.9693 29.3018 23.0222 29.5154C22.7111 29.3584 22.4 29.2014 22.0889 29.0444C22.0889 28.9407 22.0889 28.8371 22.0889 28.7304C21.9862 28.7304 21.8836 28.7304 21.7778 28.7304C21.6751 28.4195 21.5724 28.1087 21.4667 27.7884Z" fill="#315482"/>
<path d="M17.1111 32.9693C16.9331 33.0713 16.9331 33.0713 16.7514 33.1753C16.339 33.4131 16.339 33.4131 16.0806 33.7052C15.8667 33.9113 15.8667 33.9113 15.4 33.9113C15.4513 33.6522 15.5027 33.3932 15.5556 33.1263C16.5861 32.7927 16.5861 32.7927 17.1111 32.9693Z" fill="#B9C8E3"/>
<path d="M21.1556 30.3003C21.6248 30.3224 21.9704 30.3464 22.324 30.6775C22.514 30.9109 22.6913 31.1546 22.8667 31.3993C22.3533 31.3475 21.84 31.2957 21.3111 31.2423C21.4138 31.1387 21.5164 31.0351 21.6222 30.9283C21.4682 30.7211 21.3142 30.5139 21.1556 30.3003Z" fill="#9BA5B4"/>
<path d="M21 25.2765C21.0513 25.2765 21.1027 25.2765 21.1556 25.2765C21.1556 25.5355 21.1556 25.7945 21.1556 26.0614C21.3096 26.0614 21.4636 26.0614 21.6222 26.0614C21.5433 26.6453 21.4486 27.1187 21.1556 27.6314C20.9852 27.1156 20.9845 26.7308 20.9903 26.189C20.9917 26.0184 20.9931 25.8478 20.9945 25.672C20.9963 25.5415 20.9981 25.4109 21 25.2765Z" fill="#47689C"/>
<path d="M37.3333 24.3345C37.436 24.3345 37.5387 24.3345 37.6444 24.3345C37.6444 24.4381 37.6444 24.5417 37.6444 24.6485C38.3587 24.9407 38.9206 25.1394 39.6958 25.1293C39.836 25.1279 39.9762 25.1264 40.1206 25.125C40.2809 25.1222 40.2809 25.1222 40.4444 25.1195C40.3931 25.2231 40.3418 25.3267 40.2889 25.4334C39.1453 25.5202 38.3426 25.3566 37.3333 24.8055C37.3333 24.65 37.3333 24.4946 37.3333 24.3345Z" fill="#6892C6"/>
<path d="M25.9778 21.6655C26.0804 21.7173 26.1831 21.7691 26.2889 21.8225C26.2889 21.9261 26.2889 22.0298 26.2889 22.1365C26.3916 22.1883 26.4942 22.2401 26.6 22.2935C25.9327 22.2417 25.2653 22.1899 24.5778 22.1365C25.2667 21.4412 25.2667 21.4412 25.9778 21.6655Z" fill="#97B6D4"/>
<path d="M36.2444 20.8806C36.4875 21.1553 36.4875 21.1553 36.7111 21.5085C36.6625 21.8618 36.6625 21.8618 36.5556 22.1365C36.4016 22.1365 36.2476 22.1365 36.0889 22.1365C36.0376 22.2401 35.9862 22.3438 35.9333 22.4505C35.776 22.0218 35.7707 21.8445 35.9139 21.4006C36.0889 21.0376 36.0889 21.0376 36.2444 20.8806Z" fill="#C1D4EB"/>
<path d="M33.2889 40.6621C33.3402 40.6621 33.3916 40.6621 33.4444 40.6621C33.4573 40.7852 33.4701 40.9082 33.4833 41.035C33.5569 41.4664 33.5569 41.4664 33.9014 41.6433C34.0073 41.6822 34.1131 41.7211 34.2222 41.7611C34.3249 41.8129 34.4276 41.8647 34.5333 41.9181C34.5333 42.0735 34.5333 42.2289 34.5333 42.3891C33.6389 42.0947 33.6389 42.0947 33.2889 41.9181C33.2889 41.5036 33.2889 41.0891 33.2889 40.6621Z" fill="#1F3658"/>
<path d="M32.0444 37.0512C32.1471 37.0512 32.2498 37.0512 32.3556 37.0512C32.4582 37.4139 32.5609 37.7765 32.6667 38.1502C32.7693 38.1502 32.872 38.1502 32.9778 38.1502C32.9778 38.3056 32.9778 38.461 32.9778 38.6212C32.8751 38.6212 32.7724 38.6212 32.6667 38.6212C32.6153 38.7248 32.564 38.8284 32.5111 38.9352C31.9778 37.7913 31.9778 37.7913 32.0444 37.0512Z" fill="#5F7EA6"/>
<path d="M10.2667 35.4812C10.472 35.4812 10.6773 35.4812 10.8889 35.4812C10.9015 35.7591 10.9105 36.0372 10.9181 36.3153C10.9235 36.4701 10.9289 36.6249 10.9345 36.7844C10.8889 37.2082 10.8889 37.2082 10.6537 37.4995C10.5773 37.5588 10.5009 37.6181 10.4222 37.6792C10.424 37.5468 10.4258 37.4145 10.4277 37.2781C10.4291 37.1061 10.4305 36.9341 10.4319 36.7568C10.4337 36.5856 10.4355 36.4144 10.4374 36.238C10.4529 35.8028 10.4529 35.8028 10.2667 35.4812Z" fill="#CCDDF3"/>
<path d="M39.2 34.8532C39.795 35.081 40.0075 35.3842 40.2889 35.9522C40.2889 36.0558 40.2889 36.1595 40.2889 36.2662C40.3916 36.2662 40.4942 36.2662 40.6 36.2662C40.5487 36.4734 40.4973 36.6807 40.4444 36.8942C40.1333 36.7372 40.1333 36.7372 39.9097 36.2073C39.6984 35.7126 39.5772 35.5116 39.2 35.1672C39.2 35.0636 39.2 34.96 39.2 34.8532Z" fill="#6E87A9"/>
<path d="M38.5778 35.3242C39.0153 35.3439 39.0153 35.3439 39.5111 35.4812C39.8028 35.962 39.8028 35.962 39.9778 36.4232C39.7724 36.4232 39.5671 36.4232 39.3556 36.4232C39.3556 36.3196 39.3556 36.216 39.3556 36.1092C39.2561 36.0671 39.1566 36.025 39.0542 35.9817C38.7333 35.7952 38.7333 35.7952 38.5778 35.3242Z" fill="#D3E5F9"/>
<path d="M15.0889 34.3823C14.4983 34.8259 14.1267 35.0992 13.3778 35.0102C13.4291 34.803 13.4804 34.5958 13.5333 34.3823C14.7389 34.2056 14.7389 34.2056 15.0889 34.3823Z" fill="#AFC8E3"/>
<path d="M18.5111 29.9863C18.7164 29.9863 18.9218 29.9863 19.1333 29.9863C19.1333 30.09 19.1333 30.1936 19.1333 30.3003C19.0307 30.3003 18.928 30.3003 18.8222 30.3003C18.7709 30.4558 18.7196 30.6112 18.6667 30.7713C18.6153 30.6677 18.564 30.5641 18.5111 30.4573C18.4084 30.4573 18.3058 30.4573 18.2 30.4573C18.2 30.561 18.2 30.6646 18.2 30.7713C17.9181 30.9381 17.9181 30.9381 17.5778 31.0853C17.4238 31.0335 17.2698 30.9817 17.1111 30.9283C17.2138 30.7729 17.3164 30.6175 17.4222 30.4573C17.9861 30.3494 17.9861 30.3494 18.5111 30.3003C18.5111 30.1967 18.5111 30.0931 18.5111 29.9863Z" fill="#CFDCEA"/>
<path d="M42.1556 25.9044C42.3609 26.0081 42.5662 26.1117 42.7778 26.2184C41.8833 26.8464 41.8833 26.8464 41.5333 26.8464C41.5333 26.691 41.5333 26.5356 41.5333 26.3754C41.1227 26.3754 40.712 26.3754 40.2889 26.3754C40.2889 26.3236 40.2889 26.2718 40.2889 26.2184C40.9049 26.2184 41.5209 26.2184 42.1556 26.2184C42.1556 26.1148 42.1556 26.0112 42.1556 25.9044Z" fill="#343F53"/>
<path d="M16.3333 10.8328C16.5387 10.8846 16.744 10.9364 16.9556 10.9898C16.9556 11.2488 16.9556 11.5078 16.9556 11.7747C16.2992 11.6995 15.8983 11.5916 15.4 11.1468C15.708 11.1468 16.016 11.1468 16.3333 11.1468C16.3333 11.0431 16.3333 10.9395 16.3333 10.8328Z" fill="#444852"/>
<path d="M21.3111 7.22184C21.4651 7.22184 21.6191 7.22184 21.7778 7.22184C21.8291 7.37727 21.8804 7.53269 21.9333 7.69283C21.6767 7.74464 21.42 7.79645 21.1556 7.84983C21.1042 8.00525 21.0529 8.16068 21 8.32082C20.5236 8.50725 20.5236 8.50725 20.0667 8.63481C20.118 8.42757 20.1693 8.22034 20.2222 8.00682C20.3762 8.00682 20.5302 8.00682 20.6889 8.00682C20.6889 7.8514 20.6889 7.69597 20.6889 7.53583C20.8942 7.53583 21.0996 7.53583 21.3111 7.53583C21.3111 7.43222 21.3111 7.3286 21.3111 7.22184Z" fill="#B8CFE9"/>
<path d="M19.6 7.22184C20.062 7.29955 20.062 7.29955 20.5333 7.37884C20.328 7.58607 20.1227 7.79331 19.9111 8.00682C19.8598 7.90321 19.8084 7.79959 19.7556 7.69283C19.6529 7.79645 19.5502 7.90007 19.4444 8.00682C19.1352 8.06925 18.8239 8.12265 18.5111 8.16382C18.5111 8.0602 18.5111 7.95658 18.5111 7.84983C18.8028 7.68302 18.8028 7.68302 19.1333 7.53583C19.236 7.58764 19.3387 7.63945 19.4444 7.69283C19.4958 7.5374 19.5471 7.38198 19.6 7.22184Z" fill="#D8E4EE"/>
<path d="M15.8667 3.76792C16.1002 4.2394 16.0367 4.67704 16.0319 5.20052C16.0305 5.40168 16.0291 5.60284 16.0277 5.8101C16.0259 5.96513 16.0241 6.12015 16.0222 6.27987C15.9709 6.27987 15.9196 6.27987 15.8667 6.27987C15.8474 6.16006 15.8282 6.04025 15.8083 5.91681C15.7296 5.46307 15.7296 5.46307 15.4 5.02389C15.4539 4.48003 15.5607 4.23117 15.8667 3.76792Z" fill="#E4EEF7"/>
<path d="M3.57778 37.3652C3.62911 37.3652 3.68045 37.3652 3.73334 37.3652C3.78467 38.2459 3.836 39.1267 3.88889 40.0341C3.68356 39.9305 3.47823 39.8269 3.26667 39.7201C3.36934 38.943 3.472 38.1659 3.57778 37.3652Z" fill="#070D1C"/>
<path d="M40.2889 36.8942C40.4429 36.946 40.5969 36.9978 40.7556 37.0512C40.7556 37.6729 40.7556 38.2946 40.7556 38.9352C40.7042 38.8315 40.6529 38.7279 40.6 38.6212C40.4973 38.6212 40.3947 38.6212 40.2889 38.6212C40.2889 38.0513 40.2889 37.4814 40.2889 36.8942Z" fill="#A2BEE2"/>
<path d="M18.9778 31.0853C19.1831 31.1371 19.3884 31.1889 19.6 31.2423C19.2576 31.6315 18.9679 31.8094 18.4819 31.9782C18.3707 32.0177 18.2594 32.0572 18.1447 32.0978C18.0603 32.1264 17.9759 32.1549 17.8889 32.1843C17.8376 32.0289 17.7862 31.8735 17.7333 31.7133C18.2137 31.4363 18.3918 31.3993 18.9778 31.3993C18.9778 31.2957 18.9778 31.1921 18.9778 31.0853Z" fill="#C0D2EE"/>
<path d="M19.7556 29.6724C19.8069 30.035 19.8582 30.3977 19.9111 30.7713C19.8084 30.7713 19.7058 30.7713 19.6 30.7713C19.6 30.875 19.6 30.9786 19.6 31.0853C19.3947 31.0335 19.1893 30.9817 18.9778 30.9283C19.0291 30.8765 19.0804 30.8247 19.1333 30.7713C19.1397 30.4574 19.1399 30.1433 19.1333 29.8294C19.4444 29.6724 19.4444 29.6724 19.7556 29.6724Z" fill="#D3E4F8"/>
<path d="M21.3111 27.7884C21.4138 27.8402 21.5164 27.892 21.6222 27.9454C21.5709 28.2044 21.5196 28.4635 21.4667 28.7304C21.364 28.7304 21.2613 28.7304 21.1556 28.7304C21.1556 28.834 21.1556 28.9376 21.1556 29.0444C21.3096 29.0962 21.4636 29.148 21.6222 29.2014C21.4682 29.2014 21.3142 29.2014 21.1556 29.2014C21.1042 29.3568 21.0529 29.5122 21 29.6724C20.9487 29.1543 20.8973 28.6362 20.8444 28.1024C20.9984 27.9988 21.1524 27.8951 21.3111 27.7884Z" fill="#1B2A42"/>
<path d="M43.4 24.6485C43.554 24.6485 43.708 24.6485 43.8667 24.6485C43.6566 25.3422 43.3594 25.6444 42.7778 26.0614C42.6751 25.8542 42.5724 25.647 42.4667 25.4335C42.5918 25.3622 42.7169 25.291 42.8458 25.2176C43.2582 25.0021 43.2582 25.0021 43.4 24.6485Z" fill="#393E48"/>
<path d="M28.1556 22.1365C28.4636 22.3438 28.7716 22.551 29.0889 22.7645C28.7487 22.973 28.548 23.086 28.1458 23.0491C27.8044 22.9045 27.6191 22.7306 27.3778 22.4505C27.6344 22.4505 27.8911 22.4505 28.1556 22.4505C28.1556 22.3469 28.1556 22.2433 28.1556 22.1365Z" fill="#99ADC4"/>
<path d="M26.4444 20.7235C27.475 20.6843 27.475 20.6843 28 21.0375C27.9487 21.1412 27.8973 21.2448 27.8444 21.3515C27.3875 21.4693 27.3875 21.4693 26.9111 21.5085C26.8084 21.4049 26.7058 21.3013 26.6 21.1945C26.7027 21.1945 26.8053 21.1945 26.9111 21.1945C26.9111 21.0909 26.9111 20.9873 26.9111 20.8805C26.7571 20.8287 26.6031 20.7769 26.4444 20.7235Z" fill="#4D6178"/>
<path d="M16.9556 11.7747C17.7769 11.7747 18.5982 11.7747 19.4444 11.7747C19.3418 11.8784 19.2391 11.982 19.1333 12.0887C18.928 12.0887 18.7227 12.0887 18.5111 12.0887C18.5111 12.1924 18.5111 12.296 18.5111 12.4027C17.9978 12.2473 17.4844 12.0919 16.9556 11.9317C16.9556 11.8799 16.9556 11.8281 16.9556 11.7747Z" fill="#969EAB"/>
<path d="M22.0889 10.0478C22.2429 10.0996 22.3969 10.1514 22.5556 10.2048C22.4816 10.3371 22.4816 10.3371 22.4061 10.4722C22.2338 10.8566 22.1838 11.1599 22.1472 11.5785C22.1356 11.704 22.124 11.8294 22.112 11.9587C22.1044 12.0534 22.0967 12.1482 22.0889 12.2457C22.0376 12.2457 21.9862 12.2457 21.9333 12.2457C21.882 11.8831 21.8307 11.5204 21.7778 11.1468C21.6238 11.1468 21.4698 11.1468 21.3111 11.1468C21.3111 10.8328 21.3111 10.8328 21.7 10.4206C21.8283 10.2976 21.9567 10.1746 22.0889 10.0478Z" fill="#9FACBA"/>
<path d="M13.2222 4.5529C13.5236 4.64121 13.5236 4.64121 13.8444 4.8669C13.9863 5.47276 14.0406 5.84279 13.8444 6.43686C13.6904 6.38505 13.5364 6.33324 13.3778 6.27986C13.4259 6.0953 13.4259 6.0953 13.475 5.907C13.4942 5.771 13.5135 5.635 13.5333 5.49488C13.4307 5.39126 13.328 5.28765 13.2222 5.18089C13.2222 4.97365 13.2222 4.76642 13.2222 4.5529Z" fill="#232C41"/>
<path d="M3.26667 39.7201C3.57467 39.8238 3.88267 39.9274 4.2 40.0341C4.2 40.5004 4.2 40.9667 4.2 41.4471C3.59854 40.9412 3.4408 40.4817 3.26667 39.7201Z" fill="#4E4E56"/>
<path d="M35.7778 34.5392C35.8804 34.6429 35.9831 34.7465 36.0889 34.8532C35.7247 35.0809 35.532 35.174 35.0997 35.1292C34.9769 35.0964 34.8542 35.0636 34.7278 35.0299C34.6035 34.9979 34.4791 34.9659 34.351 34.933C34.2103 34.8935 34.2103 34.8935 34.0667 34.8532C34.6995 34.4274 35.0256 34.4911 35.7778 34.5392Z" fill="#C2D8EB"/>
<path d="M9.95556 33.7543C10.325 33.7935 10.325 33.7935 10.7333 33.9113C10.9375 34.2351 10.9375 34.2351 11.0444 34.5393C11.1471 34.5393 11.2498 34.5393 11.3556 34.5393C11.4582 34.7983 11.5609 35.0573 11.6667 35.3242C11.564 35.4279 11.4613 35.5315 11.3556 35.6382C10.7333 34.5785 10.7333 34.5785 10.7333 34.2253C10.3483 34.0698 10.3483 34.0698 9.95556 33.9113C9.95556 33.8595 9.95556 33.8077 9.95556 33.7543Z" fill="#263E68"/>
<path d="M35.3111 22.4505C35.3111 22.5541 35.3111 22.6578 35.3111 22.7645C35.4138 22.7645 35.5164 22.7645 35.6222 22.7645C35.6736 22.6609 35.7249 22.5573 35.7778 22.4505C35.8291 22.8132 35.8804 23.1758 35.9333 23.5495C35.8307 23.3941 35.728 23.2386 35.6222 23.0785C35.4169 23.0785 35.2116 23.0785 35 23.0785C35 23.3375 35 23.5966 35 23.8635C34.9487 23.8635 34.8973 23.8635 34.8444 23.8635C34.7418 23.449 34.6391 23.0345 34.5333 22.6075C35 22.4505 35 22.4505 35.3111 22.4505Z" fill="#53667F"/>
<path d="M38.1111 18.3686C38.2138 18.3686 38.3164 18.3686 38.4222 18.3686C38.4736 18.4204 38.5249 18.4722 38.5778 18.5256C38.5778 18.4738 38.5778 18.422 38.5778 18.3686C39.0672 18.3274 39.2962 18.3297 39.7153 18.6041C39.8452 18.7207 39.8452 18.7207 39.9778 18.8396C39.7724 18.8396 39.5671 18.8396 39.3556 18.8396C39.3556 18.9432 39.3556 19.0468 39.3556 19.1536C39.2529 19.1536 39.1502 19.1536 39.0444 19.1536C39.0444 19.05 39.0444 18.9464 39.0444 18.8396C38.7878 18.8914 38.5311 18.9432 38.2667 18.9966C38.2153 18.7894 38.164 18.5821 38.1111 18.3686Z" fill="#CADDF0"/>
<path d="M34.0667 33.4403C34.118 33.5957 34.1693 33.7511 34.2222 33.9113C35.1462 33.8336 35.1462 33.8336 36.0889 33.7543C36.0889 33.8061 36.0889 33.8579 36.0889 33.9113C35.2223 34.1611 34.5005 34.2577 33.6 34.2253C33.7027 34.1735 33.8053 34.1216 33.9111 34.0683C34.0126 33.7504 34.0126 33.7504 34.0667 33.4403Z" fill="#13274A"/>
<path d="M30.3333 30.1433C30.3847 30.2988 30.436 30.4542 30.4889 30.6143C30.3156 30.6111 30.1424 30.6079 29.9639 30.6045C29.4261 30.5729 29.4261 30.5729 29.0889 30.7713C29.1472 30.4672 29.1472 30.4672 29.2444 30.1433C29.6593 29.934 29.8926 30.038 30.3333 30.1433Z" fill="#7988A1"/>
<path d="M44.3333 22.9215C44.4818 23.2621 44.5113 23.4809 44.3953 23.8359C44.2775 24.1097 44.1504 24.3794 44.0222 24.6485C43.8346 24.2823 43.6854 23.9425 43.5556 23.5495C43.6582 23.3941 43.7609 23.2386 43.8667 23.0785C43.8667 23.2339 43.8667 23.3894 43.8667 23.5495C43.9693 23.4977 44.072 23.4459 44.1778 23.3925C44.2291 23.2371 44.2804 23.0816 44.3333 22.9215Z" fill="#545D68"/>
<path d="M21.4667 19.7816C21.518 19.7816 21.5693 19.7816 21.6222 19.7816C21.7249 20.5587 21.8276 21.3358 21.9333 22.1365C21.728 22.1883 21.5227 22.2401 21.3111 22.2935C21.3624 21.4646 21.4138 20.6356 21.4667 19.7816Z" fill="#ABB9C4"/>
<path d="M23.0222 21.1945C23.0736 21.2982 23.1249 21.4018 23.1778 21.5085C23.2804 21.5603 23.3831 21.6121 23.4889 21.6655C23.0012 21.9572 22.6528 22.0111 22.0889 21.9795C22.1472 21.6753 22.1472 21.6753 22.2444 21.3515C22.5556 21.1945 22.5556 21.1945 23.0222 21.1945Z" fill="#DCEAF6"/>
<path d="M25.9778 20.4096C26.3884 20.4614 26.7991 20.5132 27.2222 20.5666C26.9976 21.1642 26.7012 21.3933 26.1333 21.6655C26.0307 21.6137 25.928 21.5619 25.8222 21.5085C25.9249 21.4049 26.0276 21.3013 26.1333 21.1945C26.0835 20.7859 26.0835 20.7859 25.9778 20.4096Z" fill="#748AA9"/>
<path d="M39.0444 18.8396C39.0444 18.9432 39.0444 19.0468 39.0444 19.1536C38.5145 19.6569 38.0311 19.899 37.3333 20.0956C37.4818 19.9151 37.631 19.7354 37.7806 19.5559C37.8636 19.4557 37.9466 19.3555 38.0321 19.2523C38.3798 18.8732 38.525 18.8396 39.0444 18.8396Z" fill="#E0E8F2"/>
<path d="M21.6222 14.4437C22.0941 14.8277 22.2357 15.0349 22.3806 15.6408C22.387 15.8156 22.3934 15.9905 22.4 16.1706C22.2973 16.2743 22.1947 16.3779 22.0889 16.4846C21.8289 16.0196 21.7269 15.6415 21.6806 15.1109C21.6689 14.9854 21.6573 14.86 21.6453 14.7307C21.6377 14.636 21.6301 14.5413 21.6222 14.4437Z" fill="#F4FAFE"/>
<path d="M20.2222 2.19795C20.3249 2.35338 20.4276 2.5088 20.5333 2.66894C20.0713 2.59123 20.0713 2.59123 19.6 2.51194C19.7027 2.61556 19.8053 2.71918 19.9111 2.82594C19.6544 2.77413 19.3978 2.72232 19.1333 2.66894C19.1333 2.56532 19.1333 2.4617 19.1333 2.35495C18.9793 2.30314 18.8253 2.25133 18.6667 2.19795C19.2517 2.00114 19.624 2.06623 20.2222 2.19795Z" fill="#A4B7D0"/>
<path d="M10.8889 41.7611C11.0942 41.7611 11.2996 41.7611 11.5111 41.7611C11.3167 42.3346 11.2512 42.5116 10.7333 42.8601C10.5793 42.8083 10.4253 42.7565 10.2667 42.7031C10.3693 42.7031 10.472 42.7031 10.5778 42.7031C10.6002 42.5768 10.6227 42.4505 10.6458 42.3204C10.7333 41.9181 10.7333 41.9181 10.8889 41.7611Z" fill="#3B3E41"/>
<path d="M32.5111 36.1092C32.9139 36.5157 32.8804 36.7415 32.9194 37.3063C32.9311 37.4638 32.9427 37.6212 32.9547 37.7834C32.9623 37.9045 32.9699 38.0255 32.9778 38.1502C32.8751 38.1502 32.7724 38.1502 32.6667 38.1502C32.3699 37.6517 32.3305 37.3486 32.4139 36.7765C32.4311 36.651 32.4484 36.5255 32.4661 36.3962C32.481 36.3015 32.4958 36.2068 32.5111 36.1092Z" fill="#7FA2CA"/>
<path d="M9.33334 34.5392C10.3406 34.6352 10.3406 34.6352 10.7236 34.9219C10.8889 35.1672 10.8889 35.1672 10.8889 35.4812C10.6836 35.4812 10.4782 35.4812 10.2667 35.4812C10.2667 35.274 10.2667 35.0668 10.2667 34.8532C9.95867 34.905 9.65067 34.9569 9.33334 35.0102C9.33334 34.8548 9.33334 34.6994 9.33334 34.5392Z" fill="#9CBBDF"/>
<path d="M42.9333 24.6485C42.7841 24.6728 42.7841 24.6728 42.6319 24.6975C42.5261 24.7331 42.4202 24.7688 42.3111 24.8055C42.2598 24.9609 42.2084 25.1163 42.1556 25.2765C41.9481 25.3288 41.7407 25.3811 41.5333 25.4335C41.482 25.5889 41.4307 25.7443 41.3778 25.9044C41.4291 25.5418 41.4804 25.1791 41.5333 24.8055C42.0306 24.6382 42.4134 24.6368 42.9333 24.6485Z" fill="#496593"/>
<path d="M23.0222 22.4505C23.0736 22.6578 23.1249 22.865 23.1778 23.0785C22.7158 23.4671 22.7158 23.4671 22.2444 23.8635C22.1931 23.6562 22.1418 23.449 22.0889 23.2355C22.3969 22.9765 22.7049 22.7174 23.0222 22.4505Z" fill="#8EACD1"/>
<path d="M24.7333 19.3106C24.9114 19.4951 24.9114 19.4951 25.0931 19.6834C25.4969 20.107 25.4969 20.107 25.9778 20.4096C25.8751 20.6168 25.7724 20.824 25.6667 21.0375C25.6667 20.9339 25.6667 20.8303 25.6667 20.7235C25.564 20.7235 25.4613 20.7235 25.3556 20.7235C24.953 20.3985 24.8149 20.1351 24.7333 19.6246C24.7333 19.521 24.7333 19.4173 24.7333 19.3106Z" fill="#9EA7B4"/>
<path d="M37.0222 17.8976C37.2276 17.8976 37.4329 17.8976 37.6444 17.8976C37.6444 18.0012 37.6444 18.1048 37.6444 18.2116C37.5418 18.2116 37.4391 18.2116 37.3333 18.2116C37.3333 18.3152 37.3333 18.4188 37.3333 18.5256C37.2307 18.5256 37.128 18.5256 37.0222 18.5256C36.9709 18.681 36.9196 18.8365 36.8667 18.9966C36.764 18.9966 36.6613 18.9966 36.5556 18.9966C36.5556 19.1002 36.5556 19.2038 36.5556 19.3106C36.4016 19.3624 36.2476 19.4142 36.0889 19.4676C36.0889 19.3122 36.0889 19.1567 36.0889 18.9966C36.2333 18.9432 36.2333 18.9432 36.3806 18.8887C36.8066 18.623 36.8745 18.3698 37.0222 17.8976Z" fill="#0E2343"/>
<path d="M21 11.3038C21 11.4074 21 11.511 21 11.6177C20.8973 11.6177 20.7947 11.6177 20.6889 11.6177C20.6376 11.8768 20.5862 12.1358 20.5333 12.4027C20.3793 12.4027 20.2253 12.4027 20.0667 12.4027C20.0667 12.2991 20.0667 12.1955 20.0667 12.0887C20.1693 12.0369 20.272 11.9851 20.3778 11.9317C20.1211 11.8799 19.8644 11.8281 19.6 11.7747C20.043 11.3277 20.3834 11.3038 21 11.3038Z" fill="#587292"/>
<path d="M23.0222 8.00683C23.0736 8.00683 23.1249 8.00683 23.1778 8.00683C23.2489 8.90431 23.1035 9.33918 22.5556 10.0478C22.4016 9.89236 22.2476 9.73693 22.0889 9.57679C22.2942 9.57679 22.4996 9.57679 22.7111 9.57679C22.6598 9.36956 22.6084 9.16232 22.5556 8.94881C22.7096 8.897 22.8636 8.84519 23.0222 8.79181C23.0222 8.53277 23.0222 8.27372 23.0222 8.00683Z" fill="#454E5E"/>
<path d="M4.04444 39.2491C4.19844 39.301 4.35244 39.3528 4.51111 39.4061C4.56244 39.7688 4.61377 40.1315 4.66666 40.5051C4.76933 40.5051 4.872 40.5051 4.97777 40.5051C4.97777 40.6087 4.97777 40.7124 4.97777 40.8191C5.08044 40.8191 5.18311 40.8191 5.28889 40.8191C5.28889 40.9227 5.28889 41.0263 5.28889 41.1331C4.78318 40.9691 4.57819 40.7263 4.31666 40.2794C4.04444 39.7201 4.04444 39.7201 4.04444 39.2491Z" fill="#253A61"/>
<path d="M10.8889 35.4812C10.9402 35.6885 10.9916 35.8957 11.0444 36.1092C11.1471 36.1092 11.2498 36.1092 11.3556 36.1092C11.4069 36.4719 11.4582 36.8345 11.5111 37.2082C11.4084 37.2082 11.3058 37.2082 11.2 37.2082C11.2 37.1046 11.2 37.001 11.2 36.8942C11.0973 36.8942 10.9947 36.8942 10.8889 36.8942C10.8889 36.4279 10.8889 35.9616 10.8889 35.4812Z" fill="#AFC9EB"/>
<path d="M31.2667 34.3822C31.3693 34.3822 31.472 34.3822 31.5778 34.3822C31.5778 34.4859 31.5778 34.5895 31.5778 34.6962C31.8344 34.6962 32.0911 34.6962 32.3556 34.6962C32.5306 35.285 32.5306 35.285 32.3556 35.6382C32.2016 35.5864 32.0476 35.5346 31.8889 35.4812C31.8889 35.3776 31.8889 35.274 31.8889 35.1672C31.7862 35.0895 31.6836 35.0118 31.5778 34.9317C31.4751 34.854 31.3724 34.7763 31.2667 34.6962C31.2667 34.5926 31.2667 34.489 31.2667 34.3822Z" fill="#162F51"/>
<path d="M32.0444 32.0273C32.4551 32.3382 32.8658 32.649 33.2889 32.9693C33.2376 33.1765 33.1862 33.3838 33.1333 33.5973C33.082 33.4937 33.0307 33.39 32.9778 33.2833C32.8815 33.2412 32.7853 33.1991 32.6861 33.1557C32.2558 32.913 32.115 32.6179 31.8889 32.1843C31.9402 32.1325 31.9916 32.0807 32.0444 32.0273Z" fill="#2C4564"/>
<path d="M30.1778 28.4164C30.3831 28.4164 30.5884 28.4164 30.8 28.4164C30.7595 28.7281 30.719 29.0399 30.6785 29.3516C30.6362 29.6966 30.6362 29.6966 30.6444 30.1433C30.3059 29.6234 30.0908 29.1961 30.0222 28.5734C30.0736 28.5216 30.1249 28.4698 30.1778 28.4164Z" fill="#8B9AB4"/>
<path d="M29.8667 22.6075C30.2997 22.826 30.3301 23.103 30.4889 23.5495C30.3862 23.5495 30.2836 23.5495 30.1778 23.5495C30.1778 23.6531 30.1778 23.7567 30.1778 23.8635C29.6041 23.6705 29.443 23.4021 29.0889 22.9215C29.4739 22.9992 29.4739 22.9992 29.8667 23.0785C29.8667 22.9231 29.8667 22.7676 29.8667 22.6075Z" fill="#43526F"/>
<path d="M25.9778 22.1365C25.7153 22.3818 25.7153 22.3818 25.3556 22.6075C25.0056 22.5585 25.0056 22.5585 24.5778 22.4505C24.1619 22.4349 23.7497 22.4434 23.3333 22.4505C23.3847 22.3469 23.436 22.2433 23.4889 22.1365C23.851 22.066 23.851 22.066 24.3056 22.0286C24.5281 22.0082 24.5281 22.0082 24.7552 21.9875C25.1898 21.9797 25.5567 22.0334 25.9778 22.1365Z" fill="#BDD0E3"/>
<path d="M20.8444 16.1707C20.9984 16.2225 21.1524 16.2743 21.3111 16.3277C21.3624 16.7939 21.4138 17.2602 21.4667 17.7406C21.3127 17.6888 21.1587 17.637 21 17.5836C20.9487 17.1173 20.8973 16.6511 20.8444 16.1707Z" fill="#12192B"/>
<path d="M21.4667 7.84983C21.672 7.90164 21.8773 7.95345 22.0889 8.00683C21.9349 8.00683 21.7809 8.00683 21.6222 8.00683C21.5885 8.15254 21.5885 8.15254 21.5542 8.3012C21.4667 8.63481 21.4667 8.63481 21.3111 8.94881C21.1058 8.94881 20.9004 8.94881 20.6889 8.94881C20.6376 9.05242 20.5862 9.15604 20.5333 9.2628C20.5333 9.10737 20.5333 8.95195 20.5333 8.79181C20.636 8.79181 20.7387 8.79181 20.8444 8.79181C20.8444 8.68819 20.8444 8.58457 20.8444 8.47782C20.9471 8.47782 21.0498 8.47782 21.1556 8.47782C21.1556 8.3742 21.1556 8.27058 21.1556 8.16382C21.2582 8.16382 21.3609 8.16382 21.4667 8.16382C21.4667 8.06021 21.4667 7.95659 21.4667 7.84983Z" fill="#7EA7D9"/>
<path d="M14.6222 7.69283C15.084 7.63735 15.4243 7.60778 15.8253 7.86761C16.0539 8.06256 16.2722 8.26954 16.4889 8.47782C16.4376 8.63324 16.3862 8.78867 16.3333 8.9488C16.0158 8.69511 15.7048 8.43297 15.4 8.16382C15.4 8.0602 15.4 7.95659 15.4 7.84983C15.1433 7.84983 14.8867 7.84983 14.6222 7.84983C14.6222 7.79802 14.6222 7.74621 14.6222 7.69283Z" fill="#749BCD"/>
<path d="M22.4 5.02389C22.4513 5.02389 22.5027 5.02389 22.5556 5.02389C22.5556 5.85283 22.5556 6.68177 22.5556 7.53583C22.4016 7.48402 22.2476 7.43222 22.0889 7.37884C22.0889 7.06798 22.0889 6.75713 22.0889 6.43686C22.1916 6.43686 22.2942 6.43686 22.4 6.43686C22.4 5.97058 22.4 5.5043 22.4 5.02389Z" fill="#7293C1"/>
<path d="M21 2.04095C21.385 2.19638 21.385 2.19638 21.7778 2.35495C21.7264 2.56218 21.6751 2.76942 21.6222 2.98293C21.4169 2.98293 21.2116 2.98293 21 2.98293C21 2.87932 21 2.7757 21 2.66894C20.8973 2.66894 20.7947 2.66894 20.6889 2.66894C20.7916 2.46171 20.8942 2.25447 21 2.04095Z" fill="#0C1625"/>
<path d="M10.4222 40.8191C10.6276 40.8709 10.8329 40.9227 11.0444 40.9761C10.7919 41.2444 10.5322 41.5059 10.2667 41.7611C10.164 41.7611 10.0613 41.7611 9.95556 41.7611C9.95556 41.8647 9.95556 41.9683 9.95556 42.0751C9.75022 42.0751 9.54489 42.0751 9.33334 42.0751C9.33334 41.9715 9.33334 41.8678 9.33334 41.7611C9.55952 41.7028 9.55952 41.7028 9.79028 41.6433C10.0261 41.5462 10.0261 41.5462 10.2667 41.4471C10.4174 41.128 10.4174 41.128 10.4222 40.8191Z" fill="#284776"/>
<path d="M4.2 36.4232C4.44714 36.9221 4.41938 37.45 4.35556 37.9932C4.12223 38.3857 4.12223 38.3857 3.88889 38.6212C3.83149 37.1438 3.83149 37.1438 4.2 36.4232Z" fill="#375885"/>
<path d="M16.1778 33.5973C16.2804 33.6491 16.3831 33.7009 16.4889 33.7543C15.7694 34.6766 15.7694 34.6766 15.2444 34.8532C15.2444 34.646 15.2444 34.4388 15.2444 34.2253C15.7111 33.872 15.7111 33.872 16.1778 33.5973Z" fill="#556176"/>
<path d="M29.5556 30.6143C29.6582 30.6661 29.7609 30.718 29.8667 30.7713C29.8153 30.8749 29.764 30.9786 29.7111 31.0853C29.7624 31.1857 29.8138 31.2861 29.8667 31.3895C30.0222 31.7133 30.0222 31.7133 29.8667 32.1843C29.5458 31.9194 29.5458 31.9194 29.2444 31.5563C29.2911 30.8812 29.2911 30.8812 29.5556 30.6143Z" fill="#C5D6E7"/>
<path d="M27.0667 30.4573C27.0667 30.6128 27.0667 30.7682 27.0667 30.9283C26.9127 30.9283 26.7587 30.9283 26.6 30.9283C26.6 31.0319 26.6 31.1356 26.6 31.2423C26.0353 31.1905 25.4707 31.1387 24.8889 31.0853C24.8889 31.0335 24.8889 30.9817 24.8889 30.9283C25.3509 30.9283 25.8129 30.9283 26.2889 30.9283C26.2889 30.8247 26.2889 30.7211 26.2889 30.6143C26.7556 30.4573 26.7556 30.4573 27.0667 30.4573Z" fill="#0C1731"/>
<path d="M28.7778 28.1024C29.1371 28.206 29.4964 28.3096 29.8667 28.4164C29.8667 28.4682 29.8667 28.52 29.8667 28.5734C29.771 28.5942 29.6754 28.6151 29.5768 28.6365C29.3882 28.6781 29.3882 28.6781 29.1958 28.7206C29.0713 28.7479 28.9468 28.7752 28.8185 28.8034C28.444 28.8872 28.444 28.8872 28 29.0444C28 28.8889 28 28.7335 28 28.5734C28.2567 28.5216 28.5133 28.4698 28.7778 28.4164C28.7778 28.3128 28.7778 28.2091 28.7778 28.1024Z" fill="#A6B6CB"/>
<path d="M19.4444 27.9454C19.5984 27.9972 19.7524 28.049 19.9111 28.1024C19.9111 28.3096 19.9111 28.5169 19.9111 28.7304C19.6031 28.834 19.2951 28.9376 18.9778 29.0444C19.0361 28.5832 19.0361 28.5832 19.1333 28.1024C19.236 28.0506 19.3387 27.9988 19.4444 27.9454Z" fill="#20262E"/>
<path d="M35.3111 20.0956C35.3624 20.0956 35.4138 20.0956 35.4667 20.0956C35.4667 20.4064 35.4667 20.7173 35.4667 21.0375C35.1587 21.1412 34.8507 21.2448 34.5333 21.3515C34.5333 21.0407 34.5333 20.7298 34.5333 20.4096C34.9183 20.4873 34.9183 20.4873 35.3111 20.5666C35.3111 20.4111 35.3111 20.2557 35.3111 20.0956Z" fill="#020C1D"/>
<path d="M19.1333 13.3447C19.5857 13.6931 19.9038 13.9617 20.2222 14.4437C20.1639 14.8656 20.1639 14.8656 20.0667 15.2287C19.7593 14.9185 19.6162 14.6755 19.425 14.2867C19.3701 14.1766 19.3151 14.0665 19.2585 13.9531C19.1333 13.6587 19.1333 13.6587 19.1333 13.3447Z" fill="#99A3B4"/>
<path d="M4.97778 38.9352C5.28578 38.9352 5.59378 38.9352 5.91111 38.9352C6.01378 39.2978 6.11644 39.6605 6.22222 40.0341C5.92083 39.9164 5.92083 39.9164 5.6 39.7201C5.54375 39.512 5.49153 39.3026 5.44444 39.0921C5.29044 39.0403 5.13644 38.9885 4.97778 38.9352Z" fill="#CADEEF"/>
<path d="M32.9778 38.1502C33.1318 38.202 33.2858 38.2538 33.4444 38.3072C33.3931 38.618 33.3418 38.9289 33.2889 39.2492C33.1349 39.301 32.9809 39.3528 32.8222 39.4061C32.7709 39.1471 32.7196 38.8881 32.6667 38.6212C32.7693 38.6212 32.872 38.6212 32.9778 38.6212C32.9778 38.4657 32.9778 38.3103 32.9778 38.1502Z" fill="#8DA8C8"/>
<path d="M7.15556 34.3822C8.23356 34.46 8.23356 34.46 9.33333 34.5392C9.33333 34.6947 9.33333 34.8501 9.33333 35.0102C9.02848 34.966 8.72389 34.9199 8.41944 34.8729C8.16498 34.8346 8.16498 34.8346 7.90538 34.7956C7.46667 34.6962 7.46667 34.6962 7.15556 34.3822Z" fill="#B8D2EF"/>
<path d="M4.82222 34.0683C4.92489 34.1201 5.02755 34.1719 5.13333 34.2253C5.13333 34.6963 5.13333 34.6963 4.92916 34.914C4.68611 35.1031 4.44305 35.2921 4.2 35.4812C4.14866 35.274 4.09733 35.0668 4.04444 34.8533C4.24977 34.8014 4.45511 34.7496 4.66666 34.6963C4.718 34.489 4.76933 34.2818 4.82222 34.0683Z" fill="#010615"/>
<path d="M26.7556 31.0853C27.65 31.2031 27.65 31.2031 28 31.5563C27.2806 31.8899 27.2806 31.8899 26.7556 31.7133C26.7556 31.5061 26.7556 31.2988 26.7556 31.0853Z" fill="#7687A0"/>
<path d="M17.8889 29.3584C17.9916 29.4102 18.0942 29.462 18.2 29.5154C18.123 29.5834 18.046 29.6514 17.9667 29.7214C17.6817 29.9859 17.6817 29.9859 17.7333 30.4573C17.4253 30.561 17.1173 30.6646 16.8 30.7713C17.4444 29.7621 17.4444 29.7621 17.8889 29.3584Z" fill="#6A7280"/>
<path d="M30.3333 29.3584C30.4986 29.6429 30.4986 29.6429 30.6444 29.9864C30.5931 30.1418 30.5418 30.2972 30.4889 30.4573C29.575 29.8686 29.575 29.8686 29.4 29.5154C29.8667 29.3584 29.8667 29.3584 30.3333 29.3584Z" fill="#152037"/>
<path d="M22.7111 27.3174C22.9164 27.3174 23.1218 27.3174 23.3333 27.3174C23.436 27.6801 23.5387 28.0427 23.6444 28.4164C23.5418 28.4164 23.4391 28.4164 23.3333 28.4164C23.3333 28.3128 23.3333 28.2092 23.3333 28.1024C23.1793 28.1024 23.0253 28.1024 22.8667 28.1024C22.8153 27.8434 22.764 27.5843 22.7111 27.3174Z" fill="#BACFE6"/>
<path d="M42.1556 24.1775C42.5149 24.1775 42.8742 24.1775 43.2444 24.1775C43.1418 24.3847 43.0391 24.5919 42.9333 24.8055C42.574 24.8055 42.2147 24.8055 41.8444 24.8055C41.9471 24.5982 42.0498 24.391 42.1556 24.1775Z" fill="#89A4C4"/>
<path d="M44.0222 20.5666C44.3333 20.8806 44.3333 20.8806 44.3637 21.289C44.3601 21.4456 44.3565 21.6023 44.3528 21.7637C44.35 21.9211 44.3472 22.0786 44.3443 22.2408C44.3389 22.4223 44.3389 22.4223 44.3333 22.6075C43.9483 22.2189 43.962 22.0362 43.9153 21.4987C43.9018 21.3577 43.8884 21.2166 43.8746 21.0713C43.872 20.9565 43.8694 20.8418 43.8667 20.7236C43.918 20.6717 43.9693 20.6199 44.0222 20.5666Z" fill="#020917"/>
<path d="M34.2222 20.5666C34.2736 20.5666 34.3249 20.5666 34.3778 20.5666C34.4291 20.9292 34.4804 21.2919 34.5333 21.6655C34.7387 21.6137 34.944 21.5619 35.1556 21.5085C34.9514 21.901 34.9514 21.901 34.6889 22.2935C34.5349 22.2935 34.3809 22.2935 34.2222 22.2935C34.2222 21.7236 34.2222 21.1537 34.2222 20.5666Z" fill="#6F7C8F"/>
<path d="M24.5778 20.2526C24.6291 20.3562 24.6804 20.4598 24.7333 20.5666C24.5793 20.6443 24.5793 20.6443 24.4222 20.7236C24.3709 20.879 24.3196 21.0344 24.2667 21.1945C23.9587 21.2464 23.6507 21.2982 23.3333 21.3515C23.3431 21.067 23.3431 21.067 23.4889 20.7236C24.0431 20.4488 24.0431 20.4488 24.5778 20.2526Z" fill="#9DA8B7"/>
<path d="M21.9333 8.32082C22.0873 8.37262 22.2413 8.42443 22.4 8.47781C22.3213 8.8183 22.2445 9.10575 22.0889 9.41979C21.8836 9.41979 21.6782 9.41979 21.4667 9.41979C21.5148 9.32589 21.5629 9.23198 21.6125 9.13524C21.7937 8.77774 21.7937 8.77774 21.9333 8.32082Z" fill="#2E5181"/>
<path d="M17.4222 2.19796C17.2911 2.26292 17.2911 2.26292 17.1573 2.3292C16.7866 2.51881 16.4239 2.71946 16.0611 2.92406C15.8746 3.0291 15.8746 3.0291 15.6844 3.13626C15.5905 3.18928 15.4967 3.2423 15.4 3.29693C15.4 3.0897 15.4 2.88246 15.4 2.66895C16.7111 2.13067 16.7111 2.13067 17.4222 2.19796Z" fill="#30405C"/>
<path d="M31.2667 36.7372C31.3693 36.7372 31.472 36.7372 31.5778 36.7372C31.6291 37.0999 31.6804 37.4625 31.7333 37.8362C31.836 37.8362 31.9387 37.8362 32.0444 37.8362C32.0444 37.9398 32.0444 38.0434 32.0444 38.1502C31.7431 38.0913 31.7431 38.0913 31.4222 37.9932C31.2115 37.5679 31.2566 37.2067 31.2667 36.7372Z" fill="#010D23"/>
<path d="M40.9111 36.2662C41.0138 36.2662 41.1164 36.2662 41.2222 36.2662C41.5477 36.9618 41.5477 36.9618 41.475 37.4142C41.4429 37.5017 41.4108 37.5891 41.3778 37.6792C41.2751 37.6274 41.1724 37.5756 41.0667 37.5222C40.953 37.1589 40.8487 36.7924 40.7556 36.4232C40.8069 36.3714 40.8582 36.3196 40.9111 36.2662Z" fill="#07122A"/>
<path d="M7.23029 34.0069C7.43874 34.0179 7.43874 34.0179 7.65139 34.029C7.79155 34.0347 7.93172 34.0403 8.07613 34.0462C8.23644 34.0571 8.23644 34.0571 8.4 34.0683C8.4 34.1201 8.4 34.1719 8.4 34.2253C7.72791 34.3977 7.05963 34.5672 6.37778 34.6962C6.73637 34.0854 6.73637 34.0854 7.23029 34.0069Z" fill="#A1C0E6"/>
<path d="M15.0889 33.2833C15.1916 33.2833 15.2942 33.2833 15.4 33.2833C15.3514 33.6561 15.3514 33.6561 15.2444 34.0683C15.0904 34.1719 14.9364 34.2755 14.7778 34.3823C14.6238 34.3304 14.4698 34.2786 14.3111 34.2253C14.4138 34.2253 14.5164 34.2253 14.6222 34.2253C14.6703 34.099 14.7185 33.9727 14.7681 33.8426C14.9333 33.4403 14.9333 33.4403 15.0889 33.2833Z" fill="#DAECF9"/>
<path d="M30.3333 30.6143C30.436 30.6143 30.5387 30.6143 30.6444 30.6143C31.1138 31.1167 31.3443 31.4959 31.4222 32.1843C30.8942 31.6935 30.5501 31.3105 30.3333 30.6143Z" fill="#AFC1D1"/>
<path d="M26.9111 30.3003C27.3731 30.3781 27.3731 30.3781 27.8444 30.4573C27.7418 30.7164 27.6391 30.9754 27.5333 31.2423C27.2253 31.2423 26.9173 31.2423 26.6 31.2423C26.6 31.1387 26.6 31.0351 26.6 30.9283C26.754 30.9283 26.908 30.9283 27.0667 30.9283C27.0153 30.7211 26.964 30.5139 26.9111 30.3003Z" fill="#4C6081"/>
<path d="M31.1111 26.0614C31.1624 26.0614 31.2138 26.0614 31.2667 26.0614C31.2751 26.287 31.2811 26.5128 31.2861 26.7385C31.2897 26.8642 31.2933 26.9898 31.2971 27.1193C31.2667 27.4744 31.2667 27.4744 30.9556 27.9454C30.8016 27.8418 30.6476 27.7382 30.4889 27.6314C30.5916 27.4242 30.6942 27.2169 30.8 27.0034C30.9027 27.0034 31.0053 27.0034 31.1111 27.0034C31.1111 26.6926 31.1111 26.3817 31.1111 26.0614Z" fill="#8191A3"/>
<path d="M34.3778 22.7645C34.5318 22.8163 34.6858 22.8681 34.8444 22.9215C34.8444 23.336 34.8444 23.7504 34.8444 24.1775C34.7418 24.1775 34.6391 24.1775 34.5333 24.1775C34.4771 23.9717 34.4223 23.7656 34.3681 23.5593C34.322 23.3872 34.322 23.3872 34.2751 23.2116C34.2576 23.1159 34.2402 23.0201 34.2222 22.9215C34.2736 22.8697 34.3249 22.8179 34.3778 22.7645Z" fill="#DDEAF4"/>
<path d="M36.7111 21.8225C36.8651 21.8225 37.0191 21.8225 37.1778 21.8225C37.1778 22.0816 37.1778 22.3406 37.1778 22.6075C37.0751 22.6075 36.9724 22.6075 36.8667 22.6075C36.8153 22.7629 36.764 22.9184 36.7111 23.0785C36.7111 22.9231 36.7111 22.7676 36.7111 22.6075C36.6084 22.6075 36.5058 22.6075 36.4 22.6075C36.5027 22.3485 36.6053 22.0894 36.7111 21.8225Z" fill="#F9FBFD"/>
<path d="M35.3111 19.3106C35.4651 19.3106 35.6191 19.3106 35.7778 19.3106C35.8804 19.4142 35.9831 19.5178 36.0889 19.6246C35.9349 20.039 35.7809 20.4535 35.6222 20.8805C35.5709 20.8805 35.5196 20.8805 35.4667 20.8805C35.4153 20.3625 35.364 19.8444 35.3111 19.3106Z" fill="#0D1C39"/>
<path d="M41.0667 18.5256C41.8248 18.5968 42.2163 18.7939 42.7778 19.3106C42.7264 19.466 42.6751 19.6214 42.6222 19.7816C42.5933 19.6844 42.5645 19.5873 42.5347 19.4872C42.2023 18.9913 41.78 18.9829 41.2222 18.8396C41.1709 18.736 41.1196 18.6324 41.0667 18.5256Z" fill="#BCCAD8"/>
<path d="M22.0889 7.53584C22.2429 7.53584 22.3969 7.53584 22.5556 7.53584C22.5042 7.84669 22.4529 8.15754 22.4 8.47781C22.092 8.52962 21.784 8.58143 21.4667 8.63481C21.518 8.42758 21.5693 8.22034 21.6222 8.00683C21.7762 8.00683 21.9302 8.00683 22.0889 8.00683C22.0889 7.8514 22.0889 7.69597 22.0889 7.53584Z" fill="#5C88BD"/>
<path d="M39.2 42.7031C39.1611 42.9974 39.1611 42.9974 39.0444 43.3311C38.7625 43.5371 38.7625 43.5371 38.4222 43.645C38.0722 43.5862 38.0722 43.5862 37.8 43.488C38.8253 42.7031 38.8253 42.7031 39.2 42.7031Z" fill="#363E4B"/>
<path d="M10.7333 40.8191C10.6307 40.8191 10.528 40.8191 10.4222 40.8191C10.3709 40.9745 10.3196 41.13 10.2667 41.2901C9.89722 41.4864 9.89722 41.4864 9.48889 41.6041C9.33489 41.5523 9.18089 41.5005 9.02222 41.4471C9.12489 41.4471 9.22756 41.4471 9.33334 41.4471C9.33334 41.3435 9.33334 41.2399 9.33334 41.1331C10.2083 40.6425 10.2083 40.6425 10.7333 40.8191Z" fill="#537BB7"/>
<path d="M33.1333 40.1911C33.1847 40.1911 33.236 40.1911 33.2889 40.1911C33.2889 40.6574 33.2889 41.1237 33.2889 41.6041C33.0836 41.5005 32.8782 41.3969 32.6667 41.2901C32.6667 41.1347 32.6667 40.9793 32.6667 40.8191C32.7693 40.7673 32.872 40.7155 32.9778 40.6621C33.0291 40.5067 33.0804 40.3513 33.1333 40.1911Z" fill="#091123"/>
<path d="M12.2889 35.1672C12.3916 35.1672 12.4942 35.1672 12.6 35.1672C12.6513 35.3745 12.7027 35.5817 12.7556 35.7952C12.9609 35.847 13.1662 35.8988 13.3778 35.9522C13.2751 36.0558 13.1724 36.1595 13.0667 36.2662C12.7556 36.2368 12.7556 36.2368 12.4444 36.1092C12.3418 35.9538 12.2391 35.7984 12.1333 35.6382C12.1847 35.4828 12.236 35.3274 12.2889 35.1672Z" fill="#4B5566"/>
<path d="M34.8444 34.3822C34.5333 34.6962 34.5333 34.6962 34.0569 34.7747C33.8308 34.8136 33.8308 34.8136 33.6 34.8532C33.5487 34.9569 33.4973 35.0605 33.4444 35.1672C33.4833 34.8729 33.4833 34.8729 33.6 34.5392C34.0534 34.2079 34.3236 34.1945 34.8444 34.3822Z" fill="#6A84AB"/>
<path d="M6.48472 34.7453C6.65476 34.7809 6.8248 34.8165 7 34.8532C6.80555 35.0985 6.80555 35.0985 6.53333 35.3242C6.22222 35.2752 6.22222 35.2752 5.91111 35.1672C5.75711 35.1672 5.60311 35.1672 5.44444 35.1672C5.77222 34.6807 5.8831 34.6938 6.48472 34.7453Z" fill="#BCD2EA"/>
<path d="M6.53333 34.0683C6.636 34.1201 6.73866 34.1719 6.84444 34.2253C6.34885 34.6397 5.86293 35.0267 5.28889 35.3242C5.18622 35.2724 5.08355 35.2206 4.97778 35.1672C5.49111 34.8046 6.00444 34.4419 6.53333 34.0683Z" fill="#8CA9CA"/>
<path d="M18.8222 31.7133C18.9249 31.7651 19.0276 31.8169 19.1333 31.8703C19.0361 32.1745 19.0361 32.1745 18.8222 32.4983C18.3361 32.616 18.3361 32.616 17.8889 32.6553C17.8889 32.5517 17.8889 32.4481 17.8889 32.3413C18.194 32.1232 18.5051 31.9133 18.8222 31.7133Z" fill="#465671"/>
<path d="M29.4875 29.6625C29.6752 29.6674 29.6752 29.6674 29.8667 29.6723C29.1278 30.5751 29.1278 30.5751 28.7778 30.9283C28.9357 29.6761 28.9357 29.6761 29.4875 29.6625Z" fill="#070E26"/>
<path d="M19.9111 28.4164C20.1542 28.7009 20.1542 28.7009 20.3778 29.0444C20.3264 29.1998 20.2751 29.3552 20.2222 29.5154C20.1196 29.4635 20.0169 29.4117 19.9111 29.3584C19.9111 29.2547 19.9111 29.1511 19.9111 29.0444C19.6544 29.0444 19.3978 29.0444 19.1333 29.0444C19.1847 28.9408 19.236 28.8371 19.2889 28.7304C19.4942 28.7304 19.6996 28.7304 19.9111 28.7304C19.9111 28.6268 19.9111 28.5231 19.9111 28.4164Z" fill="#273B58"/>
<path d="M23.1778 28.2594C23.1906 28.3565 23.2034 28.4537 23.2167 28.5538C23.3042 28.9163 23.3042 28.9163 23.6542 29.0836C23.7536 29.1225 23.8531 29.1613 23.9556 29.2014C23.4889 29.2014 23.4889 29.2014 23.0222 29.0444C23.0222 28.9407 23.0222 28.8371 23.0222 28.7304C22.8169 28.6268 22.6116 28.5231 22.4 28.4164C22.7111 28.2594 22.7111 28.2594 23.1778 28.2594Z" fill="#759FD0"/>
<path d="M41.2222 26.5324C41.2222 26.636 41.2222 26.7397 41.2222 26.8464C40.7943 26.9904 40.5441 27.0205 40.1042 27.0132C39.8106 27.0084 39.8106 27.0084 39.5111 27.0034C40.0578 26.4737 40.485 26.4895 41.2222 26.5324Z" fill="#00050C"/>
<path d="M21.6222 24.0205C21.7762 24.0723 21.9302 24.1241 22.0889 24.1775C22.0889 24.4883 22.0889 24.7992 22.0889 25.1195C21.9862 25.1195 21.8836 25.1195 21.7778 25.1195C21.7264 25.2749 21.6751 25.4303 21.6222 25.5904C21.4472 24.5503 21.4472 24.5503 21.6222 24.0205Z" fill="#82A7CF"/>
<path d="M37.1778 24.1775C37.5371 24.1775 37.8964 24.1775 38.2667 24.1775C38.3693 24.3847 38.472 24.5919 38.5778 24.8055C38.1158 24.7277 38.1158 24.7277 37.6444 24.6485C37.6444 24.5448 37.6444 24.4412 37.6444 24.3345C37.4391 24.3863 37.2338 24.4381 37.0222 24.4915C37.0736 24.3879 37.1249 24.2842 37.1778 24.1775Z" fill="#95B3D9"/>
<path d="M41.8444 23.3925C42.3064 23.3925 42.7684 23.3925 43.2444 23.3925C42.8944 23.7163 42.8944 23.7163 42.4667 24.0205C42.1069 23.9812 42.1069 23.9812 41.8444 23.8635C41.8444 23.708 41.8444 23.5526 41.8444 23.3925Z" fill="#D8E7F9"/>
<path d="M33.3958 22.7351C33.6509 22.7496 33.6509 22.7496 33.9111 22.7645C33.9111 22.8681 33.9111 22.9717 33.9111 23.0785C33.3978 23.1303 32.8844 23.1821 32.3556 23.2355C32.8222 22.7645 32.8222 22.7645 33.3958 22.7351Z" fill="#26384D"/>
<path d="M22.5556 22.6075C22.6582 22.6593 22.7609 22.7111 22.8667 22.7645C22.6528 23 22.6528 23 22.4 23.2355C22.2973 23.2355 22.1947 23.2355 22.0889 23.2355C22.0889 23.5464 22.0889 23.8572 22.0889 24.1775C21.9349 24.0739 21.7809 23.9702 21.6222 23.8635C21.8264 23.3238 21.8264 23.3238 22.0889 22.7645C22.2429 22.7127 22.3969 22.6609 22.5556 22.6075Z" fill="#4F6E98"/>
<path d="M20.6889 10.0478C20.9456 10.0478 21.2022 10.0478 21.4667 10.0478C21.4958 10.4206 21.4958 10.4206 21.4667 10.8328C21 11.1468 21 11.1468 20.5333 11.1468C20.5333 10.9913 20.5333 10.8359 20.5333 10.6758C20.7387 10.6758 20.944 10.6758 21.1556 10.6758C21.1556 10.5203 21.1556 10.3649 21.1556 10.2048C21.0016 10.153 20.8476 10.1012 20.6889 10.0478Z" fill="#040D21"/>
<path d="M13.8444 5.96587C13.9984 6.01768 14.1524 6.06949 14.3111 6.12287C14.3111 6.38191 14.3111 6.64096 14.3111 6.90785C14.4138 6.90785 14.5164 6.90785 14.6222 6.90785C14.6222 7.01147 14.6222 7.11509 14.6222 7.22185C14.4169 7.27366 14.2116 7.32546 14 7.37884C13.9487 6.91256 13.8973 6.44628 13.8444 5.96587Z" fill="#3E608F"/>
<path d="M19.2889 1.25597C20.1504 1.35259 20.1504 1.35259 20.5139 1.65828C20.6005 1.76999 20.6005 1.76999 20.6889 1.88396C20.4322 1.93577 20.1756 1.98758 19.9111 2.04096C19.9111 1.93734 19.9111 1.83372 19.9111 1.72696C19.6544 1.67515 19.3978 1.62335 19.1333 1.56997C19.1847 1.46635 19.236 1.36273 19.2889 1.25597Z" fill="#040913"/>
<path d="M4.35555 41.1331C4.74055 41.2885 4.74055 41.2885 5.13333 41.4471C5.13333 41.7061 5.13333 41.9652 5.13333 42.2321C4.64159 42.017 4.51224 41.9198 4.2 41.4471C4.25133 41.3435 4.30266 41.2399 4.35555 41.1331Z" fill="#33373D"/>
<path d="M40.7556 40.5051C40.8069 40.5051 40.8582 40.5051 40.9111 40.5051C40.9111 40.816 40.9111 41.1268 40.9111 41.4471C40.5518 41.5507 40.1924 41.6543 39.8222 41.7611C39.9739 41.5513 40.1264 41.3421 40.2792 41.1331C40.4064 40.9583 40.4064 40.9583 40.5362 40.7799C40.6086 40.6892 40.681 40.5985 40.7556 40.5051Z" fill="#0F1C35"/>
<path d="M35.1556 40.6621C35.8742 40.8175 36.5929 40.973 37.3333 41.1331C37.3333 41.1849 37.3333 41.2367 37.3333 41.2901C37.0873 41.3072 36.8409 41.3193 36.5944 41.3293C36.4573 41.3366 36.3201 41.3439 36.1788 41.3514C35.7778 41.2901 35.7778 41.2901 35.1556 40.6621Z" fill="#C6D9EA"/>
<path d="M12.1333 39.5631C12.236 39.5631 12.3387 39.5631 12.4444 39.5631C12.3902 40.0742 12.2856 40.1941 11.8903 40.5444C11.7652 40.635 11.64 40.7257 11.5111 40.8191C11.5111 40.6119 11.5111 40.4046 11.5111 40.1911C11.6138 40.1911 11.7164 40.1911 11.8222 40.1911C11.8222 40.0875 11.8222 39.9839 11.8222 39.8771C11.9249 39.8771 12.0276 39.8771 12.1333 39.8771C12.1333 39.7735 12.1333 39.6699 12.1333 39.5631Z" fill="#5D82AC"/>
<path d="M31.8889 34.2253C32.4279 34.4584 32.4279 34.4584 32.9778 34.6962C32.9778 34.7999 32.9778 34.9035 32.9778 35.0102C32.7211 35.1139 32.4644 35.2175 32.2 35.3242C32.2513 35.1688 32.3027 35.0134 32.3556 34.8532C32.1502 34.7496 31.9449 34.646 31.7333 34.5392C31.7847 34.4356 31.836 34.332 31.8889 34.2253Z" fill="#4E6990"/>
<path d="M4.66666 33.9113C4.718 34.0149 4.76933 34.1185 4.82222 34.2252C4.77089 34.3807 4.71955 34.5361 4.66666 34.6962C4.51266 34.748 4.35866 34.7999 4.2 34.8532C4.14866 35.0087 4.09733 35.1641 4.04444 35.3242C3.89044 35.376 3.73644 35.4278 3.57777 35.4812C3.79458 34.785 4.13868 34.4021 4.66666 33.9113Z" fill="#575B65"/>
<path d="M22.0889 30.6143C22.9833 30.7321 22.9833 30.7321 23.3333 31.0853C23.3333 31.2408 23.3333 31.3962 23.3333 31.5563C22.8097 31.3298 22.4762 31.0331 22.0889 30.6143Z" fill="#323F4A"/>
<path d="M19.4833 29.1621C19.6951 29.1815 19.6951 29.1815 19.9111 29.2014C19.9624 29.305 20.0138 29.4086 20.0667 29.5154C19.502 29.619 18.9373 29.7226 18.3556 29.8293C18.7306 29.3635 18.8762 29.2092 19.4833 29.1621Z" fill="#859FC3"/>
<path d="M20.8444 27.1604C20.9471 27.1604 21.0498 27.1604 21.1556 27.1604C21.2625 27.5137 21.2625 27.5137 21.3111 27.9454C21.0875 28.3085 21.0875 28.3085 20.8444 28.5734C20.7418 28.3143 20.6391 28.0553 20.5333 27.7884C20.636 27.7884 20.7387 27.7884 20.8444 27.7884C20.8444 27.5812 20.8444 27.3739 20.8444 27.1604Z" fill="#0B1B38"/>
<path d="M42.1556 25.1194C42.318 25.6114 42.3009 25.7458 42.1556 26.2184C42.0529 26.2184 41.9502 26.2184 41.8444 26.2184C41.8444 26.1148 41.8444 26.0112 41.8444 25.9044C41.7418 25.9044 41.6391 25.9044 41.5333 25.9044C41.5333 25.749 41.5333 25.5936 41.5333 25.4334C41.7387 25.3298 41.944 25.2262 42.1556 25.1194Z" fill="#152D4D"/>
<path d="M23.3333 23.0785C23.3847 23.2857 23.436 23.493 23.4889 23.7065C23.3862 23.7065 23.2836 23.7065 23.1778 23.7065C23.0238 24.2505 23.0238 24.2505 22.8667 24.8055C22.8153 24.8055 22.764 24.8055 22.7111 24.8055C22.623 24.0496 22.8938 23.6746 23.3333 23.0785Z" fill="#D3E2ED"/>
<path d="M27.2222 21.8225C27.6842 21.9002 27.6842 21.9002 28.1556 21.9795C28.1556 22.1349 28.1556 22.2904 28.1556 22.4505C27.7449 22.3987 27.3342 22.3469 26.9111 22.2935C27.0138 22.2417 27.1164 22.1899 27.2222 22.1365C27.2222 22.0329 27.2222 21.9293 27.2222 21.8225Z" fill="#AEC8E3"/>
<path d="M14.1556 8.16382C14.3096 8.16382 14.4636 8.16382 14.6222 8.16382C14.7249 8.42286 14.8276 8.68191 14.9333 8.9488C14.6319 9.03711 14.6319 9.03711 14.3111 9.1058C14.1556 8.9488 14.1556 8.9488 14.1458 8.5465C14.149 8.42021 14.1523 8.29393 14.1556 8.16382Z" fill="#0F2039"/>
<path d="M36.8667 42.7031C37.1747 42.7031 37.4827 42.7031 37.8 42.7031C37.646 42.9362 37.646 42.9362 37.4889 43.1741C37.5402 43.2777 37.5916 43.3813 37.6444 43.488C37.2594 43.3326 37.2594 43.3326 36.8667 43.1741C36.8667 43.0186 36.8667 42.8632 36.8667 42.7031Z" fill="#192542"/>
<path d="M5.44444 41.7611C5.77987 42.0996 5.98546 42.4473 6.22222 42.8601C5.90793 42.7656 5.59671 42.6602 5.28889 42.5461C5.23755 42.4425 5.18622 42.3388 5.13333 42.2321C5.236 42.0767 5.33866 41.9212 5.44444 41.7611Z" fill="#2F3038"/>
<path d="M12.2889 36.8942C12.4429 36.946 12.5969 36.9978 12.7556 37.0512C12.7556 37.362 12.7556 37.6729 12.7556 37.9932C12.6016 37.9932 12.4476 37.9932 12.2889 37.9932C12.2889 37.6305 12.2889 37.2678 12.2889 36.8942Z" fill="#456594"/>
<path d="M33.6 34.8532C33.754 34.8532 33.908 34.8532 34.0667 34.8532C34.0153 35.0605 33.964 35.2677 33.9111 35.4812C33.7058 35.4812 33.5004 35.4812 33.2889 35.4812C33.2889 35.5848 33.2889 35.6885 33.2889 35.7952C33.1862 35.7952 33.0836 35.7952 32.9778 35.7952C33.0291 35.588 33.0804 35.3807 33.1333 35.1672C33.2873 35.1672 33.4413 35.1672 33.6 35.1672C33.6 35.0636 33.6 34.96 33.6 34.8532Z" fill="#B0CAE0"/>
<path d="M27.2222 29.6724C27.2222 29.7242 27.2222 29.776 27.2222 29.8293C26.498 29.9609 25.9201 29.9889 25.2 29.8293C25.2 29.7775 25.2 29.7257 25.2 29.6724C25.9201 29.5128 26.498 29.5408 27.2222 29.6724Z" fill="#759BC9"/>
<path d="M21.6222 28.4164C21.6736 28.52 21.7249 28.6236 21.7778 28.7304C21.8804 28.7304 21.9831 28.7304 22.0889 28.7304C22.0889 28.834 22.0889 28.9376 22.0889 29.0444C22.1883 29.0832 22.2878 29.1221 22.3903 29.1621C22.7111 29.3584 22.7111 29.3584 22.8278 29.692C22.8406 29.7891 22.8534 29.8863 22.8667 29.9863C22.8153 29.8827 22.764 29.7791 22.7111 29.6724C22.5571 29.6724 22.4031 29.6724 22.2444 29.6724C22.2444 29.5169 22.2444 29.3615 22.2444 29.2014C22.1418 29.2014 22.0391 29.2014 21.9333 29.2014C21.9333 29.0977 21.9333 28.9941 21.9333 28.8874C21.8307 28.8874 21.728 28.8874 21.6222 28.8874C21.6222 28.7319 21.6222 28.5765 21.6222 28.4164Z" fill="#172E4E"/>
<path d="M21.7778 25.5904C21.9318 25.7459 22.0858 25.9013 22.2444 26.0614C22.1958 26.5619 22.1958 26.5619 22.0889 27.0034C21.9349 27.0034 21.7809 27.0034 21.6222 27.0034C21.6736 26.5371 21.7249 26.0708 21.7778 25.5904Z" fill="#7EA7D1"/>
<path d="M36.4 24.4915C36.8375 24.4424 36.8375 24.4424 37.3333 24.4915C37.6153 24.8643 37.6153 24.8643 37.8 25.2764C37.8513 25.3801 37.9027 25.4837 37.9556 25.5904C37.5677 25.4014 37.2273 25.2051 36.8667 24.9625C36.8667 24.8588 36.8667 24.7552 36.8667 24.6485C36.7127 24.5966 36.5587 24.5448 36.4 24.4915Z" fill="#35507F"/>
<path d="M29.8667 24.1775C29.9693 24.1775 30.072 24.1775 30.1778 24.1775C30.4001 24.5471 30.5024 24.7239 30.4306 25.1587C30.3985 25.2494 30.3664 25.34 30.3333 25.4334C30.1 25.247 30.1 25.247 29.8667 24.9625C29.8375 24.5405 29.8375 24.5405 29.8667 24.1775Z" fill="#DEEAF3"/>
<path d="M32.0444 23.8635C32.0958 23.9671 32.1471 24.0707 32.2 24.1775C32.046 24.1775 31.892 24.1775 31.7333 24.1775C31.7333 24.3329 31.7333 24.4883 31.7333 24.6485C31.9387 24.7521 32.144 24.8557 32.3556 24.9625C32.0989 24.9625 31.8422 24.9625 31.5778 24.9625C31.5264 24.7034 31.4751 24.4444 31.4222 24.1775C31.6276 24.0739 31.8329 23.9702 32.0444 23.8635Z" fill="#F2FBFD"/>
<path d="M35 23.0785C35.154 23.1303 35.308 23.1821 35.4667 23.2355C35.4667 23.4945 35.4667 23.7536 35.4667 24.0205C35.2613 24.0723 35.056 24.1241 34.8444 24.1775C34.8958 23.8148 34.9471 23.4521 35 23.0785Z" fill="#22354C"/>
<path d="M35.3111 22.9215C35.4651 22.9733 35.6191 23.0251 35.7778 23.0785C35.7778 23.493 35.7778 23.9074 35.7778 24.3345C35.6238 24.4122 35.6238 24.4122 35.4667 24.4915C35.4153 23.9734 35.364 23.4553 35.3111 22.9215Z" fill="#AFC4E0"/>
<path d="M23.4889 23.0785C23.7456 23.0785 24.0022 23.0785 24.2667 23.0785C24.0959 23.5484 24.0058 23.6823 23.5472 23.9027C23.4253 23.9416 23.3034 23.9804 23.1778 24.0205C23.1778 23.9169 23.1778 23.8132 23.1778 23.7065C23.2804 23.7065 23.3831 23.7065 23.4889 23.7065C23.4889 23.4992 23.4889 23.292 23.4889 23.0785Z" fill="#E9ECEF"/>
<path d="M25.6667 20.4096C25.872 20.5132 26.0773 20.6168 26.2889 20.7236C26.2889 20.9308 26.2889 21.138 26.2889 21.3515C26.0836 21.4033 25.8782 21.4552 25.6667 21.5085C25.6153 21.3531 25.564 21.1977 25.5111 21.0375C25.6138 21.0375 25.7164 21.0375 25.8222 21.0375C25.7709 20.8303 25.7196 20.6231 25.6667 20.4096Z" fill="#2B4060"/>
<path d="M20.6889 11.7747C21.0482 11.7747 21.4076 11.7747 21.7778 11.7747C21.7264 11.982 21.6751 12.1892 21.6222 12.4027C21.4169 12.4027 21.2116 12.4027 21 12.4027C21 12.2473 21 12.0919 21 11.9317C20.8973 11.8799 20.7947 11.8281 20.6889 11.7747Z" fill="#8CA8C7"/>
<path d="M21.1556 4.23891C21.2582 4.23891 21.3609 4.23891 21.4667 4.23891C21.4667 4.34252 21.4667 4.44614 21.4667 4.5529C21.5693 4.5529 21.672 4.5529 21.7778 4.5529C21.7264 4.96737 21.6751 5.38184 21.6222 5.80887C21.5196 5.80887 21.4169 5.80887 21.3111 5.80887C21.2598 5.29078 21.2084 4.7727 21.1556 4.23891Z" fill="#E1EBF8"/>
<path d="M14.1556 4.3959C14.2582 4.44771 14.3609 4.49952 14.4667 4.5529C14.3771 4.92744 14.2765 5.28558 14.1556 5.65188C14.0529 5.65188 13.9502 5.65188 13.8444 5.65188C13.9806 4.57253 13.9806 4.57253 14.1556 4.3959Z" fill="#131C2C"/>
<path d="M21.7778 2.82594C22.3065 3.00382 22.4082 3.15958 22.7111 3.61092C22.6598 3.71454 22.6084 3.81815 22.5556 3.92491C22.2542 3.81698 22.2542 3.81698 21.9333 3.61092C21.8167 3.1988 21.8167 3.1988 21.7778 2.82594Z" fill="#0A172E"/>
<path d="M37.6444 42.8601C38.1111 43.0171 38.1111 43.0171 38.2667 43.3311C37.9556 43.6451 37.9556 43.6451 37.4694 43.6647C37.2481 43.655 37.2481 43.655 37.0222 43.6451C37.1762 43.5414 37.3302 43.4378 37.4889 43.3311C37.4376 43.2274 37.3862 43.1238 37.3333 43.0171C37.436 42.9653 37.5387 42.9135 37.6444 42.8601Z" fill="#0A1428"/>
<path d="M14.6222 32.8123C14.6222 33.0739 14.6222 33.3356 14.6222 33.5973C14.2074 33.5973 13.7926 33.5973 13.3778 33.5973C13.4804 33.4937 13.5831 33.39 13.6889 33.2833C13.8429 33.2833 13.9969 33.2833 14.1556 33.2833C14.1556 33.1797 14.1556 33.076 14.1556 32.9693C14.3096 32.9175 14.4636 32.8657 14.6222 32.8123Z" fill="#D6E2F3"/>
<path d="M21.7778 27.1604C21.9318 27.2122 22.0858 27.264 22.2444 27.3174C22.2444 27.6801 22.2444 28.0427 22.2444 28.4164C22.1771 28.3452 22.1097 28.2739 22.0403 28.2005C21.761 27.914 21.761 27.914 21.3111 27.6314C21.4651 27.6314 21.6191 27.6314 21.7778 27.6314C21.7778 27.476 21.7778 27.3206 21.7778 27.1604Z" fill="#587FAC"/>
<path d="M30.4889 25.4334C30.5402 25.4334 30.5916 25.4334 30.6444 25.4334C30.6444 26.0033 30.6444 26.5732 30.6444 27.1604C30.4391 27.2122 30.2338 27.264 30.0222 27.3174C30.0703 27.2397 30.1185 27.162 30.1681 27.0819C30.3981 26.5356 30.4304 26.0237 30.4889 25.4334Z" fill="#596E87"/>
<path d="M30.6444 26.0614C30.7984 26.0614 30.9524 26.0614 31.1111 26.0614C31.1111 26.3723 31.1111 26.6831 31.1111 27.0034C30.9571 27.0552 30.8031 27.107 30.6444 27.1604C30.6444 26.7977 30.6444 26.4351 30.6444 26.0614Z" fill="#1D3249"/>
<path d="M24.2667 20.8806C24.3565 20.9065 24.4463 20.9324 24.5389 20.9591C24.9304 21.0603 24.9304 21.0603 25.5111 21.0376C25.144 21.3669 24.9595 21.5037 24.4611 21.538C24.2879 21.5234 24.2879 21.5234 24.1111 21.5085C24.0598 21.4049 24.0084 21.3013 23.9556 21.1945C24.0582 21.1945 24.1609 21.1945 24.2667 21.1945C24.2667 21.0909 24.2667 20.9873 24.2667 20.8806Z" fill="#B3C5D9"/>
<path d="M22.5556 19.3106C22.7096 19.3106 22.8636 19.3106 23.0222 19.3106C23.0222 19.466 23.0222 19.6214 23.0222 19.7816C23.2276 19.7816 23.4329 19.7816 23.6444 19.7816C23.6444 19.8852 23.6444 19.9888 23.6444 20.0956C23.4391 20.1474 23.2338 20.1992 23.0222 20.2526C23.0222 20.1489 23.0222 20.0453 23.0222 19.9386C22.8682 19.8868 22.7142 19.8349 22.5556 19.7816C22.5556 19.6261 22.5556 19.4707 22.5556 19.3106Z" fill="#DEEAF6"/>
<path d="M21.9333 18.8396C22.036 18.8914 22.1387 18.9432 22.2444 18.9966C22.4408 19.6992 22.4408 19.6992 22.2444 20.0956C22.0904 20.0956 21.9364 20.0956 21.7778 20.0956C21.7778 19.9919 21.7778 19.8883 21.7778 19.7816C21.6751 19.7816 21.5724 19.7816 21.4667 19.7816C21.518 19.6779 21.5693 19.5743 21.6222 19.4676C21.7762 19.5194 21.9302 19.5712 22.0889 19.6246C22.0376 19.3655 21.9862 19.1065 21.9333 18.8396Z" fill="#6D85A3"/>
<path d="M20.0667 14.9147C20.3324 15.1712 20.5231 15.3651 20.6889 15.6997C20.6951 16.0136 20.6956 16.3277 20.6889 16.6416C20.0667 15.6997 20.0667 15.6997 20.0667 14.9147Z" fill="#757F8B"/>
<path d="M19.2889 12.2457C19.3402 12.3493 19.3916 12.453 19.4444 12.5597C19.3931 12.7151 19.3418 12.8706 19.2889 13.0307C19.3916 13.0825 19.4942 13.1343 19.6 13.1877C19.3947 13.2395 19.1893 13.2913 18.9778 13.3447C18.8751 13.0857 18.7724 12.8266 18.6667 12.5597C18.7693 12.5597 18.872 12.5597 18.9778 12.5597C19.0804 12.4561 19.1831 12.3525 19.2889 12.2457Z" fill="#4A5869"/>
<path d="M15.8667 8.63481C15.9597 8.68338 16.0528 8.73195 16.1486 8.782C16.5028 8.96483 16.5028 8.96483 16.9556 9.1058C16.9556 9.20942 16.9556 9.31304 16.9556 9.41979C16.5962 9.36799 16.2369 9.31618 15.8667 9.2628C15.8667 9.05556 15.8667 8.84833 15.8667 8.63481Z" fill="#587EB7"/>
<path d="M11.9778 40.5051C12.0291 40.5051 12.0804 40.5051 12.1333 40.5051C12.1625 40.9565 12.1625 40.9565 12.1333 41.4471C11.9793 41.5507 11.8253 41.6543 11.6667 41.7611C11.5597 41.4864 11.5597 41.4864 11.5111 41.1331C11.725 40.7799 11.725 40.7799 11.9778 40.5051Z" fill="#030916"/>
<path d="M33.4444 40.0341C33.9507 40.4791 34.1477 40.7698 34.2222 41.4471C33.9208 41.3588 33.9208 41.3588 33.6 41.1331C33.4833 40.564 33.4833 40.564 33.4444 40.0341Z" fill="#587EAE"/>
<path d="M39.0444 40.5051C39.0958 40.7124 39.1471 40.9196 39.2 41.1331C38.9947 41.1849 38.7893 41.2367 38.5778 41.2901C38.5778 41.1865 38.5778 41.0829 38.5778 40.9761C38.4751 40.9243 38.3724 40.8725 38.2667 40.8191C38.5233 40.7155 38.78 40.6119 39.0444 40.5051Z" fill="#D5E3FA"/>
<path d="M40.2889 39.4061C40.3916 39.4061 40.4942 39.4061 40.6 39.4061C40.4973 39.8206 40.3947 40.2351 40.2889 40.6621C40.1349 40.6621 39.9809 40.6621 39.8222 40.6621C39.8944 40.5261 39.8944 40.5261 39.9681 40.3874C40.1218 40.0588 40.2137 39.7601 40.2889 39.4061Z" fill="#99B8DB"/>
<path d="M33.6 38.1502C33.7027 38.3056 33.8053 38.461 33.9111 38.6212C33.6972 39.0137 33.6972 39.0137 33.4444 39.4061C33.3418 39.4061 33.2391 39.4061 33.1333 39.4061C33.082 39.5098 33.0307 39.6134 32.9778 39.7201C32.9778 39.5647 32.9778 39.4093 32.9778 39.2492C33.0804 39.2492 33.1831 39.2492 33.2889 39.2492C33.3114 39.1261 33.3338 39.0031 33.3569 38.8763C33.4444 38.4642 33.4444 38.4642 33.6 38.1502Z" fill="#ACC6E2"/>
<path d="M11.8222 36.8942C11.9762 36.946 12.1302 36.9978 12.2889 37.0512C12.2889 37.4657 12.2889 37.8801 12.2889 38.3072C11.8592 37.8735 11.8878 37.4897 11.8222 36.8942Z" fill="#759DCF"/>
<path d="M31.7333 35.4812C31.9387 35.4812 32.144 35.4812 32.3556 35.4812C32.1611 36.0548 32.0956 36.2318 31.5778 36.5802C31.6291 36.2175 31.6804 35.8549 31.7333 35.4812Z" fill="#041025"/>
<path d="M30.1778 32.4983C30.5371 32.5501 30.8964 32.6019 31.2667 32.6553C31.2667 32.8107 31.2667 32.9661 31.2667 33.1263C31.1127 33.1263 30.9587 33.1263 30.8 33.1263C30.8 33.0227 30.8 32.919 30.8 32.8123C30.5947 32.7605 30.3893 32.7087 30.1778 32.6553C30.1778 32.6035 30.1778 32.5517 30.1778 32.4983Z" fill="#C6D9E9"/>
<path d="M27.5333 29.2014C27.6873 29.2532 27.8413 29.305 28 29.3584C27.7278 30.1237 27.7278 30.1237 27.3778 30.3003C27.3264 29.9895 27.2751 29.6786 27.2222 29.3584C27.3249 29.3066 27.4276 29.2547 27.5333 29.2014Z" fill="#9DB0C8"/>
<path d="M42.6222 24.9625C42.7249 25.0661 42.8276 25.1697 42.9333 25.2765C42.8307 25.3801 42.728 25.4837 42.6222 25.5904C42.6736 25.7459 42.7249 25.9013 42.7778 26.0614C42.5724 26.0096 42.3671 25.9578 42.1556 25.9044C42.2139 25.5218 42.2139 25.5218 42.3111 25.1195C42.4138 25.0677 42.5164 25.0158 42.6222 24.9625Z" fill="#091425"/>
<path d="M21.1556 23.2355C21.1042 23.65 21.0529 24.0644 21 24.4915C20.8973 24.4397 20.7947 24.3878 20.6889 24.3345C20.6889 24.0236 20.6889 23.7128 20.6889 23.3925C21 23.2355 21 23.2355 21.1556 23.2355Z" fill="#010413"/>
<path d="M18.6667 11.3038C19.1139 11.2841 19.1139 11.2841 19.6 11.3038C19.7027 11.4074 19.8053 11.511 19.9111 11.6177C19.2181 11.6955 19.2181 11.6955 18.5111 11.7747C18.5624 11.6193 18.6138 11.4639 18.6667 11.3038Z" fill="#06101B"/>
<path d="M15.0889 4.08191C15.269 4.6272 15.2551 5.08051 15.2444 5.65188C15.0904 5.49645 14.9364 5.34102 14.7778 5.18089C14.8804 4.81822 14.9831 4.45556 15.0889 4.08191Z" fill="#C6DAE9"/>
<path d="M14.6222 2.35495C14.6222 2.91633 14.4529 3.14825 14.1556 3.61092C14.0529 3.55911 13.9502 3.5073 13.8444 3.45393C14.0456 3.00109 14.2581 2.68901 14.6222 2.35495Z" fill="#757D86"/>
<path d="M32.5111 41.6041C32.7678 41.6041 33.0244 41.6041 33.2889 41.6041C33.2889 41.7595 33.2889 41.9149 33.2889 42.0751C33.0815 42.1797 32.8741 42.2844 32.6667 42.3891C32.6153 42.13 32.564 41.871 32.5111 41.6041Z" fill="#01060C"/>
<path d="M39.2 39.7201C39.4053 39.7719 39.6107 39.8238 39.8222 39.8771C39.5656 40.1362 39.3089 40.3952 39.0444 40.6621C38.8904 40.6103 38.7364 40.5585 38.5778 40.5051C38.7831 40.2461 38.9884 39.987 39.2 39.7201Z" fill="#E3EBF4"/>
<path d="M12.1333 39.0921C12.1847 39.1958 12.236 39.2994 12.2889 39.4061C12.2376 39.5616 12.1862 39.717 12.1333 39.8771C12.0307 39.8771 11.928 39.8771 11.8222 39.8771C11.8222 39.9807 11.8222 40.0844 11.8222 40.1911C11.6682 40.1393 11.5142 40.0875 11.3556 40.0341C11.5686 39.5378 11.665 39.4073 12.1333 39.0921Z" fill="#789EC9"/>
<path d="M10.8889 33.4403C11.2996 33.4921 11.7102 33.5439 12.1333 33.5973C12.1333 33.7527 12.1333 33.9081 12.1333 34.0683C11.6113 33.9742 11.2968 33.7784 10.8889 33.4403Z" fill="#303D54"/>
<path d="M33.2889 32.9693C33.5456 33.1247 33.8022 33.2801 34.0667 33.4403C33.81 33.6475 33.5533 33.8547 33.2889 34.0683C33.2889 33.7056 33.2889 33.3429 33.2889 32.9693Z" fill="#687793"/>
<path d="M21 30.4573C21.6028 30.7321 21.6028 30.7321 21.7778 31.0853C21.4698 31.1371 21.1618 31.1889 20.8444 31.2423C20.8958 30.9833 20.9471 30.7242 21 30.4573Z" fill="#0C192D"/>
<path d="M30.8 27.4744C30.8513 27.4744 30.9027 27.4744 30.9556 27.4744C30.9556 27.7852 30.9556 28.0961 30.9556 28.4164C30.7502 28.4682 30.5449 28.52 30.3333 28.5734C30.282 28.4698 30.2307 28.3661 30.1778 28.2594C30.2804 28.2594 30.3831 28.2594 30.4889 28.2594C30.5916 28.0003 30.6942 27.7413 30.8 27.4744Z" fill="#3B4B5E"/>
<path d="M35.3111 25.1194C35.6704 25.1713 36.0298 25.2231 36.4 25.2764C36.4 25.3283 36.4 25.3801 36.4 25.4334C36.1433 25.4334 35.8867 25.4334 35.6222 25.4334C35.7249 25.6407 35.8276 25.8479 35.9333 26.0614C35.728 25.9578 35.5227 25.8542 35.3111 25.7474C35.3111 25.5402 35.3111 25.333 35.3111 25.1194Z" fill="#4B5166"/>
<path d="M35.7778 22.4505C36.2075 22.8842 36.1789 23.268 36.2444 23.8635C36.0904 23.9153 35.9364 23.9671 35.7778 24.0205C35.7778 23.5024 35.7778 22.9843 35.7778 22.4505Z" fill="#8094AE"/>
<path d="M41.6889 17.8976C41.9456 17.9494 42.2022 18.0012 42.4667 18.0546C42.3127 18.2878 42.3127 18.2878 42.1556 18.5256C41.9502 18.4738 41.7449 18.422 41.5333 18.3686C41.5847 18.2132 41.636 18.0578 41.6889 17.8976Z" fill="#050B1D"/>
<path d="M22.4 8.63481C22.7111 9.22355 22.7111 9.22355 22.7111 9.57679C22.4544 9.6286 22.1978 9.68041 21.9333 9.73379C22.225 8.98805 22.225 8.98805 22.4 8.63481Z" fill="#0C1C38"/>
<path d="M226.803 32V18.3636H230.47V20.7429H230.612C230.86 19.8965 231.278 19.2573 231.864 18.8253C232.449 18.3873 233.124 18.1683 233.888 18.1683C234.077 18.1683 234.281 18.1802 234.5 18.2038C234.719 18.2275 234.912 18.2601 235.077 18.3015V21.6573C234.9 21.604 234.654 21.5567 234.34 21.5153C234.027 21.4738 233.74 21.4531 233.479 21.4531C232.923 21.4531 232.426 21.5745 231.988 21.8171C231.556 22.0539 231.212 22.3853 230.958 22.8114C230.709 23.2376 230.585 23.7288 230.585 24.2852V32H226.803Z" fill="currentColor"/>
<path d="M218.076 32.2663C216.674 32.2663 215.466 31.9822 214.454 31.4141C213.448 30.84 212.673 30.0291 212.128 28.9815C211.584 27.928 211.311 26.6822 211.311 25.244C211.311 23.8413 211.584 22.6102 212.128 21.5508C212.673 20.4914 213.439 19.6657 214.427 19.0739C215.422 18.482 216.588 18.1861 217.925 18.1861C218.825 18.1861 219.662 18.3311 220.438 18.6211C221.219 18.9052 221.9 19.3343 222.48 19.9084C223.066 20.4825 223.521 21.2045 223.847 22.0746C224.172 22.9387 224.335 23.9508 224.335 25.1108V26.1495H212.821V23.8058H220.775C220.775 23.2612 220.657 22.7789 220.42 22.3587C220.183 21.9384 219.855 21.61 219.435 21.3732C219.02 21.1306 218.538 21.0092 217.987 21.0092C217.413 21.0092 216.904 21.1424 216.46 21.4087C216.023 21.6692 215.679 22.0213 215.431 22.4652C215.182 22.9032 215.055 23.3915 215.049 23.93V26.1584C215.049 26.8331 215.173 27.4161 215.422 27.9073C215.676 28.3986 216.034 28.7773 216.496 29.0437C216.958 29.31 217.505 29.4432 218.138 29.4432C218.559 29.4432 218.943 29.384 219.293 29.2656C219.642 29.1473 219.941 28.9697 220.189 28.733C220.438 28.4962 220.627 28.2062 220.757 27.8629L224.255 28.0938C224.078 28.9342 223.714 29.6681 223.163 30.2955C222.619 30.9169 221.914 31.4022 221.05 31.7514C220.192 32.0947 219.201 32.2663 218.076 32.2663Z" fill="currentColor"/>
<path d="M200.993 32.2219C199.957 32.2219 199.019 31.9556 198.179 31.4229C197.344 30.8843 196.681 30.0942 196.19 29.0526C195.705 28.005 195.462 26.7206 195.462 25.1996C195.462 23.6371 195.714 22.3379 196.217 21.3022C196.72 20.2605 197.389 19.4822 198.223 18.9673C199.064 18.4465 199.984 18.1861 200.984 18.1861C201.748 18.1861 202.384 18.3163 202.893 18.5767C203.408 18.8312 203.822 19.1508 204.136 19.5355C204.455 19.9143 204.698 20.2872 204.864 20.6541H204.979V13.8182H208.752V32H205.024V29.816H204.864C204.686 30.1948 204.435 30.5707 204.109 30.9435C203.79 31.3105 203.372 31.6153 202.857 31.8579C202.348 32.1006 201.727 32.2219 200.993 32.2219ZM202.192 29.2124C202.801 29.2124 203.316 29.0466 203.736 28.7152C204.162 28.3778 204.488 27.9073 204.713 27.3036C204.944 26.6999 205.059 25.9927 205.059 25.1818C205.059 24.371 204.947 23.6667 204.722 23.0689C204.497 22.4711 204.171 22.0095 203.745 21.6839C203.319 21.3584 202.801 21.1957 202.192 21.1957C201.57 21.1957 201.046 21.3643 200.62 21.7017C200.194 22.0391 199.871 22.5066 199.653 23.1044C199.434 23.7022 199.324 24.3946 199.324 25.1818C199.324 25.9749 199.434 26.6762 199.653 27.2859C199.877 27.8896 200.2 28.363 200.62 28.7063C201.046 29.0437 201.57 29.2124 202.192 29.2124Z" fill="currentColor"/>
<path d="M192.939 13.8182V32H189.157V13.8182H192.939Z" fill="currentColor"/>
<path d="M182.345 32V18.3636H186.127V32H182.345ZM184.245 16.6058C183.683 16.6058 183.2 16.4194 182.798 16.0465C182.401 15.6677 182.203 15.215 182.203 14.6882C182.203 14.1674 182.401 13.7205 182.798 13.3477C183.2 12.9689 183.683 12.7795 184.245 12.7795C184.807 12.7795 185.287 12.9689 185.683 13.3477C186.086 13.7205 186.287 14.1674 186.287 14.6882C186.287 15.215 186.086 15.6677 185.683 16.0465C185.287 16.4194 184.807 16.6058 184.245 16.6058Z" fill="currentColor"/>
<path d="M175.538 26.1939V18.3636H179.32V32H175.689V29.5231H175.547C175.239 30.3221 174.727 30.9642 174.011 31.4496C173.301 31.9349 172.434 32.1776 171.41 32.1776C170.498 32.1776 169.696 31.9704 169.004 31.5561C168.312 31.1418 167.77 30.5529 167.379 29.7894C166.995 29.0259 166.799 28.1115 166.793 27.0462V18.3636H170.575V26.3714C170.581 27.1764 170.797 27.8126 171.223 28.2802C171.65 28.7477 172.221 28.9815 172.937 28.9815C173.393 28.9815 173.819 28.878 174.215 28.6708C174.612 28.4577 174.931 28.1441 175.174 27.7298C175.423 27.3155 175.544 26.8035 175.538 26.1939Z" fill="currentColor"/>
<path d="M150.336 32V13.8182H157.616C158.954 13.8182 160.069 14.0164 160.963 14.413C161.857 14.8095 162.528 15.36 162.978 16.0643C163.428 16.7627 163.653 17.5676 163.653 18.479C163.653 19.1893 163.511 19.8137 163.227 20.3523C162.943 20.8849 162.552 21.3229 162.055 21.6662C161.564 22.0035 161.001 22.2432 160.368 22.3853V22.5628C161.061 22.5924 161.709 22.7878 162.312 23.1488C162.922 23.5098 163.416 24.0159 163.795 24.6669C164.174 25.312 164.363 26.0814 164.363 26.9751C164.363 27.9399 164.123 28.801 163.644 29.5586C163.171 30.3102 162.469 30.9051 161.54 31.343C160.611 31.781 159.466 32 158.104 32H150.336ZM154.18 28.8572H157.314C158.385 28.8572 159.167 28.653 159.658 28.2447C160.149 27.8304 160.395 27.2799 160.395 26.5934C160.395 26.0903 160.273 25.6464 160.031 25.2617C159.788 24.877 159.442 24.5752 158.992 24.3562C158.548 24.1372 158.018 24.0277 157.403 24.0277H154.18V28.8572ZM154.18 21.4265H157.03C157.557 21.4265 158.024 21.3347 158.433 21.1513C158.847 20.9619 159.173 20.6955 159.409 20.3523C159.652 20.009 159.773 19.5977 159.773 19.1182C159.773 18.4613 159.539 17.9316 159.072 17.5291C158.61 17.1267 157.953 16.9254 157.101 16.9254H154.18V21.4265Z" fill="currentColor"/>
<path d="M147.509 18.3636V21.2045H139.297V18.3636H147.509ZM141.161 15.0966H144.943V27.8097C144.943 28.1589 144.996 28.4311 145.103 28.6264C145.209 28.8158 145.357 28.949 145.547 29.0259C145.742 29.1029 145.967 29.1413 146.221 29.1413C146.399 29.1413 146.576 29.1265 146.754 29.0969C146.931 29.0614 147.068 29.0348 147.162 29.017L147.757 31.8313C147.568 31.8905 147.301 31.9586 146.958 32.0355C146.615 32.1184 146.198 32.1687 145.706 32.1864C144.795 32.2219 143.996 32.1006 143.309 31.8224C142.629 31.5443 142.099 31.1122 141.72 30.5263C141.341 29.9403 141.155 29.2005 141.161 28.3068V15.0966Z" fill="currentColor"/>
<path d="M128.486 24.1165V32H124.704V18.3636H128.308V20.7695H128.468C128.77 19.9764 129.276 19.3491 129.986 18.8874C130.696 18.4199 131.557 18.1861 132.569 18.1861C133.516 18.1861 134.342 18.3932 135.046 18.8075C135.751 19.2218 136.298 19.8137 136.689 20.5831C137.079 21.3466 137.275 22.258 137.275 23.3175V32H133.493V23.9922C133.499 23.1577 133.285 22.5066 132.853 22.0391C132.421 21.5656 131.827 21.3288 131.069 21.3288C130.56 21.3288 130.11 21.4383 129.72 21.6573C129.335 21.8763 129.033 22.1959 128.814 22.6161C128.601 23.0304 128.491 23.5305 128.486 24.1165Z" fill="currentColor"/>
<path d="M115.977 32.2663C114.574 32.2663 113.367 31.9822 112.354 31.4141C111.348 30.84 110.573 30.0291 110.028 28.9815C109.484 27.928 109.212 26.6822 109.212 25.244C109.212 23.8413 109.484 22.6102 110.028 21.5508C110.573 20.4914 111.339 19.6657 112.328 19.0739C113.322 18.482 114.488 18.1861 115.826 18.1861C116.725 18.1861 117.563 18.3311 118.338 18.6211C119.119 18.9052 119.8 19.3343 120.38 19.9084C120.966 20.4825 121.422 21.2045 121.747 22.0746C122.073 22.9387 122.236 23.9508 122.236 25.1108V26.1495H110.721V23.8058H118.676C118.676 23.2612 118.557 22.7789 118.32 22.3587C118.084 21.9384 117.755 21.61 117.335 21.3732C116.921 21.1306 116.438 21.0092 115.888 21.0092C115.314 21.0092 114.805 21.1424 114.361 21.4087C113.923 21.6692 113.58 22.0213 113.331 22.4652C113.082 22.9032 112.955 23.3915 112.949 23.93V26.1584C112.949 26.8331 113.074 27.4161 113.322 27.9073C113.577 28.3986 113.935 28.7773 114.396 29.0437C114.858 29.31 115.406 29.4432 116.039 29.4432C116.459 29.4432 116.844 29.384 117.193 29.2656C117.542 29.1473 117.841 28.9697 118.09 28.733C118.338 28.4962 118.528 28.2062 118.658 27.8629L122.156 28.0938C121.978 28.9342 121.614 29.6681 121.064 30.2955C120.519 30.9169 119.815 31.4022 118.951 31.7514C118.093 32.0947 117.101 32.2663 115.977 32.2663Z" fill="currentColor"/>
<path d="M107.445 18.3636V21.2045H99.233V18.3636H107.445ZM101.097 15.0966H104.879V27.8097C104.879 28.1589 104.933 28.4311 105.039 28.6264C105.146 28.8158 105.294 28.949 105.483 29.0259C105.678 29.1029 105.903 29.1413 106.158 29.1413C106.335 29.1413 106.513 29.1265 106.69 29.0969C106.868 29.0614 107.004 29.0348 107.099 29.017L107.694 31.8313C107.504 31.8905 107.238 31.9586 106.895 32.0355C106.551 32.1184 106.134 32.1687 105.643 32.1864C104.731 32.2219 103.932 32.1006 103.246 31.8224C102.565 31.5443 102.035 31.1122 101.657 30.5263C101.278 29.9403 101.091 29.2005 101.097 28.3068V15.0966Z" fill="currentColor"/>
<path d="M88.4221 24.1165V32H84.6401V18.3636H88.2445V20.7695H88.4043C88.7061 19.9764 89.2122 19.3491 89.9224 18.8874C90.6326 18.4199 91.4938 18.1861 92.5059 18.1861C93.4528 18.1861 94.2785 18.3932 94.9828 18.8075C95.6871 19.2218 96.2346 19.8137 96.6252 20.5831C97.0158 21.3466 97.2111 22.258 97.2111 23.3175V32H93.4292V23.9922C93.4351 23.1577 93.222 22.5066 92.79 22.0391C92.3579 21.5656 91.7631 21.3288 91.0055 21.3288C90.4965 21.3288 90.0467 21.4383 89.6561 21.6573C89.2714 21.8763 88.9695 22.1959 88.7505 22.6161C88.5375 23.0304 88.428 23.5305 88.4221 24.1165Z" fill="currentColor"/>
<path d="M75.4693 32.2663C74.0903 32.2663 72.8977 31.9734 71.8915 31.3874C70.8913 30.7956 70.1189 29.9729 69.5744 28.9194C69.0299 27.86 68.7576 26.6319 68.7576 25.2351C68.7576 23.8265 69.0299 22.5954 69.5744 21.5419C70.1189 20.4825 70.8913 19.6598 71.8915 19.0739C72.8977 18.482 74.0903 18.1861 75.4693 18.1861C76.8483 18.1861 78.0379 18.482 79.0382 19.0739C80.0443 19.6598 80.8197 20.4825 81.3642 21.5419C81.9087 22.5954 82.1809 23.8265 82.1809 25.2351C82.1809 26.6319 81.9087 27.86 81.3642 28.9194C80.8197 29.9729 80.0443 30.7956 79.0382 31.3874C78.0379 31.9734 76.8483 32.2663 75.4693 32.2663ZM75.487 29.3366C76.1144 29.3366 76.6382 29.1591 77.0584 28.804C77.4786 28.4429 77.7953 27.9517 78.0083 27.3303C78.2273 26.7088 78.3368 26.0015 78.3368 25.2085C78.3368 24.4154 78.2273 23.7081 78.0083 23.0866C77.7953 22.4652 77.4786 21.974 77.0584 21.6129C76.6382 21.2519 76.1144 21.0714 75.487 21.0714C74.8537 21.0714 74.3211 21.2519 73.889 21.6129C73.4629 21.974 73.1403 22.4652 72.9213 23.0866C72.7083 23.7081 72.6017 24.4154 72.6017 25.2085C72.6017 26.0015 72.7083 26.7088 72.9213 27.3303C73.1403 27.9517 73.4629 28.4429 73.889 28.804C74.3211 29.1591 74.8537 29.3366 75.487 29.3366Z" fill="currentColor"/>
<path d="M66.6225 20.1836H62.734C62.663 19.6805 62.518 19.2337 62.299 18.843C62.08 18.4465 61.7989 18.1091 61.4556 17.831C61.1123 17.5528 60.7158 17.3397 60.266 17.1918C59.8221 17.0438 59.3397 16.9698 58.8189 16.9698C57.8778 16.9698 57.0581 17.2036 56.3597 17.6712C55.6613 18.1328 55.1198 18.8075 54.7351 19.6953C54.3504 20.5772 54.158 21.6484 54.158 22.9091C54.158 24.2052 54.3504 25.2943 54.7351 26.1761C55.1257 27.058 55.6702 27.7238 56.3686 28.1736C57.067 28.6235 57.8749 28.8484 58.7923 28.8484C59.3072 28.8484 59.7836 28.7803 60.2216 28.6442C60.6655 28.508 61.0591 28.3098 61.4023 28.0494C61.7456 27.783 62.0297 27.4605 62.2546 27.0817C62.4854 26.7029 62.6452 26.2708 62.734 25.7855L66.6225 25.8033C66.5219 26.6378 66.2704 27.4427 65.8679 28.218C65.4714 28.9874 64.9357 29.677 64.261 30.2866C63.5922 30.8903 62.7932 31.3697 61.864 31.7248C60.9407 32.074 59.8961 32.2486 58.7301 32.2486C57.1084 32.2486 55.6584 31.8816 54.38 31.1477C53.1075 30.4138 52.1013 29.3514 51.3615 27.9606C50.6276 26.5697 50.2607 24.8859 50.2607 22.9091C50.2607 20.9264 50.6335 19.2396 51.3793 17.8487C52.125 16.4579 53.1371 15.3984 54.4155 14.6704C55.6939 13.9365 57.1321 13.5696 58.7301 13.5696C59.7836 13.5696 60.7602 13.7176 61.6598 14.0135C62.5653 14.3094 63.3673 14.7415 64.0657 15.3097C64.7641 15.8719 65.3323 16.5614 65.7702 17.3782C66.2141 18.195 66.4982 19.1301 66.6225 20.1836Z" fill="currentColor"/>
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

  // Increase viewBox dimensions slightly (e.g., by ~10%)
  // This will provide some padding around the artwork.
  const viewBoxWidth = Math.round(originalWidth * 1.1);   // e.g., 278 * 1.1 = 305.8 -> 306
  const viewBoxHeight = Math.round(originalHeight * 1.1); // e.g., 249 * 1.1 = 273.9 -> 274

  // To keep the artwork centered within this new, larger viewBox,
  // we can shift the viewBox's starting point slightly into negative coordinates.
  const viewBoxX = (viewBoxWidth - originalWidth) / -2;   // e.g., (306 - 278) / -2 = 28 / -2 = -14
  const viewBoxY = (viewBoxHeight - originalHeight) / -2; // e.g., (274 - 249) / -2 = 25 / -2 = -12.5

  return (
    <svg
      width={size}
      height={size}
      viewBox={`${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`} // Use new viewBox values
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
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

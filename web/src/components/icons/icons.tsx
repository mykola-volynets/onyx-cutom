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
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="278" height="249">
<path d="M0 0 C22.0088419 19.15584388 35.65396855 46.62273751 37.74658203 75.69287109 C39.35633913 108.93412975 30.58044076 138.06490772 8.01074219 162.95361328 C-7.02252058 179.23665088 -25.2155689 189.83833945 -46.49707031 196.30810547 C-47.55152344 196.62908203 -48.60597656 196.95005859 -49.69238281 197.28076172 C-67.00847699 201.59974113 -88.40010258 201.52011411 -105.49707031 196.30810547 C-106.1496582 196.11474609 -106.80224609 195.92138672 -107.47460938 195.72216797 C-135.3917553 187.28058581 -157.48523403 170.70642291 -173.49707031 146.30810547 C-174.47160156 144.84244141 -174.47160156 144.84244141 -175.46582031 143.34716797 C-190.41171228 119.42063039 -194.42199827 87.54615948 -188.45800781 60.20654297 C-184.26393895 42.7298148 -176.68844303 25.69603884 -164.49707031 12.30810547 C-163.67722656 11.34775391 -162.85738281 10.38740234 -162.01269531 9.39794922 C-120.40846318 -38.67686401 -47.20606519 -40.22367987 0 0 Z " fill="#0E0615" transform="translate(217.4970703125,39.69189453125)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C1.546875 1.9071875 1.546875 1.9071875 3.125 1.8125 C10.03908516 2.14705251 15.32006606 6.34368625 21 10 C21.94875 10.598125 22.8975 11.19625 23.875 11.8125 C36.60102535 20.72071774 47.31257479 31.09462669 56 44 C57.00546875 45.39992188 57.00546875 45.39992188 58.03125 46.828125 C60.2634439 50.4244374 61.66692802 53.96143644 63.0625 57.9375 C63.5517305 59.30137601 64.04260542 60.66466333 64.53515625 62.02734375 C64.77468018 62.69419189 65.0142041 63.36104004 65.26098633 64.0480957 C65.9644137 65.90600843 66.769054 67.7246607 67.578125 69.5390625 C76.86912737 92.15397487 73.25907543 120.94682286 64.375 143.0625 C62.81629122 146.54082664 60.99792548 149.75589373 59 153 C58.50242188 153.82757813 58.00484375 154.65515625 57.4921875 155.5078125 C49.11473056 169.06553266 38.85123248 181.76134871 25 190 C24.34 190 23.68 190 23 190 C22.67 190.99 22.34 191.98 22 193 C19.78515625 194.31640625 19.78515625 194.31640625 17.0625 195.5625 C13.21922924 197.32437611 13.21922924 197.32437611 10 200 C-17.02437584 211.62105725 -47.94756149 212.93805688 -75.45922852 202.34667969 C-80.54404856 200.29460757 -85.35703873 197.91474791 -90 195 C-86.89728435 193.96576145 -84.43756748 193.97814091 -81.19921875 194.06567383 C-71.75947816 194.3132836 -64.10520046 193.72315437 -56.0234375 188.4296875 C-50.22076303 185.16493719 -44.6520879 185.29363558 -38.125 185.3125 C-27.33505304 185.23085314 -17.35433817 184.6786073 -7.25 180.5625 C-6.22390625 180.15128906 -5.1978125 179.74007812 -4.140625 179.31640625 C-2.58601563 178.66478516 -2.58601563 178.66478516 -1 178 C0.14210937 177.54753906 1.28421875 177.09507812 2.4609375 176.62890625 C6.27145866 174.87505711 9.49473981 172.83259439 12.875 170.375 C13.48359863 169.93333496 14.09219727 169.49166992 14.71923828 169.03662109 C28.01949244 159.18914815 35.96571048 146.81779331 43 132 C43.78774996 130.41471436 44.57888266 128.83110017 45.375 127.25 C46.179375 125.64125 46.179375 125.64125 47 124 C47.66 124 48.32 124 49 124 C49.30744141 122.95199219 49.30744141 122.95199219 49.62109375 121.8828125 C50.02521484 120.51769531 50.02521484 120.51769531 50.4375 119.125 C50.70433594 118.22007812 50.97117188 117.31515625 51.24609375 116.3828125 C52 114 52 114 53 112 C53.95791771 101.69412671 54.1818598 91.18845243 49 82 C48.35194562 80.66774477 47.70607179 79.3344264 47.0625 78 C46.37569012 76.66631105 45.68816057 75.33299252 45 74 C44.22838561 72.43788556 43.45760458 70.8753593 42.6875 69.3125 C42.26210937 68.47203125 41.83671875 67.6315625 41.3984375 66.765625 C40.40728754 64.80547369 39.43519504 62.83563284 38.4765625 60.859375 C32.43160334 48.88297704 24.5525022 40.53975662 13.47045898 33.17114258 C11.95111978 32.15649299 10.47120471 31.08326456 9 30 C9 29.34 9 28.68 9 28 C8.443125 27.82984375 7.88625 27.6596875 7.3125 27.484375 C3.47862207 26.26685971 -0.03163343 25.04948934 -3.5 23 C-15.78862594 16.71054578 -31.5952277 17.35486553 -45 18 C-46.04099854 18.04785645 -46.04099854 18.04785645 -47.10302734 18.09667969 C-57.77744818 18.71541005 -65.64459774 22.22661862 -75 27 C-76.22926937 27.52846793 -77.46234974 28.04816591 -78.69921875 28.55859375 C-83.06286781 30.46413991 -86.34361632 32.99041343 -90 36 C-90.79664063 36.6496875 -91.59328125 37.299375 -92.4140625 37.96875 C-106.55081478 50.04845164 -117.14786897 67.26821155 -119.22727585 86.05316544 C-119.58007763 91.33019689 -119.53639616 96.60861617 -119.49609375 101.89453125 C-119.4962492 103.57932091 -119.49774577 105.26411091 -119.50050354 106.94889832 C-119.50187679 110.45266839 -119.48950525 113.95602373 -119.46655273 117.4597168 C-119.43806064 121.92919728 -119.44094968 126.39799612 -119.45364285 130.86752796 C-119.46062403 134.33615353 -119.45278482 137.80462387 -119.44038582 141.2732296 C-119.43590275 142.92089936 -119.43550669 144.56858596 -119.43945122 146.2162571 C-119.45028247 154.71222435 -119.13287449 161.97990638 -116 170 C-116.33 170.99 -116.66 171.98 -117 173 C-118.17249353 171.54634731 -119.33783816 170.08692581 -120.5 168.625 C-121.1496875 167.81289062 -121.799375 167.00078125 -122.46875 166.1640625 C-124 164 -124 164 -124 162 C-124.66 162 -125.32 162 -126 162 C-129.31773148 157.23977657 -131.85889591 151.70552047 -133 146 C-133.66 146 -134.32 146 -135 146 C-143.75940531 122.85864545 -148.17657317 98.30873294 -141 74 C-140.68675781 72.85015625 -140.37351563 71.7003125 -140.05078125 70.515625 C-138.31750084 64.45941992 -136.33181274 59.33090038 -133 54 C-132.690625 53.20464844 -132.38125 52.40929687 -132.0625 51.58984375 C-130.9908704 48.97774661 -129.72248478 46.88423306 -128.125 44.5625 C-127.63257812 43.84191406 -127.14015625 43.12132812 -126.6328125 42.37890625 C-125.82457031 41.20134766 -125.82457031 41.20134766 -125 40 C-124.38125 39.03707031 -123.7625 38.07414062 -123.125 37.08203125 C-116.83034887 27.9524729 -108.81711613 20.62036024 -100 14 C-99.16726562 13.30132812 -98.33453125 12.60265625 -97.4765625 11.8828125 C-95.18217891 10.13850195 -93.46478074 9.23502596 -90.75 8.375 C-86.9478068 7.46711456 -86.9478068 7.46711456 -86 5 C-62.37077253 -8.23821061 -24.6309642 -12.4638614 0 0 Z " fill="#7427B4" transform="translate(177,24)"/>
<path d="M0 0 C8.56235814 -0.71061382 14.79430721 3.38727299 21.88842773 7.58789062 C23.10869231 8.28706136 24.3300417 8.98434231 25.55249023 9.6796875 C30.20800181 12.34876857 34.72728514 15.03804197 39.01342773 18.27539062 C41.08847993 19.10695143 43.17308817 19.76671336 45.30639648 20.43164062 C46.15137695 20.84929687 46.15137695 20.84929687 47.01342773 21.27539062 C47.50842773 22.76039062 47.50842773 22.76039062 48.01342773 24.27539062 C49.99552948 24.99352509 51.99977803 25.65116365 54.01342773 26.27539062 C56.101401 27.38316377 58.15913087 28.54915563 60.18920898 29.75976562 C60.75866745 30.09784241 61.32812592 30.43591919 61.9148407 30.78424072 C63.113956 31.49764895 64.31143052 32.21382162 65.50732422 32.93261719 C67.30712489 34.01409226 69.11187518 35.08686552 70.91772461 36.15820312 C98.96931719 52.86147466 98.96931719 52.86147466 103.01342773 66.27539062 C104.60162614 76.87731158 103.98149166 87.1415263 98.01342773 96.27539062 C97.50553711 97.08363281 96.99764648 97.891875 96.47436523 98.72460938 C93.61385111 102.82558341 90.74419035 105.68008305 86.40405273 108.17773438 C85.52209229 108.68973389 84.64013184 109.2017334 83.73144531 109.72924805 C82.83449951 110.2394751 81.93755371 110.74970215 81.01342773 111.27539062 C80.18673584 111.75145752 79.36004395 112.22752441 78.50830078 112.71801758 C75.99365663 114.16181693 73.47297629 115.59456954 70.95092773 117.02539062 C64.58972873 120.64632069 58.24789424 124.29388412 51.95092773 128.02539062 C43.18514783 133.21448344 34.33429081 138.25428577 25.48266602 143.29492188 C20.0762579 146.37486165 14.67498974 149.46176925 9.30639648 152.60742188 C8.45480957 153.1057251 7.60322266 153.60402832 6.72583008 154.11743164 C5.19382664 155.01621738 3.66397109 155.91868117 2.13696289 156.82592773 C-8.41356965 163.01085123 -17.83692721 167.11418128 -30.21313477 164.62695312 C-41.64940701 161.49336096 -48.14869969 155.89894841 -55.26000977 146.60742188 C-60.28639549 136.90717975 -60.4497931 126.4582198 -60.42016602 115.75585938 C-60.42474373 114.28436547 -60.43005392 112.81287369 -60.43605042 111.34138489 C-60.44492138 108.27462009 -60.44262904 105.20811651 -60.43261719 102.14135742 C-60.42115239 98.25519852 -60.44133092 94.36995178 -60.47053432 90.48391247 C-60.48908489 87.44910671 -60.48856662 84.41451183 -60.4828968 81.37966347 C-60.48274579 79.94905636 -60.48860346 78.51843285 -60.50118828 77.08788109 C-60.59997609 64.01915337 -58.46753473 51.96103215 -52.23657227 40.33789062 C-51.62297852 39.17386719 -51.00938477 38.00984375 -50.37719727 36.81054688 C-49.91829102 35.97394531 -49.45938477 35.13734375 -48.98657227 34.27539062 C-48.32657227 34.27539062 -47.66657227 34.27539062 -46.98657227 34.27539062 C-46.73907227 33.55351563 -46.49157227 32.83164063 -46.23657227 32.08789062 C-44.86387635 28.99932481 -43.26303931 26.76527645 -40.98657227 24.27539062 C-40.32657227 24.27539062 -39.66657227 24.27539062 -38.98657227 24.27539062 C-38.98694929 24.8297731 -38.98732632 25.38415558 -38.98771477 25.95533752 C-38.99484406 39.46920953 -38.96844627 52.98266193 -38.90629387 66.49639893 C-38.87724317 73.03171291 -38.85920115 79.56666825 -38.86645508 86.10205078 C-38.87305056 92.41116356 -38.85054907 98.71956776 -38.80801773 105.02853394 C-38.79689068 107.43339516 -38.79618264 109.83832827 -38.80614853 112.24319458 C-38.81833469 115.61668807 -38.79321224 118.98802333 -38.75952148 122.36132812 C-38.7717424 123.35179642 -38.78396332 124.34226471 -38.79655457 125.36274719 C-38.68761694 131.43095811 -37.49936663 134.98289976 -33.66252327 139.71377563 C-29.76392157 143.3464086 -25.96806867 143.840408 -20.80297852 143.70507812 C-15.27517069 142.86172326 -10.76982733 140.04901422 -5.98657227 137.27539062 C-5.36395508 136.91622559 -4.74133789 136.55706055 -4.09985352 136.18701172 C-0.55758765 134.13837809 2.96700715 132.06154844 6.48217773 129.96679688 C10.99134193 127.28096267 15.5300248 124.64843217 20.07592773 122.02539062 C29.36402082 116.65721043 38.63933126 111.26750074 47.89624023 105.84570312 C52.00281574 103.44175777 56.12356916 101.06494997 60.25561523 98.70507812 C62.23745177 97.56196286 64.2192251 96.41873801 66.20092773 95.27539062 C67.11527588 94.75992676 68.02962402 94.24446289 68.97167969 93.71337891 C74.91497649 90.26315674 79.74853858 87.07005808 82.01342773 80.27539062 C82.28395257 78.19388489 82.28395257 78.19388489 82.32592773 75.96289062 C82.36331055 75.22425781 82.40069336 74.485625 82.43920898 73.72460938 C81.66304683 69.2598968 79.5924287 66.45101852 76.03515625 63.80249023 C73.60651634 62.26098462 71.14080401 60.81899455 68.63842773 59.40039062 C67.75316406 58.88444336 66.86790039 58.36849609 65.95581055 57.83691406 C63.31598925 56.30266711 60.6660917 54.78729784 58.01342773 53.27539062 C56.53646398 52.42452426 55.05986781 51.57301932 53.58374023 50.72070312 C50.40280903 48.88921023 47.2120138 47.07591921 44.01342773 45.27539062 C44.01342773 44.61539063 44.01342773 43.95539063 44.01342773 43.27539062 C42.83780273 42.93507813 42.83780273 42.93507813 41.63842773 42.58789062 C34.85373807 40.13136506 28.79507419 36.94830626 22.95092773 32.71289062 C19.14998336 29.96048263 15.4610187 27.96548139 11.13061523 26.18554688 C7.92783345 24.80870526 5.00598741 23.05819213 2.01342773 21.27539062 C2.01342773 20.61539063 2.01342773 19.95539063 2.01342773 19.27539062 C1.29155273 18.98664063 0.56967773 18.69789062 -0.17407227 18.40039062 C-2.77823893 17.35872396 -5.3824056 16.31705729 -7.98657227 15.27539062 C-7.98657227 14.61539063 -7.98657227 13.95539062 -7.98657227 13.27539062 C-8.60145508 13.07042969 -9.21633789 12.86546875 -9.84985352 12.65429688 C-13.22875977 11.52799479 -16.60766602 10.40169271 -19.98657227 9.27539062 C-18.98657227 6.27539062 -18.98657227 6.27539062 -16.69360352 4.92382812 C-10.98565153 2.41263737 -6.14206079 0.8514495 0 0 Z " fill="#B27BDF" transform="translate(121.986572265625,48.724609375)"/>
<path d="M0 0 C0.94488281 0.0515625 1.88976562 0.103125 2.86328125 0.15625 C3.81589844 0.1871875 4.76851562 0.218125 5.75 0.25 C8.17578125 0.65625 8.17578125 0.65625 10.17578125 2.65625 C11.82569707 3.36335678 13.49140381 4.03568989 15.17578125 4.65625 C15.17578125 5.31625 15.17578125 5.97625 15.17578125 6.65625 C16.42681641 7.02363281 16.42681641 7.02363281 17.703125 7.3984375 C21.65619868 8.83025946 25.10478861 10.68917207 28.73828125 12.78125 C29.43429443 13.17650879 30.13030762 13.57176758 30.84741211 13.97900391 C36.39547935 17.1513165 41.82443214 20.48968539 47.2109375 23.9296875 C50.46241081 25.82316734 53.69385791 27.23913763 57.17578125 28.65625 C57.17578125 29.31625 57.17578125 29.97625 57.17578125 30.65625 C58.08328125 30.924375 58.99078125 31.1925 59.92578125 31.46875 C62.95933825 32.57716506 64.64099684 33.75516169 67.17578125 35.65625 C69.15592557 36.37976427 71.1539944 37.05890389 73.17578125 37.65625 C73.17578125 38.31625 73.17578125 38.97625 73.17578125 39.65625 C74.53703125 40.089375 74.53703125 40.089375 75.92578125 40.53125 C78.49781033 41.42156776 80.78924891 42.37119413 83.17578125 43.65625 C83.17578125 44.31625 83.17578125 44.97625 83.17578125 45.65625 C83.81386719 45.83800781 84.45195312 46.01976562 85.109375 46.20703125 C85.93566406 46.45839844 86.76195312 46.70976563 87.61328125 46.96875 C88.43699219 47.21238281 89.26070313 47.45601562 90.109375 47.70703125 C90.79128906 48.02027344 91.47320312 48.33351562 92.17578125 48.65625 C92.50578125 49.64625 92.83578125 50.63625 93.17578125 51.65625 C94.83016738 52.35283363 96.49832443 53.01721883 98.17578125 53.65625 C101.42698533 56.44299636 102.12200686 58.10954374 102.55078125 62.46875 C102.47631622 65.65356226 102.27659937 66.51371403 100.36328125 69.21875 C94.01834114 74.55139197 86.77006804 78.45865556 79.17578125 81.65625 C76.27969564 83.27412498 73.43108585 84.96351674 70.578125 86.65625 C67.01365684 88.75155161 63.41303011 90.77015757 59.80078125 92.78125 C53.33009263 96.39955664 46.93119109 100.13128189 40.55078125 103.90625 C39.63031006 104.44805908 38.70983887 104.98986816 37.76147461 105.5480957 C32.86923367 108.43556254 28.01345013 111.36923965 23.1953125 114.37890625 C21.72989014 115.28044434 21.72989014 115.28044434 20.23486328 116.20019531 C18.37022336 117.34859283 16.51502104 118.51251049 14.67138672 119.69433594 C10.03720686 122.52628597 5.9159665 124.79607223 0.34985828 124.24476528 C-2.99742023 123.33866834 -4.4637081 121.50373878 -6.58678627 118.85029793 C-8.91537014 114.72156792 -8.6486992 110.49574104 -8.5847168 105.85913086 C-8.59362442 104.79485367 -8.60253204 103.73057648 -8.61170959 102.63404846 C-8.63295554 99.12909969 -8.61070474 95.6259967 -8.5859375 92.12109375 C-8.58744029 89.67924309 -8.59087122 87.23739291 -8.59614563 84.79554749 C-8.60047433 79.68368475 -8.58365712 74.57245347 -8.55151367 69.46069336 C-8.51171296 62.91108402 -8.52104299 56.36265723 -8.54574871 49.81301022 C-8.55993513 44.77289651 -8.5498425 39.73305873 -8.5322361 34.69296455 C-8.52638975 32.27805808 -8.5276835 29.86312334 -8.5362606 27.44822502 C-8.54425763 24.07283693 -8.51999506 20.69917875 -8.48706055 17.32397461 C-8.49561066 16.32796234 -8.50416077 15.33195007 -8.51296997 14.30575562 C-8.43760992 9.82763027 -8.29473441 6.62751227 -5.45930481 3.03053284 C-2.82421875 0.65625 -2.82421875 0.65625 0 0 Z " fill="#7427B3" transform="translate(96.82421875,63.34375)"/>
<path d="M0 0 C1.30469238 0.00628418 1.30469238 0.00628418 2.63574219 0.01269531 C14.12258389 0.2090873 25.58799323 1.39154645 35.625 7.3125 C37.28311751 8.08121587 38.95011753 8.83103127 40.625 9.5625 C41.7696875 10.06523438 41.7696875 10.06523438 42.9375 10.578125 C43.494375 10.82046875 44.05125 11.0628125 44.625 11.3125 C44.625 11.9725 44.625 12.6325 44.625 13.3125 C45.31851563 13.53679688 46.01203125 13.76109375 46.7265625 13.9921875 C50.29962688 15.61980982 53.05912536 17.88908625 56 20.4375 C56.57508301 20.9339502 57.15016602 21.43040039 57.74267578 21.94189453 C66.31376306 29.44614209 71.49784185 37.09533702 76.625 47.3125 C77.05554688 48.15941406 77.48609375 49.00632813 77.9296875 49.87890625 C78.72603462 51.45858829 79.5151234 53.04195051 80.296875 54.62890625 C81.33556613 56.72767333 82.38869477 58.81665063 83.453125 60.90234375 C83.77087891 61.52826416 84.08863281 62.15418457 84.41601562 62.79907227 C85.33262272 64.60405085 86.25217789 66.40753143 87.171875 68.2109375 C91.26949108 76.9569245 91.53695016 90.15715351 88.5078125 99.296875 C87.33601658 102.06416705 86.11068689 104.70193589 84.625 107.3125 C83.965 107.3125 83.305 107.3125 82.625 107.3125 C81.53632079 110.02911073 80.45627902 112.74773564 79.3984375 115.4765625 C76.09494497 123.65224512 72.23266153 130.42340019 66.625 137.3125 C66.0475 138.03050781 65.47 138.74851563 64.875 139.48828125 C60.57693282 144.61213448 55.78458984 149.06694346 50.625 153.3125 C49.88765625 153.92222656 49.1503125 154.53195313 48.390625 155.16015625 C41.15917119 160.6808131 33.15186685 163.43156068 24.625 166.3125 C23.64015625 166.67730469 22.6553125 167.04210937 21.640625 167.41796875 C15.97114701 169.09971805 10.52086176 169.35531129 4.6484375 169.3828125 C-11.93411033 169.44317034 -11.93411033 169.44317034 -26.8359375 175.9140625 C-29.375 177.3125 -29.375 177.3125 -31.7265625 177.0234375 C-32.27054687 176.78882813 -32.81453125 176.55421875 -33.375 176.3125 C-31.725 175.9825 -30.075 175.6525 -28.375 175.3125 C-28.375 174.3225 -28.375 173.3325 -28.375 172.3125 C-29.695 171.9825 -31.015 171.6525 -32.375 171.3125 C-31.85147949 171.09408447 -31.32795898 170.87566895 -30.78857422 170.65063477 C-24.44118559 167.92507303 -18.48747102 164.68551763 -12.5 161.25 C-11.49549805 160.67781738 -10.49099609 160.10563477 -9.45605469 159.51611328 C-0.84292388 154.60229901 7.74245746 149.64043149 16.31445312 144.65527344 C20.2482806 142.3691311 24.18692384 140.09131295 28.125 137.8125 C29.69923732 136.90107374 31.27345606 135.98961539 32.84765625 135.078125 C36.93422399 132.71217308 41.02134804 130.34718425 45.10888672 127.98291016 C46.72702377 127.04616176 48.34455126 126.10835951 49.96142578 125.16943359 C53.39947408 123.17335722 56.83992003 121.18464478 60.30859375 119.2421875 C65.385231 116.37143302 69.81104483 113.81990157 73.625 109.3125 C74.470625 108.425625 75.31625 107.53875 76.1875 106.625 C83.22896639 97.7117514 83.81922669 87.5151108 82.9296875 76.54931641 C81.67047797 67.30502334 76.7193144 61.94142382 69.63476562 56.45141602 C64.00885772 52.45331582 58.04646735 49.05281329 52.0625 45.625 C50.78668455 44.88549806 49.51129172 44.14526651 48.23632812 43.40429688 C42.332182 39.98130845 36.41382292 36.59660318 30.37915039 33.40698242 C28.50643216 32.23852093 27.15476141 30.89336218 25.625 29.3125 C23.83563314 28.38232339 23.83563314 28.38232339 21.8125 27.625 C15.72957318 25.03778112 10.11320043 21.68264372 4.42236328 18.34716797 C2.6497315 17.32673691 0.85972985 16.34798224 -0.94140625 15.37890625 C-2.03324219 14.77949219 -3.12507813 14.18007813 -4.25 13.5625 C-5.23742187 13.03140625 -6.22484375 12.5003125 -7.2421875 11.953125 C-7.94601563 11.41171875 -8.64984375 10.8703125 -9.375 10.3125 C-9.375 8.9925 -9.375 7.6725 -9.375 6.3125 C-10.25542969 6.456875 -11.13585937 6.60125 -12.04296875 6.75 C-13.20441406 6.935625 -14.36585937 7.12125 -15.5625 7.3125 C-16.71105469 7.498125 -17.85960938 7.68375 -19.04296875 7.875 C-21.87915393 8.24739477 -24.52219564 8.39846021 -27.375 8.3125 C-26.63671875 6.3828125 -26.63671875 6.3828125 -25.375 4.3125 C-23.45703125 3.5546875 -23.45703125 3.5546875 -21.1875 3.1875 C-18.39760933 2.70867463 -15.86595451 2.14859106 -13.16015625 1.27734375 C-8.67190104 0.1332787 -4.60995082 -0.03048198 0 0 Z " fill="#0D0316" transform="translate(141.375,40.6875)"/>
<path d="M0 0 C21.89912586 20.95193184 33.11239886 49.45562782 33.96899414 79.40283203 C34.3158837 112.97912324 22.15670453 140.7652181 -1.1796875 164.78515625 C-12.6530089 176.26771791 -27.78998732 185.59712788 -43.5546875 189.72265625 C-43.5546875 189.06265625 -43.5546875 188.40265625 -43.5546875 187.72265625 C-42.5646875 186.73265625 -41.5746875 185.74265625 -40.5546875 184.72265625 C-43.5246875 185.05265625 -46.4946875 185.38265625 -49.5546875 185.72265625 C-46.32129576 182.48926451 -41.95590242 182.01662283 -37.62109375 180.8203125 C-34.60354439 179.74014515 -33.63850702 178.99645362 -31.5546875 176.72265625 C-29.31251087 175.61781559 -27.03104026 174.71319735 -24.7109375 173.78515625 C-22.44917762 172.67066587 -21.28829907 171.52666829 -19.5546875 169.72265625 C-17.86026396 168.49489362 -16.15010815 167.2887167 -14.4296875 166.09765625 C-1.63069798 156.78777528 8.66208768 144.0654991 15.4453125 129.72265625 C15.84492188 129.02785156 16.24453125 128.33304688 16.65625 127.6171875 C28.08917351 107.16836792 29.9429205 78.28826885 24.10546875 55.87353516 C22.08886291 49.30315888 19.24984703 43.02130137 16.38037109 36.78686523 C15.51378488 34.87381394 14.71336441 32.9449758 13.921875 31 C6.67293459 14.91042063 -8.78735895 0.88213852 -23.5546875 -8.27734375 C-24.60849609 -8.95603516 -24.60849609 -8.95603516 -25.68359375 -9.6484375 C-31.87491753 -13.60759521 -37.09023965 -16.53089897 -44.5546875 -17.27734375 C-44.5546875 -17.93734375 -44.5546875 -18.59734375 -44.5546875 -19.27734375 C-45.1115625 -19.38691406 -45.6684375 -19.49648438 -46.2421875 -19.609375 C-47.386875 -19.84720703 -47.386875 -19.84720703 -48.5546875 -20.08984375 C-49.2971875 -20.24066406 -50.0396875 -20.39148437 -50.8046875 -20.546875 C-53.5546875 -21.27734375 -53.5546875 -21.27734375 -56.8828125 -22.828125 C-62.75329519 -25.07219541 -68.97737094 -24.72398521 -75.17089844 -24.66845703 C-77.28647412 -24.65248129 -79.40011012 -24.66830384 -81.515625 -24.6875 C-89.9230154 -24.69999744 -97.45859558 -23.63470792 -105.5546875 -21.27734375 C-106.86844698 -20.98917994 -108.18588148 -20.71674342 -109.5078125 -20.46875 C-116.21068347 -19.19012177 -121.58185656 -17.54549653 -127.5546875 -14.27734375 C-128.5446875 -14.27734375 -129.5346875 -14.27734375 -130.5546875 -14.27734375 C-131.0496875 -12.79234375 -131.0496875 -12.79234375 -131.5546875 -11.27734375 C-135.1171875 -10.08984375 -135.1171875 -10.08984375 -138.5546875 -9.27734375 C-139.0496875 -10.76234375 -139.0496875 -10.76234375 -139.5546875 -12.27734375 C-140.8746875 -12.27734375 -142.1946875 -12.27734375 -143.5546875 -12.27734375 C-143.7403125 -11.51421875 -143.9259375 -10.75109375 -144.1171875 -9.96484375 C-145.83660095 -6.75028817 -147.10777598 -6.61150606 -150.37890625 -5.37890625 C-159.66314572 -0.67844749 -166.23731424 8.78000319 -172.33984375 16.9140625 C-174.5546875 19.72265625 -174.5546875 19.72265625 -176.5546875 20.72265625 C-175.01682661 15.68616183 -171.97612712 12.33977634 -168.5546875 8.47265625 C-167.96872803 7.80733887 -167.38276855 7.14202148 -166.77905273 6.45654297 C-148.17262816 -14.39990186 -121.38388002 -29.31386189 -93.27734375 -32.06640625 C-57.47989411 -34.09480319 -26.83264351 -23.91961952 0 0 Z " fill="#110A17" transform="translate(221.5546875,43.27734375)"/>
<path d="M0 0 C6.71970624 1.11995104 6.71970624 1.11995104 10.5 3.5625 C14.63666454 6.15805422 18.81696797 8.64982577 23.0625 11.0625 C23.9594458 11.57441895 23.9594458 11.57441895 24.87451172 12.09667969 C28.93530004 14.40980108 33.01883633 16.67746627 37.1328125 18.89453125 C39.21007866 20.12437712 41.09367205 21.52153677 43 23 C42.77392578 24.83129883 42.77392578 24.83129883 42 27 C40.10498047 28.4128418 40.10498047 28.4128418 37.6171875 29.69921875 C36.24711548 30.42383301 36.24711548 30.42383301 34.84936523 31.16308594 C33.86782471 31.66614258 32.88628418 32.16919922 31.875 32.6875 C29.86174684 33.74578403 27.85003243 34.80700033 25.83984375 35.87109375 C24.84710449 36.39558105 23.85436523 36.92006836 22.83154297 37.46044922 C18.32015343 39.91335683 13.96028781 42.6072464 9.65771484 45.40893555 C5.92466045 47.75484705 4.68561781 48 0 48 C0 32.16 0 16.32 0 0 Z " fill="#B37BE0" transform="translate(114,101)"/>
<path d="M0 0 C2.29031422 1.35153366 4.5174456 2.77303264 6.74023438 4.23291016 C8.34113157 5.25163347 9.94398332 6.26729212 11.54882812 7.27978516 C12.31437012 7.76382813 13.07991211 8.24787109 13.86865234 8.74658203 C17.16498238 10.76458845 20.60451423 12.41447125 24.09179688 14.06884766 C26.67766672 15.39902762 28.76744011 17.18306901 30.99023438 19.04541016 C32.18727591 19.75238771 33.39650909 20.4390048 34.61523438 21.10791016 C39.65272012 23.99980012 39.65272012 23.99980012 40.99023438 26.04541016 C41.49023438 28.92041016 41.49023438 28.92041016 40.99023438 32.04541016 C37.12400426 36.6166587 32.4770988 39.44848954 27.36523438 42.48291016 C26.5641626 42.96518066 25.76309082 43.44745117 24.93774414 43.94433594 C19.81663967 47.00986947 14.65632511 49.98518812 9.37304688 52.76416016 C7.75770823 53.63273569 6.16870306 54.55179667 4.60742188 55.51416016 C-0.55504976 58.66414285 -3.93555594 59.88323218 -10.00976562 59.04541016 C-12.68408052 57.23377749 -12.96896921 56.16779939 -14.00976562 53.04541016 C-14.11150044 51.45604138 -14.15813174 49.86283395 -14.17089844 48.27026367 C-14.18050598 47.30238419 -14.19011353 46.3345047 -14.20001221 45.33729553 C-14.20426208 44.29351242 -14.20851196 43.24972931 -14.21289062 42.17431641 C-14.2185907 41.10044174 -14.22429077 40.02656708 -14.23016357 38.92015076 C-14.23961222 36.64803045 -14.24614702 34.37589645 -14.25 32.10375977 C-14.25971765 28.62508347 -14.29074776 25.14699494 -14.32226562 21.66845703 C-14.32879452 19.46208034 -14.33404544 17.25569941 -14.33789062 15.04931641 C-14.35023743 14.00755753 -14.36258423 12.96579865 -14.37530518 11.89247131 C-14.37230408 10.92143967 -14.36930298 9.95040802 -14.36621094 8.94995117 C-14.36985657 8.0974025 -14.3735022 7.24485382 -14.3772583 6.36647034 C-13.92259109 3.4948214 -12.9984563 2.14247183 -11.00976562 0.04541016 C-7.01072794 -1.28760241 -3.94616378 -1.87433192 0 0 Z M-8.00976562 5.04541016 C-8.00976562 20.88541016 -8.00976562 36.72541016 -8.00976562 53.04541016 C-2.96272318 53.04541016 -1.85041088 52.72308322 2.23632812 50.26416016 C3.23277344 49.6726416 4.22921875 49.08112305 5.25585938 48.47167969 C6.30257812 47.83601074 7.34929687 47.2003418 8.42773438 46.54541016 C10.58241786 45.26111224 12.73736484 43.97725629 14.89257812 42.69384766 C16.45661377 41.75557129 16.45661377 41.75557129 18.05224609 40.79833984 C21.83751758 38.53988469 25.65559549 36.3436643 29.49023438 34.17041016 C30.57304687 33.55423828 31.65585938 32.93806641 32.77148438 32.30322266 C33.86976563 31.68060547 33.86976563 31.68060547 34.99023438 31.04541016 C34.73270974 29.1089128 34.73270974 29.1089128 33.99023438 27.04541016 C31.52398965 25.41311822 29.16291249 24.02838441 26.55273438 22.67041016 C25.07950044 21.87460366 23.60684234 21.07773024 22.13476562 20.27978516 C21.41885254 19.89628906 20.70293945 19.51279297 19.96533203 19.11767578 C17.51386367 17.78679209 15.12263354 16.37090523 12.74023438 14.92041016 C11.9796875 14.46150391 11.21914062 14.00259766 10.43554688 13.52978516 C8.57318341 12.39927698 6.71446195 11.26276672 4.85742188 10.12353516 C3.7875 9.47900391 2.71757813 8.83447266 1.61523438 8.17041016 C0.14957031 7.27708984 0.14957031 7.27708984 -1.34570312 6.36572266 C-4.11154939 4.74937166 -4.11154939 4.74937166 -8.00976562 5.04541016 Z " fill="#100619" transform="translate(122.009765625,95.95458984375)"/>
<path d="M0 0 C-3.82989106 1.80230168 -6.78121808 2.19622241 -11 2 C-11.33 2.99 -11.66 3.98 -12 5 C-3.585 4.505 -3.585 4.505 5 4 C5 4.99 5 5.98 5 7 C4.23816406 6.97679687 3.47632813 6.95359375 2.69140625 6.9296875 C-7.00359994 6.76023671 -15.69233665 7.5745872 -24 13 C-24.33 13.66 -24.66 14.32 -25 15 C-24.13375 15.103125 -23.2675 15.20625 -22.375 15.3125 C-18.83316877 16.03398414 -16.15687958 17.27123261 -13 19 C-13 19.66 -13 20.32 -13 21 C-11.63875 21.433125 -11.63875 21.433125 -10.25 21.875 C-7.67797092 22.76531776 -5.38653234 23.71494413 -3 25 C-3 25.66 -3 26.32 -3 27 C-2.0925 27.268125 -1.185 27.53625 -0.25 27.8125 C3 29 3 29 4.875 30.4375 C7.51566629 32.37916639 10.19648449 33.23706448 13.29296875 34.25390625 C15 35 15 35 16 37 C8.25 35.125 8.25 35.125 6 34 C6.495 35.98 6.495 35.98 7 38 C1.79099923 36.49062025 -2.63166602 34.16624392 -7.3125 31.5 C-8.04017578 31.09652344 -8.76785156 30.69304687 -9.51757812 30.27734375 C-14.87386871 27.25226258 -14.87386871 27.25226258 -16 25 C-17.65204456 24.29788106 -19.31923769 23.63028587 -21 23 C-21.33 22.67 -21.66 22.34 -22 22 C-24.45557672 21.68368041 -24.45557672 21.68368041 -27.3125 21.625 C-28.27800781 21.57601562 -29.24351563 21.52703125 -30.23828125 21.4765625 C-33.112648 21.78044822 -33.112648 21.78044822 -35.14422607 23.86911011 C-37.84658727 28.42828364 -37.52855661 32.40988941 -37.45410156 37.61767578 C-37.45497772 39.22088181 -37.45497772 39.22088181 -37.45587158 40.85647583 C-37.45308692 44.38641944 -37.42196996 47.9155165 -37.390625 51.4453125 C-37.38316246 53.89720193 -37.37746959 56.34909734 -37.37347412 58.80099487 C-37.3582062 65.25425698 -37.31892184 71.70715862 -37.2746582 78.16027832 C-37.23377914 84.73310487 -37.21546602 91.30598924 -37.1953125 97.87890625 C-37.15431847 110.22838511 -37.0911788 122.57762718 -37.01117325 134.92691231 C-37.00205928 136.61792108 -37 138.30896667 -37 140 C-39.39628427 137.60371573 -39.25485615 137.07823217 -39.2784729 133.81124878 C-39.29521812 132.49451675 -39.29521812 132.49451675 -39.31230164 131.15118408 C-39.31446182 130.18589783 -39.31662201 129.22061157 -39.31884766 128.22607422 C-39.32889328 127.21141083 -39.3389389 126.19674744 -39.34928894 125.15133667 C-39.38026614 121.7857929 -39.39719642 118.42032918 -39.4140625 115.0546875 C-39.43276245 112.72583317 -39.45233497 110.3969857 -39.4727478 108.06814575 C-39.52419887 101.92954542 -39.56375505 95.79092308 -39.60089111 89.65222168 C-39.6408496 83.39178976 -39.69197903 77.13145037 -39.7421875 70.87109375 C-39.83910035 58.58079404 -39.92345581 46.29044225 -40 34 C-40.66 34 -41.32 34 -42 34 C-42 69.31 -42 104.62 -42 141 C-44 139 -44 139 -44.24609566 137.05161095 C-44.24425207 136.24965105 -44.24240849 135.44769115 -44.24050903 134.62142944 C-44.24325836 133.70153732 -44.24600769 132.7816452 -44.24884033 131.83387756 C-44.24164978 130.82183762 -44.23445923 129.80979767 -44.22705078 128.76708984 C-44.22734283 127.7036586 -44.22763489 126.64022736 -44.22793579 125.54457092 C-44.22653835 122.01661116 -44.21095756 118.48886053 -44.1953125 114.9609375 C-44.19158385 112.51999019 -44.18873618 110.07904138 -44.18673706 107.63809204 C-44.17908899 101.2034901 -44.15943041 94.76897799 -44.1373291 88.33441162 C-44.11689594 81.77243261 -44.10774076 75.21043913 -44.09765625 68.6484375 C-44.07618564 55.7655866 -44.04241826 42.88279807 -44 30 C-44.76699219 30.80824219 -45.53398438 31.61648437 -46.32421875 32.44921875 C-49.08039046 35.07663499 -50.2978853 35.68267588 -54 36 C-54 29.98804919 -51.37706604 26.10587618 -47.3125 21.9375 C-43.44699258 18.27058746 -39.35905063 15.05498318 -35 12 C-34.01 11.278125 -33.02 10.55625 -32 9.8125 C-29.16334859 8.09868977 -26.40154343 6.9408433 -23.27734375 5.85546875 C-20.56780022 4.83764708 -17.99063284 3.6136104 -15.375 2.375 C-10.17542385 -0.01263386 -5.65851608 -1.9587171 0 0 Z " fill="#160823" transform="translate(127,43)"/>
<path d="M0 0 C14.36882063 -1.05480739 29.59023021 1.23874363 41.046875 10.4921875 C43.50634258 12.39089647 46.03273176 13.16307819 49 14 C49.495 14.99 49.495 14.99 50 16 C50.99 16.33 51.98 16.66 53 17 C57 21.45714286 57 21.45714286 57 24 C57.57234375 24.06574219 58.1446875 24.13148437 58.734375 24.19921875 C61.91493327 25.32338159 63.17358635 27.18622125 65.25 29.8125 C65.95640625 30.68519531 66.6628125 31.55789062 67.390625 32.45703125 C69 35 69 35 69 39 C62.375 38.25 62.375 38.25 59 36 C59 35.34 59 34.68 59 34 C58.13375 33.7525 57.2675 33.505 56.375 33.25 C52.78939936 31.92199976 50.03672013 30.31369152 47 28 C47 27.34 47 26.68 47 26 C46.175 26.103125 45.35 26.20625 44.5 26.3125 C39.86488289 25.89865026 36.55477643 23.97735082 33 21 C33 20.34 33 19.68 33 19 C32.175 18.773125 31.35 18.54625 30.5 18.3125 C27.65920855 17.24720321 25.68129306 16.24921392 23.1875 14.625 C20.4036723 12.81313491 17.68537771 11.35250048 14.625 10.0625 C9.50649901 7.87396118 4.50279494 5.29014244 0 2 C0 1.34 0 0.68 0 0 Z " fill="#7328B1" transform="translate(139,46)"/>
<path d="M0 0 C0.495 1.485 0.495 1.485 1 3 C-8.48834408 19.73300566 -25.72051167 31.59386667 -44 37 C-51.69564629 38.90899753 -59.09582442 39.24829871 -67 39 C-67 38.34 -67 37.68 -67 37 C-64.55078125 35.34375 -64.55078125 35.34375 -61.3125 33.5 C-60.25675781 32.8915625 -59.20101562 32.283125 -58.11328125 31.65625 C-55 30 -55 30 -52.30078125 28.921875 C-49.54857146 27.81912201 -47.41418605 26.14693271 -45.0390625 24.3984375 C-41.97290696 22.2955952 -38.70762795 20.61902598 -35.4296875 18.87109375 C-30.22407573 16.03113016 -25.11162606 13.03321176 -19.98925781 10.04638672 C-17.66273206 8.69191584 -15.33252598 7.34410955 -13 6 C-12.19208008 5.53223145 -11.38416016 5.06446289 -10.55175781 4.58251953 C-9.36984863 3.90938721 -9.36984863 3.90938721 -8.1640625 3.22265625 C-7.45975098 2.81926025 -6.75543945 2.41586426 -6.02978516 2.00024414 C-4.02417779 1.01191441 -2.18307631 0.45309709 0 0 Z " fill="#7428B4" transform="translate(207,165)"/>
<path d="M0 0 C2 2 2 2 2.24495316 3.85633564 C2.242691 4.61492972 2.24042885 5.37352381 2.23809814 6.15510559 C2.24059067 7.02570114 2.24308319 7.89629669 2.24565125 8.79327393 C2.23838516 9.75070496 2.23111908 10.70813599 2.22363281 11.69458008 C2.22404068 12.70121201 2.22444855 13.70784393 2.22486877 14.74497986 C2.2250667 16.93632657 2.22101194 19.12767676 2.21326447 21.31900978 C2.20307609 24.78617451 2.20839734 28.25297768 2.21868896 31.72013855 C2.24672792 41.57984716 2.2591336 51.43935409 2.22998047 61.29907227 C2.2132758 67.3251386 2.22553101 73.35056012 2.25643158 79.37656212 C2.26254687 81.67507338 2.25763697 83.97364113 2.24155426 86.27210426 C2.21999704 89.4878707 2.23521793 92.70152901 2.25878906 95.91723633 C2.24342606 96.86859467 2.22806305 97.819953 2.2122345 98.80014038 C2.21700984 103.57314754 2.21700984 103.57314754 4.30278778 107.70961571 C8.17768594 111.06091513 10.93139924 111.70377304 15.84375 111.43359375 C19.09981485 110.77884158 21.31456964 108.90217984 24 107 C26.30701607 106.34654467 28.58602155 105.89217597 30.94921875 105.4921875 C33.29186402 105.05473899 33.29186402 105.05473899 36 103 C39.1875 103.375 39.1875 103.375 42 104 C38.08655106 107.15163088 33.76218684 109.59222982 29.4375 112.125 C28.66986328 112.58003906 27.90222656 113.03507812 27.11132812 113.50390625 C26.00241211 114.15552734 26.00241211 114.15552734 24.87109375 114.8203125 C24.20005615 115.21492676 23.52901855 115.60954102 22.83764648 116.01611328 C18.08849853 118.55883498 13.25497619 118.59752845 8 118 C4.04777321 115.98795727 1.27237405 113.82715629 -1 110 C-1.87537428 107.13962286 -2.12713897 104.56797331 -2.13371277 101.584198 C-2.13797775 100.70651764 -2.14224274 99.82883728 -2.14663696 98.92456055 C-2.14618378 97.96960693 -2.14573059 97.01465332 -2.14526367 96.03076172 C-2.14862228 95.01901886 -2.1519809 94.007276 -2.15544128 92.96487427 C-2.16494272 89.61979954 -2.1668937 86.27477488 -2.16796875 82.9296875 C-2.17118083 80.60848978 -2.17454487 78.28729226 -2.17805481 75.96609497 C-2.1840433 71.10222911 -2.18589489 66.23838101 -2.18530273 61.37451172 C-2.18520089 55.1285487 -2.19887777 48.88269878 -2.21607494 42.63676262 C-2.22716541 37.84481274 -2.22922289 33.05289051 -2.22869301 28.26092911 C-2.22987664 25.95714044 -2.23431973 23.65335113 -2.24202538 21.34957504 C-2.2517699 18.13645106 -2.24896971 14.92357681 -2.24291992 11.71044922 C-2.24853943 10.75144714 -2.25415894 9.79244507 -2.25994873 8.80438232 C-2.25575424 7.93234161 -2.25155975 7.0603009 -2.24723816 6.16183472 C-2.24778293 5.40194181 -2.24832769 4.64204891 -2.24888897 3.85912895 C-2 2 -2 2 0 0 Z " fill="#0A0313" transform="translate(86,75)"/>
<path d="M0 0 C0.87269531 0.43699219 1.74539062 0.87398437 2.64453125 1.32421875 C4.7023084 2.35190955 6.7618115 3.37616418 8.82421875 4.39453125 C15.6414485 7.77059455 22.34884477 11.30782328 29 15 C29 15.66 29 16.32 29 17 C29.763125 17.28875 30.52625 17.5775 31.3125 17.875 C34 19 34 19 37 21 C37.99 21.144375 38.98 21.28875 40 21.4375 C43.39561443 22.07417771 43.69217369 22.65286764 46 25 C47.53545874 25.9414298 49.10021774 26.83634864 50.6875 27.6875 C51.49574219 28.12449219 52.30398437 28.56148437 53.13671875 29.01171875 C53.75160156 29.33785156 54.36648437 29.66398437 55 30 C55 30.66 55 31.32 55 32 C58.3 32.99 61.6 33.98 65 35 C65 34.01 65 33.02 65 32 C65.99 31.505 65.99 31.505 67 31 C68.13350534 28.98330173 68.13350534 28.98330173 69 27 C75.51936219 38.52164009 75.51936219 38.52164009 77 44 C74.1997768 42.5998884 73.43223902 40.73427449 72 38 C72 37.01 72 36.02 72 35 C71.01 35.495 71.01 35.495 70 36 C69.67 36.99 69.34 37.98 69 39 C66.69 39 64.38 39 62 39 C61.505 39.99 61.505 39.99 61 41 C61.99 41 62.98 41 64 41 C64.33 41.99 64.66 42.98 65 44 C61.29423268 42.61557021 57.98301429 40.92775791 54.578125 38.91796875 C53.55203125 38.31533203 52.5259375 37.71269531 51.46875 37.09179688 C50.4065625 36.46337891 49.344375 35.83496094 48.25 35.1875 C46.15157032 33.95092537 44.0526198 32.71523413 41.953125 31.48046875 C40.44202148 30.58980713 40.44202148 30.58980713 38.90039062 29.68115234 C35.5822718 27.75787236 32.22218338 25.92502749 28.83105469 24.1340332 C26.92028034 22.95062696 25.55444582 21.61142086 24 20 C22.21063314 19.06982339 22.21063314 19.06982339 20.1875 18.3125 C15.87091767 16.47671211 11.82081447 14.31770949 7.75 12 C7.15985107 11.66782471 6.56970215 11.33564941 5.96166992 10.9934082 C2.378299 8.93252675 -0.83949467 6.66147817 -4 4 C-2.68 4 -1.36 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#15081F" transform="translate(143,50)"/>
<path d="M0 0 C6.17505266 0.76235218 12.21438873 2.54981081 18.1640625 4.31640625 C25.78893044 6.15435651 33.38368023 6.19335477 41.1875 6.1875 C42.29939697 6.18669434 43.41129395 6.18588867 44.55688477 6.18505859 C52.24684513 6.12761619 59.47020347 5.63643155 67 4 C68.83307197 3.62372448 70.66639324 3.24866077 72.5 2.875 C73.2528125 2.70742187 74.005625 2.53984375 74.78125 2.3671875 C77.22098002 1.96342936 79.53143741 1.93915515 82 2 C81.67 2.99 81.34 3.98 81 5 C80.34 5 79.68 5 79 5 C78.67 5.99 78.34 6.98 78 8 C75.57606463 8.86675864 73.3038533 9.53463192 70.8125 10.125 C70.15185547 10.29386719 69.49121094 10.46273437 68.81054688 10.63671875 C51.27739355 15.03298819 30.39229374 15.11280997 13 10 C11.85015625 9.69835937 10.7003125 9.39671875 9.515625 9.0859375 C3.41398566 7.32419656 3.41398566 7.32419656 1 6 C-0.32421875 3.3671875 -0.32421875 3.3671875 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#07030A" transform="translate(99,226)"/>
<path d="M0 0 C0 0.33 0 0.66 0 1 C-0.96188232 1.01458252 -1.92376465 1.02916504 -2.91479492 1.04418945 C-6.54762537 1.10298442 -10.17988728 1.18019611 -13.81225586 1.26245117 C-15.37238205 1.29532463 -16.93261647 1.32346804 -18.49291992 1.34643555 C-28.17134924 1.49265418 -37.77215883 1.70218773 -47 5 C-47.33 5.66 -47.66 6.32 -48 7 C-46.865625 6.835 -45.73125 6.67 -44.5625 6.5 C-40.02939706 5.92423916 -35.56252762 5.90494734 -31 6 C-34.55204057 8.08315161 -38.03113626 8.66628042 -42.0625 9.375 C-49.38375493 10.73752971 -56.49224564 12.60864048 -63.11328125 16.12109375 C-65 17 -65 17 -68 17 C-68.495 18.485 -68.495 18.485 -69 20 C-72.5625 21.1875 -72.5625 21.1875 -76 22 C-76.495 20.515 -76.495 20.515 -77 19 C-78.32 19 -79.64 19 -81 19 C-81.185625 19.763125 -81.37125 20.52625 -81.5625 21.3125 C-83.28191345 24.52705558 -84.55308848 24.66583769 -87.82421875 25.8984375 C-97.10845822 30.59889626 -103.68262674 40.05734694 -109.78515625 48.19140625 C-112 51 -112 51 -114 52 C-112.46213911 46.96350558 -109.42143962 43.61712009 -106 39.75 C-105.41404053 39.08468262 -104.82808105 38.41936523 -104.22436523 37.73388672 C-85.5953168 16.85208218 -58.87385594 2.04835781 -30.76171875 -0.796875 C-20.48958469 -1.35154891 -10.1980147 -1.51081699 0 0 Z " fill="#191220" transform="translate(159,12)"/>
<path d="M0 0 C2.65739003 -0.0043747 5.31311688 -0.04080206 7.97021484 -0.07861328 C17.9946611 -0.14248114 26.38734443 0.57551693 35.79443359 4.37060547 C35.79443359 5.36060547 35.79443359 6.35060547 35.79443359 7.37060547 C36.53693359 7.28810547 37.27943359 7.20560547 38.04443359 7.12060547 C41.57600386 7.44165731 42.56073724 8.72326164 44.79443359 11.37060547 C43.79443359 12.37060547 43.79443359 12.37060547 40.79443359 12.49560547 C37.79443359 12.37060547 37.79443359 12.37060547 36.79443359 11.37060547 C34.18785177 10.86669686 31.57044452 10.47069131 28.94677734 10.06591797 C25.79443359 9.37060547 25.79443359 9.37060547 22.18920898 7.84765625 C17.51775472 6.07525066 13.27766834 5.96885528 8.32568359 6.04248047 C7.44593872 6.04435364 6.56619385 6.04622681 5.65979004 6.04815674 C3.81091485 6.05484041 1.96205292 6.06868076 0.11328125 6.08935547 C-2.69756426 6.12051676 -5.50784638 6.13033635 -8.31884766 6.13623047 C-10.12484399 6.14540264 -11.93083469 6.15577909 -13.73681641 6.16748047 C-14.98247375 6.17385529 -14.98247375 6.17385529 -16.2532959 6.18035889 C-21.31440469 6.24156645 -26.1941153 6.65406848 -31.20556641 7.37060547 C-31.20556641 6.38060547 -31.20556641 5.39060547 -31.20556641 4.37060547 C-22.57706572 -1.38172832 -10.00312551 -0.00183982 0 0 Z " fill="#100817" transform="translate(142.20556640625,12.62939453125)"/>
<path d="M0 0 C1.81792091 5.45376274 -0.70932139 10.68801326 -3.0625 15.6875 C-10.31753426 29.49752135 -19.83697905 40.4821075 -32.4375 49.625 C-33.04102295 50.06352295 -33.6445459 50.5020459 -34.26635742 50.95385742 C-38.62018437 54 -38.62018437 54 -42 54 C-41.65978036 50.82461668 -40.97533396 49.97723135 -38.5625 47.75 C-36 46 -36 46 -34 46 C-33.76796875 45.26394531 -33.5359375 44.52789062 -33.296875 43.76953125 C-31.76104895 40.48970995 -30.02773491 38.98965302 -27.25 36.6875 C-23.30862796 33.28643149 -20.1673727 29.93387907 -17.25390625 25.62890625 C-16 24 -16 24 -13 22 C-11.92863949 19.69855891 -10.92010283 17.3659787 -10 15 C-11.32 15 -12.64 15 -14 15 C-13.34 13.68 -12.68 12.36 -12 11 C-11.34 11 -10.68 11 -10 11 C-9.835 10.29875 -9.67 9.5975 -9.5 8.875 C-7.31464835 4.68640933 -3.85328838 2.60769051 0 0 Z " fill="#0B0114" transform="translate(221,147)"/>
<path d="M0 0 C0.86802246 -0.00056396 1.73604492 -0.00112793 2.63037109 -0.00170898 C11.30976174 0.14350298 20.70313319 1.4453166 28.5625 5.375 C28.5625 6.365 28.5625 7.355 28.5625 8.375 C26.29136197 8.23399143 24.02059275 8.08703245 21.75 7.9375 C20.48542969 7.85628906 19.22085938 7.77507813 17.91796875 7.69140625 C14.5625 7.375 14.5625 7.375 11.5625 6.375 C9.16995424 6.14939324 6.77321877 5.96651405 4.375 5.8125 C3.10269531 5.72871094 1.83039063 5.64492188 0.51953125 5.55859375 C-0.45628906 5.49800781 -1.43210938 5.43742187 -2.4375 5.375 C-2.4375 6.035 -2.4375 6.695 -2.4375 7.375 C-1.1175 7.705 0.2025 8.035 1.5625 8.375 C1.8925 10.685 2.2225 12.995 2.5625 15.375 C2.2325 14.715 1.9025 14.055 1.5625 13.375 C0.675625 13.436875 -0.21125 13.49875 -1.125 13.5625 C-4.836487 13.35241583 -6.58013552 12.72812369 -9.4375 10.375 C-9.4375 9.055 -9.4375 7.735 -9.4375 6.375 C-10.31792969 6.519375 -11.19835937 6.66375 -12.10546875 6.8125 C-13.26691406 6.998125 -14.42835937 7.18375 -15.625 7.375 C-17.34783203 7.6534375 -17.34783203 7.6534375 -19.10546875 7.9375 C-21.94165393 8.30989477 -24.58469564 8.46096021 -27.4375 8.375 C-26.69921875 6.4453125 -26.69921875 6.4453125 -25.4375 4.375 C-23.51953125 3.6171875 -23.51953125 3.6171875 -21.25 3.25 C-18.46267621 2.77161518 -15.93032975 2.21211321 -13.2265625 1.34375 C-8.72477074 0.19277644 -4.62649236 -0.00761673 0 0 Z " fill="#08020E" transform="translate(141.4375,40.625)"/>
<path d="M0 0 C21.82223411 3.0627697 41.52368399 21.77901678 55 38 C56.4468532 39.96163654 57.73701472 41.91332866 59 44 C58.505 44.99 58.505 44.99 58 46 C57.52691406 45.39414062 57.05382812 44.78828125 56.56640625 44.1640625 C47.14210344 31.62104722 47.14210344 31.62104722 35 22 C35 23.65 35 25.3 35 27 C33.6875 26.125 32.375 25.25 31.0625 24.375 C30.24394531 23.82972656 29.42539063 23.28445312 28.58203125 22.72265625 C26.91114351 21.60788848 25.24176813 20.49084913 23.57421875 19.37109375 C12.17897702 11.53353711 12.17897702 11.53353711 -1 8 C-1 7.34 -1 6.68 -1 6 C-1.66 5.67 -2.32 5.34 -3 5 C0.63 5.33 4.26 5.66 8 6 C4.91330796 2.91330796 4.08072342 2.55144911 0 2 C0 1.34 0 0.68 0 0 Z " fill="#150B1E" transform="translate(178,18)"/>
<path d="M0 0 C2 2 2 2 2.24609566 3.82345009 C2.24333028 4.93789781 2.24333028 4.93789781 2.24050903 6.07485962 C2.24325836 6.92743851 2.24600769 7.7800174 2.24884033 8.65843201 C2.24164978 9.59566605 2.23445923 10.53290009 2.22705078 11.49853516 C2.22734283 12.48393784 2.22763489 13.46934052 2.22793579 14.48460388 C2.22653864 17.75284528 2.21095927 21.02086076 2.1953125 24.2890625 C2.19158374 26.55064774 2.18873612 28.81223459 2.18673706 31.07382202 C2.17908981 37.03495724 2.15943194 42.99599547 2.1373291 48.95709229 C2.11689417 55.03648567 2.10774038 61.11589469 2.09765625 67.1953125 C2.07618709 79.13025102 2.042038 91.06511745 2 103 C1.34 103 0.68 103 0 103 C-1.13611938 100.72776124 -1.12568845 99.49234589 -1.12698364 96.96983337 C-1.12980347 96.1271138 -1.13262329 95.28439423 -1.13552856 94.4161377 C-1.13350433 93.48982544 -1.1314801 92.56351318 -1.12939453 91.60913086 C-1.13114685 90.63508804 -1.13289917 89.66104523 -1.13470459 88.65748596 C-1.13911852 85.42658729 -1.13618694 82.19574301 -1.1328125 78.96484375 C-1.13348562 76.72807301 -1.13445571 74.49130235 -1.13571167 72.25453186 C-1.13718798 67.56282862 -1.13503603 62.87114439 -1.13037109 58.17944336 C-1.12467057 52.15083016 -1.1279553 46.12226144 -1.13394356 40.09364986 C-1.13754817 35.47416343 -1.1364111 30.85468763 -1.13381577 26.23520088 C-1.13314639 24.01153114 -1.13397528 21.78786045 -1.13629532 19.56419182 C-1.13882057 16.46325985 -1.1349832 13.36240109 -1.12939453 10.26147461 C-1.13141876 9.33313812 -1.13344299 8.40480164 -1.13552856 7.44833374 C-1.11426297 1.11426297 -1.11426297 1.11426297 0 0 Z " fill="#010003" transform="translate(86,75)"/>
<path d="M0 0 C0 28.71 0 57.42 0 87 C-0.66 87 -1.32 87 -2 87 C-3.63977558 81.97550624 -4.29367906 77.48315456 -4.2746582 72.18457031 C-4.27976913 71.43734207 -4.28488007 70.69011383 -4.29014587 69.92024231 C-4.30394463 67.47278643 -4.30309365 65.02561492 -4.30078125 62.578125 C-4.30467124 60.86895647 -4.30900653 59.15978889 -4.31376648 57.45062256 C-4.32120601 53.87997288 -4.32095222 50.30942214 -4.31567383 46.73876953 C-4.3098574 42.15981329 -4.32687319 37.58125869 -4.3500185 33.00236893 C-4.36472895 29.47824736 -4.36563166 25.95422342 -4.36250877 22.4300766 C-4.36302253 20.74114939 -4.36827043 19.05221679 -4.37832069 17.3633194 C-4.39062695 15.00789413 -4.38393104 12.65326363 -4.37231445 10.29785156 C-4.38378006 9.25051598 -4.38378006 9.25051598 -4.39547729 8.18202209 C-4.36347895 5.25377183 -4.32227476 3.43155793 -2.53923035 1.04388428 C-1 0 -1 0 0 0 Z " fill="#030006" transform="translate(63,104)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C1.57811541 1.8161982 1.13700835 3.62794073 0.6875 5.4375 C0.44386719 6.44683594 0.20023438 7.45617187 -0.05078125 8.49609375 C-0.36402344 9.32238281 -0.67726563 10.14867188 -1 11 C-1.99 11.33 -2.98 11.66 -4 12 C-4.04898438 12.71027344 -4.09796875 13.42054687 -4.1484375 14.15234375 C-4.22320312 15.07144531 -4.29796875 15.99054688 -4.375 16.9375 C-4.44460937 17.85402344 -4.51421875 18.77054688 -4.5859375 19.71484375 C-4.72257812 20.46894531 -4.85921875 21.22304687 -5 22 C-5.66 22.33 -6.32 22.66 -7 23 C-8.0476461 27.45145793 -8.15011563 31.82383349 -8.20532227 36.38232422 C-8.21522186 37.09521103 -8.22512146 37.80809784 -8.23532104 38.54258728 C-8.26670405 40.87992118 -8.29160085 43.21727534 -8.31640625 45.5546875 C-8.33699586 47.18279525 -8.35799284 48.81089789 -8.37937927 50.43899536 C-8.43439277 54.7099594 -8.48389283 58.98097001 -8.53222656 63.25201416 C-8.58259354 67.61596793 -8.63820004 71.97985464 -8.69335938 76.34375 C-8.80068723 84.89577651 -8.9021878 93.44785938 -9 102 C-8.34 102 -7.68 102 -7 102 C-5.875 107.75 -5.875 107.75 -7 110 C-10.0490648 103.37159826 -11.11404162 97.6661776 -11.17700195 90.31469727 C-11.18983719 89.00215469 -11.20267242 87.68961212 -11.21589661 86.33729553 C-11.2240703 84.91366968 -11.23151282 83.49003947 -11.23828125 82.06640625 C-11.24235678 81.3404167 -11.2464323 80.61442715 -11.25063133 79.86643791 C-11.2714389 76.01716276 -11.28575863 72.1679226 -11.29516602 68.31860352 C-11.30616791 64.38527491 -11.34050987 60.45252177 -11.38033772 56.51939487 C-11.40676693 53.45888887 -11.41488123 50.39851399 -11.41844749 47.33790398 C-11.42325272 45.89052418 -11.43468805 44.44314774 -11.45348549 42.99588203 C-11.6137018 29.83342039 -9.52749765 17.77244753 -3.25 6.0625 C-2.63640625 4.89847656 -2.0228125 3.73445313 -1.390625 2.53515625 C-0.93171875 1.69855469 -0.4728125 0.86195312 0 0 Z " fill="#72528E" transform="translate(73,83)"/>
<path d="M0 0 C2.9921875 1.53125 2.9921875 1.53125 5.875 3.5 C6.84179688 4.1496875 7.80859375 4.799375 8.8046875 5.46875 C9.52914062 5.9740625 10.25359375 6.479375 11 7 C10.01 7.33 9.02 7.66 8 8 C8 8.99 8 9.98 8 11 C8.78375 11.0825 9.5675 11.165 10.375 11.25 C13 12 13 12 14.3125 14.0625 C14.539375 14.701875 14.76625 15.34125 15 16 C11.03101997 14.53543172 7.5137749 12.65225783 3.875 10.5 C2.84117188 9.8915625 1.80734375 9.283125 0.7421875 8.65625 C-4.86530612 5.26938776 -4.86530612 5.26938776 -6 3 C-8.10773519 4.69724943 -8.92860301 5.58870844 -9.39872742 8.29692078 C-9.40983047 9.19626846 -9.42093353 10.09561615 -9.43237305 11.0222168 C-9.45216721 12.04304855 -9.47196136 13.06388031 -9.49235535 14.11564636 C-9.49874527 15.21572525 -9.50513519 16.31580414 -9.51171875 17.44921875 C-9.52966995 18.5769722 -9.54762115 19.70472565 -9.56611633 20.86665344 C-9.62035853 24.4735641 -9.65416035 28.08034138 -9.6875 31.6875 C-9.72066071 34.13087799 -9.75514919 36.57423835 -9.79101562 39.01757812 C-9.87609299 45.01159916 -9.94438392 51.00563716 -10 57 C-12.14206578 53.78690132 -12.25464818 52.92403931 -12.2746582 49.22485352 C-12.28419022 48.25697403 -12.29372223 47.28909454 -12.30354309 46.29188538 C-12.30263168 45.24810226 -12.30172028 44.20431915 -12.30078125 43.12890625 C-12.30506638 42.05503159 -12.3093515 40.98115692 -12.31376648 39.8747406 C-12.319512 37.60261745 -12.32000842 35.33047589 -12.31567383 33.05834961 C-12.31251552 29.57959642 -12.33596529 26.10169477 -12.36132812 22.62304688 C-12.36360123 20.41666774 -12.36430456 18.21028632 -12.36328125 16.00390625 C-12.372491 14.96214737 -12.38170074 13.92038849 -12.39118958 12.84706116 C-12.38496078 11.87602951 -12.37873199 10.90499786 -12.37231445 9.90454102 C-12.37294388 9.05199234 -12.3735733 8.19944366 -12.3742218 7.32106018 C-11.91184878 4.45325395 -10.98650665 3.09600703 -9 1 C-5.66584516 -0.11138495 -3.49922301 -0.30951358 0 0 Z " fill="#19082A" transform="translate(120,95)"/>
<path d="M0 0 C1 2 1 2 0.5725708 3.66377258 C-0.21896854 6.89344463 -0.15579017 10.07477801 -0.16113281 13.37963867 C-0.16609772 14.11679108 -0.17106262 14.85394348 -0.17617798 15.61343384 C-0.19076221 18.04828839 -0.19759649 20.48307772 -0.203125 22.91796875 C-0.20888095 24.61705018 -0.21463862 26.3161316 -0.22039795 28.01521301 C-0.23089829 31.57858583 -0.23674681 35.14193616 -0.24023438 38.70532227 C-0.24570725 43.25348203 -0.2697134 47.80134065 -0.29820633 52.34940624 C-0.31690821 55.8608942 -0.32204238 59.37231084 -0.32357025 62.88384438 C-0.32658192 64.55944776 -0.33455982 66.23505034 -0.34775543 67.91060448 C-0.41063777 76.51146343 -0.20423357 83.88507422 3 92 C2.67 92.99 2.34 93.98 2 95 C0.82750647 93.54634731 -0.33783816 92.08692581 -1.5 90.625 C-2.1496875 89.81289062 -2.799375 89.00078125 -3.46875 88.1640625 C-5 86 -5 86 -5 84 C-5.66 84 -6.32 84 -7 84 C-6.505 83.01 -6.505 83.01 -6 82 C-5.34 82.33 -4.68 82.66 -4 83 C-4 83.66 -4 84.32 -4 85 C-3.34 85 -2.68 85 -2 85 C-2.33 84.01 -2.66 83.02 -3 82 C-3.10506602 79.70213164 -3.14869762 77.40130969 -3.16113281 75.10107422 C-3.16609772 74.40308212 -3.17106262 73.70509003 -3.17617798 72.98594666 C-3.19078681 70.67551688 -3.19760141 68.36515589 -3.203125 66.0546875 C-3.20887995 64.44385782 -3.21463764 62.83302815 -3.22039795 61.22219849 C-3.23090599 57.84116294 -3.23674913 54.46015114 -3.24023438 51.07910156 C-3.24570181 46.76519517 -3.26969285 42.45160716 -3.29820633 38.13780022 C-3.31691857 34.80731317 -3.32204298 31.47690127 -3.32357025 28.14636612 C-3.32658079 26.55728551 -3.33455476 24.96820572 -3.34775543 23.37917709 C-3.41170882 15.08495006 -3.32661443 7.76539402 0 0 Z " fill="#5D2489" transform="translate(58,102)"/>
<path d="M0 0 C0.66 0.99 1.32 1.98 2 3 C1.67 3.33 1.34 3.66 1 4 C0.8775669 5.50316769 0.82223715 7.01188167 0.79467773 8.51977539 C0.77473251 9.48069595 0.75478729 10.44161652 0.73423767 11.43165588 C0.71752518 12.476436 0.70081268 13.52121613 0.68359375 14.59765625 C0.66281265 15.66165146 0.64203156 16.72564667 0.62062073 17.82188416 C0.55500746 21.2353544 0.49618577 24.64890429 0.4375 28.0625 C0.39432597 30.37045109 0.35071206 32.678394 0.30664062 34.98632812 C0.19931416 40.65746682 0.09757008 46.32868552 0 52 C-0.495 50.515 -0.495 50.515 -1 49 C-2.485 49.495 -2.485 49.495 -4 50 C-4.10140493 43.5222714 -4.17146717 37.04474739 -4.21972656 30.56640625 C-4.23984419 28.3625524 -4.26714172 26.15875193 -4.30175781 23.95507812 C-4.35026833 20.78762644 -4.37296736 17.62088032 -4.390625 14.453125 C-4.41127014 13.46757629 -4.43191528 12.48202759 -4.45318604 11.46661377 C-4.45544041 4.59692793 -4.45544041 4.59692793 -1.97558594 1.34667969 C-0.9976709 0.68007324 -0.9976709 0.68007324 0 0 Z " fill="#020005" transform="translate(114,97)"/>
<path d="M0 0 C2.3129482 2.3129482 2.49580975 3.47904875 3.125 6.625 C3.29257812 7.44226563 3.46015625 8.25953125 3.6328125 9.1015625 C3.81457031 10.04128906 3.81457031 10.04128906 4 11 C4.66 11 5.32 11 6 11 C9.1889511 16.16830006 11.26017005 21.18738629 13 27 C13.66 27 14.32 27 15 27 C16.625 29 16.625 29 18 31 C17.67 31.66 17.34 32.32 17 33 C15.68 32.67 14.36 32.34 13 32 C13.93307421 33.44037669 14.87165077 34.87718985 15.8125 36.3125 C16.33457031 37.11300781 16.85664062 37.91351563 17.39453125 38.73828125 C18.80389849 40.7237402 20.22096657 42.3491852 22 44 C21.67 44.66 21.34 45.32 21 46 C8.81696141 32.82774033 8.81696141 32.82774033 5.9296875 24.328125 C4.77772019 21.44336654 3.2599006 18.83864624 1.75 16.125 C-1.21986692 10.37545469 -1.5176938 6.23634182 0 0 Z " fill="#0F0617" transform="translate(38,159)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C0.02 3.31 -1.96 5.62 -4 8 C-2.68 8 -1.36 8 0 8 C-0.64544429 11.48539917 -2.10134397 14.02819057 -4 17 C-4 15.33333333 -4 13.66666667 -4 12 C-11.18872429 14.60017687 -17.55929599 17.88891233 -24 22 C-25 20 -25 20 -25 16 C-23.04591536 13.48503135 -20.68788778 12.12169159 -17.91015625 10.625 C-17.12576172 10.19703125 -16.34136719 9.7690625 -15.53320312 9.328125 C-14.71787109 8.88984375 -13.90253906 8.4515625 -13.0625 8 C-11.44769062 7.12782337 -9.8343571 6.2529076 -8.22265625 5.375 C-7.50859619 4.99085938 -6.79453613 4.60671875 -6.05883789 4.2109375 C-3.90997338 2.94704944 -1.96579266 1.5303935 0 0 Z " fill="#100719" transform="translate(211,154)"/>
<path d="M0 0 C1.02222656 0.00064453 2.04445312 0.00128906 3.09765625 0.00195312 C10.57638016 0.04629339 10.57638016 0.04629339 14 1.1875 C14 2.1775 14 3.1675 14 4.1875 C13.3922876 4.20731934 12.7845752 4.22713867 12.15844727 4.24755859 C-0.65446243 4.6844309 -13.29707884 5.43125721 -26 7.1875 C-26 6.1975 -26 5.2075 -26 4.1875 C-18.61715044 -0.73439971 -8.58029226 -0.10599841 0 0 Z " fill="#040205" transform="translate(137,12.8125)"/>
<path d="M0 0 C0 2 0 2 -2 4.125 C-2.66 4.74375 -3.32 5.3625 -4 6 C-2.68 6.33 -1.36 6.66 0 7 C-2.8374184 9.38343145 -5.70087712 10.78451487 -9.125 12.171875 C-11.11486145 13.05073047 -12.9410771 14.08024145 -14.8125 15.1875 C-18 17 -18 17 -20 17 C-20 16.01 -20 15.02 -20 14 C-21.32 13.67 -22.64 13.34 -24 13 C-20.3791912 10.82626954 -16.75268765 8.66222771 -13.125 6.5 C-12.09246094 5.87996094 -11.05992187 5.25992188 -9.99609375 4.62109375 C-9.00996094 4.03457031 -8.02382812 3.44804687 -7.0078125 2.84375 C-5.64100342 2.02680664 -5.64100342 2.02680664 -4.24658203 1.19335938 C-2 0 -2 0 0 0 Z M-20 12 C-19.67 12.66 -19.34 13.32 -19 14 C-18.67 13.34 -18.34 12.68 -18 12 C-18.66 12 -19.32 12 -20 12 Z " fill="#0F0516" transform="translate(160,185)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2 34.32 2 68.64 2 104 C1.67 104 1.34 104 1 104 C0.67 71.99 0.34 39.98 0 7 C-1.98 7.99 -3.96 8.98 -6 10 C-4.63312778 6.01328937 -2.84804907 3.11505367 0 0 Z " fill="#916CB3" transform="translate(81,73)"/>
<path d="M0 0 C1.44964405 -0.01145772 2.89924802 -0.03181015 4.34863281 -0.06152344 C13.45669215 -0.24791221 21.22742412 0.32415609 29.63061523 4.29516602 C29.63061523 4.62516602 29.63061523 4.95516602 29.63061523 5.29516602 C27.96449618 5.33788702 26.29678639 5.33580434 24.63061523 5.29516602 C24.13561523 4.80016602 24.13561523 4.80016602 23.63061523 4.29516602 C15.93255737 3.14290895 8.27775513 3.11174374 0.50561523 3.10766602 C-0.7305957 3.09541992 -1.96680664 3.08317383 -3.24047852 3.07055664 C-9.42073703 3.06059919 -14.52190314 3.35583731 -20.36938477 5.29516602 C-22.84222967 5.56849402 -25.32303196 5.77823157 -27.80688477 5.92016602 C-29.0430957 5.99493164 -30.27930664 6.06969727 -31.55297852 6.14672852 C-32.94709961 6.22020508 -32.94709961 6.22020508 -34.36938477 6.29516602 C-31.63113877 3.55692002 -28.67035783 3.39058165 -24.99438477 2.73266602 C-20.25082737 1.90998637 -20.25082737 1.90998637 -15.58203125 0.76733398 C-10.51340519 -0.3142861 -5.17009077 0.0283721 0 0 Z " fill="#5E258F" transform="translate(141.369384765625,17.704833984375)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C4.71391278 4.77357872 6.56561146 8.34388537 6 14 C3.875 14.8125 3.875 14.8125 1 15 C-4.51185495 11.29009763 -4.51185495 11.29009763 -5.875 7.6875 C-5.936875 6.8521875 -5.936875 6.8521875 -6 6 C-6.99 6 -7.98 6 -9 6 C-8.67 5.01 -8.34 4.02 -8 3 C-5.69 3.33 -3.38 3.66 -1 4 C-0.67 2.68 -0.34 1.36 0 0 Z " fill="#09050E" transform="translate(213,85)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C3.4083283 10.38642122 3.4083283 20.61357878 2 31 C0.68 31.33 -0.64 31.66 -2 32 C-1.88202982 27.60324012 -1.75780274 23.20671601 -1.62768555 18.81030273 C-1.58428187 17.31360731 -1.54261087 15.81686061 -1.50268555 14.32006836 C-1.44511384 12.17285688 -1.38138284 10.02590479 -1.31640625 7.87890625 C-1.27974854 6.5854126 -1.24309082 5.29191895 -1.20532227 3.95922852 C-1 1 -1 1 0 0 Z " fill="#020105" transform="translate(251,111)"/>
<path d="M0 0 C2.97 0.495 2.97 0.495 6 1 C4.68 1.33 3.36 1.66 2 2 C2.33 16.85 2.66 31.7 3 47 C3.66 47.33 4.32 47.66 5 48 C3.35 48 1.7 48 0 48 C0 32.16 0 16.32 0 0 Z " fill="#9169B3" transform="translate(114,101)"/>
<path d="M0 0 C6.93 0.495 6.93 0.495 14 1 C14 1.66 14 2.32 14 3 C22.82320697 4.20546685 31.67339123 4.33693484 40.5625 4.5625 C42.15951455 4.60577645 43.75651991 4.64939337 45.35351562 4.69335938 C49.23558223 4.79950069 53.11774432 4.90102619 57 5 C57 5.33 57 5.66 57 6 C38.16870254 9.31217147 17.88410444 7.70653917 0 1 C0 0.67 0 0.34 0 0 Z " fill="#5B258A" transform="translate(103,226)"/>
<path d="M0 0 C8.49373217 -0.62352031 15.91908009 0.12773854 24.125 2.25 C24.94202393 2.45455811 25.75904785 2.65911621 26.60083008 2.86987305 C31.08492998 4.10495003 34.01142582 5.21985752 37 9 C35.68 9 34.36 9 33 9 C33 8.34 33 7.68 33 7 C31.02 7 29.04 7 27 7 C27 6.34 27 5.68 27 5 C21.00892722 4.22337945 15.01326751 3.57914667 9 3 C9 3.66 9 4.32 9 5 C9.66 5 10.32 5 11 5 C11.33 5.66 11.66 6.32 12 7 C14.01669827 8.13350534 14.01669827 8.13350534 16 9 C15.01 9.495 15.01 9.495 14 10 C12.01171875 9.109375 12.01171875 9.109375 9.6875 7.75 C8.88828125 7.28464844 8.0890625 6.81929687 7.265625 6.33984375 C6.51796875 5.89769531 5.7703125 5.45554687 5 5 C3.989375 4.443125 2.97875 3.88625 1.9375 3.3125 C1.298125 2.879375 0.65875 2.44625 0 2 C0 1.34 0 0.68 0 0 Z " fill="#5E248E" transform="translate(139,46)"/>
<path d="M0 0 C1.36604119 4.09812357 0.4323723 7.00268195 -1 11 C-2.5 13 -2.5 13 -4 14 C-4.66 14 -5.32 14 -6 14 C-6.99 14.66 -7.98 15.32 -9 16 C-9 15.34 -9 14.68 -9 14 C-10.65 14.33 -12.3 14.66 -14 15 C-13.34 13.68 -12.68 12.36 -12 11 C-11.34 11 -10.68 11 -10 11 C-9.835 10.29875 -9.67 9.5975 -9.5 8.875 C-7.31464835 4.68640933 -3.85328838 2.60769051 0 0 Z " fill="#060208" transform="translate(221,147)"/>
<path d="M0 0 C0.33 0.99 0.66 1.98 1 3 C-0.58203125 5.6640625 -0.58203125 5.6640625 -2.8125 8.625 C-3.54082031 9.60726562 -4.26914063 10.58953125 -5.01953125 11.6015625 C-7 14 -7 14 -9 15 C-8.67 13.35 -8.34 11.7 -8 10 C-7.34 10 -6.68 10 -6 10 C-6 9.01 -6 8.02 -6 7 C-6.67546875 7.30035156 -7.3509375 7.60070312 -8.046875 7.91015625 C-9.38492188 8.48056641 -9.38492188 8.48056641 -10.75 9.0625 C-11.63171875 9.44535156 -12.5134375 9.82820312 -13.421875 10.22265625 C-16.22220899 11.06699938 -17.27882221 10.81180118 -20 10 C-17.41989804 8.51494131 -14.83622441 7.03682689 -12.25 5.5625 C-11.52039063 5.14162109 -10.79078125 4.72074219 -10.0390625 4.28710938 C-9.33007812 3.88427734 -8.62109375 3.48144531 -7.890625 3.06640625 C-7.24125977 2.69459229 -6.59189453 2.32277832 -5.92285156 1.93969727 C-3.96172866 0.9812968 -2.13035565 0.4496957 0 0 Z " fill="#6E2AA6" transform="translate(207,165)"/>
<path d="M0 0 C4.96462123 0.41371844 8.48713637 1.53429064 12.8671875 3.87890625 C16.48734847 5.78181137 20.25151525 7.36871497 24 9 C24 9.66 24 10.32 24 11 C24.66 11.33 25.32 11.66 26 12 C25.01 12 24.02 12 23 12 C23 11.34 23 10.68 23 10 C21.68 10 20.36 10 19 10 C19 9.34 19 8.68 19 8 C18.34 8 17.68 8 17 8 C16.67 9.32 16.34 10.64 16 12 C11 10 11 10 8.6875 9 C5.1777186 7.69403483 1.64367136 6.86459998 -2 6 C1.65188082 4.92825237 4.26432828 5.23588533 8 6 C8 5.01 8 4.02 8 3 C5.36 2.34 2.72 1.68 0 1 C0 0.67 0 0.34 0 0 Z " fill="#130320" transform="translate(162,43)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.34 2.65 0.68 4.3 0 6 C-0.763125 5.979375 -1.52625 5.95875 -2.3125 5.9375 C-5.10185786 5.87057159 -5.10185786 5.87057159 -8 7 C-8 7.66 -8 8.32 -8 9 C-0.08 8.505 -0.08 8.505 8 8 C0.57569041 12.94953972 -9.3903644 12.27045976 -18 12 C-18 11.34 -18 10.68 -18 10 C-15.55078125 8.34375 -15.55078125 8.34375 -12.3125 6.5 C-11.25675781 5.8915625 -10.20101562 5.283125 -9.11328125 4.65625 C-6.4432248 3.23579337 -3.81237086 2.09454434 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#662999" transform="translate(158,192)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C-3.75 5 -3.75 5 -6 5 C-6.2784375 6.1446875 -6.2784375 6.1446875 -6.5625 7.3125 C-8.28191345 10.52705558 -9.55308848 10.66583769 -12.82421875 11.8984375 C-22.10845822 16.59889626 -28.68262674 26.05734694 -34.78515625 34.19140625 C-37 37 -37 37 -39 38 C-37.46213911 32.96350558 -34.42143962 29.61712009 -31 25.75 C-30.41404053 25.08468262 -29.82808105 24.41936523 -29.22436523 23.73388672 C-22.34527208 16.02292504 -15.13911797 9.54486843 -6.5 3.875 C-5.88777588 3.47168457 -5.27555176 3.06836914 -4.64477539 2.65283203 C-3.13732806 1.70064862 -1.57217167 0.84102732 0 0 Z " fill="#4A434D" transform="translate(84,26)"/>
<path d="M0 0 C3.59478576 3.49207759 7.00247775 6.97475584 10 11 C10 12.32 10 13.64 10 15 C3.375 14.25 3.375 14.25 0 12 C0 11.34 0 10.68 0 10 C-0.66 10 -1.32 10 -2 10 C-1.48885865 7.9554346 -0.97680276 5.91236597 -0.4375 3.875 C0.07574321 1.99628047 0.07574321 1.99628047 0 0 Z " fill="#622498" transform="translate(198,70)"/>
<path d="M0 0 C-3.82989106 1.80230168 -6.78121808 2.19622241 -11 2 C-11.33 2.99 -11.66 3.98 -12 5 C-3.585 4.505 -3.585 4.505 5 4 C5 4.99 5 5.98 5 7 C4.24976563 6.97679687 3.49953125 6.95359375 2.7265625 6.9296875 C-4.12927937 6.80880364 -10.34364917 7.35063873 -17 9 C-17.33 8.01 -17.66 7.02 -18 6 C-19.32 6.33 -20.64 6.66 -22 7 C-16.9327522 1.36972467 -7.39509179 -2.55983947 0 0 Z " fill="#13031D" transform="translate(127,43)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C0 4 0 4 -2.3125 5.375 C-6.14496893 7.69230679 -9.09043708 10.39743677 -11.3125 14.3125 C-13.89531243 18.42586795 -17.31329914 21.84556169 -21 25 C-21.66 25 -22.32 25 -23 25 C-22.13424769 20.53245372 -19.61156577 17.97475718 -16.5625 14.75 C-16.02915039 14.17805908 -15.49580078 13.60611816 -14.94628906 13.0168457 C-10.33167426 8.16054559 -5.40987813 3.96165854 0 0 Z " fill="#55217E" transform="translate(77,38)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C-0.66 2 -1.32 2 -2 2 C-2 2.66 -2 3.32 -2 4 C-0.68 4.33 0.64 4.66 2 5 C-0.24307028 6.20250158 -2.4928791 7.3869162 -4.75 8.5625 C-5.38421875 8.90474609 -6.0184375 9.24699219 -6.671875 9.59960938 C-11.45095438 12.06382218 -11.45095438 12.06382218 -14.453125 11.71484375 C-14.96359375 11.47894531 -15.4740625 11.24304688 -16 11 C-14.35 10.67 -12.7 10.34 -11 10 C-11 9.01 -11 8.02 -11 7 C-12.32 6.67 -13.64 6.34 -15 6 C-14.39671875 5.73445312 -13.7934375 5.46890625 -13.171875 5.1953125 C-12.37265625 4.84210938 -11.5734375 4.48890625 -10.75 4.125 C-9.96109375 3.77695313 -9.1721875 3.42890625 -8.359375 3.0703125 C-6.82990954 2.37648214 -5.3172252 1.64387645 -3.828125 0.8671875 C-2 0 -2 0 0 0 Z " fill="#12071C" transform="translate(124,206)"/>
<path d="M0 0 C4.57298777 1.47049607 7.81196339 4.07635817 11.375 7.1875 C11.9515332 7.68580322 12.52806641 8.18410645 13.12207031 8.69750977 C14.75757951 10.12130779 16.38153652 11.55687892 18 13 C18.68835938 13.61359375 19.37671875 14.2271875 20.0859375 14.859375 C25.45507639 19.95123441 29.67466673 26.02692072 34 32 C33.505 32.99 33.505 32.99 33 34 C32.52691406 33.39414062 32.05382812 32.78828125 31.56640625 32.1640625 C24.23843235 22.87910531 16.94064651 14.40111782 7.578125 7.10546875 C4.86721558 4.89155939 2.43597243 2.5104536 0 0 Z " fill="#3F3A46" transform="translate(203,30)"/>
<path d="M0 0 C7.92 0 15.84 0 24 0 C19.86621405 2.7558573 17.94796454 3.10756445 13 3 C13 3.66 13 4.32 13 5 C13.99 5.33 14.98 5.66 16 6 C16 6.66 16 7.32 16 8 C10.18738629 6.26017005 5.16830006 4.1889511 0 1 C0 0.67 0 0.34 0 0 Z " fill="#572582" transform="translate(87,218)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C1.57811541 1.8161982 1.13700835 3.62794073 0.6875 5.4375 C0.44386719 6.44683594 0.20023438 7.45617187 -0.05078125 8.49609375 C-0.36402344 9.32238281 -0.67726563 10.14867188 -1 11 C-1.99 11.33 -2.98 11.66 -4 12 C-4.04898438 12.71027344 -4.09796875 13.42054687 -4.1484375 14.15234375 C-4.22320312 15.07144531 -4.29796875 15.99054688 -4.375 16.9375 C-4.44460937 17.85402344 -4.51421875 18.77054688 -4.5859375 19.71484375 C-4.72257812 20.46894531 -4.85921875 21.22304687 -5 22 C-5.66 22.33 -6.32 22.66 -7 23 C-7.65772428 26.02934491 -7.65772428 26.02934491 -8 29 C-8.66 28.67 -9.32 28.34 -10 28 C-9.41224607 17.81226514 -4.63609645 8.92877834 0 0 Z " fill="#825D9D" transform="translate(73,83)"/>
<path d="M0 0 C1.32 0 2.64 0 4 0 C4 0.99 4 1.98 4 3 C-0.62816733 5.35582065 -4.75534135 5.23521469 -9.8125 5.125 C-10.99489258 5.11146484 -10.99489258 5.11146484 -12.20117188 5.09765625 C-14.13424666 5.07422504 -16.0671638 5.03835838 -18 5 C-15.44725126 2.54394629 -14.14109357 2.01197061 -10.546875 1.70703125 C-9.29390625 1.74183594 -8.0409375 1.77664062 -6.75 1.8125 C-5.48671875 1.83957031 -4.2234375 1.86664063 -2.921875 1.89453125 C-1.47554687 1.94673828 -1.47554687 1.94673828 0 2 C0 1.34 0 0.68 0 0 Z " fill="#020006" transform="translate(109,213)"/>
<path d="M0 0 C0 2 0 2 -2 4.125 C-2.66 4.74375 -3.32 5.3625 -4 6 C-2.68 6.33 -1.36 6.66 0 7 C-1.6875 8.5625 -1.6875 8.5625 -4 10 C-8.41025641 9.58974359 -8.41025641 9.58974359 -10 8 C-11.32594105 7.63837971 -12.65938457 7.30271961 -14 7 C-12.04480616 5.82807953 -10.0857461 4.6626071 -8.125 3.5 C-7.03445312 2.8503125 -5.94390625 2.200625 -4.8203125 1.53125 C-2 0 -2 0 0 0 Z " fill="#190B27" transform="translate(160,185)"/>
<path d="M0 0 C-4.54487937 3.95206902 -9.60063643 6.78844889 -14.8125 9.75 C-15.69615234 10.25660156 -16.57980469 10.76320312 -17.49023438 11.28515625 C-19.65802046 12.52723909 -21.82795538 13.76538423 -24 15 C-24.33 14.01 -24.66 13.02 -25 12 C-24.01 12 -23.02 12 -22 12 C-22 11.34 -22 10.68 -22 10 C-20.68 10 -19.36 10 -18 10 C-18 9.34 -18 8.68 -18 8 C-16.700625 7.4121875 -16.700625 7.4121875 -15.375 6.8125 C-12.69084818 5.37101106 -11.1470791 4.31189641 -9 2.3125 C-5.6143693 -0.297257 -4.15963927 -0.49519515 0 0 Z " fill="#672BA0" transform="translate(147,161)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C0.02 3.31 -1.96 5.62 -4 8 C-2.68 8 -1.36 8 0 8 C-0.64544429 11.48539917 -2.10134397 14.02819057 -4 17 C-4 15.33333333 -4 13.66666667 -4 12 C-4.99 12 -5.98 12 -7 12 C-6.690625 10.824375 -6.690625 10.824375 -6.375 9.625 C-6.25125 8.75875 -6.1275 7.8925 -6 7 C-6.66 6.34 -7.32 5.68 -8 5 C-6.71475739 4.13619741 -5.42157581 3.28419631 -4.125 2.4375 C-3.04605469 1.72400391 -3.04605469 1.72400391 -1.9453125 0.99609375 C-1.30335938 0.66738281 -0.66140625 0.33867187 0 0 Z " fill="#180924" transform="translate(211,154)"/>
<path d="M0 0 C0 0.33 0 0.66 0 1 C-0.90878906 1.06316406 -1.81757813 1.12632813 -2.75390625 1.19140625 C-11.14885606 2.00937572 -17.75296851 3.7841035 -25.25024414 7.69946289 C-26.81067788 8.51173477 -28.4031632 9.26185955 -30 10 C-30.66 9.67 -31.32 9.34 -32 9 C-31.401875 8.7525 -30.80375 8.505 -30.1875 8.25 C-27.88463355 7.16848166 -27.88463355 7.16848166 -26.8046875 5.03125 C-24.19090218 2.08932713 -21.76384323 1.95065288 -17.9375 1.25 C-17.27226318 1.12713623 -16.60702637 1.00427246 -15.92163086 0.87768555 C-10.5808862 -0.04713267 -5.40161723 -0.34316157 0 0 Z " fill="#521F7E" transform="translate(132,41)"/>
<path d="M0 0 C2.97595467 2.55081829 4.44002566 5.43434437 6 9 C6 9.99 6 10.98 6 12 C6.66 12 7.32 12 8 12 C9.25664978 14.90600261 10 16.79604584 10 20 C10.66 20.33 11.32 20.66 12 21 C11.67 22.32 11.34 23.64 11 25 C9.99515796 23.04414675 8.99626195 21.08523763 8 19.125 C7.443125 18.03445312 6.88625 16.94390625 6.3125 15.8203125 C5 13 5 13 5 11 C4.34 11 3.68 11 3 11 C2.49632243 9.54293274 1.99717444 8.08429904 1.5 6.625 C1.2215625 5.81289062 0.943125 5.00078125 0.65625 4.1640625 C0 2 0 2 0 0 Z " fill="#622793" transform="translate(39,159)"/>
<path d="M0 0 C3.02346601 -0.2519555 4.6402007 -0.20421041 7.3125 1.3125 C9 3 9 3 9 6 C9.99 6 10.98 6 12 6 C12 6.99 12 7.98 12 9 C9.625 8.75 9.625 8.75 7 8 C6.33333333 6.66666667 5.66666667 5.33333333 5 4 C2.44480079 3.18828772 2.44480079 3.18828772 0 3 C0 2.01 0 1.02 0 0 Z " fill="#05000B" transform="translate(128,103)"/>
<path d="M0 0 C2.14035949 6.42107846 -2.28191881 14.83853685 -5.125 20.75 C-7 24 -7 24 -9 25 C-8.49777649 22.48888244 -7.73809528 20.4138323 -6.6875 18.0625 C-4.62679459 13.42337502 -3.29602471 8.5577895 -1.8671875 3.6953125 C-1 1 -1 1 0 0 Z " fill="#5F268E" transform="translate(245,149)"/>
<path d="M0 0 C-4.3625668 4.3625668 -13.28127326 3.11171883 -19.1875 3.1328125 C-21 3 -21 3 -23 2 C-23 1.34 -23 0.68 -23 0 C-22.04738281 0.01160156 -21.09476563 0.02320313 -20.11328125 0.03515625 C-18.85902344 0.04417969 -17.60476562 0.05320313 -16.3125 0.0625 C-15.07113281 0.07410156 -13.82976562 0.08570313 -12.55078125 0.09765625 C-0.68597561 -0.22865854 -0.68597561 -0.22865854 0 0 Z " fill="#210831" transform="translate(161,203)"/>
<path d="M0 0 C1.5 1.375 1.5 1.375 3 3 C3 3.66 3 4.32 3 5 C2.030625 5.12375 1.06125 5.2475 0.0625 5.375 C-1.4534375 5.684375 -1.4534375 5.684375 -3 6 C-3.33 6.66 -3.66 7.32 -4 8 C-3.01 8 -2.02 8 -1 8 C-0.67 8.99 -0.34 9.98 0 11 C-2.4375 10.25 -2.4375 10.25 -5 9 C-6.35886391 6.08814875 -5.96392528 3.99887865 -5 1 C-3.35 1.33 -1.7 1.66 0 2 C0 1.34 0 0.68 0 0 Z " fill="#20112A" transform="translate(208,83)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C-0.99 2 -1.98 2 -3 2 C-3.04125 2.598125 -3.0825 3.19625 -3.125 3.8125 C-4 6 -4 6 -6.625 7.6875 C-10.1268331 9.04932398 -13.27165301 9.6271653 -17 10 C-14.38772848 7.04185281 -11.33429693 5.28123892 -7.9375 3.3125 C-6.87402344 2.68988281 -5.81054688 2.06726563 -4.71484375 1.42578125 C-2 0 -2 0 0 0 Z " fill="#5D248C" transform="translate(187,176)"/>
<path d="M0 0 C3.5689496 -0.18783945 6.67671801 0.11211335 10.125 0.9375 C18.57818029 2.77684941 27.38231021 2.69141897 36 3 C36 3.33 36 3.66 36 4 C32.70835283 4.02952761 29.41674062 4.04697292 26.125 4.0625 C24.74828125 4.07506836 24.74828125 4.07506836 23.34375 4.08789062 C6.29583698 4.14791849 6.29583698 4.14791849 0 1 C0 0.67 0 0.34 0 0 Z " fill="#150127" transform="translate(112,230)"/>
<path d="M0 0 C1.73694677 2.60542016 2.69100448 4.58342775 3.6875 7.5 C3.95949219 8.2734375 4.23148438 9.046875 4.51171875 9.84375 C5 12 5 12 4 15 C2.82750647 13.54634731 1.66216184 12.08692581 0.5 10.625 C-0.1496875 9.81289062 -0.799375 9.00078125 -1.46875 8.1640625 C-3 6 -3 6 -3 4 C-3.66 4 -4.32 4 -5 4 C-4.67 3.34 -4.34 2.68 -4 2 C-3.34 2.33 -2.68 2.66 -2 3 C-2 3.66 -2 4.32 -2 5 C-1.34 5 -0.68 5 0 5 C0 3.35 0 1.7 0 0 Z " fill="#5B2888" transform="translate(56,182)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C-1.423125 2.6496875 -1.423125 2.6496875 -2.875 3.3125 C-6.20041937 4.79302201 -6.20041937 4.79302201 -8 8 C-11.82534509 9.66319352 -14.0394352 10.20017115 -18 9 C-15.37785672 7.49480613 -12.75255792 5.99568681 -10.125 4.5 C-9.37863281 4.07074219 -8.63226563 3.64148438 -7.86328125 3.19921875 C-7.14785156 2.79316406 -6.43242187 2.38710937 -5.6953125 1.96875 C-5.03547363 1.59169922 -4.37563477 1.21464844 -3.69580078 0.82617188 C-2 0 -2 0 0 0 Z " fill="#5E258F" transform="translate(205,166)"/>
<path d="M0 0 C-2.71401294 1.35700647 -4.84846316 1.1123861 -7.8828125 1.09765625 C-9.04941406 1.09443359 -10.21601563 1.09121094 -11.41796875 1.08789062 C-12.64128906 1.07951172 -13.86460937 1.07113281 -15.125 1.0625 C-16.35605469 1.05798828 -17.58710938 1.05347656 -18.85546875 1.04882812 C-21.90369392 1.0370133 -24.95182314 1.02054028 -28 1 C-28 1.66 -28 2.32 -28 3 C-29.65 3 -31.3 3 -33 3 C-31.20215802 0.67815805 -30.27996751 0.04711029 -27.33618164 -0.44824219 C-26.28809326 -0.48079102 -25.24000488 -0.51333984 -24.16015625 -0.546875 C-23.01482422 -0.58683594 -21.86949219 -0.62679687 -20.68945312 -0.66796875 C-19.49255859 -0.69503906 -18.29566406 -0.72210938 -17.0625 -0.75 C-15.27295898 -0.81380859 -15.27295898 -0.81380859 -13.44726562 -0.87890625 C-3.80430642 -1.1716099 -3.80430642 -1.1716099 0 0 Z " fill="#4C1C74" transform="translate(156,210)"/>
<path d="M0 0 C7.55283912 0.61908517 7.55283912 0.61908517 9.6875 2.4375 C10.120625 2.953125 10.55375 3.46875 11 4 C11.825 4.28875 12.65 4.5775 13.5 4.875 C16.66422269 6.29890021 17.47679851 7.95359703 19 11 C15.03132589 9.05657711 11.14583435 6.95916091 7.25 4.875 C6.55261719 4.50246094 5.85523438 4.12992187 5.13671875 3.74609375 C3.42422705 2.83120092 1.71207932 1.91566431 0 1 C0 0.67 0 0.34 0 0 Z " fill="#61258E" transform="translate(133,103)"/>
<path d="M0 0 C1.8125 1.5625 1.8125 1.5625 3 3 C2 4 2 4 -0.5625 4.25 C-4.8756715 3.9363148 -8.0109691 2.65063348 -12 1 C-11.401875 0.855625 -10.80375 0.71125 -10.1875 0.5625 C-3.69230769 -1.10769231 -3.69230769 -1.10769231 0 0 Z " fill="#06010B" transform="translate(184,21)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.34 3.31 0.68 5.62 0 8 C-2.64 7.67 -5.28 7.34 -8 7 C-5.42215154 4.35247996 -3.08351902 2.05567935 0 0 Z " fill="#68279E" transform="translate(190,194)"/>
<path d="M0 0 C3.6607519 1.22025063 3.92339441 2.126491 5.6875 5.4375 C6.34298828 6.64212891 6.34298828 6.64212891 7.01171875 7.87109375 C8 10 8 10 8 12 C8.66 12 9.32 12 10 12 C10.33 14.64 10.66 17.28 11 20 C8.4064286 17.4064286 7.08571945 14.38269142 5.5 11.125 C5.19191406 10.49980469 4.88382813 9.87460938 4.56640625 9.23046875 C3.70822053 7.48831491 2.85398213 5.74421823 2 4 C1.33503891 2.66581524 0.66934269 1.33199196 0 0 Z " fill="#632995" transform="translate(210,74)"/>
<path d="M0 0 C0.59425781 0.22042969 1.18851563 0.44085938 1.80078125 0.66796875 C0.34860449 2.17392983 -1.11114736 3.67258979 -2.57421875 5.16796875 C-3.38632812 6.00328125 -4.1984375 6.83859375 -5.03515625 7.69921875 C-7.19921875 9.66796875 -7.19921875 9.66796875 -9.19921875 9.66796875 C-8.6159748 6.44255946 -7.67707077 4.69220765 -5.38671875 2.35546875 C-4.88527344 1.82308594 -4.38382813 1.29070313 -3.8671875 0.7421875 C-2.19921875 -0.33203125 -2.19921875 -0.33203125 0 0 Z " fill="#5F248F" transform="translate(63.19921875,53.33203125)"/>
<path d="M0 0 C0 0.99 0 1.98 0 3 C-0.639375 2.649375 -1.27875 2.29875 -1.9375 1.9375 C-6.05401805 0.67734141 -9.84827161 0.84155893 -14 2 C-15.75798368 3.45937409 -15.75798368 3.45937409 -17 5 C-16.8125 2.625 -16.8125 2.625 -16 0 C-10.69614742 -3.18231155 -5.41651594 -2.54894868 0 0 Z " fill="#682A9D" transform="translate(125,95)"/>
<path d="M0 0 C2.79526294 2.41409072 3.9321217 4.46495458 5 8 C5.23769006 11.27536903 5.18862752 14.5307881 5.125 17.8125 C5.11597656 18.69615234 5.10695312 19.57980469 5.09765625 20.49023438 C5.07419637 22.66027359 5.03832865 24.83017247 5 27 C4.67 27 4.34 27 4 27 C3.96261719 25.75863281 3.92523438 24.51726562 3.88671875 23.23828125 C3.8210405 21.59632489 3.7545938 19.95439913 3.6875 18.3125 C3.65366211 17.08756836 3.65366211 17.08756836 3.61914062 15.83789062 C3.40247553 10.97277438 2.77036829 8.12212976 0 4 C0 2.68 0 1.36 0 0 Z " fill="#8963A9" transform="translate(220,107)"/>
<path d="M0 0 C1.6490302 0.61651583 3.29415841 1.24347742 4.9375 1.875 C6.31228516 2.39707031 6.31228516 2.39707031 7.71484375 2.9296875 C10 4 10 4 11 6 C3.25 4.125 3.25 4.125 1 3 C1.33 4.32 1.66 5.64 2 7 C0.02 6.34 -1.96 5.68 -4 5 C-2.68 3.35 -1.36 1.7 0 0 Z " fill="#281538" transform="translate(132,74)"/>
<path d="M0 0 C0.33 0.99 0.66 1.98 1 3 C0.01 3.33 -0.98 3.66 -2 4 C-2.70151152 5.3153341 -3.36525925 6.65117592 -4 8 C-6.31453856 10.9758353 -8.31137465 11.50153711 -12 12 C-8 8 -4 4 0 0 Z " fill="#1A052D" transform="translate(219,199)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.67 2.32 1.34 3.64 1 5 C0.34 5 -0.32 5 -1 5 C-1.33 6.32 -1.66 7.64 -2 9 C-3.32 8.67 -4.64 8.34 -6 8 C-3.375 2.25 -3.375 2.25 0 0 Z " fill="#040006" transform="translate(231,188)"/>
<path d="M0 0 C1.65 0.33 3.3 0.66 5 1 C4.4375 2.9375 4.4375 2.9375 3 5 C-0.625 5.75 -0.625 5.75 -4 6 C-3.34 4.68 -2.68 3.36 -2 2 C-1.34 2 -0.68 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#05000A" transform="translate(160,185)"/>
<path d="M0 0 C3.96 0 7.92 0 12 0 C12 0.99 12 1.98 12 3 C8.52674819 4.1577506 5.63932552 4.06866652 2 4 C1.34 2.68 0.68 1.36 0 0 Z " fill="#5F2692" transform="translate(110,154)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1 1.98 1 3.96 1 6 C0.38125 6.226875 -0.2375 6.45375 -0.875 6.6875 C-3.62260139 8.38454792 -3.93210179 10.02514071 -5 13 C-5.99 13.495 -5.99 13.495 -7 14 C-5.99806563 10.20696275 -5.18975773 7.28463659 -3 4 C-2.34 4 -1.68 4 -1 4 C-0.67 2.68 -0.34 1.36 0 0 Z " fill="#5F2792" transform="translate(227,144)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C2.0735426 11.48520179 2.0735426 11.48520179 -0.55859375 15.19921875 C-2.30945733 16.65416173 -4.01429769 17.8906408 -6 19 C-6.66 18.67 -7.32 18.34 -8 18 C-7.59007812 17.62230469 -7.18015625 17.24460938 -6.7578125 16.85546875 C-1.767685 11.75789831 -0.73231087 6.98220536 0 0 Z " fill="#8A65A9" transform="translate(205,121)"/>
<path d="M0 0 C1.65 1.32 3.3 2.64 5 4 C4.67 5.65 4.34 7.3 4 9 C2.0625 8.375 2.0625 8.375 0 7 C-0.8125 3.9375 -0.8125 3.9375 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#05000A" transform="translate(206,73)"/>
<path d="M0 0 C2.31 0.33 4.62 0.66 7 1 C7.33 1.99 7.66 2.98 8 4 C9.65 4 11.3 4 13 4 C13.66 5.65 14.32 7.3 15 9 C11.32305352 7.62859834 8.04681411 5.96304199 4.6875 3.9375 C3.80449219 3.41027344 2.92148438 2.88304688 2.01171875 2.33984375 C1.34785156 1.89769531 0.68398437 1.45554687 0 1 C0 0.67 0 0.34 0 0 Z " fill="#8F6AB0" transform="translate(185,104)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C1.57811541 1.8161982 1.13700835 3.62794073 0.6875 5.4375 C0.44386719 6.44683594 0.20023437 7.45617187 -0.05078125 8.49609375 C-0.36402344 9.32238281 -0.67726563 10.14867188 -1 11 C-1.99 11.33 -2.98 11.66 -4 12 C-4 12.66 -4 13.32 -4 14 C-4.66 14 -5.32 14 -6 14 C-4.50829734 9.0276578 -2.39542583 4.58154261 0 0 Z " fill="#8862A7" transform="translate(73,83)"/>
<path d="M0 0 C1.9375 0.375 1.9375 0.375 4 1 C4.33 1.66 4.66 2.32 5 3 C5.99 3.33 6.98 3.66 8 4 C9.6875 6.5625 9.6875 6.5625 11 9 C8.69 9 6.38 9 4 9 C3.67 7.02 3.34 5.04 3 3 C2.34 3 1.68 3 1 3 C0.67 2.01 0.34 1.02 0 0 Z " fill="#5F248F" transform="translate(184,59)"/>
<path d="M0 0 C0.33 0.99 0.66 1.98 1 3 C-2.96 4.98 -2.96 4.98 -7 7 C-8 4 -8 4 -7 1 C-2.25 0 -2.25 0 0 0 Z " fill="#07030A" transform="translate(109,49)"/>
<path d="M0 0 C2.64 1.98 5.28 3.96 8 6 C6.68 6.99 5.36 7.98 4 9 C3.67 8.34 3.34 7.68 3 7 C2.01 6.67 1.02 6.34 0 6 C-0.38218767 4.34385343 -0.71395102 2.67542976 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#060306" transform="translate(213,39)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C-3.75 5 -3.75 5 -6 5 C-6.226875 5.804375 -6.45375 6.60875 -6.6875 7.4375 C-7.3371875 8.7059375 -7.3371875 8.7059375 -8 10 C-10.625 10.8125 -10.625 10.8125 -13 11 C-10.89418995 6.92737726 -8.89238357 4.9198809 -4.9375 2.625 C-4.05964844 2.10164063 -3.18179688 1.57828125 -2.27734375 1.0390625 C-1.52582031 0.69617188 -0.77429688 0.35328125 0 0 Z " fill="#322A35" transform="translate(84,26)"/>
<path d="M0 0 C1.98 0.66 3.96 1.32 6 2 C6 2.66 6 3.32 6 4 C6.63808594 4.19335938 7.27617187 4.38671875 7.93359375 4.5859375 C8.75988281 4.84632812 9.58617187 5.10671875 10.4375 5.375 C11.26121094 5.63023438 12.08492187 5.88546875 12.93359375 6.1484375 C15 7 15 7 16 9 C11.88403589 7.8701275 7.9588485 6.5835394 4 5 C3.34 5 2.68 5 2 5 C1.34 3.35 0.68 1.7 0 0 Z " fill="#58238A" transform="translate(174,105)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C-0.85276137 3.93200474 -3.65079784 6.64315404 -7 9 C-8.32 8.34 -9.64 7.68 -11 7 C-10.28972656 6.57847656 -9.57945312 6.15695313 -8.84765625 5.72265625 C-7.92855469 5.17480469 -7.00945312 4.62695312 -6.0625 4.0625 C-5.14597656 3.51722656 -4.22945312 2.97195312 -3.28515625 2.41015625 C-1.11587323 1.19267827 -1.11587323 1.19267827 0 0 Z " fill="#190528" transform="translate(187,189)"/>
<path d="M0 0 C-0.33 1.65 -0.66 3.3 -1 5 C-4.01031744 5.93423645 -4.86650268 6.04449911 -8 5 C-8 5.66 -8 6.32 -8 7 C-9.32 6.67 -10.64 6.34 -12 6 C-10.37829621 4.99466333 -8.75252763 3.99588093 -7.125 3 C-5.76761719 2.1646875 -5.76761719 2.1646875 -4.3828125 1.3125 C-2 0 -2 0 0 0 Z " fill="#9C70C3" transform="translate(121,184)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C-0.90673575 5.22797927 -0.90673575 5.22797927 -3 7 C-6.8125 7.375 -6.8125 7.375 -10 7 C-6.81404865 4.36021174 -3.69029454 1.89501612 0 0 Z " fill="#9B72BE" transform="translate(136,174)"/>
<path d="M0 0 C-1.26278132 3.78834395 -2.52112952 4.22011278 -6 6 C-7.33106622 6.34227417 -8.66400079 6.67751743 -10 7 C-10.66 7.66 -11.32 8.32 -12 9 C-12.66 8.34 -13.32 7.68 -14 7 C-12.04480616 5.82807953 -10.0857461 4.6626071 -8.125 3.5 C-7.03445312 2.8503125 -5.94390625 2.200625 -4.8203125 1.53125 C-2 0 -2 0 0 0 Z " fill="#8F68B0" transform="translate(192,143)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C0.42825925 2.20280161 -1.15787558 3.38681275 -2.75 4.5625 C-3.63171875 5.22378906 -4.5134375 5.88507812 -5.421875 6.56640625 C-8 8 -8 8 -10.328125 7.71484375 C-11.15570313 7.36099609 -11.15570313 7.36099609 -12 7 C-10.54312306 4.08624612 -8.49246097 3.64222221 -5.5625 2.3125 C-4.57378906 1.85488281 -3.58507812 1.39726562 -2.56640625 0.92578125 C-1.29603516 0.46751953 -1.29603516 0.46751953 0 0 Z " fill="#5A228A" transform="translate(102,24)"/>
<path d="M0 0 C1.98 0.66 3.96 1.32 6 2 C6 2.66 6 3.32 6 4 C6.928125 4.268125 7.85625 4.53625 8.8125 4.8125 C11.76240366 5.91148371 13.05615186 6.62418561 15 9 C10.99251347 8.41512359 8.14263232 7.15605425 4.6875 5.0625 C3.80449219 4.53785156 2.92148438 4.01320313 2.01171875 3.47265625 C1.34785156 2.98667969 0.68398437 2.50070313 0 2 C0 1.34 0 0.68 0 0 Z " fill="#602891" transform="translate(106,66)"/>
<path d="M0 0 C2.27057377 -0.05398987 4.54151288 -0.09278742 6.8125 -0.125 C8.07707031 -0.14820313 9.34164062 -0.17140625 10.64453125 -0.1953125 C14 0 14 0 17 2 C13.04 1.67 9.08 1.34 5 1 C5.66 2.32 6.32 3.64 7 5 C2.25 3.125 2.25 3.125 0 2 C0 1.34 0 0.68 0 0 Z " fill="#471C6B" transform="translate(139,46)"/>
<path d="M0 0 C4.10110762 1.40398279 6.98089159 3.37087038 10.3125 6.125 C11.19550781 6.84945312 12.07851562 7.57390625 12.98828125 8.3203125 C13.65214844 8.87460937 14.31601563 9.42890625 15 10 C14.67 10.99 14.34 11.98 14 13 C9.20228499 8.78762713 4.44381694 4.58716587 0 0 Z " fill="#312C36" transform="translate(203,30)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C-1.3921875 2.37125 -1.3921875 2.37125 -2.8125 2.75 C-6.0827238 3.67491774 -6.0827238 3.67491774 -7.375 6.125 C-9 8 -9 8 -10.95703125 8.2578125 C-12.97317415 8.2507507 -14.98816546 8.13192358 -17 8 C-14 6 -14 6 -11.625 5.0625 C-8.88167698 3.95210735 -6.50974177 2.56010975 -4 1 C-2 0 -2 0 0 0 Z " fill="#19052E" transform="translate(197,218)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C-0.64 5.62 -3.28 10.24 -6 15 C-6.33 14.01 -6.66 13.02 -7 12 C-5.739069 9.56820449 -4.45423004 7.3075803 -3 5 C-2.4225 4.030625 -1.845 3.06125 -1.25 2.0625 C-0.8375 1.381875 -0.425 0.70125 0 0 Z " fill="#18131A" transform="translate(243,173)"/>
<path d="M0 0 C3.96 1.98 3.96 1.98 8 4 C7.67 4.66 7.34 5.32 7 6 C5.35 5.67 3.7 5.34 2 5 C2 4.01 2 3.02 2 2 C1.34 2 0.68 2 0 2 C0 1.34 0 0.68 0 0 Z M-4 4 C-1.03 4.495 -1.03 4.495 2 5 C2 5.66 2 6.32 2 7 C0.02 6.34 -1.96 5.68 -4 5 C-4 4.67 -4 4.34 -4 4 Z " fill="#190927" transform="translate(184,104)"/>
<path d="M0 0 C-1 3 -1 3 -3.875 4.6875 C-7 6 -7 6 -10 6 C-10 6.66 -10 7.32 -10 8 C-11.32 7.67 -12.64 7.34 -14 7 C-12.04480616 5.82807953 -10.0857461 4.6626071 -8.125 3.5 C-7.03445312 2.8503125 -5.94390625 2.200625 -4.8203125 1.53125 C-2 0 -2 0 0 0 Z " fill="#1F0E29" transform="translate(174,177)"/>
<path d="M0 0 C1.32 0.66 2.64 1.32 4 2 C2.68 2.33 1.36 2.66 0 3 C0.33 4.65 0.66 6.3 1 8 C0.67 7.34 0.34 6.68 0 6 C-1.66072849 5.31867549 -3.327767 4.65257873 -5 4 C-5.66 3.34 -6.32 2.68 -7 2 C-4.69 2 -2.38 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#1A082B" transform="translate(197,112)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C0.95285076 2.32477959 -0.11344669 3.63443746 -1.1875 4.9375 C-1.77917969 5.66839844 -2.37085937 6.39929687 -2.98046875 7.15234375 C-5.32505203 9.29738803 -6.88391498 9.66094412 -10 10 C-7.02911382 6.00073014 -3.87051275 3.07881696 0 0 Z " fill="#260B3F" transform="translate(90,56)"/>
<path d="M0 0 C0.625 1.875 0.625 1.875 1 4 C-1 6 -1 6 -3.625 6.125 C-4.40875 6.08375 -5.1925 6.0425 -6 6 C-5.25 3.5625 -5.25 3.5625 -4 1 C-1.875 0.1875 -1.875 0.1875 0 0 Z " fill="#040108" transform="translate(82,30)"/>
<path d="M0 0 C1.64574566 -0.02688151 3.29161413 -0.04634123 4.9375 -0.0625 C5.85402344 -0.07410156 6.77054687 -0.08570313 7.71484375 -0.09765625 C10 0 10 0 11 1 C13.32817964 1.36760731 15.6618385 1.70241581 18 2 C18 2.33 18 2.66 18 3 C11.59646678 3.2361959 6.15370839 2.823321 0 1 C0 0.67 0 0.34 0 0 Z " fill="#8D65AE" transform="translate(87,211)"/>
<path d="M0 0 C0.85178626 2.38500154 1.09806909 3.6665651 0.375 6.125 C-1.41247034 8.56245955 -3.1632534 9.10418528 -6 10 C-5.18957164 8.51969728 -4.37659652 7.04078858 -3.5625 5.5625 C-2.88380859 4.32693359 -2.88380859 4.32693359 -2.19140625 3.06640625 C-1 1 -1 1 0 0 Z " fill="#5E228E" transform="translate(212,171)"/>
<path d="M0 0 C3.96 1.98 7.92 3.96 12 6 C7.82412255 7.39195915 5.86525224 5.82323219 2 4 C1.34 4.66 0.68 5.32 0 6 C0 4.02 0 2.04 0 0 Z " fill="#A274C5" transform="translate(120,103)"/>
<path d="M0 0 C0.33 0 0.66 0 1 0 C1.33 2.97 1.66 5.94 2 9 C0.02 9.99 0.02 9.99 -2 11 C-1.125 3.375 -1.125 3.375 0 0 Z " fill="#5A2389" transform="translate(37,95)"/>
<path d="M0 0 C4.97093824 0.41153737 9.44508386 0.79600832 14 3 C14 3.66 14 4.32 14 5 C9.16371695 4.00956295 4.52381127 3.04301154 0 1 C0 0.67 0 0.34 0 0 Z " fill="#0B0A15" transform="translate(100,231)"/>
<path d="M0 0 C-1 3 -1 3 -3.25 4.6875 C-6.1364252 6.06511203 -7.85173236 6.26985151 -11 6 C-3.8 0 -3.8 0 0 0 Z " fill="#180328" transform="translate(123,176)"/>
<path d="M0 0 C0.95651196 2.58258228 1.03620881 3.8650399 0.3125 6.5625 C-1.12035293 9.22351258 -2.47085828 10.39821025 -5 12 C-5.66 11.67 -6.32 11.34 -7 11 C-6.21625 10.113125 -5.4325 9.22625 -4.625 8.3125 C-2.42843009 5.69279481 -1.06209659 3.28284399 0 0 Z " fill="#2C1A3D" transform="translate(222,139)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.566875 1.495 1.13375 1.99 0.6875 2.5 C-1.56381668 5.83528397 -2.671061 9.20303142 -4 13 C-4.33 13 -4.66 13 -5 13 C-4.25 5.375 -4.25 5.375 -2 2 C-1.34 2 -0.68 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#160328" transform="translate(47,69)"/>
<path d="M0 0 C0 0.99 0 1.98 0 3 C-4.62 3 -9.24 3 -14 3 C-13.67 2.34 -13.34 1.68 -13 1 C-8.71230214 -0.29930238 -4.43489655 -0.07516774 0 0 Z " fill="#523768" transform="translate(132,47)"/>
<path d="M0 0 C3.1875 0.875 3.1875 0.875 6 2 C1.25 6 1.25 6 -1 6 C-1 5.01 -1 4.02 -1 3 C-1.66 2.67 -2.32 2.34 -3 2 C-2.01 1.34 -1.02 0.68 0 0 Z " fill="#AA77D2" transform="translate(192,160)"/>
<path d="M0 0 C3.00617269 3.00617269 2.59585316 5.82381598 3 10 C2.01 10 1.02 10 0 10 C-0.19412181 8.52168779 -0.38012131 7.04230684 -0.5625 5.5625 C-0.66691406 4.73878906 -0.77132812 3.91507813 -0.87890625 3.06640625 C-0.91886719 2.38449219 -0.95882812 1.70257813 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#AA7CD2" transform="translate(67,185)"/>
<path d="M0 0 C4.94026549 4.71570796 4.94026549 4.71570796 5.125 8.6875 C5.08375 9.450625 5.0425 10.21375 5 11 C4.34 11 3.68 11 3 11 C2.49632243 9.54293274 1.99717444 8.08429904 1.5 6.625 C1.2215625 5.81289062 0.943125 5.00078125 0.65625 4.1640625 C0 2 0 2 0 0 Z " fill="#5A2282" transform="translate(39,159)"/>
<path d="M0 0 C1.65 0 3.3 0 5 0 C5 0.66 5 1.32 5 2 C5.99 1.67 6.98 1.34 8 1 C8 1.66 8 2.32 8 3 C8.99 3 9.98 3 11 3 C11.33 3.99 11.66 4.98 12 6 C10.55903414 5.57405412 9.12231288 5.13373367 7.6875 4.6875 C6.88699219 4.44386719 6.08648437 4.20023437 5.26171875 3.94921875 C2.90035427 2.95817977 1.66120007 1.91925057 0 0 Z " fill="#9971C0" transform="translate(152,85)"/>
<path d="M0 0 C0.98120464 3.05263664 0.98120464 4.94736336 0 8 C-0.66 8 -1.32 8 -2 8 C-2 8.99 -2 9.98 -2 11 C-2.66 11 -3.32 11 -4 11 C-3.48964169 6.6109185 -2.47785723 3.66291938 0 0 Z " fill="#582385" transform="translate(43,80)"/>
<path d="M0 0 C6.52307692 0.49230769 6.52307692 0.49230769 8.9375 3.0625 C9.288125 3.701875 9.63875 4.34125 10 5 C5.59885603 4.49701212 3.28804981 2.91227269 0 0 Z " fill="#9369B1" transform="translate(128,71)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C0 4 0 4 -2.1640625 4.51171875 C-2.97617188 4.56972656 -3.78828125 4.62773437 -4.625 4.6875 C-5.85089844 4.78611328 -5.85089844 4.78611328 -7.1015625 4.88671875 C-7.72804688 4.92410156 -8.35453125 4.96148437 -9 5 C-6.06626269 3.04417512 -3.21783702 1.43775696 0 0 Z " fill="#572380" transform="translate(121,213)"/>
<path d="M0 0 C1.670625 0.061875 1.670625 0.061875 3.375 0.125 C0.28076832 3.21923168 -3.1773812 4.06206005 -7.5 4.25 C-8.20125 4.20875 -8.9025 4.1675 -9.625 4.125 C-9.00625 3.83625 -8.3875 3.5475 -7.75 3.25 C-1.72336066 0.05942623 -1.72336066 0.05942623 0 0 Z " fill="#5E258D" transform="translate(170.625,226.875)"/>
<path d="M0 0 C3.63 1.65 7.26 3.3 11 5 C7 6 7 6 3.8125 4.75 C1 3 1 3 0 0 Z " fill="#100018" transform="translate(85,218)"/>
<path d="M0 0 C-1.28524261 0.86380259 -2.57842419 1.71580369 -3.875 2.5625 C-4.59429687 3.03816406 -5.31359375 3.51382813 -6.0546875 4.00390625 C-6.69664063 4.33261719 -7.33859375 4.66132813 -8 5 C-8.66 4.67 -9.32 4.34 -10 4 C-4.4 -2.2 -4.4 -2.2 0 0 Z " fill="#A176C2" transform="translate(128,203)"/>
<path d="M0 0 C-0.64544429 3.48539917 -2.10134397 6.02819057 -4 9 C-4 7.33333333 -4 5.66666667 -4 4 C-4.66 3.67 -5.32 3.34 -6 3 C-2.25 0 -2.25 0 0 0 Z " fill="#421D63" transform="translate(211,162)"/>
<path d="M0 0 C1.65 0 3.3 0 5 0 C1.4912812 3.09592835 -1.49197399 4.74194623 -6 6 C-6.33 5.34 -6.66 4.68 -7 4 C-6.030625 3.71125 -5.06125 3.4225 -4.0625 3.125 C-0.89335797 2.35785318 -0.89335797 2.35785318 0 0 Z " fill="#672B9D" transform="translate(161,150)"/>
<path d="M0 0 C-1.875 3.875 -1.875 3.875 -3 5 C-4.99958364 5.04080783 -7.00045254 5.04254356 -9 5 C-2.87096774 0 -2.87096774 0 0 0 Z " fill="#5B2588" transform="translate(136,146)"/>
<path d="M0 0 C1.98 0.66 3.96 1.32 6 2 C5.67 5.3 5.34 8.6 5 12 C4.34 12 3.68 12 3 12 C3.061875 10.7625 3.12375 9.525 3.1875 8.25 C3.20362826 5.21788698 3.10651023 4.17751704 1.5 1.5 C1.005 1.005 0.51 0.51 0 0 Z " fill="#5E288B" transform="translate(159,118)"/>
<path d="M0 0 C0 1.65 0 3.3 0 5 C-1.175625 5.4640625 -1.175625 5.4640625 -2.375 5.9375 C-4.92330128 6.92875038 -4.92330128 6.92875038 -7 8 C-5.9363919 4.72054168 -4.1945074 0 0 0 Z " fill="#9D72BD" transform="translate(82,75)"/>
<path d="M0 0 C5.27749285 0.53851968 9.25645564 1.77343836 14 4 C14 4.33 14 4.66 14 5 C8.72676192 5.68041782 4.60611289 3.24786337 0 1 C0 0.67 0 0.34 0 0 Z " fill="#2F0F50" transform="translate(162,43)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C-2.296875 5.00390625 -2.296875 5.00390625 -4 6 C-6.203125 5.65234375 -6.203125 5.65234375 -8 5 C-6.71475739 4.13619741 -5.42157581 3.28419631 -4.125 2.4375 C-3.04605469 1.72400391 -3.04605469 1.72400391 -1.9453125 0.99609375 C-1.30335938 0.66738281 -0.66140625 0.33867187 0 0 Z " fill="#5D268D" transform="translate(168,186)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C0.06745228 3.0245738 -1.63158688 4.42105792 -4 6 C-6.1875 5.625 -6.1875 5.625 -8 5 C-6.71475739 4.13619741 -5.42157581 3.28419631 -4.125 2.4375 C-3.04605469 1.72400391 -3.04605469 1.72400391 -1.9453125 0.99609375 C-1.30335938 0.66738281 -0.66140625 0.33867187 0 0 Z " fill="#1B052D" transform="translate(131,170)"/>
<path d="M0 0 C2.9375 0.8125 2.9375 0.8125 6 2 C6.33 2.99 6.66 3.98 7 5 C4.625 4.75 4.625 4.75 2 4 C0.6875 1.9375 0.6875 1.9375 0 0 Z " fill="#6E2BAB" transform="translate(201,80)"/>
<path d="M0 0 C1.32 0.33 2.64 0.66 4 1 C1.36 2.98 -1.28 4.96 -4 7 C-4 5.68 -4 4.36 -4 3 C-2.68 3 -1.36 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#6C2AA2" transform="translate(85,57)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C-0.99 2.495 -0.99 2.495 -2 3 C-2 3.99 -2 4.98 -2 6 C-3.65 5.67 -5.3 5.34 -7 5 C-6 2 -6 2 -4.0625 0.8125 C-2 0 -2 0 0 0 Z " fill="#7E5D9D" transform="translate(109,53)"/>
<path d="M0 0 C-2.85584773 1.90389849 -4.9311762 2.69462177 -8.1875 3.625 C-9.08855469 3.88539062 -9.98960938 4.14578125 -10.91796875 4.4140625 C-11.94857422 4.70410156 -11.94857422 4.70410156 -13 5 C-9.64179229 -0.03731156 -5.80630228 -0.27006057 0 0 Z " fill="#19032B" transform="translate(112,21)"/>
<path d="M0 0 C0.90105469 0.02707031 1.80210937 0.05414063 2.73046875 0.08203125 C3.76107422 0.13423828 3.76107422 0.13423828 4.8125 0.1875 C4.8125 0.5175 4.8125 0.8475 4.8125 1.1875 C2.1725 1.1875 -0.4675 1.1875 -3.1875 1.1875 C-3.1875 1.8475 -3.1875 2.5075 -3.1875 3.1875 C-4.8375 3.1875 -6.4875 3.1875 -8.1875 3.1875 C-5.67753317 0.01043235 -3.96125134 -0.15433447 0 0 Z " fill="#5A2589" transform="translate(131.1875,209.8125)"/>
<path d="M0 0 C0.763125 0.309375 1.52625 0.61875 2.3125 0.9375 C4.18789677 1.67893593 6.08684652 2.36228217 8 3 C8.33 4.65 8.66 6.3 9 8 C7.68388323 7.04663979 6.37221039 6.08714226 5.0625 5.125 C4.33160156 4.59132813 3.60070312 4.05765625 2.84765625 3.5078125 C1 2 1 2 0 0 Z " fill="#632694" transform="translate(197,61)"/>
<path d="M0 0 C1.65 1.65 3.3 3.3 5 5 C1.79604584 5 -0.09399739 4.25664978 -3 3 C-3 2.34 -3 1.68 -3 1 C-2.01 0.67 -1.02 0.34 0 0 Z " fill="#A074C4" transform="translate(117,61)"/>
<path d="M0 0 C1.32 0.66 2.64 1.32 4 2 C2.35 3.32 0.7 4.64 -1 6 C-1.625 4.125 -1.625 4.125 -2 2 C-1.34 1.34 -0.68 0.68 0 0 Z " fill="#6C28A6" transform="translate(215,198)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C4.125 6.75 4.125 6.75 3 9 C0 2.25 0 2.25 0 0 Z " fill="#7C5A9A" transform="translate(63,184)"/>
<path d="M0 0 C1.65 0.99 3.3 1.98 5 3 C4.6875 4.9375 4.6875 4.9375 4 7 C3.01 7.33 2.02 7.66 1 8 C1.33 6.02 1.66 4.04 2 2 C1.34 2 0.68 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#8D6AAA" transform="translate(152,121)"/>
<path d="M0 0 C2.3125 0.1875 2.3125 0.1875 5 1 C6.8125 3.5625 6.8125 3.5625 8 6 C5.33333333 4.66666667 2.66666667 3.33333333 0 2 C0 1.34 0 0.68 0 0 Z " fill="#662B97" transform="translate(144,108)"/>
<path d="M0 0 C1.485 0.99 1.485 0.99 3 2 C3 2.66 3 3.32 3 4 C3.66 4.33 4.32 4.66 5 5 C5 6.65 5 8.3 5 10 C2.81434857 7.81434857 1.45914246 5.71931095 0 3 C0 2.01 0 1.02 0 0 Z " fill="#642795" transform="translate(221,94)"/>
<path d="M0 0 C1.5 1.375 1.5 1.375 3 3 C3 3.66 3 4.32 3 5 C-0.68754757 4.50168276 -2.60490662 3.89932357 -5 1 C-2.525 1.495 -2.525 1.495 0 2 C0 1.34 0 0.68 0 0 Z " fill="#451C66" transform="translate(208,83)"/>
<path d="M0 0 C3.59391114 1.33488128 6.75490696 2.96022723 10 5 C8 6 8 6 5 5.3125 C2 4 2 4 0.625 1.875 C0.41875 1.25625 0.2125 0.6375 0 0 Z " fill="#2B0A42" transform="translate(156,57)"/>
<path d="M0 0 C1.48206495 0.254496 2.96068615 0.52911762 4.4375 0.8125 C5.67306641 1.03873047 5.67306641 1.03873047 6.93359375 1.26953125 C7.95646484 1.63111328 7.95646484 1.63111328 9 2 C9.33 2.99 9.66 3.98 10 5 C6.08788267 3.84414715 3.1254959 2.64465038 0 0 Z " fill="#150F1A" transform="translate(89,226)"/>
<path d="M0 0 C1.98 0 3.96 0 6 0 C3.82575883 2.50037734 2.26954202 3.43628586 -1 4 C-0.67 2.68 -0.34 1.36 0 0 Z " fill="#A476C6" transform="translate(131,197)"/>
<path d="M0 0 C0.66 0.99 1.32 1.98 2 3 C0.35 4.32 -1.3 5.64 -3 7 C-3 3.48283697 -2.17554415 2.62878252 0 0 Z " fill="#1F0831" transform="translate(231,184)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C1.8125 1.8125 1.8125 1.8125 1 4 C-1.5625 5.75 -1.5625 5.75 -4 7 C-4 6.01 -4 5.02 -4 4 C-3.01 4 -2.02 4 -1 4 C-0.67 2.68 -0.34 1.36 0 0 Z " fill="#9F72BF" transform="translate(213,149)"/>
<path d="M0 0 C1.39195915 4.17587745 -0.17676781 6.13474776 -2 10 C-2.33 10 -2.66 10 -3 10 C-2.25 2.25 -2.25 2.25 0 0 Z " fill="#9C74C1" transform="translate(223,134)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C4.09350689 3.4019487 4.17942163 6.05272412 4 10 C1.81024227 6.71536341 1.00193437 3.79303725 0 0 Z " fill="#1F0631" transform="translate(241,85)"/>
<path d="M0 0 C1.32 0.33 2.64 0.66 4 1 C4.33 3.64 4.66 6.28 5 9 C2.82615436 6.82615436 1.47801239 4.68729526 0 2 C0 1.34 0 0.68 0 0 Z " fill="#5C248F" transform="translate(216,85)"/>
<path d="M0 0 C0 1.65 0 3.3 0 5 C-1.32 4.67 -2.64 4.34 -4 4 C-4 3.34 -4 2.68 -4 2 C-4.66 1.67 -5.32 1.34 -6 1 C-3.92446352 0.4465236 -2.15634036 0 0 0 Z " fill="#9F6FC2" transform="translate(128,66)"/>
</svg>

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

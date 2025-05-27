// custom_extensions/frontend/src/components/PdfLessonDisplay.tsx
"use client";

import React from 'react';
import {
  PdfLessonData,
  AnyContentBlock,
  HeadlineBlock,
  ParagraphBlock,
  BulletListBlock,
  NumberedListBlock,
  AlertBlock,
  SectionBreakBlock,
  ListItem,
} from '@/types/pdfLesson';
import {
  AlertCircle,
  CheckCircle,
  Info,
  XCircle,
  ChevronRight,
  Minus,
  Type,
  List,
  ListOrdered,
  Award,
  Brain,
  BookOpen,
  Edit3,
  Lightbulb,
  Search,
  Compass,
  CloudDrizzle,
  EyeOff,
  ClipboardCheck,
  AlertTriangle,
  Clock, // For lesson time
  ChevronsRight, // Alternative bullet icon if needed
  Star, // Example for a different bullet icon
  ArrowRight, // Example for another bullet
  Circle, // For numbered list items
} from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  alertCircle: AlertCircle,
  checkCircle: CheckCircle,
  info: Info,
  xCircle: XCircle,
  chevronRight: ChevronRight,
  type: Type,
  list: List,
  listOrdered: ListOrdered,
  award: Award,
  brain: Brain,
  bookOpen: BookOpen,
  edit3: Edit3,
  lightbulb: Lightbulb,
  search: Search,
  compass: Compass,
  cloudDrizzle: CloudDrizzle,
  eyeOff: EyeOff,
  clipboardCheck: ClipboardCheck,
  alertTriangle: AlertTriangle,
  clock: Clock,
  chevronsRight: ChevronsRight,
  star: Star,
  arrowRight: ArrowRight,
  circle: Circle, // For numbered lists
  default: Minus,
};

// Define your theme colors (or import from Tailwind config)
const THEME_COLORS = {
  primaryText: 'text-gray-700', // Adjusted from image
  headingText: 'text-gray-900',
  accentBlue: 'text-sky-700', // Adjusted for more saturation like image
  accentBlueBg: 'bg-sky-600',
  lightAccentBg: 'bg-sky-50',
  lightBorder: 'border-sky-100',
  mutedText: 'text-gray-500',
  defaultBorder: 'border-gray-300',
  underlineAccent: 'border-sky-500',

  alertInfoBg: 'bg-blue-50',
  alertInfoBorder: 'border-blue-400',
  alertInfoText: 'text-blue-700',
  alertInfoIcon: 'text-blue-500',

  alertSuccessBg: 'bg-green-50',
  alertSuccessBorder: 'border-green-400',
  alertSuccessText: 'text-green-700',
  alertSuccessIcon: 'text-green-500',

  alertWarningBg: 'bg-yellow-50', // Matches "Important Note"
  alertWarningBorder: 'border-yellow-400',
  alertWarningText: 'text-yellow-800', // Darker for better contrast
  alertWarningIcon: 'text-yellow-500',

  alertDangerBg: 'bg-red-50',
  alertDangerBorder: 'border-red-400',
  alertDangerText: 'text-red-700',
  alertDangerIcon: 'text-red-500',
};

const getAlertColors = (alertType: AlertBlock['alertType']) => {
  switch (alertType) {
    case 'info':
      return {
        bgColor: THEME_COLORS.alertInfoBg, borderColor: THEME_COLORS.alertInfoBorder, textColor: THEME_COLORS.alertInfoText,
        iconColorClass: THEME_COLORS.alertInfoIcon, Icon: Info,
      };
    case 'success':
      return {
        bgColor: THEME_COLORS.alertSuccessBg, borderColor: THEME_COLORS.alertSuccessBorder, textColor: THEME_COLORS.alertSuccessText,
        iconColorClass: THEME_COLORS.alertSuccessIcon, Icon: CheckCircle,
      };
    case 'warning':
      return {
        bgColor: THEME_COLORS.alertWarningBg, borderColor: THEME_COLORS.alertWarningBorder, textColor: THEME_COLORS.alertWarningText,
        iconColorClass: THEME_COLORS.alertWarningIcon, Icon: AlertTriangle, // Using AlertTriangle for warning
      };
    case 'danger':
      return {
        bgColor: THEME_COLORS.alertDangerBg, borderColor: THEME_COLORS.alertDangerBorder, textColor: THEME_COLORS.alertDangerText,
        iconColorClass: THEME_COLORS.alertDangerIcon, Icon: XCircle,
      };
    default: // Fallback to info style
      return {
        bgColor: THEME_COLORS.alertInfoBg, borderColor: THEME_COLORS.alertInfoBorder, textColor: THEME_COLORS.alertInfoText,
        iconColorClass: THEME_COLORS.alertInfoIcon, Icon: Info,
      };
  }
};

const RenderBlock: React.FC<{ block: AnyContentBlock; depth?: number }> = ({ block, depth = 0 }) => {
  switch (block.type) {
    case 'headline': {
      const { level, text, iconName, backgroundColor, textColor: headlineTextColor } = block as HeadlineBlock;
      const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
      const IconComponent = iconName ? iconMap[iconName] || null : null;
      
      let textStyleClass = '';
      let bottomMargin = 'mb-4'; // Default bottom margin

      // Styling based on level, inspired by the target image
      if (level === 1) { // Corresponds to main lesson title, usually handled outside RenderBlock
        textStyleClass = `text-3xl font-bold ${THEME_COLORS.headingText}`;
        bottomMargin = 'mb-2'; // Smaller margin as it's followed by lesson time
      } else if (level === 2) { // e.g., "Lesson Structure", "Materials"
        textStyleClass = `text-2xl font-semibold ${THEME_COLORS.headingText} pt-4 pb-2 border-b-2 ${THEME_COLORS.underlineAccent}`;
        bottomMargin = 'mb-6 mt-8'; // More space around H2s
      } else if (level === 3) { // e.g., "Introduction to The Gilded Spoon"
        textStyleClass = `text-xl font-semibold ${THEME_COLORS.accentBlue}`;
        bottomMargin = 'mb-3 mt-5';
      } else if (level === 4) { // e.g., "Objective:", "Main Points:"
        textStyleClass = `text-lg font-medium ${THEME_COLORS.headingText}`;
        bottomMargin = 'mb-2 mt-4';
      }
      // Nested headline styling adjustments
      if (depth > 0) {
        if (level === 3) textStyleClass = `text-lg font-semibold ${THEME_COLORS.accentBlue}`;
        else if (level === 4) textStyleClass = `text-md font-medium ${THEME_COLORS.headingText}`;
        bottomMargin = 'mb-2 mt-2'; // Less margin when nested
      }

      return (
        <Tag
          className={`flex items-center ${textStyleClass} ${bottomMargin}`}
          style={{
            backgroundColor: backgroundColor || 'transparent',
            color: headlineTextColor || undefined, // Use Pydantic provided color if available
            padding: backgroundColor ? '0.5rem 0.75rem' : undefined, // More horizontal padding if bg
            borderRadius: backgroundColor ? '0.375rem' : undefined,
          }}
        >
          {IconComponent && <IconComponent size={level > 2 ? 18 : 22} className="mr-2.5 shrink-0" />}
          {text}
        </Tag>
      );
    }
    case 'paragraph': {
      return (
        <p className={`${THEME_COLORS.primaryText} leading-relaxed ${depth > 0 ? 'mb-2 text-sm' : 'mb-4 text-base'}`}>
          {(block as ParagraphBlock).text}
        </p>
      );
    }
    case 'bullet_list': {
      const { items: bulletItems, iconName: bulletIconNameProp } = block as BulletListBlock;
      // Default to a more subtle bullet if not specified, or use the one from props
      const BulletIcon = bulletIconNameProp ? iconMap[bulletIconNameProp] || ChevronsRight : ChevronsRight;
      // Indentation based on depth
      const paddingLeftClass = depth === 0 ? 'pl-5' : depth === 1 ? 'pl-10' : 'pl-16';

      return (
        <ul className={`list-none ${paddingLeftClass} mb-3 space-y-1.5`}>
          {bulletItems.map((item, index) => {
            if (typeof item === 'string') {
              return (
                <li key={index} className={`flex items-start ${THEME_COLORS.primaryText} text-sm py-0.5`}>
                  <BulletIcon size={14} className={`mr-2 mt-[3px] shrink-0 ${THEME_COLORS.accentBlue}`} />
                  <span>{item}</span>
                </li>
              );
            } else {
              return (
                <li key={index} className="list-none py-0.5">
                  <RenderBlock block={item as AnyContentBlock} depth={depth + 1} />
                </li>
              );
            }
          })}
        </ul>
      );
    }
    case 'numbered_list': {
      const { items: numberedItems } = block as NumberedListBlock;
      const paddingLeftClass = depth === 0 ? 'pl-0' : depth === 1 ? 'pl-5' : 'pl-10'; // Numbered lists handle their own marker padding

      return (
        <ol className={`list-none mb-3 space-y-1.5 ${paddingLeftClass}`}>
          {numberedItems.map((item, index) => {
            const itemNumber = `${depth > 0 ? `${String.fromCharCode(97 + depth -1)}.` : ''}${index + 1}.`;
            if (typeof item === 'string') {
              return (
                <li key={index} className={`flex items-start ${THEME_COLORS.primaryText} text-sm py-0.5`}>
                  <span className={`mr-2 shrink-0 font-medium ${THEME_COLORS.accentBlue}`}>{itemNumber}</span>
                  <span>{item}</span>
                </li>
              );
            } else {
              // For nested blocks, we don't add a number prefix here, the block renders itself
              return (
                <li key={index} className="list-none py-0.5">
                   {/* If the nested item is a list itself, it will get its own numbering/bullets */}
                  <RenderBlock block={item as AnyContentBlock} depth={depth + 1} />
                </li>
              );
            }
          })}
        </ol>
      );
    }
    case 'alert': {
      const alertBlock = block as AlertBlock;
      const {
        bgColor, borderColor, textColor, iconColorClass, Icon
      } = getAlertColors(alertBlock.alertType);
      
      const CustomIcon = alertBlock.iconName ? iconMap[alertBlock.iconName] || Icon : Icon;
      const finalBgColor = alertBlock.backgroundColor || bgColor;
      const finalBorderColor = alertBlock.borderColor || borderColor;
      const finalTextColor = alertBlock.textColor || textColor;
      const finalIconColorClass = alertBlock.iconColor ? '' : iconColorClass; // If iconColor prop is set, use it directly
      const finalIconColorStyle = alertBlock.iconColor || undefined; // For direct style override

      return (
        <div
          className={`p-4 my-5 border-l-4 rounded-r-md ${finalBgColor} ${finalBorderColor} ${depth > 0 ? 'ml-4' : ''}`}
          style={{
            backgroundColor: alertBlock.backgroundColor ? alertBlock.backgroundColor : undefined, // Allow direct Pydantic override
            borderColor: alertBlock.borderColor ? alertBlock.borderColor : undefined,
          }}
        >
          <div className="flex">
            <div className="shrink-0 pt-0.5">
              <CustomIcon size={20} className={`${finalIconColorClass}`} style={{ color: finalIconColorStyle }} />
            </div>
            <div className="ml-3">
              {alertBlock.title && (
                <h3 className={`text-sm font-semibold ${finalTextColor}`} style={{ color: alertBlock.textColor ? alertBlock.textColor : undefined }}>
                  {alertBlock.title}
                </h3>
              )}
              <div className={`text-sm ${finalTextColor} ${alertBlock.title ? 'mt-1' : ''}`} style={{ color: alertBlock.textColor ? alertBlock.textColor : undefined }}>
                {alertBlock.text}
              </div>
            </div>
          </div>
        </div>
      );
    }
    case 'section_break': {
        const sb = block as SectionBreakBlock;
        if (sb.style === 'none') return <div className="my-6"></div>; 
        let breakStyle = `border-gray-200`; // Lighter for a more subtle break
        if (sb.style === 'dashed') breakStyle = `border-dashed border-gray-300`;
        return <hr className={`my-8 ${breakStyle}`} />;
    }
    default:
      const exhaustiveCheck: never = block; 
      return <div className="text-red-500">Unsupported block type: {(exhaustiveCheck as any)?.type}</div>;
  }
};

interface PdfLessonDisplayProps {
  data?: PdfLessonData | null;
  // Assuming lessonTime might be added to PdfLessonData or passed separately
  lessonTime?: string; 
}

const PdfLessonDisplay: React.FC<PdfLessonDisplayProps> = ({ data, lessonTime }) => {
  if (!data || !data.contentBlocks || data.contentBlocks.length === 0) {
    return <div className="p-8 text-center text-gray-500">No lesson content available to display.</div>;
  }

  return (
    // Added a light gray background to the parent page, if this component is the full page.
    // If it's part of a larger page, this bg-slate-50 might be on the <body> or a higher div.
    <div className="font-['Inter',_sans-serif] bg-white p-6 sm:p-8 md:p-10 shadow-xl rounded-lg max-w-4xl mx-auto my-8">
      {data.lessonTitle && (
        <div className="mb-6 pb-4 border-b-2 ${THEME_COLORS.underlineAccent}">
          <h1 className={`text-3xl sm:text-4xl font-bold ${THEME_COLORS.headingText} mb-2`}>
            {data.lessonTitle}
          </h1>
          {/* Placeholder for lesson time - you'll need to get this data */}
          {lessonTime && (
            <div className={`flex items-center ${THEME_COLORS.mutedText} text-sm`}>
              <Clock size={16} className="mr-1.5" />
              <span>{lessonTime}</span>
            </div>
          )}
        </div>
      )}
      <div className="max-w-none">
        {data.contentBlocks.map((block, index) => (
          <RenderBlock key={index} block={block} />
        ))}
      </div>
    </div>
  );
};

export default PdfLessonDisplay;

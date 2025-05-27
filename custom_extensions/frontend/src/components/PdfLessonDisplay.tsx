// custom_extensions/frontend/src/components/PdfLessonDisplay.tsx
"use client";

import React from 'react'; // MODIFIED: Added React import
import {
  PdfLessonData,
  ContentBlock,
  HeadlineBlock,
  ParagraphBlock,
  BulletListBlock,
  NumberedListBlock,
  AlertBlock,
  SectionBreakBlock,
} from '@/types/pdfLesson'; // Adjust path if your types are elsewhere
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
  Compass, // Added for detailed JSON example
  CloudDrizzle, // Added
  EyeOff, // Added
  ClipboardCheck // Added
} from 'lucide-react';

// Helper to map icon names to Lucide components
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
  compass: Compass, // Added
  cloudDrizzle: CloudDrizzle, // Added
  eyeOff: EyeOff, // Added
  clipboardCheck: ClipboardCheck, // Added
  default: Minus,
};

const getAlertColors = (alertType: AlertBlock['alertType']) => {
  switch (alertType) {
    case 'info':
      return {
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-400',
        textColor: 'text-blue-700',
        iconColorClass: 'text-blue-500',
        Icon: Info,
      };
    case 'success':
      return {
        bgColor: 'bg-green-50',
        borderColor: 'border-green-400',
        textColor: 'text-green-700',
        iconColorClass: 'text-green-500',
        Icon: CheckCircle,
      };
    case 'warning':
      return {
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-400',
        textColor: 'text-yellow-700',
        iconColorClass: 'text-yellow-500',
        Icon: AlertCircle,
      };
    case 'danger':
      return {
        bgColor: 'bg-red-50',
        borderColor: 'border-red-400',
        textColor: 'text-red-700',
        iconColorClass: 'text-red-500',
        Icon: XCircle,
      };
    default:
      return {
        bgColor: 'bg-gray-50',
        borderColor: 'border-gray-400',
        textColor: 'text-gray-700',
        iconColorClass: 'text-gray-500',
        Icon: Info,
      };
  }
};

const RenderBlock: React.FC<{ block: ContentBlock }> = ({ block }) => {
  switch (block.type) {
    case 'headline': { 
      const { level, text, iconName, backgroundColor, textColor: headlineTextColor } = block as HeadlineBlock;
      const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
      const IconComponent = iconName ? iconMap[iconName] || iconMap.default : null;
      let textStyleClass = '';
      if (level === 1) textStyleClass = 'text-3xl font-bold mt-6 mb-4';
      else if (level === 2) textStyleClass = 'text-2xl font-semibold mt-5 mb-3';
      else if (level === 3) textStyleClass = 'text-xl font-semibold mt-4 mb-2';
      else if (level === 4) textStyleClass = 'text-lg font-semibold mt-3 mb-1';
      return (
        <Tag
          className={`flex items-center ${textStyleClass} ${headlineTextColor ? '' : 'text-gray-800'}`}
          style={{
            backgroundColor: backgroundColor || 'transparent',
            color: headlineTextColor || undefined,
            padding: backgroundColor ? '0.5rem' : undefined,
            borderRadius: backgroundColor ? '0.25rem' : undefined,
          }}
        >
          {IconComponent && <IconComponent size={level > 2 ? 20 : 24} className="mr-2 shrink-0" />}
          {text}
        </Tag>
      );
    }
    case 'paragraph': { 
      return <p className="text-gray-700 mb-4 leading-relaxed">{(block as ParagraphBlock).text}</p>;
    }
    case 'bullet_list': { 
      const { items: bulletItems, iconName: bulletIconName } = block as BulletListBlock;
      const BulletIcon = bulletIconName ? iconMap[bulletIconName] || ChevronRight : ChevronRight;
      return (
        <ul className="list-none pl-5 mb-4 space-y-1">
          {bulletItems.map((item, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <BulletIcon size={16} className="mr-2 mt-1 shrink-0 text-gray-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }
    case 'numbered_list': { 
      return (
        <ol className="list-decimal pl-5 mb-4 space-y-1 text-gray-700">
          {(block as NumberedListBlock).items.map((item, index) => (
            <li key={index} className="ml-2">{item}</li>
          ))}
        </ol>
      );
    }
    case 'alert': { 
      const alertBlock = block as AlertBlock;
      const { 
        bgColor: defaultBgColor, 
        borderColor: defaultBorderColor, 
        textColor: defaultTextColor, 
        iconColorClass: defaultIconColorClass, 
        Icon: DefaultAlertIcon 
      } = getAlertColors(alertBlock.alertType);
      
      const CustomIcon = alertBlock.iconName ? iconMap[alertBlock.iconName] || DefaultAlertIcon : DefaultAlertIcon;

      const finalBgColor = alertBlock.backgroundColor || defaultBgColor;
      const finalBorderColor = alertBlock.borderColor || defaultBorderColor;
      const finalTextColor = alertBlock.textColor || defaultTextColor;
      const finalIconColorClass = alertBlock.iconColor ? '' : defaultIconColorClass; 
      const finalIconColorStyle = alertBlock.iconColor || undefined;

      return (
        <div
          className={`p-4 mb-4 border-l-4 rounded-md ${finalBgColor} ${finalBorderColor}`}
          style={{
            backgroundColor: alertBlock.backgroundColor ? alertBlock.backgroundColor : undefined, 
            borderColor: alertBlock.borderColor ? alertBlock.borderColor : undefined, 
          }}
        >
          <div className="flex">
            <div className="shrink-0">
              <CustomIcon
                size={20}
                className={`${finalIconColorClass}`} 
                style={{ color: finalIconColorStyle }} 
              />
            </div>
            <div className="ml-3">
              {alertBlock.title && (
                <h3
                  className={`text-sm font-medium ${finalTextColor}`}
                  style={{ color: alertBlock.textColor ? alertBlock.textColor : undefined }}
                >
                  {alertBlock.title}
                </h3>
              )}
              <div
                className={`text-sm ${finalTextColor} ${alertBlock.title ? 'mt-1' : ''}`}
                style={{ color: alertBlock.textColor ? alertBlock.textColor : undefined }}
              >
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
        let breakStyle = 'border-gray-300';
        if (sb.style === 'dashed') breakStyle = 'border-dashed border-gray-400';
        return <hr className={`my-8 ${breakStyle}`} />;
    }
    default:
      // Ensures TypeScript knows all cases are handled or a value is returned
      const exhaustiveCheck: never = block; 
      return <div className="text-red-500">Unsupported block type: {(exhaustiveCheck as any).type}</div>;
  }
};

interface PdfLessonDisplayProps {
  data?: PdfLessonData | null;
}

const PdfLessonDisplay: React.FC<PdfLessonDisplayProps> = ({ data }) => {
  if (!data || !data.contentBlocks || data.contentBlocks.length === 0) {
    return <div className="p-8 text-center text-gray-500">No lesson content available to display.</div>;
  }

  return (
    <div className="font-['Inter',_sans-serif] bg-white p-4 sm:p-6 md:p-8 shadow-lg rounded-lg">
      {data.lessonTitle && (
        <h1 className="text-4xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
          {data.lessonTitle}
        </h1>
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

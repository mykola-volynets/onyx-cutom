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
} from '@/types/pdfLesson'; // Assuming ListItem is part of AnyContentBlock
import {
  AlertCircle, CheckCircle, Info, XCircle, ChevronRight, Minus, Type, List, ListOrdered,
  Award, Brain, BookOpen, Edit3, Lightbulb, Search, Compass, CloudDrizzle, EyeOff,
  ClipboardCheck, AlertTriangle, Clock, ChevronsRight, Star, ArrowRight, Circle,
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
  circle: Circle,
  default: Minus,
};

const THEME_COLORS = {
  primaryText: 'text-gray-700',
  headingText: 'text-gray-900',
  subHeadingText: 'text-gray-800',
  accentBlue: 'text-sky-700',
  accentBlueBg: 'bg-sky-600',
  lightAccentBg: 'bg-sky-50',        
  veryLightAccentBg: 'bg-slate-100', 
  lightBorder: 'border-slate-300', 
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
  alertWarningBg: 'bg-yellow-50',
  alertWarningBorder: 'border-yellow-400',
  alertWarningText: 'text-yellow-800',
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
          iconColorClass: THEME_COLORS.alertWarningIcon, Icon: AlertTriangle,
        };
      case 'danger':
        return {
          bgColor: THEME_COLORS.alertDangerBg, borderColor: THEME_COLORS.alertDangerBorder, textColor: THEME_COLORS.alertDangerText,
          iconColorClass: THEME_COLORS.alertDangerIcon, Icon: XCircle,
        };
      default:
        return {
          bgColor: THEME_COLORS.alertInfoBg, borderColor: THEME_COLORS.alertInfoBorder, textColor: THEME_COLORS.alertInfoText,
          iconColorClass: THEME_COLORS.alertInfoIcon, Icon: Info,
        };
    }
};

const RenderBlock: React.FC<{ block: AnyContentBlock; depth?: number; isLastInMiniSection?: boolean }> = ({ block, depth = 0, isLastInMiniSection }) => {
  switch (block.type) {
    case 'headline': {
      const { level, text, iconName, backgroundColor, textColor: headlineTextColor } = block as HeadlineBlock;
      const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
      const IconComponent = iconName ? iconMap[iconName] || null : null;
      
      let textStyleClass = '';
      let bottomMargin = isLastInMiniSection ? 'mb-0' : 'mb-2'; 

      if (level === 1) {
        textStyleClass = `text-4xl lg:text-5xl font-bold ${THEME_COLORS.headingText}`;
        bottomMargin = isLastInMiniSection ? 'mb-0' : 'mb-3';
      } else if (level === 2) { 
        textStyleClass = `text-3xl lg:text-4xl font-semibold ${THEME_COLORS.headingText} pb-2 border-b-2 ${THEME_COLORS.underlineAccent}`;
        bottomMargin = isLastInMiniSection ? 'mb-0' : 'mb-5'; 
      } else if (level === 3) { 
        textStyleClass = `text-xl lg:text-2xl font-semibold ${THEME_COLORS.accentBlue}`;
        bottomMargin = isLastInMiniSection === false ? 'mb-1.5' : (isLastInMiniSection ? 'mb-0' : 'mb-2 mt-4');
      } else if (level === 4) { 
        textStyleClass = `text-lg lg:text-xl font-medium ${THEME_COLORS.subHeadingText}`;
        bottomMargin = isLastInMiniSection === false ? 'mb-1.5' : (isLastInMiniSection ? 'mb-0' : 'mb-1 mt-3');
      }

      if (depth > 0) {
        if (level === 3) textStyleClass = `text-lg font-semibold ${THEME_COLORS.accentBlue}`;
        else if (level === 4) textStyleClass = `text-base font-medium ${THEME_COLORS.subHeadingText}`;
        bottomMargin = isLastInMiniSection ? 'mb-0' : 'mb-1.5 mt-1.5';
      }

      return (
        <Tag
          className={`flex items-center ${textStyleClass} ${bottomMargin}`}
          style={{
            backgroundColor: backgroundColor || 'transparent',
            color: headlineTextColor || undefined,
            padding: backgroundColor ? '0.5rem 0.75rem' : undefined,
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
        <p className={`${THEME_COLORS.primaryText} leading-relaxed ${depth > 0 ? 'mb-1.5 text-sm' : 'mb-3 text-sm'}`}> 
          {(block as ParagraphBlock).text}
        </p>
      );
    }
    case 'bullet_list':
    case 'numbered_list': {
      // Type guard to access iconName only if it's a BulletListBlock
      const listIconName = block.type === 'bullet_list' ? (block as BulletListBlock).iconName : undefined;
      const { items } = block;
      const isNumbered = block.type === 'numbered_list';
      
      const BulletIcon = listIconName ? iconMap[listIconName] || ChevronsRight : ChevronsRight;
      
      let paddingLeftClass = '';
      if (depth === 0) paddingLeftClass = isNumbered ? 'pl-0' : 'pl-5';
      else if (depth === 1) paddingLeftClass = isNumbered ? 'pl-5' : 'pl-10';
      else paddingLeftClass = isNumbered ? 'pl-10' : 'pl-16';
      
      const ListTag = isNumbered ? 'ol' : 'ul';

      return (
        <ListTag className={`list-none ${paddingLeftClass} ${isLastInMiniSection ? 'mb-0' : 'mb-2.5'} space-y-1`}>
          {items.map((item, index) => {
            const itemNumber = isNumbered ? `${depth > 0 ? `${String.fromCharCode(97 + depth -1)}.` : ''}${index + 1}.` : '';
            const isLastItem = index === items.length - 1;

            if (typeof item === 'string') {
              return (
                <li key={index} className={`flex items-start ${THEME_COLORS.primaryText} text-xs py-0.5`}>
                  {isNumbered ? (
                    <span className={`mr-2 shrink-0 font-medium ${THEME_COLORS.accentBlue}`}>{itemNumber}</span>
                  ) : (
                    <BulletIcon size={12} className={`mr-2 mt-[3px] shrink-0 ${THEME_COLORS.accentBlue}`} />
                  )}
                  <span>{item}</span>
                </li>
              );
            } else { 
              return (
                <li key={index} className="list-none py-0.5">
                  <RenderBlock block={item as AnyContentBlock} depth={depth + 1} isLastInMiniSection={isLastInMiniSection && isLastItem} />
                </li>
              );
            }
          })}
        </ListTag>
      );
    }
    case 'alert': {
        const alertBlock = block as AlertBlock;
        const { bgColor, borderColor, textColor, iconColorClass, Icon } = getAlertColors(alertBlock.alertType);
        const CustomIcon = alertBlock.iconName ? iconMap[alertBlock.iconName] || Icon : Icon;
        const finalBgColor = alertBlock.backgroundColor || bgColor;
        const finalBorderColor = alertBlock.borderColor || borderColor;
        const finalTextColor = alertBlock.textColor || textColor;
        const finalIconColorClass = alertBlock.iconColor ? '' : iconColorClass; 
        const finalIconColorStyle = alertBlock.iconColor || undefined; 
  
        return (
          <div
            className={`p-3 my-4 border-l-4 rounded-r-md ${finalBgColor} ${finalBorderColor} ${depth > 0 ? 'ml-4' : ''}`}
            style={{ backgroundColor: alertBlock.backgroundColor || undefined, borderColor: alertBlock.borderColor || undefined }}
          >
            <div className="flex">
              <div className="shrink-0 pt-0.5">
                <CustomIcon size={18} className={`${finalIconColorClass}`} style={{ color: finalIconColorStyle }} />
              </div>
              <div className="ml-2.5">
                {alertBlock.title && (
                  <h3 className={`text-sm font-semibold ${finalTextColor}`} style={{ color: alertBlock.textColor || undefined }}>
                    {alertBlock.title}
                  </h3>
                )}
                <div className={`text-xs ${finalTextColor} ${alertBlock.title ? 'mt-0.5' : ''}`} style={{ color: alertBlock.textColor || undefined }}>
                  {alertBlock.text}
                </div>
              </div>
            </div>
          </div>
        );
    }
    case 'section_break': {
      const sb = block as SectionBreakBlock;
      if (sb.style === 'none') return <div className="my-8"></div>; 
      let breakStyle = `border-gray-200`;
      if (sb.style === 'dashed') breakStyle = `border-dashed border-gray-300`;
      return <hr className={`my-10 ${breakStyle}`} />;
    }
    default:
      const exhaustiveCheck: never = block; 
      return <div className="text-red-500">Unsupported block type: {(exhaustiveCheck as any)?.type}</div>;
  }
};

interface PdfLessonDisplayProps {
  data?: PdfLessonData | null;
  lessonTime?: string; 
}

const isMajorSectionSubstantial = (sectionBlocksExcludingH2: Array<AnyContentBlock | { type: "mini_section"; headline: HeadlineBlock; list: BulletListBlock | NumberedListBlock }>): boolean => {
  if (!sectionBlocksExcludingH2 || sectionBlocksExcludingH2.length === 0) return false;
  if (sectionBlocksExcludingH2.length > 1) return true; // More than 1 item (after H2) is substantial

  const singleContentItem = sectionBlocksExcludingH2[0];
  if ('type' in singleContentItem && singleContentItem.type === "mini_section") { // A single mini_section
    return (singleContentItem.list.items.length > 2);
  } else if ('type' in singleContentItem && (singleContentItem.type === 'bullet_list' || singleContentItem.type === 'numbered_list')) { // A single list
    return (singleContentItem as BulletListBlock | NumberedListBlock).items.length > 2;
  }
  return true; // A single paragraph or other block is considered substantial enough
};


const PdfLessonDisplay: React.FC<PdfLessonDisplayProps> = ({ data, lessonTime }) => {
  if (!data || !data.contentBlocks || data.contentBlocks.length === 0) {
    return <div className="p-8 text-center text-gray-500">No lesson content available to display.</div>;
  }

  type MiniSection = { type: "mini_section"; headline: HeadlineBlock; list: BulletListBlock | NumberedListBlock };
  type StandaloneBlock = { type: "standalone_block"; content: AnyContentBlock };
  type MajorSection = { type: "major_section"; headline: HeadlineBlock; items: Array<AnyContentBlock | MiniSection>; applyBackground: boolean; _skipRenderHeadline?: boolean };
  type RenderableItem = MajorSection | MiniSection | StandaloneBlock;
  
  const renderableItems: RenderableItem[] = [];
  let i = 0;
  let isFirstH2 = true;

  let skipNextH2Headline = false;
  if (data.lessonTitle && data.contentBlocks.length > 0) {
    const firstBlock = data.contentBlocks[0];
    if (firstBlock.type === 'headline' && 
        ((firstBlock as HeadlineBlock).level === 1 || (firstBlock as HeadlineBlock).level === 2) &&
        (firstBlock as HeadlineBlock).text.trim().toLowerCase() === data.lessonTitle.trim().toLowerCase()) {
      skipNextH2Headline = true;
    }
  }

  while (i < data.contentBlocks.length) {
    const currentBlock = data.contentBlocks[i];

    if (currentBlock.type === 'headline' && (currentBlock as HeadlineBlock).level === 2) {
      const majorSectionHeadline = currentBlock as HeadlineBlock;
      const sectionItems: Array<AnyContentBlock | MiniSection> = [];
      const rawSectionBlocksForSizing: AnyContentBlock[] = []; // Check content *after* H2
      
      let headlineToSkip = false;
      if (isFirstH2 && skipNextH2Headline) {
        headlineToSkip = true;
      }
      isFirstH2 = false; // Only applies to the very first H2

      i++; // Move past the H2
      while (i < data.contentBlocks.length && !(data.contentBlocks[i].type === 'headline' && (data.contentBlocks[i] as HeadlineBlock).level === 2)) {
        const innerBlock = data.contentBlocks[i];
        const nextBlock = (i + 1 < data.contentBlocks.length) ? data.contentBlocks[i+1] : null;
        
        if (innerBlock.type === 'headline' && 
            ((innerBlock as HeadlineBlock).level === 3 || (innerBlock as HeadlineBlock).level === 4) &&
            nextBlock && (nextBlock.type === 'bullet_list' || nextBlock.type === 'numbered_list')) {
          sectionItems.push({
            type: "mini_section",
            headline: innerBlock as HeadlineBlock,
            list: nextBlock as BulletListBlock | NumberedListBlock
          });
          rawSectionBlocksForSizing.push(innerBlock, nextBlock);
          i += 2; 
        } else {
          sectionItems.push(innerBlock);
          rawSectionBlocksForSizing.push(innerBlock);
          i++;
        }
      }
      renderableItems.push({
        type: "major_section",
        headline: majorSectionHeadline,
        items: sectionItems,
        applyBackground: isMajorSectionSubstantial(rawSectionBlocksForSizing),
        _skipRenderHeadline: headlineToSkip 
      });
    } else if (currentBlock.type === 'headline' && 
               ((currentBlock as HeadlineBlock).level === 3 || (currentBlock as HeadlineBlock).level === 4) &&
               (i + 1 < data.contentBlocks.length) && 
               (data.contentBlocks[i+1].type === 'bullet_list' || data.contentBlocks[i+1].type === 'numbered_list')) {
      // This handles mini-sections that are NOT under an H2 (top-level mini-sections)
      renderableItems.push({
        type: "mini_section",
        headline: currentBlock as HeadlineBlock,
        list: data.contentBlocks[i+1] as BulletListBlock | NumberedListBlock
      });
      i += 2;
    } else {
       // Handles the case where the very first block is the one to be skipped
      if (i === 0 && skipNextH2Headline && 
          currentBlock.type === 'headline' && 
          ((currentBlock as HeadlineBlock).level === 1 || (currentBlock as HeadlineBlock).level === 2)) {
        i++;
        continue; 
      }
      renderableItems.push({ type: "standalone_block", content: currentBlock });
      i++;
    }
  }

  return (
    <div className="font-['Inter',_sans-serif] bg-white p-6 sm:p-8 md:p-10 shadow-xl rounded-lg max-w-4xl mx-auto my-8">
      {data.lessonTitle && (
        <div className={`mb-8 pb-4 border-b-2 ${THEME_COLORS.underlineAccent}`}>
          <h1 className={`text-4xl sm:text-5xl font-bold ${THEME_COLORS.headingText} mb-2`}>
            {data.lessonTitle}
          </h1>
          {lessonTime && (
            <div className={`flex items-center ${THEME_COLORS.mutedText} text-sm sm:text-base mt-1`}>
              <Clock size={16} className="mr-1.5" />
              <span>{lessonTime}</span>
            </div>
          )}
        </div>
      )}
      <div className="max-w-none">
        {renderableItems.map((item, index) => {
          if (item.type === "major_section") {
            const { headline, items: subItems, applyBackground, _skipRenderHeadline } = item;
            return (
              <div 
                key={`major-${index}`} 
                className={`${applyBackground ? `${THEME_COLORS.lightAccentBg} p-4 sm:p-6 rounded-md` : ''} my-6`}
              >
                {!_skipRenderHeadline && <RenderBlock block={headline} />} 
                {subItems.map((subItem, subIndex) => {
                   if (typeof subItem === 'object' && 'type' in subItem && subItem.type === "mini_section") {
                    return (
                      <div key={`major-${index}-mini-${subIndex}`} className={`${THEME_COLORS.veryLightAccentBg} ${THEME_COLORS.lightBorder} border rounded-md p-3 sm:p-4 my-4`}>
                        <RenderBlock block={subItem.headline} isLastInMiniSection={false} />
                        <RenderBlock block={subItem.list} isLastInMiniSection={true}/>
                      </div>
                    );
                  } else {
                    return <RenderBlock key={`major-${index}-block-${subIndex}`} block={subItem as AnyContentBlock} />;
                  }
                })}
              </div>
            );
          } else if (item.type === "mini_section") {
            return (
              <div key={`mini-${index}`} className={`${THEME_COLORS.veryLightAccentBg} ${THEME_COLORS.lightBorder} border rounded-md p-3 sm:p-4 my-4`}>
                <RenderBlock block={item.headline} isLastInMiniSection={false} />
                <RenderBlock block={item.list} isLastInMiniSection={true} />
              </div>
            );
          } else { // standalone_block
            return <RenderBlock key={`standalone-${index}`} block={item.content} />;
          }
        })}
      </div>
    </div>
  );
};

export default PdfLessonDisplay;

"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';
import {
  TextPresentationData, AnyContentBlock, HeadlineBlock, ParagraphBlock,
  BulletListBlock, NumberedListBlock, AlertBlock, SectionBreakBlock,
} from '@/types/textPresentation';
import {
  AlertCircle, CheckCircle, Info, XCircle, Minus, Type, List, ListOrdered,
  Award, Brain, BookOpen, Edit3, Lightbulb, Search, Compass, CloudDrizzle, EyeOff,
  ClipboardCheck, AlertTriangle, Star, ArrowRight, Circle,
  Target, TrendingUp, Flag, Shield, Activity, Anchor, Aperture, Archive, AtSign,
} from 'lucide-react';
import { locales } from '@/locales';

// Type definitions for internal structuring
type MiniSection = {
  type: "mini_section";
  headline: HeadlineBlock;
  list: BulletListBlock | NumberedListBlock | ParagraphBlock | AlertBlock;
};
type StandaloneBlock = { type: "standalone_block"; content: AnyContentBlock };
type MajorSection = {
  type: "major_section";
  headline: HeadlineBlock;
  items: Array<AnyContentBlock | MiniSection>;
  _skipRenderHeadline?: boolean
};
type RenderableItem = MajorSection | MiniSection | StandaloneBlock;

const parseAndStyleText = (text: string | undefined | null): React.ReactNode[] => {
  if (!text) return [];
  const segments = text.split(/\*\*(.*?)\*\*/g); 
  return segments.map((segment, index) => {
    if (index % 2 === 1) { 
      return <span key={index} className="font-medium text-black">{segment}</span>;
    }
    return segment; 
  }).filter(segment => segment !== ""); 
};

const NewBulletIcon = () => (
  <svg width="7" height="7" viewBox="0 0 3 4" xmlns="http://www.w3.org/2000/svg" className="mr-1.5 mt-[1px] shrink-0 icon-new-bullet" style={{ fill: "#FF1414" }}>
    <path d="M3 2L8.69979e-08 3.73205L2.38419e-07 0.267944L3 2Z" />
  </svg>
);

const iconMap: { [key: string]: React.ElementType } = {
  alertCircle: AlertCircle, checkCircle: CheckCircle, info: Info, xCircle: XCircle,
  type: Type, list: List, listOrdered: ListOrdered,
  award: Award, brain: Brain, bookOpen: Edit3, lightbulb: Lightbulb,
  search: Search, compass: Compass, cloudDrizzle: CloudDrizzle, eyeOff: EyeOff,
  clipboardCheck: ClipboardCheck, alertTriangle: AlertTriangle,
  star: Star, 
  arrowRight: ArrowRight, circle: Circle,
  target: Target, trendingUp: TrendingUp, flag: Flag, shield: Shield, activity: Activity,
  anchor: Anchor, aperture: Aperture, archive: Archive, atSign: AtSign,
  default: Minus,
};

const THEME_COLORS = {
  primaryText: 'text-[#4B4B4B]',        
  headingText: 'text-black',        
  subHeadingText: 'text-black',     
  accentRed: 'text-[#FF1414]', 
  accentRedBg: 'bg-[#FF1414]',      
  veryLightAccentBg: 'bg-[#FAFAFA]',
  lightBorder: 'border-gray-200',   
  mutedText: 'text-[#4B4B4B]',          
  defaultBorder: 'border-gray-300', 
  underlineAccent: 'border-[#FF1414]',
  alertInfoText: 'text-[#4B4B4B]',      
  alertSuccessText: 'text-[#4B4B4B]',   
  alertWarningText: 'text-[#4B4B4B]',   
  alertDangerText: 'text-[#4B4B4B]',    
  alertInfoIcon: 'text-blue-500', 
  alertSuccessIcon: 'text-green-500',
  alertWarningIcon: 'text-yellow-500',
  alertDangerIcon: 'text-red-500',
  alertInfoBg: 'bg-blue-50', alertInfoBorder: 'border-blue-400',
  alertSuccessBg: 'bg-green-50', alertSuccessBorder: 'border-green-400',
  alertWarningBg: 'bg-yellow-50', alertWarningBorder: 'border-yellow-400',
  alertDangerBg: 'bg-red-50', alertDangerBorder: 'border-red-400',
};

const editingInputClass = "w-full p-1 bg-yellow-50 border border-yellow-300 rounded text-black outline-none focus:ring-1 focus:ring-yellow-500";
const editingTextareaClass = `${editingInputClass} min-h-[50px] resize-y`;

const getAlertColors = (alertType: AlertBlock['alertType']) => {
    switch (alertType) {
        case 'info': return { bgColor: THEME_COLORS.alertInfoBg, borderColor: THEME_COLORS.alertInfoBorder, textColor: THEME_COLORS.alertInfoText, iconColorClass: THEME_COLORS.alertInfoIcon, Icon: Info };
        case 'success': return { bgColor: THEME_COLORS.alertSuccessBg, borderColor: THEME_COLORS.alertSuccessBorder, textColor: THEME_COLORS.alertSuccessText, iconColorClass: THEME_COLORS.alertSuccessIcon, Icon: CheckCircle };
        case 'warning': return { bgColor: THEME_COLORS.alertWarningBg, borderColor: THEME_COLORS.alertWarningBorder, textColor: THEME_COLORS.alertWarningText, iconColorClass: THEME_COLORS.alertWarningIcon, Icon: AlertTriangle };
        case 'danger': return { bgColor: THEME_COLORS.alertDangerBg, borderColor: THEME_COLORS.alertDangerBorder, textColor: THEME_COLORS.alertDangerText, iconColorClass: THEME_COLORS.alertDangerIcon, Icon: XCircle };
        default: return { bgColor: THEME_COLORS.alertInfoBg, borderColor: THEME_COLORS.alertInfoBorder, textColor: THEME_COLORS.alertInfoText, iconColorClass: THEME_COLORS.alertInfoIcon, Icon: Info };
      }
};

interface RenderBlockProps { 
  block: AnyContentBlock;
  depth?: number;
  isFirstInBox?: boolean;
  isLastInBox?: boolean;
  isMiniSectionHeadline?: boolean;
  isListItemContent?: boolean;
  isEditing?: boolean;
  onTextChange?: (path: (string | number)[], newText: string) => void;
  basePath?: (string | number)[];
  isMiniSectionList?: boolean; 
}

const RenderBlock: React.FC<RenderBlockProps> = (props) => {
  const { 
    block, depth = 0, isFirstInBox, isLastInBox, 
    isMiniSectionHeadline, isListItemContent,
    isEditing, onTextChange, basePath = [],
    isMiniSectionList
  } = props;

  const fieldPath = (fieldKey: string) => [...basePath, fieldKey];
  const listItemPath = (itemIndex: number, fieldKey?: string) => {
      const path = [...basePath, 'items', itemIndex];
      return fieldKey ? [...path, fieldKey] : path;
  };

  const handleInputChangeEvent = (
    pathForData: (string | number)[], 
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> 
  ) => {
    if (onTextChange) {
      onTextChange(pathForData, event.target.value);
    }
  };
  
  switch (block.type) {
    case 'headline': {
      const { level, text, backgroundColor, textColor: headlineTextColor, iconName } = block as HeadlineBlock;
      const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
      const IconComponent = iconName ? iconMap[iconName] : null;
      
      let textStyleClass = 'uppercase '; 
      if (level === 1) { textStyleClass += `text-lg lg:text-xl font-semibold ${THEME_COLORS.headingText}`; } 
      else if (level === 2) { textStyleClass += `text-base lg:text-lg font-semibold ${THEME_COLORS.headingText}`; }  
      else if (level === 3) { textStyleClass += `text-base lg:text-lg font-semibold ${THEME_COLORS.accentRed}`; } 
      else if (level === 4) { textStyleClass += `text-sm lg:text-base font-medium ${THEME_COLORS.subHeadingText}`; }
      else { textStyleClass += `text-base font-medium ${THEME_COLORS.subHeadingText}`; }

      if (depth > 0) {
        textStyleClass = 'uppercase '; 
        if (level === 3) textStyleClass += `text-sm font-semibold ${THEME_COLORS.accentRed}`; 
        else if (level === 4) textStyleClass += `text-xs font-medium ${THEME_COLORS.subHeadingText}`;
      }
      if (isMiniSectionHeadline) {
          textStyleClass = 'uppercase '; 
          textStyleClass += level === 3 ? `text-base font-semibold ${THEME_COLORS.accentRed}` : `text-sm font-medium ${THEME_COLORS.accentRed}`; 
          if (depth > 0) { 
            textStyleClass = 'uppercase '; 
            textStyleClass += level === 3 ? `text-sm font-semibold ${THEME_COLORS.accentRed}` : `text-xs font-medium ${THEME_COLORS.accentRed}`;
          }
      }

      let calculatedMt = ''; let calculatedMb = ''; let calculatedPt = '';
      if (level === 1) { calculatedMb = 'mb-2'; } 
      else if (level === 2) { calculatedMb = 'mb-3'; calculatedPt = 'pt-4'; } 
      else if (level === 3) { calculatedMb = 'mb-1.5'; calculatedMt = 'mt-2.5'; } 
      else if (level === 4) { calculatedMb = 'mb-1'; calculatedMt = 'mt-2'; } 
      else { calculatedMb = 'mb-1.5'; } 
      if (depth > 0) { if (level === 3 || level === 4) { calculatedMb = 'mb-1'; calculatedMt = 'mt-1';} } 
      if (isListItemContent) calculatedMt = ''; 
      if (isMiniSectionHeadline && isFirstInBox) calculatedMb = 'mb-1'; 
      if (isLastInBox) calculatedMb = 'mb-0';
      
      const finalClassName = `flex items-center ${textStyleClass} ${calculatedPt} ${calculatedMt} ${calculatedMb}`.replace(/\s+/g, ' ').trim();
      const styledText = parseAndStyleText(text);

      return (
        <Tag
          className={finalClassName}
          style={{ backgroundColor: backgroundColor || 'transparent', color: headlineTextColor || undefined , padding: backgroundColor ? '0.4rem 0.6rem' : undefined, borderRadius: backgroundColor ? '0.25rem' : undefined }}
        >
          {IconComponent && <IconComponent className="mr-1.5 shrink-0" />}
          {isMiniSectionHeadline && <Info size={16} className="mr-1.5 shrink-0 text-red-500" />}
          {isEditing && onTextChange ? (
            <input 
              type="text" 
              value={text}
              onChange={(e) => handleInputChangeEvent(fieldPath('text'), e)}
              className={`${editingInputClass} ${textStyleClass.replace(/text-\w+/g, '').replace(/font-\w+/g, '').replace('uppercase', '')} m-0 p-0`} 
              style={{ fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit', display: 'inline', width: 'auto', flexGrow: 1, textTransform: 'uppercase' }}
            />
          ) : ( styledText )}
        </Tag>
      );
    }
    case 'paragraph': { 
      const { text, isRecommendation } = block as ParagraphBlock;
      const isTopLevelParagraph = depth === 0;
      let paragraphClasses = `${THEME_COLORS.primaryText} text-[10px] leading-normal`; 
      if (isTopLevelParagraph) paragraphClasses += ` w-[75%]`; 
      const defaultMb = depth > 0 ? 'mb-1' : 'mb-2';
      const finalMb = isLastInBox ? 'mb-0' : defaultMb;
      
      let recommendationClasses = "";
      if (isRecommendation) {
        recommendationClasses = `pl-2.5 border-l-[3px] border-[#FF1414] py-1`;
      }
      const styledText = parseAndStyleText(text);

      if (isEditing && onTextChange) {
        const currentRawText = (block as ParagraphBlock).text;
        return (
            <div className={`${isRecommendation ? recommendationClasses : ''} ${finalMb}`}>
              <textarea 
                value={currentRawText} 
                onChange={(e) => handleInputChangeEvent(fieldPath('text'), e)}
                className={`${editingTextareaClass} ${isTopLevelParagraph ? 'w-[75%]' : 'w-full'} text-[10px] leading-normal ${THEME_COLORS.primaryText.replace('text-black', '')}`} 
              />
            </div>
        );
      }
      return ( <p className={`${paragraphClasses} ${finalMb} ${recommendationClasses}`.trim()}>{styledText}</p> );
    }
    case 'bullet_list': 
    case 'numbered_list': {
      const currentBlockIconName = block.type === 'bullet_list' ? (block as BulletListBlock).iconName : undefined;
      const { items } = block; 
      const isNumbered = block.type === 'numbered_list';
      
      let BulletIconToRender: React.ElementType | null = NewBulletIcon; 
      if (block.type === 'bullet_list') {
        if (currentBlockIconName && currentBlockIconName !== "none") {
            BulletIconToRender = iconMap[currentBlockIconName] || NewBulletIcon; 
        } else if (currentBlockIconName === "none") {
            BulletIconToRender = null; 
        }
      }

      const ListTag = isNumbered ? 'ol' : 'ul';
      const listStyle = isNumbered 
        ? 'list-decimal list-outside ' 
        : (BulletIconToRender === NewBulletIcon || BulletIconToRender === null) ? 'list-none ' : 'list-none ';
      
      const textIndentClass = isNumbered ? 'pl-4' : (BulletIconToRender === NewBulletIcon) ? 'pl-0' : 'pl-1';
      const finalMb = isLastInBox ? 'mb-0' : 'mb-2';

      let containerClasses = `flex flex-col ${finalMb} `;
      if (isMiniSectionList) {
        containerClasses += `${THEME_COLORS.veryLightAccentBg} border-l-[3px] ${THEME_COLORS.underlineAccent} py-2 pl-3.5 pr-2`;
      }

      return (
        <div className={containerClasses.trim()}>
          <ListTag className={`${listStyle} ${textIndentClass} space-y-1.5`}>
            {items.map((item, index) => {
              const isLastItem = index === items.length - 1;
              const itemIsString = typeof item === 'string';
              
              const styledItemText = itemIsString ? parseAndStyleText(item) : null;

              if (isEditing && onTextChange && itemIsString) {
                return (
                  <li key={index} className="flex items-start">
                    {BulletIconToRender && !isNumbered && <BulletIconToRender />}
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleInputChangeEvent(listItemPath(index), e)}
                      className={`${editingInputClass} ml-2 w-full`}
                    />
                  </li>
                );
              }

              return (
                <li
                  key={index}
                  className={`flex items-start ${THEME_COLORS.mutedText} text-xs leading-tight`}
                >
                  {!isNumbered && BulletIconToRender && <BulletIconToRender />}
                  <div className="flex-grow">
                    {itemIsString
                      ? <span className={isNumbered ? 'ml-1' : ''}>{styledItemText}</span>
                      : <RenderBlock 
                          block={item as AnyContentBlock}
                          depth={(depth || 0) + 1}
                          isListItemContent={true}
                          isLastInBox={isLastItem}
                          isEditing={isEditing}
                          onTextChange={onTextChange}
                          basePath={listItemPath(index)}
                        />
                    }
                  </div>
                </li>
              );
            })}
          </ListTag>
        </div>
      );
    }
    case 'alert': {
      const { alertType, title, text } = block as AlertBlock;
      const { bgColor, borderColor, textColor, iconColorClass, Icon } = getAlertColors(alertType);
      
      return (
        <div className={`p-2 border-l-4 ${bgColor} ${borderColor} ${isLastInBox ? 'mb-0' : 'mb-3'}`} role="alert">
          <div className="flex">
            <div className="py-1"><Icon className={`h-4 w-4 ${iconColorClass} mr-2`} /></div>
            <div>
              {title && <p className={`font-bold ${textColor}`}>{title}</p>}
              <p className={`text-xs ${textColor}`}>{text}</p>
            </div>
          </div>
        </div>
      );
    }
    case 'section_break': {
      const { style } = block as SectionBreakBlock;
      if (style === 'none') return null;
      const borderStyle = style === 'dashed' ? 'border-dashed' : 'border-solid';
      return <hr className={`my-3 border-t ${borderStyle} ${THEME_COLORS.defaultBorder}`} />;
    }
    default:
      return null;
  }
};


export interface TextPresentationDisplayProps {
  dataToDisplay: TextPresentationData | null;
  isEditing?: boolean;
  onTextChange?: (path: (string | number)[], newText: string) => void;
  parentProjectName?: string;
}

const TextPresentationDisplay = ({ dataToDisplay, isEditing, onTextChange, parentProjectName }: TextPresentationDisplayProps): React.JSX.Element | null => {
  const searchParams = useSearchParams();
  const lang = dataToDisplay?.detectedLanguage || searchParams.get('lang') || 'en';
  const locale = locales[lang as keyof typeof locales] || locales.en;

  if (!dataToDisplay) {
    return <div className="p-6 text-center text-gray-500 text-xs">No text content available to display.</div>;
  }
  
  const renderableItems: RenderableItem[] = [];
  let i = 0;
  let isFirstH2Processed = false;
  let skipNextH2Headline = false;
  const contentBlocksToProcess = dataToDisplay.contentBlocks || [];

  if (dataToDisplay.textTitle && contentBlocksToProcess.length > 0) {
    const firstBlock = contentBlocksToProcess[0];
    if (firstBlock.type === 'headline' &&
        ((firstBlock as HeadlineBlock).level === 1 || (firstBlock as HeadlineBlock).level === 2) &&
        (firstBlock as HeadlineBlock).text.trim().toLowerCase() === dataToDisplay.textTitle.trim().toLowerCase()) {
      skipNextH2Headline = true;
    }
  }

  while (i < contentBlocksToProcess.length) {
    if (contentBlocksToProcess[i].type === 'section_break') { i++; continue; }
    const currentBlock = contentBlocksToProcess[i];
    const nextBlock = (i + 1 < contentBlocksToProcess.length) ? contentBlocksToProcess[i+1] : null;
    if (currentBlock.type === 'headline' && (currentBlock as HeadlineBlock).level === 2) {
      const majorSectionHeadline = currentBlock as HeadlineBlock;
      const sectionItemsInternal: Array<AnyContentBlock | MiniSection> = [];
      let headlineToSkipThisIteration = false;
      if (!isFirstH2Processed && skipNextH2Headline) { headlineToSkipThisIteration = true; }
      isFirstH2Processed = true;
      i++; 
      while (i < contentBlocksToProcess.length && !(contentBlocksToProcess[i].type === 'headline' && (contentBlocksToProcess[i] as HeadlineBlock).level === 2)) {
        if (contentBlocksToProcess[i].type === 'section_break') { i++; continue; }
        const innerBlock = contentBlocksToProcess[i];
        const innerNextBlock = (i + 1 < contentBlocksToProcess.length) ? contentBlocksToProcess[i+1] : null;
        if (innerBlock.type === 'headline' && ((innerBlock as HeadlineBlock).level === 3 || (innerBlock as HeadlineBlock).level === 4) && (innerBlock as HeadlineBlock).isImportant === true && innerNextBlock && (innerNextBlock.type === 'bullet_list' || innerNextBlock.type === 'numbered_list' || innerNextBlock.type === 'paragraph' || innerNextBlock.type === 'alert')) {
          sectionItemsInternal.push({ type: "mini_section", headline: innerBlock as HeadlineBlock, list: innerNextBlock as BulletListBlock | NumberedListBlock | ParagraphBlock | AlertBlock });
          i += 2; 
        } else { sectionItemsInternal.push(innerBlock); i++;  }
      }
      renderableItems.push({ type: "major_section", headline: majorSectionHeadline, items: sectionItemsInternal, _skipRenderHeadline: headlineToSkipThisIteration });
    } else if (currentBlock.type === 'headline' && ((currentBlock as HeadlineBlock).level === 3 || (currentBlock as HeadlineBlock).level === 4) && (currentBlock as HeadlineBlock).isImportant === true && nextBlock && (nextBlock.type === 'bullet_list' || nextBlock.type === 'numbered_list' || nextBlock.type === 'paragraph' || nextBlock.type === 'alert')) {
      renderableItems.push({ type: "mini_section", headline: currentBlock as HeadlineBlock, list: nextBlock as BulletListBlock | NumberedListBlock | ParagraphBlock | AlertBlock });
      i += 2; 
    } else {
      if (i === 0 && skipNextH2Headline && currentBlock.type === 'headline' && ((currentBlock as HeadlineBlock).level === 1 || (currentBlock as HeadlineBlock).level === 2)) { i++; continue; }
      renderableItems.push({ type: "standalone_block", content: currentBlock });
      i++; 
    }
  } 

  const findOriginalIndex = (blockToFind: AnyContentBlock | HeadlineBlock | BulletListBlock | NumberedListBlock | ParagraphBlock | AlertBlock): number => {
      return (dataToDisplay?.contentBlocks || []).findIndex(cb => cb === blockToFind);
  };
  
  const styledTextTitle = parseAndStyleText(dataToDisplay.textTitle);

  return (
    <div className="font-['Inter',_sans-serif] bg-white p-4 sm:p-6 md:p-8 shadow-lg rounded-md max-w-3xl mx-auto my-6">
      {dataToDisplay.textTitle && (
        <header className="mb-4">
          {parentProjectName && <p className="text-xs uppercase font-semibold tracking-wider text-gray-500 mb-1">{parentProjectName}</p>}
          
          {isEditing && onTextChange ? (
              <input 
                  type="text" 
                  value={dataToDisplay.textTitle} 
                  onChange={(e) => onTextChange && onTextChange(['textTitle'], e.target.value)} 
                  className={`${editingInputClass} text-2xl lg:text-3xl font-bold ${THEME_COLORS.headingText}`}
              />
          ) : (
              <h1 className={`text-2xl lg:text-3xl font-bold ${THEME_COLORS.headingText} mb-2`}>{dataToDisplay.textTitle}</h1>
          )}

          <hr className={`mt-2 mb-0 border-t-2 ${THEME_COLORS.underlineAccent}`} />
        </header>
      )}

      <main>
        {renderableItems.map((item, index) => {
          const isLastItem = index === renderableItems.length - 1;

          if (item.type === 'major_section') {
            const originalHeadlineIndex = findOriginalIndex(item.headline);
            return (
              <section key={index} className="mb-4 p-3 rounded-md bg-white">
                {!item._skipRenderHeadline && (
                  <RenderBlock
                    block={item.headline}
                    basePath={['contentBlocks', originalHeadlineIndex]}
                    isEditing={isEditing}
                    onTextChange={onTextChange}
                  />
                )}
                <div className={item._skipRenderHeadline ? '' : 'pl-1'}>
                  {item.items.map((subItem, subIndex) => {
                    const isLastSubItem = subIndex === item.items.length - 1;
                    if (subItem.type === 'mini_section') {
                      const originalMiniHeadlineIndex = findOriginalIndex(subItem.headline);
                      const originalMiniListIndex = findOriginalIndex(subItem.list);
                      return (
                        <div key={subIndex} className="p-3 my-4 rounded-md bg-rose-50 border-l-4 border-rose-500">
                          <RenderBlock
                            block={subItem.headline}
                            isMiniSectionHeadline={true}
                            isFirstInBox={subIndex === 0}
                            basePath={['contentBlocks', originalMiniHeadlineIndex]}
                            isEditing={isEditing}
                            onTextChange={onTextChange}
                          />
                          <RenderBlock
                            block={subItem.list}
                            isMiniSectionList={true}
                            isLastInBox={isLastSubItem}
                            basePath={['contentBlocks', originalMiniListIndex]}
                            isEditing={isEditing}
                            onTextChange={onTextChange}
                          />
                        </div>
                      );
                    } else { // It's an AnyContentBlock
                      const originalSubIndex = findOriginalIndex(subItem);
                      return <RenderBlock
                        key={subIndex}
                        block={subItem}
                        isLastInBox={isLastSubItem}
                        basePath={['contentBlocks', originalSubIndex]}
                        isEditing={isEditing}
                        onTextChange={onTextChange}
                      />;
                    }
                  })}
                </div>
              </section>
            );
          }

          if (item.type === 'mini_section') {
            const originalHeadlineIndex = findOriginalIndex(item.headline);
            const originalListIndex = findOriginalIndex(item.list);
            return (
              <div key={index} className="p-3 my-4 rounded-md bg-rose-50 border-l-4 border-rose-500">
                <RenderBlock
                  block={item.headline}
                  isMiniSectionHeadline={true}
                  isFirstInBox={index === 0}
                  basePath={['contentBlocks', originalHeadlineIndex]}
                  isEditing={isEditing}
                  onTextChange={onTextChange}
                />
                <RenderBlock
                  block={item.list}
                  isMiniSectionList={true}
                  isLastInBox={isLastItem}
                  basePath={['contentBlocks', originalListIndex]}
                  isEditing={isEditing}
                  onTextChange={onTextChange}
                />
              </div>
            );
          }

          if (item.type === 'standalone_block') {
            const originalIndex = findOriginalIndex(item.content);
            return (
              <RenderBlock
                key={index}
                block={item.content}
                isLastInBox={isLastItem}
                basePath={['contentBlocks', originalIndex]}
                isEditing={isEditing}
                onTextChange={onTextChange}
              />
            );
          }

          return null;
        })}
      </main>
    </div>
  );
};

export default TextPresentationDisplay; 
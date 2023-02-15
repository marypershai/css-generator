
import { customOverlayProperties } from '../../card-root-styles';
import { addFocus } from '../addFocus';
import { setCssOverlayCodeBlock } from '../../card-overlay-style';
import { resetCopy } from '../copyCode';

function handleHorizontalContent(idItem: string, alignItemsValue: string, textAlignValue: string ) {
  const html = document.firstElementChild as HTMLElement;
  html.style.setProperty('--align-items-value', alignItemsValue);
  html.style.setProperty('--text-align-value', textAlignValue);
  customOverlayProperties.alignItemsValue = alignItemsValue;
  customOverlayProperties.textAlignValue = textAlignValue;
  setCssOverlayCodeBlock();
  resetCopy();
  addFocus('#horizontal-card-content', idItem);
}

function handleVerticalContent(idItem: string, justifyContentValue: string ) {
  const html = document.firstElementChild as HTMLElement;
  html.style.setProperty('--justify-content-value', justifyContentValue);
  customOverlayProperties.justifyContentValue = justifyContentValue;
  setCssOverlayCodeBlock();
  resetCopy(); 
  addFocus('#vertical-card-content', idItem);
}


export function controlContent(event: Event): void {
  const target = event.target as HTMLElement;
  if (target.closest('#horizontal-left-button')) {
    handleHorizontalContent('#horizontal-left-button', 'flex-start', 'start' );
  } else if (target.closest('#horizontal-center-button')) {
    handleHorizontalContent('#horizontal-center-button', 'center', 'center' );
  } else if (target.closest('#horizontal-right-button')) {
    handleHorizontalContent('#horizontal-right-button', 'flex-end', 'start' );
  } else if (target.closest('#vertical-top-button')) {
    handleVerticalContent('#vertical-top-button', 'flex-start' );
  } else if (target.closest('#vertical-center-button')) {
    handleVerticalContent('#vertical-center-button', 'center' );
  } else if (target.closest('#vertical-bottom-button')) {
    handleVerticalContent('#vertical-bottom-button', 'flex-end' );
  }
} 

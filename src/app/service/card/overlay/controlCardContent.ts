
import { customOverlayProperties } from '../../card-root-styles';
import { addFocus } from '../addFocus';
import { setCssOverlayCodeBlock } from '../../card-overlay-style';
import { resetCopy } from '../copyCode';
// import { highlightCode } from '../../highlight';


export function controlContent(event: Event): void {
  const target = event.target as HTMLElement;
  const html = document.firstElementChild as HTMLElement;
  if (target.closest('#horizontal-left-button')) {
    html.style.setProperty('--align-items-value', 'flex-start');
    html.style.setProperty('--text-align-value', 'start');
    customOverlayProperties.alignItemsValue = 'flex-start';
    customOverlayProperties.textAlignValue = 'start';
    setCssOverlayCodeBlock();
    resetCopy();
    // highlightCode();
    addFocus('#horizontal-card-content', '#horizontal-left-button');
  } else if (target.closest('#horizontal-center-button')) {
    html.style.setProperty('--align-items-value', 'center');
    html.style.setProperty('--text-align-value', 'center');
    customOverlayProperties.alignItemsValue = 'center';
    customOverlayProperties.textAlignValue = 'center';
    setCssOverlayCodeBlock();
    resetCopy();
    // highlightCode();
    addFocus('#horizontal-card-content', '#horizontal-center-button');
  } else if (target.closest('#horizontal-right-button')) {
    html.style.setProperty('--align-items-value', 'flex-end');
    html.style.setProperty('--text-align-value', 'start');
    customOverlayProperties.alignItemsValue = 'flex-end';
    customOverlayProperties.textAlignValue = 'start';
    setCssOverlayCodeBlock();
    resetCopy();
    // highlightCode();
    addFocus('#horizontal-card-content', '#horizontal-right-button');
  } else if (target.closest('#vertical-top-button')) {
    html.style.setProperty('--justify-content-value', 'flex-start');
    customOverlayProperties.justifyContentValue = 'flex-start';
    setCssOverlayCodeBlock();
    resetCopy();
    // highlightCode();
    addFocus('#vertical-card-content', '#vertical-top-button');
  } else if (target.closest('#vertical-center-button')) {
    html.style.setProperty('--justify-content-value', 'center');
    customOverlayProperties.justifyContentValue = 'center';
    setCssOverlayCodeBlock();
    resetCopy();
    // highlightCode();
    addFocus('#vertical-card-content', '#vertical-center-button');
  } else if (target.closest('#vertical-bottom-button')) {
    html.style.setProperty('--justify-content-value', 'flex-end');
    customOverlayProperties.justifyContentValue = 'flex-end';
    setCssOverlayCodeBlock();
    resetCopy();
    // highlightCode();
    addFocus('#vertical-card-content', '#vertical-bottom-button');
  }
} 

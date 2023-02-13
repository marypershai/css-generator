
import { customOverlayProperties } from '../../card-root-styles';
import { addFocus } from '../addFocus';
import { highlightCode } from '../../highlight';
import { setCssOverlayCodeBlock } from '../../card-overlay-style';




export function controlCardOverlay(event: Event): void {
  const target = event.target as HTMLElement;
  const html = document.firstElementChild as HTMLElement;
  if (target.closest('#top-button')) {
    html.style.setProperty('--overlay-direction', '180deg');
    customOverlayProperties.aspectRatioImage = '180deg';
    setCssOverlayCodeBlock();
    highlightCode();
    addFocus('#cardOverlay', '#top-button');
  } else if (target.closest('#bottom-button')) {
    html.style.setProperty('--overlay-direction', '0deg');
    customOverlayProperties.aspectRatioImage = '0deg';
    setCssOverlayCodeBlock();
    highlightCode();
    addFocus('#cardOverlay', '#bottom-button');
  } else if (target.closest('#bottom-right-button')) {
    html.style.setProperty('--overlay-direction', '315deg');
    customOverlayProperties.aspectRatioImage = '315deg';
    setCssOverlayCodeBlock();
    highlightCode();
    addFocus('#cardOverlay', '#bottom-right-button');
  } else if (target.closest('#top-right-button')) {
    html.style.setProperty('--overlay-direction', '225deg');
    customOverlayProperties.aspectRatioImage = '225deg';
    setCssOverlayCodeBlock();
    highlightCode();
    addFocus('#cardOverlay', '#top-right-button');
  }

}


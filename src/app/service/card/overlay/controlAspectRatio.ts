
import { customOverlayProperties } from '../../card-root-styles';
import { addFocus } from '../addFocus';
import { highlightCode } from '../../highlight';
import { setCssOverlayCodeBlock } from '../../card-overlay-style';




export function controlAspectRatio(event: Event): void {
  const target = event.target as HTMLElement;
  const html = document.firstElementChild as HTMLElement;
  if (target.closest('#aspectRatio_4_3')) {
    html.style.setProperty('--aspect-ratio-card', '4/3');
    customOverlayProperties.aspectRatioImage = '4/3';
    setCssOverlayCodeBlock();
    highlightCode();
    addFocus('#aspectRatio', '#aspectRatio_4_3');
  } else if (target.closest('#aspectRatio_1_1')) {
    html.style.setProperty('--aspect-ratio-card', '1/1');
    customOverlayProperties.aspectRatioImage = '1/1';
    setCssOverlayCodeBlock();
    highlightCode();
    addFocus('#aspectRatio', '#aspectRatio_1_1');
  } else if (target.closest('#aspectRatio_1_2')) {
    html.style.setProperty('--aspect-ratio-card', '1/2');
    customOverlayProperties.aspectRatioImage = '1/2';
    setCssOverlayCodeBlock();
    highlightCode();
    addFocus('#aspectRatio', '#aspectRatio_1_2');
  }

}
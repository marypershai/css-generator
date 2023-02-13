import { customOverlayProperties } from '../../card-root-styles';
import { addFocus } from '../addFocus';
// import { highlightCode } from '../../highlight';
import { setCssOverlayCodeBlock } from '../../card-overlay-style';




export function controlTextShadow(event: Event): void {
  const target = event.target as HTMLElement;
  const html = document.firstElementChild as HTMLElement;
  if (target.closest('#basicButton')) {
    html.style.setProperty('--card-text-shadow', '1px 1px 5px rgba(0, 0, 0, 0.5)');
    customOverlayProperties.cardTextShadow = '1px 1px 5px rgba(0, 0, 0, 0.5)';
    setCssOverlayCodeBlock();
    // highlightCode();
    addFocus('#textShadow', '#basicButton');
  } else if (target.closest('#heavyButton')) {
    html.style.setProperty('--card-text-shadow', '1px 1px 5px rgba(0, 0, 0, 0.9)');
    customOverlayProperties.cardTextShadow = '1px 1px 5px rgba(0, 0, 0, 0.9)';
    setCssOverlayCodeBlock();
    // highlightCode();
    addFocus('#textShadow', '#heavyButton');
  } else if (target.closest('#noneButton')) {
    html.style.setProperty('--card-text-shadow', 'none');
    customOverlayProperties.cardTextShadow = 'none';
    setCssOverlayCodeBlock();
    // highlightCode();
    addFocus('#textShadow', '#noneButton');
  }

}

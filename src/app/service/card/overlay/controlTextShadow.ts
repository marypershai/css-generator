import { customOverlayProperties } from '../../card-root-styles';
import { addFocus } from '../addFocus';
import { setCssOverlayCodeBlock } from '../../card-overlay-style';
import { resetCopy } from '../copyCode';



export function controlTextShadow(event: Event): void {
  const target = event.target as HTMLElement;
  const html = document.firstElementChild as HTMLElement;
  let shadowValue = '';
  let focusId = '';

  if (target.closest('#basicButton')) {
    shadowValue = '1px 1px 5px rgba(0, 0, 0, 0.5)';
    focusId = '#basicButton';
  } else if (target.closest('#heavyButton')) {
    shadowValue = '1px 1px 5px rgba(0, 0, 0, 0.9)';
    focusId = '#heavyButton';
  } else if (target.closest('#noneButton')) {
    shadowValue = 'none';
    focusId = '#noneButton';
  }

  html.style.setProperty('--card-text-shadow', shadowValue);
  customOverlayProperties.cardTextShadow = shadowValue;
  setCssOverlayCodeBlock();
  addFocus('#textShadow', focusId);
  resetCopy();
}

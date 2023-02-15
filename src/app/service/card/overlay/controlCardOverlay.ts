
import { customOverlayProperties } from '../../card-root-styles';
import { addFocus } from '../addFocus';
import { setCssOverlayCodeBlock } from '../../card-overlay-style';
import { resetCopy } from '../copyCode';
import { ButtonProperties } from 'framework/tools/interfaces';




const buttons: ButtonProperties[] = [
  { id: 'top-button', direction: '180deg' },
  { id: 'bottom-button', direction: '0deg' },
  { id: 'bottom-right-button', direction: '315deg' },
  { id: 'top-right-button', direction: '225deg' },
];

function setOverlayDirection(direction: string) {
  const html = document.firstElementChild as HTMLElement;
  html.style.setProperty('--overlay-direction', direction);
  customOverlayProperties.aspectRatioImage = direction;
  setCssOverlayCodeBlock();
  resetCopy();
}

export function controlCardOverlay(event: Event): void {
  const target = event.target as HTMLElement;
  const clickedButton = buttons.find(button => target.closest(`#${button.id}`));
  if (clickedButton) {
    setOverlayDirection(clickedButton.direction);
    addFocus('#cardOverlay', `#${clickedButton.id}`);
  }
}
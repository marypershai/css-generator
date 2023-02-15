import { cardGeneratorPageComponent } from '../pages/card-generator-page.component';
import { cardOverlay, setCssOverlayCodeBlock } from './card-overlay-style';


function setDefaultProperties(): void {
  const html = document.firstElementChild as HTMLElement;
  html.style.setProperty('--align-items-value', 'flex-start');
  html.style.setProperty('--text-align-value', 'start');
  html.style.setProperty('--justify-content-value', 'flex-end');
  html.style.setProperty('--overlay-direction', '0deg');
  html.style.setProperty('--card-text-shadow', '1px 1px 5px rgba(0, 0, 0, 0.5)');
}

export function switchCardToOverlayStyle(): void {
  const html = document.firstElementChild as HTMLElement;
  html.removeAttribute('card-style');
  cardGeneratorPageComponent.isOverlay = true;
  setDefaultProperties();
  cardGeneratorPageComponent.template = cardOverlay;
  cardGeneratorPageComponent.render();
  setCssOverlayCodeBlock();
}

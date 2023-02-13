import { cardGeneratorPageComponent } from '../pages/card-generator-page.component';
import { cardOverlay, setCssOverlayCodeBlock } from './card-overlay-style';
import { highlightCode } from './highlight';


export function switchCardToOverlayStyle(): void {
  const html = document.firstElementChild as HTMLElement;
  html.removeAttribute('card-style');
  
  cardGeneratorPageComponent.template = cardOverlay;
  cardGeneratorPageComponent.render();
  setCssOverlayCodeBlock();
  highlightCode();
}


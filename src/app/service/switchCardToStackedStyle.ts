
import { cardGeneratorPageComponent } from '../pages/card-generator-page.component';
import { cardStacked, setCssStackedCodeBlock } from './card-stacked-style';
// import { highlightCode } from './highlight';


function setDefaultProperties(): void {
  const html = document.firstElementChild as HTMLElement;
  html.style.setProperty('--align-items-value', 'stretch');
  html.style.setProperty('--text-align-value', 'start');
  html.style.setProperty('--overlay-direction', '0deg');
  html.style.setProperty('--card-text-shadow', 'none');
}


export function switchCardToStackedStyle(): void {
  const html = document.firstElementChild as HTMLElement;
  html.setAttribute('card-style', 'stacked');
  cardGeneratorPageComponent.isOverlay = false;
  setDefaultProperties();
  cardGeneratorPageComponent.template = cardStacked;
  cardGeneratorPageComponent.render();
  setCssStackedCodeBlock();
  // highlightCode();
}




import { cardGeneratorPageComponent } from '../pages/card-generator-page.component';
import { cardStacked } from './card-stacked-style';
import { highlightCode } from './highlight';


export function switchCardToStackedStyle(): void {
  const html = document.firstElementChild as HTMLElement;
  html.setAttribute('card-style', 'stacked');

  cardGeneratorPageComponent.template = cardStacked;
  cardGeneratorPageComponent.render();
  highlightCode();
}
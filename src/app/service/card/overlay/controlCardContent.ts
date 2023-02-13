import { switchCardToOverlayStyle } from '../../switchCardToOverlayStyle';
import { customOverlayProperties } from '../../card-root-styles';



function removeFocus(el: string):void {
  const cardAria = document.querySelector(el) as HTMLElement;
  const buttons = cardAria.querySelectorAll('.setting__button') as NodeListOf<HTMLButtonElement>;
  buttons.forEach(item => item.classList.remove('focus'));
}

function addFocus(el: string, id: string): void {
  removeFocus(el);
  const button = document.querySelector(id) as HTMLButtonElement;
  button.classList.add('focus');
}

export function controlContent(event: Event) {
  const target = event.target as HTMLElement;
  const html = document.firstElementChild as HTMLElement;
  if (target.closest('#horizontal-left-button')) {
    html.style.setProperty('--align-items-value', 'flex-start');
    html.style.setProperty('--text-align-value', 'start');
    customOverlayProperties.alignItemsValue = 'flex-start';
    customOverlayProperties.textAlignValue = 'start';
    switchCardToOverlayStyle();
    addFocus('#horizontal-card-content', '#horizontal-left-button');
  } else if (target.closest('#horizontal-center-button')) {
    html.style.setProperty('--align-items-value', 'center');
    html.style.setProperty('--text-align-value', 'center');
    customOverlayProperties.alignItemsValue = 'center';
    customOverlayProperties.textAlignValue = 'center';
    switchCardToOverlayStyle();
    addFocus('#horizontal-card-content', '#horizontal-center-button');
  } else if (target.closest('#horizontal-right-button')) {
    html.style.setProperty('--align-items-value', 'flex-end');
    html.style.setProperty('--text-align-value', 'start');
    customOverlayProperties.alignItemsValue = 'flex-end';
    customOverlayProperties.textAlignValue = 'start';
    switchCardToOverlayStyle();
    addFocus('#horizontal-card-content', '#horizontal-right-button');
  } else if (target.closest('#vertical-top-button')) {
    html.style.setProperty('--justify-content-value', 'flex-start');
    customOverlayProperties.justifyContentValue = 'flex-start';
    switchCardToOverlayStyle();
    addFocus('#vertical-card-content', '#vertical-top-button');
  } else if (target.closest('#vertical-center-button')) {
    html.style.setProperty('--justify-content-value', 'center');
    customOverlayProperties.justifyContentValue = 'center';
    switchCardToOverlayStyle();
    addFocus('#vertical-card-content', '#vertical-center-button');
  } else if (target.closest('#vertical-bottom-button')) {
    html.style.setProperty('--justify-content-value', 'flex-end');
    customOverlayProperties.justifyContentValue = 'flex-end';
    switchCardToOverlayStyle();
    addFocus('#vertical-card-content', '#vertical-bottom-button');
  }
} 

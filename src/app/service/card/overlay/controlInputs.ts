


import { customOverlayProperties } from '../../card-root-styles';
import { highlightCode } from '../../highlight';
import { setCssOverlayCodeBlock } from '../../card-overlay-style';




export function setBorderRadius() {  
  const borderRadius = document.querySelector('#borderRadius') as HTMLInputElement;
  const imagePreview = document.querySelector('#imagePreview') as HTMLElement;

  imagePreview.style.setProperty('border-radius', `${borderRadius.value}px`);
  customOverlayProperties.borderRadiusCard = `${borderRadius.value}px`;
  setCssOverlayCodeBlock();
  highlightCode();
}


export function setPadding() {
  const imagePreview = document.querySelector('#imagePreview') as HTMLElement;
  const padding = document.querySelector('#padding') as HTMLInputElement;

  imagePreview.style.setProperty('padding', `${padding.value}px`);
  customOverlayProperties.paddingCard = `${padding.value}px`;
  setCssOverlayCodeBlock();
  highlightCode();
}


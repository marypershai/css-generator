


import { customOverlayProperties, customStackedProperties } from '../../card-root-styles';
// import { highlightCode } from '../../highlight';
import { setCssOverlayCodeBlock } from '../../card-overlay-style';
import { cardGeneratorPageComponent } from '../../../pages/card-generator-page.component';
import { setCssStackedCodeBlock } from '../../card-stacked-style';
import { resetCopy } from '../copyCode';


export function setBorderRadius() {  
  const borderRadius = document.querySelector('#borderRadius') as HTMLInputElement;
  const imagePreview = document.querySelector('#cardPreview') as HTMLElement;

  if (cardGeneratorPageComponent.isOverlay) {   
    imagePreview.style.setProperty('border-radius', `${borderRadius.value}px`);
    customOverlayProperties.borderRadiusCard = `${borderRadius.value}px`; 
    setCssOverlayCodeBlock();  
    resetCopy();
  }  else {
    imagePreview.style.setProperty('border-radius', `${borderRadius.value}px`);
    customStackedProperties.borderRadiusCard = `${borderRadius.value}px`;
    setCssStackedCodeBlock();
    resetCopy();
  }
  // highlightCode();
}


export function setPadding() {
  const padding = document.querySelector('#padding') as HTMLInputElement;
  const imagePreview = document.querySelector('#cardPreview') as HTMLElement;

  if (cardGeneratorPageComponent.isOverlay) {  
    imagePreview.style.setProperty('padding', `${padding.value}px`);
    customOverlayProperties.paddingCard = `${padding.value}px`;
    setCssOverlayCodeBlock();
    resetCopy();
    // highlightCode();
  } else {
    imagePreview.style.setProperty('padding', `${padding.value}px`);
    customStackedProperties.paddingCard = `${padding.value}px`;
    setCssStackedCodeBlock();
    resetCopy();
  }
  // highlightCode();
}


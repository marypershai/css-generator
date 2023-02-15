


import { customOverlayProperties, customStackedProperties } from '../../card-root-styles';
import { setCssOverlayCodeBlock } from '../../card-overlay-style';
import { cardGeneratorPageComponent } from '../../../pages/card-generator-page.component';
import { setCssStackedCodeBlock } from '../../card-stacked-style';
import { resetCopy } from '../copyCode';


export function setBorderRadius() {  
  const borderRadiusInput = document.querySelector('#borderRadius') as HTMLInputElement;
  const previewElement = document.querySelector('#cardPreview') as HTMLElement;
  const borderRadiusValue = `${borderRadiusInput.value}px`;

  if (cardGeneratorPageComponent.isOverlay) {   
    customOverlayProperties.borderRadiusCard = borderRadiusValue; 
    setCssOverlayCodeBlock();
  }  else {
    customStackedProperties.borderRadiusCard = borderRadiusValue;
    setCssStackedCodeBlock();
  }

  previewElement.style.setProperty('border-radius', borderRadiusValue);
  resetCopy();
}



export function setPadding() {
  const paddingInput = document.querySelector('#padding') as HTMLInputElement;
  const previewElement = document.querySelector('#cardPreview') as HTMLElement;
  const paddingValue = `${paddingInput.value}px`;
  
  if (cardGeneratorPageComponent.isOverlay) {
    customOverlayProperties.paddingCard = paddingValue;
    setCssOverlayCodeBlock();
  } else {
    customStackedProperties.paddingCard = paddingValue;
    setCssStackedCodeBlock();
  }
  
  previewElement.style.setProperty('padding', paddingValue);
  resetCopy();
}



import { customOverlayProperties, customStackedProperties } from '../../card-root-styles';
import { addFocus } from '../addFocus';
import { setCssOverlayCodeBlock } from '../../card-overlay-style';
import { cardGeneratorPageComponent } from '../../../pages/card-generator-page.component';
import { setCssStackedCodeBlock } from '../../card-stacked-style';
import { resetCopy } from '../copyCode';

function handleAspectRation(id: string, isOverlay: boolean, aspectRatioCard: string, aspectRatioImage: string ): void {
  const cardPreview = document.querySelector('#cardPreview') as HTMLElement;
  const imagePreview = document.querySelector('#imagePreview') as HTMLElement; 
  cardPreview.style.setProperty('aspect-ratio', aspectRatioCard);
  imagePreview.style.setProperty('aspect-ratio', aspectRatioImage);
  if (isOverlay) {
    customOverlayProperties.aspectRatioCard = aspectRatioCard;
    customOverlayProperties.aspectRatioImage = aspectRatioImage;
    setCssOverlayCodeBlock();
  } else {
    customStackedProperties.aspectRatioCard = aspectRatioCard;
    customStackedProperties.aspectRatioImage = aspectRatioImage;
    setCssStackedCodeBlock();
  }
  resetCopy();
  addFocus('#aspectRatio', id);
}

export function controlAspectRatio(event: Event): void {
  const target = event.target as HTMLElement; 
  if (cardGeneratorPageComponent.isOverlay) {   
    if (target.closest('#aspectRatio_4_3')) {
      handleAspectRation('#aspectRatio_4_3', true, '4/3', '4/3' );
    } else if (target.closest('#aspectRatio_1_1')) {
      handleAspectRation('#aspectRatio_1_1', true, '1/1', '4/3' );     
    } else if (target.closest('#aspectRatio_1_2')) {
      handleAspectRation('#aspectRatio_1_2', true, '1/2', '4/3' );   
    }
  } else {
    if (target.closest('#aspectRatio_4_3')) {
      handleAspectRation('#aspectRatio_4_3', false, '1/1', '4/3' );      
    } else if (target.closest('#aspectRatio_1_1')) {
      handleAspectRation('#aspectRatio_1_1', false, '1/1', '1/1' );
    } else if (target.closest('#aspectRatio_1_2')) {
      handleAspectRation('#aspectRatio_1_2', false, '1/1', '1/2' );
    }
  }
}


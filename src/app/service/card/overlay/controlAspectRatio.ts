
import { customOverlayProperties, customStackedProperties } from '../../card-root-styles';
import { addFocus } from '../addFocus';
// import { highlightCode } from '../../highlight';
import { setCssOverlayCodeBlock } from '../../card-overlay-style';
import { cardGeneratorPageComponent } from '../../../pages/card-generator-page.component';
import { setCssStackedCodeBlock } from '../../card-stacked-style';
import { resetCopy } from '../copyCode';



export function controlAspectRatio(event: Event): void {
  const target = event.target as HTMLElement;
  const cardPreview = document.querySelector('#cardPreview') as HTMLElement;
  const imagePreview = document.querySelector('#imagePreview') as HTMLElement; 

  if (cardGeneratorPageComponent.isOverlay) {   
    if (target.closest('#aspectRatio_4_3')) {
      cardPreview.style.setProperty('aspect-ratio', '4/3');
      imagePreview.style.setProperty('aspect-ratio', '4/3');
      customOverlayProperties.aspectRatioCard = '4/3';
      customOverlayProperties.aspectRatioImage = '4/3';
      setCssOverlayCodeBlock();
      resetCopy();
      // highlightCode();
      addFocus('#aspectRatio', '#aspectRatio_4_3');
    } else if (target.closest('#aspectRatio_1_1')) {
      cardPreview.style.setProperty('aspect-ratio', '1/1');
      imagePreview.style.setProperty('aspect-ratio', '4/3');
      customOverlayProperties.aspectRatioCard = '1/1';
      customOverlayProperties.aspectRatioImage = '4/3';
      setCssOverlayCodeBlock();
      resetCopy();
      // highlightCode();
      addFocus('#aspectRatio', '#aspectRatio_1_1');
    } else if (target.closest('#aspectRatio_1_2')) {
      cardPreview.style.setProperty('aspect-ratio', '1/2');
      imagePreview.style.setProperty('aspect-ratio', '4/3');
      customOverlayProperties.aspectRatioCard = '1/2';
      customOverlayProperties.aspectRatioImage = '4/3';
      setCssOverlayCodeBlock();
      resetCopy();
      // highlightCode();
      addFocus('#aspectRatio', '#aspectRatio_1_2');
    }
  } else {
    if (target.closest('#aspectRatio_4_3')) {
      cardPreview.style.setProperty('aspect-ratio', '1/1');
      imagePreview.style.setProperty('aspect-ratio', '4/3');
      customOverlayProperties.aspectRatioCard = '1/1';
      customStackedProperties.aspectRatioImage = '4/3';
      setCssStackedCodeBlock();
      resetCopy();
      // highlightCode();
      addFocus('#aspectRatio', '#aspectRatio_4_3');
    } else if (target.closest('#aspectRatio_1_1')) {
      cardPreview.style.setProperty('aspect-ratio', '1/1');
      imagePreview.style.setProperty('aspect-ratio', '1/1');
      customOverlayProperties.aspectRatioCard = '1/1';
      customStackedProperties.aspectRatioImage = '1/1';
      setCssStackedCodeBlock();
      resetCopy();
      // highlightCode();
      addFocus('#aspectRatio', '#aspectRatio_1_1');
    } else if (target.closest('#aspectRatio_1_2')) {
      cardPreview.style.setProperty('aspect-ratio', '1/1');
      imagePreview.style.setProperty('aspect-ratio', '1/2');
      customOverlayProperties.aspectRatioCard = '1/1';
      customStackedProperties.aspectRatioImage = '1/2';
      setCssStackedCodeBlock();
      // highlightCode();
      addFocus('#aspectRatio', '#aspectRatio_1_2');
      resetCopy();
    }
  }

}
import { cardOverlay } from '../service/card-overlay-style';
import { DMComponent } from '../../framework/index';
import { ComponentConfig } from '../../framework/tools/interfaces';
// import { highlightCode } from '../service/highlight';
import { switchCardToOverlayStyle } from '../service/switchCardToOverlayStyle';
import { switchCardToStackedStyle } from '../service/switchCardToStackedStyle';
import { controlContent } from '../service/card/overlay/controlCardContent';
import { controlAspectRatio } from '../service/card/overlay/controlAspectRatio';
import { controlCardOverlay } from '../service/card/overlay/controlCardOverlay';
import { controlTextShadow } from '../service/card/overlay/controlTextShadow';
import { setBorderRadius, setPadding } from '../service/card/overlay/controlInputs';
import { controlStackedContent } from '../service/card/stacked/controlCardContent';
import { copyCSSCode, copyHTMLCode } from '../service/card/copyCode';
import { changeImage } from '../service/card/changeImage';


class CardGeneratorPageComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createCardPage();
    // highlightCode();
  }

  public isOverlay = true;

  public createCardPage(): string {
    this.template = cardOverlay;
    return this.template;
  }

  private events(): Record<string, string> {
    return {
      'click .card-generator-page': 'handleClicks',
      'input #borderRadius': 'handleBorderRadiusInput',
      'input #padding': 'handlePaddingInput',
      'keyup #imageUrl': 'changeImage',

    };
  }

  private handleClicks(event: Event) {
    const target = event.target as HTMLElement;
    if (target.closest('#overlayStyle')) {
      switchCardToOverlayStyle();
    } else if (target.closest('#stackedStyle')) {
      switchCardToStackedStyle();
    } else if (target.closest('#cardContent')) {
      controlContent(event);
    } else if (target.closest('#aspectRatio')) {
      controlAspectRatio(event);
    } else if (target.closest('#cardOverlay')) {
      controlCardOverlay(event);
    } else if (target.closest('#textShadow')) {
      controlTextShadow(event);
    } else if (target.closest('#cardsStacked')) {
      controlStackedContent(event);
    } else if (target.closest('#copyHTMLButton')) {
      copyHTMLCode();
    } else if (target.closest('#copyCSSButton')) {
      copyCSSCode();
    }
  }


  private handleBorderRadiusInput(): void {
    setBorderRadius();
  }

  private handlePaddingInput(): void {
    setPadding();
  }

  private changeImage(event: KeyboardEvent): void {
    changeImage(event);
  }
   
}

export const cardGeneratorPageComponent = new CardGeneratorPageComponent({
  selector: 'app-card-generator-page',
  template: '',
  childComponents: [],
});

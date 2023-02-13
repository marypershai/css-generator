import { cardOverlay } from '../service/card-overlay-style';
import { DMComponent } from '../../framework/index';
import { ComponentConfig } from '../../framework/tools/interfaces';
import { highlightCode } from '../service/highlight';
import { switchCardToOverlayStyle } from '../service/switchCardToOverlayStyle';
import { switchCardToStackedStyle } from '../service/switchCardToStackedStyle';
import { controlContent } from '../service/card/overlay/controlCardContent';
import { controlAspectRatio } from '../service/card/overlay/controlAspectRatio';
import { controlCardOverlay } from '../service/card/overlay/controlCardOverlay';
import { controlTextShadow } from '../service/card/overlay/controlTextShadow';
import { setBorderRadius, setPadding } from '../service/card/overlay/controlInputs';


class CardGeneratorPageComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createCardPage();
    highlightCode();
  }

  public createCardPage(): string {
    this.template = cardOverlay;
    return this.template;
  }

  private events(): Record<string, string> {
    return {
      'click #cardStyles': 'handleStyleClicks', 
      'click #cardContent': 'handleContentClicks',
      'click #aspectRatio': 'handleAspectRatioClicks', 
      'click #cardOverlay': 'handleCardOverlayClicks', 
      'click #textShadow':  'handleCardTextShadowClicks',
      'input #borderRadius': 'handleBorderRadiusInput',
      'input #padding': 'handlePaddingInput',
    };
  }

  private handleStyleClicks(event: Event): void {
    const target = event.target as HTMLElement;
    if (target.closest('#overlayStyle')) {
      switchCardToOverlayStyle();
    } else if (target.closest('#stackedStyle')) {
      switchCardToStackedStyle();
    }
  }

  private handleContentClicks(event: Event): void {
    controlContent(event);
  }

  private handleAspectRatioClicks(event: Event): void {
    controlAspectRatio(event);
  }

  private handleCardOverlayClicks(event: Event): void {
    controlCardOverlay(event);
  }

  private handleCardTextShadowClicks(event: Event): void {
    controlTextShadow(event);
  }

  private handleBorderRadiusInput(): void {
    setBorderRadius();
  }

  private handlePaddingInput(): void {
    setPadding();
  }
   
}

export const cardGeneratorPageComponent = new CardGeneratorPageComponent({
  selector: 'app-card-generator-page',
  template: '',
  childComponents: [],
});

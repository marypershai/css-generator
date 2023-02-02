import { DMComponent } from '../../framework/index';
import { ComponentConfig } from '../../framework/tools/interfaces';

class CardGeneratorPageComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const cardGeneratorPageComponent = new CardGeneratorPageComponent({
  selector: 'app-card-generator-page',
  template: 'Card-generator content',
  childComponents: [],
});

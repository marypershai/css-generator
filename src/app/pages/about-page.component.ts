import { DMComponent } from '../../framework/index';
import { ComponentConfig } from '../../framework/tools/interfaces';

class AboutPageComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const aboutPageComponent = new AboutPageComponent({
  selector: 'app-card-generator-page',
  template: 'About page content',
  childComponents: [],
});

import { DMComponent } from '../../framework/index';
import { ComponentConfig } from '../../framework/tools/interfaces';
import { cssComponentMenuComponent } from '../components/css-component-menu.component';
import { cssComponentLayoutComponent } from '../components/css-component-layout.component';

class CSSGeneratorPageComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }


}

export const cssGeneratorPageComponent = new CSSGeneratorPageComponent({
  selector: 'app-css-generator-page',
  template: `
    <div class="css_generator_body">
      <app-css-component-menu class="css_generator_menu"></app-css-component-menu>
      <app-css-component-layout class="css_generator_layoyt"></app-css-component-layout>
    </div>
  `,
  childComponents: [cssComponentMenuComponent, cssComponentLayoutComponent],
});

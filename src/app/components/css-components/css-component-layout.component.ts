import { ComponentConfig } from '../../../framework/tools/interfaces';
import { DMComponent } from '../../../framework/index';


export class CssComponentLayoutComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const cssComponentLayoutComponent = new CssComponentLayoutComponent({
  selector: 'app-css-component-layout',
  template: 'Choose component',
  childComponents: [],
});

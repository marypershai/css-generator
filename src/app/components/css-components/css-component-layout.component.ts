import { ComponentConfig } from '../../../framework/tools/interfaces';
import { DMComponent } from '../../../framework/index';
import { backgroundColorComponent } from './background-color.component';


export class CssComponentLayoutComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createContent();
  }

  createContent() {
    localStorage.setItem('component', 'background-color');
  }
}

export const cssComponentLayoutComponent = new CssComponentLayoutComponent({
  selector: 'app-css-component-layout',
  template: '<app-background-color></app-background-color>',
  childComponents: [backgroundColorComponent],
});

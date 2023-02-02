import { ComponentConfig } from '../../framework/tools/interfaces';
import { DMComponent } from '../../framework/index';


export class BoxShadowComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const boxShadowComponent = new BoxShadowComponent({
  selector: 'app-box-shadow',
  template: 'boxShadowComponent',
  childComponents: [],
});

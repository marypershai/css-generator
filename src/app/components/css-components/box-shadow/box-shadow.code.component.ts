import { ComponentConfig } from '../../../../framework/tools/interfaces';
import { DMComponent } from '../../../../framework/index';


export class BoxShadowComponentCode extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const boxShadowComponentCode = new BoxShadowComponentCode({
  selector: 'app-box-shadow-code',
  template: 'boxShadowComponent Code',
  childComponents: [],
});

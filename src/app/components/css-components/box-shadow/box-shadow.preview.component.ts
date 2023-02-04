import { ComponentConfig } from '../../../../framework/tools/interfaces';
import { DMComponent } from '../../../../framework/index';


export class BoxShadowComponentPreview extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const boxShadowComponentPreview = new BoxShadowComponentPreview({
  selector: 'app-box-shadow-preview',
  template: 'boxShadowComponent Preview',
  childComponents: [],
});

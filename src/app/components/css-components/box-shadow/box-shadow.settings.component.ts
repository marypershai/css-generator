import { ComponentConfig } from '../../../../framework/tools/interfaces';
import { DMComponent } from '../../../../framework/index';


export class BoxShadowComponentSettings extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const boxShadowComponentSettings = new BoxShadowComponentSettings({
  selector: 'app-box-shadow-settings',
  template: 'boxShadowComponent settings',
  childComponents: [],
});

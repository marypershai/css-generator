import { ComponentConfig } from '../../../../framework/tools/interfaces';
import { DMComponent } from '../../../../framework/index';


export class BorderComponentPreview extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }

}

export const borderComponentPreview = new BorderComponentPreview({
  selector: 'app-border-preview',
  template: 'Тут будет число preview',
  childComponents: [],
});

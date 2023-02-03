import { ComponentConfig } from '../../../../framework/tools/interfaces';
import { DMComponent } from '../../../../framework/index';


export class BorderComponentCode extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }

}

export const borderComponentCode = new BorderComponentCode({
  selector: 'app-border-code',
  template: 'Тут code',
  childComponents: [],
});

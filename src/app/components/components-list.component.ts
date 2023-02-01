import { ComponentConfig } from '../../framework/tools/interfaces';
import { DMComponent } from '../../framework/index';


export class ComponentsListComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const componentsListComponent = new ComponentsListComponent({
  selector: 'app-components-list',
  template: 'List of all components',
  childComponents: [],
});

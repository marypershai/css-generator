import { DMComponent } from '../../framework/index';
import { ComponentConfig } from '../../framework/tools/interfaces';
import { componentsListComponent } from '../components/components-list.component';

class HomePageComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const homePageComponent = new HomePageComponent({
  selector: 'app-winners-page',
  template: `   
        <app-components-list></app-components-list>     
    `,
  childComponents: [componentsListComponent],
});

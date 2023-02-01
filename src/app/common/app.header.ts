import { ComponentConfig } from '../../framework/tools/interfaces';
import { DMComponent } from '../../framework/index';


export class AppHeader extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }

}

export const appHeader = new AppHeader({
  selector: 'app-header',
  template: `
        <header class="menu">
          <a href="#" class="menu-item">All</a>
          <a href="#box-shadow" class="menu-item">Box Shadow</a>
        </header>
    `,
  childComponents: [],
});

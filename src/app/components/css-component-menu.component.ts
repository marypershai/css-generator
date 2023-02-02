import { ComponentConfig } from '../../framework/tools/interfaces';
import { DMComponent } from '../../framework/index';


export class CssComponentMenuComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const cssComponentMenuComponent = new CssComponentMenuComponent({
  selector: 'app-css-component-menu',
  template: `
    <div class="menu">
        <a href="/#css-component-box-shadow" class="menu-item">Box-shadow</a>
        <a href="/#box-shadow" class="menu-item">Box-shadow</a>
    </div>    
  `,
  childComponents: [],
});

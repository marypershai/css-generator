import { ComponentConfig } from '../../framework/tools/interfaces';
import { DMComponent } from '../../framework/index';
import { cssComponentLayoutComponent } from './css-component-layout.component';
import { allCssComponents } from '../../framework/tools/components';


export class CssComponentMenuComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }

  public events(): Record<string, string> {
    return {
      'click .menu': 'chooseComponent',
    };
  }

  private chooseComponent(event: Event) {
    const targetEl = event.target as HTMLElement;
    console.log(targetEl);
    if (targetEl.classList.contains('menu-item')) {
      const menuItem: string | null = targetEl.getAttribute('data-component');
      if (menuItem) {
        cssComponentLayoutComponent.template = `
        <app-${menuItem}></app-${menuItem}>
        `;
        const componentName = allCssComponents.find((component) => {
          if (component.name === menuItem) {
            return component;
          }
        });
        if (componentName) {
          cssComponentLayoutComponent.childComponents = [];
          cssComponentLayoutComponent.childComponents.push(componentName.component);
          cssComponentLayoutComponent.render();
        }
      }

    }
  }
}

export const cssComponentMenuComponent = new CssComponentMenuComponent({
  selector: 'app-css-component-menu',
  template: `
    <ul class="menu">
        <li class="menu-item" data-component="box-shadow">Box-shadow</li>
        <li class="menu-item" data-component="border">Border</li>
    </ul>    
  `,
  childComponents: [],
});

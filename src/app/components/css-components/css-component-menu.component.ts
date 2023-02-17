import { ComponentConfig, Components } from '../../../framework/tools/interfaces';
import { DMComponent } from '../../../framework/index';
import { cssComponentLayoutComponent } from './css-component-layout.component';
import { allCssComponents } from '../../../framework/tools/components';
import { checkLang } from '../../service/lang.service';
import { renderingService } from '../../service/rendering.service';
import { menu } from '../../service/menu.service';


export class CssComponentMenuComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createContent();
  }

  createContent(): void {
    const { lang } = checkLang();
    this.template = `
    <h2 class="css_subheader">${lang.properties}</h2>
        <ul class="css_components_list">
    `;
    menu.forEach((block:{ blockTitle: string, menuItems: [{ menu: string, componentName: string }] }) => {
      this.template += `<ul class="list_subheading">${block.blockTitle}</ul>`;
      block.menuItems.forEach((item: { menu: string, componentName: string }) => {
        const activeItem = item.componentName === localStorage.getItem('component') ? 'active' : '';
        this.template += `<li class="css_component ${activeItem}" data-component="${item.componentName}">${item.menu}</li>`;
      });
    });
    this.template += '</ul>';
  }

  public events(): Record<string, string> {
    return {
      'click .css_components_list': 'chooseComponent',
    };
  }

  private chooseComponent(event: Event) {
    const targetEl = event.target as HTMLElement;
    if (targetEl.classList.contains('css_component')) {
      renderingService.reset();
      const menuItem: string | null = targetEl.getAttribute('data-component');
      if (menuItem) {
        cssComponentLayoutComponent.template = `<app-${menuItem}></app-${menuItem}>`;
        const componentName = allCssComponents.find((component) => {
          if (component.name === menuItem) {
            return component;
          }
        });
        if (componentName) {
          cssComponentLayoutComponent.childComponents = [];
          cssComponentLayoutComponent.childComponents.push(componentName.component);
          cssComponentLayoutComponent.render();
          componentName.component.createContent();
          componentName.component.render();
          if (componentName.component.childComponents.length > 0) {
            componentName.component.childComponents.forEach((component: Components) => {
              component.createContent();
              component.render();
            });
          }

          renderingService.componentName = componentName.name;

          localStorage.setItem('component', componentName.name);
          this.createContent();
          this.render();
        }
      }
    }
  }
}

export const cssComponentMenuComponent = new CssComponentMenuComponent({
  selector: 'app-css-component-menu',
  template: '',
  childComponents: [],
});

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
          <ul class="list_subheading">Layout</ul>
            <li class="menu-item" data-component="">Flexbox Items</li>
            <li class="menu-item" data-component="">Flexbox Menu Bar</li>
            <li class="menu-item" data-component="">Flexbox Gallery</li>
            <li class="menu-item" data-component="">Grid Items</li>
            <li class="menu-item" data-component="">Grid Page</li>
            <li class="menu-item" data-component="">Float</li>
          <ul class="list_subheading">Background</ul>
            <li class="menu-item" data-component="">Background Color</li>
            <li class="menu-item" data-component="">Background Gradient</li>
            <li class="menu-item" data-component="">Background Image</li>
          <ul class="list_subheading">Border</ul>
            <li class="menu-item" data-component="border">Border</li>
            <li class="menu-item" data-component="">Border Radius</li>
            <li class="menu-item" data-component="box-shadow">Box Shadow</li>
          <ul class="list_subheading">Transform</ul>
            <li class="menu-item" data-component="">Translate</li>
            <li class="menu-item" data-component="">Rotate</li>
            <li class="menu-item" data-component="">Scale</li>
            <li class="menu-item" data-component="">Skew</li>
          <ul class="list_subheading">Filter</ul>
            <li class="menu-item" data-component="">Blur</li>
            <li class="menu-item" data-component="">Brightness</li>
            <li class="menu-item" data-component="">Contrast</li>
            <li class="menu-item" data-component="">Grayscale</li>
            <li class="menu-item" data-component="">Hue-Rotate</li>
            <li class="menu-item" data-component="">Invert</li>
            <li class="menu-item" data-component="">Saturate</li>
            <li class="menu-item" data-component="">Sepia</li>
          <ul class="list_subheading">Text</ul>
            <li class="menu-item" data-component="">Text</li>
            <li class="menu-item" data-component="">Text Shadow</li>
        </ul>   
  `,
  childComponents: [],
});

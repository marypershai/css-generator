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
      'click .css_components_list': 'chooseComponent',
    };
  }

  private chooseComponent(event: Event) {
    const targetEl = event.target as HTMLElement;
    console.log(targetEl);
    if (targetEl.classList.contains('css_component')) {
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
        <h2 class="css_subheader"> Properties </h2>
        <ul class="css_components_list">
          <ul class="list_subheading">Layout</ul>
            <li class="css_component" data-component="">Flexbox Items</li>
            <li class="css_component" data-component="">Flexbox Menu Bar</li>
            <li class="css_component" data-component="">Flexbox Gallery</li>
            <li class="css_component" data-component="">Grid Items</li>
            <li class="css_component" data-component="">Grid Page</li>
            <li class="css_component" data-component="">Float</li>
          <ul class="list_subheading">Background</ul>
            <li class="css_component" data-component="">Background Color</li>
            <li class="css_component" data-component="">Background Gradient</li>
            <li class="css_component" data-component="">Background Image</li>
          <ul class="list_subheading">Border</ul>
            <li class="css_component" data-component="border">Border</li>
            <li class="css_component" data-component="">Border Radius</li>
            <li class="css_component" data-component="box-shadow">Box Shadow</li>
          <ul class="list_subheading">Transform</ul>
            <li class="css_component" data-component="">Translate</li>
            <li class="css_component" data-component="">Rotate</li>
            <li class="css_component" data-component="">Scale</li>
            <li class="css_component" data-component="">Skew</li>
          <ul class="list_subheading">Filter</ul>
            <li class="css_component" data-component="">Blur</li>
            <li class="css_component" data-component="">Brightness</li>
            <li class="css_component" data-component="">Contrast</li>
            <li class="css_component" data-component="">Grayscale</li>
            <li class="css_component" data-component="">Hue-Rotate</li>
            <li class="css_component" data-component="">Invert</li>
            <li class="css_component" data-component="">Saturate</li>
            <li class="css_component" data-component="">Sepia</li>
          <ul class="list_subheading">Text</ul>
            <li class="css_component" data-component="">Text</li>
            <li class="css_component" data-component="">Text Shadow</li>
        </ul>   
  `,
  childComponents: [],
});

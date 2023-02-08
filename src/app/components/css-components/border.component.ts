import { ComponentConfig } from '../../../framework/tools/interfaces';
import { DMComponent } from '../../../framework/index';
import { codeLayoutComponent } from './layout/code-layout.component';
import { borderService } from '../../service/components/border-component.service';
import { previewLayoutComponent } from './layout/preview-layout.component';
import { checkLang } from '../../service/lang.service';
import { renderingService } from '../../service/rendering.service';


export class BorderComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createContent();
  }

  createContent() {
    const { lang } = checkLang();
    this.template = `
    <div class="component-content">
        <div class="css_generator_settings">
            <h2 class="css_subheader">${lang.configuration}</h2>
            <br>
            <p>Color</p>
            <input class="input--border-color" type="color" value="${borderService.color}">
            <input class="input--border-color-value" type="text" value="${borderService.color}" disabled>
            <br>
            <br>
            <p>Style</p>
            <select class="select--border-style">
              <option value="solid">Solid</option>
              <option value="dotted">Dotted</option>
              <option value="dashed">Dashed</option>
              <option value="double">Double</option>
              <option value="groove">Groove</option>
              <option value="ridge">Ridge</option>
              <option value="inset">Inset</option>
              <option value="outset">Outset</option>
            </select>
            <br>
            <br>
            <p>Width </p>
            <input class="input-component--range input--border-width" type="range" min="0" max="20" step="1" value="${borderService.borderWidth}">
            <br>
            <br>
        </div>
    `;

    renderingService.componentName = 'border';
    renderingService.codeCSS = borderService.style;
    renderingService.codeHTML = '';
    renderingService.preview = `<div class="preview-rectangle" style="${borderService.style}"></div>`;
    codeLayoutComponent.createContent();
    previewLayoutComponent.createContent();

    this.template += `
      <div class="css_generator_result">
          <app-preview-layout class="css_generator_preview"></app-preview-layout>
          <app-code-layout class="css_generator_code"></app-code-layout>
        </div>
    </div>
    `;
  }

  public events(): Record<string, string> {
    return {
      'change .input--border-width': 'changeBorderWidth',
      'change .input--border-color': 'changeBorderColor',
      'change .select--border-style': 'changeBorderStyle',
    };
  }

  private  changeBorderWidth(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    borderService.borderWidth = +target.value;
    this.renderLayout();
  }

  private changeBorderColor(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    borderService.color = target.value;
    (document.querySelector('.input--border-color-value') as HTMLInputElement).value = target.value;
    this.renderLayout();
  }

  private changeBorderStyle(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    borderService.borderType = target.value;
    this.renderLayout();
  }

  private renderLayout(): void {
    borderService.createStyle();
    renderingService.codeCSS = borderService.style;
    renderingService.preview = `<div class="preview-rectangle" style="${borderService.style}"></div>`;
    console.log('render');
    console.log(renderingService);
    previewLayoutComponent.createContent();
    previewLayoutComponent.render();
    codeLayoutComponent.createContent();
    codeLayoutComponent.render();
  }
}

export const borderComponent = new BorderComponent({
  selector: 'app-border',
  template: '',
  childComponents: [codeLayoutComponent, previewLayoutComponent],
});

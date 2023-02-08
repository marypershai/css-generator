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
            <div class="setting-container">
                <p class="setting-title">Color</p>
                <div class="input--color-block">
                  <div class="input--color-block-left">
                      <input id="border-color" class="input-color" type="color" value="${borderService.color}">
                  </div>
                  <div class="input--color-block-right">
                      <input class="input-color input-color-value" type="text" value="${borderService.color}" disabled>
                  </div>
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">Style</p>
                <select class="select--border-style custom-select">
                  <option value="solid">Solid</option>
                  <option value="dotted">Dotted</option>
                  <option value="dashed">Dashed</option>
                  <option value="double">Double</option>
                  <option value="groove">Groove</option>
                  <option value="ridge">Ridge</option>
                  <option value="inset">Inset</option>
                  <option value="outset">Outset</option>
                </select>
            </div>
            <div class="setting-container">
                <p class="setting-title">Width</p>
                <input id="border-width" type="range" min="0" max="20" step="1" value="${borderService.borderWidth}">
                <div class="range__info">
                    <div class="range__info-min">0</div>
                    <div class="range__info-max">20</div> 
                </div>
            </div>
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
      'change #border-width': 'changeBorderWidth',
      'change #border-color': 'changeBorderColor',
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
    (document.querySelector('.input-color-value') as HTMLInputElement).value = target.value;
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

import { ComponentConfig } from '../../../framework/tools/interfaces';
import { DMComponent } from '../../../framework/index';
import { codeLayoutComponent } from './layout/code-layout.component';
import { previewLayoutComponent } from './layout/preview-layout.component';
import { checkLang } from '../../service/lang.service';
import { renderingService } from '../../service/rendering.service';
import { backgroundColorService } from '../../service/components/background-color.service';


export class BackgroundColorComponent extends DMComponent {
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
            <div class="setting-container">
                <p class="setting-title">${lang.color}</p>
                <div class="input--color-block">
                  <div class="input--color-block-left">
                      <input id="bg-color" class="input-color" type="color" value="${backgroundColorService.color}">
                  </div>
                  <div class="input--color-block-right">
                      <input id="bg-color-value" class="input-color input-color-value" type="text" value="${backgroundColorService.color}">
                      <p class="error visibility-hidden">${lang.notValid}</p>
                  </div>
                </div>
            </div>
        </div>
    `;

    renderingService.componentName = 'background-color';
    renderingService.codeCSS = backgroundColorService.style;
    renderingService.codeHTML = '';
    renderingService.preview = `<div class="preview-rectangle" style="${backgroundColorService.style}"></div>`;
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
      'change #bg-color': 'changeBorderColor',
      'keyup #bg-color-value': 'changeHexColorInput',
    };
  }

  private changeBorderColor(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    backgroundColorService.color = target.value;
    (document.querySelector('.input-color-value') as HTMLInputElement).value = target.value;
    this.renderLayout();
  }

  private changeHexColorInput(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    const colorValue = target.value.toLowerCase();
    const regExp = /#[a-f0-9]{6}/gi;
    const errorText = target.nextElementSibling as HTMLElement;
    if (colorValue.match(regExp)) {
      errorText.classList.add('visibility-hidden');
      backgroundColorService.color = target.value;
      (document.querySelector('#bg-color') as HTMLInputElement).value = target.value;
      this.renderLayout();
    } else {
      if (errorText.classList.contains('visibility-hidden')) {
        errorText.classList.remove('visibility-hidden');
      }
    }
  }

  private renderLayout(): void {
    backgroundColorService.createStyle();
    renderingService.codeCSS = backgroundColorService.style;
    renderingService.preview = `<div class="preview-rectangle" style="${backgroundColorService.style}"></div>`;
    previewLayoutComponent.createContent();
    previewLayoutComponent.render();
    codeLayoutComponent.createContent();
    codeLayoutComponent.render();
  }
}

export const backgroundColorComponent = new BackgroundColorComponent({
  selector: 'app-background-color',
  template: '',
  childComponents: [codeLayoutComponent, previewLayoutComponent],
});

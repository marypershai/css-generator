import { ComponentConfig } from '../../../framework/tools/interfaces';
import { DMComponent } from '../../../framework/index';
import { codeLayoutComponent } from './layout/code-layout.component';
import { previewLayoutComponent } from './layout/preview-layout.component';
import { checkLang } from '../../service/lang.service';
import { renderingService } from '../../service/rendering.service';
import { textShadowService } from '../../service/components/text-shadow.service';


export class TextShadowComponent extends DMComponent {
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
                <p class="setting-title">${lang.horizontalShadow}</p>
                <input id="text-shadow-x" type="range" value="${textShadowService.xpixels}" step="1" min="-20" max="20">
                <div class="range__info">
                    <div class="range__info-min">-20px</div>
                    <div class="range__info-max">20px</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">${lang.verticalShadow}</p>
                <input id="text-shadow-y" type="range" value="${textShadowService.ypixels}" step="1" min="-20" max="20">
                <div class="range__info">
                    <div class="range__info-min">-20px</div>
                    <div class="range__info-max">20px</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">${lang.blurRadius}</p>
                <input id="text-shadow-blur-radius" type="range" value="${textShadowService.blurPixels}" step="1" min="0" max="20">
                <div class="range__info">
                    <div class="range__info-min">0px</div>
                    <div class="range__info-max">20px</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">${lang.shadowColor}</p>
                <div class="input--color-block">
                  <div class="input--color-block-left">
                      <input id="text-shadow-color" class="input-color" type="color" value="${textShadowService.color}">
                  </div>
                  <div class="input--color-block-right">
                      <input class="input-color input-color-value" type="text" value="${textShadowService.color}" disabled>
                  </div>
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">${lang.shadowOpacity}</p>
                <input id="text-shadow-opacity" type="range" value="${textShadowService.colorOpacity}" step="0.01" min="0" max="1">
                <div class="range__info">
                    <div class="range__info-min">0</div>
                    <div class="range__info-max">1</div> 
                </div>
            </div>
        </div>
    `;

    renderingService.componentName = 'text-shadow';
    renderingService.codeCSS = textShadowService.style;
    renderingService.codeHTML = '';
    renderingService.preview = `<div class="preview-text" style="${textShadowService.style}">This text is the preview text</div>`;
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
      'change #text-shadow-x': 'changeTextShadowX',
      'change #text-shadow-y': 'changeTextShadowY',
      'change #text-shadow-blur-radius': 'changeTextShadowBlur',
      'change #text-shadow-color': 'changeTextShadowColor',
      'change #text-shadow-opacity': 'changeTextShadowOpacity',
    };
  }

  private  changeTextShadowX(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    textShadowService.xpixels = +target.value;
    this.renderLayout();
  }

  private  changeTextShadowY(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    textShadowService.ypixels = +target.value;
    this.renderLayout();
  }

  private  changeTextShadowBlur(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    textShadowService.blurPixels = +target.value;
    this.renderLayout();
  }

  private changeTextShadowColor(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    textShadowService.color = target.value;
    (document.querySelector('.input-color-value') as HTMLInputElement).value = target.value;
    this.renderLayout();
  }

  private changeTextShadowOpacity(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    textShadowService.colorOpacity = +target.value;
    this.renderLayout();
  }

  private renderLayout(): void {
    textShadowService.createStyle();
    renderingService.codeCSS = textShadowService.style;
    renderingService.preview = `<div class="preview-text" style="${textShadowService.style}">This text is the preview text</div>`;
    previewLayoutComponent.createContent();
    previewLayoutComponent.render();
    codeLayoutComponent.createContent();
    codeLayoutComponent.render();
  }
}

export const textShadowComponent = new TextShadowComponent({
  selector: 'app-text-shadow',
  template: '',
  childComponents: [codeLayoutComponent, previewLayoutComponent],
});

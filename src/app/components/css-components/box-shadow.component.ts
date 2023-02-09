import { ComponentConfig } from '../../../framework/tools/interfaces';
import { DMComponent } from '../../../framework/index';
import { codeLayoutComponent } from './layout/code-layout.component';
import { previewLayoutComponent } from './layout/preview-layout.component';
import { checkLang } from '../../service/lang.service';
import { renderingService } from '../../service/rendering.service';
import { boxShadowService } from '../../service/components/box-shadow-component.service';


export class BoxShadowComponent extends DMComponent {
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
                <p class="setting-title">X (pixels)</p>
                <input id="x-pixels" type="range" value="${boxShadowService.xpixels}" step="1" min="-10" max="10">
                <div class="range__info">
                    <div class="range__info-min">-10</div>
                    <div class="range__info-max">10</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">Y (pixels)</p>
                <input id="y-pixels" type="range" value="${boxShadowService.ypixels}" step="1" min="-10" max="10">
                <div class="range__info">
                    <div class="range__info-min">-10</div>
                    <div class="range__info-max">10</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">Blur (pixels)</p>
                <input id="blur-pixels" type="range" value="${boxShadowService.blurPixels}" step="1" min="0" max="20">
                <div class="range__info">
                    <div class="range__info-min">0</div>
                    <div class="range__info-max">20</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">Spread (pixels)</p>
                <input id="spread-pixels" type="range" value="${boxShadowService.spreadPixels}" step="1" min="0" max="20">
                <div class="range__info">
                    <div class="range__info-min">0</div>
                    <div class="range__info-max">20</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">Color</p>
                <div class="input--color-block">
                  <div class="input--color-block-left">
                      <input id="shadow-color" class="input-color" type="color" value="${boxShadowService.color}">
                  </div>
                  <div class="input--color-block-right">
                      <input class="input-color input-color-value" type="text" value="${boxShadowService.color}" disabled>
                  </div>
                    
                </div>
                
            </div>
            
            <div class="setting-container">
                <p class="setting-title">Color opacity</p>
                <input id="color-opacity" type="range" value="${boxShadowService.colorOpacity}" step="0.01" min="0" max="1">
                <div class="range__info">
                    <div class="range__info-min">0</div>
                    <div class="range__info-max">1</div> 
                </div>
            </div>
        </div>
    `;
    renderingService.componentName = 'box-shadow';
    renderingService.codeCSS = boxShadowService.style;
    renderingService.codeHTML = '';
    renderingService.preview = `<div class="preview-rectangle" style="${boxShadowService.style}"></div>`;
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
      'change #x-pixels': 'changeXPixels',
      'change #y-pixels': 'changeYPixels',
      'change #blur-pixels': 'changeBlurPixels',
      'change #spread-pixels': 'changeSpreadPixels',
      'change #shadow-color': 'changeColor',
      'change #color-opacity': 'changeColorOpacity',
    };
  }

  private  changeXPixels(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    boxShadowService.xpixels = +target.value;
    this.renderLayout();
  }

  private  changeYPixels(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    boxShadowService.ypixels = +target.value;
    this.renderLayout();
  }

  private  changeBlurPixels(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    boxShadowService.blurPixels = +target.value;
    this.renderLayout();
  }

  private  changeSpreadPixels(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    boxShadowService.spreadPixels = +target.value;
    this.renderLayout();
  }

  private  changeColor(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    boxShadowService.color = target.value;
    (document.querySelector('.input-color-value') as HTMLInputElement).value = target.value;
    this.renderLayout();
  }

  private  changeColorOpacity(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    boxShadowService.colorOpacity = +target.value;
    this.renderLayout();
  }

  private renderLayout(): void {
    boxShadowService.createStyle();
    renderingService.codeCSS = boxShadowService.style;
    renderingService.preview = `<div class="preview-rectangle" style="${boxShadowService.style}"></div>`;
    previewLayoutComponent.createContent();
    previewLayoutComponent.render();
    codeLayoutComponent.createContent();
    codeLayoutComponent.render();
  }
}

export const boxShadowComponent = new BoxShadowComponent({
  selector: 'app-box-shadow',
  template: '',
  childComponents: [codeLayoutComponent, previewLayoutComponent],
});

import { ComponentConfig } from '../../../framework/tools/interfaces';
import { DMComponent } from '../../../framework/index';
import { codeLayoutComponent } from './layout/code-layout.component';
import { previewLayoutComponent } from './layout/preview-layout.component';
import { checkLang } from '../../service/lang.service';
import { renderingService } from '../../service/rendering.service';
import { backgroundGradientService } from '../../service/components/background-gradient.service';


export class BackgroundGradientComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createContent();
  }

  createContent() {
    const { lang } = checkLang();
    const degreeVisability = (backgroundGradientService.orientation === 'linear-gradient' ||
        backgroundGradientService.orientation === 'repeating-linear-gradient') ? '' : 'visibility-hidden';
    const additionalBlockVisability = (backgroundGradientService.orientation !== 'linear-gradient' &&
        backgroundGradientService.orientation !== 'repeating-linear-gradient' &&
        backgroundGradientService.orientation !== 'conic-gradient') ? '' : 'visibility-hidden';
    this.template = `
    <div class="component-content">
        <div class="css_generator_settings">
            <h2 class="css_subheader">${lang.configuration}</h2>
            
            <div class="setting-container">
                <p class="setting-title">${lang.orientation}</p>
                <select id="bg-orintation" class="custom-select">`;

    backgroundGradientService.orientationOptions.forEach((option) => {
      const selected = backgroundGradientService.orientation === option ? 'selected' : '';
      this.template += `<option value="${option}" ${selected}>${option[0].toUpperCase() + option.slice(1)}</option>`;
    });

    this.template += `
                </select>
            </div>
            <div class="bg-addition-block ${additionalBlockVisability}">
                <div class="spacer"></div>
                <div class="setting-container">
                    <p class="setting-title">${lang.size}</p>
                    <select id="bg-size" class="custom-select">`;

    backgroundGradientService.sizeOptions.forEach((option) => {
      const selected = backgroundGradientService.size === option ? 'selected' : '';
      this.template += `<option value="${option}" ${selected}>${option[0].toUpperCase() + option.slice(1)}</option>`;
    });

    this.template += ` 
                    </select> 
                </div>      
                <div class="setting-container">
                    <p class="setting-title">${lang.position}</p>
                    <select id="bg-position" class="custom-select">
    `;

    backgroundGradientService.positionOptions.forEach((option) => {
      const selected = backgroundGradientService.size === option ? 'selected' : '';
      this.template += `<option value="${option}" ${selected}>${option[0].toUpperCase() + option.slice(1)}</option>`;
    });

    this.template += ` 
                    </select>
                    </div>
            </div>
            
            <div class="setting-container ${degreeVisability}">
                <p class="setting-title">${lang.degree}</p>
                <input id="bg-degree" type="range" value="${backgroundGradientService.degree}" step="1" min="0" max="360">
                <div class="range__info">
                    <div class="range__info-min">0°</div>
                    <div class="range__info-max">360°</div> 
                </div>
            </div>

            <div class="spacer"></div>
            <div class="gradient-colors">
              <div class="setting-container">
                  <p class="setting-title">${lang.startColor}</p>
                  <div class="input--color-block">
                    <div class="input--color-block-left">
                        <input id="bg-startColor" class="input-color" type="color" value="${backgroundGradientService.startColor}">
                    </div>
                    <div class="input--color-block-right">
                        <input id="bg-startColor-value" class="input-color input-color-value" type="text" value="${backgroundGradientService.startColor}" disabled>
                    </div>
                    
                  </div>
              </div>
              <div class="setting-container">
                      <p class="setting-title">${lang.spread}</p>
                      <input id="bg-startSpread" type="range" value="${backgroundGradientService.spreadStartColor}" step="1" min="0" max="100">
                      <div class="range__info">
                          <div class="range__info-min">0%</div>
                          <div class="range__info-max">100%</div> 
                      </div>
                    </div>
            </div>
                        
            <div class="gradient-colors">
              <div class="setting-container">
                  <p class="setting-title">${lang.startColor}</p>
                  <div class="input--color-block">
                    <div class="input--color-block-left">
                        <input id="bg-endColor" class="input-color" type="color" value="${backgroundGradientService.endColor}">
                    </div>
                    <div class="input--color-block-right">
                        <input id="bg-endColor-value" class="input-color input-color-value" type="text" value="${backgroundGradientService.endColor}" disabled>
                    </div>
                    
                  </div>
              </div>
              <div class="setting-container">
                      <p class="setting-title">${lang.spread}</p>
                      <input id="bg-endSpread" type="range" value="${backgroundGradientService.spreadEndColor}" step="1" min="0" max="100">
                      <div class="range__info">
                          <div class="range__info-min">0%</div>
                          <div class="range__info-max">100%</div> 
                      </div>
                    </div>
            </div>
        </div>
    `;

    renderingService.componentName = 'background-gradient';
    renderingService.codeCSS = backgroundGradientService.style;
    renderingService.codeHTML = '';
    renderingService.preview = `<div class="preview-rectangle" style="${backgroundGradientService.style}"></div>`;
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
      'change #bg-orintation': 'changeBGOrientation',
      'change #bg-size': 'changeBGSize',
      'change #bg-position': 'changeBGPosition',
      'change #bg-degree': 'changeBGDegree',
      'change #bg-startColor': 'changeBGStartColor',
      'change #bg-endColor': 'changeBGEndColor',
      'change #bg-startSpread': 'changeBGStartSpread',
      'change #bg-endSpread': 'changeBGEndSpread',
    };
  }

  private  changeBGOrientation(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    backgroundGradientService.orientation = target.value;
    this.createContent();
    this.render();
    this.renderLayout();
  }

  private  changeBGSize(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    backgroundGradientService.size = target.value;
    this.renderLayout();
  }

  private  changeBGPosition(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    backgroundGradientService.position = target.value;
    this.renderLayout();
  }

  private  changeBGDegree(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    backgroundGradientService.degree = +target.value;
    this.renderLayout();
  }

  private changeBGStartColor(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    backgroundGradientService.startColor = target.value;
    (document.querySelector('#bg-startColor-value') as HTMLInputElement).value = target.value;
    this.renderLayout();
  }

  private changeBGEndColor(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    backgroundGradientService.endColor = target.value;
    (document.querySelector('#bg-endColor-value') as HTMLInputElement).value = target.value;
    this.renderLayout();
  }

  private changeBGStartSpread(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    backgroundGradientService.spreadStartColor = +target.value;
    this.renderLayout();
  }

  private changeBGEndSpread(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    console.log('sdsd');
    backgroundGradientService.spreadEndColor = +target.value;
    this.renderLayout();
  }

  private renderLayout(): void {
    backgroundGradientService.createStyle();
    renderingService.codeCSS = backgroundGradientService.style;
    renderingService.preview = `<div class="preview-rectangle" style="${backgroundGradientService.style}"></div>`;
    previewLayoutComponent.createContent();
    previewLayoutComponent.render();
    codeLayoutComponent.createContent();
    codeLayoutComponent.render();
  }
}

export const backgroundGradientComponent = new BackgroundGradientComponent({
  selector: 'app-background-gradient',
  template: '',
  childComponents: [codeLayoutComponent, previewLayoutComponent],
});

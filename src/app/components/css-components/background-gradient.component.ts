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
            
            <div class="stop-colors">`;

    backgroundGradientService.middleColors.forEach((colorItem: { color: string, spread: number }, i: number) =>{
      const colorTitle = i === 0 ? lang.startColor : lang.stopColor;
      const deleteVisability = i > 0 ? '' : 'visibility-hidden';
      this.template += `
            <div class="gradient-colors" data-color="${i}">
              <div class="setting-container">
                  <div class="setting-title">${colorTitle}
                    <div class="delete ${deleteVisability}">
                          <svg style="color: red" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x" viewBox="0 2 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="red"></path> </svg>
                    </div>
                  </div>
                  
                  <div class="input--color-block">
                    <div class="input--color-block-left">
                        <input class="input-color" type="color" value="${colorItem.color}">
                    </div>
                    <div class="input--color-block-right">
                        <input class="input-color input-color-value" type="text" value="${colorItem.color}" disabled>
                    </div>
                    
                  </div>
              </div>
              <div class="setting-container">
                      <p class="setting-title">${lang.spread}</p>
                      <input type="range" value="${colorItem.spread}" step="1" min="0" max="100" class="input-spread-range">
                      <div class="range__info">
                          <div class="range__info-min">0%</div>
                          <div class="range__info-max">100%</div> 
                      </div>
              </div>
            </div>
      `;
    });

    this.template += ` 
            </div>
                        
            <div class="gradient-colors">
              <div class="setting-container">
                  <p class="setting-title">${lang.endColor}</p>
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
            
            <button id="bg-add-color" class="add-color">${lang.addStopColor}</button>
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
      'change #bg-endColor': 'changeBGEndColor',
      'change #bg-endSpread': 'changeBGEndSpread',
      'click #bg-add-color' : 'addStopColor',
      'change .stop-colors' : 'changeMiddleColor',
      'click .stop-colors' : 'deleteMiddleColor',
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

  private changeBGEndColor(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    backgroundGradientService.endColor = target.value;
    (document.querySelector('#bg-endColor-value') as HTMLInputElement).value = target.value;
    this.renderLayout();
  }

  private changeBGEndSpread(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    backgroundGradientService.spreadEndColor = +target.value;
    this.renderLayout();
  }

  private addStopColor(): void {
    backgroundGradientService.middleColors.push({
      color: '#1e00ff',
      spread: 10,
    });
    this.createContent();
    this.render();
    this.renderLayout();
  }

  private changeMiddleColor(event:Event): void {
    const target = event.target as HTMLInputElement;
    const colorBlock = target.closest('[data-color]') as HTMLElement;
    const id: string | null = colorBlock.getAttribute('data-color');
    const colorPicker = colorBlock.querySelector('.input-color') as HTMLInputElement;
    const colorSpread = colorBlock.querySelector('.input-spread-range') as HTMLInputElement;
    if (id) {
      if (target === colorPicker) {
        const color: string = colorPicker.value;
        (colorBlock.querySelector('.input-color-value') as HTMLInputElement).value = color;
        backgroundGradientService.middleColors[+id].color = color;
      }
      if (target === colorSpread) {
        const spread: string = (colorBlock.querySelector('.input-spread-range') as HTMLInputElement).value;
        backgroundGradientService.middleColors[+id].spread = +spread;
      }
      console.log(id);
      if (+id !== 0) {
        console.log('here');
        const deleteButton = colorBlock.querySelector('delete') as HTMLElement;
        if (target === deleteButton) {
          backgroundGradientService.deleteStopColor(+id);
          this.createContent();
          this.render();
        }
      }
    }
    this.renderLayout();
  }

  private deleteMiddleColor(event:Event): void {
    const target = event.target as HTMLInputElement;
    if (target.closest('.delete')) {
      const colorBlock = target.closest('[data-color]') as HTMLElement;
      const id: string | null = colorBlock.getAttribute('data-color');
      if (id) {
        backgroundGradientService.deleteStopColor(+id);
        this.createContent();
        this.render();
      }
      this.renderLayout();
    }

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

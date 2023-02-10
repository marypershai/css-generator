import { ComponentConfig } from '../../../framework/tools/interfaces';
import { DMComponent } from '../../../framework/index';
import { codeLayoutComponent } from './layout/code-layout.component';
import { previewLayoutComponent } from './layout/preview-layout.component';
import { checkLang } from '../../service/lang.service';
import { renderingService } from '../../service/rendering.service';
import { filterService } from '../../service/components/filter-component.service';


export class FilterComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createContent();
  }

  createContent() {
    const { lang } = checkLang();
    const boxShadowSlider = filterService.dropshadow ? 'checked' : '';
    const boxShadowVisibility = filterService.dropshadow ? '' : 'visibility-hidden';
    this.template = `
    <div class="component-content">
        <div class="css_generator_settings">
            <h2 class="css_subheader">${lang.configuration}</h2>
            
            <div class="setting-container">
                <p class="setting-title">Blur</p>
                <input id="filter-blur" type="range" min="0" max="10" step="1" value="${filterService.blur}">
                <div class="range__info">
                    <div class="range__info-min">0px</div>
                    <div class="range__info-max">10px</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">Grayscale</p>
                <input id="filter-grayscale" type="range" min="0" max="100" step="1" value="${filterService.grayscale}">
                <div class="range__info">
                    <div class="range__info-min">0%</div>
                    <div class="range__info-max">100%</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">Sepia</p>
                <input id="filter-sepia" type="range" min="0" max="100" step="1" value="${filterService.sepia}">
                <div class="range__info">
                    <div class="range__info-min">0%</div>
                    <div class="range__info-max">100%</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">Brightness</p>
                <input id="filter-brightness" type="range" min="0" max="100" step="1" value="${filterService.brightness}">
                <div class="range__info">
                    <div class="range__info-min">0%</div>
                    <div class="range__info-max">100%</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">Hue Rotate</p>
                <input id="filter-hue-rotate" type="range" min="0" max="360" step="1" value="${filterService.hueRotate}">
                <div class="range__info">
                    <div class="range__info-min">0°</div>
                    <div class="range__info-max">360°</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">Saturate</p>
                <input id="filter-saturate" type="range" min="0" max="1000" step="1" value="${filterService.saturate}">
                <div class="range__info">
                    <div class="range__info-min">0%</div>
                    <div class="range__info-max">1000%</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">Opacity</p>
                <input id="filter-opacity" type="range" min="0" max="100" step="1" value="${filterService.opacity}">
                <div class="range__info">
                    <div class="range__info-min">0%</div>
                    <div class="range__info-max">100%</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">Contrast</p>
                <input id="filter-contrast" type="range" min="0" max="1000" step="1" value="${filterService.contrast}">
                <div class="range__info">
                    <div class="range__info-min">0%</div>
                    <div class="range__info-max">1000%</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">Invert</p>
                <input id="filter-invert" type="range" min="0" max="100" step="1" value="${filterService.invert}">
                <div class="range__info">
                    <div class="range__info-min">0%</div>
                    <div class="range__info-max">100%</div> 
                </div>
            </div>
                        
            <div class="setting-container">
                <p class="setting-title">Drop Shadow</p>
                <div class="customSlider">  
                  <input type="checkbox" value="None" id="filter-boxShadow" ${boxShadowSlider} />
                  <label for="filter-boxShadow"></label>
                </div>
                <div class="filter-shadow-settings ${boxShadowVisibility}">
                  <div class="setting-subcontainer">
                      <p class="setting-title">Color</p>
                      <div class="input--color-block">
                          <div class="input--color-block-left">
                              <input id="shadow-color" class="input-color" type="color" value="${filterService.color}">
                          </div>
                          <div class="input--color-block-right">
                              <input class="input-color input-color-value" type="text" value="${filterService.color}" disabled>
                          </div>
                      </div>
                  </div>
                  
                  <div class="setting-subcontainer">
                    <p class="setting-title">Horizontal Shadow Length</p>
                    <input id="filter-horizontalShadow" type="range" min="-50" max="50" step="1" value="${filterService.horizontalShadow}">
                    <div class="range__info">
                        <div class="range__info-min">-50px</div>
                        <div class="range__info-max">50px</div> 
                    </div>
                  </div>
                  
                  <div class="setting-subcontainer">
                    <p class="setting-title">Vertical Shadow Length</p>
                    <input id="filter-verticalShadow" type="range" min="-50" max="50" step="1" value="${filterService.verticalShadow}">
                    <div class="range__info">
                        <div class="range__info-min">-50px</div>
                        <div class="range__info-max">50px</div> 
                    </div>
                  </div>
                  
                  <div class="setting-subcontainer">
                    <p class="setting-title">Blur Radius</p>
                    <input id="filter-blurRadius" type="range" min="0" max="400" step="1" value="${filterService.blurRadius}">
                    <div class="range__info">
                        <div class="range__info-min">0px</div>
                        <div class="range__info-max">100px</div> 
                    </div>
                  </div>
                </div>
            </div>
            
        </div>
    `;

    renderingService.componentName = 'border';
    renderingService.codeCSS = filterService.style;
    renderingService.codeHTML = '';
    renderingService.preview = `
        <div style="${filterService.style}">
            <img src="https://app.rs.school/static/images/im-fine.svg">
        </div>
    `;
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
      'change #filter-blur': 'changeFilterBlur',
      'change #filter-grayscale': 'changeFilterGrayscale',
      'change #filter-sepia': 'changeFilterSepia',
      'change #filter-brightness': 'changeFilterBrightness',
      'change #filter-hue-rotate': 'changeFilterHueRotate',
      'change #filter-opacity': 'changeFilterOpacity',
      'change #filter-saturate': 'changeFilterSaturate',
      'change #filter-contrast': 'changeFilterContrast',
      'change #filter-invert': 'changeFilterInvert',
      'click #filter-boxShadow' : 'changeFilterBoxShadow',
      'change #filter-horizontalShadow': 'changeFilterHorizontalShadow',
      'change #filter-verticalShadow': 'changeFilterVerticalShadow',
      'change #filter-blurRadius': 'changeFilterBlurRadius',
      'change #shadow-color': 'changeBoxShadowColor',
    };
  }

  private  changeFilterBlur(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    filterService.blur = +target.value;
    this.renderLayout();
  }

  private  changeFilterGrayscale(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    filterService.grayscale = +target.value;
    this.renderLayout();
  }

  private  changeFilterSepia(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    filterService.sepia = +target.value;
    this.renderLayout();
  }

  private  changeFilterBrightness(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    filterService.brightness = +target.value;
    this.renderLayout();
  }

  private  changeFilterHueRotate(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    filterService.hueRotate = +target.value;
    this.renderLayout();
  }

  private  changeFilterOpacity(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    filterService.opacity = +target.value;
    this.renderLayout();
  }

  private  changeFilterSaturate(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    filterService.saturate = +target.value;
    this.renderLayout();
  }

  private  changeFilterContrast(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    filterService.contrast = +target.value;
    this.renderLayout();
  }

  private  changeFilterInvert(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    filterService.invert = +target.value;
    this.renderLayout();
  }

  private  changeFilterBoxShadow(): void {
    const slider = document.querySelector('.filter-shadow-settings') as HTMLElement;
    slider.classList.toggle('visibility-hidden');
    if (slider.classList.contains('visibility-hidden')) {
      filterService.dropshadow = false;
    } else {
      filterService.dropshadow = true;
    }
    this.renderLayout();
  }

  private  changeFilterHorizontalShadow(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    filterService.horizontalShadow = +target.value;
    this.renderLayout();
  }

  private  changeFilterVerticalShadow(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    filterService.verticalShadow = +target.value;
    this.renderLayout();
  }

  private  changeFilterBlurRadius(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    filterService.blurRadius = +target.value;
    this.renderLayout();
  }

  private changeBoxShadowColor(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    filterService.color = target.value;
    (document.querySelector('.input-color-value') as HTMLInputElement).value = target.value;
    this.renderLayout();
  }

  private renderLayout(): void {
    filterService.createStyle();
    renderingService.codeCSS = filterService.style;
    renderingService.preview = `
      <div style="${filterService.style}">
            <img src="https://app.rs.school/static/images/im-fine.svg">
        </div>
    `;
    previewLayoutComponent.createContent();
    previewLayoutComponent.render();
    codeLayoutComponent.createContent();
    codeLayoutComponent.render();
  }
}

export const filterComponent = new FilterComponent({
  selector: 'app-filter',
  template: '',
  childComponents: [codeLayoutComponent, previewLayoutComponent],
});

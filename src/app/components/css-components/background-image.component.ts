import { ComponentConfig } from '../../../framework/tools/interfaces';
import { DMComponent } from '../../../framework/index';
import { codeLayoutComponent } from './layout/code-layout.component';
import { previewLayoutComponent } from './layout/preview-layout.component';
import { checkLang } from '../../service/lang.service';
import { renderingService } from '../../service/rendering.service';
import { backgroundImageService } from '../../service/components/background-image.service';
import { validateUrl } from '../../service/card/changeImage';


export class BackgroundImageComponent extends DMComponent {

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
                <p class="setting-title">${lang.imgUrl}</p>
                <input id="bg-image-url" class="input-color input-wide" type="text" value="${backgroundImageService.url}">
                <p class="error visibility-hidden">${lang.notValid}</p>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">${lang.position}</p>
                <select id="bg-position" class="custom-select">                
    `;

    backgroundImageService.positionOptions.forEach((option) => {
      const selected = backgroundImageService.position === option ? 'selected' : '';
      this.template += `<option value="${option}" ${selected}>${option[0].toUpperCase() + option.slice(1)}</option>`;
    });

    this.template += `
                </select>
            </div>
             <div class="setting-container">
                <p class="setting-title">${lang.size}</p>
                <select id="bg-image-size" class="custom-select">
    `;

    backgroundImageService.sizeOptions.forEach((option) => {
      const selected = backgroundImageService.size === option ? 'selected' : '';
      this.template += `<option value="${option}" ${selected}>${option[0].toUpperCase() + option.slice(1)}</option>`;
    });

    this.template += `
                </select>
            </div>
             <div class="setting-container">
                <p class="setting-title">${lang.repeat}</p>
                <select id="bg-image-repeat" class="custom-select">
    `;

    backgroundImageService.repeatOptions.forEach((option) => {
      const selected = backgroundImageService.repeat === option ? 'selected' : '';
      this.template += `<option value="${option}" ${selected}>${option[0].toUpperCase() + option.slice(1)}</option>`;
    });

    this.template += `</select></div>
            <div class="setting-container">
                <p class="setting-title">${lang.color}</p>
                <div class="input--color-block">
                  <div class="input--color-block-left">
                      <input id="bg-color" class="input-color" type="color" value="${backgroundImageService.color}">
                  </div>
                  <div class="input--color-block-right">
                      <input id="bg-color-value" class="input-color input-color-value" type="text" value="${backgroundImageService.color}" disabled>
                  </div>
                </div>
            </div>
    </div>`;
    renderingService.componentName = 'background-image';
    renderingService.codeCSS = backgroundImageService.createFormatStyle();
    renderingService.codeHTML = '';
    renderingService.preview = `<div class="preview-rectangle" style="${backgroundImageService.style}"></div>`;
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
      'keyup #bg-image-url': 'changeImageUrl',
      'change #bg-position': 'changeBGPosition',
      'change #bg-image-size': 'changeBGImageSize',
      'change #bg-image-repeat': 'changeBGImageRepeat',
      'change #bg-color-value': 'changeBGColorValue',
    };
  }

  private changeImageUrl(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    const urlValue = target.value.toLowerCase();
    const errorText = target.nextElementSibling as HTMLElement;
    if (validateUrl(urlValue) || urlValue === '') {
      errorText.classList.add('visibility-hidden');
      backgroundImageService.url = target.value;
      this.renderLayout();
    } else {
      if (errorText.classList.contains('visibility-hidden')) {
        errorText.classList.remove('visibility-hidden');
      }
    }
  }

  private  changeBGPosition(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    backgroundImageService.position = target.value;
    this.renderLayout();
  }

  private  changeBGImageSize(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    backgroundImageService.size = target.value;
    this.renderLayout();
  }

  private  changeBGImageRepeat(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    backgroundImageService.repeat = target.value;
    this.renderLayout();
  }

  private changeBGColorValue(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    backgroundImageService.color = target.value;
    (document.querySelector('#bg-color-value') as HTMLInputElement).value = target.value;
    this.renderLayout();
  }


  private renderLayout(): void {
    backgroundImageService.createStyle();
    renderingService.codeCSS = backgroundImageService.createFormatStyle();
    renderingService.preview = `<div class="preview-rectangle" style="${backgroundImageService.style}"></div>`;
    previewLayoutComponent.createContent();
    previewLayoutComponent.render();
    codeLayoutComponent.createContent();
    codeLayoutComponent.render();
  }
}

export const backgroundImageComponent = new BackgroundImageComponent({
  selector: 'app-background-image',
  template: '',
  childComponents: [codeLayoutComponent, previewLayoutComponent],
});

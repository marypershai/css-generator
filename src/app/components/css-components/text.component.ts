import { ComponentConfig } from '../../../framework/tools/interfaces';
import { DMComponent } from '../../../framework/index';
import { codeLayoutComponent } from './layout/code-layout.component';
import { previewLayoutComponent } from './layout/preview-layout.component';
import { checkLang } from '../../service/lang.service';
import { renderingService } from '../../service/rendering.service';
import { textService } from '../../service/components/text.service';


export class TextComponent extends DMComponent {
  private paragraph: string;

  constructor(config: ComponentConfig) {
    super(config);
    this.createContent();
    this.paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu mi et turpis laoreet maximus' +
        ' vitae porta lorem. In non accumsan est, in ultricies dolor. Sed lacinia purus eu tempus cursus. Aliquam eu tortor' +
        ' turpis. Pellentesque maximus nisl a quam aliquet ornare. Integer venenatis rutrum tristique. Quisque at feugiat ' +
        'sapien. Sed orci ipsum, tempor quis pharetra id, mattis id orci. Donec et sapien ut dolor tempus lobortis ac porta' +
        ' orci. Integer auctor pulvinar tortor nec volutpat. Duis consequat volutpat vehicula. Sed at erat in sapien placerat' +
        ' vestibulum lobortis vitae quam. Aliquam erat volutpat. Sed condimentum ipsum metus, a mattis ante cursus sit amet.' +
        ' Maecenas eu sodales orci. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. ';
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
                      <input id="text-color" class="input-color" type="color" value="${textService.color}">
                  </div>
                  <div class="input--color-block-right">
                      <input class="input-color input-color-value" type="text" value="${textService.color}" disabled>
                  </div>
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">${lang.lineHeight}</p>
                <input id="text-line-height" type="range" value="${textService.lineHeight}" step="0.01" min="1" max="2">
                <div class="range__info">
                    <div class="range__info-min">1</div>
                    <div class="range__info-max">2</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">${lang.letterSpacing}</p>
                <input id="text-letter-spacing" type="range" value="${textService.letterSpacing}" step="1" min="0" max="10">
                <div class="range__info">
                    <div class="range__info-min">0px</div>
                    <div class="range__info-max">10px</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">${lang.wordSpacing}</p>
                <input id="text-word-spacing" type="range" value="${textService.wordSpacing}" step="1" min="0" max="10">
                <div class="range__info">
                    <div class="range__info-min">0px</div>
                    <div class="range__info-max">10px</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">${lang.textAlign}</p>
                <select id="text-align" class="custom-select">                
    `;

    textService.textAlignOptions.forEach((option) => {
      const selected = textService.textAlign === option ? 'selected' : '';
      this.template += `<option value="${option}" ${selected}>${option[0].toUpperCase() + option.slice(1)}</option>`;
    });

    this.template += `
                </select>
            </div>
             <div class="setting-container">
                <p class="setting-title">${lang.textDecoration}</p>
                <select id="text-decoration" class="custom-select">
    `;

    textService.textDecorationOptions.forEach((option) => {
      const selected = textService.textDecoration === option ? 'selected' : '';
      this.template += `<option value="${option}" ${selected}>${option[0].toUpperCase() + option.slice(1)}</option>`;
    });

    this.template += `
                </select>
            </div>
             <div class="setting-container">
                <p class="setting-title">${lang.textTransform}</p>
                <select id="text-transform" class="custom-select">
    `;

    textService.textTransformOptions.forEach((option) => {
      const selected = textService.textTransform === option ? 'selected' : '';
      this.template += `<option value="${option}" ${selected}>${option[0].toUpperCase() + option.slice(1)}</option>`;
    });

    this.template += '</select></div></div>';
    renderingService.componentName = 'text-shadow';
    renderingService.codeCSS = textService.createFormatStyle();
    renderingService.codeHTML = '';
    renderingService.preview = `<div class="preview-paragraph-text" style="${textService.style}"><p>${this.paragraph}</p></div>`;
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
      'change #text-color': 'changeTextColor',
      'change #text-line-height': 'changeTextLineHeight',
      'change #text-letter-spacing': 'changeTextLetterSpacing',
      'change #text-word-spacing': 'changeTextWordSpacing',
      'change #text-align': 'changeTexAlign',
      'change #text-decoration': 'changeTexDecoration',
      'change #text-transform': 'changeTexTransform',
    };
  }

  private changeTextColor(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    textService.color = target.value;
    (document.querySelector('.input-color-value') as HTMLInputElement).value = target.value;
    this.renderLayout();
  }

  private  changeTextLineHeight(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    textService.lineHeight = +target.value;
    this.renderLayout();
  }

  private  changeTextLetterSpacing(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    textService.letterSpacing = +target.value;
    this.renderLayout();
  }

  private  changeTextWordSpacing(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    textService.wordSpacing = +target.value;
    this.renderLayout();
  }

  private changeTexAlign(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    textService.textAlign = target.value;
    this.renderLayout();
  }

  private changeTexDecoration(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    textService.textDecoration = target.value;
    this.renderLayout();
  }

  private changeTexTransform(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    textService.textTransform = target.value;
    this.renderLayout();
  }

  private renderLayout(): void {
    textService.createStyle();
    renderingService.codeCSS = textService.createFormatStyle();
    renderingService.preview = `<div class="preview-paragraph-text" style="${textService.style}"><p>${this.paragraph}</p></div>`;
    previewLayoutComponent.createContent();
    previewLayoutComponent.render();
    codeLayoutComponent.createContent();
    codeLayoutComponent.render();
  }
}

export const textComponent = new TextComponent({
  selector: 'app-text',
  template: '',
  childComponents: [codeLayoutComponent, previewLayoutComponent],
});

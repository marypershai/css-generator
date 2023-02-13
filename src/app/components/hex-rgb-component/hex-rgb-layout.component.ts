import { ComponentConfig } from '../../../framework/tools/interfaces';
import { DMComponent } from '../../../framework/index';
import { checkLang } from '../../service/lang.service';
import { hexRGBService } from '../../service/components/hex-rgb-component.service';
import { hexRGBPreviewComponent } from './hex-rgb-preview.component';
import { hexToRGB } from '../../service/color.service';


export class HexRGBLayoutComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createContent();
  }

  createContent() {
    const { lang } = checkLang();
    this.template = `
    <section class="">
            <h2 class="css_subheader">${lang.configuration}</h2>
            
            <div class="setting-container">
                <p class="setting-title">${lang.red}</p>
                <input id="converter-red" type="range" value="${hexRGBService.red}" step="1" min="0" max="255">
                <div class="range__info">
                    <div class="range__info-min">0</div>
                    <div class="range__info-max">255</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">${lang.green}</p>
                <input id="converter-green" type="range" value="${hexRGBService.green}" step="1" min="0" max="255">
                <div class="range__info">
                    <div class="range__info-min">0</div>
                    <div class="range__info-max">255</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">${lang.blue}</p>
                <input id="converter-blue" type="range" value="${hexRGBService.blue}" step="1" min="0" max="255">
                <div class="range__info">
                    <div class="range__info-min">0</div>
                    <div class="range__info-max">255</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">${lang.opacity}</p>
                <input id="converter-opacity" type="range" value="${hexRGBService.opacity}" step="0.01" min="0" max="1">
                <div class="range__info">
                    <div class="range__info-min">0</div>
                    <div class="range__info-max">1</div> 
                </div>
            </div>
            
            <div class="spacer"></div>
            
            <div class="setting-container">
                <p class="setting-title">${lang.hex}</p>
                <div class="input--color-block">
                  <div class="input--color-block-left">
                      <input id="hex-color-picker" class="input-color" type="color" value="${hexRGBService.hex}">
                  </div>
                  <div class="input--color-block-right">
                      <input id="hex-color" class="input-color input-color-value" type="text" value="${hexRGBService.hex}" maxlength="7">
                      <p class="error visibility-hidden">${lang.notValid}</p>
                  </div>
                </div>
            </div>
    `;

    this.template += `
    </section>
    `;
  }

  public events(): Record<string, string> {
    return {
      'change #converter-red': 'changeColorRed',
      'change #converter-green': 'changeColorGreen',
      'change #converter-blue': 'changeColorBlue',
      'change #converter-opacity': 'changeColorOpacity',
      'change #hex-color-picker': 'changeHexColorPicker',
      'keyup #hex-color': 'changeHexColorInput',
    };
  }

  private  changeColorRed(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    hexRGBService.red = +target.value;
    this.renderLayout();
  }

  private  changeColorGreen(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    hexRGBService.green = +target.value;
    this.renderLayout();
  }

  private  changeColorBlue(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    hexRGBService.blue = +target.value;
    this.renderLayout();
  }

  private  changeColorOpacity(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    hexRGBService.opacity = +target.value;
    this.renderLayout();
  }

  private changeHexColorPicker(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    hexRGBService.hex = target.value;
    (document.querySelector('.input-color-value') as HTMLInputElement).value = target.value;
    const { r, g, b } = hexToRGB(hexRGBService.hex);
    this.updateRGBFromHex(r, g, b);
    this.renderLayout();
  }

  private changeHexColorInput(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    const colorValue = target.value.toLowerCase();
    const regExp = /#[a-f0-9]{6}/gi;
    const errorText = target.nextElementSibling as HTMLElement;
    if (colorValue.match(regExp)) {
      errorText.classList.add('visibility-hidden');
      hexRGBService.hex = target.value;
      const { r, g, b } = hexToRGB(colorValue);
      (document.querySelector('#hex-color-picker') as HTMLInputElement).value = target.value;
      this.updateRGBFromHex(r, g, b);
      this.renderLayout();
    } else {
      if (errorText.classList.contains('visibility-hidden')) {
        errorText.classList.remove('visibility-hidden');
      }
    }
  }

  private renderLayout(): void {
    hexRGBPreviewComponent.createContent();
    hexRGBPreviewComponent.render();
  }

  private updateRGBFromHex(r: number, g: number, b: number): void {
    hexRGBService.red = r;
    hexRGBService.green = g;
    hexRGBService.blue = b;
    this.createContent();
    this.render();
  }
}

export const hexRGBLayoutComponent = new HexRGBLayoutComponent({
  selector: 'app-hex-rgb-layout',
  template: '',
  childComponents: [],
});

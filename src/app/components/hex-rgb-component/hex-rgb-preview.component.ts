import { ComponentConfig } from '../../../framework/tools/interfaces';
import { DMComponent } from '../../../framework/index';
import { checkLang } from '../../service/lang.service';
import { hexRGBService } from '../../service/components/hex-rgb-component.service';
import { changeTooltipStatus, copyTextToClipboard } from '../../service/copy.service';


export class HexRGBPreviewComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createContent();
  }

  createContent() {
    const { lang } = checkLang();
    const rgb = `${hexRGBService.red}, ${hexRGBService.green}, ${hexRGBService.blue}`;
    const rgba = `${rgb}, ${hexRGBService.opacity}`;
    this.template = `
    <div class="hex-rgb-preview-content">
        <h2 class="css_subheader">${lang.preview}</h2>
        <div class="preview-colors">
            <div class="preview-color-block" style="background: rgb(${rgb})"></div>
            <div class="preview-color-block" style="background: rgba(${rgba})"><p style="color: rgb(${rgb})">With opacity</p></div>
        </div>
        <div class="preview-code-block">
          <div class="code_rgb_hex">
              <div class="label_rgb_hex">RGB</div>
              <div class="preview-code">
                  <code>RGB(${rgb})</code>
              </div>
              <div>
                  <button id="copy-rgb" class="copy_color tooltip" data-tooltip="${lang.copyTooltipText}">${lang.copy}</button>
              </div>
          </div>
          
          <div class="code_rgb_hex">
              <div class="label_rgb_hex">RGBA</div>
              <div class="preview-code">
                  <code>RGBA(${rgba})</code>
              </div>
              <div>
                  <button id="copy-rgba" class="copy_color tooltip" data-tooltip="${lang.copyTooltipText}">${lang.copy}</button>
              </div>
          </div>
          
          <div class="code_rgb_hex">
              <div class="label_rgb_hex">HEX</div>
              <div class="preview-code">
                  <code>${hexRGBService.hex}</code>
              </div>
              <div>
                  <button id="copy-hex" class="copy_color tooltip" data-tooltip="${lang.copyTooltipText}">${lang.copy}</button>
              </div>
          </div>
        </div>
      </div>
    `;
  }

  public events(): Record<string, string> {
    return {
      'click #copy-rgb': 'copyRGBCode',
      'click #copy-rgba': 'copyRGBACode',
      'click #copy-hex': 'copyHexCode',
      'mouseout .tooltip': 'changeTooltip',
    };
  }

  private copyRGBCode(event: Event): void {
    const code = `RGB(${hexRGBService.red}, ${hexRGBService.green}, ${hexRGBService.blue})`;
    copyTextToClipboard(code, event);
  }

  private copyRGBACode(event: Event): void {
    const code = `RGBA(${hexRGBService.red}, ${hexRGBService.green}, ${hexRGBService.blue}, ${hexRGBService.opacity})`;
    copyTextToClipboard(code, event);
  }

  private copyHexCode(event: Event): void {
    copyTextToClipboard(hexRGBService.hex, event);
  }

  private changeTooltip(): void {
    changeTooltipStatus();
  }
}

export const hexRGBPreviewComponent = new HexRGBPreviewComponent({
  selector: 'app-hex-rgb-preview',
  template: '',
  childComponents: [],
});

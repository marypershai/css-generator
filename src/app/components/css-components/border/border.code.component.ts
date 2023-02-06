import { ComponentConfig } from '../../../../framework/tools/interfaces';
import { DMComponent } from '../../../../framework/index';
import { borderService } from '../../../service/border-component.service';
import { copyTextToClipboard } from '../../../service/copy.service';
import { changeTooltipStatus } from '../../../service/copy.service';


export class BorderComponentCode extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createBorderComponentCode();
  }

  createBorderComponentCode() {
    this.template = `
    <h2 class="css_subheader"> Code </h2>
    <p>Paste to your file(s)</p>
    <div class="code_CSS">
      <div class="label_css">CSS</div>
      <div class="preview-code preview_css">
        ${borderService.style};
      </div>
      <div class="tooltip">
        <button class="copy_css">
            <span class="tooltiptext">Copy to clipboard</span>
        Copy
        </button>
      </div>
    </div>
    <div class="code_HTML">
      <div class="label_html">HTML</div>
      <div class="preview-code preview_html">
        none
      </div>
      <div class="copy_html">Copy</div>
    </div>
    `;
  }

  public events(): Record<string, string> {
    return {
      'click .copy_css': 'copyCssCode',
      'mouseover .tooltip': 'changeTooltip',
    };
  }

  private copyCssCode(): void {
    copyTextToClipboard(borderService.style);
  }

  private changeTooltip(): void {
    changeTooltipStatus();
  }
}

export const borderComponentCode = new BorderComponentCode({
  selector: 'app-border-code',
  template: '',
  childComponents: [],
});

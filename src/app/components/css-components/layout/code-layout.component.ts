import { ComponentConfig } from '../../../../framework/tools/interfaces';
import { DMComponent } from '../../../../framework/index';
import { copyTextToClipboard } from '../../../service/copy.service';
import { changeTooltipStatus } from '../../../service/copy.service';
import { renderingService } from '../../../service/rendering.service';
import { checkLang } from '../../../service/lang.service';


export class CodeLayoutComponent extends DMComponent {

  constructor(config: ComponentConfig) {
    super(config);
    this.createContent();
  }

  createContent() {
    const { lang } = checkLang();
    this.template = `
      <h2 class="css_subheader">${lang.code}</h2>
      <p>${lang.helpText}</p>
      <div class="code_CSS">
        <div class="label_css">CSS</div>
        <div class="preview-code preview_css">
          ${renderingService.codeCSS}
        </div>
        <div>
          <button class="copy_css">
          ${lang.copy}
          </button>
        </div>
      </div>
    `;
    if (renderingService.codeHTML) {
      this.template = `
      <div class="code_HTML">
        <div class="label_html">HTML</div>
        <div class="preview-code preview_html">
          ${renderingService.codeHTML};
        </div>
        <div>
        <button class="copy_html">
        ${lang.copy}
        </button>
      </div>
      </div>
      `;
    }
  }

  public events(): Record<string, string> {
    return {
      'click .copy_css': 'copyCssCode',
      // 'click .copy_html': 'copyHTMLCode',
    };
  }

  private copyCssCode(): void {
    console.log(renderingService.codeCSS);
    if (renderingService.codeCSS) {
      copyTextToClipboard(renderingService.codeCSS);
    }
  }

  private copyHTMLCode(): void {
    if (renderingService.codeHTML) {
      copyTextToClipboard(renderingService.codeHTML);
    }
  }

  private changeTooltip(): void {
    changeTooltipStatus();
  }
}

export const codeLayoutComponent = new CodeLayoutComponent({
  selector: 'app-code-layout',
  template: '',
  childComponents: [],
});

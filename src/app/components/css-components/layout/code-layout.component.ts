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
          <code>${renderingService.codeCSS}</code>
        </div>
        <div>
          <button class="copy_css tooltip" data-tooltip="${lang.copyTooltipText}">
          ${lang.copy}
          </button>
        </div>
      </div>
      <div class="code_HTML">
    `;

    if (renderingService.codeHTML) {
      this.template += `
        <div class="label_html">HTML</div>
        <div class="preview-code">
          <code class="preview_html"></code>
        </div>
        <div>
        <button class="copy_html tooltip" data-tooltip="${lang.copyTooltipText}">
          ${lang.copy}
          </button>
      `;
    }

    this.template += '</div></div>';
  }

  public events(): Record<string, string> {
    return {
      'click .copy_css': 'copyCssCode',
      'mouseout .tooltip': 'changeTooltip',
      'click .code_HTML': 'copyHTMLCode',
      'contextmenu .copy_css': 'copyCssCode',
      'contextmenu .code_HTML': 'copyCssCode',
    };
  }

  private copyCssCode(event: Event): void {
    event.preventDefault();
    if (renderingService.codeCSS) {
      copyTextToClipboard(renderingService.codeCSS, event);
    }
  }

  private copyHTMLCode(event: Event): void {
    event.preventDefault();
    const target = event.target as HTMLElement;
    if (target.classList.contains('copy_html') && renderingService.codeHTML) {
      copyTextToClipboard(renderingService.codeHTML, event);
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

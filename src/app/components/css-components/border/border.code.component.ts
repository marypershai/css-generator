import { ComponentConfig } from '../../../../framework/tools/interfaces';
import { DMComponent } from '../../../../framework/index';
import { borderService } from '../../../service/border-component.service';


export class BorderComponentCode extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createBorderComponentCode();
  }

  createBorderComponentCode() {
    this.template = `
    <h4>Code</h4>
    <p>Paste to your file(s)</p>
    <div class="code_CSS">
      <div class="label_css">CSS</div>
      <div class="preview-code preview_css">
        ${borderService.style};
      </div>
      <div class="copy_css">Copy</div>
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
}

export const borderComponentCode = new BorderComponentCode({
  selector: 'app-border-code',
  template: '',
  childComponents: [],
});

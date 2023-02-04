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
    <div class="preview-code"">
        <p><b>Preview code</b></p>
        ${borderService.style};
    </div>
    `;
  }
}

export const borderComponentCode = new BorderComponentCode({
  selector: 'app-border-code',
  template: '',
  childComponents: [],
});

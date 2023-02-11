import { ComponentConfig } from '../../../../framework/tools/interfaces';
import { DMComponent } from '../../../../framework/index';
import { borderService } from '../../../service/border-component.service';


export class BorderComponentPreview extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createBorderComponentPreview();
  }

  createBorderComponentPreview() {
    borderService.createStyle();
    this.template = `
    <h4>Preview</h4>
    <div class="preview-rectangle" style="width: 100%; height: 30vh; background-color: white; ${borderService.style}"></div>
    `;
  }
}

export const borderComponentPreview = new BorderComponentPreview({
  selector: 'app-border-preview',
  template: '',
  childComponents: [],
});
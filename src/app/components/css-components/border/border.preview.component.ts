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
    <h2 class="css_subheader"> Preview </h2>
    <div class="preview-rectangle" style="width: 90%; height: 30vh; margin: 10px; background-color: #e0dbd3; ${borderService.style}"></div>
    `;
  }
}

export const borderComponentPreview = new BorderComponentPreview({
  selector: 'app-border-preview',
  template: '',
  childComponents: [],
});

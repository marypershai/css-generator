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
    <div class="preview-rectangle" style="${borderService.style}">
        Preview block
    </div>
    `;
  }
}

export const borderComponentPreview = new BorderComponentPreview({
  selector: 'app-border-preview',
  template: '',
  childComponents: [],
});

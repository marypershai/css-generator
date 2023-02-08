import { ComponentConfig } from '../../../../framework/tools/interfaces';
import { DMComponent } from '../../../../framework/index';
import { renderingService } from '../../../service/rendering.service';
import { checkLang } from '../../../service/lang.service';


export class PreviewLayoutComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createContent();
  }

  createContent() {
    const { lang } = checkLang();
    this.template = `
      <h2 class="css_subheader">${lang.preview}</h2>
      <div class="preview-block">
        ${renderingService.preview}
      </div>
      
    `;
  }
}

export const previewLayoutComponent = new PreviewLayoutComponent({
  selector: 'app-preview-layout',
  template: '',
  childComponents: [],
});

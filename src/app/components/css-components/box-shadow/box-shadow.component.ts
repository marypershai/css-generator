import { ComponentConfig } from '../../../../framework/tools/interfaces';
import { DMComponent } from '../../../../framework/index';
import { boxShadowComponentSettings } from './box-shadow.settings.component';
import { boxShadowComponentPreview } from './box-shadow.preview.component';
import { boxShadowComponentCode } from './box-shadow.code.component';


export class BoxShadowComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const boxShadowComponent = new BoxShadowComponent({
  selector: 'app-box-shadow',
  template: `
    <div class="component-content">
        <app-box-shadow-settings></app-box-shadow-settings>
        <app-box-shadow-preview></app-box-shadow-preview>
        <app-box-shadow-code></app-box-shadow-code>
    </div>
  `,
  childComponents: [boxShadowComponentSettings, boxShadowComponentPreview, boxShadowComponentCode],
});

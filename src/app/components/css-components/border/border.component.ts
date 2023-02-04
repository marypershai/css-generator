import { ComponentConfig } from '../../../../framework/tools/interfaces';
import { DMComponent } from '../../../../framework/index';
import { borderComponentSettings } from './border.settings.component';
import { borderComponentPreview } from './border.preview.component';
import { borderComponentCode } from './border.code.component';


export class BorderComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const borderComponent = new BorderComponent({
  selector: 'app-border',
  template: `
    <div class="component-content">
        <app-border-settings></app-border-settings>
        <app-border-preview></app-border-preview>
        <app-border-code></app-border-code>
    </div>
  `,
  childComponents: [borderComponentSettings, borderComponentPreview, borderComponentCode],
});

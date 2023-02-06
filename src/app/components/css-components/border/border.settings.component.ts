import { ComponentConfig } from '../../../../framework/tools/interfaces';
import { DMComponent } from '../../../../framework/index';
import { borderService } from '../../../service/border-component.service';
import { borderComponentPreview } from './border.preview.component';
import { borderComponentCode } from './border.code.component';


export class BorderComponentSettings extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }

  public events(): Record<string, string> {
    return {
      'change .input--border-width': 'changeBorderWidth',
      'change .input--border-color': 'changeBorderColor',
      'change .select--border-style': 'changeBorderStyle',
    };
  }

  private  changeBorderWidth(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    borderService.borderWidth = +target.value;
    this.renderLayout();
  }

  private changeBorderColor(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    borderService.color = target.value;
    (document.querySelector('.input--border-color-value') as HTMLInputElement).value = target.value;
    this.renderLayout();
  }

  private changeBorderStyle(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    borderService.borderType = target.value;
    this.renderLayout();
  }

  private renderLayout(): void {
    borderComponentPreview.createBorderComponentPreview();
    borderComponentPreview.render();
    borderComponentCode.createBorderComponentCode();
    borderComponentCode.render();
  }
}

export const borderComponentSettings = new BorderComponentSettings({
  selector: 'app-border-settings',
  template: `
    <h2 class="css_subheader"> Customizing </h2>
    <br>
    <p>Color</p>
    <input class="input--border-color" type="color" value="#000000">
    <input class="input--border-color-value" type="text" value="#000000" disabled>
    <br>
    <br>
    <p>Style</p>
    <select class="select--border-style">
      <option value="solid">Solid</option>
      <option value="dotted">Dotted</option>
      <option value="dashed">Dashed</option>
      <option value="double">Double</option>
      <option value="groove">Groove</option>
      <option value="ridge">Ridge</option>
      <option value="inset">Inset</option>
      <option value="outset">Outset</option>
    </select>
    <br>
    <br>
    <p>Width </p>
    <input class="input-component--range input--border-width" type="range" min="0" max="20" step="1" value="1">
    <br>
    <br>
  `,
  childComponents: [],
});

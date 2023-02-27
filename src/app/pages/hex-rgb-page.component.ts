import { DMComponent } from '../../framework/index';
import { ComponentConfig } from '../../framework/tools/interfaces';
import { hexRGBLayoutComponent } from '../components/hex-rgb-component/hex-rgb-layout.component';
import { hexRGBPreviewComponent } from '../components/hex-rgb-component/hex-rgb-preview.component';


class HexRGBPageComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createCardPage();
  }

  public createCardPage() {
    this.template = `
      <div class="page__container hex-rgb-page">
        <app-hex-rgb-layout class="hex-rgb-settings"></app-hex-rgb-layout>
        <app-hex-rgb-preview class="hex-rgb-preview"></app-hex-rgb-preview>
      </div>
    `;
  }
}

export const hexRGBPageComponent = new HexRGBPageComponent({
  selector: 'app-hex-rgb-page',
  template: '',
  childComponents: [hexRGBLayoutComponent, hexRGBPreviewComponent],
});

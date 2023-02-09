import { ComponentConfig } from '../../../framework/tools/interfaces';
import { DMComponent } from '../../../framework/index';
import { codeLayoutComponent } from './layout/code-layout.component';
import { previewLayoutComponent } from './layout/preview-layout.component';
import { checkLang } from '../../service/lang.service';
import { renderingService } from '../../service/rendering.service';
import { borderRadiusService } from '../../service/components/border-radius-component.service';


export class BorderRadiusComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createContent();
  }

  createContent() {
    const { lang } = checkLang();
    this.template = `
    <div class="component-content">
        <div class="css_generator_settings">
            <h2 class="css_subheader">${lang.configuration}</h2>
            
            <div class="setting-container">
                <p class="setting-title">All border</p>
                <input id="border-radius-all" type="range" value="${borderRadiusService.borderRadiusAll}" step="1" min="0" max="20">
                <div class="range__info">
                    <div class="range__info-min">0px</div>
                    <div class="range__info-max">20px</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">Top Left Radius</p>
                <input id="border-top-left" type="range" value="${borderRadiusService.borderTopLeft}" step="1" min="0" max="20">
                <div class="range__info">
                    <div class="range__info-min">0px</div>
                    <div class="range__info-max">20px</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">Top Right Radius</p>
                <input id="border-top-right" type="range" value="${borderRadiusService.borderTopRight}" step="1" min="0" max="20">
                <div class="range__info">
                    <div class="range__info-min">0px</div>
                    <div class="range__info-max">20px</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">Bottom Right Radius</p>
                <input id="border-bottom-right" type="range" value="${borderRadiusService.borderBottomRight}" step="1" min="0" max="20">
                <div class="range__info">
                    <div class="range__info-min">0px</div>
                    <div class="range__info-max">20px</div> 
                </div>
            </div>
            
            <div class="setting-container">
                <p class="setting-title">Bottom Left Radius</p>
                <input id="border-bottom-left" type="range" value="${borderRadiusService.borderBottomRight}" step="1" min="0" max="20">
                <div class="range__info">
                    <div class="range__info-min">0px</div>
                    <div class="range__info-max">20px</div> 
                </div>
            </div>
        </div>
    `;

    renderingService.componentName = 'border-radius';
    renderingService.codeCSS = borderRadiusService.style;
    renderingService.codeHTML = '';
    renderingService.preview = `<div class="preview-rectangle" style="${borderRadiusService.style}"></div>`;
    codeLayoutComponent.createContent();
    previewLayoutComponent.createContent();

    this.template += `
      <div class="css_generator_result">
          <app-preview-layout class="css_generator_preview"></app-preview-layout>
          <app-code-layout class="css_generator_code"></app-code-layout>
        </div>
    </div>
    `;
  }

  public events(): Record<string, string> {
    return {
      'change #border-radius-all': 'changeBorderRadiusAll',
      'change #border-top-left': 'changeBorderRadiusTL',
      'change #border-top-right': 'changeBorderRadiusTR',
      'change #border-bottom-right': 'changeBorderRadiusBR',
      'change #border-bottom-left': 'changeBorderRadiusBL',
    };
  }

  private  changeBorderRadiusAll(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    borderRadiusService.borderRadiusAll = +target.value;
    borderRadiusService.borderBottomRight = borderRadiusService.borderRadiusAll;
    borderRadiusService.borderBottomLeft = borderRadiusService.borderRadiusAll;
    borderRadiusService.borderTopRight = borderRadiusService.borderRadiusAll;
    borderRadiusService.borderTopLeft = borderRadiusService.borderRadiusAll;
    this.createContent();
    this.render();
    this.renderLayout();
  }

  private  changeBorderRadiusTL(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    console.log('here');
    borderRadiusService.borderTopLeft = +target.value;
    console.log(borderRadiusService.borderTopLeft);
    console.log(borderRadiusService.style);
    this.renderLayout();
  }

  private  changeBorderRadiusTR(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    borderRadiusService.borderTopRight = +target.value;
    this.renderLayout();
  }

  private  changeBorderRadiusBR(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    borderRadiusService.borderBottomRight = +target.value;
    this.renderLayout();
  }

  private  changeBorderRadiusBL(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    borderRadiusService.borderBottomLeft = +target.value;
    this.renderLayout();
  }

  private renderLayout(): void {
    borderRadiusService.createStyle();
    renderingService.codeCSS = borderRadiusService.style;
    renderingService.preview = `<div class="preview-rectangle" style="${borderRadiusService.style}"></div>`;
    previewLayoutComponent.createContent();
    previewLayoutComponent.render();
    codeLayoutComponent.createContent();
    codeLayoutComponent.render();
  }
}

export const borderRadiusComponent = new BorderRadiusComponent({
  selector: 'app-border-radius',
  template: '',
  childComponents: [codeLayoutComponent, previewLayoutComponent],
});

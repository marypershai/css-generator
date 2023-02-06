import { ComponentConfig } from '../../framework/tools/interfaces';
import { DMComponent } from '../../framework/index';


export class CssComponentLayoutComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const cssComponentLayoutComponent = new CssComponentLayoutComponent({
  selector: 'app-css-component-layout',
  template: `
    <div class="component-content">
        <app-border-settings class="css_generator_settings">
          <h2 class="css_subheader"> Customizing </h2>
        </app-border-settings>
        <div class="css_generator_result">
          <app-border-preview class="css_generator_preview">
            <h2 class="css_subheader"> Preview </h2>  <br> <br> <br> 
          </app-border-preview>
          <app-border-code class="css_generator_code">
            <h2 class="css_subheader"> Code </h2>
            <p>Paste to your file(s)</p>
            <div class="code_CSS">
              <div class="label_css">CSS</div>
              <div class="preview-code preview_css"> <br> <br> <br> </div>
              <div class="copy_css">Copy</div>
            </div>
            <div class="code_HTML">
              <div class="label_html">HTML</div>
              <div class="preview-code preview_html"> <br> <br> <br> </div>
              <div class="copy_html">Copy</div>
            </div>
          </app-border-code>
        </div>
    </div>`,
  childComponents: [],
});

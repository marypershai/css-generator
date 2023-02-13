import { ComponentConfig } from '../../../framework/tools/interfaces';
import { DMComponent } from '../../../framework/index';
import { codeLayoutComponent } from './layout/code-layout.component';
import { previewLayoutComponent } from './layout/preview-layout.component';
import { checkLang } from '../../service/lang.service';
import { renderingService } from '../../service/rendering.service';
import { textColumnService } from '../../service/components/text-column.service';


export class TextColumnComponent extends DMComponent {
  private paragraph: string;

  constructor(config: ComponentConfig) {
    super(config);
    this.createContent();
    this.paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu mi et turpis laoreet maximus' +
        ' vitae porta lorem. In non accumsan est, in ultricies dolor. Sed lacinia purus eu tempus cursus. Aliquam eu tortor' +
        ' turpis. Pellentesque maximus nisl a quam aliquet ornare. Integer venenatis rutrum tristique. Quisque at feugiat ' +
        'sapien. Sed orci ipsum, tempor quis pharetra id, mattis id orci. Donec et sapien ut dolor tempus lobortis ac porta' +
        ' orci. Integer auctor pulvinar tortor nec volutpat. Duis consequat volutpat vehicula. Sed at erat in sapien placerat' +
        ' vestibulum lobortis vitae quam. Aliquam erat volutpat. Sed condimentum ipsum metus, a mattis ante cursus sit amet.' +
        ' Maecenas eu sodales orci. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. ';
  }

  createContent() {
    const { lang } = checkLang();
    const columnRule = textColumnService.columnRule && textColumnService.columnCount > 1 ? 'checked' : '';
    const columnRuleVisability = textColumnService.columnRule ? '' : 'visibility-hidden';
    const columnAbility = textColumnService.columnCount > 1 ? '' : 'disabled';
    this.template = `
    <div class="component-content">
        <div class="css_generator_settings">
            <h2 class="css_subheader">${lang.configuration}</h2>
            
            <div class="setting-container">
                <p class="setting-title">${lang.columnCounts}</p>
                <input id="text-column-count" type="range" value="${textColumnService.columnCount}" step="1" min="1" max="5">
                <div class="range__info">
                    <div class="range__info-min">1</div>
                    <div class="range__info-max">5</div> 
                </div>
            </div>      
            
            <div class="setting-container">
                <p class="setting-title">${lang.columnGaps}</p>
                <input id="text-column-gap" type="range" value="${textColumnService.columnGap}" step="1" min="0" max="50" ${columnAbility}>
                <div class="range__info">
                    <div class="range__info-min">0</div>
                    <div class="range__info-max">50px</div> 
                </div>
            </div> 
            
            <div class="setting-container">
                <p class="setting-title">${lang.columnRule}</p>
                <div class="customSlider">  
                  <input type="checkbox" value="None" id="text-columnRule" ${columnRule} ${columnAbility}/>
                  <label for="text-columnRule"></label>
                </div>      
                <div class="text-columnRule-settings ${columnRuleVisability}">       
                <div class="setting-subcontainer">
                    <p class="setting-title">${lang.columnRuleStyle}</p>
                    <select id="text-columnRule-style" class="custom-select">                
    `;

    textColumnService.columnRuleStyleOptions.forEach((option) => {
      const selected = textColumnService.columnRuleStyle === option ? 'selected' : '';
      this.template += `<option value="${option}" ${selected}>${option[0].toUpperCase() + option.slice(1)}</option>`;
    });

    this.template += `
                </select>
            </div>

            <div class="setting-subcontainer">
                <p class="setting-title">${lang.columnRuleWidth}</p>
                <input id="text-columnRule-width" type="range" value="${textColumnService.columnRuleWidth}" step="1" min="0" max="20">
                <div class="range__info">
                    <div class="range__info-min">0</div>
                    <div class="range__info-max">20px</div> 
                </div>
            </div> 
            <div class="setting-subcontainer">
                <p class="setting-title">${lang.columnRuleColor}</p>
                <div class="input--color-block">
                  <div class="input--color-block-left">
                      <input id="text-columnRule-color" class="input-color" type="color" value="${textColumnService.columnRuleColor}">
                  </div>
                  <div class="input--color-block-right">
                      <input class="input-color input-color-value" type="text" value="${textColumnService.columnRuleStyle}" disabled>
                  </div>
                </div>
            </div>
            </div>
            </div>
        </div>`;
    renderingService.componentName = 'text-shadow';
    renderingService.codeCSS = textColumnService.createFormatStyle();
    renderingService.codeHTML = '';
    renderingService.preview = `<div class="preview-paragraph-text" style="${textColumnService.style}"><p>${this.paragraph}</p></div>`;
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
      'change #text-column-count': 'changeTextColumnCount',
      'change #text-column-gap': 'changeTextColumnGap',
      'change #text-columnRule-style': 'changeTextColumnRuleStyle',
      'change #text-columnRule-width': 'changeTextColumnRuleWidth',
      'change #text-columnRule-color': 'changeTextColumnRuleColor',
      'click #text-columnRule' : 'changeTextColumnRule',
    };
  }

  private  changeTextColumnCount(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    textColumnService.columnCount = +target.value;
    if (textColumnService.columnCount === 1) {
      textColumnService.columnGap = 0;
    }
    this.createContent();
    this.render();
    this.renderLayout();
  }

  private  changeTextColumnGap(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    textColumnService.columnGap = +target.value;
    this.renderLayout();
  }

  private  changeTextColumnRule(): void {
    const slider = document.querySelector('.text-columnRule-settings') as HTMLElement;
    slider.classList.toggle('visibility-hidden');
    if (slider.classList.contains('visibility-hidden')) {
      textColumnService.columnRule = false;
    } else {
      textColumnService.columnRule = true;
    }
    this.renderLayout();
  }

  private  changeTextColumnRuleStyle(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    textColumnService.columnRuleStyle = target.value;
    this.renderLayout();
  }

  private changeTextColumnRuleColor(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    textColumnService.columnRuleColor = target.value;
    (document.querySelector('.input-color-value') as HTMLInputElement).value = target.value;
    this.renderLayout();
  }

  private  changeTextColumnRuleWidth(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    textColumnService.columnRuleWidth = +target.value;
    this.renderLayout();
  }

  private renderLayout(): void {
    textColumnService.createStyle();
    renderingService.codeCSS = textColumnService.createFormatStyle();
    renderingService.preview = `<div class="preview-paragraph-text" style="${textColumnService.style}"><p>${this.paragraph}</p></div>`;
    previewLayoutComponent.createContent();
    previewLayoutComponent.render();
    codeLayoutComponent.createContent();
    codeLayoutComponent.render();
  }
}

export const textColumnComponent = new TextColumnComponent({
  selector: 'app-text-column',
  template: '',
  childComponents: [codeLayoutComponent, previewLayoutComponent],
});

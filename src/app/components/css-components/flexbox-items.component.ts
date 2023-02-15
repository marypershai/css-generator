import { ComponentConfig } from '../../../framework/tools/interfaces';
import { DMComponent } from '../../../framework/index';
import { codeLayoutComponent } from './layout/code-layout.component';
import { previewLayoutComponent } from './layout/preview-layout.component';
import { checkLang } from '../../service/lang.service';
import { renderingService } from '../../service/rendering.service';
import { flexboxItemsService } from '../../service/components/flexbox-items.service';


export class FlexboxItemsComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createContent();
  }

  createContent() {
    const { lang } = checkLang();
    renderingService.componentName = 'flexbox-items';
    renderingService.codeCSS = flexboxItemsService.style.split(';').join(';<br>');
    renderingService.codeHTML = '';
    renderingService.preview = `<div class="flexbox_demo" style="${flexboxItemsService.style}">${this.createPreview()}</div>`;
    codeLayoutComponent.createContent();
    previewLayoutComponent.createContent();
    this.template = `
    <div class="component-content">
        <div class="css_generator_settings">
            <h2 class="css_subheader">${lang.configuration}</h2>
            <div class="setting-container amount-container">
                <div class="flex-properties-container">
                    <p class="setting-title">Items amount: </p>
                    <input class="amount-input" type="radio" id="four_items" name="flex_justify" value="4" checked>
                    <label class="amount_label amount-label_checked" for="four_items">4</label>
                    <input class="amount-input" type="radio" id="six_items" name="flex_justify" value="6">
                    <label class="amount_label" for="six_items">6</label>
                    <input class="amount-input" type="radio" id="eight_items" name="flex_justify" value="8">
                    <label class="amount_label" for="eight_items">8</label>
                    <input class="amount-input" type="radio" id="ten_items" name="flex_justify" value="10">
                    <label class="amount_label" for="ten_items">10</label>
                    <label class="unequal_label" for="unequal_height">
                        Unequal height 
                        <input class="unequal_input unequal_height" type="checkbox" id="unequal_height"> 
                    </label>
                </div>
            </div>
            <div class="setting-container justify-container">
                <p class="setting-title">Justify content (Main direction)</p>
                <div class="flex-properties-container">
                    <input class="setting-input justify-content_input" type="radio" id="justify-center" name="flex_justify" value="center">
                    <label class="setting-label justify-content_label" for="justify-center">center</label>
                    <input class="setting-input justify-content_input" type="radio" id="justify-flex-start" name="flex_justify" value="flex-start" checked>
                    <label class="setting-label justify-content_label setting-label_checked" for="justify-flex-start">flex-start</label>
                    <input class="setting-input justify-content_input" type="radio" id="justify-flex-end" name="flex_justify" value="flex-end">
                    <label class="setting-label justify-content_label" for="justify-flex-end">flex-end</label>
                    <input class="setting-input justify-content_input" type="radio" id="justify-space-around" name="flex_justify" value="space-around">
                    <label class="setting-label justify-content_label" for="justify-space-around">space-around</label>
                    <input class="setting-input justify-content_input" type="radio" id="justify-space-between" name="flex_justify" value="space-between">
                    <label class="setting-label justify-content_label" for="justify-space-between">space-between</label>
                    <input class="setting-input justify-content_input" type="radio" id="justify-space-evenly" name="flex_justify" value="space-evenly">
                    <label class="setting-label justify-content_label" for="justify-space-evenly">space-evenly</label>
                </div>
            </div>
            <div class="setting-container align_items-container">
                <p class="setting-title">Align items (Cross direction)</p>
                <div class="flex-properties-container">
                    <input class="setting-input align_items_input" type="radio" id="align_items-center" name="align_items" value="center">
                    <label class="setting-label align_items_label" for="align_items-center">center</label>
                    <input class="setting-input align_items_input" type="radio" id="align_items-flex-start" name="align_items" value="flex-start" checked>
                    <label class="setting-label align_items_label setting-label_checked" for="align_items-flex-start">flex-start</label>
                    <input class="setting-input align_items_input" type="radio" id="align_items-flex-end" name="align_items" value="flex-end">
                    <label class="setting-label align_items_label" for="align_items-flex-end">flex-end</label>
                    <input class="setting-input align_items_input" type="radio" id="align_items-stretch" name="align_items" value="stretch">
                    <label class="setting-label align_items_label" for="align_items-stretch">stretch</label>
                    <input class="setting-input align_items_input" type="radio" id="align_items-baseline" name="align_items" value="baseline">
                    <label class="setting-label align_items_label" for="align_items-baseline">baseline</label>
                </div>
            </div>
            <div class="setting-container align_content-container">
                <p class="setting-title">Align content</p>
                <div class="flex-properties-container">
                    <input class="setting-input align_content_input" type="radio" id="align_content-center" name="align_content" value="center" checked>
                    <label class="setting-label align_content_label" for="align_content-center">center</label>
                    <input class="setting-input align_content_input" type="radio" id="align_content-flex-start" name="align_content" value="flex-start" checked>
                    <label class="setting-label align_content_label setting-label_checked" for="align_content-flex-start">flex-start</label>
                    <input class="setting-input align_content_input" type="radio" id="align_content-flex-end" name="align_content" value="flex-end">
                    <label class="setting-label align_content_label" for="align_content-flex-end">flex-end</label>
                    <input class="setting-input align_content_input" type="radio" id="align_content-space-around" name="align_content" value="space-around">
                    <label class="setting-label align_content_label" for="align_content-space-around">space-around</label>
                    <input class="setting-input align_content_input" type="radio" id="align_content-space-between" name="align_content" value="space-between">
                    <label class="setting-label align_content_label" for="align_content-space-between">space-between</label>
                    <input class="setting-input align_content_input" type="radio" id="align_content-stretch" name="align_content" value="stretch">
                    <label class="setting-label align_content_label" for="align_content-stretch">stretch</label>
                </div>
            </div>
            <div class="setting-container direction-container">
                <p class="setting-title">Direction</p>
                <div class="flex-properties-container">
                    <input class="setting-input direction_input" type="radio" id="direction-row" name="direction" value="row" checked>
                    <label class="setting-label direction_label setting-label_checked" for="direction-row">row</label>
                    <input class="setting-input direction_input" type="radio" id="direction-column" name="direction" value="column">
                    <label class="setting-label direction_label" for="direction-column">column</label>
                    <input class="setting-input direction_input" type="radio" id="direction-row-reverse" name="direction" value="row-reverse">
                    <label class="setting-label direction_label" for="direction-row-reverse">row-reverse</label>
                    <input class="setting-input direction_input" type="radio" id="direction-column-reverse" name="direction" value="column-reverse">
                    <label class="setting-label direction_label" for="direction-column-reverse">column-reverse</label>
                </div>
            </div>
            <div class="setting-container wrap-container">
                <p class="setting-title">Wrap (Multilines)</p>
                <div class="flex-properties-container">
                    <input class="setting-input wrap_input" type="radio" id="wrap-wrap" name="wrap" value="wrap">
                    <label class="setting-label wrap_label" for="wrap-wrap">wrap</label>
                    <input class="setting-input wrap_input" type="radio" id="wrap-nowrap" name="wrap" value="nowrap" checked>
                    <label class="setting-label wrap_label setting-label_checked" for="wrap-nowrap">nowrap</label>
                    <input class="setting-input wrap_input" type="radio" id="wrap-wrap-reverse" name="wrap" value="wrap-reverse">
                    <label class="setting-label wrap_label" for="wrap-wrap-reverse">wrap-reverse</label>
                </div>
            </div>
        </div>
        <div class="css_generator_result">
          <app-preview-layout class="css_generator_preview"></app-preview-layout>
          <app-code-layout class="css_generator_code"></app-code-layout>
        </div>
    </div>
    `;
  }

  public events(): Record<string, string> {
    return {
      'click .amount-container': 'amountHandle',
      'click .justify-container': 'justifyHandle',
      'click .align_items-container': 'align_itemsHandle',
      'click .align_content-container': 'align_contentHandle',
      'click .direction-container': 'directionHandle',
      'click .wrap-container': 'wrapHandle',
    };
  }

  amountHandle(event: Event): void {
    if (event.target instanceof HTMLInputElement) renderingService.preview = `<div class="flexbox_demo" style="${flexboxItemsService.style}">${this.createPreview()}</div>`;
    if (event.target instanceof HTMLLabelElement) this.changeChecked(event.target, '.amount_label', 'amount-label_checked');
    this.renderLayout();
  }

  private justifyHandle(event: Event): void {
    if (event.target instanceof HTMLInputElement) flexboxItemsService.justifyContent = event.target.value;
    if (event.target instanceof HTMLLabelElement) this.changeChecked(event.target, '.justify-content_label', 'setting-label_checked');
    this.renderLayout();
  }

  private align_itemsHandle(event: Event): void { 
    if (event.target instanceof HTMLInputElement) flexboxItemsService.alignItems = event.target.value;
    if (event.target instanceof HTMLLabelElement) this.changeChecked(event.target, '.align_items_label', 'setting-label_checked');
    this.renderLayout();
  }

  private align_contentHandle(event: Event): void {
    if (event.target instanceof HTMLInputElement) flexboxItemsService.alignContent = event.target.value;
    if (event.target instanceof HTMLLabelElement) this.changeChecked(event.target, '.align_content_label', 'setting-label_checked');
    this.renderLayout();
  }

  private directionHandle(event: Event): void {
    if (event.target instanceof HTMLInputElement) flexboxItemsService.direction = event.target.value;
    if (event.target instanceof HTMLLabelElement) this.changeChecked(event.target, '.direction_label', 'setting-label_checked');
    this.renderLayout();
  }

  private wrapHandle(event: Event): void { 
    if (event.target instanceof HTMLInputElement) flexboxItemsService.wrap = event.target.value;
    if (event.target instanceof HTMLLabelElement) this.changeChecked(event.target, '.wrap_label', 'setting-label_checked');
    this.renderLayout();
  }

  private changeChecked(target: HTMLElement, selector: string, className: string) {
    const label = document.querySelectorAll(selector);
    label.forEach(el => el.classList.remove(className));
    setTimeout(() => {
      if (target instanceof HTMLLabelElement) target.classList.add(className);
    }, 0);
  }

  private createPreview() {
    const height = document.querySelector('.unequal_height') as HTMLInputElement;
    const isUnequal = (height?.checked) ? true : false; 
    let value = 4;
    const inputs = document.querySelectorAll('.amount-input');
    inputs.forEach(el => {
      if ((el instanceof HTMLInputElement) && (el.checked === true)) value = +el.value;
    });
    const container = document.createElement('div');
    for (let i = 0; i < value; i++) {
      const text = document.createElement('p');
      text.innerText = i.toString().repeat(5);
      if (isUnequal) {
        let j = 0;
        while (j < i) {
          text.innerText += '\n';
          text.innerText += i.toString().repeat(5);
          j++;
        }
      }
      const el = document.createElement('div');
      el.classList.add('item_demo');
      el.append(text);
      container.append(el);
    }
    return container.outerHTML.slice(5, -6);
  }

  private renderLayout(): void {
    flexboxItemsService.display = 'flex';
    flexboxItemsService.createStyle();
    renderingService.codeCSS = flexboxItemsService.style.split(';').join(';<br>');
    renderingService.preview = `<div class="flexbox_demo" style="${flexboxItemsService.style}">${this.createPreview()}</div>`;
    renderingService.codeHTML = renderingService.preview;
    previewLayoutComponent.createContent();
    previewLayoutComponent.render();
    codeLayoutComponent.createContent();
    codeLayoutComponent.render();
    const codeHTML = document.createElement('div');
    codeHTML.innerText = `<div class="flexbox_demo">${this.createPreview()}</div>`;
    const previewHTML = document.querySelector('.preview_html') as HTMLDivElement;
    previewHTML.append(codeHTML);
  }
}

export const flexboxItemsComponent = new FlexboxItemsComponent({
  selector: 'app-flexbox-items',
  template: '',
  childComponents: [codeLayoutComponent, previewLayoutComponent],
});

import { ComponentConfig } from '../../../../framework/tools/interfaces';
import { DMComponent } from '../../../../framework/index';
import { borderService } from '../../../service/border-component.service';
import { borderComponentPreview } from './border.preview.component';


export class BorderComponentSettings extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }

  public events(): Record<string, string> {
    return {
      'click .change': 'changeCode',
    };
  }

  private  changeCode() {
    borderService.generateRandomNumber();
    borderComponentPreview.template = `${borderService.randomNumber}`;
    borderComponentPreview.render();
  }
}

export const borderComponentSettings = new BorderComponentSettings({
  selector: 'app-border-settings',
  template: `
    <p>Тут всякие настройки</p>
    <p>Кнопка только для демонстрации рендеринга, по клику в блоке превью будет рандомное число</p>
    <button class="change">Кнопка</button>
    <br>
    <br>
  `,
  childComponents: [],
});

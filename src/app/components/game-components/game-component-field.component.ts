import { ComponentConfig } from '../../../framework/tools/interfaces';
import { DMComponent } from '../../../framework/index';

export class GameComponentFieldComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const gameComponentFieldComponent = new GameComponentFieldComponent({
  selector: 'app-game-field',
  template: `
            <div class="field_deadline">
              <div class="fire">
                <div class="fire_yellow"></div>
                <div class="fire_yellow"></div>
                <div class="fire_yellow"></div>
              </div>
              <div class="sloths">
                <div class="sloth_yellow"></div>
                <div class="sloth_yellow"></div>
                <div class="sloth_yellow"></div>
              </div>
            </div>
            `,
  childComponents: [],
});

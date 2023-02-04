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
            <div class="game_field">
              <div class="fire">
              FIRE
                <div class="fire_yellow">
              </div>
              <div class="sloths"></div>
            </div>
            `,
  childComponents: [],
});

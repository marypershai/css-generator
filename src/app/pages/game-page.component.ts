
import { gameComponentFieldComponent } from '../components/game-components/game-component-field.component';
import { gameComponentMenuComponent } from '../components/game-components/game-component-menu.component';
import { DMComponent } from '../../framework/index';
import { ComponentConfig } from '../../framework/tools/interfaces';

class GamePageComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const gamePageComponent = new GamePageComponent({
  selector: 'app-game-page',
  template: `
              <div class="game_body">
                <app-game-menu class="game_menu"></app-game-menu>
                <app-game-field class="game_field"></app-game-field>
              </div>
            `,
  childComponents: [gameComponentMenuComponent, gameComponentFieldComponent],
});

import { DMComponent } from '../../framework/index';
import { ComponentConfig } from '../../framework/tools/interfaces';

class GamePageComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const gamePageComponent = new GamePageComponent({
  selector: 'app-game-page',
  template: 'Game page content',
  childComponents: [],
});

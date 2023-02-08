import { ComponentConfig } from '../../../framework/tools/interfaces';
import { DMComponent } from '../../../framework/index';
import { levels } from './data';
import { gameComponentMenuComponent } from './game-component-menu.component';

export class GameComponentFieldComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createContent();
  }

  createContent() {
    this.template = levels[gameComponentMenuComponent.level - 1].field;
  }
}

export const gameComponentFieldComponent = new GameComponentFieldComponent({
  selector: 'app-game-field',
  template: '',
  childComponents: [],
});

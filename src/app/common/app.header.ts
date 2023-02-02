import { ComponentConfig } from '../../framework/tools/interfaces';
import { DMComponent } from '../../framework/index';


export class AppHeader extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }

}

export const appHeader = new AppHeader({
  selector: 'app-header',
  template: `
        <header class="page__container header">
          <div class="header__brand">
            <a href="/">
              <img class="header__logo" src="" alt="">
            </a>
            <h1 class="header__title">StyleIt</h1>
          </div>
          
            <div class="menu">
              <a href="#css-generator" class="menu-item">Css-generator</a>
              <a href="#card-generator" class="menu-item">Card-generator</a>
              <a href="#game" class="menu-item">Game</a>
              <a href="#about" class="menu-item">About</a>
            </div>
          </div>

        </header>
    `,
  childComponents: [],
});

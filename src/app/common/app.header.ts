import { ComponentConfig } from '../../framework/tools/interfaces';
import { DMComponent } from '../../framework/index';
import { closeMenu, toggleMenu } from '../service/controlMenu';
import { switchingOnLoad, switchThemeOnClick } from '../service/switchThemes';


export class AppHeader extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
    switchingOnLoad();
  }

  public isMenuOpen = false;

  private events(): Record<string, string> {
    return {
      'click .header': 'handleControlClicks',     
    };
  }

  private handleControlClicks(event: Event): void {
    const target = event.target as HTMLElement;
    if (target.closest('.menu__button')) {
      toggleMenu();
    } else if (target.classList.contains('menu-item')) {
      closeMenu();
    } else if (target.closest('.theme-switcher')) {
      switchThemeOnClick();
    }
  }


}

export const appHeader = new AppHeader({
  selector: 'app-header',
  template: `
          <header class="page__container header">
            <div class="header__brand">
              <h1 class="header__title">
                <a class="header__link" href="/#">
                  style<span class="header__subtitle">It</span>
                </a>
              </h1>
            </div>

            <button class="menu__button" type="button" aria-expanded="false" aria-label="toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div class="header__menu">
              
              <nav role="navigation" aria-label="Main navigation">
                <ul class="menu__list">
                  <li><a href="#css-generator" class="menu-item link">CSS Generator</a></li>
                  <li><a href="#card-generator" class="menu-item link">Card Generator</a></li>
                  <li><a href="#game" class="menu-item link">Game</a></li>
                  <li><a href="#about" class="menu-item link">About</a></li>
                </ul>
              </nav>    
            
              <div class="header__buttons">           
                <ul class="language-switcher" aria-label="language switcher">
                  <li><button class="language-switcher-item" tabindex="0" aria-label="english">Eng</button></li>
                  <li><button class="language-switcher-item language-switcher-item--active" tabindex="0" aria-label="russian">Rus</button></li>               
                </ul>     
                <button class="theme-switcher" aria-label="theme switcher" aria-live="polite">
                  <img src="./light.svg" alt="" width="30" height="30">                
                </button>
              </div>

            </div>      

          </header>
    `,
  childComponents: [],
});

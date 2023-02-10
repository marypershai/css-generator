import { ComponentConfig } from '../../framework/tools/interfaces';
import { DMComponent, router } from '../../framework/index';
import { closeMenu, toggleMenu } from '../service/controlMenu';
import { switchingOnLoad, switchThemeOnClick } from '../service/switchThemes';
import { checkLang } from '../service/lang.service';
import { cssComponentMenuComponent } from '../components/css-components/css-component-menu.component';
import { allCssComponents } from '../../framework/tools/components';
import { renderingService } from '../service/rendering.service';
import { gamePageComponent } from '../pages/game-page.component';


export class AppHeader extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
    switchingOnLoad();
    this.createContent();
  }

  public isMenuOpen = false;

  public createContent() {
    const { lang, savedLang } = checkLang();
    const activeClassEn: string = savedLang === 'en' ? 'language-switcher-item--active' : '';
    const activeClassRu: string = savedLang === 'ru' ? 'language-switcher-item--active' : '';
    this.template = `
      <header class="page__container header">
            <div class="header__brand">
              <h1 class="header__title">
                <a class="header__link" href="#">
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
                  <li><a href="#css-generator" class="menu-item link">${lang.cssGenerator}</a></li>
                  <li><a href="#card-generator" class="menu-item link">${lang.cardGenerator}</a></li>
                  <li><a href="#game" class="menu-item link">${lang.game}</a></li>
                  <li><a href="#about" class="menu-item link">${lang.aboutPage}</a></li>
                </ul>
              </nav>    
            
              <div class="header__buttons">           
                <ul class="language-switcher" aria-label="language switcher">
                  <li><button class="language-switcher-item ${activeClassEn}" tabindex="0" aria-label="english">Eng</button></li>
                  <li><button class="language-switcher-item ${activeClassRu}" tabindex="0" aria-label="russian">Rus</button></li>               
                </ul>     
                <button class="theme-switcher" aria-label="theme switcher" aria-live="polite">
                  <img src="./light.svg" alt="" width="30" height="30">                
                </button>
              </div>

            </div>      

          </header>
    `;
  }

  private events(): Record<string, string> {
    return {
      'click .header': 'handleControlClicks',
      'click .language-switcher': 'changeLang',
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

  private changeLang(event: Event): void {
    const target = event.target as HTMLElement;
    const langSwitcherText = target.getAttribute('aria-label');
    if (langSwitcherText === 'english') {
      localStorage.setItem('lang', 'en');
    } else {
      localStorage.setItem('lang', 'ru');
    }
    this.createContent();
    this.render();
    if (router.getUrl() === 'css-generator') {
      cssComponentMenuComponent.createContent();
      cssComponentMenuComponent.render();
      const savedComponentName = localStorage.getItem('component');
      const componentName = allCssComponents.find((component) => {
        if (component.name === savedComponentName) {
          return component;
        }
      });
      if (componentName) {
        componentName.component.createContent();
        componentName.component.render();
        if (componentName.component.childComponents.length > 0) {
          componentName.component.childComponents.forEach((component) => {
            component.createContent();
            component.render();
          });
        }
      }
      renderingService.reset();
    }
    if (router.getUrl() === 'game') {
      gamePageComponent.createContent();
      gamePageComponent.render();
    }
  }

}

export const appHeader = new AppHeader({
  selector: 'app-header',
  template: '',
  childComponents: [],
});

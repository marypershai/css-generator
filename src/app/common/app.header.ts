import { ComponentConfig } from '../../framework/tools/interfaces';
import { DMComponent, router } from '../../framework/index';
import { closeMenu, toggleMenu } from '../service/controlMenu';
import { switchingOnLoad, switchThemeOnClick } from '../service/switchThemes';
import { checkLang } from '../service/lang.service';
import { cssComponentMenuComponent } from '../components/css-components/css-component-menu.component';
import { allCssComponents } from '../../framework/tools/components';
import { gamePageComponent } from '../pages/game-page.component';
import { cardGeneratorPageComponent } from '../pages/card-generator-page.component';
import { addActiveStatus, addActiveStatusByUrl } from '../service/setActivePage';
import { hexRGBLayoutComponent } from '../components/hex-rgb-component/hex-rgb-layout.component';
import { hexRGBPreviewComponent } from '../components/hex-rgb-component/hex-rgb-preview.component';
import { aboutPageComponent } from '../pages/about-page.component';
import { homePageComponent } from '../pages/home-page.component';



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

                  <li><a href="#css-generator" class="menu-item link" id="css-generator">${lang.cssGenerator}</a></li>
                  <li><a href="#card-generator" class="menu-item link" id="card-generator">${lang.cardGenerator}</a></li>
                  <li><a href="#hex-rgb" class="menu-item link" id="hex-rgb">${lang.hexRGB}</a></li>
                  <li><a href="#game" class="menu-item link" id="game">${lang.game}</a></li>
                  <li><a href="#about" class="menu-item link" id="about">${lang.aboutPage}</a></li>

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
      addActiveStatus(event);
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
    cssComponentMenuComponent.createContent();
    const savedComponentName = localStorage.getItem('component');
    const componentName = allCssComponents.find((component) => {
      if (component.name === savedComponentName) {
        return component;
      }
    });
    if (componentName) {
      componentName.component.createContent();
      if (componentName.component.childComponents.length > 0) {
        componentName.component.childComponents.forEach((component) => {
          component.createContent();
        });
      }
    }
    if (router.getUrl() === 'css-generator') {
      addActiveStatusByUrl('css-generator');
      cssComponentMenuComponent.render();
      if (componentName) {
        componentName.component.render();
        if (componentName.component.childComponents.length > 0) {
          componentName.component.childComponents.forEach((component) => {
            component.render();
          });
        }
      }
    }
    gamePageComponent.createContent();
    if (router.getUrl() === 'game') {
      addActiveStatusByUrl('game');
      gamePageComponent.render();
    }
    cardGeneratorPageComponent.createCardPage();
    if (router.getUrl() === 'card-generator') {
      addActiveStatusByUrl('card-generator');
      cardGeneratorPageComponent.render();
    }
    hexRGBLayoutComponent.createContent();
    hexRGBPreviewComponent.createContent();
    if (router.getUrl() === 'hex-rgb') {
      addActiveStatusByUrl('hex-rgb');
      hexRGBLayoutComponent.render();
      hexRGBPreviewComponent.render();
    }
    aboutPageComponent.createContent();
    if (router.getUrl() === 'about') {
      addActiveStatusByUrl('about');
      aboutPageComponent.render();
    }
    homePageComponent.createContent();
    if (router.getUrl() === '#' || router.getUrl() === '') {
      homePageComponent.render();
    }
  }

}

export const appHeader = new AppHeader({
  selector: 'app-header',
  template: '',
  childComponents: [],
});

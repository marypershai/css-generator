
import { appHeader } from '../common/app.header';


export function closeMenu():void {
  const menuButton = document.querySelector('.menu__button') as HTMLButtonElement;
  const menu = document.querySelector('.header__menu') as HTMLElement; 

  menuButton.classList.remove('menu__button--open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'open menu');
  menu.classList.remove('header__menu--open');
  appHeader.isMenuOpen = false; 
}


function closeOnOutsideClick(): void {
  const menuButton = document.querySelector('.menu__button') as HTMLButtonElement;
  const headerMenu = document.querySelector('app-header') as HTMLElement;
  

  if (appHeader.isMenuOpen) {
    document.addEventListener('click', function handler(e: Event) {
      const target = e.target as HTMLElement;
      if (!headerMenu.contains(target) && !menuButton.contains(target)) {
        closeMenu();
        document.removeEventListener('click', handler);
      }
    });
  }
}


export function openMenu():void {
  const menuButton = document.querySelector('.menu__button') as HTMLButtonElement;
  const menu = document.querySelector('.header__menu') as HTMLElement; 

  menuButton.classList.add('menu__button--open');
  menuButton.setAttribute('aria-expanded', 'true');
  menuButton.setAttribute('aria-label', 'close menu');
  menu.classList.add('header__menu--open');
  appHeader.isMenuOpen = true;
  closeOnOutsideClick();
}

export function toggleMenu():void {
  if (!appHeader.isMenuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
}





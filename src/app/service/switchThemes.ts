

function getColorPreference(): string {

  const themePreference = localStorage.getItem('theme-preference');
  if (themePreference) {
    return themePreference;
  } else {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}


function reflectPreference(value: string): void {
  const html = document.firstElementChild as HTMLElement;
  const themeButton = document.querySelector('.theme-switcher') as HTMLButtonElement;
  const rssLogo = document.querySelector('.rss-logo') as HTMLImageElement; 

  html.setAttribute('data-theme', value);
  themeButton?.setAttribute('aria-label', value);


  if (themeButton && value === 'light' ) {
    rssLogo.src = './rs_school_js.svg';
   
    themeButton.innerHTML = `
   <svg class="theme-icon">
    <use xlink:href="./icons.svg#light"></use>
  </svg>
    `;
  } else if (themeButton) {
    rssLogo.src = './rs_school_js-light.svg';
   
    themeButton.innerHTML = `
    <svg class="theme-icon">
    <use xlink:href="./icons.svg#dark"></use>
  </svg>
    `;
  }
}


function setPreference(value: string): void {
  localStorage.setItem('theme-preference', value);
  reflectPreference(value);
}


export function switchingOnLoad(): void {
  window.addEventListener('DOMContentLoaded', () => {
    const theme = getColorPreference();
    reflectPreference(theme);
    console.log('loding');
  });

}


export function switchThemeOnClick(): void {
  let theme = getColorPreference();
  theme = theme === 'light' ? 'dark' : 'light';
  setPreference(theme);
}
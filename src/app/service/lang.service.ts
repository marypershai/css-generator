const langEN = JSON.parse(JSON.stringify(require('../data/en.json')));
const langRU = JSON.parse(JSON.stringify(require('../data/ru.json')));

export function checkLang() {
  let savedLang: string | null = localStorage.getItem('lang');
  let lang;
  if (savedLang && savedLang === 'ru') {
    lang = langRU;
  } else {
    localStorage.setItem('lang', 'en');
    savedLang = 'en';
    lang = langEN;
  }
  return { lang, savedLang };
}


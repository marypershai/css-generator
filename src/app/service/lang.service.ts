const langEN = JSON.parse(JSON.stringify(require('../data/en.json')));
const langRU = JSON.parse(JSON.stringify(require('../data/ru.json')));

export function checkLang() {
  let savedLang: string = localStorage.getItem('lang') ?? 'en';
  let lang;
  if (savedLang === 'ru') {
    lang = langRU;
  } else {
    localStorage.setItem('lang', 'en');
    savedLang = 'en';
    lang = langEN;
  }
  return { lang, savedLang };
}


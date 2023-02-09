
import { disclaimer, levels } from '../data/gameData';
import { DMComponent } from '../../framework/index';
import { ComponentConfig } from '../../framework/tools/interfaces';
import { checkLang } from '../service/lang.service';

class GamePageComponent extends DMComponent {
  level: number;

  constructor(config: ComponentConfig) {
    super(config);
    this.level = this.checkLevel();
    this.createContent();
  }

  public events(): Record<string, string> {
    return {
      'input .game_code_input': 'codeInput',
      'click .prev_lvl': 'prevLevel',
      'click .next_lvl': 'nextLevel',
    };
  }

  private  codeInput(): void {
    const input: HTMLElement | null = document.querySelector('.game_code_input');
    if (input instanceof HTMLInputElement) {
      const sloths: HTMLElement | null = document.querySelector('.sloths');
      if (sloths instanceof HTMLDivElement) sloths.setAttribute('style', input.value);
    }
  }

  createContent() {
    const { savedLang } = checkLang();
    const desctiptionLang = (savedLang === 'ru') ? levels[this.level - 1].description.ru : levels[this.level - 1].description.en;
    const disclaimerLang = (savedLang === 'ru') ? disclaimer.ru : disclaimer.en;
    const levelLang = (savedLang === 'ru') ? 'Уровень' : 'Level';
    const nextLang = (savedLang === 'ru') ? 'Следующий' : 'Next';
    const prevDisabling = (this.level === 1) ? 'disabled' : '';
    const nextDisabling = (this.level === levels.length) ? 'disabled' : '';
    this.template = `
              <div class="game_body">
                <div class="game_menu">
                <div class="game_header">
                  <h2 class="game_subheader"> FLEXBOX SLOTHS </h2>
                  <div class="game_level"> 
                    <button class="game_btn prev_lvl" ${prevDisabling}> ᐊ </button>
                    ${levelLang} ${this.level} 
                    <button class="game_btn next_lvl" ${nextDisabling}> ᐅ </button>
                  </div>
                </div>
                ${desctiptionLang}
                <div class="game_code-field">
                  <div class="line-numbers">1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10</div>
                  <div class="code-field"> 
                    <span>#RSSchool {</span>
                    <br>
                    <span class="code_indent">display: flex;</span>
                    <br>
                    <span class="code_indent"><input type="text" class="game_code_input" autofocus></textarea></span>
                    <br>
                    <span>}</span>
                    <br>
                    <button class="game_next_btn"> ${nextLang} </button>
                  </div>
                </div>
                <div class="game_disclaimer">${disclaimerLang}</div>
                </div>
                <div class="game_field">${levels[this.level - 1].field}</div>
              </div>

    
    `;
  }

  checkLevel() {
    const savedLevel = localStorage.getItem('gameLevel');
    let level;
    if (savedLevel) {
      level = +savedLevel;
    } else level = 1;
    return +level;
  }

  prevLevel() {
    this.level -= 1;
    this.createContent();
    this.render();
    localStorage.setItem('gameLevel', this.level.toString());
  }

  nextLevel() {
    this.level += 1;
    this.createContent();
    this.render();
    localStorage.setItem('gameLevel', this.level.toString());
  }
}

export const gamePageComponent = new GamePageComponent({
  selector: 'app-game-page',
  template: '',
  childComponents: [],
});


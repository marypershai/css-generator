
import { disclaimer, levels } from '../data/gameData';
import { DMComponent } from '../../framework/index';
import { ComponentConfig } from '../../framework/tools/interfaces';
import { checkLang } from '../service/lang.service';

class GamePageComponent extends DMComponent {
  level: number;

  answer: string[];

  constructor(config: ComponentConfig) {
    super(config);
    this.level = this.checkLevel();
    this.answer = this.checkAnswer();
    this.createContent();
  }

  public events(): Record<string, string> {
    return {
      'input .game_code_input': 'codeInput',
      'click .prev_lvl': 'prevLevel',
      'click .next_lvl': 'nextLevel',
      'click .game_next_btn': 'nextLevel',
    };
  }

  private  codeInput(): void {
    const { savedLang } = checkLang();
    const input: HTMLElement | null = document.querySelector('.game_code_input');
    if (input instanceof HTMLInputElement) {
      const sloths: HTMLElement | null = document.querySelector('.sloths');
      if (sloths instanceof HTMLDivElement) sloths.setAttribute('style', input.value);
      if (this.answer.every((el) => (input.value.split(' ').join('').includes(el)))) {
        const nextBtn = document.querySelector('.game_next_btn');
        if (nextBtn instanceof HTMLButtonElement) nextBtn.disabled = false;
        const message = document.createElement('div');
        message.classList.add('game_win_message');
        message.innerText = `${(savedLang === 'ru') ? 'Правильно!' : 'Correct!'}`;
        if (sloths) {
          sloths.append(message);
          setTimeout(() => message.remove(), 1000);
        }
        this.solved(this.level);
      }
    }
  }

  createContent() {
    const { savedLang } = checkLang();
    this.template = `
              <div class="game_body">
                <div class="game_menu">
                <div class="game_header">
                  <h2 class="game_subheader"> FLEXBOX SLOTHS </h2>
                  <div class="game_level"> 
                    <button class="game_btn prev_lvl" ${(this.level === 1) ? 'disabled' : ''}> ᐊ </button>
                    ${(savedLang === 'ru') ? 'Уровень' : 'Level'} ${this.level} 
                    <button class="game_btn next_lvl" ${(this.level === levels.length) ? 'disabled' : ''}> ᐅ </button>
                  </div>
                </div>
                ${(savedLang === 'ru') ? levels[this.level - 1].description.ru : levels[this.level - 1].description.en}
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
                    <button class="game_next_btn" disabled> ${(savedLang === 'ru') ? 'Следующий' : 'Next'} </button>
                  </div>
                </div>
                <div class="game_disclaimer">${(savedLang === 'ru') ? disclaimer.ru : disclaimer.en}</div>
                </div>
                <div class="game_field">${levels[this.level - 1].field}</div>
              </div>`;
  }

  checkLevel() {
    const savedLevel = localStorage.getItem('gameLevel');
    let level;
    if (savedLevel) {
      level = +savedLevel;
    } else level = 1;
    return +level;
  }

  checkAnswer() {
    const answer: string[] = [];
    const props = levels[this.level - 1].prop.split(', ');
    const values = levels[this.level - 1].value.split(', ');
    for (let i = 0; i < props.length; i++) {
      answer.push(`${props[i]}:${values[i]}`);
    }
    console.log(answer);
    return answer;
  }

  solved(level: number) {
    const solved = Array.from(new Set(localStorage.getItem('gameSolved')?.split(', ')));
    if (solved) {
      if (!solved.includes(level.toString())) solved.push(level.toString());
      console.log(solved);
      localStorage.setItem('gameSolved', solved.join(', '));
    } else localStorage.setItem('gameSolved', level.toString());
  }

  prevLevel() {
    this.level -= 1;
    this.answer = this.checkAnswer();
    this.createContent();
    this.render();
    localStorage.setItem('gameLevel', this.level.toString());
  }

  nextLevel() {
    this.level += 1;
    this.answer = this.checkAnswer();
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


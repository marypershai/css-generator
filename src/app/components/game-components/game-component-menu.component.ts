import { checkLang } from '../../service/lang.service';
import { DMComponent } from '../../../framework/index';
import { ComponentConfig } from '../../../framework/tools/interfaces';
import { disclaimer, levels } from './data';

export class GameComponentMenuComponent extends DMComponent {
  level: number;

  constructor(config: ComponentConfig) {
    super(config);
    this.level = 1;
    this.createContent();
  }

  public events(): Record<string, string> {
    return {
      'input .game_code_input': 'codeInput',
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
    this.template = `
    <div class="game_header">
      <h2 class="game_subheader"> FLEXBOX SLOTHS </h2>
      <div class="game_level"> ${levelLang} ${this.level} </div>
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
    `;
  }

}

export const gameComponentMenuComponent = new GameComponentMenuComponent({
  selector: 'app-game-menu',
  template: '',
  childComponents: [],
});

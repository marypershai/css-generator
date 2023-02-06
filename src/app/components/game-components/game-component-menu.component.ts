import { DMComponent } from '../../../framework/index';
import { ComponentConfig } from '../../../framework/tools/interfaces';

export class GameComponentMenuComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
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
}

export const gameComponentMenuComponent = new GameComponentMenuComponent({
  selector: 'app-game-menu',
  template: `
              <div class="game_header">
                <h2 class="game_subheader"> FLEXBOX SLOTHS </h2>
                <div class="game_level"> Level 1 </div>
              </div>
              <div class="game_info"> Welcome to Flexbox Sloths, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the <code> justify-content</code> property, which aligns items horizontally and accepts the following values:
                <ul class="game_list"> 
                  <li> <code> flex-start</code>: Items align to the left side of the container. </li>
                  <li> <code> flex-end</code>: Items align to the right side of the container. </li>
                  <li> <code> center</code>: Items align at the center of the container. </li>
                  <li> <code> space-between</code>: Items display with equal spacing between them. </li>
                  <li> <code> space-around</code>: Items display with equal spacing around them. </li>
                </ul>
                For example, <code> justify-content: flex-end;</code> will move the frog to the right.  
              </div>

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
                  <button class="game_next_btn"> Next </button>
                </div>
              </div>
  `,
  childComponents: [],
});

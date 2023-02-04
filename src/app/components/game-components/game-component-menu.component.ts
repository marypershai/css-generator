import { DMComponent } from '../../../framework/index';
import { ComponentConfig } from '../../../framework/tools/interfaces';

export class GameComponentMenuComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }

  // public events(): Record<string, string> {
  //   return {
  //     'click .menu': 'chooseComponent',
  //   };
  // }
}

export const gameComponentMenuComponent = new GameComponentMenuComponent({
  selector: 'app-game-menu',
  template: `
              <h3> FLEXBOX SLOTHS </h3>
              <div> Level 1 </div>
              <div> Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the justify-content property, which aligns items horizontally and accepts the following values:
                <ul class="game_list"> 
                  <li> flex-start: Items align to the left side of the container. </li>
                  <li> flex-end: Items align to the right side of the container. </li>
                  <li> center: Items align at the center of the container. </li>
                  <li> space-between: Items display with equal spacing between them. </li>
                  <li> space-around: Items display with equal spacing around them. </li>
                </ul>
                For example, justify-content: flex-end; will move the frog to the right.  
              </div>


              <div class="game_code-field">
                <div class="line-numbers">1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10</div>
                <div class="code-field"> 
                  <span>#RSSchool {
                    <br>
                    display: flex;
                  </span>
                  <br>
                  <textarea autofocus autocapitalize="none" style="height: 24px;"></textarea>
                  <br>
                  <span>}</span>
                  <br>
                  <button class="game_next_btn"> Next </button>
                </div>
              </div>
  `,
  childComponents: [],
});

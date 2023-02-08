export const levels = [

  {
    level: 1,
    prop: 'justify-content',
    value: 'flex-end',
    description: {
      en: `
              <div class="game_info"> Welcome to Flexbox Sloths, a game where you help the sloths meet the burning deadline by writing CSS code! Guide this sloth to the fire on the right by using the <code> justify-content</code> property, which aligns items horizontally and accepts the following values:
                <ul class="game_list"> 
                  <li> <code> flex-start</code>: Items align to the left side of the container. </li>
                  <li> <code> flex-end</code>: Items align to the right side of the container. </li>
                  <li> <code> center</code>: Items align at the center of the container. </li>
                  <li> <code> space-between</code>: Items display with equal spacing between them. </li>
                  <li> <code> space-around</code>: Items display with equal spacing around them. </li>
                </ul>
                For example, <code> justify-content: flex-end;</code> will move the sloth to the right.  
              </div>`, 
      ru: `
              <div class="game_info"> Добро пожаловать в игру Flexbox Sloths. Тебе нужно помочь ленивцам успеть завершить проект до наступления дедлайна, написав CSS код! Направь этого ленивца на пламя справа, используя свойство <code>justify-content</code>, которое выравнивает элементы горизонтально и принимает следующие значения:
                <ul class="game_list"> 
                  <li> <code> flex-start</code>: элементы выравниваются по левой стороне контейнера. </li>
                  <li> <code> flex-end</code>: элементы выравниваются по правой стороне контейнера. </li>
                  <li> <code> center</code>: элементы выравниваются по центру контейнера. </li>
                  <li> <code> space-between</code>: элементы отображаются с одинаковыми отступами между ними. </li>
                  <li> <code> space-around</code>: элементы отображаются с одинаковыми отступами вокруг них. </li>
                </ul>
                Например, <code> justify-content: flex-end;</code> сдвинет ленивца вправо.  
              </div>`,
    },
  },

  {
    level: 2,
    prop: 'justify-content',
    value: 'center',
    description: {
      en: `
              <div class="game_info"> Use <code>justify-content</code> justify-content again to help these sloths. Remember that this CSS property aligns items horizontally and accepts the following values:
                <ul class="game_list"> 
                  <li> <code> flex-start</code>: Items align to the left side of the container. </li>
                  <li> <code> flex-end</code>: Items align to the right side of the container. </li>
                  <li> <code> center</code>: Items align at the center of the container. </li>
                  <li> <code> space-between</code>: Items display with equal spacing between them. </li>
                  <li> <code> space-around</code>: Items display with equal spacing around them. </li>
                </ul>
              </div>`, 
      ru: `
              <div class="game_info"> Используй <code>justify-content</code> ещё раз, чтобы помочь этим ленивцам. Помни, что это свойство CSS выравнивает элементы горизонтально и принимает следующие значения:
                <ul class="game_list"> 
                  <li> <code> flex-start</code>: элементы выравниваются по левой стороне контейнера. </li>
                  <li> <code> flex-end</code>: элементы выравниваются по правой стороне контейнера. </li>
                  <li> <code> center</code>: элементы выравниваются по центру контейнера. </li>
                  <li> <code> space-between</code>: элементы отображаются с одинаковыми отступами между ними. </li>
                  <li> <code> space-around</code>: элементы отображаются с одинаковыми отступами вокруг них. </li>
                </ul>
              </div>`,
    },
  },
  
  {
    level: 3,
    prop: 'justify-content',
    value: 'space-around',
    description: {
      en: `
              <div class="game_info"> Help all three sloths just by using <code>justify-content</code>. This time, the fire have lots of space all around them. If you find yourself forgetting the possible values for a property, you can click on the property name to view them. Try clicking on <code>justify-content</code>.
              </div>`, 
      ru: `
              <div class="game_info"> Помоги всем трём ленивцам, используя <code>justify-content</code>. В этот раз у лилий много пространства вокруг. Если ты чувствуешь, что забыл возможные значения свойства, ты можешь навести курсор на название свойства, чтобы посмотреть их. Попробуй навести курсор на <code>justify-content</code>.
              </div>`,
    },
  },
  
  {
    level: 4,
    prop: 'justify-content',
    value: 'space-between',
    description: {
      en: `
              <div class="game_info"> This time, the fire have equal spacing between them. Use <code>justify-content</code>. 
              </div>`, 
      ru: `
              <div class="game_info"> В этот раз у пламени одинаковое расстояние между ними. Используй <code>justify-content</code>. 
              </div>`,
    },
  },
  
  {
    level: 5,
    prop: 'align-items',
    value: 'flex-end',
    description: {
      en: `
              <div class="game_info"> Now use <code>align-items</code> to help the sloths meet the burning deadline. This CSS property aligns items vertically and accepts the following values:
                <ul class="game_list"> 
                  <li> <code> flex-start</code>: Items align to the top of the container. </li>
                  <li> <code> flex-end</code>: Items align to the bottom of the container. </li>
                  <li> <code> center</code>: Items align at the vertical center of the container. </li>
                  <li> <code> baseline</code>: Items display at the baseline of the container. </li>
                  <li> <code> stretch</code>: Items are stretched to fit the container. </li>
                </ul>
              </div>`, 
      ru: `
              <div class="game_info"> Теперь используй <code>align-items</code>, чтобы помочь ленивцам уложиться в горящие сроки. Это свойство CSS выравнивает элементы вертикально и принимает следующие значения:
                <ul class="game_list"> 
                  <li> <code> flex-start</code>: элементы выравниваются по верхнему краю контейнера. </li>
                  <li> <code> flex-end</code>: элементы выравниваются по нижнему краю контейнера. </li>
                  <li> <code> center</code>: элементы выравниваются вертикально по центру контейнера. </li>
                  <li> <code> baseline</code>: элементы отображаются на базовой линии контейнера. </li>
                  <li> <code> stretch</code>: элементы растягиваются, чтобы заполнить контейнер. </li>
                </ul>
              </div>`,
    },
  },
  
  {
    level: 6,
    prop: 'justify-content, align-items',
    value: 'center, center',
    description: {
      en: `
              <div class="game_info"> Lead the sloth to the center of the game-area using a combination of <code>justify-content</code> and <code>align-items</code>.
              </div>`, 
      ru: `
              <div class="game_info"> Направь ленивца в центр поля, используя свойства <code>justify-content</code> и <code>align-items</code> вместе.
              </div>`,
    },
  },
  
  {
    level: 7,
    prop: 'justify-content, align-items',
    value: 'space-around, flex-end',
    description: {
      en: `
              <div class="game_info"> The sloths need to cross the game-field. Use a combination of <code>justify-content</code> and <code>align-items</code>.
              </div>`, 
      ru: `
              <div class="game_info"> Ленивцам нужно пересечь поле. Используй комбинацию <code>justify-content</code> и <code>align-items</code>.
              </div>`,
    },
  },
  
  {
    level: 8,
    prop: 'align-items',
    value: 'flex-end',
    description: {
      en: `
              <div class="game_info"> Now use <code>align-items</code> to help the sloths meet the burning deadline. This CSS property aligns items vertically and accepts the following values:
                <ul class="game_list"> 
                  <li> <code> flex-start</code>: Items align to the top of the container. </li>
                  <li> <code> flex-end</code>: Items align to the bottom of the container. </li>
                  <li> <code> center</code>: Items align at the vertical center of the container. </li>
                  <li> <code> baseline</code>: Items display at the baseline of the container. </li>
                  <li> <code> stretch</code>: Items are stretched to fit the container. </li>
                </ul>
              </div>`, 
      ru: `
              <div class="game_info"> Лягушатам нужно выстроиться в том же порядке, что и лилии, используя flex-direction. Это свойство CSS задает направление, в котором будут расположены элементы в контейнере, и принимает следующие значения:
                <ul class="game_list"> 
                  <li> <code> row</code>: элементы размещаются по направлению текста. </li>
                  <li> <code> row-reverse</code>: элементы отображаются в обратном порядке к направлению текста. </li>
                  <li> <code> column</code>: элементы располагаются сверху вниз. </li>
                  <li> <code> column-reverse</code>: элементы располагаются снизу вверх. </li>
                </ul>
              </div>`,
    },
  },


];

export const disclaimer = {
  en: 'The sloths taken from <a href="https://sloths.rs.school">sloths.rs.school</a>. No sloths were harmed',
  ru: 'Ленивцы взяты с сайта <a href="https://sloths.rs.school">sloths.rs.school</a>. При создании игры ни один ленивец не пострадал',
};
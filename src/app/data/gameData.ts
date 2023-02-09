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
    field: `<div class="field_deadline">
              <div class="fire" style="justify-content: flex-end;">
                <div class="fire_yellow"></div>
              </div>
              <div class="sloths">
                <div class="sloth_yellow"></div>
              </div>
            </div>`,
  },

  {
    level: 2,
    prop: 'justify-content',
    value: 'center',
    description: {
      en: `
              <div class="game_info"> Use <code>justify-content</code> again to help these sloths. Remember that this CSS property aligns items horizontally and accepts the following values:
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
    field: `<div class="field_deadline">
              <div class="fire" style="justify-content: center;">
                <div class="fire_yellow"></div>
                <div class="fire_blue"></div>
              </div>
              <div class="sloths">
                <div class="sloth_yellow"></div>
                <div class="sloth_blue"></div>
              </div>
            </div>`,
  },
  
  {
    level: 3,
    prop: 'justify-content',
    value: 'space-around',
    description: {
      en: '<div class="game_info"> Help all three sloths just by using <code>justify-content</code>. This time, the fire have lots of space all around them. If you find yourself forgetting the possible values for a property, you can click on the property name to view them. Try clicking on <code>justify-content</code>.</div>', 
      ru: '<div class="game_info"> Помоги всем трём ленивцам, используя <code>justify-content</code>. В этот раз у лилий много пространства вокруг. Если ты чувствуешь, что забыл возможные значения свойства, ты можешь навести курсор на название свойства, чтобы посмотреть их. Попробуй навести курсор на <code>justify-content</code>.</div>',
    },
    field: `<div class="field_deadline">
              <div class="fire" style="justify-content: space-around;">
                <div class="fire_yellow"></div>
                <div class="fire_red"></div>
                <div class="fire_blue"></div>
              </div>
              <div class="sloths">
                <div class="sloth_yellow"></div>
                <div class="sloth_red"></div>
                <div class="sloth_blue"></div>
              </div>
            </div>`,
  },
  
  {
    level: 4,
    prop: 'justify-content',
    value: 'space-between',
    description: {
      en: '<div class="game_info"> This time, the fire have equal spacing between them. Use <code>justify-content</code>.</div>', 
      ru: '<div class="game_info"> В этот раз у пламени одинаковое расстояние между ними. Используй <code>justify-content</code>.</div>',
    },
    field: `<div class="field_deadline">
              <div class="fire" style="justify-content: space-between;">
                <div class="fire_yellow"></div>
                <div class="fire_red"></div>
                <div class="fire_blue"></div>
              </div>
              <div class="sloths">
                <div class="sloth_yellow"></div>
                <div class="sloth_red"></div>
                <div class="sloth_blue"></div>
              </div>
            </div>`,
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
    field: `<div class="field_deadline">
              <div class="fire" style="align-items: flex-end;">
                <div class="fire_yellow"></div>
                <div class="fire_red"></div>
                <div class="fire_blue"></div>
              </div>
              <div class="sloths">
                <div class="sloth_yellow"></div>
                <div class="sloth_red"></div>
                <div class="sloth_blue"></div>
              </div>
            </div>`,
  },
  
  {
    level: 6,
    prop: 'justify-content, align-items',
    value: 'center, center',
    description: {
      en: '<div class="game_info"> Lead the sloth to the center of the game-area using a combination of <code>justify-content</code> and <code>align-items</code>.</div>', 
      ru: '<div class="game_info"> Направь ленивца в центр поля, используя свойства <code>justify-content</code> и <code>align-items</code> вместе.</div>',
    },
    field: `<div class="field_deadline">
              <div class="fire" style="justify-content: center; align-items: center;">
                <div class="fire_yellow"></div>
              </div>
              <div class="sloths">
                <div class="sloth_yellow"></div>
              </div>
            </div>`,
  },
  
  {
    level: 7,
    prop: 'justify-content, align-items',
    value: 'space-around, flex-end',
    description: {
      en: '<div class="game_info"> The sloths need to cross the game-field. Use a combination of <code>justify-content</code> and <code>align-items</code>.</div>', 
      ru: '<div class="game_info"> Ленивцам нужно пересечь поле. Используй комбинацию <code>justify-content</code> и <code>align-items</code>.</div>',
    },
    field: `<div class="field_deadline">
              <div class="fire" style="justify-content:space-around; align-items: flex-end;">
                <div class="fire_yellow"></div>
                <div class="fire_red"></div>
                <div class="fire_blue"></div>
              </div>
              <div class="sloths">
                <div class="sloth_yellow"></div>
                <div class="sloth_red"></div>
                <div class="sloth_blue"></div>
              </div>
            </div>`,
  },
  
  {
    level: 8,
    prop: 'flex-direction',
    value: 'row-reverse',
    description: {
      en: `
              <div class="game_info"> The sloths need to get in the same order as their deadlines using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:
                <ul class="game_list"> 
                  <li> <code> row</code>: Items are placed the same as the text direction. </li>
                  <li> <code> row-reverse</code>: Items are placed opposite to the text direction. </li>
                  <li> <code> column</code>: Items are placed top to bottom. </li>
                  <li> <code> column-reverse</code>: Items are placed bottom to top. </li>
                </ul>
              </div>`, 
      ru: `
              <div class="game_info"> Ленивцам нужно выстроиться в том же порядке, что и горящие сроки, используя <code>flex-direction</code>. Это свойство CSS задает направление, в котором будут расположены элементы в контейнере, и принимает следующие значения:
                <ul class="game_list"> 
                  <li> <code> row</code>: элементы размещаются по направлению текста. </li>
                  <li> <code> row-reverse</code>: элементы отображаются в обратном порядке к направлению текста. </li>
                  <li> <code> column</code>: элементы располагаются сверху вниз. </li>
                  <li> <code> column-reverse</code>: элементы располагаются снизу вверх. </li>
                </ul>
              </div>`,
    },
    field: `<div class="field_deadline">
              <div class="fire" style="flex-direction: row-reverse;">
                <div class="fire_yellow"></div>
                <div class="fire_red"></div>
                <div class="fire_blue"></div>
              </div>
              <div class="sloths">
                <div class="sloth_yellow"></div>
                <div class="sloth_red"></div>
                <div class="sloth_blue"></div>
              </div>
            </div>`,
  },

  {
    level: 9,
    prop: 'flex-direction',
    value: 'column',
    description: {
      en: `
              <div class="game_info"> Help the sloths find their column of deadline using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:
                <ul class="game_list"> 
                  <li> <code> row</code>: Items are placed the same as the text direction. </li>
                  <li> <code> row-reverse</code>: Items are placed opposite to the text direction. </li>
                  <li> <code> column</code>: Items are placed top to bottom. </li>
                  <li> <code> column-reverse</code>: Items are placed bottom to top. </li>
                </ul>
              </div>`, 
      ru: `
              <div class="game_info"> Помоги ленивцам завершить все проекты в срок, используя <code>flex-direction</code>. Это свойство CSS задает направление, в котором располагаются элементы в контейнере, и принимает следующие значения:
                <ul class="game_list"> 
                  <li> <code> row</code>: элементы размещаются по направлению текста. </li>
                  <li> <code> row-reverse</code>: элементы отображаются в обратном порядке к направлению текста. </li>
                  <li> <code> column</code>: элементы располагаются сверху вниз. </li>
                  <li> <code> column-reverse</code>: элементы располагаются снизу вверх. </li>
                </ul>
              </div>`,
    },
    field: `<div class="field_deadline">
              <div class="fire" style="flex-direction: column;">
                <div class="fire_yellow"></div>
                <div class="fire_red"></div>
                <div class="fire_blue"></div>
              </div>
              <div class="sloths">
                <div class="sloth_yellow"></div>
                <div class="sloth_red"></div>
                <div class="sloth_blue"></div>
              </div>
            </div>`,
  },

  {
    level: 10,
    prop: 'flex-direction, justify-content',
    value: 'row-reverse, flex-end',
    description: {
      en: `
              <div class="game_info"> 
                <p>Help the sloths get to their own deadline. Although they seem close, it will take both <code>flex-direction</code> and <code>justify-content</code> to get them there.</p>
                <p>Notice that when you set the direction to a reversed row or column, start and end are also reversed.</p>
              </div>`, 
      ru: `
              <div class="game_info"> 
                <p>Помоги ленивцам закрыть их проекты. Хоть и кажется, что они почти на своих местах, всё же придётся применить и <code>flex-direction</code>, и <code>justify-content</code>, чтобы разместить их на своих местах.</p>
                <p>Заметь, что когда ты устанавливаешь направление в обратном порядке для ряда или колонки, начало (start) и конец (end) тоже меняются местами.</p>
              </div>`,
    },
    field: `<div class="field_deadline">
              <div class="fire" style="flex-direction: row-reverse; justify-content: flex-end;">
                <div class="fire_yellow"></div>
                <div class="fire_red"></div>
                <div class="fire_blue"></div>
              </div>
              <div class="sloths">
                <div class="sloth_yellow"></div>
                <div class="sloth_red"></div>
                <div class="sloth_blue"></div>
              </div>
            </div>`,
  },

  {
    level: 11,
    prop: 'flex-direction, justify-content',
    value: 'column, flex-end',
    description: {
      en: `
              <div class="game_info"> 
                <p>Help the sloths find their deadline using <code>flex-direction</code> and <code>justify-content</code>.</p>
                <p>Notice that when the flex direction is a column, <code>justify-content</code> changes to the vertical and <code>align-items</code> to the horizontal.</p>
              </div>`, 
      ru: `
              <div class="game_info"> 
                <p>Помоги ленивцам добраться до дедлайна с помощью <code>flex-direction</code> и <code>justify-content</code>.</p>
                <p>Заметь, когда в качестве направления выбрана колонка, то <code>justify-content</code> влияет на вертикальное выравнивание, а <code>align-items</code> — на горизонтальное.</p>
              </div>`,
    },
    field: `<div class="field_deadline">
              <div class="fire" style="flex-direction: column; justify-content: flex-end;">
                <div class="fire_yellow"></div>
                <div class="fire_red"></div>
                <div class="fire_blue"></div>
              </div>
              <div class="sloths">
                <div class="sloth_yellow"></div>
                <div class="sloth_red"></div>
                <div class="sloth_blue"></div>
              </div>
            </div>`,
  },

  {
    level: 12,
    prop: 'flex-direction, justify-content',
    value: 'column-reverse, space-between',
    description: {
      en: '<div class="game_info"> Help the sloths find their deadlines using <code>flex-direction</code> and <code>justify-content</code>.</div>', 
      ru: '<div class="game_info"> Помоги ленивцам добраться до дедлайна с помощью <code>flex-direction</code> и <code>justify-content</code>.</div>',
    },
    field: `<div class="field_deadline">
              <div class="fire" style="flex-direction: column-reverse; justify-content: space-between;">
                <div class="fire_yellow"></div>
                <div class="fire_red"></div>
                <div class="fire_blue"></div>
              </div>
              <div class="sloths">
                <div class="sloth_yellow"></div>
                <div class="sloth_red"></div>
                <div class="sloth_blue"></div>
              </div>
            </div>`,
  },

  {
    level: 13,
    prop: 'flex-direction, justify-content, align-items',
    value: 'row-reverse, center, flex-end',
    description: {
      en: '<div class="game_info"> Help the sloths find their deadlines using <code>flex-direction</code>, <code>justify-content</code> and <code>align-items</code>.</div>', 
      ru: '<div class="game_info"> Помоги ленивцам добраться до дедлайна с помощью <code>flex-direction</code>, <code>justify-content</code> и <code>align-items</code>.</div>',
    },
    field: `<div class="field_deadline">
              <div class="fire" style="flex-direction: row-reverse; justify-content: center; align-items: flex-end;">
                <div class="fire_yellow"></div>
                <div class="fire_red"></div>
                <div class="fire_blue"></div>
              </div>
              <div class="sloths">
                <div class="sloth_yellow"></div>
                <div class="sloth_red"></div>
                <div class="sloth_blue"></div>
              </div>
            </div>`,
  },

  {
    level: 18,
    prop: 'flex-wrap',
    value: 'wrap',
    description: {
      en: `
              <div class="game_info"> Oh no! The sloths are all squeezed onto a single row. Spread them out using the <code>flex-wrap</code> property, which accepts the following values:
                <ul class="game_list"> 
                  <li> <code> nowrap</code>: Every item is fit to a single line. </li>
                  <li> <code> wrap</code>: Items wrap around to additional lines. </li>
                  <li> <code> wrap-reverse</code>: Items wrap around to additional lines in reverse. </li>
                </ul>
              </div>`, 
      ru: `
              <div class="game_info"> О нет! На ленивцев давят сроки и их сплющило на одном ряду. Раздвинь их с помощью свойства <code>flex-wrap</code>, которое принимает следующие значения:
                <ul class="game_list"> 
                  <li> <code> nowrap</code>: размеры элементов устанавливаются автоматически, чтобы они поместились в один ряд. </li>
                  <li> <code> wrap</code>: элементы автоматически переносятся на новую строку. </li>
                  <li> <code> wrap-reverse</code>: элементы автоматически переносятся на новую строку, но строки расположены в обратном порядке. </li>
                </ul>
              </div>`,
    },
    field: `<div class="field_deadline">
              <div class="fire" style="flex-wrap: wrap;">
                <div class="fire_yellow"></div>
                <div class="fire_red"></div>
                <div class="fire_red"></div>
                <div class="fire_red"></div>
                <div class="fire_red"></div>
                <div class="fire_red"></div>
                <div class="fire_red"></div>
                <div class="fire_blue"></div>
              </div>
              <div class="sloths">
                <div class="sloth_yellow"></div>
                <div class="sloth_red"></div>
                <div class="sloth_red"></div>
                <div class="sloth_red"></div>
                <div class="sloth_red"></div>
                <div class="sloth_red"></div>
                <div class="sloth_red"></div>
                <div class="sloth_blue"></div>
              </div>
            </div>`,
  },

];

export const disclaimer = {
  en: 'The sloths taken from <a href="https://sloths.rs.school">sloths.rs.school</a>. No sloths were harmed',
  ru: 'Ленивцы взяты с сайта <a href="https://sloths.rs.school">sloths.rs.school</a>. При создании игры ни один ленивец не пострадал',
};
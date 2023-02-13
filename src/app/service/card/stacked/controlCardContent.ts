
import { addFocus } from '../addFocus';


const codeSimpleCard = `
    <div class="image-wrap">
      <img class="card-image" src="./im-fine.svg" alt="image preview" id="imagePreview">
    </div>
    <div class="card-content">
      <div class="card-side">
        <h2 class="card-title">Amazing article</h2>
        <cite class="card-subtitle">By great author</cite>
      </div>
    </div>
`;

const codeStandartCard = `
    <div class="image-wrap">
      <img class="card-image" src="./im-fine.svg" alt="image preview" id="imagePreview">
    </div>
    <div class="card-content">
      <div class="card-side">
        <h2 class="card-title">Amazing article</h2>
        <cite class="card-subtitle">By great author</cite>
      </div>
      <svg class="dropdown-button" width="5" height="23" viewBox="0 0 5 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.8 2.4C4.8 3.725 3.725 4.8 2.4 4.8C1.075 4.8 0 3.725 0 2.4C0 1.075 1.075 0 2.4 0C3.725 0 4.8 1.075 4.8 2.4Z" fill="#898989"></path>
        <path d="M4.8 11.2C4.8 12.525 3.725 13.6 2.4 13.6C1.075 13.6 0 12.525 0 11.2C0 9.875 1.075 8.8 2.4 8.8C3.725 8.8 4.8 9.875 4.8 11.2Z" fill="#898989"></path>
        <path d="M4.8 20C4.8 21.325 3.725 22.4 2.4 22.4C1.075 22.4 0 21.325 0 20C0 18.675 1.075 17.6 2.4 17.6C3.725 17.6 4.8 18.675 4.8 20Z" fill="#898989"></path>
      </svg>
    </div>
`;

const codeColumnCard = `
    <div class="image-wrap">
      <img class="card-image" src="./im-fine.svg" alt="image preview" id="imagePreview">
    </div>
    <div class="card-content card-content-wrapper">
      <div class="card-side">
        <h2 class="card-title">Amazing article</h2>
        <cite class="card-subtitle">By great author</cite>
        <button class="card-button">Learn more</button>
      </div>
    </div>
    <span class="tag topLeft">New</span>
`;

export function controlStackedContent(event: Event): void {
  const target = event.target as HTMLElement;
  const cardStackedPreview = document.querySelector('#cardPreview') as HTMLElement;
  const htmlCode = document.querySelector('#htmlCode') as HTMLElement;
  if (target.closest('#simpleCard')) {
    cardStackedPreview.innerHTML = codeSimpleCard;
    htmlCode.textContent = `
    <article class="card stacked"> ${codeSimpleCard}    </article> `;
    addFocus('#cardsStacked', '#simpleCard', 'button');
  } else if (target.closest('#standartCard')) {
    cardStackedPreview.innerHTML = codeStandartCard;
    htmlCode.textContent =  `
    <article class="card stacked"> ${codeStandartCard}    </article> `;
    addFocus('#cardsStacked', '#standartCard', 'button');
  } else if (target.closest('#columnCard')) {
    cardStackedPreview.innerHTML = codeColumnCard;
    htmlCode.textContent = `
    <article class="card stacked"> ${codeColumnCard}    </article> `;
    addFocus('#cardsStacked', '#columnCard', 'button');

  }

}





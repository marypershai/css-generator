function removeFocus(el: string):void {
  const cardAria = document.querySelector(el) as HTMLElement;
  const buttons = cardAria.querySelectorAll('.setting__button') as NodeListOf<HTMLButtonElement>;
  buttons.forEach(item => item.classList.remove('focus'));
}

export function addFocus(el: string, id: string): void {
  removeFocus(el);
  const button = document.querySelector(id) as HTMLButtonElement;
  button.classList.add('focus');
}

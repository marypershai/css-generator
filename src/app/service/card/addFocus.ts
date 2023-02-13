function removeFocus(el: string, property = '.setting__button'):void {
  const cardAria = document.querySelector(el) as HTMLElement;
  const buttons = cardAria.querySelectorAll(property) as NodeListOf<HTMLButtonElement>;
  buttons.forEach(item => item.classList.remove('focus'));
}

export function addFocus(el: string, id: string, property = '.setting__button'): void {
  removeFocus(el, property);
  const button = document.querySelector(id) as HTMLButtonElement;
  button.classList.add('focus');
}

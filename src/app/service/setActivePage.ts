
function removeActiveStatus(): void {
  const menu = document.querySelector('.menu__list') as HTMLElement;
  const menuItems = menu.querySelectorAll('.menu-item') as NodeListOf<HTMLButtonElement>;
  menuItems.forEach(item => item.classList.remove('active'));
}


export function addActiveStatus(event: Event): void {
  removeActiveStatus();
  const item = event.target as HTMLElement;
  item.classList.add('active');
}




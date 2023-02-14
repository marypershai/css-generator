import { checkLang } from '../lang.service';


const { lang } = checkLang();

export function copyHTMLCode(): void {
  const copyHTMLButton = document.querySelector('#copyHTMLButton') as HTMLButtonElement;
  const htmlCodeBlock = document.querySelector('#htmlCode') as HTMLElement;


  const textToCopy = htmlCodeBlock.innerText;
  const temporaryTextArea = document.createElement('textarea');
  temporaryTextArea.value = textToCopy;
  document.body.appendChild(temporaryTextArea);
  temporaryTextArea.select();
  document.execCommand('copy');
  document.body.removeChild(temporaryTextArea);
  copyHTMLButton.textContent = `${lang.copied}`; 

}


export function copyCSSCode(): void {
  const copyCSSButton = document.querySelector('#copyCSSButton') as HTMLButtonElement;
  const cssCodeBlock = document.querySelector('#cssCodeBlock') as HTMLElement;


  const textToCopy = cssCodeBlock.innerText;
  const temporaryTextArea = document.createElement('textarea');
  temporaryTextArea.value = textToCopy;
  document.body.appendChild(temporaryTextArea);
  temporaryTextArea.select();
  document.execCommand('copy');
  document.body.removeChild(temporaryTextArea);
  copyCSSButton.textContent = `${lang.copy}`; 

}

  
export function resetCopy(): void {
  const copyCSSButton = document.querySelector('#copyCSSButton') as HTMLButtonElement;
  const copyHTMLButton = document.querySelector('#copyHTMLButton') as HTMLButtonElement;
  copyCSSButton.textContent = `${lang.copy}`;
  copyHTMLButton.textContent = `${lang.copy}`;
}
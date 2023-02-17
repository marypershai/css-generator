

function validateUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}


export function changeImage(event: KeyboardEvent): void {
  if (event.keyCode === 13) {
    event.preventDefault();
    const inputUrl = document.getElementById('imageUrl') as HTMLInputElement;
    const imageUrl = inputUrl.value;
    if (validateUrl(imageUrl)) {
      const image = document.querySelector('#imagePreview') as HTMLImageElement;
      const htmlCode = document.getElementById('htmlCode') as HTMLElement;
      const htmlCodeContent = htmlCode.innerHTML;
      const updatedHtmlCodeContent = htmlCodeContent.replace(/src=".*?"/g, `src="${imageUrl}"`);
      htmlCode.innerHTML = updatedHtmlCodeContent;
      localStorage.setItem('imageUrl', `${imageUrl}`);      
      image.src = imageUrl;      
    } else {
      const uploadSenction = document.querySelector('.file-upload-section') as HTMLElement;
      uploadSenction.classList.add('error-message');
      setTimeout(() => uploadSenction.classList.remove('error-message'), 2000);
    }
  }
}


export function getImageUrl(): string {
  return localStorage.getItem('imageUrl') || './im-fine.svg';
}


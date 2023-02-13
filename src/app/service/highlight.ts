
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/a11y-dark.css';


hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('html', html);
hljs.registerLanguage('css', css);

export function highlightCodeListener():void {
  document.addEventListener('DOMContentLoaded', () => {
    const codeElements = document.querySelectorAll('pre code');
    for (const el of codeElements) {
      hljs.highlightElement(el as HTMLElement);
    }
  });
}

export function highlightCode():void {
  const codeElements = document.querySelectorAll('pre code');
  for (const el of codeElements) {
    hljs.highlightElement(el as HTMLElement);
  }
  
}
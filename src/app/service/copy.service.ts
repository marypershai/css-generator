import { checkLang } from './lang.service';

function formatText(text:string):string {
  return text.replace(/<br>/g, '\n');
}

export async function copyTextToClipboard(copiedText: string, event: Event): Promise<void> {
  const text: string = formatText(copiedText);
  const { lang } = checkLang();
  try {
    await navigator.clipboard.writeText(text);
    const tooltip = event.target as HTMLElement;
    tooltip.setAttribute('data-tooltip', lang.copied);
  } catch (err) {
    console.error('Error in copying text: ', err);
  }
}

export function changeTooltipStatus(): void {
  const { lang } = checkLang();
  const tooltips: NodeListOf<Element> = document.querySelectorAll('.tooltip');
  tooltips.forEach((item: Element)=> {
    item.setAttribute('data-tooltip', lang.copyTooltipText);
  });
}
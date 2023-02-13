import { checkLang } from './lang.service';

function formatText(text:string):string {
  return text.replace(/<br>/g, '\n');
}

export async function copyTextToClipboard(copiedText: string): Promise<void> {
  const text: string = formatText(copiedText);
  const { lang } = checkLang();
  try {
    await navigator.clipboard.writeText(text);
    const tooltip = document.querySelector('.tooltip') as HTMLElement;
    tooltip.setAttribute('data-tooltip', lang.copied);
  } catch (err) {
    console.error('Error in copying text: ', err);
  }
}

export function changeTooltipStatus(): void {
  const { lang } = checkLang();
  const tooltip = document.querySelector('.tooltip') as HTMLElement;
  tooltip.setAttribute('data-tooltip', lang.copyTooltipText);
}
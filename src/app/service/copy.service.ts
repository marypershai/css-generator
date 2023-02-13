import { checkLang } from './lang.service';

export async function copyTextToClipboard(text: string): Promise<void> {
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
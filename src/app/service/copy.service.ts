export async function copyTextToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    const tooltip = document.querySelector('.tooltiptext') as HTMLElement;
    tooltip.innerHTML = 'Copied';
  } catch (err) {
    console.error('Error in copying text: ', err);
  }
}

export function changeTooltipStatus(): void {
  const tooltip = document.querySelector('.tooltiptext') as HTMLElement;
  tooltip.innerHTML = 'Copy to clipboard';
}
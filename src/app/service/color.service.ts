export function hexToRGB(hex: string): { r: number, g: number, b: number } {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function  valueToHex(value: number) {
  return value.toString(16);
}

export function rgbToHex(r: number, g: number, b: number): string {
  return valueToHex(r) + valueToHex(g) + valueToHex(b);
}
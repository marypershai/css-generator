import { hexToRGB } from '../color.service';

export const textShadowService = {
  xpixels : 2,
  ypixels : 2,
  blurPixels: 5,
  color: '#000000',
  colorOpacity: 0.3,
  style: 'text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);',
  createStyle() {
    this.style = '';
    const { r, g, b } = hexToRGB(this.color);
    return this.style = `text-shadow: ${this.xpixels}px ${this.ypixels}px ${this.blurPixels}px rgba(${r}, ${g}, ${b}, ${this.colorOpacity})`;
  },
};
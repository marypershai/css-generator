import { hexToRGB } from '../color.service';

export const boxShadowService = {
  xpixels : 2,
  ypixels : 2,
  blurPixels: 5,
  spreadPixels: 2,
  color: '#000000',
  borderType: 'solid',
  colorOpacity: 0.3,
  style: 'box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);',
  createStyle() {
    this.style = '';
    const { r, g, b } = hexToRGB(this.color);
    return this.style = `box-shadow: ${this.xpixels}px ${this.ypixels}px ${this.blurPixels}px ${this.spreadPixels}px rgba(${r}, ${g}, ${b}, ${this.colorOpacity})`;
  },
};

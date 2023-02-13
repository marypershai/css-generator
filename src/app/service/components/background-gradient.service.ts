export const backgroundGradientService = {
  orientation : 'linear-gradient',
  orientationOptions: ['linear-gradient', 'radial-gradient', 'repeating-linear-gradient', 'repeating-radial-gradient', 'conic-gradient'],
  size: 'farthest-side',
  sizeOptions: ['farthest-side', 'farthest-corner'],
  position: 'center center',
  positionOptions: ['top left', 'top center', 'top right', 'left center', 'center center', 'right center', 'bottom left', 'bottom center', 'bottom right'],
  degree: 86,
  startColor: '#f31212',
  spreadStartColor: 25,
  endColor: '#ffd500',
  spreadEndColor: 30,
  middleColors: [],
  borderType: 'solid',
  style: 'background: linear-gradient(86deg,#f31212 25%, #ffd500 30%);',
  createStyle() {
    this.style = `background: ${this.orientation}(`;
    if (this.orientation !== 'linear-gradient' && this.orientation !== 'repeating-linear-gradient' && this.orientation !== 'conic-gradient') {
      this.style += `${this.size} at ${this.position}, `;
    } else if (this.orientation !== 'conic-gradient') {
      this.style += `${this.degree}deg,`;
    }
    this.style += `${this.startColor} ${this.spreadStartColor}%, ${this.endColor} ${this.spreadEndColor}%);`;
  },
};
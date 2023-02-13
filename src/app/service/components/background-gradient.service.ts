export const backgroundGradientService = {
  orientation : 'linear-gradient',
  orientationOptions: ['linear-gradient', 'radial-gradient', 'repeating-linear-gradient', 'repeating-radial-gradient', 'conic-gradient'],
  size: 'farthest-side',
  sizeOptions: ['farthest-side', 'farthest-corner'],
  position: 'center center',
  positionOptions: ['top left', 'top center', 'top right', 'left center', 'center center', 'right center', 'bottom left', 'bottom center', 'bottom right'],
  degree: 86,
  endColor: '#ffd500',
  spreadEndColor: 20,
  middleColors: [{ color: '#f31212', spread: 15 }],
  borderType: 'solid',
  style: 'background: linear-gradient(86deg,#f31212 15%, #ffd500 20%);',
  createStyle() {
    this.style = `background: ${this.orientation}(`;
    if (this.orientation !== 'linear-gradient' && this.orientation !== 'repeating-linear-gradient' && this.orientation !== 'conic-gradient') {
      this.style += `${this.size} at ${this.position}, `;
    } else if (this.orientation !== 'conic-gradient') {
      this.style += `${this.degree}deg,`;
    }
    this.middleColors.forEach((color) => {
      this.style += `${color.color} ${color.spread}%, `;
    });
    this.style += `${this.endColor} ${this.spreadEndColor}%);`;
  },
  addStopColor(color: string, spread: number) {
    return this.middleColors.push({ color: color, spread: spread });
  },
  deleteStopColor(id: number) {
    this.middleColors.splice(id, 1);
  },
};
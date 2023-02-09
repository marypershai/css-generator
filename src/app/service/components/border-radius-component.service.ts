export const borderRadiusService = {
  borderRadiusAll : 0,
  borderTopLeft: 0,
  borderTopRight: 0,
  borderBottomLeft: 0,
  borderBottomRight: 0,
  color: '#000000',
  borderType: 'solid',
  style: 'border-radius: none;',
  createStyle() {
    this.style = '';
    if (this.borderRadiusAll === this.borderBottomLeft &&
        (this.borderBottomLeft === this.borderTopLeft &&
            this.borderBottomRight === this.borderTopRight &&
            this.borderBottomRight === this.borderBottomLeft)) {
      if (this.borderRadiusAll === 0) {
        this.style = 'border-radius: none;';
      } else {
        this.style = `border-radius: ${this.borderRadiusAll}px;`;
      }
    } else {
      this.style = `border-radius: ${this.borderTopLeft}px ${this.borderTopRight}px ${this.borderBottomRight}px ${this.borderBottomLeft}px;`;
    }
    return this.style;
  },
};

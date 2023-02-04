export const borderService = {
  borderWidth : 1,
  color: '#000000',
  borderType: 'solid',
  style: '1px solid #000000',
  createStyle() {
    this.style = '';
    return this.style = `border: ${this.borderWidth}px ${this.color} ${this.borderType}`;
  },
};

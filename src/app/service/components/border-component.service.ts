export const borderService = {
  borderWidth : 6,
  color: '#e4a907',
  borderType: 'solid',
  borderTypeOptions: ['solid', 'dotted', 'double', 'groove', 'ridge', 'inset', 'outset'],
  style: 'border: 6px solid #e4a907;',
  createStyle() {
    this.style = '';
    return this.style = `border: ${this.borderWidth}px ${this.color} ${this.borderType};`;
  },
};

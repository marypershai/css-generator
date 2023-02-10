export const textService = {
  color: '#000000',
  lineHeight : 1,
  letterSpacing : 0,
  wordSpacing: 0,
  textAlign: 'left',
  textDecoration: 'none',
  textTransform: 'none',
  style: 'color: #000000;',
  createStyle() {
    this.style = '';
    return this.style = `
      color: ${this.color};
      line-height: ${this.lineHeight};
      letter-spacing: ${this.letterSpacing}px;
      word-spacing: ${this.wordSpacing}px;
      text-align: ${this.textAlign};
      text-decoration: ${this.textDecoration};
      text-transform: ${this.textTransform};
    `;
  },
  createFormatStyle() {
    return `
      color: ${this.color};<br>
      line-height: ${this.lineHeight};<br>
      letter-spacing: ${this.letterSpacing}px;<br>
      word-spacing: ${this.wordSpacing}px;<br>
      text-align: ${this.textAlign};<br>
      text-decoration: ${this.textDecoration};<br>
      text-transform: ${this.textTransform};<br>
    `;
  },

};
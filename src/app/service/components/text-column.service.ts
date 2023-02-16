export const textColumnService = {
  columnCount : 1,
  columnGap : 0,
  columnRule: false,
  columnRuleStyle: 'solid',
  columnRuleStyleOptions: ['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset', 'hidden'],
  columnRuleWidth: 1,
  columnRuleColor: '#000000',
  style: '',
  createStyle() {
    this.style = `
        column-count: ${this.columnCount};`;
    if (this.columnGap > 0) {
      this.style += `column-gap: ${this.columnGap}px;`;
    }
    if (this.columnRule) {
      this.style += `column-rule: ${this.columnRuleWidth}px ${this.columnRuleStyle} ${this.columnRuleColor};`;
    }
    return this.style;
  },
  createFormatStyle() {
    let style = `column-count: ${this.columnCount};<br>`;
    if (this.columnGap > 0) {
      style += `column-gap: ${this.columnGap}px;<br>`;
    }
    if (this.columnRule) {
      style += `column-rule: ${this.columnRuleWidth}px ${this.columnRuleStyle} ${this.columnRuleColor};`;
    }
    return style;
  },

};
export const flexboxItemsService = {
  display: 'flex',
  direction: 'row',
  wrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  style: `display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: flex-start;
          align-items: flex-start;
          align-content: flex-start;
        `,
  createStyle() {
    this.style = '';
    return this.style = `
      display: ${this.display};
      flex-direction: ${this.direction};
      flex-wrap: ${this.wrap};
      justify-content: ${this.justifyContent};
      align-items: ${this.alignItems};
      align-content: ${this.alignContent};
    `;
  },
};

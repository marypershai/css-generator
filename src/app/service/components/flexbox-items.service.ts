// export const flexboxItemsService = {
//   display: 'flex',
//   flex-direction: 'center',
//   flex-wrap: 'center',
//   justify-content: 'center',
//   align-content: 'center',
//   style: 'color: #000000;',
//   createStyle() {
//     this.style = '';
//     return this.style = `
//       display: ${this.display};
//       flex-direction: ${this.flex-direction};
//       flex-wrap: ${this.flex-wrap};
//       justify-content: ${this.justify-content};
//       align-items: ${this.align-item};
//       align-content: ${this.align-content};
//     `;
//   },
// };

export const flexboxItemsService = {
  display: 'flex',
  direction: 'row',
  wrap: 'nowrap',
  justifyContent: 'flex-end',
  alignItems: 'center',
  alignContent: 'center',
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

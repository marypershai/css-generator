export const backgroundImageService = {
  url: 'https://cdn.rs.school/sloths/stickers/congrats/image.svg',
  color: '#ed7d31',
  position: 'top left',
  positionOptions: ['top left', 'top center', 'top right', 'center left', 'center center', 'center right', 'bottom left', 'bottom center', 'bottom right'],
  size: 'contain',
  sizeOptions: ['auto', 'cover', 'contain'],
  repeat: 'no-repeat',
  repeatOptions: ['no-repeat', 'repeat-x', 'repeat-y', 'repeat', 'space', 'round'],
  style: `background-color: #ed7d31;
    background-image: url('https://cdn.rs.school/sloths/stickers/congrats/image.svg');
    background-position: top left;
    background-size: contain;
    background-repeat: no-repeat`,
  createStyle() {
    this.style = `
    background-color: ${this.color};
    background-image: url('${this.url}');
    background-position: ${this.position};
    background-size: ${this.size};
    background-repeat: ${this.repeat};`;
  },
  createFormatStyle() {
    return `
    background-color: ${this.color};<br>
    background-image: url('${this.url}');<br>
    background-position: ${this.position};<br>
    background-size: ${this.size};<br>
    background-repeat: ${this.repeat};`;
  },
};
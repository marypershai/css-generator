export const filterService = {
  blur: 0,
  grayscale: 0,
  sepia: 0,
  brightness: 0,
  hueRotate: 0,
  saturate: 0,
  opacity: 0,
  contrast: 0,
  invert: 0,
  dropshadow: false,
  color: '#000000',
  horizontalShadow: 10,
  verticalShadow: 1,
  blurRadius: 1,
  style: 'filter: none;',
  createStyle() {
    this.style = 'filter:';
    if (this.blur > 0) {
      this.style += ` blur(${this.blur}px)`;
    }
    if (this.grayscale > 0) {
      this.style += ` grayscale(${this.grayscale}%)`;
    }
    if (this.sepia > 0) {
      this.style += ` sepia(${this.sepia}%)`;
    }
    if (this.brightness > 0) {
      this.style += ` brightness(${this.brightness}%)`;
    }
    if (this.hueRotate > 0) {
      this.style += ` hue-rotate(${this.hueRotate}deg)`;
    }
    if (this.saturate > 0) {
      this.style += ` saturate(${this.saturate}%)`;
    }
    if (this.opacity > 0) {
      this.style += ` opacity(${this.opacity}%)`;
    }
    if (this.contrast > 0) {
      this.style += ` contrast(${this.contrast}%)`;
    }
    if (this.invert > 0) {
      this.style += ` invert(${this.invert}%)`;
    }
    if (this.dropshadow) {
      this.style += ` drop-shadow(${this.horizontalShadow}px ${this.verticalShadow}px ${this.blurRadius}px ${this.color})`;
    }
    this.style += ';';
    if (this.style === 'filter:;' && !this.dropshadow) {
      this.style = 'filter: none;';
    }
    return this.style;
  },
};

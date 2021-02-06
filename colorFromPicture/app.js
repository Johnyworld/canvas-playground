import { coverSizing } from './util.js';

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    this.image = new Image();
    this.image.src = 'Gogh.jpg';
    this.image.onload = () => {
      this.resize();
    }

    window.addEventListener('resize', this.resize.bind(this));
  }

  resize() {
    this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;
    this.drawImage();
  }

  drawImage() {
    const newImage = coverSizing(this.canvas.width, this.canvas.height, this.image.width, this.image.height);
    this.ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, newImage.x, newImage.y, newImage.width, newImage.height);
  }
}

window.onload = () => {
  new App();
}
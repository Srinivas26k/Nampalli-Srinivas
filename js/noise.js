class NoiseCanvas {
    constructor() {
        this.canvas = document.getElementById('noise-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        this.initNoise();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.imageData = this.ctx.createImageData(this.canvas.width, this.canvas.height);
    }

    initNoise() {
        this.noise = new Array(this.canvas.width * this.canvas.height);
        for (let i = 0; i < this.noise.length; i++) {
            this.noise[i] = Math.random() * 255;
        }
    }

    animate() {
        const data = this.imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
            const noise = this.noise[i / 4];
            data[i] = data[i + 1] = data[i + 2] = noise;
            data[i + 3] = 20; // Opacity
        }

        this.ctx.putImageData(this.imageData, 0, 0);
        requestAnimationFrame(() => this.animate());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new NoiseCanvas();
});
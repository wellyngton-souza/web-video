export class backgroundColorContent{
    constructor({ ctx, canvas }){
        this.ctx = ctx;
        this.canvas = canvas;
    }

    createBackground(){
        // Definir o fundo preto
        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
export class imageContent{
    constructor({ ctx, canvas, zoomFactor, alpha }, img){
        // Definir o tamanho do padding ao redor da imagem (em pixels)
        this.padding = 70;
        this.ctx = ctx;
        this.img = img;
        this.alpha = alpha;

        // Calcular proporção de redimensionamento da imagem
        this.scaleFactor = Math.min((canvas.width - 2 * this.padding) / (img.width * zoomFactor), (canvas.height - 2 * this.padding) / (img.height * zoomFactor));

        this.scaledWidth = img.width * this.scaleFactor;
        this.scaledHeight = img.height * this.scaleFactor;

        this.x = (canvas.width - this.scaledWidth) / 2;
        this.y = (canvas.height - this.scaledHeight) / 2;
    };

    createImage(){
        this.ctx.globalAlpha = this.alpha;
        this.ctx.drawImage(this.img, this.x + this.padding, this.y + this.padding, this.scaledWidth - 2 * this.padding, this.scaledHeight - 2 * this.padding);
        this.ctx.globalAlpha = 1;
    };
}
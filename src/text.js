export default class textContent{
    static textSize = 24;

    static increaseTextSize(){
        textContent.textSize += 3;
    }

    createText(canvas, ctx){
        // Adicionar texto
        ctx.fillStyle = "#ffffff"; // cor do texto (branco)
        ctx.font = textContent.textSize + "px Arial"; // estilo da fonte
        ctx.textAlign = "center"; // alinhamento horizontal
        ctx.textBaseline = "top"; // alinhamento vertical
        ctx.fillText("Texto de exemplo", canvas.width / 2, canvas.height / 2); // texto e posição
    }
}
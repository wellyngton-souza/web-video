import { backgroundColorContent } from "./src/backgroundColor.js";
import { imageContent } from "./src/image.js";
// import textContent from "./src/text.js";

export class VideoApp {
    constructor() {
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.downloadLink = document.getElementById('downloadVideo');

        this.frames = [];

        this.options = { mimeType: 'video/webm' };
        this.mediaRecorder = new MediaRecorder(this.canvas.captureStream(), this.options);
        this.recordedBlobs = [];
        this.frameIndex = 0;
        this.zoomFactor = 1;
        this.alpha = 1.5;
    }

    changeZoom(){
        this.zoomFactor -= 0.1;
    }

    generateVideo() {
        this.mediaRecorder.start();
        this.frameIndex = 0;

        this.mediaRecorder.ondataavailable = (event) => {
            if (event.data && event.data.size > 0) {
                this.recordedBlobs.push(event.data);
            }
        };

        this.mediaRecorder.onstop = () => {
            const blob = new Blob(this.recordedBlobs, { type: 'video/webm' });
            const url = window.URL.createObjectURL(blob);
            this.downloadLink.href = url;
            this.downloadLink.style.display = 'inline-block';
        };

        this.drawFrame();
    }

    drawFrame = () => {
        console.log(this.frameIndex);
        if (this.frameIndex >= this.frames.length) {
            this.mediaRecorder.stop();
            return;
        }

        const img = new Image();
        img.onload = () => {
            let imageInstance = new imageContent(this, img);

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            let backgroundInstance = new backgroundColorContent(this);
            backgroundInstance.createBackground();

            imageInstance.createImage();

            // let textInstance = new textContent();
            // textContent.increaseTextSize();
            // textInstance.createText(this.canvas, this.ctx);

            this.mediaRecorder.requestData();
            this.frameIndex++;
            setTimeout(this.drawFrame, 1000); // Tempo entre cada frame (em milissegundos)
        };

        img.src = this.frames[this.frameIndex];
    };
}

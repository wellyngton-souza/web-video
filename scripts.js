import { VideoApp } from './video.js';

const generateButton = document.getElementById('generateVideo');

const videoAppInstance = new VideoApp();

generateButton.addEventListener('click', function() {
    videoAppInstance.generateVideo();
});

document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('images');

    inputElement.addEventListener('change', function() {
        const files = Array.from(inputElement.files);
        const paths = files.map(file => URL.createObjectURL(file));
    
        videoAppInstance.frames = paths;

        const filesPngElement = document.getElementById("fileimages");
        document.getElementById("filetext").classList.add("hidden");
        filesPngElement.innerHTML = "";

        paths.forEach(path => {
            filesPngElement.insertAdjacentHTML("beforeend", `<img class="max-w-32" src="${path}" alt="">`);
        });
    });
});
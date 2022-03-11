// Opdracht: Image caroussel

// Wat heb je nodig?
// - lijst van images
// - click events en referentie naar een img element
// - teller die bijhoudt op welke positie we zitten


const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
let position = 0

const image = document.querySelector('img');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('click', previous);
right.addEventListener('click', next);

function next() {
    image.src = './images/' + images[getNextPosition()];
    console.log(img.src);
}

function previous() {
    image.src = './images/' + images[getPreviousPosition()];
}

function getNextPosition() {
    position++;
    if(position == images.length) position = 0;
    
    return position;
}

function getPreviousPosition() {
    position--;
    if(position == 0) position = 3;
    
    return position;
}

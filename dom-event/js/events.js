function clickRed() {
    document.body.style.backgroundColor = 'red';
}
function clickBlue() {
    document.body.style.backgroundColor = 'blue';
}
function clickBlack() {
    document.body.style.backgroundColor = 'black';
}


//handle blue button click by setting function name
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


//Green
const greenButton = document.getElementById('make-green-button');
greenButton.onclick = function makeGreen() {
    // greenButton.onclick = function () {        -----> Anonymous Function
    document.body.style.backgroundColor = 'green';
}

//Golden Rod
const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener("click", makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenRod';
}

//Hot Pink
const hotpinkButton = document.getElementById('make-hotpink');
hotpinkButton.addEventListener('click', function makePink() {
    document.body.style.backgroundColor = 'hotpink';
})

// Light blue
document.getElementById('make-lightblue').addEventListener('click', function makelightBlue() {
    document.body.style.backgroundColor = 'lightblue';
})
window.addEventListener('load', start);

var redRange = null;
var greenRange = null;
var blueRange = null;

function start() {
  redRange = document.querySelector('#redRange');
  focusOnRedRange();
  greenRange = document.querySelector('#greenRange');
  blueRange = document.querySelector('#blueRange');
  changeColor();

  var redValue = document.querySelector('#redRange');
  redValue.addEventListener('change', displayRed);

  var greenValue = document.querySelector('#greenRange');
  greenValue.addEventListener('change', displayGreen);

  var blueValue = document.querySelector('#blueRange');
  blueValue.addEventListener('change', displayBlue);
}

function focusOnRedRange() {
  redRange.focus();
}

function displayRed(event, text) {
  var redText = document.querySelector('#redText');
  var value = event.target.value;
  redText.value = value;
  changeColor();
}

function displayGreen(event) {
  var greenText = document.querySelector('#greenText');
  var value = event.target.value;
  greenText.value = value;
  changeColor();
}

function displayBlue(event) {
  var blueText = document.querySelector('#blueText');
  var value = event.target.value;
  blueText.value = value;
  changeColor();
}

function changeColor() {
  var box = document.querySelector('.color');
  box.style.backgroundColor = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;
}

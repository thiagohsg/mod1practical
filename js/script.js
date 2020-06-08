window.addEventListener('load', start);

var r = '0';
var g = '0';
var b = '0';

function start() {
  focusOnRedRange();
  changeColor();

  redRange.addEventListener('change', handleInputRangeChange);
  greenRange.addEventListener('change', handleInputRangeChange);
  blueRange.addEventListener('change', handleInputRangeChange);
}

function focusOnRedRange() {
  redRange.focus();
}

function handleInputRangeChange(event, text) {
  var value = event.target.value;
  var id = event.target.id;

  switch (id) {
    case 'redRange':
      r = value;
      break;
    case 'greenRange':
      g = value;
      break;
    case 'blueRange':
      b = value;
      break;
  }

  changeColor();
}


function changeColor() {
  var box = document.querySelector('.color');
  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  redText.value = r;
  greenText.value = g;
  blueText.value = b;
}

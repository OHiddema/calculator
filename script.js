const display = document.getElementById('disp');

function addToDisplay(element) {
  display.innerHTML += element.innerHTML;
}

function clearDisplay() {
  display.innerHTML = '';
}

function getResult() {
  console.log(display.innerHTML);
  display.innerHTML = eval(display.innerHTML);
}
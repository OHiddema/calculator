const display = document.getElementById('disp');

function addToDisplay(element) {
  display.innerHTML += element.innerHTML;
}

function clearDisplay() {
  display.innerHTML = '';
}

function getResult() {
  display.innerHTML = eval(display.innerHTML);
}

$(function () {
  $('.addTo').click(function () {
    display.innerHTML += this.innerHTML;
  });
});

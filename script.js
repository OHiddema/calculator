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

// jQuery
$(function () {
  $('.addTo').click(function () {
    display.innerHTML += this.innerHTML;
  });

  $('.hover').mouseenter(function () {
    $(this).css('backgroundColor', 'grey');
  })

  $('.hover').mouseleave(function () {
    $(this).css('backgroundColor', 'lightgrey');
  })
});

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

function delLastChar() {
  var newStr = ''
  var str = display.innerHTML;
  if (str.length > 0) {
    newStr = str.slice(0,str.length-1);
  }
  display.innerHTML = newStr;
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

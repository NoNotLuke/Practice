var a = 0;
var elements = document.getElementsByClassName(a);
function showNext() {
  for(var i = 0; i < elements.length; i ++) {
    elements[i].style.display = 'block';
  }
  a = a + 1;
  elements = document.getElementsByClassName(a);
}

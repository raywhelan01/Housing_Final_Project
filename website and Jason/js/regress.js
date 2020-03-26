var incSlide = document.getElementById("medInc");
var incOut = document.getElementById("medIncOut");
incOut.innerHTML = incSlide.value;

incSlide.oninput = function() {
  incOut.innerHTML = this.value;
}


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


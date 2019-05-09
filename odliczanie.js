var odliczanie = new Date("Oct 29, 2017 00:00:00").getTime();


var x = setInterval(function() {


  var teraz = new Date().getTime();


  var dlugosc = odliczanie - teraz;


  var dni = Math.floor(dlugosc / (1000 * 60 * 60 * 24));
  var godziny = Math.floor((dlugosc % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minuty = Math.floor((dlugosc % (1000 * 60 * 60)) / (1000 * 60));
  var sekundy = Math.floor((dlugosc % (1000 * 60)) / 1000);

  document.getElementById("data").innerHTML = dni*(-1)+" dni, "+godziny*(-1)+" godzin, "+minuty*(-1)+" minut, "+sekundy*(-1)+" sekund.";
}, 1000);
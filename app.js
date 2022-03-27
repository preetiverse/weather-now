var input = document.querySelector('.input_text');

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

var main = document.querySelector('#name');
var temp = document.querySelector('.temp');

var desc = document.querySelector('.desc');
var speed = document.querySelector('.speed');
var button = document.querySelector('.button');



button.addEventListener('click', function (name) {
  fetch("http://api.openweathermap.org/data/2.5/weather?q=" + input.value + '&units=metric&appid=1dc58343d6c4e253e3e2cb60fd5085da')
    .then(response => response.json())
    .then(data => {
      var tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];
      var speedValue = data['wind']['speed'];



      main.innerHTML = " Weather in  " + nameValue;



      desc.innerHTML = " Description :  " + descValue;
      temp.innerHTML = "" + tempValue + " °C";
      speed.innerHTML = " wind speed : " + speedValue + "km/h";

      input.value = "";


    })


    .catch(err => alert("Wrong city name!"));
})


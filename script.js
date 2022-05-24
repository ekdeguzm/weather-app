let weather = {
  apiKey: "e21c487737a00fcbbc4e19b710d3360c",
  fetchWeather: function() {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" 
      + city 
      + "&units=metric&appid=" 
      + apiKey;
    ),
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
  displayWeather: function() 
};
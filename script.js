let weather = {
  apiKey: "e21c487737a00fcbbc4e19b710d3360c",
  fetchWeather: function(city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" 
      + city 
      + "&units=metric&appid=" 
      + this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const timezone = data.timezone; // Get the timezone offset in seconds
    // Get the current timestamp in milliseconds
    const currentTimeStamp = Date.now();
    console.log(timezone + "timezone")
    console.log(currentTimeStamp + "currentTimeStamp")
    // Calculate the adjusted timestamp based on the timezone offset
    const adjustedTimeStamp = currentTimeStamp + (timezone * 1000);
    // Create a new Date object using the adjusted timestamp
    const currentTime = new Date(adjustedTimeStamp).toLocaleTimeString();

    console.log(name, icon, description, temp, humidity, speed, currentTime);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
    document.querySelector(".time").innerText = currentTime; // Display current time
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600x900/?" + name + ",city')";
  },
  search: function() {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};

document.querySelector(".search button").addEventListener("click", function() {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    weather.search();
  }
});

weather.fetchWeather("New York");

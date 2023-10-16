const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a22b92d8b1mshf0fc5efd2f388b8p1c165cjsn9809eb3e51f5",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=" + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      current = response.current;
      condition = current.condition;
      text.innerHTML = condition.text;
      console.log(text.innerHTML);
      const icon = current.condition.icon;
      imgElement = document.getElementById("weatherIcon");
      imgElement.src = "https:" + icon;
      temp_c.innerHTML = current.temp_c + "°c";
      wind_speed.innerHTML = current.wind_kph + " km/h   " + current.wind_dir;

      // localtime.innerHTML = response.location.localtime;
      feelslike_c.innerHTML = current.feelslike_c;
      humidity.innerHTML = current.humidity;

      country.innerHTML = response.location.country;
      var body = document.body;
      if (text.innerHTML.toLowerCase().includes("rain"))
        text.innerHTML = "Rainy";
      if (text.innerHTML.toLowerCase().includes("mist"))
        text.innerHTML = "Mist";
      if (text.innerHTML.toLowerCase().includes("snow"))
        text.innerHTML = "Snow";
      if (text.innerHTML.toLowerCase().includes("cloud"))
        text.innerHTML = "cloudy";
      const backgroundImages = {
        Rainy: "url(Rain.gif)",
        Mist: "url(Mist.jpg)",
        Sunny: "url(Sunny.jpg)",
        Snow: "url(Snow.gif",
        cloudy: "url(cloudy.gif)",
      };
      if (backgroundImages[text.innerHTML]) {
        body.style.backgroundImage = backgroundImages[text.innerHTML];
      } else {
        console.log("Condition not found");
      }
    })
    .catch((err) => console.error(err));
};
const option = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a22b92d8b1mshf0fc5efd2f388b8p1c165cjsn9809eb3e51f5",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather1 = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    option
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      max_temp.innerHTML = response.max_temp + 3;
      min_temp.innerHTML = response.min_temp - 3;
      sunr = response.sunrise;
      var date = new Date(sunr * 1000);
      var hours = date.getHours();
      var minutes = date.getMinutes();

      var amPm = hours >= 12 ? "PM" : "AM";

      if (hours > 12) {
        hours -= 12;
      }

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      sunrise.innerHTML = hours + ":" + minutes + " " + amPm;

      suns = response.sunset;
      var date = new Date(suns * 1000);
      var hours = date.getHours();
      var minutes = date.getMinutes();

      var amPm = hours >= 12 ? "PM" : "AM";

      if (hours > 12) {
        hours -= 12;
      }

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      sunset.innerHTML = hours + ":" + minutes + " " + amPm;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather1(city.value);
});

getWeather("Kolkata");
getWeather1("Kolkata");

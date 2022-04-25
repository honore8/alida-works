var defaultCities = ['abuja', 'london', 'cameroon'];
var wd = defaultCities;
function weatherDatas(cityName, state = false) {
  if (state == true) {
    if (defaultCities.indexOf(cityName.toLowerCase()) !== -1) {
      document.getElementById(cityName.toLowerCase()).remove();
    }
  }
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=9a80b2c0a296b57f6782d77c02b10285')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
      document.getElementById('error').innerHTML = '';
      document.getElementById('city-name').value = '';
      defaultCities.unshift(cityName.toLowerCase());
      if (state == true) {
        wd.push(cityName.toLowerCase());
        window.localStorage.setItem('weather', JSON.stringify(Array.from(new Set(wd))));
      }
      showDatas(data)
    })
    .catch(function (e) {
      console.log(e);
      document.getElementById('error').innerHTML = '⋅ Please enter valid city';
    });
}

window.onload = function () {
  let v = JSON.parse(window.localStorage.getItem('weather')) ? JSON.parse(window.localStorage.getItem('weather')).reverse() : defaultCities ;
  console.log(v);
  v.forEach(element => {
    weatherDatas(element);
  });
}
function showDatas(element) {
  let celcius = Math.round(parseFloat(element.main.temp) - 273.15);
  let weatherDatas = document.getElementById('weather-datas');
  document.getElementById('load').innerHTML = '';
  weatherDatas.innerHTML += `
      <div class="col-4 mb-3" id="${element.name.toLowerCase() }">
          <div class="card bottom-shadow rounded-3" style="background-color: #D4D4D4;">
              <div class="card-body">
                  <blockquote class="blockquote mb-0">
                      <p>${element.name}</p>
                      <p style="font-size: 3rem;">${celcius} <sup><span class="degree">&#8226;</span>c</sup></p>
                      <footer>${element.weather[0].description}</footer>
                  </blockquote>
              </div>
          </div>
      </div>`
}

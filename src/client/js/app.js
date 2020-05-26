/* Global Variables */
const baseURL = 'http://api.geonames.org/searchJSON?q=';
const apiKey = '&fuzzy=0.8&username=lzhang74';

const baseWeatherURL = "https://api.weatherbit.io/v2.0/history/daily";
const weatherApiKey =  "&key=c4bebcc16724427ba74d495c693c1e8d";

const basePictureURL = "https://pixabay.com/api/"
const pictureAPIKey = "?key=16712578-6fc139f2d2ef87298cc396fff&q="

//Get the date

/* Function called by event listener */
function performAction(e) {
  e.preventDefault();
  // get user input values
  const city = document.getElementById('city').value;
  const date = document.getElementById('departDate').value;
  var today = new Date();
  var daysToTrip = Math.floor((new Date(date) - today )  / (1000 * 60 * 60 * 24)) 
  console.log(date)
  var location
  getGeoname(baseURL, city, apiKey)
    .then(function(res) {
      document.getElementById('destination').innerHTML = res.geonames[0].toponymName
      document.getElementById('city').innerHTML = res.geonames[0].toponymName
      return res
  }).then(function(res) {
    location = "?lat=" + res.geonames[0].lat + "&lon=" + res.geonames[0].lng
    var newDate = new Date(date)

    let startDate = (newDate.getFullYear() - 1) + '-' + (newDate.getMonth() + 1) + '-' + (newDate.getDate() + 1);
    let endDate = (newDate.getFullYear() - 1) + '-' + (newDate.getMonth() + 1) + '-' + (newDate.getDate() + 2);
    var searchDate = "&start_date=" + startDate + "&end_date=" + endDate
    getWeather(baseWeatherURL, location, searchDate, weatherApiKey)
      .then(function(res) {
        document.getElementById('highT').innerHTML = res.data[0].max_temp;
        document.getElementById('lowT').innerHTML = res.data[0].min_temp;
      })
    return res
  }).then(function(res) {
      console.log(city)
      getPicture(basePictureURL, city, pictureAPIKey)
      .then(function(res) {
                console.log(res)
        document.getElementById("image").src = res.hits[0].webformatURL

      })
  
  }).catch(err => console.log(err))

  document.getElementById('daysRemaining').innerHTML = daysToTrip


}
/* Function called by event listener */
function removeTrip() {
  // get user input values
  localStorage.clear()
  document.getElementById('highT').innerHTML = "";
  document.getElementById('lowT').innerHTML = "";
  return document.getElementById('lowT').innerHTML
}

/* Function to GET Web API Data*/
const getGeoname = async (baseURL, newZip, apiKey) => {
  // res equals to the result of fetch function
  const res = await fetch(baseURL + newZip + apiKey);
  try {
    // userData equals to the result of fetch function
    const userData = await res.json();
    return userData;
  } catch (error) {
    console.log("error", error);
  }
}

/* Function to GET Web API Data*/
const getWeather = async (baseWeatherURL, location, searchDate, weatherApiKey) => {
  // res equals to the result of fetch function
  const res = await fetch(baseWeatherURL + location + searchDate + weatherApiKey);
  try {
    // userData equals to the result of fetch function
    const userData = await res.json();
    return userData;
  } catch (error) {
    console.log("error", error);
  }
}

/* Function to GET Web API Data*/
const getPicture = async (basePictureURL, city, pictureAPIKey) => {
  // res equals to the result of fetch function
  const res = await fetch(basePictureURL + pictureAPIKey + city + "&image_type=photo&pretty=true");
  try {
    // userData equals to the result of fetch function
    const userData = await res.json();
    return userData;
  } catch (error) {
    console.log("error", error);
  }
}


export { performAction }
export { removeTrip }
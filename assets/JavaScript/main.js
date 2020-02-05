var cities = [`San Fransisco`, `Washington DC`, `The Woodlands`, `Sacramento`, `Houston`]



function displayWeatherInfo() {

    var city = $(this).attr("data-name")
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=9960537bc504b12a81ff658aa9dd27bd";



    // Creating an AJAX call for the specific city button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function (response) {
        console.log(response.list[0].weather[0].icon)

        console.log(response)

        var clear = `http://openweathermap.org/img/wn/01d@2x.png`
        var fewClouds = `http://openweathermap.org/img/wn/02d@2x.png`
        var scatteredClouds = `http://openweathermap.org/img/wn/03d@2x.png`
        var brokenClouds = `http://openweathermap.org/img/wn/04d@2x.png`
        var showerRain = `http://openweathermap.org/img/wn/09d@2x.png`
        var rain = `http://openweathermap.org/img/wn/10d@2x.png`
        var thunderStorm = `http://openweathermap.org/img/wn/11d@2x.png`
        var snow = `http://openweathermap.org/img/wn/13d@2x.png`


        // setting city name
        var cityDiv = $('#result-name');

        // Storing the city name
        var name = response.city.name;

        //storing the date
        var date = response.list[0].dt_txt

        //getting icon information
        var icon = response.list[0].weather[0].icon

        if (icon == `01d` || `01n`) {
            var image = $(`#result-icon`).attr(`src`, clear)
            $(`#result-icon`).append(image)
        } else if (icon == `02d` || `02n`) {
            var image = $(`#result-icon`).attr(`src`, fewClouds)
            $(`#result-icon`).append(image)
        }  else if (icon == `03d` || `03n`) {
            var image = $(`#result-icon`).attr(`src`, scatteredClouds)
            $(`#result-icon`).append(image)
        } else if (icon == `04d` || `04n`) {
            var image = $(`#result-icon`).attr(`src`, brokenClouds)
            $(`#result-icon`).append(image)
        } else if (icon == `09d` || `09n`) {
            var image = $(`#result-icon`).attr(`src`, showerRain)
            $(`#result-icon`).append(image)
        } else if (icon == `10d` || `10n`) {
            var image = $(`#result-icon`).attr(`src`, rain)
            $(`#result-icon`).append(image)
        } else if (icon == `11d` || `11n`) {
            var image = $(`#result-icon`).attr(`src`, thunderStorm)
            $(`#result-icon`).append(image)
        }  else if (icon == `13d` || `13n`) {
            var image = $(`#result-icon`).attr(`src`, snow)
            $(`#result-icon`).append(image)
        }




        // setting name and date text
        var cityName = $(`#result-name`).text(name + ` ` + date);

        // Displaying the city name
        cityDiv.append(cityName);

        // getting temp 
        var temp = response.list[0].main.temp;


        // setting temp text
        $("#result-temp").text("Temperature: " + temp + ` F°`);

        // getting humidity level
        var humidity = response.list[0].main.humidity


        // setting humidity text
        $("#result-humidity").text("Humidity: " + humidity + `%`);

        // getting wind speed
        var windSpeed = response.list[0].wind.speed

        // setting wind speed text
        $(`#result-wind-speed`).text(`Wind Speed: ` + windSpeed + ` MPH`)

        // Setting up forcast tiles
        var day1Date = response.list[0].dt_txt
        var day1Temp = response.list[0].main.temp
        var day1Humidity = response.list[0].main.humidity
        var day1Icon = response.list[0].weather[0].icon
        
        $(`#day1date`).text(day1Date)

        if (day1Icon == `01d` || `01n`) {
            var image = $(`#day1icon`).attr(`src`, clear)
            $(`#day1icon`).append(image)
        } else if (day1Icon == `02d` || `02n`) {
            var image = $(`#day1icon`).attr(`src`, fewClouds)
            $(`#day1icon`).append(image)
        }  else if (day1Icon == `03d` || `03n`) {
            var image = $(`#day1icon`).attr(`src`, scatteredClouds)
            $(`#day1icon`).append(image)
        } else if (day1Icon == `04d` || `04n`) {
            var image = $(`#day1icon`).attr(`src`, brokenClouds)
            $(`#day1icon`).append(image)
        } else if (day1Icon == `09d` || `09n`) {
            var image = $(`#day1icon`).attr(`src`, showerRain)
            $(`#day1icon`).append(image)
        } else if (day1Icon == `10d` || `10n`) {
            var image = $(`#day1icon`).attr(`src`, rain)
            $(`#day1icon`).append(image)
        } else if (day1Icon == `11d` || `11n`) {
            var image = $(`#day1icon`).attr(`src`, thunderStorm)
            $(`#day1icon`).append(image)
        }  else if (day1Icon == `13d` || `13n`) {
            var image = $(`#day1icon`).attr(`src`, snow)
            $(`#day1icon`).append(image)
        }

        $(`#day1Temp`).text(`Temp: ` + day1Temp + `F°`)
        $(`#day1Humidity`).text(`Humidity: ` + day1Humidity + `%`)

        var day2Date = response.list[8].dt_txt
        var day2Temp = response.list[8].main.temp
        var day2Humidity = response.list[8].main.humidity
        $(`#day2date`).text(day2Date)
        $(`#day2Temp`).text(`Temp: ` + day2Temp + `F°`)
        $(`#day2Humidity`).text(`Humidity: ` + day2Humidity + `%`)

        var day3Date = response.list[16].dt_txt
        var day3Temp = response.list[16].main.temp
        var day3Humidity = response.list[16].main.humidity
        $(`#day3date`).text(day3Date)
        $(`#day3Temp`).text(`Temp: ` + day3Temp + `F°`)
        $(`#day3Humidity`).text(`Humidity: ` + day3Humidity + `%`)

        var day4Date = response.list[24].dt_txt
        var day4Temp = response.list[24].main.temp
        var day4Humidity = response.list[24].main.humidity
        $(`#day4date`).text(day4Date)
        $(`#day4Temp`).text(`Temp: ` + day4Temp + `F°`)
        $(`#day4Humidity`).text(`Humidity: ` + day4Humidity + `%`)

        var day5Date = response.list[32].dt_txt
        var day5Temp = response.list[32].main.temp
        var day5Humidity = response.list[32].main.humidity
        $(`#day5date`).text(day5Date)
        $(`#day5Temp`).text(`Temp: ` + day5Temp + `F°`)
        $(`#day5Humidity`).text(`Humidity: ` + day5Humidity + `%`)

    });

}


// Function for displaying weather data
function renderButtons() {

    // Deletes the weather info prior to adding new info

    $("#buttons-view").empty();
    // Loops through the array of cities
    for (var i = 0; i < cities.length; i++) {

        // Then dynamicaly generates buttons for each city in the array
        var a = $("<button>");
        // Adds a class of city to our button
        a.addClass("city btn btn-primary m-1 col-12");
        // Added a data-attribute
        a.attr("data-name", cities[i]);
        // Provided the initial button text
        a.text(cities[i]);
        // Added the button to the buttons-view div
        $("#buttons-view").prepend(a);
    }
}

// This function handles events where the search button is clicked
$("#button-addon2").on("click", function (event) {
    event.preventDefault();
    // This line of code will grab the input from the textbox
    var city = $("#city-input").val().trim();

    // The city from the textbox is then added to our array
    cities.push(city);

    // Calling renderButtons which handles the processing of our city array
    renderButtons();
});

// Adding click event listeners to all elements with a class of "city"
$(document).on("click", ".city", displayWeatherInfo);

// Calling the renderButtons function to display the initial buttons
renderButtons();
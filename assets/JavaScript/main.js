var cities = [`San Fransisco`, `Washington DC`, `The Woodlands`, `Sacramento`, `Houston`]

function displayMovieInfo() {
    
    //var city = $(this).attr("data-name");
    var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + "oakland" + "&appid=9960537bc504b12a81ff658aa9dd27bd";



    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
        
    }).then(function (response) {
        console.log(JSON.stringify(queryURL))

        console.log(response)

        // Creating a div to hold the City
        var cityDiv = $("<div class='city'>");
        
        // Storing the rating data
        var rating = response.Rated;
        
        // Creating an element to have the rating displayed
        var pOne = $("<p>").text("Rating: " + rating);
        
        // Displaying the rating
        movieDiv.append(pOne);
        
        // Storing the release year
        var released = response.Released;
        
        // Creating an element to hold the release year
        var pTwo = $("<p>").text("Released: " + released);
        
        // Displaying the release year
        movieDiv.append(pTwo);
        
        // Storing the plot
        var plot = response.Plot;
        
        // Creating an element to hold the plot
        var pThree = $("<p>").text("Plot: " + plot);
        
        // Appending the plot
        movieDiv.append(pThree);
        
        // Retrieving the URL for the image
        var imgURL = response.Poster;
        
        // Creating an element to hold the image
        var image = $("<img>").attr("src", imgURL);
        
        // Appending the image
        movieDiv.append(image);
        
        // Putting the entire movie above the previous movies
        $("#movies-view").prepend(movieDiv);
        
    });
    
}


// Function for displaying movie data
function renderButtons() {
    
    // Deletes the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();
    // Loops through the array of movies
    for (var i = 0; i < cities.length; i++) {
        
        // Then dynamicaly generates buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adds a class of movie to our button
        a.addClass("city btn btn-primary m-1");
        // Added a data-attribute
        a.attr("data-name", cities[i]);
        // Provided the initial button text
        a.text(cities[i]);
        // Added the button to the buttons-view div
        $("#buttons-view").append(a);
    }
}

// This function handles events where the add movie button is clicked
$("#button-addon2").on("click", function (event) {
    event.preventDefault();
    // This line of code will grab the input from the textbox
    var city = $("#city-input").val().trim();

    // The movie from the textbox is then added to our array
    cities.push(city);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
});

// Adding click event listeners to all elements with a class of "movie"
$(document).on("click", ".city", displayMovieInfo);

// Calling the renderButtons function to display the initial buttons
renderButtons();
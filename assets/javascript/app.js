// This is an array for the recommended tvshows
var tvshows = ["How I Met Your Mother", "Star", "How to Get Away With Murder", "Empire"];

function showGifs() {
    var item = $(this).attr("data-name");
    console.log(item)
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=AZxXxz6dsRso0hVFUCNjLVtVNC8Hnfzn&q=" + item + "&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        console.log(results)
        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var animalDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var animalImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            animalImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the animalDiv
            animalDiv.append(p);
            animalDiv.append(animalImage);

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $(".gifs").prepend(animalDiv);
        }
        console.log(queryURL);
        console.log(response);
    });
}

function showBtns() {
    $("#tvshowButtons").empty();
    // this is a for loop with that appends a button for the array
    for (var i = 0; i < tvshows.length; i++) {
        // $("#tvshowButtons").append(`<button type="button" class="btn btn-primary" data-name="${tvshows[i]}">${tvshows[i]}</button>`)

        var a = $("<button>");
        a.addClass("movie-btn");
        a.attr("data-name", tvshows[i]);
        a.text(tvshows[i]);
        $("#tvshowButtons").append(a);
    }
}

$("#addon").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var itemEnter = $("#add-tvshow").val().trim();
    console.log(itemEnter)
    // Adding movie from the textbox to our array
    tvshows.push(itemEnter);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
});

// $("#submit").on("click", function (event) {
//     event.preventDefault()
//     var newBtn = $("<button>")
//     $("#tvshowButtons").append($("<button>" + $("#tvshow-input").val() + "</button>"))
    
// })

// Function for displaying tvshows data
// function renderButtons() {

// }

// $(document).on("click", ".movie-btn", showGifs);
// showBtns()
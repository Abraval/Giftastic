var feelings = ["USA", "England", "France", "Ukraine", "Japan", "Turkey", "India", "Brazil", "Israel", "UAE", "Zambia", "Russia", "China", "Australia", "Mexico"];


function displayGif() {
  $("#gif-view").empty();

  var feeling = $(this).attr("data-name");
  console.log(feeling)

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + feeling + "&city&api_key=u61R4WTo5dw995TP19npNy03UWNNeeJZ&limit=10";


  $.ajax({
    url: queryURL,
    method: "GET"
  })

    .then(function (response) {
      console.log(response)

      var results = response.data;

      for (var i = 0; i < results.length; i++) {

        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

          var gifDiv = $("<div>");

          // var rating = results[i].rating;

          // var p = $("<p>").text("Rating: " + rating);

          var feelingImage = $("<img>");

          feelingImage.attr("src", results[i].images.fixed_height.url);
          feelingImage.addClass("img-thumbnail m-3 float-left")

          gifDiv.append(feelingImage);
          // gifDiv.append(p);
          

          $("#gif-view").prepend(gifDiv);
        }
      }
    });


};





function renderButtons() {

  $("#buttons-view").empty();

  for (var i = 0; i < feelings.length; i++) {

    var a = $("<button>");

    a.addClass("btn-f btn-lg btn-dark border-0 rounded shadow text-white m-1");

    a.attr("data-name", feelings[i]);

    a.text(feelings[i]);

    $("#buttons-view").append(a);
    // console.log(a)
  }
}

$("#add-gif").on("click", function (event) {

  event.preventDefault();

  var gif = $("#gif-input").val().trim();

  feelings.push(gif);

  renderButtons();
});
renderButtons();

$(document).on("click", ".btn-f", displayGif);

// $(document).on("click", ".movie-btn", displayMovieInfo);



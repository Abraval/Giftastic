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
      // console.log(response)

      var results = response.data;
      console.log(results)

      for (var i = 0; i < results.length; i++) {

        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

          var gifDiv = $("<div>");
          gifDiv.addClass("gifDiv card float-left m-2 border-0 rounded-lg shadow")

          var rating = results[i].rating.toUpperCase();
          var p = $("<p>").text("Rating:  " + rating);
          p.addClass("card-text text-white font-weight-bold text-left px-2 py-1")

          var feelingImage = $("<img>");

          feelingImage.attr("src", results[i].images.fixed_height_still.url)
          feelingImage.attr("data-state", "still")

          feelingImage.attr("data-still", results[i].images.fixed_height_still.url);

          feelingImage.attr("data-animate", results[i].images.fixed_height.url)


          feelingImage.addClass("gifImg image-fluid mb-1");
          gifDiv.append(p);
          gifDiv.prepend(feelingImage);
          $("#gif-view").prepend(gifDiv);



          $(".gifImg").on("click", function () {
 
          

            var state = $(this).attr("data-state");
            if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            } else if (state === "animate") {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
          });

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

  // if (gif === null) {
  //   alert("Type something...")
  //   return
  // }

  feelings.push(gif);

  renderButtons();
});
renderButtons();

$(document).on("click", ".btn-f", displayGif);

// $(document).on("click", ".movie-btn", displayMovieInfo);

  function reset(){
    window.location.reload()
  };
  $(".jumbotron").on("click", reset);
    



var feelings = ["Happy", "Angry", "Bored", "Excied", "Confused", "Annoyed", "Contempt", "Surprised", "Disgusted", "Scared", "Emotional", "Amused", "Joyful", "Romantic", "Sensitive"];

function renderButtons() {

  $("#buttons-view").empty();

  for (var i = 0; i < feelings.length; i++) {

    var a = $("<button>");
    
    a.addClass("feelings-btn btn-lg btn-info border-0 rounded shadow text-white m-1");
  
    a.attr("data-name", feelings[i]);
   
    a.text(feelings[i]);
  
    $("#buttons-view").append(a);
  }
}

$("#add-gif").on("click", function(event) {
  event.preventDefault();

  var gif = $("#gif-input").val().trim();

  feelings.push(gif);
  console.log(feelings)

  renderButtons();
});
renderButtons();


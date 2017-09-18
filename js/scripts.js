$(function(){
  $("#formone").submit(function(event){
    event.preventDefault();
    var favArray = [
                    $("input#side-a").val(),
                    $("input#side-b").val(),
                    $("input#side-c").val()
                  ];
    $(".output").removeClass("hidden");

      $("#food").prepend("<li>"+favArray[0]+"</li>");
      $("#game").prepend("<li>"+favArray[1]+"</li>");
      $("#movie").prepend("<li>"+favArray[2]+"</li>");
      var newOutput = [];
      newOutput.push(favArray);
      $("#newoutput").prepend("<li>"+newOutput+"</li>");

  });


});

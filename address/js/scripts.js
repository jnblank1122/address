$(document).ready(function(){
  $("#blank form").submit(function(event){
    event.preventDefault();
    var nameInput = $("input#name").val();
    var streetInput = $("input#street").val();
    var citystateInput = $("input#citystate").val();
    var zipInput = $("input#zip").val();

    $(".name").text(nameInput);
    $(".street").text(streetInput);
    $(".citystate").text(citystateInput);
    $(".zip").text(zipInput);

    $("#receipt").show();
  });
});

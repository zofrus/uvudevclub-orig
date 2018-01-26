$(document).ready(function(){
  var memberArray = ["Mitchell Daw", "Mason Malone", "Jordan Carter", "Jason Fuller", "Alex Anderson", "Steve Anderson", "random person"];
  for(var i = 0; i < memberArray.length; i++){
    $('.memberList').append("<h2 class='section-heading'>"+ memberArray[i] + "<br></h2>");
  }
});

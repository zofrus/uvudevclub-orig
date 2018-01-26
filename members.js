$(document).ready(function(){
  var memberArray = [];
  for(var i = 0; i < memberArray.length; i++){
    $('.memberList').append("<h2 class='section-heading'>"+ memberArray[i] + "<br></h2>");
  }
});

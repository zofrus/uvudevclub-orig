$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){
        $("#formx").unbind('submit');
        window.location.hash = hash;
      });
    }
  });

  $("#hacker").click(function(){
    if($("#proList").css("display") === "none")
    {
      $("#proList").show();
    }
    else{
      $("#proList").hide();
    }
  });
  $("#new").click(function(){
    if($("#noobList").css("display") === "none")
    {
      $("#noobList").show();
    }
    else{
      $("#noobList").hide();
    }
  });
});

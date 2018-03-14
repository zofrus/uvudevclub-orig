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

  setTimeout(function(){
    $('#banner-comp').show("linear");
    $('#sponsorButton').show("linear");
    $('#banner').show("linear");
  }, 3000)

  $('#banner-comp').click(function(){
    $('#banner-comp').animate({opacity: 0 }, 500);
    $('#close-banner').hide();
    $('#banner').animate({opacity: 0 }, 500);
    $('#banner-comp').hide(1000);
    $('#banner').hide(1000);
    $('#sponsorButton').hide();
  });

  $('#close-banner').click(function(){
    $('#banner-comp').animate({opacity: 0 }, 500);
    $('#close-banner').hide();
    $('#banner').animate({opacity: 0 }, 500);
    $('#banner-comp').hide(1000);
    $('#banner').hide(1000);
    $('#sponsorButton').hide();
  })
});

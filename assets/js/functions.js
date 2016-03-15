$(function(){

  // When the user clicks on the button, open the modal
  $(".listing").click(function() {
    $('#modal').css("display", "block");
  });


  // When the user clicks anywhere outside of the modal, close it
  $(".modal-close").click(function(event) {
    $('#modal').css("display", "none");
  });

  $(".input-group input").focusout(function(){
    var text_val = $(this).val();

    if(text_val === "") {
      $(this).removeClass("has-value");
    } else {
      $(this).addClass("has-value");
    }
  });
  $(".input-group textarea").focusout(function(){
    var text_val = $(this).val();

    if(text_val === "") {
      $(this).removeClass("has-value");
    } else {
      $(this).addClass("has-value");
    }
  });

  $("#search").click(function(e){
    e.preventDefault();

    if($(".search").hasClass("search-active")) {
      $(".search").removeClass("search-active");
    } else {
      $(".search").addClass("search-active");
    }
  });

  $("#picture-label").click(function(e) {
    e.preventDefault();
    $("#picture-input").trigger('click');
  });

  var toggle = false;
  $("#register").click(function(e) {
    e.preventDefault();
    if(toggle == true) {
        $(".register").css("left", "-200%");
        $(".register").css("display", "none");
        $("#team-list").css("display", "block");
        toggle = false;
    } else {
      $(".register").css("display", "block");
      $(".register").css("left", "0%");
      $("#team-list").css("display", "none");
      toggle = true ;
    }
  });

});

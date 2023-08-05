$(document).ready(function(){
    $("#login-form").submit(function(event){
        event.preventDefault();
    })
    $("#req-appear").on("click",function(){
        $(".login").addClass("slideLeftLogin")
        setTimeout(function(){
            $(".login").addClass("d-none");
            $(".register").addClass("slideLeftRegister");
            $(".register").removeClass("d-none");
        }, 1000)
    })
    $("#log-appear").on("click",function(){
        $(".register").removeClass("slideLeftRegister");
  $(".register").addClass("slideRightRegister");
  $(".register").on("animationend", function() {
    $(this).addClass("d-none");
    $(".login").addClass("slideRightLogin");
    setTimeout(function() {
      $(".login").removeClass("d-none");
    }, 1000); // Adjust the delay as needed for the slideRightLogin animation
    $(this).off("animationend");
  });
    })
})

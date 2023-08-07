$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
    })
    $("#req-appear").on("click",function(){
        $(".login").removeClass("slideRightLogin")
        $(".register").removeClass("slideRightRegister")
        $(".login").addClass("slideLeftLogin")
        setTimeout(function(){
            $(".login").addClass("d-none");
            $(".register").addClass("slideLeftRegister");
            $(".register").removeClass("d-none");
        }, 1000)
    })
    $("#log-appear").on("click",function(){
        $(".register").removeClass("slideLeftRegister")
        $(".register").addClass("slideRightRegister")
        setTimeout(function(){
            $(".register").addClass("d-none");
            $(".login").removeClass("slideLeftLogin").removeClass("d-none");
            $(".login").addClass("slideRightLogin")
            $(".alert").addClass("d-none")

        },1000)
    })
    $("#reg").on("click", function(){
        $(".alert").removeClass("d-none")
    
    $("button").on("click",function(){
        $(this).append(`<span class="ripple"></span>`);
    })
})

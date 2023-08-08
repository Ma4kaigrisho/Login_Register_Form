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
    })
    function RippleStyle(width, height, posX, posY){
        this.width = (width <= height) ? height : width;
        this.height = (width <= height) ? height : width;
        this.top = posY - (this.height * .5);
        this.left = posX - (this.width * .5);
    }
    $("button").on("click",function(e){
        let rippleEl = $(this).append(`<span class="ripple"></span>`);

        let pos = $(this).offset();

        let width = $(this).outerWidth();
        let height = $(this).outerHeight();

        let posX = e.pageX - pos.left;
        let posY = e.pageY - pos.top

        let rippleStyle = new RippleStyle(width, height, posX, posY);

        rippleEl.css(rippleStyle);
    })
    $("button").on("animationend",".ripple", function(){
        $(this).remove();
    });
})

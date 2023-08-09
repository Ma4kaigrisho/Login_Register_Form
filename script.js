$(document).ready(function(){
    var example_usrname = "example";
    var example_passwd = "example123"
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
        this.width = ( width <= height ) ? height : width;
        this.height = ( width <= height ) ? height : width;
        this.top = posY - (this.height * 0.5);
        this.left = posX - (this.width * 0.5);
    }
    $(".sub").on("mousedown",function(e){
        var rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);
        console.log("Ripple element created: ", rippleEl);

        var pos = $(this).offset();
        console.log("Position: ", pos);

        var width = $(this).outerWidth();
        var height = $(this).outerHeight();

        var posX = e.pageX - pos.left;
        var posY = e.pageY - pos.top;
        console.log("Width: ", width, "Height: ", height);

        var rippleStyle = new RippleStyle(width, height, posX, posY);
        console.log("Ripple style: ", rippleStyle);
        rippleEl.css(rippleStyle);
    })
    $('.btn').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.btn-ripple', function(){
        $(this).remove();
      });
    $('.accordion-header').click(function() {
        var accordionContent = $(this).next('.accordion-content');
        var isCollapsed = accordionContent.css('display') === 'none';
        $('.accordion-content').slideUp();
        if (isCollapsed) {
            accordionContent.slideDown();
        }
    });
    $("#login").on("click",function(){
        input_usr = $("#username").val();
        input_passwd = $("#passwd").val();
        console.log(input_usr)
        console.log(input_passwd)
        if( input_usr != example_usrname || input_passwd != example_passwd){
            $("#passwd").val("");
            $("#username").addClass("wrong");
            $("#passwd").addClass("wrong");
            setTimeout(function(){
                $("#username").removeClass("wrong");
                $("#passwd").removeClass("wrong");
            },500)
        }
        else{
            window.location.href='second.html';
        }
    })
})

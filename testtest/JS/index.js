$(function() {

    var posi = 200;
    var off = $(".about").offset();

    $(".works").css({
        'top':off.top + posi,
        'left':off.left + posi,
    });
    
    $(".contact").css({
        'top':off.top + posi * 2,
        'left':off.left + posi * 2,
    });
    $(".unconst").css({
        'top':off.top + posi * 3,
        'left':off.left + posi * 3,
    });







    //about-------------
    $(".about").hover(
        function() {
            $(this).css({
                'border-color':'rgba(255, 0, 0, 0.4)',
                'width':'90%',
                'height':'85%',
                'left':'0px',
                'margin':'0px 80px',
                'background-color':'rgba(255, 255, 255, 0.05)',
                'transition':'border-color .4s, width .4s ,height 0.6s, left .4s, margin 1.0s',

            });
            $(".box").not(this).hide();
            $(".hidecontents").show();
        },
        function() {
            $(this).css({
                'border-color':'',
                'width':'',
                'height':'',
                'left':'',
                'margin':'',
                'background-color':'',
                'transition':'border-color .4s, width .4s ,height 0.1s, left .4s, margin 0.9s',

            });
            $(".box").not(this).show();
            $(".hidecontents").hide();

        }

    )

    //works---------------
    $(".works").hover(
        function() {
            $(this).css({
                'border-color':'rgba(0, 128, 0, 0.6)',
                'width':'90%',
                'height':'85%',
                'top':'0px',
                'left':'0px',
                'margin':'100px 80px',
                'background-color':'rgba(255, 255, 255, 0.05)',
                'transition':'border-color .4s, width .4s ,height 0.6s,top .9s, left .4s, margin 1.0s',

            });
            $(".box").not(this).hide();
        },
        function() {
            $(this).css({
                'border-color':'',
                'width':'',
                'height':'',
                'top':off.top + posi,
                'left':off.left + posi,
                'margin':'',
                'background-color':'',
                'transition':'border-color .4s, width .4s ,height 0.1s,top .4s, left .4s, margin 0.9s',

            });
            $(".box").not(this).show();

        }

    )
    //contact--------------
    $(".contact").hover(
        function() {
            $(this).css({
                'border-color':'rgba(0, 191, 255, 0.6)',
                'width':'90%',
                'height':'85%',
                'top':'0px',
                'left':'0px',
                'margin':'100px 80px',
                'background-color':'rgba(255, 255, 255, 0.05)',
                'transition':'border-color .4s, width .4s ,height 0.6s,top .6s, left .4s, margin 1.0s',

            });
            $(".box").not(this).hide();
        },
        function() {
            $(this).css({
                'border-color':'',
                'width':'',
                'height':'',
                'top':off.top + posi*2,
                'left':off.left + posi*2,
                'margin':'',
                'background-color':'',
                'transition':'border-color .4s, width .4s ,height 0.1s,top .4s, left .4s, margin 0.9s',

            });
            $(".box").not(this).show();

        }

    )
    //uncon--------------
    $(".unconst").hover(
        function() {
            $(this).css({
                'border-color':'rgba(255, 0, 0, 0.2)',
                'width':'90%',
                'height':'85%',
                'top':'0px',
                'left':'0px',
                'margin':'100px 80px',
                'background-color':'rgba(255, 255, 255, 0.05)',
                'transition':'border-color .4s, width .4s ,height 0.6s,top 0.6s, left .4s, margin 1.0s',

            });
            $(".box").not(this).hide();
        },
        function() {
            $(this).css({
                'border-color':'',
                'width':'',
                'height':'',
                'top':off.top + posi*3,
                'left':off.left + posi*3,
                'margin':'',
                'background-color':'',
                'transition':'border-color .4s, width .4s ,height 0.1s,top .4s, left .4s, margin 0.9s',

            });
            $(".box").not(this).show();

        }

    )
    


});
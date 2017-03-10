var btn = $('.menu-icon-toggle');
var background = $('body');


var width = 0;
var height = 0;
var r = 0;
setSize();

function setSize() {
    width = $(window).width();
    height = $(window).height();
    r = Math.sqrt(width * width + height * height);
}
$(window).resize(setSize);

//var circle = $("<div unselectable='on' id='circle' style='z-index=9999'></div>");
var circle = $(".menu-shadow");

function close_circle() {
    circle.animate({
        width: 0,
        height: 0,
        'margin-left': 0,
        'margin-top': 0
    }, {
        duration: 600,
        easing: "easeInOutCubic",
        queue: false,
        complete: function() {
            /*circle.parent().css('background-color',
                           $(this).css('background-color'));
            circle.detach();*/
            console.log("complete closing")
        }
    });
}

btn.click(function(e) {
    if (!$("body").hasClass('open')) {
        circle.css({
            z_index: 300,
            position: 'absolute',
            'background': 'rgba(162, 87, 44, 0.82)',
            width: 0,
            height: 0,
            "border-radius": "50%",
            left: e.pageX,
            top: e.pageY,
            'margin-left': 0,
            'margin-top': 0,
            'webkit-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none'
        });
        circle.animate({
            width: (r * 2),
            height: (r * 2),
            'margin-left': -r,
            'margin-top': -r
        }, {
            duration: 600,
            easing: "easeInOutCubic",
            queue: false,
            complete: function() {
                /*circle.parent().css('background-color',
                               $(this).css('background-color'));
                circle.detach();*/
                console.log("complete opening")
            }
        });
    } else {
        close_circle();
    }
});

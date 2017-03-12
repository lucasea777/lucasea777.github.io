function Utils() {

}
//http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
Utils.prototype = {
    constructor: Utils,
    isElementInView: function(element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}
//var router = new Navigo(undefined, true);
function updatePageLinks() {
    $('[data-hash]').on('click', function() {
        location.hash = $(this).data('hash');
        route(true);
    })
}
updatePageLinks();
var loaded = "";
var home_loaded = true;

function load(a, selector) {
    $('body').removeClass('open');
    close_circle();
    if (selector !== undefined)
        goto(selector);
    loaded = a;
    if (a == "home.html") {
        $("#greathome").show();
        $('#greatalbum').html("");
        //$(".homevimeo").attr("src", $(".homevimeo").attr("src"));
        if (home_loaded)
            return
    } else {
        $("#greathome").hide();
        $('#greatalbum').show();
    }
    var target;
    if (a == "home.html") {
        home_loaded = true;
        target = $('#greathome')
    } else {
        target = $('#greatalbum')
    }
    target.load(a, function() {
        //router.updatePageLinks();
        setTimeout(function() {
            goto(selector !== undefined ? selector : 'body');
        }, 500);
    });
}
//load(location.hash.slice(1) + '.html')
function athome() {
    //return ['/', 'sobremi', 'contact'].some((e) => location.hash.includes(e));
    return !location.hash.includes('album')
}

var reset_hash = false;

function goto(selector) {
    reset_hash = true;
    //stop() http://stackoverflow.com/questions/21786027/jquery-scrolltop-being-buggy
    // weeiiirddd!!
    $('html, body').stop().animate({
        scrollTop: $(selector).offset().top
    }, 1000);
}
var skip_onpushstate = false;
var previousScroll = 0;
$(document).scroll(function() {
    if ($("body").hasClass('open')) {
        $("body").removeClass('open');
        close_circle();
    }
    if (innerWidth > 1000) {
        var currentScroll = $(this).scrollTop();
        if (currentScroll < previousScroll && currentScroll > innerHeight) {
            $(".body_header").css({
                paddingTop: 5,
                position: "fixed",
                background: "linear-gradient(rgba(0, 0, 0, 0.62), transparent)"
            });
        } else {
            $(".body_header").css({
                paddingTop: 25,
                position: "absolute",
                background: "transparent"
            });
        }
        previousScroll = currentScroll;
    }
    /*if (!athome())
        return
    var before = location.hash;
    var tochange;
    if(Utils.isElementInView($('section.portada'), false))
        tochange = "/";
    else if(Utils.isElementInView($('#sobremi'), false))
        tochange = '/home_sobremi';
    else if(Utils.isElementInView($('#contact'), false))
        tochange = '/home_contact';
    else 
        tochange = "/";
    if (tochange != before)
        skip_onpushstate = true;
    location.hash = tochange;*/
})

locations = {
    '': function() {
        load('home.html');
    },
    '/': function() {
        load('home.html');
    },
    '/home_sobremi': function() {
        load('home.html', '#sobremi');
    },
    '/home_contact': function() {
        load('home.html', '#contact');
    }
}

function route(skiphit) {
    //debugger;
    if (skiphit === undefined)
        ga('send', {
            hitType: 'pageview',
            location: location.href,
            hitCallback: function(e) {
                console.log(`Hit!! pageview - ${location.href}`)
            }
        });
    if (location.hash.slice(1) in locations)
        locations[location.hash.slice(1)]()
    else if (location.hash.slice(1).startsWith('/album:'))
        load('album.html')
}

$('.menu-icon-toggle').on('click', function(e) {
    $('body').toggleClass('open');

    e.preventDefault();
});


(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

if (['localhost', '192.168'].some((e) => location.hostname.includes(e)) ||
    location.search.includes('testing'))
//ga('create', 'UA-93049227-1', 'auto', 'testing');
    ga('create', 'UA-93049227-1', 'auto');
else
    ga('create', 'UA-93049227-1', 'auto');

ga(function(tracker) {
    console.log("Trackers loaded: " + tracker.get('clientId'));
});

//ga('set', 'sendHitTask', null);
ga('send', 'pageview')

$("#facebooklink").click(function() {
    ga('send', {
        hitType: 'event',
        eventCategory: `fast-contact facebook`,
        eventAction: 'click',
        hitCallback: function(e) {
            console.log(`Hit!! fast-contact facebook`)
        }
    });
});
var players = [];

function monitorvimeo(e) {
    var player = new Vimeo.Player(e);
    players.push(player);
    player.on('play', function() {
        player.getVideoTitle().then(function(title) {
            ga('send', {
                hitType: 'event',
                eventCategory: `Video - ${title}`,
                eventAction: 'play',
                /*eventLabel: title,*/
                hitCallback: function(e) {
                    console.log(`Hit!! Video - ${title}`)
                }
            })
        });
    });
}
window.onpopstate = function(event) {
    //alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
    if (skip_onpushstate) {
        skip_onpushstate = false;
        return;
    }
    route();
    for (var p of players) {
        try {
            p.pause()
        } catch (err) {}
    }
};

route()
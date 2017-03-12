var scene = $('#scene')[0];
var parallax = new Parallax(scene);
try {
    delete FB;
    $('#facebook-jssdk, #fb-root, .fb-share-button').remove();
} catch (a) {}
window.fbAsyncInit = function() {
    FB.init({
        appId: '260786051027362',
        xfbml: true,
        version: 'v2.8'
    });
    //FB.AppEvents.logPageView();
    //FB.AppEvents.logEvent('battledAnOrc');
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    //js.src = "//connect.facebook.net/en_US/sdk.js";
    //js.src = "//connect.facebook.net/en_US/sdk/debug.js";
    js.src = "//connect.facebook.net/es_ES/sdk/debug.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
if (innerWidth < 1000) {
    $(".fast-contact.wapp").attr('href', "intent://send/5493517041003#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end");
    $(".fast-contact.email").attr('href', "mailto:r.marilyn.o@gmail.com?Subject=Hola%20Marilyn%20Producciones");
} else {
    $(".fast-contact")
        .attr("data-tooltip", "Click para copiar!")
        .on("click", function() {
            copyToClipboard($(this).children("span")[0]);
            $(this).attr("data-tooltip", "Copiado gracias :D!")
            var that = this;
            setTimeout(function() {
                $(that).attr("data-tooltip", "Click para copiar numero!.")
            }, 2000);
        });
}
$(".fast-contact").click(function() {
    var type = $(this).attr('class').split(' ').filter(e => ['wapp', 'msn', 'email'].includes(e));
    ga('send', {
        hitType: 'event',
        eventCategory: `fast-contact ${type}`,
        eventAction: 'click',
        hitCallback: function(e) {
            console.log(`Hit!! fast-contact ${type}`)
        }
    });
});
$.getJSON(`albunes/conf.json`, function(data) {
    [].forEach.call($("[data-album]"), function(elem) {
        var nombre = elem.getAttribute('data-album');
        var album_data = data[nombre];
        $(elem).append($("<div/>", {
                    class: "crop"
                })
                .append($("<img/>", {
                    src: `albunes/${nombre}/low/${album_data.tapa}`
                }))
            )
            .append($("<div/>")
                .append($("<span/>").text(album_data.fecha))
                .append($("<h1/>").text(album_data.titulo))
                .append($("<p/>").text(album_data.descripcion))
            )
    })
});

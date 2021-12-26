// Code SONP


var pagesMax = 0;

function scrollOnPage(){

    $(".sonp-section").each(function(index){
        $(this).addClass("sonp-section-"+index);
        pagesMax++;

    });

    $(this).defineCss();

};


var time = new Date().getTime();
$(window).bind("keydown.key40 DOMMouseScroll mousewheel",function(event){

    event.preventDefault();
    // Update time
    var now = new Date().getTime();
    // Check page refresh. (F5)
    if(event.keyCode == 116){
        location.reload();
    }


    if (now - time >= 100) {
        time = now;
        if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 || event.keyCode == 40) {
            $(".sonp-section").nextPage();
        } else if (event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0 || event.keyCode == 38) {
            $(".sonp-section").prevPage();
        }

        event.stopPropagation();
    } else {
        time = now;
        return 0;
    }

});


pageIndex = 0;

$.fn.nextPage = function () {

    if(pageIndex < pagesMax-1){

        pageIndex++;

        var top = $(this).next(".sonp-section-"+pageIndex).offset().top;
        $("html, body").stop().animate({scrollTop: top},$(window).height());

    }

};
$.fn.prevPage = function () {

    if(pageIndex > 0){

        pageIndex--;

        var top = $(this).prev(".sonp-section-"+pageIndex).offset().top;
        $("html, body").stop().animate({scrollTop: top},$(window).height());

    }

};

log = function(text){
    console.log(text);
};
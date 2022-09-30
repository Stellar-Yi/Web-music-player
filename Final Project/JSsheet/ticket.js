let clicked = false;

$('.ticketDiv:eq(0)').hover(function () {
    $('.crue-top').attr('src', './images/ticket/back/crue-top.png');
    $('.crue-bottom').attr('src', './images/ticket/back/bottom.png');
    $('.crue-top').removeClass('front');
    $('.crue-bottom').removeClass('front');
    $('.crue-top').addClass('back');
    $('.crue-bottom').addClass('back');
    $(".crue-top > .cardRotate").addClass("backRotate").removeClass("cardRotate");
    $(this).addClass("cardRotate").removeClass("backRotate");

}, function () {
    if (!clicked) {
        $('.crue-top').attr('src', './images/ticket/front/crue-top.png');
        $('.crue-bottom').attr('src', './images/ticket/front/crue-bottom.png');
        $('.crue-top').addClass('front');
        $('.crue-bottom').addClass('front');
        $('.crue-top').removeClass('back');
        $('.crue-bottom').removeClass('back');
        $(".crue-top > backRotate").addClass("cardRotate").removeClass("backRotate");
        $(this).addClass("backRotate").removeClass("cardRotate");
    }
});

$('.ticketDiv:eq(1)').hover(function () {
    $('.lala-top').attr('src', './images/ticket/back/lala-top.png');
    $('.lala-bottom').attr('src', './images/ticket/back/bottom.png');
    $('.lala-top').removeClass('front');
    $('.lala-bottom').removeClass('front');
    $('.lala-top').addClass('back');
    $('.lala-bottom').addClass('back');
    $(".lala-top > .cardRotate").addClass("backRotate").removeClass("cardRotate");
    $(this).addClass("cardRotate").removeClass("backRotate");

}, function () {
    if (!clicked) {
        $('.lala-top').attr('src', './images/ticket/front/lala-top.png');
        $('.lala-bottom').attr('src', './images/ticket/front/lala-bottom.png');
        $('.lala-top').addClass('front');
        $('.lala-bottom').addClass('front');
        $('.lala-top').removeClass('back');
        $('.lala-bottom').removeClass('back');
        $(".lala-top > backRotate").addClass("cardRotate").removeClass("backRotate");
        $(this).addClass("backRotate").removeClass("cardRotate");
    }
});

$('.ticketDiv:eq(2)').hover(function () {
    $('.inter-top').attr('src', './images/ticket/back/inter-top.png');
    $('.inter-bottom').attr('src', './images/ticket/back/bottom.png');
    $('.inter-top').removeClass('front');
    $('.inter-bottom').removeClass('front');
    $('.inter-top').addClass('back');
    $('.inter-bottom').addClass('back');
    $(".inter-top > .cardRotate").addClass("backRotate").removeClass("cardRotate");
    $(this).addClass("cardRotate").removeClass("backRotate");

}, function () {
    if (!clicked) {
        $('.inter-top').attr('src', './images/ticket/front/inter-top.png');
        $('.inter-bottom').attr('src', './images/ticket/front/inter-bottom.png');
        $('.inter-top').addClass('front');
        $('.inter-bottom').addClass('front');
        $('.inter-top').removeClass('back');
        $('.inter-bottom').removeClass('back');
        $(".inter-top > backRotate").addClass("cardRotate").removeClass("backRotate");
        $(this).addClass("backRotate").removeClass("cardRotate");
    }
});

$('.ticketDiv:eq(3)').hover(function () {
    $('.bohe-top').attr('src', './images/ticket/back/bohe-top.png');
    $('.bohe-bottom').attr('src', './images/ticket/back/bottom.png');
    $('.bohe-top').removeClass('front');
    $('.bohe-bottom').removeClass('front');
    $('.bohe-top').addClass('back');
    $('.bohe-bottom').addClass('back');
    $(".bohe-top > .cardRotate").addClass("backRotate").removeClass("cardRotate");
    $(this).addClass("cardRotate").removeClass("backRotate");

}, function () {
    if (!clicked) {
        $('.bohe-top').attr('src', './images/ticket/front/bohe-top.png');
        $('.bohe-bottom').attr('src', './images/ticket/front/bohe-bottom.png');
        $('.bohe-top').addClass('front');
        $('.bohe-bottom').addClass('front');
        $('.bohe-top').removeClass('back');
        $('.bohe-bottom').removeClass('back');
        $(".bohe-top > backRotate").addClass("cardRotate").removeClass("backRotate");
        $(this).addClass("backRotate").removeClass("cardRotate");
    }
});

$('.ticketDiv:eq(0) > a').click(function () {
    $(this).parent().find('img').eq(1).addClass('tearing');
    $('.ticketDiv').css('pointer-events', 'none');
    clicked = true;

    tearingAudio.play();    //사운드재생

    var url = $(this).attr("href");
    setTimeout(function () {
        window.location.href = url;
    }, 1500)
});

$('.ticketDiv:eq(1) > a').click(function () {
    $(this).parent().find('img').eq(1).addClass('tearing');
    $('.ticketDiv').css('pointer-events', 'none');
    clicked = true;

    tearingAudio.play();    //사운드재생

    var url = $(this).attr("href");
    setTimeout(function () {
        window.location.href = url;
    }, 1500)
});

$('.ticketDiv:eq(2) > a').click(function () {
    $(this).parent().find('img').eq(1).addClass('tearing');
    $('.ticketDiv').css('pointer-events', 'none');
    clicked = true;

    tearingAudio.play();    //사운드재생

    var url = $(this).attr("href");
    setTimeout(function () {
        window.location.href = url;
    }, 1500)
});

$('.ticketDiv:eq(3) > a').click(function () {
    $(this).parent().find('img').eq(1).addClass('tearing');
    $('.ticketDiv').css('pointer-events', 'none');
    clicked = true;

    tearingAudio.play();    //사운드재생

    var url = $(this).attr("href");
    setTimeout(function () {
        window.location.href = url;
    }, 1500)
});




//페이지전환
$(function () {
    $("body .whole").fadeIn(500, function () {
        $(this).animate({
        }, 1000);
    });

    $("a").click(function () {
        return false;
    });
});

let tearingAudio = new Audio('./audio/ticket-tear.mp3');
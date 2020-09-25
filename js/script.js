$(".button-collapse").sideNav();



jQuery(function($) {
    $('.tab').click(function() {
        $('.is-active').removeClass('is-active');
        $(this).addClass('is-active');
        $('.is-show').removeClass('is-show');
        // クリックしたタブからインデックス番号を取得
        const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
        $('.panel').eq(index).addClass('is-show');
    });
});


$(document).ready(function() {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});



$(document).ready(function() {
    $('.materialboxed').materialbox();
});

$(function() {
    var $textarea = $('#textarea');
    var lineHeight = parseInt($textarea.css('lineHeight'));
    $textarea.on('input', function(evt) {
        var lines = ($(this).val() + '\n').match(/\n/g).length;
        $(this).height(lineHeight * lines);
    });
    console.log($textarea)
});



$(function() {
    var wrp = '.main',
        btnOpen = '.btn_open-A',
        btnClose = '.btn_close',
        sld = '#slide',
        ovrly = '.overlay',
        current_scrollY;

    $(btnOpen).on('click', function(e) {
        if ($(sld).css('display') == 'none') {
            current_scrollY = $(window).scrollTop();
            $(wrp).css({
                position: 'fixed',
                width: '100%',
                top: -1 * current_scrollY
            });
            $(sld).slideDown();
            $(ovrly).css('display', 'block');
        }
    });

    $(btnClose).on('click', function() {
        if ($(sld).css('display') == 'block') {
            $(wrp).attr({ style: '' });
            $('html, body').prop({ scrollTop: current_scrollY });
            $(sld).slideUp();
            $(ovrly).fadeOut();
        }
    });

    $(document).on('click', function(e) {
        if ($(sld).css('display') == 'block') {
            if ((!$(e.target).closest(sld).length) && (!$(e.target).closest(btnOpen).length)) {
                $(wrp).attr({ style: '' });
                $('html, body').prop({ scrollTop: current_scrollY });
                $(sld).slideUp();
                $(ovrly).fadeOut();
            }
        }
    });

});


$(function() {
    var wrp = '.main',
        btnOpen = '.btn_open-B',
        btnClose = '.btn_close-B',
        sld = '#slide2',
        ovrly = '.overlay',
        current_scrollY;

    $(btnOpen).on('click', function(e) {
        if ($(sld).css('display') == 'none') {
            current_scrollY = $(window).scrollTop();
            $(wrp).css({
                position: 'fixed',
                width: '100%',
                top: -1 * current_scrollY
            });
            $(sld).slideDown();
            $(ovrly).css('display', 'block');
        }
    });

    $(btnClose).on('click', function() {
        if ($(sld).css('display') == 'block') {
            $(wrp).attr({ style: '' });
            $('html, body').prop({ scrollTop: current_scrollY });
            $(sld).slideUp();
            $(ovrly).fadeOut();
        }
    });

    $(document).on('click', function(e) {
        if ($(sld).css('display') == 'block') {
            if ((!$(e.target).closest(sld).length) && (!$(e.target).closest(btnOpen).length)) {
                $(wrp).attr({ style: '' });
                $('html, body').prop({ scrollTop: current_scrollY });
                $(sld).slideUp();
                $(ovrly).fadeOut();
            }
        }
    });

});

$(function() {
    var wrp = '.main',
        btnOpen = '.btn_open-C',
        btnClose = '.btn_close-C',
        sld = '#slide3',
        ovrly = '.overlay',
        current_scrollY;

    $(btnOpen).on('click', function(e) {
        if ($(sld).css('display') == 'none') {
            current_scrollY = $(window).scrollTop();
            $(wrp).css({
                position: 'fixed',
                width: '100%',
                top: -1 * current_scrollY
            });
            $(sld).slideDown();
            $(ovrly).css('display', 'block');
        }
    });

    $(btnClose).on('click', function() {
        if ($(sld).css('display') == 'block') {
            $(wrp).attr({ style: '' });
            $('html, body').prop({ scrollTop: current_scrollY });
            $(sld).slideUp();
            $(ovrly).fadeOut();
        }
    });

    $(document).on('click', function(e) {
        if ($(sld).css('display') == 'block') {
            if ((!$(e.target).closest(sld).length) && (!$(e.target).closest(btnOpen).length)) {
                $(wrp).attr({ style: '' });
                $('html, body').prop({ scrollTop: current_scrollY });
                $(sld).slideUp();
                $(ovrly).fadeOut();
            }
        }
    });

});


$(function() {
    $('btn_open-A').on('click', () => {
        $('.footer').hide();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
});

// Or with jQuery

$('.dropdown-trigger').dropdown();

instance.open();

instance.close();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
});

// Or with jQuery

$(document).ready(function() {
    $('.modal').modal();
});
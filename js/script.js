/*global console, $ */

$(function () {
    "use strict";
    $('dd').filter(':nth-child(n+4)').hide();
    $('dt').on('click', function () {
        $(this).next().slideDown().siblings('dd').slideUp();
    });
});


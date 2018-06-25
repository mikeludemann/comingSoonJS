(function ($) {

    $.fn.comingSoon = function (options) {

        var settings = $.extend({
            title: "Coming Soon",
            partingLine: true,
            date: "2018-06-23",
            time: "22:30:00",
            afterText: "Expired",
            backgroundColor: "#000",
            backgroundImage: "",
            color: "#fff",
            context: "Our new website will be come after the deadline"
        }, options);

        // HTML Template

        var content = '<div class="container"><div class="middle"><div class="headline"><h2>' + settings.title + '</h2></div>';

        if (settings.partingLine == true) {

            content += '<hr class="parting-line">';

        }

        if (settings.date != "" || settings.date != null) {

            content += '<div class="countdown"><div id="timer">X</div></div>';

        }

        content += '</div>';

        if (settings.context != "" || settings.context != null) {

            content += '<div class="text-middle"><div>' + settings.context + '</div></div>';

        }

        content += '</div>';

        // Append Content in actual selector element

        this.append(content);

        // CSS Code

        $(".container").css({ 'width': '100%', 'height': '100%', 'color': settings.color, 'background-color': settings.backgroundColor, 'background-position': 'center', 'background-size': 'cover', 'background-image': settings.backgroundImage, 'position': 'relative' });

        $(".middle").css({ 'left': '50%', 'top': '50%', 'position': 'absolute', 'transform': 'translate(-50%, -50%)', 'text-align': 'center' });

        $(".parting-line").css({ 'width': '100%', 'height': '5px', 'background-color': settings.color, 'margin': 'auto' });

        $(".countdown").css({ 'margin-top': '20px' });

        $(".text-middle").css({ 'left': '50%', 'bottom': '0', 'position': 'absolute', 'transform': 'translateX(-50%)' });

        // JavaScript Methods

        countdown_timer("timer", settings.date, settings.time, settings.afterText);

    };

}(jQuery));

function countdown_timer(element, date, time, afterText) {

    'use strict';

    var setCountdown;

    if (time == null || time == "") {

        setCountdown = new Date(date).getTime();

    } else if (date == null && date == "") {

        setCountdown = new Date(time).getTime();

    } else if ((date != null && time != null) || (date != "" && time != "")) {

        setCountdown = new Date(date + "T" + time + "Z").getTime();

    } else {

        console.log("Date and/or time format is wrong!");

    }

    var x = setInterval(function () {

        var now = new Date().getTime();

        var distance = setCountdown - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var daysText,
            hoursText,
            minutesText,
            secondsText;

        if (days == 1) { daysText = " day " } else { daysText = " days " }
        if (hours == 1) { hoursText = " hour " } else { hoursText = " hours " }
        if (minutes == 1) { minutesText = " minute " } else { minutesText = " minutes " }
        if (seconds == 1) { secondsText = " second " } else { secondsText = " seconds " }

        var elementExist = document.getElementById(element);

        if (distance < 0) {

            clearInterval(x);

            elementExist.innerHTML = afterText;

        } else {

            elementExist.innerHTML = days + daysText + hours + hoursText + minutes + minutesText + seconds + secondsText;

        }

    }, 1000);

}
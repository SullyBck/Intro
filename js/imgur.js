$(document).ready(function() {
    $("#openPopupButton").click(function() {
        var $hardwareIcon = $("#hardwareIcon");

        // Vérifier si la classe et le contenu sont modifiés
        if (!$hardwareIcon.hasClass("hardware-icon-wrap") && $hardwareIcon.is(':empty')) {
            // Rétablir la classe et insérer l'icône
            $hardwareIcon.addClass("hardware-icon-wrap");
            $hardwareIcon.html('<i class="fa-solid fa-computer"></i>');
        } else {
            // Supprimer la classe et vider le contenu
            $hardwareIcon.removeClass("hardware-icon-wrap");
            $hardwareIcon.empty();
        }
    });
});

$(document).ready(function() {
    $("#openPopupButton2").click(function() {
        var $hardwareIcon2 = $("#hardwareIcon2");

        // Vérifier si la classe et le contenu sont modifiés
        if (!$hardwareIcon2.hasClass("hardware-icon-wrap") && $hardwareIcon2.is(':empty')) {
            // Rétablir la classe et insérer l'icône
            $hardwareIcon2.addClass("hardware-icon-wrap");
            $hardwareIcon2.html('<i class="fa-solid fa-recycle"></i>');
        } else {
            // Supprimer la classe et vider le contenu
            $hardwareIcon2.removeClass("hardware-icon-wrap");
            $hardwareIcon2.empty();
        }
    });
});

$(document).ready(function() {
    $("#openPopupButton3").click(function() {
        var $hardwareIcon3 = $("#hardwareIcon3");

        // Vérifier si la classe et le contenu sont modifiés
        if (!$hardwareIcon3.hasClass("hardware-icon-wrap") && $hardwareIcon3.is(':empty')) {
            // Rétablir la classe et insérer l'icône
            $hardwareIcon3.addClass("hardware-icon-wrap");
            $hardwareIcon3.html('<i class="fa-solid fa-screwdriver-wrench"></i>');
        } else {
            // Supprimer la classe et vider le contenu
            $hardwareIcon3.removeClass("hardware-icon-wrap");
            $hardwareIcon3.empty();
        }
    });
});

$(document).ready(function() {
    $("#openPopupButton4").click(function() {
        var $hardwareIcon4 = $("#hardwareIcon4");

        // Vérifier si la classe et le contenu sont modifiés
        if (!$hardwareIcon4.hasClass("hardware-icon-wrap") && $hardwareIcon4.is(':empty')) {
            // Rétablir la classe et insérer l'icône
            $hardwareIcon4.addClass("hardware-icon-wrap");
            $hardwareIcon4.html('<i class="fa-solid fa-hard-drive"></i>');
        } else {
            // Supprimer la classe et vider le contenu
            $hardwareIcon4.removeClass("hardware-icon-wrap");
            $hardwareIcon4.empty();
        }
    });
});




$(document).ready(function() {
    var embeddedCode2 = `
    <iframe width="100%" height="100%"
    src="https://www.youtube.com/embed/qHi9OTCYn0U"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>
    `;

    $("#openPopupButton2").click(function() {
        var $embeddedContainer2 = $("#embeddedContainer2");

        if ($embeddedContainer2.is(':hidden')) {
            $embeddedContainer2.html(embeddedCode2);
            $embeddedContainer2.show();
        } else {
            $embeddedContainer2.empty();
            $embeddedContainer2.hide();
        }
    });
});

$(document).ready(function() {
    var embeddedCode3 = `
    <iframe width="100%" height="100%"
    src="https://www.youtube.com/embed/8z5XhnyGY4E"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>
    `;

    $("#openPopupButton3").click(function() {
        var $embeddedContainer3 = $("#embeddedContainer3");

        if ($embeddedContainer3.is(':hidden')) {
            $embeddedContainer3.html(embeddedCode3);
            $embeddedContainer3.show();
        } else {
            $embeddedContainer3.empty();
            $embeddedContainer3.hide();
        }
    });
});

var imageCarousel = document.getElementById('imageCarousel');
var openPopupButton = document.getElementById('openPopupButton');

openPopupButton.addEventListener('click', function () {
    if (imageCarousel.classList.contains('d-none')) {
        imageCarousel.classList.remove('d-none');
    } else {
        imageCarousel.classList.add('d-none');
    }
});

var imageCarousel4 = document.getElementById('imageCarousel4');
var openPopupButton4 = document.getElementById('openPopupButton4');

openPopupButton4.addEventListener('click', function () {
    if (imageCarousel4.classList.contains('d-none')) {
        imageCarousel4.classList.remove('d-none');
    } else {
        imageCarousel4.classList.add('d-none');
    }
});
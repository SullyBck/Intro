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
    var embeddedCode = `
        <blockquote class="imgur-embed-pub" lang="en" data-id="a/MaVIYv7">
            <a href="//imgur.com/a/MaVIYv7">Montage de A à Z</a>
        </blockquote>
        <script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
    `;

    $("#openPopupButton").click(function() {
        var $embeddedContainer = $("#embeddedContainer");

        if ($embeddedContainer.is(':hidden')) {
            $embeddedContainer.html(embeddedCode);
            $embeddedContainer.show();
        } else {
            $embeddedContainer.empty();
            $embeddedContainer.hide();
        }
    });
});



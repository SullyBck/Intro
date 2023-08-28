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
        <blockquote class="imgur-embed-pub" lang="en" data-id="a/MaVIYv7" style="width: 100%; height: 100%;">
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


$(document).ready(function() {
    var embeddedCode2 = `
    <iframe width="100%" height="100%"
    src="https://www.youtube.com/embed/ZJYZhRJpBgY"
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
    <blockquote class="imgur-embed-pub" lang="en" data-id="a/vF5o5Gq" style="width: 100%; height: 100%;">
        <a href="//imgur.com/a/vF5o5Gq">Réparation</a>
    </blockquote>
    <script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
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

$(document).ready(function() {
    var embeddedCode4 = `
    <blockquote class="imgur-embed-pub" lang="en" data-id="a/1e5FXBq" style="width: 100%; height: 100%;">
        <a href="//imgur.com/a/1e5FXBq">Stockage</a>
    </blockquote>
    <script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
    `;

    $("#openPopupButton4").click(function() {
        var $embeddedContainer4 = $("#embeddedContainer4");

        if ($embeddedContainer4.is(':hidden')) {
            $embeddedContainer4.html(embeddedCode4);
            $embeddedContainer4.show();
        } else {
            $embeddedContainer4.empty();
            $embeddedContainer4.hide();
        }
    });
});
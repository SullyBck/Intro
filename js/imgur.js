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

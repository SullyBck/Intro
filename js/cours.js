function changePDF(newPDFPath) {
    var pdf1 = document.getElementById('pdf1');
    pdf1.setAttribute('src', newPDFPath);
}

const tabs = document.querySelectorAll('.tab');
const subtabs = document.querySelectorAll('.subtabs');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        
        tabs.forEach(otherTab => {
            if (otherTab !== tab) {
                otherTab.classList.remove('active'); // Désactive les autres onglets
            }
        });
        
        subtabs.forEach(subtab => {
            if (subtab.id === tabId) {
                subtab.classList.toggle('active');
                tab.classList.toggle('active'); // Active le nouvel onglet
            } else {
                subtab.classList.remove('active');
            }
        });
    });
});

function changePDF2(newPDFPath2) {
    var pdf2 = document.getElementById('pdf2');
    pdf2.setAttribute('src', newPDFPath2);
}

const tabs2 = document.querySelectorAll('.tab2');
const subtabs2 = document.querySelectorAll('.subtabs2');

tabs2.forEach(tab2 => {
    tab2.addEventListener('click', () => {
        const tabId2 = tab2.getAttribute('data-tab2');
        
        tabs2.forEach(otherTab => {
            if (otherTab !== tab2) {
                otherTab.classList.remove('active'); // Désactive les autres onglets
            }
        });
        
        subtabs2.forEach(subtab2 => {
            if (subtab2.id === tabId2) {
                subtab2.classList.toggle('active');
                tab2.classList.toggle('active'); // Active le nouvel onglet
            } else {
                subtab2.classList.remove('active');
            }
        });
    });
});

function setIframeHeight(iframeId) {
    var iframe = document.getElementById(iframeId);
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    if (windowWidth > 991.98) {
        if (windowHeight > 1120) {
            iframe.style.height = (1120 * 0.8) + "px"; // Utilise 80% de la hauteur si la largeur est supérieure à 1120px
        } else {
            iframe.style.height = (windowHeight * 0.8) + "px"; // Utilise 80% de la hauteur dans les autres cas
        }
    } else if (windowWidth < 400) {
        if (windowHeight < 720) {
            iframe.style.height = (windowHeight * 0.75) + "px"; // Utilise 75% de la hauteur dans les autres cas
        } else {
            iframe.style.height = (720 * 0.75) + "px"; // Utilise 75% de la hauteur si la largeur est inférieure à 400px et la hauteur est supérieure à 720px
        }
    } else {
        iframe.style.height = (windowHeight * 0.75) + "px"; // Utilise 75% de la hauteur si la largeur est entre 400px et 991.98px
    }
}

// Appelle la fonction lors du chargement initial de la page et lors du redimensionnement de la fenêtre
window.addEventListener("load", function () {
    setIframeHeight("pdf1");
    setIframeHeight("pdf2"); // Assurez-vous d'ajouter tous les ID d'iframe nécessaires ici
});

window.addEventListener("resize", function () {
    setIframeHeight("pdf1");
    setIframeHeight("pdf2"); // Assurez-vous d'ajouter tous les ID d'iframe nécessaires ici
});



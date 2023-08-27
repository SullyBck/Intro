function changePDF(newPDFPath) {
    var pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.setAttribute('src', newPDFPath);
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
    var pdfViewer2 = document.getElementById('pdfViewer2');
    pdfViewer2.setAttribute('src', newPDFPath2);
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

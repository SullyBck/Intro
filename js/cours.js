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

const pdfObject = document.getElementById('pdfObject');

function changePDF2(newPDFPath2) {
    pdfObject.setAttribute('data', newPDFPath2);
}

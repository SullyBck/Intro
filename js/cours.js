const pdf1 = document.getElementById('pdf1');

function changePDF(newPDFPath) {
    const newPDFUrl = `https://drive.google.com/file/d/${newPDFPath}/preview`;
    pdf.src = newPDFUrl;
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

const pdf2 = document.getElementById('pdf2');

function changePDF2(newPDFPath) {
    const newPDFUrl = `https://drive.google.com/file/d/${newPDFPath}/preview`;
    pdf2.src = newPDFUrl;
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

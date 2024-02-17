
// auto downloading my resume
function downloadDocument() {

    var documentUrl = 'Resume-Tanishq-Chauhan.pdf';
    var downloadLink = document.createElement('a');
    downloadLink.href = documentUrl;
    downloadLink.download = 'Resume-Tanishq-Chauhan.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

}

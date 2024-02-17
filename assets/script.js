
// auto downloading my resume
function downloadDocument() {

    var documentUrl = '/assets/Resume-Tanishq-Chauhan.pdf';
    var downloadLink = document.createElement('a');
    downloadLink.href = documentUrl;
    downloadLink.download = '/assets/Resume-Tanishq-Chauhan.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

}

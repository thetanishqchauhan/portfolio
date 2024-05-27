
// auto downloading my resume
function downloadDocument() {

    var documentUrl = 'Tanishq Chauhan Resume - MIET.pdf';
    var downloadLink = document.createElement('a');
    downloadLink.href = documentUrl;
    downloadLink.download = 'Tanishq Chauhan Resume - MIET.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

}

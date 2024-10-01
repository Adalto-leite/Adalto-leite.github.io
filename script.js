document.getElementById('loadButton').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value;
    const siteFrame = document.getElementById('siteFrame');

    if (urlInput) {
        // Verifica se a URL começa com http:// ou https://
        const formattedUrl = urlInput.startsWith('http://') || urlInput.startsWith('https://') ? urlInput : 'http://' + urlInput;
        siteFrame.src = formattedUrl;
    } else {
        alert('Por favor, insira uma URL válida.');
    }
});

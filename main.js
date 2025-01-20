const inputElement = document.querySelector('#generalInput');
const generateButton = document.querySelector('#generate');
const resultSection = document.querySelector('#result');
const qrCodeCanvas = document.querySelector('#qrCode');
const downloadLink = document.querySelector('#download');

generateButton.addEventListener('click', ()=> {
    const inputValue = inputElement.value.trim();
    if(inputValue) {
        QRCode.toCanvas(qrCodeCanvas, inputValue, {width:400}, (error) => {
           if(error) {
            console.error(error)
            return
           }
           resultSection.classList.add('active');

           const imageDataURL = qrCodeCanvas.toDataURL('image/png');
           downloadLink.href= imageDataURL;
           downloadLink.style.display='inline';

        })
    }else {
        alert('Veuillez entrer un texte ou un lien pour générer un QR Code');
    }
})


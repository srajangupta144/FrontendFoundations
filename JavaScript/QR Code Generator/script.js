const qrText= document.getElementById('qr-text');
const qrSize= document.getElementById('sizes');
const genrateBtn= document.getElementById('genrateBtn');
const downloadBtn= document.getElementById('downloadBtn');
const qrContainer= document.querySelector('.qr-body');

let size=qrSize.value;
genrateBtn.addEventListener('click',(e)=>{
    e.preventDefault();         //prevent from submitting the page on every click(No refresh)
    isEmptyInput();
});

qrSize.addEventListener('change',(e)=>{
    size=e.target.value;
    isEmptyInput();
});

function isEmptyInput(){
    qrText.value.length>0?generateQRCode():alert("Enter the text or URL to generate your QR code");
}
function generateQRCode(){
    qrContainer.innerHTML="";
    new QRCode(qrContainer, {
        text: qrText.value,
        width: size,
        height: size,
        colorDark : "#000",
        colorLight : "#fff",
    });


}

downloadBtn.addEventListener('click',()=>{
    let img=document.querySelector('.qr-body img');
    if(img!==null){
        let imgAttr=img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAttr);
    }
    else{
        downloadBtn.setAttribute("href",`${document.querySelector('canvas'.toDataURL())}`)
    }
});
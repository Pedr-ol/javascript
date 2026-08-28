const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

//Evento - Gerar QR CODE
function gerenateQrCode() {
  const qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) {
    return;
  }

  qrCodeBtn.innerText = "Gerando QR...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "QR code gerado!";
  });
}

qrCodeBtn.addEventListener("click", () => {
  gerenateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
  if(e.code === "Enter"){
    gerenateQrCode();
  }
});

//Evento - Limpar barra de inserção
qrCodeInput.addEventListener("keyup", () => {
  if(!qrCodeInput.value){
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR Code";
  }
});
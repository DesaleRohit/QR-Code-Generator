const input = document.querySelector('.txt');
const btnEle = document.querySelector('.btn');
const imageEle = document.querySelector('.qr-image');
const imgBox = document.querySelector('.img-box');

btnEle.addEventListener("click", () => {
    const text = input.value.trim();
    if (text !== "") {
        imageEle.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;
        imgBox.classList.add('show-image');
    } else {
        alert("Please enter some text");
    }
});

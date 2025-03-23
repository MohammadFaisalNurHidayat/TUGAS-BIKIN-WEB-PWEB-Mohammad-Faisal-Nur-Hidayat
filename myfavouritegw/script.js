document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById("btnClick");
    let image = document.getElementById("mainImage");
    let text = document.querySelector(".content p"); 

    let isOriginal = true;

    btn.addEventListener("click", function() {
        if (isOriginal) {
            image.src = "images/sigma.jpg";
            text.innerText = "LU SESUDAH BEFORE TEKAN TOMBOL.";
        } else {
            image.src = "images/nerd.jpg";
            text.innerText = "LU SEBELUM BEFORE TEKAN TOMBOL.";
        }
        isOriginal = !isOriginal; 
    });
});

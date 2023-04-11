const sayi1 = document.querySelector("#n1");
const sayi2 = document.querySelector("#n2");
const buton = document.querySelector("#btn");
const sonuc = document.querySelector("#result");

function topla() {    
    if (sayi1.value !== "" && sayi2.value !== "") {
        let toplam = Number(sayi1.value) + Number(sayi2.value);
        sonuc.textContent = toplam;
    } else {
        sonuc.textContent = "Lütfen sayı giriniz!";
    }
}

buton.addEventListener("click",topla);
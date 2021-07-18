const number_random = Math.ceil(Math.random() * 100);           // 1-100 arası rastgele sayı belirlendi
const number_input = document.getElementById("input");          // input elemanı
const check = document.getElementById("check");                 // check butonu
const reset = document.getElementById("reset");                 // reset butonu 
const kontrol = document.getElementById("kontrol");             // Kulanıcının sayı girdikten sonra kontrolü yapılan yer
let attempts = 0;

function guessNumber() {                                        // guessNumber() adında bir fonksiyon oluşturuluyor
    if (number_input.value < 1 || number_input.value > 100) {   // Eğer girilen değer 1 den küçük veya 100 den büyük ise
        window.alert("Just enter numbers between 1-100.");      // Kullanıcıya bu mesaj gönderiliyor
    }else{
        if (number_input.value < number_random) {               // Girilen değer random number dan küçükse
            kontrol.innerText = "Please enter higher number...";// Kontrol kısmının içeriğine bu yazdırılıyor
            attempts++;                                         // Deneme sayısı da 1 arttırılıyor
            document.getElementById("try").innerHTML = attempts;// Deneme sayısı ilgili yere yazdırılıyor
        } else if (number_input.value > number_random) {    
            kontrol.innerText = "Please enter lower number..."; // Girilen değer random number dan büyükse
            attempts++;
            document.getElementById("try").innerHTML = attempts;
        } else if (number_input.value == number_random) {       // Girilen değer random number dan küçükse
            window.alert("CONGRATULATIONS!..");
            attempts++;
            document.getElementById("try").innerHTML = attempts;
        } else {                                                // Yukarıdaki şartların dışında birşey girilmesi durumunda (harf vs)
            window.alert("Just enter numbers between 1-100.");
        }
    }
}

check.addEventListener("click", guessNumber); // Check butonuna tıklandığında guessNumber() fonksiyonu çağırılıyor

reset.addEventListener("click", function () { // Reset butonuna tıklandığında "window.location.reload()" ile sayfa refresh oluyor
    window.location.reload();
})




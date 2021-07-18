// Variables

const btn = document.getElementById("btn");                 // Submit butonu
const prompt_box = document.getElementById("prompt_box");   // Oyun bittikten sonraki ekran
const promt_txt = document.getElementById("promt_txt");     // Oyun bittikten sonraki yazı
const txt = document.getElementById("txt");                 // Kullanıcının girdiği rakama göre onu yönlendiren text
const num = document.getElementById("num");                 // Input area
let chancesTxt = document.getElementById("chancesTxt");     // Kullanıcının kaç hakkı kaldığını gösteren alan

let randomNumber = Math.floor(Math.random() * 100) + 1;     // 1-100 arası(100 dahil) rastgele sayı oluşturma yeri
// console.log(randomNumber);
let number;                                                 // Kullanıcının girdiği değerin atanacağı değişken
let Chances = 10;                                           // Kullanıcının başlangıçta sahip olduğu hak sayısı


// Functions

function checkNum(number) {                                 // checkNum(number) function: Girilen sayıyı random sayı ile kontrol eden function
    if (number == randomNumber) {                           // Eğer girilen sayı random numbera eşitse
      activateBox("Win");                                   // activateBox() function çağır, içine "Win" parameteresini alarak 
    } else if (number > randomNumber) {                     // Eğer girilen sayı random numberdan büyükse
      txt.innerHTML = "Enter Small Number";                 // İlgili alana bunu yazdır
    } else {                                                // Eğer girilen sayı random numberdan küçükse
      txt.innerHTML = "Enter Large Number";                 // İlgili alana bunu yazdır
    }
  }
  
  function activateBox(e) {                                 // activateBox function ne yapar?
    prompt_box.classList.add("active");                     // Oyun bittikten sonra gelen ekranın classına active classı eklenir (display flex ile görünür oldu, background-color: red)
    promt_txt.innerHTML = "You " + e + " The Game";         // Oyun bittikten sonra çıkan yazı kısmına bunu yazdır
    //randomNumber = Math.floor(Math.random() * 100) + 1; 
    prompt_box.style.backgroundColor = "blue";              // Oyun bittikten sonra çıkan ekranın arka plan rengi mavi olsun
  }
  
  function play(e) {                                        // Submit butonu üzerine tıklandığında çağrılan function
    prompt_box.classList.remove("active");                  // Oyun bittikten sonra gelen ekranın classından active classı silindi
    Chances = 10;                                           // Hak sayısı tekrar 10 olarak belirlendi
    txt.innerHTML = "";                                     // Yönlendirme text içeriği silindi
    chancesTxt.innerHTML = "Chances: " + Chances;           // Kalan hak sayısı ekranı güncellendi
  }




chancesTxt.innerHTML = "Chances: " + Chances;               // Kullanıcının Hak saysını ekrana başlangıçta ilgili alanda yazdırdık
//console.log(randomNumber);

btn.addEventListener("click", (e) => {                      // Submit butonuna kullanıcı tıkladığında
  e.preventDefault();                                       // Default fonksiyonunun (submit) çalışmasını engelledik
  //console.log(num.value);
  Chances--;                                                // Kullanıcının kalan hak sayısını 1 azalttık
  chancesTxt.innerHTML = "Chances: " + Chances;             // Ve onu ilgili alanda gösterttik
  if (Chances == 0) {                                       // Eğer kullanıcının kalan hak sayısı 0 ise
    activateBox("Loss");                                    // Loss parametresi ile birlikte activateBox() function çağrıldı ve oyun sonu ekranı görünür oldu
  }
  number = num.value;                                       // Tıklandığı anda input içine girilen değer numbera atandı
  checkNum(number);                                         // Bu number değişkeni checkNum() fonksiyonu ile kontrol edildi
  num.value = "";                                           // Ve kullanıcının tekrar rakam girebilmesi için input içi temizlendi
});



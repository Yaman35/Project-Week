var msg1 = document.getElementById("message1");     // Guess ile Restart butonu arasındaki messages
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");


var answer = Math.floor(Math.random()*100) + 1;     // 1 ile 100 arasında (100 dahil) random sayı üretme
var no_of_guesses = 0;
var tries = 10;
var guessed_nums = [];
var enter = document.getElementById("guess");


 
function play() {
    var user_guess = document.getElementById("guess").value;    // input içerisine yazılan değer
        if (user_guess < 1 || user_guess > 100) {               // Eğer 1 den küçük veya 100 den büyükse 
            alert("Please enter a number between 1 and 100.");  // Bu uyarıyı verir

        }else{
            guessed_nums.push(user_guess);                      // Değilse bu sayıyı guessed_nums dizisine ata
            no_of_guesses += 1;                                 // Tahmin sayısını da 1 arttır

            if(user_guess < answer) {                           // Eğer girilen değer cevaptan küçükse             
                msg1.textContent = "Please enter a higher number...";       // message1 contenti      
                msg2.textContent = "No. of guesses: " + no_of_guesses;      // message2 contenti
                msg3.textContent = "Guessed numbers are: " + guessed_nums;  // message3 contenti
            }
            else if(user_guess > answer) {
                msg1.textContent = "Please enter a lower number...";
                msg2.textContent = "No. of guesses: " + no_of_guesses;
                msg3.textContent = "Guessed numbers are: " + guessed_nums;
            }
            else if(user_guess == answer){
                msg1.textContent = "Congratulations! You win !";
                msg2.textContent = "The number was: " + answer;             // Numaranın değeri
                msg3.textContent = "You guessed it in " + no_of_guesses + " guesses"; // Kaç denemede bilindiği
                document.getElementById("my_btn").disabled = true;          // İşlem sonrası Guess butonu diasbled oluyor
                // stopProgress()
            }

            tries -= 1;             // Yukarıdaki her işlemden sonra deneme sayısını 1 azaltıyor, ilk başta 10 du
        }
        if (tries === 0) {          // Eğer deneme sayısı 0 olursa, yani kullanıcının tahmin sayısı kalmamışsa
            msg1.textContent = "Unfortunately you've exeeded the number of tries";
            msg2.textContent = "The number was: " + answer;
            msg3.textContent = "You've tried to guess it in " + no_of_guesses + " guesses";
            document.getElementById("my_btn").disabled = true;
            }
    }
  
document.getElementById("reset").onclick = function() { // Restart butonuna basıldığında
    location.reload();                                  // Sayfa tekrar yenileniyor
 };

 enter.addEventListener("keyup", function (event) {     // Bu bölüm kullanıcının input değerini "enter" değişkenine atadı
    if (event.code === 'Enter') {                       // Eğer kullanıcının input code 'Enter' ise
      event.preventDefault();                           // Öncelikle bunun default fonksiyonunu engelle
      document.getElementById("my_btn").click();        // Butonun click() fonksiyonunu çağır sanki kullanıcı butona basıyormuş gibi yani
      document.getElementById("guess").value = ""       // Ve her seferinde input içini temizle
    }
  });

  /* enter.addEventListener('keyup', function(event){    Üstteki bölüm bu şekilde de yazılabilirdi
    if(event.keyCode === 13){
        event.preventDefault();
        my_btn.click();
        }  
    })*/


    /* function stopProgress(){                          Bu şekilde kullanımlar da yapabilirdik
    my_btn.disabled = true;
    guess.value = null;
    guess.disabled = true;
    msg1.textContent = no_of_guesses;
    resetbutton.style.visibility = "visible";
    my_btn.style.opacity = 0.7;
    } */

    /* check.addEventListener("click" , () =>{          Güzel Kullanım
    (number.value !== "" ) ? find_number(): alert("Enter a number");
    } ); */
  
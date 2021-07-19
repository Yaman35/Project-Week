const theUl = document.querySelector(".theUl");     // ul listesi
const theBtn = document.querySelector(".theButton");// Add Task button
const inputValue = document.querySelector("#unpit");// input area
// const inputs = document.querySelectorAll(".inputs");
// const lis = document.querySelector(".lis");
const beHappy = document.getElementById("beHappy"); // ul listesinin ilk elemanı
const times = {};                                   // Öncelikle task tarihleri için boş bir object oluşturduk

theBtn.addEventListener("click", function () {      // Add Task butonu üzerine tıklandığında
  const newLi = document.createElement("LI");       // Yeni bir li etiketi yarat ve onu newLi değişkenine ata
  const newContent = document.createTextNode(       // createTextNode içine girilen değeri text olarak newContent atar
    inputValue.value ? inputValue.value : "_Empty Task_" // Burada input içi dolu ise onu değilse "_Empty Task_" içeriğini text olarak newContent değişkenine ata demektir
  );
  
  newLi.classList.add("lis");                       // Bu li etiketinin classına "lis" ekle
  times.time1 = new Date().toString();              // times object içine time1 valuesuna o anki tarihi ekle
  newLi.appendChild(newContent);                    // Oluşturulan li etiketine newContenti child olarak ekle, yani girilen içerik eklenmiş oldu
  theUl.appendChild(newLi);   

  const before = newLi.innerHTML;                   // Bu arada "before" sabitine oluşturulan etiket içeriği eklenmiş oldu      
  inputValue.value = "";                            // input içeriğimizde her seferinde temizlensin diye bu yazıldı


  newLi.addEventListener("mouseenter", () => {      // Mouse ile oluşturulan li etiketi üzerine gelindiğinde 
    newLi.textContent = "Added on: " + times.time1.substr(4, 12); // İçerik olarak times objectinin time1 elemanının index[4] ile index[12] arası alınsın (12 dahil değil)
  });
  newLi.addEventListener("mouseout", previous);       // Mouse üzerinden çekildiğinde ise previous() fonskiyonu çağrılsın



  newLi.addEventListener('click',()=>{              // Oluşturulan li etiketi üzerine tıklandığında ise
    newLi.innerHTML = 'Task is done!';              // İçeriğine bu yazılsın
    
    newLi.addEventListener('mouseout',()=>{         // Ve kullanıcı bundan sonra da mouseu task üzerinden çektiğinde 
      removeFadeOut( newLi,1000 )                  // removeFadeOut() function çağrılsın, (ne yaptığı aşağıda)
    })
    newLi.removeEventListener("mouseout", Delete)   // Ve ilgili li etiketinin previous() fonskiyonuda silinsin
  }
  )
  function previous () {                            // Ne yapıyor previous() fonskiyonu
    newLi.innerHTML = before;                       // Li etiketinin içeriğini önceki değerine geri döndürüyor (yukarıda atamıştık)
  }
});  

const beforeHappy = beHappy.innerHTML;              // ul listesinin ilk elemanının içeriğini "beforeHappy" değişkeninde tuttuk

beHappy.addEventListener("mouseenter", () => {      // Bu ilk eleman üzerine geldiğimizde 
  beHappy.textContent = "__Always__";               // İçerik bu olsun
});
beHappy.addEventListener("mouseout", () => {        // Mouse üzerinden çekildiğinde de 
  beHappy.textContent = beforeHappy;                // İçerik ilk haline dönsün
});


function removeFadeOut( el, speed ) {               // removeFadeOut() function ne yapar? İki parametre alır, el hangi etikete işlem yapılacağını gösterir, speed işlem hızını
  var seconds = speed/1000;                         // seconds değişkenine ikinci parametrenin 1000e bölüm sonucu atanır
  el.style.transition = "opacity "+seconds+"s ease";// Bu elemanın transition değerini, stilini,transitionun etki edecek özelliğini belirledik
  el.style.opacity = 0;                             // opcaity değerini sıfırla yani kaybet
  setTimeout(function() {                           // setTimeout() fonksiyonunu çağırır, peki ne yapar?
      el.parentNode.removeChild(el);                // elemanın parentinin çocuklarından o elemanı çıkarır, eğer parantez içine (el) yazılmazsa o eleman evet kayboluyor lakin çocuklarından silinmediği için orada yeri boşluk olarak kalıyor !!!
  }, speed);                                        // En son olarak da bu fonksiyon parametresi içine speed değerini de atadık ki hemen kaybolmasın, yavaş yavaş kaybolsun 
}
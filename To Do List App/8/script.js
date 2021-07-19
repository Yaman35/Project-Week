window.onload = () => add_text.autofocus ;              // Sayfayı açar açmaz cursor input text içinde olsun demektir

const add_text = document.getElementById("add_text");   // Input
const add_btn = document.getElementById("add_btn");     // Add button
const list = document.getElementsByClassName("todo");   // Yukarıdaki ikisini barındıran div



add_btn.addEventListener("click", function () {         // Add butonuna basıldığında
    if (add_text.value=="") {                           // Eğer input içi boşsa 
        alert("Please enter a task!")                   // Kullanıcıya bu uyarıyı verdir
    }else{                                              // Dolu ise
    
    const div = document.createElement("div");          // Öncelikle bir div yarat ve onu div değişkenine ata
    div.className="todo";                               // Bu divin classı "todo" olsun, .todo style uygulansın
    // Yukarıdaki satırı div.setAttribute("class", "todo") şeklinde de yazabilirdik

    div.style.marginLeft = "30%";                       // Bunun margin-left bu olsun
    div.style.marginBottom = "2%";                      // Yeni oluşturulan task ve çöğ kutusunun içinde bulunduğu divler arası mesafe
    
    div.id="div_list";                                  // Bu div id si de "div_list" olsun
    // Yukarıdaki satırı div.setAttribute("id", "div_list") şeklinde de yazabilirdik

    const check_box = document.createElement("input");  // Şimdi bu oluşturulan div içine öncelikle check_box değişkenine atadığımız bir input oluşturduk
    check_box.setAttribute("type", "checkbox");         // Ve haliyle bu inputun type checkbox olsun
    check_box.style.cursor = "pointer";                 // Üzerine gelindiğinde mouse el işareti olsun
    check_box.style.width= "30px";                      // Genişliği 30px olsun
    check_box.style.height= "30px";                     // Yüksekliği 30px olsun
    check_box.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px";// Bir de box shadow verdik
    
    
    const label = document.createElement("label");      // label değişkenine atadığımız bir label oluşturuyoruz
    label.textContent =add_text.value;                  // Ve bu labelin içeriğine(textContent) input içerisinden gelen değer yazılsın
    label.className= "add_text";                        // Bu labelın classname add_text olsun ki yukarıdaki inputa uygulanan style buna da uygulansın
    
    label.addEventListener("mouseover", function(){     // Bu yeni oluşturulan task içeriğinin üzerine gelindiğinde mouse ile
        label.style.cursor="pointer";                   // Mouse üzerine geldiğinde el işareti olsun
        label.style.opacity="0.6px";                    // Opaklık değeri bu olsun
    })

    /label.addEventListener("click", function(){        // label üzerine tıklandığında check_box checked olsun
        check_box.checked  }) 


    const trash = document.createElement("i");          // Aynı şekilde bir icon oluşturulsun ve trash değişkenine atansın
    trash.setAttribute("className","far fa-trash-alt"); // Bu iconun class ı "far fa-trash-alt" bu olsun
    trash.className ="far fa-trash-alt";                // Burayı yazmazsak çöp kutusu ilgili yerde gözükmüyor
    trash.id="trash";                                   // id si de "trash" olsun
   
    
    
    document.body.appendChild(div);                     // Ve en son olarak bu oluşturulan div body e child olarak eklensin
    div.appendChild(check_box);                         // checkbox dive
    div.appendChild(label);                             // label dive
    div.appendChild(trash);                             // ve icon(çöp kutusu) dive child olarak eklensin


    check_box.addEventListener("click", function(){     // checkbox üzerine tıklandığında
        check_box.checked ? label.className= "checked" : label.className ="add_text";  // (Checkbox üzerine tıklandığında label üzeri çizilmesi için)
        // Eğer checkbox checked ise ki yukarıda öyle, o zaman labela checked classını uygula ki style onun gibi olsun
        // Değilse label add_text class style uygulansın
    })

    trash.addEventListener("click", function(){         // Çöp kutusuna tıklandığında ise
        div.remove();                                   // Komple o div sil
        add_text.value ="";                             // Ve input içindeki değer tekrar boş olsun
    })

 
}
})

add_text.addEventListener("click", function(){
    add_text.value="";
})

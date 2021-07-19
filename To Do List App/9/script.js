const text = document.getElementById("text")    // input area
const plus = document.getElementById("plus")    // plus button
const ul = document.getElementById("ul")        // tasklerin ekleneceği ul listesi
const clear = document.getElementById("clearall") // Clear all button
var pending = 0                                   // Task sayısını tutan değişken

plus.addEventListener("click", function (event) {               // + butonuna her basıldığında
    if (!text.value){                                           // Eğer input içi boşsa
        alert("Enter your task")                                // Bu uyarıyı yazdır
    }else{                                                      // Değilse
    //event.preventDefault();

    const span = document.getElementById("span")                // span etiketi (task) sayısının gösterildiği yer
    const div = document.createElement("div");                  // Bir adet div oluştur ve onu div değişkenine at
    const li = document.createElement("li");                    // Bir adet li oluştur ve onu li değişkenine at
    const completedButton = document.createElement("button")    // Bir adet button oluştur ve onu completedButton değişkenine at
    const trash = document.createElement("button")              // Bir adet button oluştur ve onu trash değişkenine at
    
    // Oluşturulan bu elemanlar için css de işlem yapılabilmesi adına class larını belirliyoruz !!!

    completedButton.classList.add("completed-btn")              // Oluşturulan tick butonunun classına "completed-btn" attık                      
    trash.classList.add("trash-btn")                            // Oluşturulan çöp kutusu butonunun classına "trash-btn" attık                      
    div.classList.add("task");                                  // Oluşturulan div in classına "task" attık
    li.classList.add("tasks");                                  // Oluşturulan li etiketlerinin classına "tasks" attık
    
    completedButton.innerHTML ="<i class='fas fa-check'></i>"   // Oluşturulan tick butonunun içeriğine "✓" yazdırmış olduk
    trash.innerHTML = "<i class='fas fa-trash'></i>";           // Oluşturulan çöp kutusu butonunun içeriğine de "🗑️" yazdırmış olduk
    li.innerText = text.value;                                  // Oluşturulan li etiketi içeriğine, input içine yazılan değeri atamış olduk
    
    // Bütün bu oluşturulan etiketleri div child olarak ekliyoruz

    div.appendChild(li);                                        // li etiketi div e child olarak eklendi          
    div.appendChild(completedButton)                            // "✓" butonu div e child olarak eklendi 
    div.appendChild(trash)                                      // "🗑️" butonu div e child olarak eklendi 
    ul.appendChild(div);                                        // En son olarak bu div ul ye child olarak eklenmiş oldu
    
    pending++;                                                  // Sonuçta da pending task sayısını 1 arttırdık
    span.innerText = pending;                                   // Ve onu da ilgili yere (span içeriği)yazdırdık
    text.value = "";                                            // Input area içeriğini temizlemeyi unutmadık
}})

// Aşağıdaki kullanım güzel bir kullanım 

ul.addEventListener("click", function(e){                       // ul listesi üzerine tıklandığında
    const item = e.target;                                      // tıklama hedefini "item" değişkenine atadık
    if (item.className==="trash-btn"){                          // Eğer hedef çöp kutusu ise
        const todo = item.parentElement;                        // "todo" değişkenine çöp kutusunun parentını (yani oluşturulan div) atamış olduk
        todo.classList.toggle("trushed");                       // "todo" değişkeninin classına "trushed" classını da ekledik, yani artık .trushed style da uygulanacak                
        todo.addEventListener("transitionend",function(){       // "transitionend" eventı bir transition tammalandığında olacak olan olayı betimler
            todo.remove();                                      // transition işlemi tamamlandığında "todo" silinir ( yani item.parentElement)
        });
        pending--;                                              // Eee silindikten sonra haliyle pending 1 azaltılır
        span.innerText = pending;                               // Ve güncel değeri ilgili yere tekrar yazdırılır
    };
    if (item.className==="completed-btn"){                      // tıklama hedefin "✓" butonu ise
        const todo = item.parentElement;                        // Bunun parent elemanını (yani oluşturulan div) "todo" değişkenine atadık
        todo.classList.toggle("completed")                      // "todo" değişkeninin classına "completed" classını da ekledik , yani artık .completed style da uygulanacak                
    };
})

clear.addEventListener("click", function(){                     // Clear All butonuna tıklandığında
    if (confirm("Are you sure?")){                              // Kullanıcıya confirm uyarısı (OK-CANCEL) çıkıyor, Burada OK ise yani true ( Cancel dan false gelir)
        window.location.reload();                               // Sayfa tekrar yenileniyor
    }
})

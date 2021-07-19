const input = document.querySelector("#section1--task");        // input area
const addButton = document.getElementById("section1--button");  // Add Task button
const time = document.querySelector("#heading--time");          // Tarih alanı
const hour = document.querySelector("#heading--hour");          // Saat alanı
const section2 = document.querySelector("#section2");           // Görevlerin yazılacağı section

setInterval(times, 1000);                               // Zaman aralıklarını 1000ms (1sn) olarak belirledik, zaman 1 er sn arayla artıyor                 

function times() {
    let today = new Date().toLocaleString();            // "today" değişkenine tarih üreterek attık, bu tarih ve saat birllikte gelir
    time.innerText = today.substr(0,10);                // Bu kısımla sadece tarih kısmını aldık, onu da saat değişkenine atadık
    hour.innerText = today.substr(10)                   // Bu kısımla da sonrası olan saat kısmın aldık, onu da hour değişkenine atadık
}


addButton.addEventListener("click", function () {       // Add Tash butonuna basıldığında aşağıdaki fonksiyon gerçekleştirilecektir


    if (input.value == "") {                            // Eğer input içi boş ise
        alert("You should write a Task to add!!!");     // Kullanıcıya bu uyarıyı ver, buraya sadece "return" yazarak da input alanı boş iken,kullanıcının Add Task butonuna bastığında birşey yapamamasını sağlayabilirdik
    } else {                                            // Eğer dolu ise 

        const div = document.createElement("div");      // Yeni bir div oluşturuyoruz ve onu yine "div" adında bir değişkene atıyoruz
        div.style.display = "flex";                     // Buradan sonrası oluşturulan yeni div style özelliikleri
        div.style.alignItems = "center";                // Burayı şu şekilde de yapabilirdik, hepsini böyle div.style yazmak yerine,
        div.style.justifyContent = "space-between";     // Divi oluşturduktan sonra, div.classList.add("div-style") şeklinde yazarak bunun classını atardık
        div.style.minWidth = "90%"                      // .css dosyasında da bu yanda yazan style özelliklerini eklerdik
        div.style.margin = "2%"                         // Böylelikle div oluşturulur oluşturulmaz ilgili class atanmış ve style uygulanmış olurdu
        div.style.border = "2px solid black";
        div.style.backgroundColor = "lightblue";
        div.style.borderRadius = "10px";

        const checkbox = document.createElement("input");// Bir adet input oluşturduk ve "checkbox" değişkenine atadık
        checkbox.setAttribute("type", "checkbox");       // Halihazırda bu inputun type da checkbox yaptık
        checkbox.style.marginLeft = "2%";                // Bu checkbox style özelliklerini verdik
        checkbox.style.minWidth = "1.5rem";
        checkbox.style.minHeight = "1.5rem";

        const tasks = document.createElement("h3");     // Bir adet h3 etiketi oluşturduk ve onu "tasks" adında bir değişkene atadık
        tasks.innerText = input.value;                  // Takiben bu değişkenin içeriğine (innerText), input içinden gelen değeri atadık
        tasks.style.cursor = "pointer";                 // Kullanıcı üzerine gelidğinde mouse işaretini değiştirdik
        //input.value = ""
        
        const trashbin = document.createElement("i");   // Bir adet icon oluşturduk ve bunu "trashbin" değişkenine atadık
        trashbin.setAttribute("class", "fas fa-trash"); // Bu iconun classını "fas fa-trash" yaparak çöp kutusu iconu haline getirdik
        trashbin.style.marginRight = "2%";              // Sağ taraftan mesafesini ayarladık 
        trashbin.style.fontSize = "1.5rem"              // Yine aynı şekilde boyutunu ayarladık 

        // Şimdi bütün bu yukarıda oluşturduğumuz elemanları şu anda içi boş olan section2 ye child olarak ekliyoruz

        div.appendChild(checkbox);                      // checkbox div child olarak eklendi
        div.appendChild(tasks);                         // h3 div child olarak eklendi
        div.appendChild(trashbin);                      // trashbin iconu div child olarak eklendi
        section2.appendChild(div);                      // Bunları barındıran div ise section2 child olarak eklendi          
        
        section2.style.display = "flex";                // section2 ye style özelliği vererek eklenen child ların alt alta eklenmesini sağladık     
        section2.style.flexDirection = "column";        // !!! Yazmasaydık da olurdu, çünkü eklenen her bir child div ve block element olduğu için zaten alt alta yazar !!!
        section2.style.justifyContent = "flex-start";

        checkbox.addEventListener("click", () => {      // checkbox input üzerine tıklandığında
            checkbox.checked ? tasks.className = "checked" : tasks.className = "tasks"
            // Eğer checked ise class "checked" olur ve o style uygulanır
            // Eğer unchecked ise class "tasks" olur ve o style uygulanır
        });

        trashbin.addEventListener("click", () => {      // Çöp kutusu iconunun üzerine tıklandığında
            const confirmation = confirm("Do you want to delete this task?"); // Kullanıcıya bir confirmation uyarısı çıkar
            confirmation ? div.remove() : null;         // Eğer OK(true) ise ilgili div silinir, aksi takdirde birşey yapmaz
        })

    }
})

addButton.addEventListener("click", () => input.value = ""); // Kullanıcı her yeni task eklediğinde input içi temizlenir
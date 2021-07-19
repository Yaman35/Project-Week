const clear = document.querySelector(".clear");     // Refresh butonunun olduğu div
const dateElement = document.getElementById("date");// Tarihin içinde bulunduğu div
const list = document.getElementById("list");       // Yeni oluşturulan li lerin içinde bulunduğu div
const input = document.getElementById("input");     // Kullanıcının veri girişi yaptığı input

// const vaariables
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_THROUGH = "lineThrough";

let LIST = [],                                      // LIST adında boş bir liste oluşturduk
id = 0;                                             // ?????

const options = { weekday: "long", month: "short", day: "numeric" }; // Object Gösterim, changeable
const today = new Date();                                            // today değişkenine yeni bir gün oşturup atadık
dateElement.innerHTML = today.toLocaleDateString("en-US", options);  // Takiben HTML de tarih kısmının bulunduğu alanın içeriğine bu değişkeni toLocaleDateString methoduna uygun olacak şekilde yazdırdık

function addToDo(toDo, id, done, trash) {
  if(trash){ return; }

  let DONE = done ? CHECK : UNCHECK;                        // ????????????????????????????????????????????
  let LINE = done ? LINE_THROUGH : "";
  const item = `<li class="item">
                  <i class="far ${DONE} co" job="complete" id="${id}"></i>
                  <p class="text ${LINE}">${toDo}</p>
                  <i class="far fa-trash-alt de" job="delete" id="${id}"></i>
                </li>`;
  const position = "beforeend";
  
  list.insertAdjacentHTML(position, item);
}

// addToDo("Drink Coffee");

document.addEventListener("keyup", function (event){
  if (event.keycode === 13) {
    const toDo = input.value;
    if(toDo){
      addToDo(toDo, id, false, false);

      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false
      });
      id++;
    }
    input.value = "";
  }
});

// addToDo("Coffee", 1, false, false);


function completeToDo(element) {

  // console.log("1111");
  // console.log("completeToDo functıon: element: ", element);
  
  element.classList.replace(UNCHECK, CHECK);
  // element.classList.remove(CHECK);
  element.parentNode.querySelector(".text").classList.add(LINE_THROUGH);
  
  LIST[element.id].done = LIST[element.id].done ? false: true;
}

function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash = true;
}

list.addEventListener("click", function(event){
  let element = event.target;  //return the clicked element inside list
   console.log("element: ", element)
  
  const elementJob = event.target.attributes.job.value; // delete or complete
  // console.log("elementJob: ", elementJob)

  // const elementJob = "complete";

  if(elementJob == "complete"){
    completeToDo(element);
  }
  else if(elementJob == "delete"){
    removeToDo(element);
  }
});


document.getElementById("plus").addEventListener("click", add1);

function add1() {
  // console.log("artı test...");
  const toDo = input.value;
  if(toDo){
    addToDo(toDo, id, false, false);

    LIST.push({
      name: toDo,
      id: id,
      done: false,
      trash: false
    });
    id++;
  }
  input.value = "";
}

clear.addEventListener("click", function(){     // Refresh butonuna basıldığında tüm sayfa yeniler
  location.reload();
});


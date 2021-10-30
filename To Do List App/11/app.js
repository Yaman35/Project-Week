const addForm = document.querySelector('.add');
const list = document.querySelector('.todolist');
const comItem = document.querySelector('.complete');
const clearAll = document.querySelector('.clearall');

const generateListe = todo => {
  const html = `
  <li class="list-item"><i class="fas fa-clipboard-check complete"></i>
  <span>${todo}</span><i class="fas fa-trash-alt delete"></i></li>`;
  list.innerHTML += html;
};

list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

clearAll.addEventListener('click', e => {
  if (e.target.classList.contains('clearall')) {
    if (confirm('Hepsini siliyorum emin misin?')) list.innerHTML = '';
  }
});

list.addEventListener('click', e => {
  if (e.target.classList.contains('complete')) {
    if (e.target.parentElement.style.textDecoration != 'line-through') e.target.parentElement.style.textDecoration = 'line-through';
    else e.target.parentElement.style.textDecoration = 'none';
  }
});

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateListe(todo);
    addForm.reset();
  }
});

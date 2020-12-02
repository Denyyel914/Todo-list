
const formInput = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const prioItems = document.querySelector('#prio-items');
const button = document.querySelector('.delete');
const formValue = document.querySelector('#item');
const error = document.querySelector('#error');
const select = document.querySelector('#select');




  

formInput.addEventListener('submit', submitItem);


function submitItem(e) {
  e.preventDefault();
  if(formValue.value == '') {
    alertShow('Please input valid fields', 'alert alert-danger');
    setTimeout(() => error.remove(), 3000);
  } else {
    if(select.value == 'Priority task') {
      const btnCreate = document.createElement('button');
      btnCreate.className = 'btn btn-danger btn-sm float-right delete';
      const btnValue = document.createTextNode('X');
      btnCreate.appendChild(btnValue);
      // console.log(btnCreate);
      // console.log(formValue);
      const li = document.createElement('li');
      li.className = 'list-group-item';
      const liValue = document.createTextNode(formValue.value);
      li.appendChild(liValue);
      li.appendChild(btnCreate);
      prioItems.appendChild(li);
      formValue.value = '';
    } else {
      const btnCreate = document.createElement('button');
      btnCreate.className = 'btn btn-danger btn-sm float-right delete';
      const btnValue = document.createTextNode('X');
      btnCreate.appendChild(btnValue);
      // console.log(btnCreate);
      // console.log(formValue);
      const li = document.createElement('li');
      li.className = 'list-group-item';
      const liValue = document.createTextNode(formValue.value);
      li.appendChild(liValue);
      li.appendChild(btnCreate);
      itemList.appendChild(li);
      formValue.value = '';
    }
  }
}

itemList.addEventListener('click', deleteItem);
itemList.addEventListener('click', checkTask);

function checkTask(e) {
  if(e.target.classList.contains('list-group-item')) {
      e.target.style.backgroundColor = "#dff0d8";
      e.target.style.textDecoration = "line-through";
  }
}

function deleteItem(e) {

 if(e.target.classList.contains('btn')) {
   if(confirm('Are you Sure')) {
    e.target.parentElement.style.display = "none";
   } else {
     console.log(1);
   }
 }
}

function alertShow(message, className) {
  error.className = className;
  error.appendChild(document.createTextNode(message));
  // setTimeout(() => document.querySelector('.alert').remove(), 3000);
}





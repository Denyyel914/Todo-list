// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');

// // Form submit event
// form.addEventListener('submit', addItem);
// // Delete event
// itemList.addEventListener('click', removeItem);
// // Filter event
// filter.addEventListener('keyup', filterItems);

// // Add item
// function addItem(e){
//   e.preventDefault();

//   // Get input value
//   var newItem = document.getElementById('item').value;

//   // Create new li element
//   var li = document.createElement('li');
//   // Add class
//   li.className = 'list-group-item';
//   // Add text node with input value
//   li.appendChild(document.createTextNode(newItem));

//   // Create del button element
//   var deleteBtn = document.createElement('button');

//   // Add classes to del button
//   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//   // Append text node
//   deleteBtn.appendChild(document.createTextNode('X'));

//   // Append button to li
//   li.appendChild(deleteBtn);

//   // Append li to list
//   itemList.appendChild(li);
// }

// // Remove item
// function removeItem(e){
//   if(e.target.classList.contains('delete')){
//     if(confirm('Are You Sure?')){
//       var li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }

// // Filter Items
// function filterItems(e){
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName('li');
//   // Convert to an array
//   Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }



// const submitItem = document.querySelector('#addForm');
// const itemList = document.querySelector('#items');


// submitItem.addEventListener('submit', getItem);

// function getItem(e) {
//   e.preventDefault();
//   const inputValue = document.getElementById('item').value;
//   const li = document.createElement('li');
//   li.classList.add('list-group-item');
//   // li.className = 'list-group-item';
//   const liValue = document.createTextNode(inputValue);
//   li.appendChild(liValue);
//   itemList.appendChild(li);
// }





const formInput = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const prioItems = document.querySelector('#prio-items');
const button = document.querySelector('.delete');
const formValue = document.querySelector('#item');
const error = document.querySelector('#error');
const select = document.querySelector('#select');




  

formInput.addEventListener('submit', submitItem);

// function submitItem(e) {
//   e.preventDefault();
//   if(select.value == 'Priority task') {
//     console.log(formValue.value);
//   }
//   if(formValue.value == '') {
//     error.innerHTML = "Please put valid inputs";
//     error.style.color = "red";
//     setTimeout(() => error.remove(), 3000);
//   } else {
//     const btnCreate = document.createElement('button');
//     btnCreate.className = 'btn btn-danger btn-sm float-right delete';
//     const btnValue = document.createTextNode('X');
//     btnCreate.appendChild(btnValue);
//     // console.log(btnCreate);
//     // console.log(formValue);
//     const li = document.createElement('li');
//     li.className = 'list-group-item';
//     const liValue = document.createTextNode(formValue.value);
//     li.appendChild(liValue);
//     li.appendChild(btnCreate);
//     itemList.appendChild(li);
//   }
// }

// function submitItem(e) {
//   e.preventDefault();
//   if(formValue.value == '') {
//     error.innerHTML = "Please put valid inputs";
//     error.style.color = "red";
//     setTimeout(() => error.remove(), 3000);
//   } 
//     if(select.value == 'Priority task') {
//       const btnCreate = document.createElement('button');
//       btnCreate.className = 'btn btn-danger btn-sm float-right delete';
//       const btnValue = document.createTextNode('X');
//       btnCreate.appendChild(btnValue);
//       // console.log(btnCreate);
//       // console.log(formValue);
//       const li = document.createElement('li');
//       li.className = 'list-group-item';
//       const liValue = document.createTextNode(formValue.value);
//       li.appendChild(liValue);
//       li.appendChild(btnCreate);
//       prioItems.appendChild(li);
//       formValue.value = '';
//     } else {  
//       const btnCreate = document.createElement('button');
//       btnCreate.className = 'btn btn-danger btn-sm float-right delete';
//       const btnValue = document.createTextNode('X');
//       btnCreate.appendChild(btnValue);
//       // console.log(btnCreate);
//       // console.log(formValue);
//       const li = document.createElement('li');
//       li.className = 'list-group-item';
//       const liValue = document.createTextNode(formValue.value);
//       li.appendChild(liValue);
//       li.appendChild(btnCreate);
//       itemList.appendChild(li);
//       formValue.value = '';
//     }
// }

function submitItem(e) {
  e.preventDefault();
  if(formValue.value == '') {
    error.innerHTML = "Please put valid inputs";
    error.style.color = "red";
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

function deleteItem(e) {
  // if(e.target.classList.contains('btn')) {
  //   e.target.parentElement.style.display = "none";
  // } else {
  //   console.log(2);
  // }
 if(e.target.classList.contains('btn')) {
   if(confirm('Are you Sure')) {
    e.target.parentElement.style.display = "none";
   } else {
     console.log(1);
   }
 }
}


// var dataHere = document.getElementById('data-here');
// var test = {
//   item1: {
//     data: "data 1",
//     data2: "data 2",
//     data3: "data 23"
//   }, 
//   item2: {
//     data: "data 3",
//     data2: "data 4",
//     data3: "data 55"
//   },
//   item3: {
//     data: "data 10",
//     data2: "data 8",
//     data3: "data 213"
//   }
// };


// for(x in test) {
//   for(a in test[x]) {
//     console.log(test[x][a]);
//     dataHere.innerHTML += '<h1>'+ test[x][a]+'</h1>';
//   }
// }

// for(x in test) {
//   for(a in test[x]) {
//     console.log(test[x][a]);
//     dataHere.innerHTML += test[x][a];
//   }
// }

// for(x in test) {
//   console.log(test[x].data3);
//   dataHere.innerHTML = `<h1>${test[x].date3}</h1>`;
// }
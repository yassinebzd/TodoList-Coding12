// var form = document.getElementsByTagName('form');
// var ul = document.getElementById('list');
// var inputTask = document.getElementById('input-task');
// var error = document.getElementsByTagName('span');

// var addTask = () => {
//   if(inputTask.value != ""){
//     var newLi = document.createElement('li');
//     newLi.classList.add('newLi','todo','p-x','p-y');
//     newLi.innerHTML = `<div class='row'><div class='col-sm-12'><div class='row'><div class='col-sm-9'><input type="text" class="display-none p-x" value="`+inputTask.value +`"><span class="p-x">`+ inputTask.value + `</span></div> <div class='col-sm-3'><button type='button' class='btn btn-danger'><i class='fas fa-trash'></i></button><button type='button' class='btn btn-warning'><i class='fas fa-pen'></i></button> <button type='button' class='btn btn-success'><i class='fas fa-check'></i></button></div></div></div></div>`;
//     ul.prepend(newLi);
//     inputTask.value = "";

    
//     var btnCheck = newLi.querySelector('.fa-check').parentElement;
//     btnCheck.addEventListener('click',() => taskChecked(event.currentTarget));
    
//     var btnTrash = newLi.querySelector('.fa-trash').parentElement;
//     btnTrash.addEventListener('click',() => taskTrashed(event.currentTarget));
    
//     var btnEdit = newLi.querySelector('.fa-pen').parentElement;
//     btnEdit.addEventListener('click',() => taskEdited(event.currentTarget));
//     error[0].classList.add('display-none');
//   }
//   else{
//     error[0].classList.remove('display-none');
//   }
// };
// var taskEdited = (btn) => {
//   var inputInTask = btn.parentElement.previousElementSibling.children[0];
//   var spanInTask = btn.parentElement.previousElementSibling.children[1];
//   if(inputInTask.value != ""){

//     inputInTask.classList.toggle('display-none');
//     spanInTask.classList.toggle('display-none');
//     inputInTask.focus();
    
//     btn.firstElementChild.classList.toggle('fa-pen');
//     btn.firstElementChild.classList.toggle('fa-save');
    
//     btn.classList.toggle('btn-warning');
//     btn.classList.toggle('btn-success');
//     spanInTask.innerHTML = inputInTask.value;
//     var lesButtons = Array.from(document.querySelectorAll('button'));
//     lesButtons.forEach(button => {
//       if(button.style.visibility == "hidden"){
//         button.style.visibility = "visible";
        
//         lesButtons[0].disabled = false;
//       }else{
//         button.style.visibility="hidden";
//         lesButtons[0].style.visibility="visible";
//         lesButtons[0].disabled = true;
//         btn.style.visibility = "visible";
//       }
      
//     });
//   }
//   };
  
//   var taskChecked = (btn) => {
//     if (btn.closest('.newLi').classList.contains('todo') || btn.closest('.newLi').classList.contains('deleted') ) {
//     btn.closest('.newLi').classList.remove('todo');
//     btn.closest('.newLi').classList.remove('deleted');
//     btn.closest('.newLi').classList.add('done');
//   }else{
//     btn.closest('.newLi').classList.add('todo');
//     btn.closest('.newLi').classList.remove('done');
//   } 
// };
// var taskTrashed = (btn) => {
//   if (btn.closest('.newLi').classList.contains('todo') || btn.closest('.newLi').classList.contains('done') ) {
//     btn.closest('.newLi').classList.remove('todo')
//     btn.closest('.newLi').classList.remove('done')
//     btn.closest('.newLi').classList.add('deleted')
//   }else{
//     btn.closest('.newLi').classList.add('todo')
//     btn.closest('.newLi').classList.remove('deleted')
//   } 
// };
// form[0].addEventListener('submit',()=>{
//   event.preventDefault();
//   addTask()
// });



let body = document.querySelector("body")
let input1 = document.getElementsByClassName("form-control")[0]
// LE  BOUTTON AJOUTER
let buttonAjouter = document.getElementsByClassName("btn")[0]
// les 4 BOUTTONS
let buttonTodo = document.getElementsByClassName("btn")[1]
let buttonDone = document.getElementsByClassName("btn")[2]
let buttonDeleted = document.getElementsByClassName("btn")[3]
let buttonAll = document.getElementsByClassName("btn")[4]
let boxBody = document.getElementsByClassName("box-body")[0]
let ul = document.getElementById("list all")
 boxBody.appendChild(ul)
 buttonDone.addEventListener("click", () => {
})
 buttonTodo.addEventListener("click", () => {
})
 buttonAjouter.setAttribute("type", "button")
 buttonAjouter.addEventListener("click", () =>{
  if (input1.value != "") {
    let li =  document.createElement("li")                              
    li.innerText = input1.value
    ul.appendChild(li)
    li.style.width = "1040px"
    li.style.height = "67px"
    li.style.backgroundColor = "lightgray"
    li.style.borderRadius =  "1%"
// Icones pour les bouttons
let iconButton = document.createElement("button")             
  iconButton.setAttribute("class", "fas fa-check-circle")
  iconButton.style.backgroundColor = "lightgray"
  iconButton.style.border = "none"
  iconButton.style.color = "blue"
  iconButton.style.marginLeft = "870px"
let iconButton2 = document.createElement("button")
  iconButton2.setAttribute("class", "fas fa-trash-alt")
  iconButton2.style.backgroundColor = "lightgray"
  iconButton2.style.border = "none"
  iconButton2.style.color = "yellow"
  iconButton2.addEventListener("click", () => {  
    li.remove()
  })
let iconButton3 = document.createElement("button")
  iconButton3.setAttribute("class", "fas fa-edit")
  iconButton3.style.backgroundColor = "lightgray"
  iconButton3.style.border = "none"
  iconButton3.style.color = "red"
  li.style.display = "flex"
  li.style.alignItems = "center"
  iconButton.addEventListener ("click", ()=> {
    li.style.backgroundColor = "green"
    iconButton3.style.backgroundColor = "green"
    iconButton.style.backgroundColor = "green"
    iconButton2.style.backgroundColor = "green"
  })
let li22 = document.createElement("li")
let setValue = document.createElement("li")
let input2 = document.createElement("input")
  iconButton3.addEventListener ("click", ()=> {
    li.removeChild(iconButton2)
    li.removeChild(iconButton3)
    li.removeChild(iconButton)
      // Icon pour la sauvegarde
let iconButton4 = document.createElement("button")
  iconButton4.setAttribute("class", "fas fa-save")
  iconButton4.style.backgroundColor = "lightgray"
  iconButton4.style.border = "none"
  iconButton4.style.color = "red"
  iconButton4.style.marginLeft = "770px"
    li.appendChild(iconButton4)
    li.appendChild(input2)
      //  événement sur la sauvegarde
  iconButton4.addEventListener("click", () => {
    li.innerText = input2.value
    li.append(iconButton, iconButton2, iconButton3)
    })
    })
    li.append(iconButton, iconButton2, iconButton3)
    buttonAll.addEventListener("click", () => {
      li.remove()
    })
  } else {
    // let span = document.getElementsByClassName("error")
    // span.setAttribute("class", " display-block")
    console.log("yes")
  }
  })







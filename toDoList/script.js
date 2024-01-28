

let getTheInput = document.querySelector('.writeTask');
let getTheBtn = document.querySelector('.addTheTask');
let getThePlaceForTask = document.querySelector('.placeForTaks');
let taskComlete = document.querySelector('.num1');
let taskRemove = document.querySelector('.num');
counterComplte = 0 ;
counterRemove = 0 ;

getTheBtn.onclick = function(){
    newTask();
    coutnerIn();
 
    



}

function newTask(){
    if (getTheInput.value !== ' ') {
        //create delete button 
        let delet = document.createElement('span');
        let textForDelet = document.createTextNode('Delete');
        delet.classList.add('forDelete');
        delet.appendChild(textForDelet);
        // create a element and add him class:
        let firstElement = document.createElement('div');
        firstElement.classList.add('back');
        let textForElement = document.createTextNode(getTheInput.value);
        firstElement.appendChild(textForElement);
        firstElement.appendChild(delet);
        
        //function for remove element 
        delet.onclick = function(){
            firstElement.remove();
            coutnerRe()
            
        }
 
 
        getThePlaceForTask.appendChild(firstElement);
        getTheInput.focus();
        getTheInput.value = ' ';
       
     }
       
}
function coutnerIn(){

    counterComplte++;
    taskComlete.textContent = counterComplte;

}

function coutnerRe(){

    counterRemove++;
    taskRemove.textContent = counterRemove;

}


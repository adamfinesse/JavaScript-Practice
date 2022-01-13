let table = document.getElementById('bagua-table');

/* your code */
// https://javascript.info/task/edit-td-click
// took css from my.css solution since I have not learned it yet
// my solution only used editControls which could be good or bad not sure yet

let textArea;
let oldTd;
let okButton;
let okCancel;
let tdCoords;

table.addEventListener('click',editCell);

function editCell(event){
    let td = event.target.closest('td');

    if(!td) return;
    if(textArea) return;

    oldTd = td;
    createTextArea();
}

function createTextArea(){
    if(textArea) return;
    
    textArea = document.createElement('textarea');

    textArea.style.overflow = "hidden";
    textArea.style.resize = "none";
    textArea.style.border = 'none'; // these could easily be in a css class
    textArea.style.outline = 'none';

    tdCoords = oldTd.getBoundingClientRect();

    oldTd.replaceWith(textArea);
    textArea.style.top = tdCoords.top + "px";
    textArea.style.left = tdCoords.left+ "px";
    textArea.style.height = tdCoords.height -8+ "px"; // hardcoded scuffed calculations with the 8 to move down right onto the next td
    createButtons();
    
    //textArea.onblur = lockToArea;
}

// function lockToArea(event){ // i dont think i need this function
//     if(textArea){
//         textArea.focus()
//     }
// }

function saveChanges(event){

    oldTd.innerHTML = textArea.value;
    textArea.replaceWith(oldTd);
    textArea =null;
    okCancel.remove()
    okButton.remove()
    tdCoords = null;
    oldTd = null;
    okCancel= null;
    okButton = null;
}

function cancelChanges(event){

    textArea.replaceWith(oldTd);
    textArea = null;
    okCancel.remove()
    okButton.remove()
    tdCoords = null;
    oldTd = null;
    okCancel= null;
    okButton = null;
}

function createButtons(){

    let textAreaCoords = textArea.getBoundingClientRect();
    okButton = document.createElement('button');
    okButton.innerHTML = "OK";
    okButton.className = 'editControls'
    okCancel = document.createElement('button');
    okCancel.innerHTML = "CANCEL";
    okCancel.className = 'editControls'

    table.append(okButton,okCancel);
    okButton.style.top = textAreaCoords.bottom +5 + "px";
    okButton.style.left = textAreaCoords.left+ "px";
    okCancel.style.top = textAreaCoords.bottom +5 + "px";
    okCancel.style.left = textAreaCoords.left + okButton.offsetWidth+ "px";
    textArea.innerHTML = oldTd.innerHTML;

    okButton.onclick = saveChanges;
    okCancel.onclick = cancelChanges;
}

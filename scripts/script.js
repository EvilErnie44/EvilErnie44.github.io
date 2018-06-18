
//Storing the button to an var. 
var enter = document.getElementById("enter"); 
//Storing the input field to var. 
var input = document.getElementById("userinput"); 
//storing UL to var; 
var ul = document.querySelector("ul");

var list = ul.children; 


//refactoring scripts using funtions
function inputLength() {
    return input.value.length;  
}; 

function createListElement() {
    //Create LI node
    var li = document.createElement("li");  
    //Create button node
    var button = document.createElement("button"); 
    //Append the value of the input field to the newly created LI element. 
    li.appendChild(document.createTextNode(input.value));
    //Append a text node with delete to the create button element. 
    button.appendChild(document.createTextNode("Delete")); 
    
    //Append the new LI which includes the text node value captured to the parent UL element. 
    ul.appendChild(li); 
    
    //Reset the input field. 
    input.value = "";
    //Appenend the a child button to the newly created LI element and bind it to an onclick event to remove the target LI tag from the dom. 
    li.appendChild(button).onclick = removeItem; 
    
    bindevents();
}; 

function addClick() {
    if(inputLength() > 0) { 
        createListElement();    
        }
    };  

//Passing event into the refactored function now. 
function addKey(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
        createListElement();      
        } 
}

//Add event listener CLICK to the button. 
//Onclick run the function immdediately. 
enter.addEventListener("click", addClick); 

//Passing the event into the function to access keycode event property. 
input.addEventListener("keypress", addKey); 


function taskDone(event) {
    var target = event.target;
    var targetClass = event.target.classList;
    targetClass.toggle("done"); 
}

function removeItem(event) {
   var target = event.target; 
   var parent = target.parentNode;
    console.log(target); 
    //Button, LI, UL Removed child which was defined as parent.
   target.parentNode.parentNode.removeChild(parent);
}

function bindevents() {
//Iterate over list and bind on click event. 
var buttons = document.querySelectorAll(".deleteme"); 
for(var x = 0; x < list.length ; x++) {
    debugger;
   list[x].onclick = taskDone; 
   buttons[x].onclick = removeItem;     
}
}


bindevents();

function appendToDisplay(value){
     document.getElementById('display').innerText += value;
}

function clearDisplay(){
    document.getElementById('display').innerText = ' ';
}

function calculate(){
   let display = document.getElementById('display');
   try{
    display.innerText = eval(display.innerText);
   }
   catch{
    display.innerText='Error'
   }
}
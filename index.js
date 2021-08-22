let rootE1 = document.getElementById("count");

let  countE1 = document.createElement("h1");
countE1.innerHTML=0;

let incrementBtn =document.createElement("button");
incrementBtn.setAttribute("onclick","increment()")
incrementBtn.innerText="increment";

let decrementBtn =document.createElement("button");
decrementBtn.setAttribute("onclick","decrement()")
decrementBtn.innerText="decrement";

let resetBtn =document.createElement("button");
resetBtn.setAttribute("onclick","reset()")
resetBtn.innerText="reset";

rootE1.appendChild(countE1);
rootE1.appendChild(incrementBtn);
rootE1.appendChild(decrementBtn);
rootE1.appendChild(resetBtn);

function increment(){
    let currentCount=countE1.innerText;
    let updateCount=parseInt(currentCount)+1;
    countE1.innerHTML=updateCount;
}
function decrement(){
    let currentCount=countE1.innerText;
    let updateCount=parseInt(currentCount)-1;
    countE1.innerHTML=updateCount;
}
function reset(){
    countE1.innerHTML=0;
}
let countInterval;

let btn = document.querySelector('button');
btn.addEventListener('click', startCounter);    


function startCounter() {

    let number = parseInt(document.querySelector("input").value);

    if (isNaN(number)) {
        alert("Please enter a number");
        clearInterval(countInterval); 
        return;
    }
let first = document.querySelector('.output1 p:first-child');
let next = document.querySelector('.output1 p:last-child');
let op2First = document.querySelector('.output2 p:first-child');
let op2Next = document.querySelector('.output2 p:last-child');
let op3First = document.querySelector('.output3 p:first-child');
let op3Next = document.querySelector('.output3 p:last-child');
let op4First = document.querySelector('.output4 p:first-child');
let op4Next = document.querySelector('.output4 p:last-child');
let op5First = document.querySelector('.output5 p:first-child');
let op5Next = document.querySelector('.output5 p:last-child');
let count = 0;


resetNumbers(first, next);
resetNumbers(op2First, op2Next);
resetNumbers(op3First, op3Next);
resetNumbers(op4First, op4Next);
resetNumbers(op5First, op5Next);

clearInterval(countInterval);

    countInterval = setInterval(function () {
        if (count === number) {
            clearInterval(countInterval);
            alert("Counter has stopped");
            return;
        }
        if(count != 0 && count % 10 === 9){
            next.innerText= 0;
            increaseCount(op2First, op2Next);
        }
        if(count >= 99 && count % 100 === 99){
            op2Next.innerText = 0;
            increaseCount(op3First, op3Next);
        }
        if(count >= 999 && count % 1000 === 999){
            op3Next.innerText = 0;
            increaseCount(op4First, op4Next);
        }
        if(count >= 9999 && count % 10000 === 9999){
            op4Next.innerText = 0;
            increaseCount(op5First, op5Next);
        }
        increaseCount(first, next);
        count++;
        console.log(count)
    }, 1000);
}

function resetNumbers(currentNo, nextNo) {
    currentNo.innerText = 0;
    nextNo.innerText = 1;
}

function increaseCount(currentNo, nextNo) {

    nextNo.classList.add("active");
    
    setTimeout(function () {
        currentNo.innerText = nextNo.innerText;
        nextNo.classList.remove("active");
        nextNo.innerText = parseInt(nextNo.innerText) + 1;
        console.log('cur no ' , currentNo)
        console.log('ne no ' , nextNo)
    }, 500);
}

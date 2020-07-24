let user=prompt('Enter your name');
alert(`Welcome ${user}`);
let time=document.getElementById('time');

function clock(){
    let t=new Date();
    let newt=t.toLocaleTimeString();
    time.innerText=newt;
}

setInterval(clock, 1000);

let b=document.getElementById('body1');
console.log(b);
b.classList.remove('black');
console.log(b.classList);
let dm=document.getElementById('mode');
dm.onclick=()=>{
    b.classList.toggle('black');    
    b.classList.toggle('white');
    }
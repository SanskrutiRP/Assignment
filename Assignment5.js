//gets the end 
let end=+prompt('Enter end upto which you want to get the cubes of odd numbers?? ')
//creates array upto that end i.e. 1-end
let a1=new Array(end-1+1).fill(undefined).map((_,i)=>i+1);
//logs array
console.log(a1);
//creates array with cubes of all odd numbers 
let a2=a1.filter(el=>el%2!=0).map(el=>el**3)
//logs that array
console.log(a2)

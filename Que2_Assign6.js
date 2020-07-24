num=+prompt('Enter number');
tableDiv=document.getElementById("table");
console.log(tableDiv)
tableDiv.innerHTML=`<b>Table of ${num}</b>`;
for(let i=1;i<=10;i++){
    tableDiv.innerHTML=tableDiv.innerHTML+`<li>${num} * ${i} = ${num*i}</li>`;
}
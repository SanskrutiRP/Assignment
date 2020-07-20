let sales=+prompt('Enter sales ')
let commission=0;
if(sales>=0&&sales<=5000){
    commission=sales*2/100
}
else if(sales<=10000){
    commission=sales*5/100
}
else if(sales<=20000){
    commission=sales*7/100
}
else if(sales>20000){
    commission=sales*10/100
}
console.log('Your reward commission is ',commission)
num=+'d'
console.log('You have ',num)
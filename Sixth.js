choice=true;
choice1=true;
while(choice&&choice1){
    number=prompt('Enter number greater than 100');
    choice=+number>100?false:true;
    choice1=number==null?false:true;
}
console.log(number)


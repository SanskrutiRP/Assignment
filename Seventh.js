document.write('Prime numbers')
let i=j=2;
number=+prompt('Enter upto which digit you want the prime numbers');
for(i=2;i<=number;i++){
    for(j=2;j<i;j++){
        if(i%j==0){
            break;
        }
    }
    if(j==i){
        document.write('<br>Prime number  ',i)   
    }
}
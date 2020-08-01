divT=document.getElementById('divQuote');
console.log(divT);
let quote=[`The biggest suspence of life is you don't know who is praying for you and who is playing with you.`,
            `Fear does not stop death, it stops life.`,
            `Worrying does not take away tomorrow's troubles,it takes away today's peace.`,
            `Black colour is sentimentally black but makes student life better.`,
            `Talk to Yourself like you  talk to someone you love`];
let i=0;
/* setInterval(() => {
    if(i>=quote.length){
        i=0;
        divT.innerText=quote[i];
        i++;
    }
    else{
        divT.innerText=quote[i];
        i++;
    }
}, 2000);*/

setInterval(() => {
    let ind=Math.floor(Math.random()*5);
    divT.innerText=quote[ind];
    console.log(Math.floor(Math.random()*5));
}, 2000);

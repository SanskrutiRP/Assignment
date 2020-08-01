let add=document.getElementById('btn');
let remove=document.getElementById('btn1');
let lst=document.getElementById('lst');
let i=0;
add.onclick=()=>{
    let item=document.querySelector('#item').value;
    let ele=document.getElementsByTagName('li');
    for (i=0;i<ele.length;i++){
        console.log(i,ele[i].innerText);
        if(ele[i].innerText==item){
            lst.removeChild(ele[i]);
        }
    }
    let text=document.createTextNode(item);
    let lstEle=document.createElement('li');
    lstEle.appendChild(text);
    lst.appendChild(lstEle);
    i+=1;
    localStorage.setItem(`item${i}`,item);
    document.forms.fform.reset();
}

remove.onclick=()=>{
    let item=document.querySelector('#item').value;
    console.log(item);
    let ele=document.getElementsByTagName('li');
    for (i=0;i<ele.length;i++){
        console.log(i,ele[i].innerText);
        if(ele[i].innerText==item){
            lst.removeChild(ele[i]);
        }
    }
    document.forms.fform.reset();
}
console.log(localStorage.getItem('item1'));
console.log(localStorage.getItem('item2'));
let ask=(que)=>{if(confirm(que)) yes(); else no();};
let yes=()=>alert('You agreed');
let no=()=>alert('You cancelled the execution');
ask('Are you ready??')
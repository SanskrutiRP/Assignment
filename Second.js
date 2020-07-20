const student={
    sname:'Sanskruti',
    age:24,
    projects:{
        dictGame:'Two player dice game using javascript',
    },
}

const {sname,age,projects:{dictGame}}=student;
console.log(`Name is ${sname} age is ${age} project is ${dictGame}`);
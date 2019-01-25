let globalVar=true;

console.log("BEFORE PROMISE");

let p=new Promise((x, y)=>{globalVar ? x("OK"): y("NOT OK");});

p
.then((x)=>{console.log("resolve got: ",x)})
.catch((err)=>{console.log("reject got: ",err)});

console.log("AFTER PROMISE");


/*
OUTPUT:
_________________________

BEFORE PROMISE
AFTER PROMISE
resolve got:  OK
*/
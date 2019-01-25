let globalVar=true;

let p=new Promise((x, y)=>{ globalVar ? x("OK"): y("NOT OK");});

p
.then((x)=>{console.log("resolve 1 got: ",x)})
.then((y)=>{
    console.log("resolve 2 got: ",y);
    return 5; 
})
.then((z)=>{
    console.log("resolve 3 got: ",z);
})
.catch((err)=>{console.log("reject got: ",err)});


/*

OUTPUT:
________________________
resolve 1 got:  OK
resolve 2 got:  undefined
resolve 3 got:  5
*/
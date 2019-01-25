
let obj={
    "name":"Bob", 
    "age":20
};


console.log(typeof(obj));       //--> object

console.log(obj.age);           //--> 20




// JSON.stringify(obj) - gets an object and parses it to a string
let stringFromObject=JSON.stringify(obj);

console.log(typeof(stringFromObject));     //--> string

console.log(stringFromObject.age);         //--> undefined






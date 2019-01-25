//str contains a string that is in a json format
let str=`{"name":"Bob", "age":20}`;


console.log(typeof(str));       //--> string

console.log(str.age);           //--> undefined




// JSON.parse(str) - gets a string and parses it to a json
let objFromString=JSON.parse(str);

console.log(typeof(objFromString));     //--> object

console.log(objFromString.age);         //--> 20






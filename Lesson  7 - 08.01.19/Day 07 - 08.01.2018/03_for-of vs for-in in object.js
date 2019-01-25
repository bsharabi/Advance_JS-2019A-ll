let obj={
    "name":"Bob",
    "age":12
};
console.log("------------I am for-in---------")
for(let x in obj){
    console.log(x , obj[x]);
}


console.log("------------I am for-of---------")
for(let x of obj){
    console.log(x);
}

/*
Output:
__________________

------------I am for-in---------
name Bob
age 12
------------I am for-of---------
for(let x of obj){
           ^
TypeError: obj is not iterable
*/
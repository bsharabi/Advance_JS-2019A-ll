/*
setTimeout- is a built in function in javascript

it takes as parameters:
    - function to execute
    - number - that represents the ms to wait before executing the function that is passed as the first paramter
*/
setTimeout(
function myFunc() {
    console.log(`I am after 3 sec`);
}, 3000);


setTimeout(
    function() {
        console.log(`I am after 5 sec`);
    } ,5000);


setTimeout(()=>{console.log(`I am after 1 sec`)},1000);


console.log(`Outside setTimeout`);

/*
OUTPUT:
___________________
Outside setTimeout
I am after 1 sec
I am after 3 sec
I am after 5 sec
*/










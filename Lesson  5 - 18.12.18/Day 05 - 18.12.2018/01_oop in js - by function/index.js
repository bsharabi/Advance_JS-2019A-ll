//regular function - is called by function name
function cat(){
    console.log("hello cat");
}


let cat1=cat();



//constructor function - is called by "new" +  function name
function Dog(age){
    
    let myName="Bob";

    this.color="White";

    this.getInfo=()=>{
        console.log(`getInfo prints: ${age} , ${myName}, ${this.color}`)
    }
}


let dog1=new Dog(12);
console.log(dog1.color);
dog1.getInfo();



/*
OUTPUT:
___________________

hello cat
White
getInfo prints: 12 , Bob, White
*/
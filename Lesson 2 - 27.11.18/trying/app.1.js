var numbers = [4, 9, 16, 25, 29];

let x=numbers.find(fun)

function fun(val){
    return true
}
console.log(x)

let y=numbers.filter(func1)
function func1(val){
  
  return  val>8
}
console.log(y)


console.log(numbers)
let w=numbers.findIndex(x=val=>{return val>10})

console.log(numbers)
console.log(w)
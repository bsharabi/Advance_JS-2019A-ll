const fs = require('fs');
var http = require('http');
/*
//Method 1 buffer to string 
console.log("--- Method 1 buffer to string ---")
let output = fs.readFileSync('Demo.txt')
console.log(output.toString())*/

/*
//Method 2 buffer to string 
console.log("--- Method 2 buffer to string ---")
let output1 = fs.readFileSync('Demo.txt', 'utf8')
    .trim()
    .split('\r\n')
    .map(line=>line.split('\t'))
    .reduce((x,line)=>{
       x[line[0]]=x[line[0]] || []
       x[line[0]].push({
           name: line[1],
           price: line[2],
           quantity: line[3]

       })
       return x
    },{})
console.log('output', JSON.stringify(output1,null,2))
*/
//Method 3 buffer to string 
console.log("--- Method 2 buffer to string ---")
let output2 = fs.readFileSync('Demo.txt', 'utf8')
    .split('\r\n')
    .map(line=>{
        //console.log(line.split('\t'))})
        return line.split('\t')})
   .reduce((e,x)=>{
        console.log("Output in reduce (e) :", e)
        console.log("Output in reduce (x) :", x)
    },{})
    console.log("Output is :", output2)
//console.log('output', JSON.stringify(output2,null,2))

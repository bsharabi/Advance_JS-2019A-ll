
//p wants to get a function that gets 1 parameter and returns a value
function exeFunc(p) {
    let res = p("Hello from exeFunc");
    console.log(`exeFunc got from p: ${res}`)

}


function myFunc(w) {
    return `I got ${w}`;
}

exeFunc((x) => { return `I got ${x}` });
exeFunc(y => `I got ${y}`);
exeFunc(function func(z) { return `I got func ${z}` });
exeFunc(function (z) { return `I got ${z}` });
exeFunc(myFunc);

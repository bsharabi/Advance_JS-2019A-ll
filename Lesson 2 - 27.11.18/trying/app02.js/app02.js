function myFunc(str1) {
    return `I got loli ${str1}`;
}



 function exeFunc(parameter) {
    let res = parameter("Hello from exeFunc");
    console.log(`exeFunc got from p: ${res}`)
}

    exeFunc(myFunc);
let arr=["a","b","c","d"];

//reverse - Reverses the elements in an Array.
console.log(arr);                   //--> [ 'a', 'b', 'c', 'd' ]
console.log(arr.reverse());         //--> [ 'd', 'c', 'b', 'a' ]
console.log(arr);                   //--> [ 'd', 'c', 'b', 'a' ]


//length - Gets or sets the length of the array. 
console.log(arr.length);            //--> 4


//pop - removes the last element from an array and returns it
console.log(arr);                   //--> [ 'd', 'c', 'b', 'a' ]
console.log(arr.pop());             //--> a
console.log(arr);                   //--> [ 'd', 'c', 'b' ]

//push - Appends new elements to an array, and returns the new length of the array
console.log(arr);                   //--> [ 'd', 'c', 'b' ]
console.log(arr.push("z"));         //--> 4
console.log(arr);                   //--> [ 'd', 'c', 'b', 'z' ]


//shift - removes the first element from an array and returns it.
console.log(arr);                   //--> [ 'd', 'c', 'b', 'z' ]
console.log(arr.shift());           //--> d
console.log(arr);                   //--> [ 'c', 'b', 'z' ]



//unshift - Inserts new elements at the start of an array.
console.log(arr);                   //--> [ 'c', 'b', 'z' ]
console.log(arr.unshift("x"));      //--> 4
console.log(arr);                   //--> [ 'x', 'c', 'b', 'z' ]



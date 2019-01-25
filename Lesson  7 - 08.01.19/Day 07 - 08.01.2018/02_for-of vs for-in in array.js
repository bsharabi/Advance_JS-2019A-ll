let arr=["a","b","c"];


console.log("------------I am for-in---------")
for(let x in arr){
    console.log(x , arr[x]);
}


console.log("------------I am for-of---------")
for(let x of arr){
    console.log(x);
}

/*
Output:
__________________

------------I am for-in---------
0 a
1 b
2 c
------------I am for-of---------
a
b
c
*/
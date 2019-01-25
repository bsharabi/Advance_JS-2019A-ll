//הגדרה רגילה של פונקציה
// will call this function with the function name
function f1(){
    console.log("I am f1");
}


// תוכנס לתוך משתנה -  פונקציה אנונימית
// will call this function with the var name
let f2=function(){
    console.log("I am f2");
};


// תוכנס לתוך משתנה -  פונקצית חץ
// will call this function with the var name
let f3=()=>{
    console.log("I am f3");
};


//יצירת משתנה המכיל מצביע לפונקציה - כלומר נוכל לבצע קריאה לפונקציה גם דרכו
let f4=f1;

f1();
f2();
f3();
f4();


/*
OUTPUT:
______________________
I am f1
I am f2
I am f3
I am f1
*/
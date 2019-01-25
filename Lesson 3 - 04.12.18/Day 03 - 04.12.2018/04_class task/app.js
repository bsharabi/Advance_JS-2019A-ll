//GLOBAL ARRAY
let myUniArray = [];

let req = new XMLHttpRequest();
req.open("GET", "http://universities.hipolabs.com/search?country=Israel");


req.onreadystatechange = () => {
    if (req.readyState == 4) {

        //result is now a string - not a json array
        let result = req.response;
        myUniArray = JSON.parse(result);
        console.log(myUniArray);
    }
}

req.send();
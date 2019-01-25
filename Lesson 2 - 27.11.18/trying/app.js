
let req = new XMLHttpRequest();

console.log(req)
req.open("GET","GOOGLE.COM")
console.log(req)
/*req.onreadystatechange()
{
    if(req.readyState==4)
    {
        console.log(req.readyState);
        console.log(req.response);
        console.log(req.status);
        console.log(req.ontimeout);
    }
}


req.onreadystatechange = () => {
    //readyState - represents the state of the request (4 is a state that the request is done, and the response is back)
    if (req.readyState == 4) {
        console.log(req.status,req.response);
        var arr=JSON.parse(req.response);
        var resString="<option>Select country</option>";
        for(var i=0; i<arr.length;i++){
            resString+=`
             <option>${arr[i].name}</option>
             `;
        }
            document.getElementById("name").innerHTML=resString;
        }
    }

*/
req.send()
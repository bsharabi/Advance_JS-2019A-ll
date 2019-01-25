       //הגדרת אובייקט שמאפשר לשלוח בקשות לקוח לשרת
        let req = new XMLHttpRequest();
        //הגדרת סוג הבקשה, והכתובת אליה הבקשה מופנת
        req.open("GET", "https://restcountries.eu/rest/v2/all?fields=name;flag");
        //רישום לביצוע פונקציה, בכל שלב בו יתבצע שינוי במצב הבקשה, לדוגמה : כאשר התשובה התקבלה 
        req.onreadystatechange=()=> {
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
        //שליחת הבקשה בפועל מהלקוח אל השרת
        req.send();
        function img(){
        let req1 = new XMLHttpRequest();
        //הגדרת סוג הבקשה, והכתובת אליה הבקשה מופנת
        var Nameofflag=document.getElementById("name").value;
        req1.open("GET", `https://restcountries.eu/rest/v2/name/${Nameofflag}?fields=flag`);
        req1.onreadystatechange = () => {

            //readyState - represents the state of the request (4 is a state that the request is done, and the response is back)
            if (req1.readyState == 4) {
                console.log(req1.status,req1.response);
                var arr0=JSON.parse(req1.response);
                var result="";
                 result+=`<img src="${arr0[0].flag}" alt="No image" height="200" width="300"></img>`;
                 document.getElementById("img").innerHTML=result;
            }
        //שליחת הבקשה בפועל מהלקוח אל השרת
        }
    req1.send();
        }
    document.getElementById("name").addEventListener("change",img)


   //הגדרת אובייקט שמאפשר לשלוח בקשות לקוח לשרת
        let req = new XMLHttpRequest();

        //הגדרת סוג הבקשה, והכתובת אליה הבקשה מופנת
        req.open("GET", "https://jsonplaceholder.typicode.com/todos/1");


        //רישום לביצוע פונקציה, בכל שלב בו יתבצע שינוי במצב הבקשה, לדוגמה : כאשר התשובה התקבלה 
   
        //הגדרת אובייקט שמאפשר לשלוח בקשות לקוח לשרת
      let req = new XMLHttpRequest();

      //הגדרת סוג הבקשה, והכתובת אליה הבקשה מופנת
      req.open("GET", "http://universities.hipolabs.com/search?country=Israel");


      //רישום לביצוע פונקציה, בכל שלב בו יתבצע שינוי במצב הבקשה, לדוגמה : כאשר התשובה התקבלה 

      req.onreadystatechange = () => {

          //readyState - represents the state of the request (4 is a state that the request is done, and the response is back)
          if (req.readyState == 4) {
              console.log(req.status,req.response);
          }
      }


      //שליחת הבקשה בפועל מהלקוח אל השרת
      req.send();


      console.log(`After sending request`);

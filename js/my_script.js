"use strict";

let msg = 'Привет'
	, age = 25
	, user = "remai";


document.cookie = "user=remai";
//document.cookie = "msg=" + encodeURIComponent(msg);


console.log( document.cookie );



// alert(my_var);
// alert(age);
// alert(`Привет, ${user}, № ${age}`);
//JavaScript Document

var theData1 = '{"first":"Nick", "last":"Railsback", "city":"Thomaston"}';
var myObj = JSON.parse(theData1);
console.log(myObj);

document.getElementById("message").innerHTML = myObj.last;
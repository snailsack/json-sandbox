//JavaScript Document

var theData2 = '{"Melissa":{"age":"27","degree":"BA"}, "Nick":{"age":"31","degree":"BA"}}';
var myObj = JSON.parse(theData2)
console.log(myObj);

document.getElementById("message").innerHTML = myObj.Melissa.age;
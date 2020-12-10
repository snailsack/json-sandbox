//JavaScript Document

var theData2 = '{"Melissa":{"age":"27","degree":{"High School Diploma":"Concord High School","BA":"Champlain College"}}, "Nick":{"age":"31","degree":"BA"}}';
var myObj = JSON.parse(theData2)
console.log(myObj);

document.getElementById("message").innerHTML = myObj.Melissa.degree.BA;



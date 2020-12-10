//JavaScript Document

var start = '{"favColor": "Blue", "favSeason":"Fall"}';

var myObj = JSON.parse(start);
console.log(myObj);

var myString = JSON.stringify(myObj);
console.log(myString);

var myObj = JSON.parse(myString);
console.log(myObj);
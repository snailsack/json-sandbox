//JavaScript Document

// Create new object
var xhr = new XMLHttpRequest();
// Set the open status
xhr.open('GET', 'data.json', true);
// Ensure it's coming in as text
xhr.responseType = 'text';



// onload fired if readyState has value of 4
xhr.onload = function(){
  if(xhr.status === 200) {
  var myStuff = JSON.parse(xhr.responseText);
  console.log(myStuff);
  }
}

// Send is typically at the end
xhr.send();

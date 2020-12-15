// JavaScript Document

var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function () {
  if (xhr.status === 200) {
    var myStuff = JSON.parse(xhr.responseText);
    console.log(myStuff);

    var myString = "";

    for (i = 0; i < myStuff["prime ministers"].length; i++) {
      var x = i + 21;
      myString += "<br>Prime Minister " + x + " was " + myStuff["prime ministers"][i].first + " " + myStuff["prime ministers"][i].last + ".";

      myString += " He served from "+myStuff["prime ministers"][i].served+ " and the Deputy Prime Minister was "+myStuff["deputy prime ministers"][i].first + " " + myStuff["deputy prime ministers"][i].last+ " who served from "+myStuff["deputy prime ministers"][i].served+".<br>"

      document.getElementById("message").innerHTML = myString;


    }
  }
}

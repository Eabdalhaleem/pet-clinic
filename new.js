prompt ("please enter your name!")

var username = prompt("what is your name ")
console.log(username);
alert(" welcome " + username);


var petType = prompt(" please enter your pet type (Dog,Cat)?")
while (petType !== "Dog" && petType !== "Cat") {
  petType = prompt("please enter your pet type (Dog,Cat)?")
}

if (petType === "Dog"){
var petNumber = Number (prompt("how many Dog do you have?"))
for (var i = 1; i <= petNumber; i++) {
  document.write("<img class='pets' src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F10%2F13%2Fcorgi-dog-POPDOGNAME1020.jpg'>")
}}
if (petType === "Cat"){
var petNumber = prompt("how many Cat do you have?")
for (var i = 1; i <= petNumber; i++) {
  document.write("<img class='pets' src='https://timesofindia.indiatimes.com/photo/67586673.cms'>")
}}
console.log("we will call you ")

if (petType === "Dog") {
  alert("we would like to give you our service");
} else if (petType === "Cat") {
  alert("we would like to give you our service");
}
else {
  alert("Sorry we can not give your pet a service ")

}

alert("We are here to help you ")
var petType = prompt(" Do you need any help (yes,no)?")
if (petType === "yes") {
  alert("please connact us in this number 0124588 ");
} else if (petType === "no") {
  alert("we will happy to help you any time ");
}
alert(" Thank you ");


var petType = prompt(" please enter your pet type (Dog,Cat)?")
if (petType === "Dog") {
  alert("we would like to give you our service");
} else if (petType === "Cat") {
  alert("we would like to give you our service");
}
else {
  alert("Sorry we can not give your pet a service ")

}
function Q1() {
  var question1 = prompt("Are you interesting to have a pet?");
  while (question1 !== "yes" && question1 !== "no") {
    question1 = prompt("Are you interesting to have a pet?");
  }
  if (question1 === "yes") {
    question2 = prompt("Do you like dogs or cats?");

    if (question2 === "dogs") {
      alert(" you can adopt them and they will love u");

    }
    else if (question2 === "cats") {
      alert(" you can adopt one");

    }
  }

  else if (question1 === "no") {
    alert("try to love them")
  }
}

Q1();



alert("We are here to help you ")
var petType = prompt(" Do you need any help (yes,no)?")
if (petType === "yes") {
  alert("please connact us in this number 0124588 ");
} else if (petType === "no") {
  alert("we will happy to help you any time ");
}
  alert(" Thank you ");


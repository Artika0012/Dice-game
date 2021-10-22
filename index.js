var n1 = Math.random();
n1 = n1* 6;
n1 = Math.floor(n1) + 1;

var randomDiceImage = "dice"+n1+".png";
var randomImgSource = "images/"+randomDiceImage;


document.querySelectorAll("img")[0].setAttribute("src", randomImgSource);


// var n = Math.random() *6;
// n = Math.floor(n)+1;
// console.log(n);
// var dicenumber = "dice"+n+".png";
// var diceimage = "images/"+dicenumber;
// document.querySelectorAll("img")[0].setAttribute("src", diceimage);
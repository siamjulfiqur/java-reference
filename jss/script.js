// light on/off
function bulbOn(){
  document.getElementById('img').src="images/pic_bulbon.gif";
}

function bulbOff(){
  document.getElementById('img').src="images/pic_bulboff.gif";
}
// text show
function textChang(){
  document.getElementById('text').innerHTML="hello world";
}
// paragraph change
function paraChange(){
  document.getElementById('h2').innerHTML="this is a pragraph is winter morning has comming";
}
// sum
function sumAddition(){
  document.getElementById('sum').innerHTML=22+44;
}
// statement
let x, y, z; 
x = 5;        
y = 6;        
z = x + y; 

function stateMent(){
  document.getElementById('state').innerHTML=
  "The value of z is " + z + ".";
}
// decimals
function deciMals(){
  document.getElementById('deci').innerHTML=10.50;
}

//  single quotes
function singleQuotes(){
  document.getElementById('single').innerHTML='john doue';
}

// javascript comment
function javaComment(){
  document.getElementById('hd').innerHTML='javascript comment';
}

function javaPara(){
  document.getElementById('hp').innerHTML='My first paragraph';
}
// automatically declared
x = 5;
y = 6;
z = x + y;
function jsVeriable(){
  document.getElementById('dec').innerHTML="The value of z is: " + z;
}
// jslet
var a=4;

var b=9;

function jsLet(){
  document.getElementById('alpa').innerHTML=b;
}
// jsoperator
let c=18;
function jsOperator(){
  document.getElementById('jsop').innerHTML=c;
}
// JavaScript Arithmetic
let e=59
let f=44
let g=e+f


function jsArithmetic(){
  document.getElementById('jsarith').innerHTML=g;
}
// addition assignment

let h=10;
h +=5;
function jsAssignment(){
  document.getElementById('addi').innerHTML= "value of h is: " + h;
}
// data types
let i= 16 + "siamjulfiqur";
function datatypes(){
  document.getElementById('dtyps').innerHTML= i;
}
// javascript variable
let car= "fiath";
function jsVariable(){
  document.getElementById('vari').innerHTML=car;
}
// js event
function jsEvent(){
  document.getElementById('eve').innerHTML= Date();
}

// js string
let text="SiamJulfiqur";
function jsString(){
  document.getElementById('stri').innerHTML=text;
}
// JavaScript Strings
let tex="my name is siam ahmed"
function jsStrings(){
  document.getElementById('leng').innerHTML=tex.length;
}
// The indexOf() Method
let tet = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");

function jsMethod(){
  document.getElementById('index').innerHTML=index;
}
// JavaScript Template
let textt="hello world";
function jsTemplet(){
  document.getElementById('tem').innerHTML=textt;
}
// JavaScript Numbers
let j=409
let k=5.88
function jsNumber(){
  document.getElementById('num').innerHTML=j+ "<br>" +k;
}
// js arry
const cars = ["Saab", "Volvo", "BMW","siam","julfiqur"];
function jsArry(){
  document.getElementById('jsarry').innerHTML= cars;
}
// length Property
const fruits =["banana","orange","apple","jackfruits","mango",]
let size = fruits.length;

function jsProperty(){
  document.getElementById('pro').innerHTML=size;
}
// The sort() Method

const fruit = ["Banana", "Orange", "Apple", "Mango"];
function jsSort(){
  document.getElementById('no1').innerHTML=fruit;}

  fruit.sort();
  function jsSort2(){
    document.getElementById('no2').innerHTML=fruit;
  }
  // new date
  const d = new Date();
  function newDate(){
    document.getElementById('nda').innerHTML=d;
  }
  // ja math
  function jsMath(){
    document.getElementById('math').innerHTML=Math.PI;
  }
  // booleans
  function jsBoolean(){
    document.getElementById('boo').innerHTML=Boolean(10 > 9);
  }
  // JavaScript switch
  let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
function jsSwitch(){
  document.getElementById('swi').innerHTML="Today is " + day;
}
  // loop
  const ca = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let te = "";
for (let i = 0; i < ca.length; i++) {
  te += ca[i] + "<br>";
}
function forLoop(){
  document.getElementById('loop').innerHTML=te;
}

 
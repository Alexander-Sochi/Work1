function alik(a){
    return function (){
        console.log ( 400 * a)
    }
}
const adler = alik(400)
adler()
function adlerAlik (a ){
    return function(){
        console.log (200 * a )
    }
} 
const alderA  = adlerAlik(200);
const s = adlerAlik(300);
const a = adlerAlik(100);
alderA();
s();
a();


function test (a,b,c){
    console.log (a+b*c);
}
test(10,50,5);
test(100,5,30);


let ae = 14;
let bb = 12;
if (ae == 15){
    console.log ('dd');
}else if(ae == 14){
    console.log('good');
} else {
    console.log ('norm');
}
if (ae == 22 && bb == 10){
    console.log('Norm')
}else if(ae == 12 && bb == 12) {
    console.log('noterdam')
}else if (ae == 11 && bb ==8){
    console.log ('deam')
}else if (ae ==14 && bb == 12){
        console.log ('what is it')
}else{
    console.log('fools')
}
if (ae == 12 || bb == 12){
    console.log ('deam')
}else if (ae == 14 || bb == 12 ){
    console.log('what')
}else if ( ae == 12 || bb == 22){
    console.log('fffff')
}


switch(ae){
    case 4:
        console.log('derrm');
        break;
    case 12:
        console.log('net');
        break;
    case 14:
        console.log('woot');
        break;
}
let clikClak = 0;
function onClickButton (el) {
    clikClak++;
    el.innerHTML = 'вы нажали на кнопку ' + clikClak;
   el.style.background='red';
   el.style.color ='red'; 
}
function onImput (el) {
    if(el.value == 'ghbdtn')
     alert('Переключи клаву');
     else if (el.value == 'Привет')
      alert('и тебе ');
    
}











const testObj= {
    NameCard: 'tester',
    like: 12,
    followers: 123,
    Comment: [
    {
        name: 'Alex',
        text: 'Ширадос'            
    },
    {
        name: 'Rich',
        text: 'WOW'
    }
    ]
}

testObj.NameCard = 'alexander';

console.log(testObj);
const copyObj =(JSON.parse(JSON.stringify(testObj)));
copyObj.like = 9;
copyObj.like = 30;
copyObj.followers = 999;
copyObj.NameCard = 'alex';
copyObj.Comment [0].name = 'sasha' 
console.log(copyObj); 
const copyObj1 = Object.assign(testObj);
copyObj1.NameCard = 'alisa';

console.log (copyObj1);
  function Card(){
      this.name = 'alik';
      this.like = 100;
  }
  const newCard = new Card();
  console.log(Card);




function MyMarket (name,sell,cont){
  this.name = name;
  this.sell = sell;
  this.cont = cont;
}
const karta = new MyMarket('Стол', 10, 300);
const karta2 = new MyMarket ('Диван',300,3000);
console.log (karta2);




function MyPhone (model,price,cont){
    this.model = model;
    this.price = price;
    this.cont = cont;
    this.sum = function (){
     return   this.price * this.cont;

    }
}
const klient = new MyPhone ('Samsung',3000,2);
console.log(klient);
console.log(klient.sum());
 
let massiv = [13,34,6,888,43,222];
let test22 = function(item){
   return item **2 ;
}
let newMassiv=massiv.map(test22);
console.log(newMassiv);
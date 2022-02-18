//Objects  
const cafe = {
    name : "whitesheep",
    seating: 100,
    hasoffers:true,
    drinks:[
        "cappuccino","latte","filter coffee","tea","hot chocolate"
    ]
};
console.log(cafe);
//activity 1
const person1={
    name : "leenah",
    age : 50
};

person1["favMusic"] = ["music1","music2","music 3"];
console.log(person1)

// // //Accessing data by using dot '.' or bracket '[]' notation 
  
console.log(person1.name);
console.log(`I am ${person1.age}`);
console.log(person1["name"]);// always quotations marks with bracket notation often used when there is space in key value
console.log(person1.favMusic[2])

//variable to select key of an object
let offer ="none";
let time = 1200;
const cafenew = {
    name : "blacksheep",
    seating: 100,
    hasoffers:true,
    drinks:[
        "cappuccino","latte","filter coffee","tea","hot chocolate"
    ],
    breakfastOffer:"Free croissant with coffee",
    lunchOffer:"free drink with meal",
    noOffer:"sorry no offer"
};
console.log(cafenew);

if (time < 11){
    offer = cafe.breakfastOffer;
    console.log(cafe.breakfastOffer);
}else if (time < 1500){
    offer = cafe.lunchOffer;
    console.log(cafe.lunchOffer);
}else {
    console.log(cafe.noOffer);
};


//Activity 1 
let day = "friday";
let alarm = "weekendAlarm";

const alarmClock = {
    weekendAlarm : "no alarm needed",
    weekdayalarm :"get up at 7am"
}
if (day == "saturday"){
    console.log(alarmClock.weekendAlarm)
}else if (day == "sunday"){
    console.log(alarmClock.weekendAlarm)
}
else if(day == "monday"){
    console.log(alarmClock.weekdayalarm)
}
else if(day == "tuesday"){
    console.log(alarmClock.weekdayalarm)
}else if(day == "wednesday"){
    console.log(alarmClock.weekdayalarm)
}else if(day == "thursday"){
    console.log(alarmClock.weekdayalarm)
}
else if(day == "friday"){
    console.log(alarmClock.weekdayalarm)
}
    else {
    console.log("plz set your alarm")
};

//activity 1 

const person={
        name : "leenah",
        age : 50
    };
    const sayHi = ()=>{
        if (person.name){
             console.log(`Hello my name is ${person.name}`)
        }
    }
    sayHi()


    //Activity 2
    const pet = {
        name: "pluto",
        typeOfPet:"dog",
        age:3,
        colour:"white"
    }
    const eatAndDrink = (eat,drink)=>{
   if(eat == "pet food" && drink == "water"){
       console.log(`${pet.name} is allowed eating ${eat} and drinking ${drink} `)
   }else {
       console.log(`its not ideal for ${pet.name} health`)
   }
    }
    eatAndDrink("pet food","water");
    eatAndDrink("pet food","juice");
    eatAndDrink("junk","water")
    eatAndDrink("meat","juice");


//Activity 3 Coffee Shop return item with price calculate total amount of bill 
let foodAmount = 0;
let drinkAmount = 0;
let total = 0;

const coffeeShop = {
    branch:"Manchester",
    menu:[
        "cappuchino",
        "Latte",
        "Hot chocolate",
        "Tea",
        "sandwitch",
        "Wrap"],
    fooodPrice:3.50,
    drinkPrice:1.00
}
let priceofDrink = coffeeShop.drinkPrice
let priceOfFood = coffeeShop.fooodPrice
let item = coffeeShop.menu

const orderfood = (food)=>{
    for(let i = 0 ;i < item.length ;i++){
        if(item[i] == food ){
             console.log(`Your order is: ${food}`)
             foodAmount += priceOfFood;
             
             console.log(priceOfFood);
        }
        }
    }
    

orderfood("sandwitch");
orderfood("Wrap");
const orderdrink = (drink)=>{
    for(let j = 0 ;j < item.length;j++){
        if( item[j] == drink){
             console.log(`Your order is: ${drink}`);
             drinkAmount += priceofDrink;

             console.log(priceofDrink);
        }
        }
    }
    

orderdrink("Hot chocolate");
orderdrink("Tea");
orderdrink("Latte");

total += (foodAmount + drinkAmount); 
console.log(`Total cost:${total}`); 
  
  



 

     
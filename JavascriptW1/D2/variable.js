    
//variables 
let x = "All Arround The World".charAt(7).toUpperCase();
console.log(x);

//increment
let i = 10;
i += 2;
console.log(i)

let favouriteDrink = "coffee";
console.log(favouriteDrink);
//updating variable 
let favDrink = "tea";
console.log("my fav drink is " + favDrink);

//tempelate letral
let myName = "Leenah";
let age = "older then you think";
let favDrinks = "coffee and tea";
console.log(`my name is ${myName} i am ${age} and i like ${favDrinks}`)

// Activity 1

let personName = "Hafeez" ;
let PersonAge = "forever young";
let personFavColour = "black";

 console.log(`My husband name is ${personName}.He is ${PersonAge} and his fav colour is ${personFavColour}`)

 personName = "Saima" ;
 PersonAge = 38;
 personFavColour = "blue";

console.log(`${personName} is my best friend.She is ${PersonAge} and she likes ${personFavColour}`)

//Activity 2

let breakfast = "jam on Toast" ;
let lunch = "bryani"; 
let dinner = "left over bryani";

 console.log(`Today i'll have ${breakfast} in my breakfast,${lunch} in my lunch and ${dinner} in my dinner.`)
 
  breakfast = "pancakes" ;
  lunch = "pasta"; 
  dinner = "pizza na left over pasta";
 
  console.log(`Tomorrow i'll have ${breakfast} in my breakfast,${lunch} in my lunch and ${dinner} in my dinner.`)


//Activity 3

// note:Define two dates using new Date().
// Calculate the time difference of two dates using date2.getTime() – date1.getTime();
// Calculate the no. of days between two dates, divide the time difference of both the dates by no. of milliseconds in a day (1000*60*60*24)
// Print the final result using document.write().



let date1 = new Date(1994,06,01);
let date2 = new Date(2022,01,15);
let  differenceInTime = date2.getTime() - date1.getTime();
console.log(differenceInTime)
let differenceInDays = (differenceInTime/(1000*3600*24));
console.log(Math.floor(differenceInDays))




//activity 4
 
let space1 = "x"
let space2 = "o"
let space3 = " "
let space4 = "x"
let space5 = "x"
let space6 = " "
let space7 = "o"
let space8 = " "
let space9 = " "
console.log(`     |     |     `)
console.log(`  ${space1}  |  ${space2}  |  ${space3}  `)
console.log(`     |     |     `)
console.log(`-----------------`)
console.log(`     |     |     `)
console.log(`  ${space4}  |  ${space5}  |  ${space6}  `)
console.log(`     |     |     `)
console.log(`-----------------`)
console.log(`     |     |     `)
console.log(`  ${space7}  |  ${space8}  |  ${space9}  `)
console.log(`     |     |     `)
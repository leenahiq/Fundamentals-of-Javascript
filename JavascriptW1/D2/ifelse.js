
// if else statement
if (1 === "1"){
    console.log(true);
}else {
    console.log(false )
}
//ex 1

if (1 != "1"){
    console.log(true);
}else {
    console.log(false )
}
//ex2 by reassigning 
let place = "Bolton";
let weather = "sunny";

place = "Manchester";
weather = "rainy"

if (place ==  "Bolton" && weather == "sunny"){
    console.log("i cant believe it ");
}
else if(place == "Manchester" && weather == "rainy"){
    console.log("its usual" )

}else {
    console.log("whats the point im working any way ")
}

//switch statement
const grade = 87;
switch(true){
    case grade >=70:
    console.log("distinction");
    break;
    case grade >=60:
    console.log("merit");
    break;
    case grade >=50:
    console.log("pass");
    break;
    default:
        console.log("failed")
}

//Activity 1 

let age = 18;
let country = "UK"
if (age >= 18 && country == "UK"){
    console.log("no need to isolate")
}
else {
    console.log("You need to isolate")
}


 //activity 2


let topping = "chicken tikka"
  switch(topping){
  case "chicken tikka":
  case "peperoni":
  case "olives":
      console.log("These are important ingredients for my pizza.")
       break;
    case "corn":
       console.log(`I don’t mind having ${topping} on my pizza. `)
        break;
    case "pizza":
        console.log(`${dontLike} should not be on a pizza.`)
    default:
        console.log("I only prefer custome made pizza")
}

// Activity 3 
let password = "asdfghj"
  if (password.length < 8){
      console.log( "password is too short.")
  }else {
      console.log(password)
  }
  

//   //Activity 4

  let numb = 23;
  if (numb % 3 == 0 && numb % 5 == 0){
      console.log("This number is divisible by 3 or 5")
  }else {
      console.log("This number is not divisible by 3 or5")
  }




// //Activity 5

let number1 = 15
if(number1 % 3 == 0 && number1 % 5 == 0){
    console.log("fizz buzz")
}
else if(number1 % 3 == 0){
    console.log("fizz")
}
else if(number1 % 5 == 0){
    console.log("buzz")
}
else {
    console.log(number1)
}

 //Activity 6 
let s = "noona";
let numReverse = s.split('').reverse().join('');
if (s == numReverse){
    console.log(true);
}else {
    console.log(false);
}


 //Activity 7
let time = 5;
let placeOfWork = "work";
let homeOfTown = "home";
if( time == 7 && homeOfTown == "home"){
    console.log("Im at home");
}else if (time == 8){
    console.log("IM commputing");
}
else if (time == 9 && placeOfWork == "work"){
    console.log("Im at work");
}else {
    console.log ("Im sleeping")
}





 //activity 8

    let str1 ="jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi."
    const vowels = str1.match(/[aeiou]/gi); 
      console.log(vowels);
    let lastVowels = vowels[vowels.length-1];
      console.log(lastVowels);
    let lastIndex1 = vowels.lastIndexOf("i");
      console.log(lastIndex1)
    

 //activity 8
    const str2 ="jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi."
    let lastVowel1 = "i"
    let lastIndex2 = str2.lastIndexOf(lastVowel1);
    console.log(lastIndex2);

 //function to get last vowels in string
function lastVowel(){
    let str3 ="'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'"
    const match = str3.match(/[a,e,i,o,u](?!.*[a,e,i,o,u])/i);
    return match ? match[0] : 'No match';
   }
 console.log(lastVowel());
 


 //activity 9

let string = "madam"
if (string.charAt(0) == string.charAt(string.length - 1)){
    console.log(true)
}
else {
    console.log(false)
}

//  //Activity 10

  let num1 = 4;
 let num2 = 5;
 let sum = num1 + num2
 if  (sum % 2 == 0){
  console.log("Numbers are Even")
 }else {
     console.log(num1*num2)
 }






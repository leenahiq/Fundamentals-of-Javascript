//for and while loops 

let favDrink =["coke","fanta","tonic"]
// console.log(favDrink[0]);
// console.log(favDrink[1]);
// console.log(favDrink[2]);
//its repeating what if there are 1000000000 items then we use for loops our life savier they lok scarier but they are you best friends 

for(let i = 0;i <favDrink.length;i++){
    console.log(favDrink[i]);
}
//For loop for getting multiple of 2 
let multiple = [];
for (let i = 0;i <= 20;i++){
if (i %2 ==0){
   multiple.push(i);//.push to add all generated number in to array called multiple.
}
}
console.log(`number divisible by 2 between 0 and 20 is ${multiple}`)


// while loop
let age = 15;
while(age < 18){
    console.log("you are a child");
    age++;
}//it will return top log on 15,16,17 untill its met condition then its gonna log bottom log 
console.log("your adult");

//logging random card of list intill card is not equal to wanted card as it get equal loop will stop 
let cards = ["diamond","spade","heart","club"];
  let currentCard = "club";
  while(currentCard != "spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()* 4)];
  }
  console.log(currentCard);

  //Activity 1

  let favFilms = ["avengers","justice league","captain America","P.S I love you","spider man"]
     favFilms.push("dont look up","batman vs superman")
     for (let i = 0;i < favFilms.length; i++){
       console.log(favFilms[i]);
     }

  // Activity 2

  for (let i = 0; i < 6 ;i++){
    console.log(Math.floor(Math.random()*50));
  }


  //activity 3
   for (i = 9; i >= 0;i--){
     console.log(i);
   }

   //activity 4

let arrOfFilms = ["avengers","justice league","captain America","P.S I love you"]
for (let i = 0; i < arrOfFilms.length;i++){
  console.log(arrOfFilms[i]);
}
    if (arrOfFilms[3] == "captain America" ){
      console.log("its nice movie");
    }else {
      console.log("where is this movie in my list my list");
    }

 
 
//Activity 6

let  bobsFollowers = ["joji","leenah","hafeez","saima"]
let  hannahsFollowers = ["ramsha","bushra","joji",,"saima"];
let mutualFollowers = [];
  for(let i = 0; i < bobsFollowers.length; i++) {
  for(let j = 0; j < hannahsFollowers.length; j++){
      if(bobsFollowers[i] === hannahsFollowers[j]){
        mutualFollowers.push(bobsFollowers[i]);
  }
}
   }
   console.log('Your Mutual Followers are ' + mutualFollowers);





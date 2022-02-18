
 //Array 
 let array = [
     "leenah - capchino","hafeez - latte","saima - mocha"
 ]
 console.log(array)
//changing item in array on index 
  array[1] = "joji- somethingnew";
  console.log(array)
//adding item at end of array with .push() method
 array.push("donna - espresso");
 console.log(array)
 //removing last item of array using .pop() method 
 array.pop();
 console.log(array)
 //items on index
 console.log(array[2]);
 //number of item in array
 console.log(array.length);

//Activity 1
let favSong = [
    "chandlier","dark hourse","thunder"
]
console.log(favSong);
 favSong.push("believer","fairyland");


console.log(favSong)

favSong.pop();
console.log(favSong)


//Activit 2
//other method then pop() and push()

// map() return a new array
//calls a function once for each element in an array.
const numbers = [4, 9, 16, 25];
const newArr1 = numbers.map(Math.sqrt);
console.log(newArr1)
//.toString()
//converts an string item array to string (comma separeted )array value
 let newArr = ["Banana", "Orange", "Apple", "Mango"]
let arrToStr = newArr.toString();
  console.log(arrToStr);

  //join()
  //join all array element into string 

  let arr = ["m","a","d","a","m"]
  let joinArr = arr.join("");//empty string perameter will remove commas and return value madam instead m,a,d,a,m,
  console.log(joinArr);



//shift remove first element and now 

let array1 = ["leenah","hafeez","saima","joji","sherry"]
let shiftArr = array1.shift();
console.log(shiftArr);// will return the removed item 
console.log(array1);//now it will return array without first element of orignal array

//unshift add new element in the beginning 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
console.log(fruits);

//splice() use to add or remove item in array in array on specific index and num of items
let testarr = ["i","me","myself",1,2,3,4,true] //index 5 and restitem will b removed 
console.log(testarr.splice(5));
console.log(testarr)
console.log(testarr.splice(2,1));//2 is index and one is o of item so item at index 2 only b removed
console.log(testarr);

//ading item through splice()
testarr.splice(0,0,"a","b")//will add item at zero index 
console.log(testarr);

//slice()method copies a given part of an array and returns that copied part as a new array.
let x = [1,2,3,"hello world",4.12,true]
let slicedArr = x.slice(0,3)// include item on 0 index ,not includes item on 3 index

console.log(slicedArr);


//concte()merging two arrays and returning new array
let myGirls = ["Cecilie", "Lone"];
let myBoys = ["Emil", "Tobias", "Linus"];

let myChildren = myGirls.concat(myBoys);
console.log(myChildren);

//merging 3 arrays 
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const allChildren = arr1.concat(arr2, arr3);
console.log(allChildren);
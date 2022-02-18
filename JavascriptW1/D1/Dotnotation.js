// dotnotation 
 console.log("leenah") 
 console.log("hello".toUpperCase())

 // some maths libraries 
 console.log(Math.random());
 console.log(Math.floor(Math.random()* 10));
 console.log(Math.round(Math.random()*10))
 console.log(Math.max(1,22,34))  // expected output: 34
 console.log(Math.ceil(7.006))   // expected output: 8                
 // Note: Math.ceil(null) returns integer 0 and does not give a NaN error.


//  creating grid method 1 asigning to variables 
let x = "  |       |";
let y = "-------------"

console.log(x);
console.log(x);
console.log(x);
console.log(y);
console.log(x);
console.log(x);
console.log(x);
console.log(y);
console.log(x);
console.log(x);
console.log(x);

// method 2 creating array manupulating with fo loops

let grid = ["   |       |","   |       |","   |       |",
  "----------------","   |       |","   |       |",
        "   |       |","----------------","   |       |",
        "   |       |","   |       |"];
    for(let i = 0; i < grid.length; i++){
        console.log(grid[i]);
    }

    
// methode 3 creating for loop and giving it conditions using if/else statement 

     for( let i = 0; i < 9;i++){
         let x = "------------------"
         let y = "    |         |"
         if (i == 3 || i == 6){
             console.log(x);
         }
             console.log(y);
         }

        //  methode 4 using .repeat method 
         console.log(
            "\n   |     |".repeat(3),
            "\n",
            "-".repeat(11),
            "\n   |     |".repeat(3),
            "\n",
            "-".repeat(11),
            "\n   |     |".repeat(3),
            );
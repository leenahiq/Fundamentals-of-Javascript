//functions
//Arrow syntax example 1
const pressGrindCoffe = () => {
    console.log("grinding coffee for 20 sec")
}
pressGrindCoffe();


// Arrow syntax function bolean
let coffeeGrind =false ;
const press = () => {
    if(coffeeGrind){
console.log("stop grind")
coffeeGrind = false;
    }else {
        console.log("grindingis biggening")
        coffeeGrind = true;
    }
}
press()

// simple cash machine 
let acc = 474738468;
const cashWidh = (amo,acc) => {
   
    console.log(`witdhdraw ${amo} from ${acc}`)
}
cashWidh(380,47565857);
cashWidh(45,acc);

// function converting celcius to fahrenheit
const add = (num1,num2) => {
    return num1 + num2;
}
console.log(add(5,5));

const multiplyByNineFifths = (celsius)=>{
    return celsius *(9/5);
};
const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
};
console.log(`the temperature is ${getFahrenheit(15)} F`);

//activity 1  function with condition in it

const factorial = (n) => {
    if (n=== 0 || n===1){
        return 1;
    }else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(33));

//activity 2 ordering pizza with likes and dislike 

let order = 0;
const takeOrder = (topping,dislike) => {
    console.log(`pizza with ${topping} and idont like ${dislike}`);
    order++;
}
takeOrder(["chicken","olives","mushroom"],"pineapple")
console.log(order)


//Activity 3 cash machine with correct pin and remaining amm
const pinNum = 123456;
const accNum = 1029893847;
let   totalAmount = 1000;
let   balance = totalAmount;
const cashMachine = (amount,pinNum,balance) => {
    if( amount > 0 && amount <=totalAmount && pinNum === 123456){
        console.log(`You've made widthrawl of £${amount} from Acc:${accNum}`)
        let remainingAmm = totalAmount - amount;
        console.log(`Remaining Ammount is: £${remainingAmm}`)
    }else if(amount > totalAmount && pinNum === 123456) {
        console.log(`Pin number is accepted, In sufficient funds`)
        console.log(`total available amount:${totalAmount}`)
    }else if( pinNum === 123456 && balance === "check balance") {
           console.log(`Available amount:${totalAmount}`)
    }
    else {
        console.log("WRong pin number!!! Try Again" )
        
    }
}
cashMachine(3000,pinNum,balance);
cashMachine(300,pinNum,balance);
cashMachine(300,345678,balance);
cashMachine(0,pinNum,"check balance");
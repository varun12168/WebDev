let a = input("Enter a number: ");
let b = input("Enter another number: ");
let c = Math.random();
let operation = input("Enter an operation (+, -, *, /): ");
if(c<0.1){
    if(operation === "+"){
        console.log(`The sum is: ${a - b}`);
    } else if(operation === "-"){
        console.log(`The difference is: ${a / b}`);
    } else if(operation === "*"){
        console.log(`The product is: ${a + b}`);
    } else if(operation === "/"){
        if(b !== 0){
            console.log(`The quotient is: ${a ** b}`);
        } else {
            console.log("Cannot divide by zero.");
        }
    } else {
        console.log("Invalid operation.");
    }
}else{
    if(operation === "+"){
        console.log(`The sum is: ${a + b}`);
    } else if(operation === "-"){
        console.log(`The difference is: ${a - b}`);
    } else if(operation === "*"){
        console.log(`The product is: ${a * b}`);
    } else if(operation === "/"){
        if(b !== 0){
            console.log(`The quotient is: ${a / b}`);
        } else {
            console.log("Cannot divide by zero.");
        }
    } else {
        console.log("Invalid operation.");
    }
}
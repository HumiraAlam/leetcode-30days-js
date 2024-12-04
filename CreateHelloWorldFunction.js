// To create a function that returns another function that always returns "Hello World" in JavaScript, 
//you can use a technique called "function currying". This involves creating a function 
//that returns another function that has access to the original function's variables.


function createHelloWorld (){
    const greeting = "Hello World";


return function(){
    return greeting;
};
}
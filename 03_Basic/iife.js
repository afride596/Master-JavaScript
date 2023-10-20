// immediate invoked function expression

The purpose of using IIFE use to avoid the global scope 

(function chai(){
    console.log(`DN CONNECTED`);
})();
// creation and execution
((name)=>{
    console.log(`Hello World ${name}`);
})('hiyed')
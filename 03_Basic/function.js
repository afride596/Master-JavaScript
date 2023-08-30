// console.log("A");
// console.log("F");
// console.log("R");
// console.log("I");
// console.log("D");
// console.log("E\n");

function sayMyName(){
    console.log("A");
console.log("F");
console.log("R");
console.log("I");
console.log("D");
console.log("E\n");
}
// sayMyName();
// sayMyName();
// sayMyName();
// sayMyName();

function addTwoNumber(num1,num2){
    let res=num1+num2
    console.log(res);
    // return num1+num2
    // return res
}
// let res =addTwoNumber(2,5)
// addTwoNumber(2,5)
// console.log(res)

function loginUserMessage(username="afridde"){
    if (!username){
        return "Welcome Admin"
        }else{
            return `welcome ${username}`
            }
              
}
console.log(loginUserMessage());



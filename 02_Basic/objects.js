// singleton

// object literals
// --------------------------------------
const mysym = Symbol("key1");

const jsuser = {
  name: "afride",
  age: 24,
  [mysym]: "key22",
  location: "vijayawada",
  isloggedin: false,
  email: "afride@google.com",
  lastLoginday: ["monday", "friday"],
};  
// console.log(jsuser.email);
// console.log(jsuser["email"]);-we can aceess like this also with string
// console.log(jsuser[mysym]);

//it will freeze the object so we can change inside the object
// Object.freeze(jsuser)
// jsuser.email="ad";
// console.log(jsuser);
//------------------------------------------------------

//  function in object 

jsuser.greeting = function () {
  console.log("hello Js user");
};
jsuser.greetingTwo = function () {
  console.log(`hello js user ${this.name}`);
};
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

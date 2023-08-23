// console.log(2<1);
// console.log(2!=1);

// console.log(null>0)
// console.log(null<0)
// console.log(null==0)
// console.log(null<=0)

// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined<0)

// console.log("2"===2)  


//premetive dataType

//  7 types: String , Number,Boolearn,Null,undenfined,symbol BigInt 

// nonPremtive dataType 
// Array object,Function 

// stack(premitive),

// let youtubeName='afrideMohammad'
//  let anotherName=youtubeName;
//  console.log(anotherName)
//  anotherName="mohammadafride"
//  console.log(anotherName);

//  Heap(non-primitive)

let UserAccount1={
    email:"afride@google.com",
    upi:"ause@icicibank"


}
let UserAccount2=UserAccount1;

 UserAccount2={
    email:'afride@hdfc.com',
    upi:'ididi@idfcbank'
}
UserAccount1.email="afride@hdfcbank.com"
console.log(UserAccount1.upi)
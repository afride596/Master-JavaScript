 //Dates

//  let mydate=new Date()
//  console.log(mydate);
//  console.log( typeof mydate);
//  console.log(mydate.toLocaleDateString());
//  console.log(mydate.toString());
//  console.log(mydate.toDateString());

 let createMydate=new Date(2023,0,14)
console.log(createMydate.toDateString());
console.log(createMydate.toLocaleDateString());
console.log(createMydate.toLocaleString());

let mytimestamp = Date.now()

console.log(mytimestamp);
console.log(createMydate.getTime());

let newDate =new Date()
console.log(newDate.toLocaleString());
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());
console.log(newDate.getHours());
newDate.toLocaleString('default',{
    weekday:"long",
})

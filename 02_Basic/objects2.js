const tinderUser=new Object() //=>singleTon object
// const tinderUser={} // =>non singleton object

tinderUser.id ="123abc"
tinderUser.name="Mohammad"
tinderUser.isLoggedIn=false
 

// console.log(tinderUser);


const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userFullName:{
            firstName: "mohammad",
            lastName :"afride",
            
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

const obj4={...obj1,...obj2,...obj3}
// console.log(obj4);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedoff'));

const course={
    course:"fsjs2.O",
    price:"17000",
    courseInstructor:"hitesh"
}
// console.log(course.courseInstructor);

// object destructure
const {courseInstructor:instructor}=course 

console.log(instructor);

// react 
const navbar=({company})=>{

}
navbar(company='hitesh')

// [
//     {}
//     {}
//     {}

// ]
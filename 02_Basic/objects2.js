const tinderUser = new Object(); //=>singleTon object
// const tinderUser={} // =>non singleton object

tinderUser.id = "123abc";
tinderUser.name = "Mohammad";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// object inside object

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userFullName: {
      firstName: "mohammad",
      lastName: "afride",
    },
  },
};
console.log(regularUser.fullname.userFullName.firstName);
console.log(regularUser.fullname.userFullName.lastName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

const obj4 = { ...obj1, ...obj2, ...obj3 };
console.log(obj4);

// object method

// Object.keys() returns an array of a given object's own enumerable property names.
// Object.values() returns an array of a given object's own enumerable property values.
// Object.entries() returns an array of a given object's own enumerable property [key, value]
// pairs.
// hasOwnProperty() returns a boolean indicating whether the object has the specified property as its own property (
// not inherited).
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// Object de-structure
const course = {
  course: "fsjs2.O",
  price: "17000",
  courseInstructor: "hitesh",
};
console.log(course.courseInstructor); // hitesh
// to make clean code

// object destructure

const { courseInstructor } = course;
console.log(courseInstructor);

// here we can modify the name courseInstructor with instructor
const { courseInstructor: instructor } = course;
// here we can modify the name
console.log(instructor);

// react
const navbar = ({ company }) => {
    
};
navbar((company = "hitesh"));

// [
//     {}
//     {}
//     {}

// ]

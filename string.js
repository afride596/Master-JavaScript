// string interplation

const name='Afride';
const repoCount=50
console.log(name+repoCount+"value")// ==>Bakwas Method 
// String interpolation ->best method 
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

// For using String Method we need to declare string newclass

const gaming=new String("afride-vc")
 
// String Method

console.log(gaming.slice(-9, 4)); //=> vcc
gaming.toUpperCase() //==> AFRIDE-VC
gaming.toLowerCase(); //=> afride-vc
gaming.split("-"); //=> ["af","ride", "vc"]
gaming.concat('123'); // => afride-v123c
console.log(gaming.substring(1,9)) ; //=> deide-vc
console.log(gaming.indexOf('d')) ; //=>  4
console.log(gaming.lastIndexOf('i')) ; //=>   1
gaming.includes('a') ; //=> true
console.log(gaming.repeat(3));//=> afridde-vcvcvcvc
console.log(gaming.replace('r','i'))




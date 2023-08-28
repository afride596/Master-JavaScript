const marvel_hero=["thor","ironMan","spiderman"]
const dc_hero=["superman","flash","batman"]


const all_hero=marvel_hero.concat(dc_hero)
console.log(all_hero);
 
const all_new_hero=[...marvel_hero,...dc_hero]// spreadValues
console.log(all_new_hero);

const another_array=[1,2,3,4,[5,6,7],5,[6,8,[4,5]]]

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);


//array literal
var array = [3,4,7,8,7,45,32,66];

//sort the aaray in ascending order
var array_sorted = array.sort ((a , b) => a - b);

console.log(array_sorted);


//array_sorted.reversed();

//push will remove an item from the end of the array
array.pop();
console.log(array);

//check to see if an numbers met


//check to see if all numbers meet certain condition
aaray.every(num => num > 100); //true

//reduce method 
console.log(array.reduce((a,b) => a + b)); 

//join existing array with another array
aaray2 = [110,120,130,200];

console.log(array.concat(array2));

//how do we join array items according to a specific delimiter
let words = ['Hello', 'World'];
let sentence = words.join(' ');
console.log(sentence);


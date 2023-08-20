// Arrays
// an arrays is a collection of items that are ordered and accessed by index starting at 0 (zero-based index) and can be modified (mutable)

//const array = new Array(); // empty array

const array = [1, 2, 3, 4]; // array with 5 elements


let array2 = [...array, 5]; // copy of array with new element added at the end

const array3 = array2.map((n) => n * 2); // array with each element multiplied by 2


console.log(array);
console.log(array2);
console.log(array3);
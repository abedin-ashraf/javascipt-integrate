const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers.slice(3, 5));
console.log(numbers);

//Splice to remove 2 element from an array
const splice = numbers.splice(3, 2);
console.log(splice);
console.log(numbers);

const splice2 = numbers.splice(1, 3, 'C', 'Python', 'java');
console.log(splice2);
console.log(numbers);
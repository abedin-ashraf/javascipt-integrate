const anthem = 'Amar Sonar Bangla Ami Tumai Valobashi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
console.log(words);
// console.log(withoutA);

console.log(anthem.slice(5, 13));

const anotherPart = anthem.substr(11, 6);
console.log(anotherPart);

const part = anthem.substring(11, 17);
console.log(part);

//concaat 

const first = 'Amader';
const second = 'City';
console.log(first + second);

console.log(first.concat(second).concat('Chattogram'));

const words2 = ['A', 's', 'h', 'r', 'a', 'f'];
const allJoined1 = words2.join('');
console.log(allJoined1);
const allJoined2 = words2.join(' ');
console.log(allJoined2);
const allJoined3 = words2.join(', ');
console.log(allJoined3);
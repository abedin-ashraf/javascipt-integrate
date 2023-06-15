const numbers = [2, 1, 4, 3, 6, 8, 6, 5, 7, 9];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

const friends = [
    'kabil', 'josidm', 'anwar', 'dipjol', 'badsha'
]

console.log(friends.sort());

const reverseFriend = [
    'kabil', 'josidm', 'anwar', 'dipjol', 'badsha'
]
console.log(reverseFriend.sort().reverse());


//Number sorting fun
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumbers);
function meagFriend(friends) {
    if (Array.isArray(friends) == false) {
        return "please provide an array";
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kutub', 'laion', 'sabbir', 'sayab'];
const myBigBuddy = meagFriend(friends);
// console.log(myBigBuddy);

if (friends.indexOf('sabbir') != -1) {
    console.log('Sabbir exists');
}
//Using includes in an Array
if (friends.includes('sabbir')) {
    console.log('Sabbir exists');
}

//concat

const first = [1, 2, 4, 5, 6];
const second = [5, 6, 7, 8, 9];
console.log(first.concat(second));
function addNumbers(num1, num2) {
    console.log(arguments);
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

const sum = addNumbers(23, 13, 14, 100);
console.log(sum);


function getFullName() {
    let fullName = '';
    for (let i = 0; i < arguments.length; i++) {
        fullName += arguments[i] + ' ';
    }
    return fullName;
}
console.log(getFullName('hanif', 'bin', 'sonket'));
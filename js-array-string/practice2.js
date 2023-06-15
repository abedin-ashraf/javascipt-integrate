const names = ['Jamshed', 'md raihan', 'Md Kaisar', 'MD Abdullah', 'mD Shohid'];

function select(names) {
    var sortedNames = [];
    for (const name of names) {
        if (name.toLowerCase().indexOf('md') != -1) {
            sortedNames.push(name);
        }
    }
    return sortedNames;
}

const sortName = select(names);
console.log(sortName);
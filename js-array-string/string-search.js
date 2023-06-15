const products = [
    'Dell hardcore i29 200GB laptop',
    'Iphone 12 Pro',
    'Yellow laptop with',
    'Low Price Phone',
    'Dell Purple color Phone',
    'GTC Phone Laptop'
];

const seraching = 'laptop';
const seraching2 = 'Dell';
const seraching3 = 'Phone';
const output = [];

// for (const product of products) {
//     if (product.toLowerCase().indexOf(seraching) != -1) {
//         output.push(product);
//     }
// }

// console.log(output);

// for (const product of products) {
//     if (product.toLowerCase().includes(seraching.toLowerCase())) {
//         output.push(product);
//     }
// }

// for (const product of products) {
//     if (product.toLowerCase().startsWith(seraching2.toLowerCase())) {
//         output.push(product);
//     }
// }

for (const product of products) {
    if (product.toLowerCase().endsWith(seraching3.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);
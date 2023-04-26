console.log("I am from the summary JS file");

const blogs = document.getElementsByTagName('p');
// console.log(blogs);

for (const blog of blogs) {
    blog.style.backgroundColor = 'steelblue';
    blog.style.color = 'white';
}

const harun = document.getElementById('speical-blog');

harun.innerHTML = `
    <h3>Special inner HTML </h3>
`

const friends = document.getElementById('friends');
// console.log(friends.childNodes);
const fifth = friends.children[4];
console.log(fifth);
friends.removeChild(fifth);

//create elemetn

const friend = document.createElement('li');
friend.innerText = 'My friend - 11';
friends.appendChild(friend);
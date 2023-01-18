document.getElementById('container').innerText = "Hello";

let userData;
let getData = async (url) => {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    console.log(data.message);

    userData = data.message;
}


let url = "https://dog.ceo/api/breeds/list/all"
getData(url);
userData ? console.log(userData) : null;
// setTimeout(() => {
//     console.log(userData);
// }, 1000);


// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (var i = 0; i < 10; i++) {
//     setTimeout(() => console.log(i), 10000);
// }

// for (var i = 0; i < 10; i++) {
//     setTimeout(() => console.log(b[i]), 1000);
// }
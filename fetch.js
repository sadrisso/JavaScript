
let url = 'https://api.restful-api.dev/objects';
let factPera = document.querySelector('.fact-pera');
let btn = document.querySelector('.btn');


// ASYNC AWAIT... 

const get_data = async () => {
    console.log('Getting data...')
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    factPera.innerText = data;
    console.log(data)
};


// PROMISE CHAINING...

// function getData () {
//     fetch(url).then((res) => {
//         return res.json();
//     }).then((data) => {
//         console.log(data);
//         factPera.innerText = data[1].name;
//     })
// }

btn.addEventListener('click', get_data);

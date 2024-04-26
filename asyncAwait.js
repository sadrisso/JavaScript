
// const asyncData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('weather data...');
//             resolve('success');
//         }, 2000);
//     });
// };


// async function getData() {
//     await asyncData();
//     await asyncData();
// }

// getData();


const api = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data', id);
            resolve('Success')
        }, 2000);
    })
}

async function get_data() {
    console.log('Getting data 1...')
    await api(1)
    console.log('Getting data 2...')
    await api(2)
    console.log('Getting data 3...')
    await api(3)
    console.log('Getting data 4...')
    await api(4)
}
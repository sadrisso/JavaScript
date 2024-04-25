// let promise = new Promise((resolve, reject) => {
//     console.log('I am a promise!')
//     resolve('Success!')
// });

// console.log(promise)


function get_data(dataId) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data', dataId)
            resolve('success');
        }, 5000);
    }); 
}

// get promise with then..

const get_promise = () => {
    return new Promise((resolve, reject) => {
        console.log('I am promise')
        resolve('success..')
    });
};

let promise = get_promise();
promise.then((res) => {
    console.log('Promise fullfiled', res)
});


// get rejected promise with catch..

const get_rejected_promise = () => {
    return new Promise((resolve, reject) => {
        reject('Network error');
    });
};

let rejectedPromise = get_rejected_promise();
promise.catch((err) => {
    console.log(err);
});


// promise chaining...

const async_data1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fetching data 1...');
            resolve('success');
        }, 3000);
    });
};

const async_data2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fetching data 2...');
            resolve('success');
        }, 3000);
    });
};

let p1 = async_data1();
p1.then((res) => {
    console.log(res)
    let p2 = async_data2();
    p2.then((res) => {
        console.log(res)
    });
});



const data = (dataId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data', dataId);
            resolve('success')
        }, 2000);
    });
}

data(1).then((res) => {
    return data(2)
}).then((res) => {
    return data(3)
}).then((res) => {
    console.log(res)
})
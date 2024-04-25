
function get_data(dataId, get_next_data) {
    setTimeout(() => {
        console.log('Data ', dataId)
        if (get_next_data) {
            get_next_data();
        };
    }, 2000)
}

get_data(1, () => {
    console.log('Next data is loading');
    get_data(2, () => {
        console.log('Next data is loading');
        get_data(3, () => {
            console.log('Next data is loading');
            get_data(4)
        });
    });
});

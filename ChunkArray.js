function chunkArray(array, size) {

    let data = [];

    while (array.length > 0) {
        data.push(array.splice(0, size));
    };

    return data;
};

console.log(chunkArray(["a", "b", "c", "d", ], 2));
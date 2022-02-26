function isDivisbleByN(arr, n) {
    const newArr = arr.filter((el) => el % n === 0);
    return newArr;
}

module.exports = isDivisbleByN

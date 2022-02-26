function replaceDivisible(x, y) {
    const newArr = x.map(el => (el % y === 0 ? "isDivisible" : el));
    return newArr;
}

module.exports = replaceDivisible

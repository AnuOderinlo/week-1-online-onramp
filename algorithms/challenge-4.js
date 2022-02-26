function highestSum(x, y) {
    let ini = 0;
    x = x.reduce((ini, el) => ini + el);
    y = y.reduce((ini, el) => ini + el);

    const highest = x > y ? x : y;

    return highest;
}

module.exports = highestSum
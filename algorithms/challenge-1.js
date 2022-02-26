function noOfElements(x, y, z) {
    let count = 0;
    x.forEach( el => {
        if (el >= y && el <= z) {
            count++;
        }
    });
    return count;
}

module.exports = noOfElements

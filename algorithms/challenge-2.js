function divisible(a) {
    let count = 0;

    a.forEach((el) => {
      if (el % 2 === 0 && el > 15) {
        count++;
      }
    });
    return count;
}

module.exports = divisible

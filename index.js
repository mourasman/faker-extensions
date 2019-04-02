const faker = require('faker');

module.exports = (() => {
  faker.random.prototype.alpha = (count = 1) => {
    let wholeString = "";
    for(let i = 0; i < count; i++) {
      wholeString += faker.random.arrayElement(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
    }

    return wholeString;
  }
})();

module.exports = function check(str, bracketsConfig) {
  while (true) {
    const bracketsArray = bracketsConfig.map((g) => {
      return g.join("");
  });
        let lengthStringUpdated = str.length;
    for (let e = 0; e < bracketsArray.length; e++) {
      str = str.replace(bracketsArray[e], "");
  }
    if (str.length === 0 || lengthStringUpdated === str.length) {
      break;
  }
}
  return str.length === 0;
}

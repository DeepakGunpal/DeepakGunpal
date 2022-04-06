const text = '        functionUp        '
const trim = text.trim();
// console.log(text);
// console.log(trim);

const lowerCase = text.toLowerCase();
const upperCase = text.toUpperCase();
// console.log(lowerCase);
// console.log(upperCase);

const hardcode = {trim,lowerCase,upperCase};
module.exports.hardcode = hardcode
// module.exports.trim = trim;
// module.exports.lowerCase = lowerCase;
// module.exports.upperCase = upperCase;
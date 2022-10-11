const romanNumeralsObj = {
  ones: ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", 1],
  tens: ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", 10],
  hundreds: ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", 100],
  thousands: ["", "M", "MM", "MMM", 1000]
}
const temp = 'III';
let romanNumerals = temp.toUpperCase();
let totalValue = 0;
for (let i = Object.keys(romanNumeralsObj).length - 1; i >= 0; i--) {
  let currElem = romanNumeralsObj[Object.keys(romanNumeralsObj)[i]];
  for (let j = currElem.length - 2; j >= 0; j--) {
    if(romanNumerals.indexOf(currElem[j]) == 0){
      totalValue += currElem[currElem.length - 1] * j;
      romanNumerals = romanNumerals.substring(currElem[j].length);
      break;
    }
  }
}
if(totalValue > 0 && totalValue < 4000 && romanNumerals.length == 0){
  document.write(`Roman Numerals: ${temp} <br>`);
  document.write(`Hindu Numerals : ${totalValue}`);
}
else{
  document.write('Invalid numerals → ', temp);
}
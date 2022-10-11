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
  let romanNumeralsArrElement = romanNumeralsObj[Object.keys(romanNumeralsObj)[i]];
  for (let j = romanNumeralsArrElement.length - 2; j >= 0; j--) {
    if(romanNumerals.indexOf(romanNumeralsArrElement[j]) == 0){
      totalValue += romanNumeralsArrElement[romanNumeralsArrElement.length - 1] * j;
      romanNumerals = romanNumerals.substring(romanNumeralsArrElement[j].length);
      break;
    }
  }
}
if(totalValue > 0 && totalValue < 4000 && romanNumerals.length == 0){
  document.write(`Roman Numeral: ${temp} <br>`);
  document.write(`Arabic Numeral: ${totalValue}`);
}
else{
  document.write('SOMETHING WENT WRONG!');
}


// const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
// const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
// const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
// const thousands = ["", "M", "MM", "MMM"];
// for (let i = 9; i > 0; i--) {
//   if(romanNumerals.indexOf(thousands[i]) == 0){
//     totalValue += 1000 * i;
//     romanNumerals = romanNumerals.substring(thousands[i].length);
//     index++;
//     break;
//   }
// }
// for (let i = 9; i < 10; i--) {
//   if(romanNumerals.indexOf(hundreds[i]) == 0){
//     totalValue += 100 * i;
//     romanNumerals = romanNumerals.substring(hundreds[i].length);
//     index++;
//     break;
//   }
// }
// for (let i = 9; i < 10; i--) {
//   if(romanNumerals.indexOf(tens[i]) == 0){
//     totalValue += 10 * i;
//     romanNumerals = romanNumerals.substring(tens[i].length);
//     index++;
//     break;
//   }
// }
// for (let i = 9; i < 10; i--) {
//   if(romanNumerals.indexOf(ones[i]) == 0){
//     totalValue += 1 * i;
//     romanNumerals = romanNumerals.substring(ones[i].length);
//     index++;
//     break;
//   }
// }

// if(totalValue > 0 && totalValue < 4000 && romanNumerals.length == 0){
//   document.write(totalValue);
// }
// else{
//   document.write('SOMETHING WENT WRONG!');
// }

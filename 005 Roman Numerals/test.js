RomanConverter = {};
RomanConverter.convertFunctions = {
  init: function () {
    this.ones = new Array(10);
    this.ones[0] = "";
    this.ones[1] = "I";
    this.ones[2] = "II";
    this.ones[3] = "III";
    this.ones[4] = "IV";
    this.ones[5] = "V";
    this.ones[6] = "VI";
    this.ones[7] = "VII";
    this.ones[8] = "VIII";
    this.ones[9] = "IX";

    this.tens = new Array(10);
    this.tens[0] = "";
    this.tens[1] = "X";
    this.tens[2] = "XX";
    this.tens[3] = "XXX";
    this.tens[4] = "XL";
    this.tens[5] = "L";
    this.tens[6] = "LX";
    this.tens[7] = "LXX";
    this.tens[8] = "LXXX";
    this.tens[9] = "XC";
    this.hundreds = new Array(10);
    this.hundreds[0] = "";
    this.hundreds[1] = "C";
    this.hundreds[2] = "CC";
    this.hundreds[3] = "CCC";
    this.hundreds[4] = "CD";
    this.hundreds[5] = "D";
    this.hundreds[6] = "DC";
    this.hundreds[7] = "DCC";
    this.hundreds[8] = "DCCC";
    this.hundreds[9] = "CM";
    this.thousands = new Array();
    this.thousands[0] = "";
    this.thousands[1] = "M";
    this.thousands[2] = "MM";
    this.thousands[3] = "MMM";
    console.log(this);
  },
  roman2arabic: function (roman_numeral) {
    var value = roman_numeral.toUpperCase();
    var ret = 0;
    for (
      i = RomanConverter.convertFunctions.init().thousands.length - 1;
      i >= 0;
      i--
    ) {
      if (value.indexOf(this.thousands[i]) == 0) {
        ret += 1000 * i;
        value = value.substring(this.thousands[i].length);
        break;
      }
    }
    for (i = this.init().hundreds.length - 1; i >= 0; i--) {
      if (value.indexOf(this.hundreds[i]) == 0) {
        ret += 100 * i;
        value = value.substring(this.hundreds[i].length);
        break;
      }
    }
    for (i = this.init().tens.length - 1; i >= 0; i--) {
      if (value.indexOf(this.tens[i]) == 0) {
        ret += 10 * i;
        value = value.substring(this.tens[i].length);
        break;
      }
    }
    for (i = this.init().ones.length - 1; i >= 0; i--) {
      // value = XIIII, value.indexOf('III') = 3
      if (value.indexOf(this.ones[i]) == 0) {
        console.log(value.indexOf(this.ones[i]));
        ret += i;
        // I
        value = value.substring(this.ones[i].length);
        break;
      }
    }
    if (ret > 0 && ret < 4000 && value.length == 0) {
      return ret;
    }
    return "Wrong Numerals";
  },
};

// console.log(RomanConverter.convertFunctions.roman2arabic('CD'));
// RomanConverter.convertFunctions.init()

// RomanConverter.convertFunctions.roman2arabic('MMMCDXCIX')
document.write(RomanConverter.convertFunctions.roman2arabic("MMMDXIII"));
// RomanConverter.convertFunctions.init()

let userString = 'abcdabc';
let counter = 0;
let subString = '';
let strRes = userString;
let obj = {};

for (let i = 0; i < userString.length; i++) {
    if(subString.match(userString[i]) || i == (userString.length - 1)){
        if(subString.match(userString[i])){
            obj[i] = subString;
            subString = userString[i];
            break;
        }
    }
    else{
        subString += userString[i];
    }
}

for (let j = 0; j < Object.keys(obj).length; j++) {
    if(strRes.length > obj[Object.keys(obj)[j]].length){
        numRes = obj[Object.keys(obj)[j]].length;
        strRes = obj[Object.keys(obj)[j]];
    }
}

document.write('Length: ' + strRes.length + '<br>Substring: ' + strRes);
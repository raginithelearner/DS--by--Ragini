let list1 = [3, 2, 5];
let list1Val = "";
let list2 = [1, 4, 6];
let list2Val = "";
let val;
let finalVal = [];

for (let i = 1; i <= list1.length + list2.length; i++) {
    if(list1[list1.length - i] != undefined){
        list1Val += list1[list1.length - i];
    }
    if(list2[list2.length - i] != undefined){
        list2Val += list2[list2.length - i];
    }
}
val = (parseInt(list1Val) + parseInt(list2Val)).toString().split('');
for (let i = 1; i <= val.length; i++) {
    finalVal += val[val.length - i];
}
finalVal = finalVal.toString().split('');
document.write(finalVal);
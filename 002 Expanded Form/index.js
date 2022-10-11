const num = '3999';
let zeros = num.length;
let expanded = '';
[...num].forEach(n => {

    expanded += n.padEnd(zeros, '0');
    if(zeros > 1){
        expanded += ' + ';
    }
    zeros--;
})

document.write(expanded);
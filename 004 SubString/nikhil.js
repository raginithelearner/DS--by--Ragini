const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const str = "NikhilRaginiAarushiJanki";
let strTemp = "";
let temp = "";
let xyz = "";
[...str].forEach(ch => {
  if (!strTemp.includes(ch)) {
    strTemp += ch;
    xyz = strTemp
  }
  else {
    if (temp.length < strTemp.length) {
      temp = strTemp;
    }
    strTemp = ch;
  }  
});
h1.textContent = (temp.length < xyz.length) ? xyz : temp;
h2.innerHTML = str.replace(temp, `<b style="background-color:green; color:white; padding: 5px; border-radius: 5px">${h1.textContent}</b>`);
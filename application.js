let firstpage = document.getElementById('firstpage');
let secondpage = document.getElementById('secondpage');
let sendinfo = document.getElementById('sendinfo');
let sendinfo1 = document.getElementById('sendinfo1');
// let buttontext = document.getElementById('butntxt')

let count = 0;
sendinfo.onclick = function(){
    firstpage.style.display = 'none';
    secondpage.style.display = 'flex';
}
sendinfo1.onclick = function(){
    document.getElementById('form').style.display = 'none';
    document.getElementById('greeting').style.display = 'flex';
    document.getElementById('greeting').style.justifyContent = 'center';
}
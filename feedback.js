let form_beginning = document.getElementById('formbackgr');
let form_only_production = document.getElementById('formbackgr1');
let form_only_shop = document.getElementById('formbackgr2');
let form_all_services = document.getElementById('formbackgr3');
let gratitute_page = document.getElementById('gratitude_page');
let checkbox_ouritems = document.getElementById('ouritems');
let checkbox_cartuning = document.getElementById('cartuning');

document.getElementById('continue').onclick = function(){
    if(checkbox_ouritems.checked == true && checkbox_cartuning.checked == true){
        form_beginning.style.display = 'none';
        form_all_services.style.display = 'flex';
    }
    else if(checkbox_ouritems.checked == false && checkbox_cartuning.checked == false){
        alert('Please, choose what service did you use')
    }
    else if(checkbox_ouritems.checked = true && checkbox_cartuning.checked == false){
        form_beginning.style.display = 'none';
        form_only_production.style.display = 'flex';
    }
    else if(checkbox_cartuning.checked == true && checkbox_ouritems.checked == false){
        form_beginning.style.display = 'none';
        form_only_shop.style.display = 'flex';
    }
}
// function feedback_sending(){
//     if(form_only_production.style.display == 'flex'){
//         form_only_production.style.display = 'none';
//         gratitute_page.style.display = 'flex';
//     }
//     form_only_production.style.display = 'none';
//     gratitute_page.style.display = 'flex';
// }
document.getElementById("feedsend1").onclick = function(){
    form_only_production.style.display = 'none';
    gratitute_page.style.display = 'flex';
}

document.getElementById("feedsend2").onclick = function(){
    form_only_shop.style.display = 'none';
    gratitute_page.style.display = 'flex';
}

document.getElementById("feedsend3").onclick = function(){
    form_all_services.style.display = 'none';
    gratitute_page.style.display = 'flex';
}
let firstpage = document.getElementById('firstpage');
let secondpage = document.getElementById('secondpage');
let sendinfo = document.getElementById('sendinfo');
let sendinfo1 = document.getElementById('sendinfo1');
let first_name = document.getElementById('fname');
let last_name = document.getElementById('lname');
let email = document.getElementById('mail');
let phone_number = document.getElementById('phonenumb'); 
let adress = document.getElementById('adress');
let postcode = document.getElementById('postcode');
let town = document.getElementById('town');
let vehicle = document.getElementById('car');
// let buttontext = document.getElementById('butntxt')

let count = 0;
sendinfo.onclick = function(){
    // if(document.getElementById('fname').value == ''){
    //     alert('Please, fill a First Name cell');
    //     document.getElementById('fname').style.border = '2px solid red'
    // };
    // else if(document.getElementById('lname').value == ''){
    //     alert('Please, fill a Last Name cell');
    //     document.getElementById('lname').style.border = '2px solid red'
    // };
    // else if(document.getElementById('mail').value == ''){
    //     alert('Please, fill an Email cell');
    //     document.getElementById('mail').style.border = '2px solid red'
    // };
    // else if(document.getElementById('phonenumb').value == ''){
    //     alert('Please, fill a Phone Number cell');
    //     document.getElementById('phonenumb').style.border = '2px solid red'
    // };
    // else{
    //     firstpage.style.display = 'none';
    //     secondpage.style.display = 'flex';
    // }

    if (first_name.value == ''){
        alert('Please, fill a First Name cell');
        first_name.style.border = '2px solid red';
        last_name.style.border = 'none';
        email.style.border = 'none';
        phone_number.style.border = 'none';
    }
    else if (first_name.value != '' && last_name.value == ''){
        alert('Please, fill a Last Name cell');
        document.getElementById('lname').style.border = '2px solid red';
        first_name.style.border = 'none';
        email.style.border = 'none';
        phone_number.style.border = 'none';
    }
    else if (last_name.value != '' && email.value == ''){
        alert('Please, fill an Email cell');
        document.getElementById('mail').style.border = '2px solid red';
        last_name.style.border = 'none';
        first_name.style.border = 'none';
        phone_number.style.border = 'none';
    }
    else if (email.value != '' && phone_number.value == ''){
        alert('Please, fill a Phone Number cell');
        document.getElementById('phonenumb').style.border = '2px solid red'
        last_name.style.border = 'none';
        email.style.border = 'none';
        first_name.style.border = 'none';
    }
    else{
        firstpage.style.display = 'none';
        secondpage.style.display = 'flex';
    }
}
sendinfo1.onclick = function(){
    if (adress.value == ''){
        alert('Please, fill an Building Adress cell');
        adress.style.border = '2px solid red';
        postcode.style.border = 'none';
        town.style.border = 'none';
        vehicle.style.border = 'none';
    }
    else if (adress.value != '' && postcode.value == ''){
        alert('Please, fill a Postal Code cell');
        document.getElementById('postcode').style.border = '2px solid red';
        adress.style.border = 'none';
        town.style.border = 'none';
        vehicle.style.border = 'none';
    }
    else if (postcode.value != '' && town.value == ''){
        alert('Please, fill a Town cell');
        document.getElementById('town').style.border = '2px solid red';
        postcode.style.border = 'none';
        adress.style.border = 'none';
        vehicle.style.border = 'none';
    }
    else if (town.value != '' && vehicle.value == ''){
        alert('Please, fill a Vehicle cell');
        document.getElementById('vehicle').style.border = '2px solid red';
        postcode.style.border = 'none';
        town.style.border = 'none';
        adress.style.border = 'none';
    }
    else{
        document.getElementById('form').style.display = 'none';
        document.getElementById('greeting').style.display = 'flex';
        document.getElementById('greeting').style.justifyContent = 'center';
    }
}



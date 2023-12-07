import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const XLSX = require('xlsx');

const workbook = XLSX.readFile('database.xlsx');
const worksheet = workbook.Sheets['Sheet1'];

const arrClients = XLSX.utils.sheet_to_json(worksheet);

const new_customer_number = arrClients[arrClients.length-1].Customer_Number + 1;

let name = document.getElementById('fname').value;
let surname = document.getElementById('lname').value;
let email = document.getElementById('mail').value;
let phone_number = document.getElementById('phonenumb').value;
let adress = document.getElementById('adress').value;
let postcode = document.getElementById('postcode').value;
let town = document.getElementById('town').value;
let vehicle = document.getElementById('car').value;

document.getElementById('sendinfo').onclick = function(){
    name = document.getElementById('fname').value;
    surname = document.getElementById('lname').value;
    email = document.getElementById('mail').value;
    phone_number = document.getElementById('phonenumb').value;
}

document.getElementById('sendinfo1').onclick = function(){
    adress = document.getElementById('adress').value;
    postcode = document.getElementById('postcode').value;
    town = document.getElementById('town').value;
    vehicle = document.getElementById('car').value;
}

console.log(name, surname, email, phone_number, adress, postcode, town, vehicle);

// let new_customer = {
//     Customer_Number: new_customer_number,
//     First_name: name, 
//     Last_name: surname, 
//     Email: email,
//     Phone_Number: phone_number,
//     Building_Adress: adress,
//     Postal_Code: postcode,
//     Town: town,
//     Vehicle: vehicle
// }

// console.log(new_customer_number);


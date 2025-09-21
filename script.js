let ONButton = document.getElementById('ONButton');
let OFFButton = document.getElementById('OFFButton');
let Bulb = document.querySelector('img');
let body = document.querySelector('body');

ONButton.addEventListener('click', () => {
    Bulb.src = "./pic_bulbon (1).gif";
    body.style.backgroundColor = 'white';
    ONButton.className = 'border-2 border-green-700 hover:bg-green-700 hover:text-white cursor-pointer font-semibold rounded-lg p-2';
    OFFButton.className = 'border-2 border-black hover:bg-black hover:text-white cursor-pointer font-semibold rounded-lg p-2';


});


OFFButton.addEventListener('click', () => {
    Bulb.src = "./pic_bulboff (1).gif";
    body.style.backgroundColor = 'black';
    ONButton.className = 'border-2 border-white hover:bg-blue-900 text-white cursor-pointer font-semibold rounded-lg p-2';
    OFFButton.className = 'border-2 border-white hover:bg-gray-700 text-white cursor-pointer font-semibold rounded-lg p-2';

});
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

var agree = document.getElementById("agree");
var btn = document.getElementById("btn");

let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");
let eyicon = document.getElementById("eyicon");
let pasword = document.getElementById("pasword");


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function enable() {
    if(agree.checked) {
        btn.removeAttribute("disabled");
     } else {         
        btn.disabled = "true";
    }
    
};

function lettersOnly(input) {
    var regex = /[^A-Z ]/;
    input.value = input.value.replace(regex, "");
};

function passOnly(input) {
    var regex = /[^a-zA-Z0-9_]{0, 10}$/gi;
    input.value = input.value.replace(regex, "");
};

function numOnly(input) {
    var regex = /[^0-9]/g;
    input.value = input.value.replace(regex, "");
    
    if (input.value.length > 10) {
        input.value = input.value.substring(0, 10);
    }
};

eyeicon.onclick = function(){
    if(password.type === "password") {
        password.type = "text";
        eyeicon.className = "bx bx-show";
    } else{
        password.type = "password";
        eyeicon.className = "bx bx-hide";
    }
};

eyicon.onclick = function(){
    if(pasword.type === "password") {
        pasword.type = "text";
        eyicon.className = "bx bx-show";
    } else{
        pasword.type = "password";
        eyicon.className = "bx bx-hide";
    }
};
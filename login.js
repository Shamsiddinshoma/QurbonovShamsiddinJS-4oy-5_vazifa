const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById('password');
const output = document.getElementById('output');
const signUp = document.getElementById('signUp');
const signIn = document.getElementById('signIn');
const log1 = document.getElementById('log1');
const username1 = document.getElementById('username1');
const password1 = document.getElementById('password1');
const FormsignUp = document.querySelector('.FormsignUp');
const adminroom = document.getElementById('adminroom');
const room = document.getElementById('room');

import valueBase from "./base.js";  


adminroom.addEventListener('click', () => {
    
})

log1.addEventListener("submit" , () => {
    valueBase.push({username: username1.value,password: password1.value})
})


signIn.addEventListener('click', () => {
    loginForm.classList.toggle('activeloginForm')
})



console.log(valueBase);


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;


    const user = valueBase.find((user) => user.username === username);

    if (user && user.password === password) {
        window.location.href = "./site.html";
    }else{
        signIn.style.display = 'none';
        loginForm.style.display = 'none';
        alert('MALUMOTGA EGA EMAS');
        FormsignUp.style.display = 'flex';
        // document.body.style.backgroundColor = 'red';
        // document.body.innerHTML = "<h1 style='color: white; font-size:350px; background-color: red; text-align: center; padding: 50px;'>EROR 404</h1>";
        // setTimeout(() => {
        //     document.body.style.backgroundColor = "";
        //     document.body.innerHTML = "";
        // }, 1000000);
    }

});
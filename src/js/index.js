//Switch Theme light or dark

//Open\Close
document.addEventListener('DOMContentLoaded', function() {
    const switchBlock = document.getElementById('switchBlock');
    const block = document.querySelector('.switch_block');
    
    switchBlock.addEventListener('change', function() {
        if (switchBlock.checked) {
            block.style.display = 'block';
        } else {
            block.style.display = 'none';
        }
    });
});

//ON\OFF
document.addEventListener('click', function() {
    const checkbox = document.getElementById('check');
    const body = document.body;
    
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            body.style.backgroundImage = "url('img/background-dark.jpg')"; // Нова картинка - *зображення має бути відносно файлу index.html
        } else {
            body.style.backgroundImage = "url('img/background-light.jpg')"; // Початкова картинка - *зображення має бути відносно файлу index.html
        }
    });
});


//Form - complete or error

function checkForm(el) {
    let user = el.inputUsername.value;
    let pass = el.inputPassword.value;
    let errorStyle = document.getElementById('error');
    let error = '';

    if(user.length < 5) {
        error = 'Error username';
        errorStyle.style.color = 'red';
        errorStyle.style.fontWeight = 'bold';
    } else if(pass.length < 5) {
        error = 'Error password';
        errorStyle.style.color = 'red';
        errorStyle.style.fontWeight = 'bold';
    }

    if(error != '') {
        document.getElementById('error').innerText = 'Message: ' + error;
        return false;
    } else (error == '')
        document.getElementById('error').innerHTML = "Complete!";
        errorStyle.style.color = 'green';
        errorStyle.style.fontWeight = 'bold';
        window.location = "https://www.google.com.ua/?hl=uk";
        return false;
};


//Switch to Register
document.getElementById('btnReg').addEventListener('click', function() {
    const block = document.querySelector('.block');
    const blockBefore = document.querySelector('.block:last-child');

    block.style.display = 'none';
    blockBefore.style.display = 'block';
});

//Switch to Login
document.getElementById('btnLog').addEventListener('click', function() {
    const block = document.querySelector('.block');
    const blockBefore = document.querySelector('.block:last-child');

    block.style.display = 'block';
    blockBefore.style.display = 'none';
});

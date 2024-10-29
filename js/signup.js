let form = document.getElementById("signUpForm");

function openForm() 
{
    form.style.display = "block";
}
  
function closeForm() 
{
    form.style.display = "none";
}

function validateEmail() 
{
    var errorMessage = document.getElementById("error-message");

    var emailValue = document.getElementById("email").value;
    var passwordValue = document.getElementById("psw").value;

    var isValid = true;
    
    if (emailValue.includes('@')) 
    {
        errorMessage.style.display = 'none';
        errorMessage.textContent += ''; 
    } 
    else 
    {
        errorMessage.style.display = 'block';
        errorMessage.textContent += 'Email must contain an "@" symbol';
        isValid = false;
    }
    if (passwordValue.length >= 8) 
    {
        errorMessage.style.display = 'none';
        errorMessage.textContent += ''; 
    }
    else
    {
        errorMessage.style.display = 'block';
        errorMessage.textContent += '\nPassword must be at least 8 characters long';
        isValid = false;
    }
    if(isValid)
    {
        localStorage.setItem('username', emailValue);
        displayShowAccount(username);
    }
    return isValid; 
}

function checkLogin() {
    const username = localStorage.getItem('username')
    if (username) {
        displayShowAccount(username);
        
    } else {
        displayLogin();
   
    }
}

function displayLogin() {
    document.querySelector(".showAccountBtn").style.display = 'none';
    document.querySelector(".loginBtn").style.display = 'block';

    document.getElementById('signUpForm').style.display = 'none'
    document.getElementById('logout-button').style.display = 'none'
}

function displayShowAccount(username) {
    document.querySelector(".showAccountBtn").style.display = 'block';
    document.querySelector(".loginBtn").style.display = 'none';

    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('account-username').textContent = username;
}


document.getElementById('show-account-button').addEventListener('click', () => {
    document.getElementById('account-popup').style.display = 'block'
})

document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('account-popup').style.display = 'none'
})

document.getElementById('logout-button').addEventListener('click', () => {
    document.getElementById('account-popup').style.display = 'none'
    localStorage.removeItem('username')
    displayLogin()
})

checkLogin()


document.addEventListener('DOMContentLoaded', () => {
    var themeToggleButton = document.getElementById('theme-toggle');
    var currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleButton.textContent = 'Light Mode';
    }

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        themeToggleButton.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
        localStorage.setItem('theme', theme);
    });
});

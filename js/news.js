// Current Date 

let dateButton = document.getElementById("current-date-btn");

let dateText = document.getElementById("current-date-text");

const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];


let x = document.getElementById("cancele")

let canceleDisplay = 0;

function canceleDate(){
    if(canceleDisplay == 1){
        dateText.style.display = 'block'
        x.style.display = 'block';
        canceleDisplay = 0;
    }
}


function currentDate(){

    canceleDisplay = 1;

setInterval( () => {
    let d = new Date();
    let year = d.getFullYear();
    let day = d.getDate();
    let month = monthName[d.getMonth()];
    let time = d.toLocaleTimeString();
    let c_date = month + " " + day + ", " + year + ", " + time;
    return dateText.innerHTML = c_date;
}, 100);


}


function removeDate(){
   x.style.display = 'none';
   dateText.style.display = 'none';
}




// Popup

function openPopup(){
   let  popup = document.getElementById("popup");
   popup.classList.add("open-popup");
    
}

function closePopup(){
    popup.classList.remove("open-popup");
}


const audio1 = new Audio();
audio1.src = "sounds/clickSound.wav";



const audio2 = new Audio();
audio2.src = "sounds/clickSound2.wav";





// Register 

function registerPopup(){
    let registerPopup = document.getElementById("registerPopup");
    registerPopup.classList.add("register-open-popup");
}

function closeRegisterPopup(){
    registerPopup.classList.remove("register-open-popup");
}




// Filter Game News 

let filterItem = document.querySelector('.items-links');
let filterContent = document.querySelectorAll(".game-news");

const currentFilter = localStorage.getItem("filter") || 'all'; 

window.addEventListener('load', () => {
    const activeFilterItem = document.querySelector(`[data-name="${currentFilter}"]`);
    if (activeFilterItem) {
        document.querySelector('.menu-active')?.classList.remove('menu-active');
        activeFilterItem.classList.add('menu-active');
    }

    filterContent.forEach((content) => {
        let filterContents = content.getAttribute('data-name');
        if (filterContents == currentFilter || currentFilter == 'all') {
            content.style.visibility = 'visible';
            content.style.height = 'auto';
            content.style.opacity = '1';
            content.style.transition = 'opacity 0.3s ease, height 0.3s ease';
        } else {
            content.style.visibility = 'hidden';
            content.style.height = '0';
            content.style.opacity = '0';
            content.style.transition = 'opacity 0.3s ease, height 0.3s ease';
        }
    });


    filterItem.addEventListener('click', (selectedItem) => {
        if (selectedItem.target.classList.contains('items-link')) {
            document.querySelector('.menu-active').classList.remove('menu-active');
            selectedItem.target.classList.add('menu-active');
            let filterName = selectedItem.target.getAttribute('data-name');
            filterContent.forEach((content) => {
                let filterContents = content.getAttribute('data-name');
                if (filterContents == filterName || filterName == 'all') {
                    content.style.visibility = 'visible';
                    content.style.height = 'auto';
                    content.style.opacity = '1';
                    content.style.transition = 'opacity 0.3s ease, height 0.3s ease';
                } else {
                    content.style.visibility = 'hidden';
                    content.style.height = '0';
                    content.style.opacity = '0';
                    content.style.transition = 'opacity 0.3s ease, height 0.3s ease';
                }
            });

        
            localStorage.setItem("filter", filterName);
        }
    });
});

 
// User Save
function myfunction(event){
    event.preventDefault();

    var usernameRe = document.getElementById("usernameRe").value;
    var emailRe = document.getElementById("emailRe").value;
    var passwordRe = document.getElementById("passwordRe").value;

    localStorage.setItem('username', usernameRe);
    localStorage.setItem('email', emailRe);
    localStorage.setItem('password', passwordRe);
}



function checkUser(){

var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

const emailSaved = localStorage.getItem('email');
const passwordSaved = localStorage.getItem('password');

var usernameSaved = localStorage.getItem('username');


    if(email === emailSaved && password === passwordSaved){
        openPopup();
        username.innerHTML = "Thank you! " + usernameSaved;
    }
    else {
        alert("Error");
    }
}

// Sign up

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
}

function displayShowAccount(username) {
    document.querySelector(".showAccountBtn").style.display = 'block';
    document.querySelector(".loginBtn").style.display = 'none';

    document.getElementById('signUpForm').style.display = 'none';
}


document.getElementById('show-account-button').addEventListener('click', () => {
    document.getElementById('account-popup').style.display = 'block'
})



checkLogin()


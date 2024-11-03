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


// Dark and Light Mode 

const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");


const currentTheme = localStorage.getItem("theme");


if (currentTheme === "dark") {
    body.classList.add("dark");
    toggle.checked = true; 
    sunIcon.className = "bx bx-sun";
    moonIcon.className = "bx bxs-moon";
} else {
    body.classList.remove("dark");
    sunIcon.className = "bx bxs-sun";
    moonIcon.className = "bx bx-moon";
}

toggle.addEventListener("change", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        sunIcon.className = "bx bx-sun";
        moonIcon.className = "bx bxs-moon";
        localStorage.setItem("theme", "dark");
    } else {
        sunIcon.className = "bx bxs-sun";
        moonIcon.className = "bx bx-moon";
        localStorage.setItem("theme", "light");
    }
});


// Popup

function openPopup(){
   let  popup = document.getElementById("popup");
   popup.classList.add("open-popup");
    
}

function closePopup(){
    popup.classList.remove("open-popup");
}


const audio1 = new Audio();
audio1.src = "./clickSound.wav";



const audio2 = new Audio();
audio2.src = "./clickSound2.wav";





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


const currentFilter = localStorage.getItem("filter");

window.addEventListener('load', () => {
    filterItem.addEventListener('click', (selectedItem) => {
        if(selectedItem.target.classList.contains('items-link')){
            document.querySelector('.menu-active').classList.remove('menu-active');
            selectedItem.target.classList.add('menu-active');
            let filterName = selectedItem.target.getAttribute('data-name');
            filterContent.forEach((content) => {
                localStorage.setItem("filter", "data-name")
                let filterContents = content.getAttribute('data-name');
                if(filterContents == filterName || filterName == 'all'){
                    content.style.visibility = 'visible';
                    content.style.height = 'auto';
                    content.style.opacity = '1'; 
                    content.style.transition = 'opacity 0.3s ease, height 0.3s ease'; 
                }
                else{
                    content.style.visibility = 'hidden';
                    content.style.height = '0';
                    content.style.opacity = '0'; 
                    content.style.transition = 'opacity 0.3s ease, height 0.3s ease';
                }

            


            });



        }
    });
})


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

const emailSaved = localStorage.getItem('email')
const passwordSaved = localStorage.getItem('password')

var usernameSaved = localStorage.getItem('username')


    if(email === emailSaved && password === passwordSaved){
        openPopup();
        username.innerHTML = "Thank you! " + usernameSaved;
    }
    else {
        alert("Error")
    }
}

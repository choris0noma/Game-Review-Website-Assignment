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


// FAQs

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
   faq.addEventListener("click", () => {
      faq.classList.toggle("active");
   })
})

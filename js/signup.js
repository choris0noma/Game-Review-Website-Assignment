function openForm() 
{
    document.getElementById("signUpForm").style.display = "block";
}
  
function closeForm() 
{
    document.getElementById("signUpForm").style.display = "none";
}

function validateEmail() 
{
    const errorMessage = document.getElementById("error-message");

    const emailValue = document.getElementById("email").value;
    const passwordValue = document.getElementById("psw").value;

    let isValid = true;
    
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
    return isValid; 
}
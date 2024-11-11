document.addEventListener('DOMContentLoaded', () => {
    const subscribeBtn = document.getElementById('subscribeBtn');
    const subscribeModal = new bootstrap.Modal(document.getElementById('subscribeModal'));
    
    subscribeBtn.addEventListener('click', () => {
        subscribeModal.show();
    });

    const subscriptionForm = document.getElementById('subscriptionForm');
    subscriptionForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        let isValid = true;

        if (!validateEmail(email)) {
            document.getElementById('emailError').innerText = 'Please enter a valid email.';
            isValid = false;
        } else {
            document.getElementById('emailError').innerText = '';
        }

        if (password.length < 6) {
            document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long.';
            isValid = false;
        } else {
            document.getElementById('passwordError').innerText = '';
        }

        if (password !== confirmPassword) {
            document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
            isValid = false;
        } else {
            document.getElementById('confirmPasswordError').innerText = '';
        }

        if (isValid) {
            alert('Subscription successful!');
            subscribeModal.hide();
            subscriptionForm.reset();
        }
    });
   
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
 0
    function updateDateTime() {
        const now = new Date();
        const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        document.getElementById('dateTimeDisplay').innerText = now.toLocaleString('ru-RU', options);
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

    const changeBackgroundBtn = document.getElementById('changeBackgroundBtn');
    let isDark = false;

    changeBackgroundBtn.addEventListener('click', () => {
        if (isDark) {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            changeBackgroundBtn.textContent = 'Switch to Dark';
        } else {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            changeBackgroundBtn.textContent = 'Switch to Light';
        }
        isDark = !isDark;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('themeSwitcher');
    const body = document.body;
    let darkMode = false;

    themeSwitcher.addEventListener('click', () => {
        darkMode = !darkMode;
        body.classList.toggle('dark-mode');
        themeSwitcher.textContent = darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    });

    const dateTimeDisplay = document.getElementById('dateTimeDisplay');
    setInterval(() => {
        const now = new Date();
        dateTimeDisplay.textContent = now.toLocaleString();
    }, 1000);

    const subscriptionForm = document.getElementById('subscriptionForm');
    const formFeedback = document.getElementById('formFeedback');

    subscriptionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        formFeedback.textContent = `Thank you, ${name}! Subscription successful.`;
        subscriptionForm.reset();
    });

    const stars = document.querySelectorAll('.star');
    const ratingFeedback = document.getElementById('ratingFeedback');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            stars.forEach(s => s.classList.remove('selected'));
            star.classList.add('selected');
            ratingFeedback.textContent = `You rated ${star.dataset.value} stars.`;
        });
    });

    const loadContentButton = document.getElementById('loadContent');
    const contentDisplay = document.getElementById('contentDisplay');

    loadContentButton.addEventListener('click', () => {
        const quotes = [
            "The journey of a thousand miles begins with one step.",
            "Life is what happens when you're busy making other plans.",
            "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
            "The only impossible journey is the one you never begin."
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        contentDisplay.textContent = randomQuote;
    });
});

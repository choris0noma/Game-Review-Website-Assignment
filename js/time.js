const time = document.getElementById('time');
var date = new Date();
time.innerHTML = date.toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"numeric", day:"numeric"}) ;

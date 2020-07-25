
//DOM 
const time = document.getElementById("time"),
      greeting = document.getElementById("greeting"),
      name = document.getElementById("name")
      Motivation = document.getElementById("Motivation");
//AmPm
const showAmPm = true;
//showTime
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();


//set am or pm
const ampm = hour >= 12 ? 'PM' : 'AM';

//12hr Format
hour = hour % 12 || 12;

//output Time
time.innerHTML =`${hour}<span>:</span>
${addZero(min)}<span>:</span>
${addZero(sec)}${showAmPm? ampm: ''}`;
setTimeout(showTime, 1000);
}
//addZeros
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : ' ') + n;
}

//set background greeting
function setGreeting () {
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12) {
        //Morning
        document.body.style.backgroundImage = "url('Morning.jpg')";
        document.body.style.color = 'black';
        greeting.textContent = 'Good Morning,';
    } else if(hour < 18) {
        //Afternoon
        document.body.style.backgroundImage = "url('Afternoon.jpg')";
        greeting.textContent = 'Good Afternoon,';
    } else { 
        //Evening
        document.body.style.backgroundImage = "url('Evening.jpg')";
        document.body.style.color = 'white';
        greeting.textContent = 'Good Evening,';
    }
}

//Get Name
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '"Enter Your Name"';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//Set Name
function setName(e) {
    if (e.type === 'keypress') {
//Make sure enter is pressed
if(e.which == 13 || e.keycode == 13) {
    localStorage.setItem('name', e.target.innerText);
    name.blur();
}
    }else {
        localStorage.setItem('name', e.target.innerText); 
    }
}
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);


// to add random quotes
function randomQuotes() {
let random = [];
var randomQuo;
random[0] = '“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney';
random[1] = '“The secret of getting ahead is getting started.” – Mark Twain.';
random[2] = '“Whatever you are, be a good one.” ― Abraham Lincoln';
random[3] = '“Impossible is just an opinion.” – Paulo Coelho';
random[4] = '“Hold the vision, trust the process.” – Unknown';
random[5] = '“If something is important enough, even if the odds are stacked against you, you should still do it.” – Elon Musk';
random[6] = '“Invest in your dreams. Grind now. Shine later.” – Unknown';
random[7] = '“Great things are done by a series of small things brought together” – Vincent Van Gogh';
random[8] = '“Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.” – Roy T. Bennett';
random[9] = '“The only difference between ordinary and extraordinary is that little extra.” – Jimmy Johnson ';

     randomQuo = Math.floor(Math.random()*(random.length));
    document.getElementById('Motivation').innerHTML = random[randomQuo];
    setTimeout("randomQuotes()", 5000);
    randomQuo++
}
    

//Run
showTime();
setGreeting();
getName();
randomQuotes();


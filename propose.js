const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const mainCard = document.getElementById('main-card');
const displayGif = document.getElementById('display-gif');
const mainHeading = document.getElementById('main-heading');
const questionText = document.getElementById('question');
const subText = document.getElementById('sub-text');

let noClickCount = 0;

// Messages to show when she clicks "No"
const noMessages = [
    "Are you sure? 🥺",
    "Think again... 🙄",
    "Pls maan jao na! 😭",
    "Kitna nakhra karogi? 😣",
    "I'll be very sad... 💔"
];

// 1. Make the "No" button run away
noBtn.addEventListener('mouseover', () => {
    if (noClickCount < 5) {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
        
        // Change text occasionally
        noBtn.innerText = noMessages[Math.floor(Math.random() * noMessages.length)];
        noClickCount++;
    }
});

// 2. What happens when she clicks "Yes"
yesBtn.addEventListener('click', () => {
    // Change UI to Success state
    displayGif.src = "https://media.tenor.com/6jaDm2Pv6dUAAAAi/dare-aggie-dare-aggie-bunny.gif";
    mainHeading.innerText = "I Knew It! ❤️";
    questionText.innerText = "You've made me the happiest person! 😘";
    subText.innerText = "Saikat is all yours forever.";
    
    // Hide the No button
    noBtn.style.display = 'none';
    
    // Start the heart celebration
    startHearts();
});

// 3. Heart Animation Function
function startHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}
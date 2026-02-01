// Animations and interactions for the buttons

const yesButton = document.querySelector('.yes-button');
const noButton = document.querySelector('.no-button');
const confettiContainer = document.getElementById('confetti');

function startConfetti() {
    confettiContainer.innerHTML = '';  // Clear previous confetti
    confettiContainer.style.display = 'block';
    const numConfetti = 100;
    for (let i = 0; i < numConfetti; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti');
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiContainer.appendChild(confettiPiece);
    }
}

yesButton.addEventListener('click', () => {
    alert("Yay! You said yes! 🎉");
    startConfetti();
});

noButton.addEventListener('mouseenter', () => {
    noButton.style.transform = `scale(${Math.random() * 0.5 + 0.2})`;
});

// Confetti animation
document.styleSheets[0].insertRule(`
    #confetti .confetti {
        position: absolute;
        background-color: pink;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        animation: fall 4s infinite;
    }
`);

document.styleSheets[0].insertRule(`
    @keyframes fall {
        0% { transform: translateY(0); }
        100% { transform: translateY(100vh) rotate(360deg); }
    }
`);

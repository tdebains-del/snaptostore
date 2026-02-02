function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // Make Yes grow
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.4}px`;

    // Teleport No
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.position = "fixed";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function startRain() {
    const rainContainer = document.querySelector('.rain-container');
    const symbols = ['❤️', '👻', '✨', '💛']; 

    setInterval(() => {
        const element = document.createElement('div');
        element.classList.add('rain-item');
        element.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        element.style.left = Math.random() * 100 + "vw";
        element.style.animationDuration = Math.random() * 2 + 3 + "s";
        rainContainer.appendChild(element);
        setTimeout(() => { element.remove(); }, 5000);
    }, 300);
}

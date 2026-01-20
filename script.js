document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('momo-logo');

    // 1. Easter Egg: Logo Click
    logo.addEventListener('click', () => {
        alert("🍑 You found a secret! Momo says: Stay Peachy!");
        document.body.style.backgroundColor = "#FFCCBB22"; // Subtle peach tint
        setTimeout(() => {
            document.body.style.backgroundColor = "#1a1a1a";
        }, 2000);
    });

    // 2. JavaScript Tool: Simple Greeting based on time
    const heroText = document.querySelector('.hero p');
    const hour = new Date().getHours();
    let greeting = "Good morning!";
    
    if (hour >= 12 && hour < 17) greeting = "Good afternoon!";
    if (hour >= 17) greeting = "Good evening!";
    
    console.log(`%c Momo Bot Log: ${greeting} System online.`, `color: #FFCCBB; font-weight: bold;`);
});

// 3. Optional: Add a simple scroll-reveal effect
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});
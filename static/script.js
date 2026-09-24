document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const resultMsg = document.getElementById('gameResult');

    if (noBtn && yesBtn) {
        // Moves the button randomly across the screen
        const moveButton = (e) => {
            if (e) e.preventDefault(); // Stops accidental mobile taps
            const randomX = Math.floor(Math.random() * 120) - 60; 
            const randomY = Math.floor(Math.random() * 80) - 40;  
            noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        };

        // Triggers when a laptop user hovers the mouse
        noBtn.addEventListener('mouseover', moveButton);
        
        // Triggers when a mobile user tries to tap with their finger
        noBtn.addEventListener('touchstart', moveButton, {passive: false});

        // Triggers when she clicks the "Yes" button
        yesBtn.addEventListener('click', () => {
            yesBtn.style.display = 'none'; 
            noBtn.style.display = 'none';  
            resultMsg.classList.remove('hidden'); 
        });
    }
});
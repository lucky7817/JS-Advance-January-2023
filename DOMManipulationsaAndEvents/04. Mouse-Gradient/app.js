function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');
    

    gradientElement.addEventListener('mousemove', (e) => {
        let percent = Math.floor((e.offsetX / 300) * 100);
        resultElement.textContent = `${percent}%`;
    });
}
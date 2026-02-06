const balloon = document.getElementById('balloon');
let currentSize = 200;
let colorIndex = 0;

const colors = ['red', 'green', 'blue'];

balloon.addEventListener('click', () => {
    currentSize += 10;
    
    if (currentSize > 420) {
        currentSize = 200;
    }

    colorIndex = (colorIndex + 1) % 3;
    
    updateBalloon();
});

balloon.addEventListener('mouseleave', () => {
    if (currentSize > 200) {
        currentSize -= 5;
    }

    colorIndex = (colorIndex - 1 + 3) % 3;
    
    updateBalloon();
});

function updateBalloon() {
    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
}
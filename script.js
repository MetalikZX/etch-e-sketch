const container = document.querySelector('.container');
let numberOfSquares = 16;


function createGrid(size) {
    container.innerHTML = '';
    const widthOrHeight = `${100 / size}%`;
for (let i = 0; i < (size * size); i++) {
            const grid = document.createElement('div');
            grid.classList.add('grid-style');
            container.appendChild(grid);
            grid.style.width = widthOrHeight;
            grid.style.height = widthOrHeight;
            };}

            container.addEventListener("mouseover", (event) => {
                if (event.target.classList.contains('grid-style')) {
                    const randomColor = getRandomColor();
                event.target.style.backgroundColor = randomColor;
            }})
createGrid(16);
const sizeSlider = document.querySelector('#sizeSlider')
const sizeText = document.querySelector('#sizeText');
sizeSlider.addEventListener('input', () => {
    const newSize = sizeSlider.value
    sizeText.textContent = `${sizeSlider.value}x${sizeSlider.value}`;
    createGrid(newSize);
            });

            
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


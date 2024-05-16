document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const button = document.querySelector('#button');

    button.addEventListener('click', () => {
        let sideLength = prompt('Enter the number of squares per side for the new grid (maximum 100):');
        sideLength = parseInt(sideLength);

        if (!Number.isInteger(sideLength) || sideLength < 0 || sideLength > 100) {
            alert("Please enter a valid number between 1 and 100.");
            return;
        }

        container.innerHTML = '';

        document.documentElement.style.setProperty('--side-length', sideLength);

        for (let i = 0; i < sideLength * sideLength; i++) {
            let square = document.createElement('div');
            square.classList.add('square');

            square.addEventListener('mouseenter', () => {
                if (isDrawing) {
                    square.classList.add('hovered');
                }

                setTimeout(() => {
                    square.classList.remove('hovered');
                }, 5000);
            });

            square.addEventListener('mousedown', () => {
                isDrawing = true;
            });

            square.addEventListener('mouseup', () => {
                isDrawing = false;
            });

            container.appendChild(square);
        }
    });
});
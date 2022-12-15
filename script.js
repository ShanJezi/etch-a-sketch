const gridContainer = document.querySelector('.grid-container');

function makeGrid(rows, cols) {
  for (let i = 0; i < (rows * cols); i++) {
    let newGridItem = document.createElement('div');
    newGridItem.classList.add('grid-item');
    newGridItem.textContent = (i);
    gridContainer.appendChild(newGridItem);
  };
};

makeGrid(16, 16);
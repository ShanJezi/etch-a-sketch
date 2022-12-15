const gridContainer = document.querySelector('.grid-container');

function makeGrid(rows, cols) {
  for (let i = 0; i <= (rows * cols); i++) {
    let newGridItem = document.createElement('div');
    newGridItem.classList.add('grid-item');
    newGridItem.textContent = (i);
    gridContainer.appendChild(newGridItem);
  };
  gridContainer.setProperty('--grid-rows', rows);
  gridContainer.setProperty('--grid-cols', cols);
};

makeGrid(16, 16);
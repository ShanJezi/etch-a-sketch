const gridContainer = document.querySelector('.grid-container');


function makeGrid(rows, cols) {
  gridContainer.setAttribute('style', 
  `grid-template-columns: repeat(${cols}, 1fr);`, 
  `grid-template-rows: repeat(${rows}, 1fr);`)
  for (let i = 0; i < (rows * cols); i++) {
    let newGridItem = document.createElement('div');
    newGridItem.classList.add('grid-item');
    gridContainer.appendChild(newGridItem);
    changeColor();
  };
};

function changeColor() {
  const grid = document.querySelectorAll('.grid-item');
  grid.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.classList.add('blue');
    });
  });
};

function removeGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
}

const askSize = document.querySelector('.change-size');
askSize.addEventListener('click', changeSize);

function changeSize(num) {
  removeGrid();
  rows = prompt('Enter number of squares per side');
  if (rows > 40) {
    rows = 40;
  }
  cols = rows;
  makeGrid(rows, cols);
};

const gridContainer = document.querySelector('.grid-container');

const changeSizeBtn = document.querySelector('.change-size');
changeSizeBtn.addEventListener('click', changeSize);

const resetGridBtn = document.querySelector('.reset-grid');
resetGridBtn.addEventListener('click', resetGrid);

const toggleLinesBtn = document.querySelector('.toggle-grid-lines');
toggleLinesBtn.addEventListener('click', toggleLines)

const eraseBtn = document.querySelector('.erase');
eraseBtn.addEventListener('click', erase);


function makeGrid(rows, cols) {
  gridContainer.setAttribute('style', 
  `grid-template-columns: repeat(${cols}, 1fr);`, 
  `grid-template-rows: repeat(${rows}, 1fr);`)
  for (let i = 0; i < (rows * cols); i++) {
    let newGridItem = document.createElement('div');
    newGridItem.classList.add('grid-item');
    newGridItem.classList.add('grid-lines');
    gridContainer.appendChild(newGridItem);
  };
  draw();
};

makeGrid(16,16);

function draw() {
  const grid = document.querySelectorAll('.grid-item');
  grid.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.classList.add('blue');
    });
  });
};

function erase() {
  const grid = document.querySelectorAll('.grid-item');
  grid.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.classList.toggle('blue');
    });
  });
};

function removeGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
}

function changeSize(num) {
  removeGrid();
  rows = prompt('Enter number of squares per side');
  if (rows > 100) {
    rows = 100;
  }
  cols = rows;
  makeGrid(rows, cols);
};

function resetGrid() {
  const grid = document.querySelectorAll('.grid-item');
  grid.forEach((div) => {
    div.classList.remove('blue');
  });
};

function toggleLines() {
  const grid = document.querySelectorAll('.grid-item');
  grid.forEach((div) => {
    div.classList.toggle('grid-lines');
  });
}
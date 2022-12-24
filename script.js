let currentMode = 'draw';

const gridContainer = document.querySelector('.grid-container');
const changeSizeBtn = document.querySelector('.change-size');
changeSizeBtn.addEventListener('click', changeSize);
const resetGridBtn = document.querySelector('.reset-grid');
resetGridBtn.addEventListener('click', resetGrid);
const toggleLinesBtn = document.querySelector('.toggle-grid-lines');
toggleLinesBtn.addEventListener('click', toggleLines)

const drawBtn = document.querySelector('.draw');
const eraseBtn = document.querySelector('.erase');
const rainbowBtn = document.querySelector('.rainbow');

drawBtn.onclick = () => setCurrentMode('draw');
eraseBtn.onclick = () => setCurrentMode('erase');
rainbowBtn.onclick = () => setCurrentMode('rainbow');

function setCurrentMode(newMode) {
  currentMode = newMode;
  console.log(currentMode);
}


function makeGrid(rows, cols) {
  gridContainer.setAttribute('style', 
  `grid-template-columns: repeat(${cols}, 1fr);`, 
  `grid-template-rows: repeat(${rows}, 1fr);`)
  for (let i = 0; i < (rows * cols); i++) {
    const newGridItem = document.createElement('div');
    newGridItem.classList.add('grid-item');
    newGridItem.classList.add('grid-lines');
    newGridItem.addEventListener('mouseover', changeColor)
    gridContainer.appendChild(newGridItem);
  };
};

makeGrid(16,16);

function random(number) {
  return Math.floor(Math.random() * (number+1))
}

function changeColor(e) {
  if (currentMode === 'draw') {
    e.target.style.backgroundColor = 'black';
  } else if (currentMode === 'rainbow') {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    e.target.style.backgroundColor = rndCol;
  } else if (currentMode === 'erase') {
    e.target.style.backgroundColor = 'white';
  }
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
    div.style.backgroundColor = 'white';
  });
};

function toggleLines() {
  const grid = document.querySelectorAll('.grid-item');
  grid.forEach((div) => {
    div.classList.toggle('grid-lines');
  });
}
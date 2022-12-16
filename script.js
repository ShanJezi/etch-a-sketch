const gridContainer = document.querySelector('.grid-container');


function makeGrid(rows, cols) {
  gridContainer.setAttribute('style', 
  `grid-template-columns: repeat(${cols}, 1fr);`, 
  `grid-template-rows: repeat(${rows}, 1fr);`)
  for (let i = 0; i < (rows * cols); i++) {
    let newGridItem = document.createElement('div');
    newGridItem.classList.add('grid-item');
    newGridItem.setAttribute('id', i);
    gridContainer.appendChild(newGridItem);
  };
};

const changeSize = document.querySelector('.change-size');
changeSize.addEventListener('click', askSize);

function askSize(num) {
  rows = prompt('Enter number of squares per side');
  cols = rows;
  makeGrid(rows, cols);
}

const grid = document.querySelectorAll('.grid-item');

grid.forEach((div) => {
  div.addEventListener('mouseover', () => {
    div.classList.add('blue');
  });
});


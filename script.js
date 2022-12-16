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

makeGrid(16, 16);

const grid = document.querySelectorAll('.grid-item');

grid.forEach((div) => {
  div.addEventListener('mouseover', () => {
    div.classList.add('blue');
  });
});



const parentContainer = document.querySelector('.container')

function rowCreator(gridSize) {
    const rows = gridSize;
    
    for(let i = 0;i < rows;i++) {
        const row = document.createElement('div');
        row.classList.add('row-container')
        parentContainer.appendChild(row)
    }

    blockCreator(gridSize)
}

rowCreator(80)

function blockCreator(gridSize) {

    const blocks = gridSize;
    const rowBlock = document.querySelectorAll('.row-container')

    for(let j = 0;j < blocks;j++) {
        for(let i = 0;i < blocks;i++) {
            const block = document.createElement('div')
            block.classList.add('block')
            block.addEventListener('mouseenter', changeColor)
            rowBlock[i].appendChild(block)
        }
    }
}

function changeColor(e) {
    e.target.style.background = 'black'
}

// const changeColor = document.querySelector(block)
// changeColor.addEventListener('onmouseover', () => {})


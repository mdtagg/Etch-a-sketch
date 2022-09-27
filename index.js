
const header = document.querySelector('.header')

const title = document.createElement('div')
title.classList.add('title')
title.textContent = 'Mike T\'s Magic Etch-A-Sketch Screen'

header.appendChild(title)


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

const toggles = document.querySelector('.toggles')

const toggleOne = document.createElement('div')
const shakeButton = document.createElement('button')
const toggleTwo = document.createElement('div')

toggleOne.classList.add('toggle-one')

shakeButton.classList.add('shake-button')
shakeButton.textContent = 'Shake It Up!'

toggleTwo.classList.add('toggle-two')

toggles.appendChild(toggleOne)
toggles.appendChild(shakeButton)
toggles.appendChild(toggleTwo)







const parentContainer = document.querySelector('.container')

function rowCreator() {
    const rows = 4;
    
    for(let i = 0;i < rows;i++) {
        const row = document.createElement('div');
        row.classList.add('row-container')
        parentContainer.appendChild(row)
    }

    blockCreator()
}

rowCreator()

function blockCreator() {

    const blocks = 4;
    const rowBlock = document.querySelectorAll('.row-container')

    for(let j = 0;j < blocks;j++) {
        for(let i = 0;i < blocks;i++) {
            const block = document.createElement('div')
            block.classList.add('block')
            rowBlock[i].appendChild(block)
        }
    }
}

// const firstDiv = document.createElement('div')
// firstDiv.classList.add('row-container')

// const parentContainer = document.querySelector('.container')
// parentContainer.appendChild(firstDiv)


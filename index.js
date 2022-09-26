
const parentContainer = document.querySelector('.container')

function gridCreator(gridBlocks) {
    const totalBlocks = gridBlocks * gridBlocks
    for(let i = 0;i < totalBlocks;i++) {
        const blocks = document.createElement('div');
        blocks.classList.add('block')
        parentContainer.appendChild(blocks)
    }

    // blockCreator(16)
}

gridCreator(16)

function blockCreator() {

    const blocks = 16;
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


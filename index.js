
const parentContainer = document.querySelector('.container')

function gridCreator(gridBlocks) {
    const totalBlocks = gridBlocks * gridBlocks
    const blockWidth = 100 / gridBlocks

    for(let i = 0;i < totalBlocks;i++) {
        const blocks = document.createElement('div');
        blocks.classList.add('block')
        parentContainer.appendChild(blocks)
    }
}

gridCreator(16)



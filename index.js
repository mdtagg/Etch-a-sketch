
function rowCreator() {
    const rows = 4;
    const parentContainer = document.querySelector('.container')
    
    for(let i = 0;i < rows;i++) {
        const row = document.createElement('div');
        row.classList.add('row-container')
        
        parentContainer.appendChild(row)
    }

}

rowCreator()

// const firstDiv = document.createElement('div')
// firstDiv.classList.add('row-container')

// const parentContainer = document.querySelector('.container')
// parentContainer.appendChild(firstDiv)


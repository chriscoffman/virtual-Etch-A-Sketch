function createGrid(sidelength) {
    for (let i = 0; i <sidelength; i++) {
        const row = document.createElement('div');
        row.classList.add("row");
        container.appendChild(row);
        
        for(let i = 0; i<sidelength; i++) {
            const box = document.createElement('div');
            box.classList.add("square");
            row.appendChild(box);
        } 
    }
    const mySquareList = document.querySelectorAll('.square');
    mySquareList.forEach(square => square.addEventListener('mouseover',
    () => hoverChangeColor(square)));
}

function hoverChangeColor(element) {
    element.classList.add("hover-color")
    console.log(element);
}

function selectGridSize() {
    let size = prompt("Please select grid size, no larger than 100", 16);
    size = parseInt(size);
    if (isNaN(size)) {
        selectGridSize();
    }
    clearGrid();
    createGrid(size);
}

function clearGrid() {
    container.innerHTML = '';
}

let length  = 16;
const container = document.querySelector('.container');
const button = document.querySelector('button');
button.addEventListener('click', ()=> selectGridSize());
createGrid(length);




let length  = 100;
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
}

function hoverChangeColor(element) {
    element.classList.add("hover-color")
    console.log(element);
}


const container = document.querySelector('.container');
createGrid(length);
const mySquareList = document.querySelectorAll('.square');
mySquareList.forEach(square => square.addEventListener('mouseover',
() => hoverChangeColor(square)));


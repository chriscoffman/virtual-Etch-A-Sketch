
let length  = 16;
function createGrid(sidelength) {
    for (let i = 0; i <sidelength; i++) {
        const row = document.createElement('div');
        container.appendChild(row);
        
        for(let i = 0; i<sidelength; i++) {
            const box = document.createElement('div');
            box.textContent = 'hi';
            row.appendChild(box);
        } 
    }
}


const container = document.querySelector('#container');
createGrid(length);


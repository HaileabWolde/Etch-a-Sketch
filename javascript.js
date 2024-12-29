let container = document.querySelector(".sketchPad");
let color = document.querySelector(".color");
let selectedColor = color.value;
color.addEventListener("input", ()=>{
    selectedColor = color.value;
})

function startGrid(input){
    container.innerHTML = ''; // Clear any existing grid
    let cellHeight = 100 / input; 
    for ( let i = 0; i < input; i++){
        let column =  document.createElement("div");
        column.classList.add(`column`);
        column.style.height = `${cellHeight}%`;
        for(let j = 0; j < input; j++){
            let row = document.createElement("div");
            row.classList.add('row');
            row.style.width = `${cellHeight}%`; 
            row.addEventListener("mouseover", ()=>{
                row.style.backgroundColor = selectedColor;
            });
            column.appendChild(row);
        }
        container.appendChild(column);
    }
}

let submit = document.getElementById("mySubmit");
let Eraser = document.getElementById("eraser");
let clear = document.getElementById("clear");
clear.addEventListener("click", ()=>{
    container.innerHTML = ''; // Clear any existing grid
})
Eraser.addEventListener("click", ()=>{
    selectedColor = `#FFFFFF`;
});
submit.addEventListener("click", function () {
    let input = parseInt(document.getElementById("Grid").value); // Parse input as number
    if (!isNaN(input) && input > 0) { // Validate input
        startGrid(input);
    } else {
        alert("Please enter a valid number greater than 0.");
    }
});
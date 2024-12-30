let container = document.querySelector(".sketchPad");
let color = document.querySelector(".color");
let selectedColor = color.value;
let truevalue = false;

color.addEventListener("input", ()=>{
    selectedColor = color.value;
})
color.addEventListener("click", ()=>{
    truevalue = false;
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
            function changeRow(){
                function generateRandomColor(){
                    let r = Math.floor(Math.random() * 256);
                    let g = Math.floor(Math.random() * 256);
                    let b = Math.floor(Math.random() * 256);
                    let rgb = `rgb(${r}, ${g}, ${b})`;
                    return rgb;
                }
                row.style.backgroundColor = truevalue ? generateRandomColor() : selectedColor;
            }
            row.addEventListener("mouseover", changeRow);
            column.appendChild(row);
        }
        container.appendChild(column);
    }
}

let submit = document.getElementById("mySubmit");
let Eraser = document.getElementById("eraser");
let clear = document.getElementById("clear");
let Random = document.getElementById("random");
Random.addEventListener("click", ()=>{
    truevalue = true;
})
clear.addEventListener("click", ()=>{
    container.innerHTML = ''; // Clear any existing grid
})
Eraser.addEventListener("click", ()=>{
    truevalue = false;
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
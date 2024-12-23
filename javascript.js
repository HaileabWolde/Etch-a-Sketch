let container = document.querySelector(".sketchPad");
let sketchPad = container.offsetHeight;
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
            column.appendChild(row);
        }
        container.appendChild(column);
    }
}
let input = document.getElementById("Grid").value;
let submit = document.getElementById("mySubmit");
submit.addEventListener("click", function () {
    let input = parseInt(document.getElementById("Grid").value); // Parse input as number
    if (!isNaN(input) && input > 0) { // Validate input
        startGrid(input);
    } else {
        alert("Please enter a valid number greater than 0.");
    }
});
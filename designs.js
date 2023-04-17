const elmTable = document.getElementById("pixelCanvas"); //Get's the element container for the table.

function makeGrid(event) {
    
    let tblCols = Math.max(parseInt(document.getElementById("inputWidth").value),1); //converts width into int and ensures it is always at least 1.
    let tblRows = Math.max(parseInt(document.getElementById("inputHeight").value),1); //converts height into int and ensures it is always at least 1.
    elmTable.innerHTML = ""; //clears current grid.
    elmTable.style.cssText = "border: 1px solid black;"; //ensures style of grid is maintained.

    for (var row = 0; row < tblRows; row++){
        elmTable.insertRow(row); //Adds row to the bottom of the table. 
        for(var col = 0; col < tblCols; col++){
            let newCell = elmTable.rows[row].insertCell(col);
            newCell.style.cssText = "background-color: #ffffff"
        }
    }
    event.preventDefault();
}

function setColor(e){
    let targetColor = document.getElementById("colorPicker").value; //returns the string value of the color picker property value
    document.getElementById("colorPicker").style.cssText = "background-color: "+ targetColor; //assigns the color picker Hex value to CSS background color which returns rgb value
    let cellColor = document.getElementById("colorPicker").style.backgroundColor; //sets variable to the RGB conversion of the picker hex value
    document.getElementById("colorPicker").style.cssText = "background-color: buttonface"; //returns the background of the colorpicker to standard value for visual continuity

    if (e.target.style.backgroundColor == cellColor){
        e.target.style.cssText = "background-color: #ffffff"; //if the cell is clicked and it is not the chosen color, sets it back to default white.
    } else {
        e.target.style.cssText = "background-color: " + cellColor;
    }
    e.preventDefault;
}

document.getElementById("sizePicker").addEventListener("submit",makeGrid);

elmTable.addEventListener("click", setColor);
/**
 * Function to create a 4x4 sliding tile puzzle.
 * Tiles can be dragged and dropped to rearrange them.
 */
function puzzleLogo() {
    // Define the number of rows and columns for the puzzle grid
    const rows = 4;
    const columns = 4;

    // Define the order of image filenames for the tiles in the puzzle
    const imgOrder = ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png", "09.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png", "00.png"];

    const board = document.getElementById("board");

    // Loop through rows and columns to create and populate the puzzle grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            // Create an image tile element
            const tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "/Advent/images/alx/" + imgOrder.shift(); // Set the image source for each tile
            tile.draggable = true; // Enable dragging for the tile
            tile.addEventListener("dragstart", dragStart); // Add drag start event listener
            tile.addEventListener("dragover", dragOver); // Add drag over event listener
            tile.addEventListener("drop", dragDrop); // Add drop event listener
            board.appendChild(tile); // Append the tile to the board
        }
    }

    /**
     * Function handling the drag start event for a tile.
     * @param {Event} event - The drag start event
     */
    function dragStart(event) {
        event.dataTransfer.setData("text/plain", event.target.id); // Set the dragged tile's ID as data to be transferred
    }

    /**
     * Function handling the drag over event for a tile.
     * @param {Event} event - The drag over event
     */
    function dragOver(event) {
        event.preventDefault(); // Prevent default behavior for drag over
    }

    /**
     * Function handling the drop event for a tile.
     * @param {Event} event - The drop event
     */
    function dragDrop(event) {
        event.preventDefault(); // Prevent default behavior for drop
        const draggedId = event.dataTransfer.getData("text"); // Get the ID of the dragged tile
        const draggedElement = document.getElementById(draggedId); // Get the dragged tile element
        const targetElement = event.target; // Get the target tile element where the dragged tile will be dropped

        // Swap the image sources of the dragged and target tiles
        const tempSrc = draggedElement.src;
        draggedElement.src = targetElement.src;
        targetElement.src = tempSrc;
    }
}
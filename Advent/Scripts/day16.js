 function puzzle() {
   
        const rows = 4;
        const columns = 4;
    
        const imgOrder = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", ""];
    
        const board = document.getElementById("board");
    
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                const tile = document.createElement("img");
                tile.id = r.toString() + "-" + c.toString();
                tile.src = "/Advent/images/Puzzle/" + imgOrder.shift();
                tile.draggable = true;
                tile.addEventListener("dragstart", dragStart);
                tile.addEventListener("dragover", dragOver);
                tile.addEventListener("drop", dragDrop);
                board.appendChild(tile);
            }
        }

    
    function dragStart(event) {
        event.dataTransfer.setData("text/plain", event.target.id);
    }
    
    function dragOver(event) {
        event.preventDefault();
    }
    
    function dragDrop(event) {
        event.preventDefault();
        const draggedId = event.dataTransfer.getData("text");
        const draggedElement = document.getElementById(draggedId);
        const targetElement = event.target;
    
        // Swap the src attributes of the dragged and target elements
        const tempSrc = draggedElement.src;
        draggedElement.src = targetElement.src;
        targetElement.src = tempSrc;
    }
    
 }
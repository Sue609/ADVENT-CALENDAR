function DesignArt() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Initial canvas setup
    canvas.style.border = '1px solid black';
    canvas.style.backgroundColor = 'lightblue';
    canvas.width = 700;
    canvas.height = 500;

    let isResizing = false;
    let originalWidth, originalHeight;
    let originalX, originalY;

    // Event listener for mouse down
    canvas.addEventListener('mousedown', function(e) {
        if (e.offsetX > canvas.width - 10 && e.offsetY > canvas.height - 10) {
            isResizing = true;
            originalWidth = canvas.width;
            originalHeight = canvas.height;
            originalX = e.clientX;
            originalY = e.clientY;
        }
    });

    // Event listener for mouse move
    window.addEventListener('mousemove', function(e) {
        if (isResizing) {
            // Calculate the change in width and height based on mouse movements
            const newWidth = originalWidth + (e.clientX - originalX);
            const newHeight = originalHeight + (e.clientY - originalY);

            if (newWidth > 50 && newHeight > 50) {
                canvas.width = newWidth;
                canvas.height = newHeight;
                redrawCanvas();
            }
        }
    });

    // Event listener for mouse up
    window.addEventListener('mouseup', function() {
        isResizing = false;
    });

    // Redraw canvas function
    function redrawCanvas() {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.putImageData(imageData, 0, 0);
    }
}

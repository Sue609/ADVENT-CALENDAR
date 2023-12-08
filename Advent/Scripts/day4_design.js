function DesignArt() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Initial canvas setup
    canvas.style.border = '1px solid black';
    canvas.style.backgroundColor = 'lightpink';
    canvas.width = 700;
    canvas.height = 500;

    let isResizing = false;
    let originalWidth, originalHeight;
    let originalX, originalY;

    let isDrawing = false;
    let penColor = '#000000';
    let penSize = 5;

    let drawingData = []; // To store drawing data for redraw

    // Event listener for mouse down
    canvas.addEventListener('mousedown', function(e) {
        if (e.offsetX > canvas.width - 10 && e.offsetY > canvas.height - 10) {
            isResizing = true;
            originalWidth = canvas.width;
            originalHeight = canvas.height;
            originalX = e.clientX;
            originalY = e.clientY;
        } else {
            isDrawing = true;
            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        }
    });

    // Event listener for mouse move
    window.addEventListener('mousemove', function(e) {
        if (isResizing) {
            const newWidth = originalWidth + (e.clientX - originalX);
            const newHeight = originalHeight + (e.clientY - originalY);

            if (newWidth > 50 && newHeight > 50) {
                canvas.width = newWidth;
                canvas.height = newHeight;

                const tempCanvas = document.createElement('canvas');
                const tempCtx = tempCanvas.getContext('2d');
                tempCanvas.width = newWidth;
                tempCanvas.height = newHeight;
                tempCtx.drawImage(canvas, 0, 0);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(tempCanvas, 0, 0);

                drawingData.forEach(function(item) {
                    if (item.type === 'pen') {
                        redrawPen(item.data);
                    } else if (item.type === 'text') {
                        redrawText(item.data);
                    } else if (item.type === 'rectangle') {
                        redrawRectangle(item.data);
                    }
                });
            }
        } else if (isDrawing) {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.strokeStyle = penColor;
            ctx.lineWidth = penSize;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();
            drawingData.push({ type: 'pen', data: { x: e.offsetX, y: e.offsetY, color: penColor, size: penSize } });
        }
    });

    // Event listener for mouse up
    window.addEventListener('mouseup', function() {
        isResizing = false;
        isDrawing = false;
    });

    // Drawing tools functionality...

    function redrawPen(data) {
        ctx.strokeStyle = data.color;
        ctx.lineWidth = data.size;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineTo(data.x, data.y);
        ctx.stroke();
    }

    // Other drawing tool functions (text, rectangle)...

    function redrawText(data) {
        ctx.font = '20px Arial';
        ctx.fillStyle = data.color;
        ctx.fillText(data.text, data.x, data.y);
    }

    function redrawRectangle(data) {
        ctx.fillStyle = data.color;
        ctx.fillRect(data.x, data.y, data.width, data.height);
    }

    
    
    // SECTION 2
    // SHOW/HIDE CHRISTMAS GIFs SECTION
    function showChristmasGIFs() {
        const showGIFsBTN = document.getElementById('showChristmasGIFs');
        const christmasGIFsDIV = document.getElementById('christmasGIFs');
        // track the visibility state of GIFs
        let gifsVisible = false

        showGIFsBTN.addEventListener('click', function() {
           if (gifsVisible) {
                // Hide Christmas GIFs
                christmasGIFsDIV.style.display = 'none';
           } else {
                // show christmas GIFs
                christmasGIFsDIV.style.display = 'block';
           }
           gifsVisible = !gifsVisible
        });
    
        // Event listeners for each GIF icon for dragging
        const christmasGIFs = document.querySelectorAll('.christmasGIF');
    
        christmasGIFs.forEach(function(gif) {
            gif.addEventListener('dragstart', function(event) {
                event.dataTransfer.setData('text/plain', gif.src); // Set the image URL as drag data
            });
        });
    
        // Event listeners for canvas to handle dropping the GIF icons
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
    
        canvas.addEventListener('dragover', function(event) {
            event.preventDefault();
        });
    
        canvas.addEventListener('drop', function(event) {
            event.preventDefault();
            const x = event.clientX - canvas.getBoundingClientRect().left;
            const y = event.clientY - canvas.getBoundingClientRect().top;
    
            const imageURL = event.dataTransfer.getData('text/plain');
            const img = new Image();
            img.src = imageURL;
    
            img.onload = function() {
                ctx.drawImage(img, x, y, img.width, img.height); // Draw the dropped image at the specified location
            };
        });

        
        // Function for resizing the gifs and being able to drag the gifs in the canvas
        ResizingChristmasGIF();
    }
    
    showChristmasGIFs();
    
}

DesignArt();

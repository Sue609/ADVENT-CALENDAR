function DesignArt() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Initial canvas setup
    canvas.style.border = '3px solid black';
    canvas.style.backgroundColor = 'white';
    canvas.width = 700;
    canvas.height = 450;

    let isDrawing = false;
    let penColor = '#000000';

    let drawingData = []; // To store drawing data for redraw

    // Event listener for mouse down
    canvas.addEventListener('mousedown', function(e) {
        isDrawing = document.getElementById('penTool').classList.contains('active');
        if (isDrawing) {
            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        }   
    });

    // Event listener for mouse move
    window.addEventListener('mousemove', function(e) {
        if (isDrawing) {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.strokeStyle = penColor;
            ctx.lineWidth = penSizeInput;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();
            drawingData.push({ type: 'pen', data: { x: e.offsetX, y: e.offsetY, color: penColor, size: penSizeInput } });
        }
    });

    // Event listener for mouse up
    window.addEventListener('mouseup', function() {
        isDrawing = false;
    });


    // function for styling the different buttons for the canvas for drawing
    function buttonStyles() {
        // Pen tool button functionality
        const penToolButton = document.getElementById('penTool');
        penToolButton.addEventListener('click', function() {
            // Toggle 'active' class to indicate pen tool selection
            penToolButton.classList.toggle('active');    
        });

        // color picker that uses its value to set the pen color when user selects
        // a color
        const colorPicker = document.getElementById('colorPicker');
        colorPicker.addEventListener('change', function() {
            penColor = colorPicker.value;
        });

        // logic for the user to adjust the pensize
        const penSizeInput = document.getElementById('penSizeInput');
        penSizeInput.addEventListener('change', function() {
            penSizeInput = parseInt(penSizeInput.value);
            ctx.lineWidth = penSizeInput;
        });

        // logic for user to clear the entire canvas
        const clearButton = document.getElementById('clearCanvas');
        clearButton.addEventListener('click', function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawingData = [];
        });

        // logic to save the art design
        const saveButton = document.getElementById('saveDrawing');
        saveButton.addEventListener('click', function() {
            const image = canvas.toDataURL();
            const link = document.createElement('a');
            link.href = image;
            link.download = 'design.png';
            link.click();
        });

    }
    
    function showChristmasGIFs() {
        const showGIFsBTN = document.getElementById('showChristmasGIFs');
        const christmasGIFsDIV = document.getElementById('christmasGIFs');
        let gifsVisible = false;
    
        showGIFsBTN.addEventListener('click', function() {
            if (gifsVisible) {
                christmasGIFsDIV.style.display = 'none';
            } else {
                christmasGIFsDIV.style.display = 'block';
            }
            gifsVisible = !gifsVisible;
        });
    
        const christmasGIFs = document.querySelectorAll('.christmasGIF');
        christmasGIFs.forEach(function(gif) {
            gif.addEventListener('dragstart', function(event) {
                event.dataTransfer.setData('text/plain', JSON.stringify({
                    src: gif.src,
                    width: gif.width,
                    height: gif.height
                }));
            });
        });
    
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
    
        canvas.addEventListener('dragover', function(event) {
            event.preventDefault();
        });
    
        canvas.addEventListener('drop', function(event) {
            event.preventDefault();
            const x = event.clientX - canvas.getBoundingClientRect().left;
            const y = event.clientY - canvas.getBoundingClientRect().top;
    
            const data = JSON.parse(event.dataTransfer.getData('text/plain'));
            const img = new Image();
            img.src = data.src;
            const width = data.width;
            const height = data.height;
    
            img.onload = function() {
                ctx.drawImage(img, x, y, width, height); // Draw the dropped image at the specified location with original size
    
                let isResizing = false;
                let prevX, prevY;
    
                canvas.addEventListener('mousedown', function(e) {
                    const startX = e.clientX - canvas.getBoundingClientRect().left;
                    const startY = e.clientY - canvas.getBoundingClientRect().top;
    
                    if (
                        startX >= x &&
                        startX <= x + width &&
                        startY >= y &&
                        startY <= y + height
                    ) {
                        isResizing = true;
                        prevX = startX;
                        prevY = startY;
                    }
                });
    
                canvas.addEventListener('mousemove', function(e) {
                    if (isResizing) {
                        const newX = e.clientX - canvas.getBoundingClientRect().left;
                        const newY = e.clientY - canvas.getBoundingClientRect().top;
    
                        const newWidth = width + (newX - prevX);
                        const newHeight = height + (newY - prevY);
    
                        ctx.clearRect(x, y, canvas.width, canvas.height);
                        ctx.drawImage(img, x, y, newWidth, newHeight);
    
                        prevX = newX;
                        prevY = newY;
                    }
                });
    
                canvas.addEventListener('mouseup', function() {
                    isResizing = false;
                    width = img.width;
                    height = img.height;
                });
    
                canvas.addEventListener('mouseleave', function() {
                    isResizing = false;
                });
            };
        });


        canvas.addEventListener('drop', function(event) {
            event.preventDefault();
            const x = event.clientX - canvas.getBoundingClientRect().left;
            const y = event.clientY - canvas.getBoundingClientRect().top;
    
            const data = JSON.parse(event.dataTransfer.getData('text/plain'));
            const img = new Image();
            img.src = data.src;
            const width = data.width;
            const height = data.height;
    
            img.onload = function() {
                let isResizing = false;
                let isDragging = false;
                let prevX, prevY;
                let imageX = x;
                let imageY = y;
    
                ctx.drawImage(img, imageX, imageY, width, height);
    
                canvas.addEventListener('mousedown', function(e) {
                    const startX = e.clientX - canvas.getBoundingClientRect().left;
                    const startY = e.clientY - canvas.getBoundingClientRect().top;
    
                    if (
                        startX >= imageX &&
                        startX <= imageX + width &&
                        startY >= imageY &&
                        startY <= imageY + height
                    ) {
                        isDragging = true;
                        prevX = startX;
                        prevY = startY;
                    }
                });
    
                canvas.addEventListener('mousemove', function(e) {
                    if (isDragging) {
                        const newX = e.clientX - canvas.getBoundingClientRect().left;
                        const newY = e.clientY - canvas.getBoundingClientRect().top;
    
                        const deltaX = newX - prevX;
                        const deltaY = newY - prevY;
    
                        imageX += deltaX;
                        imageY += deltaY;
    
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(img, imageX, imageY, width, height);
    
                        prevX = newX;
                        prevY = newY;
                    }
                });
    
                canvas.addEventListener('mouseup', function() {
                    isDragging = false;
                });
    
                canvas.addEventListener('mouseleave', function() {
                    isDragging = false;
                });
            };
        });

        const placedGIFs = []; // To keep track of placed GIFs and their positions

        canvas.addEventListener('drop', function(event) {
            event.preventDefault();
            const x = event.clientX - canvas.getBoundingClientRect().left;
            const y = event.clientY - canvas.getBoundingClientRect().top;
    
            const data = JSON.parse(event.dataTransfer.getData('text/plain'));
            const img = new Image();
            img.src = data.src;
            const width = data.width;
            const height = data.height;
    
            img.onload = function() {
                let isDragging = false;
                let prevX, prevY;
                let imageX = x;
                let imageY = y;
    
                placedGIFs.push({ img, imageX, imageY, width, height }); // Store the placed GIF and its position
    
                placedGIFs.forEach(({ img, imageX, imageY, width, height }) => {
                    ctx.drawImage(img, imageX, imageY, width, height);
                });
    
                canvas.addEventListener('mousedown', function(e) {
                    const startX = e.clientX - canvas.getBoundingClientRect().left;
                    const startY = e.clientY - canvas.getBoundingClientRect().top;
    
                    placedGIFs.forEach(({ img, imageX, imageY, width, height }, index) => {
                        if (
                            startX >= imageX &&
                            startX <= imageX + width &&
                            startY >= imageY &&
                            startY <= imageY + height
                        ) {
                            isDragging = true;
                            prevX = startX;
                            prevY = startY;
                            selectedGIFIndex = index;
                        }
                    });
                });
    
                canvas.addEventListener('mousemove', function(e) {
                    if (isDragging) {
                        const newX = e.clientX - canvas.getBoundingClientRect().left;
                        const newY = e.clientY - canvas.getBoundingClientRect().top;
    
                        const deltaX = newX - prevX;
                        const deltaY = newY - prevY;
    
                        placedGIFs[selectedGIFIndex].imageX += deltaX;
                        placedGIFs[selectedGIFIndex].imageY += deltaY;
    
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        placedGIFs.forEach(({ img, imageX, imageY, width, height }) => {
                            ctx.drawImage(img, imageX, imageY, width, height);
                        });
    
                        prevX = newX;
                        prevY = newY;
                    }
                });
    
                canvas.addEventListener('mouseup', function() {
                    isDragging = false;
                });
    
                canvas.addEventListener('mouseleave', function() {
                    isDragging = false;
                });
            };
        });
    }

    showChristmasGIFs();

    buttonStyles();
    
}

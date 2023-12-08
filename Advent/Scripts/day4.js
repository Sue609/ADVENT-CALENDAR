function DesignArt() {
    const canvas = new fabric.Canvas('myCanvas', {
      width: 700,
      height: 500,
      backgroundColor: 'lightpink',
      selection: false,
    });
  
    // Function to handle adding images to canvas
    function addImageToCanvas(imageURL, x, y) {
      fabric.Image.fromURL(imageURL, function(img) {
        img.set({
          left: x,
          top: y,
          selectable: true,
        });
        canvas.add(img);
        canvas.renderAll();
      });
    }
  
    // Prevent default behavior for drag events
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      canvas.on(eventName, function(e) {
        e.preventDefault();
      });
    });
  
    // Handle dropping an image onto the canvas
    canvas.on('drop', function(event) {
      const x = event.pointer.x;
      const y = event.pointer.y;
      const imageURL = event.dataTransfer.getData('text/plain');
      addImageToCanvas(imageURL, x, y);
    });
  
    // Function to draw a rectangle on the canvas
    function drawRectangle(x, y, width, height, color) {
      const rect = new fabric.Rect({
        left: x,
        top: y,
        width: width,
        height: height,
        fill: color,
        selectable: true,
      });
      canvas.add(rect);
      canvas.renderAll();
    }
  
    // Function to add text to the canvas
    function addTextToCanvas(text, x, y, fontSize, color) {
      const textObj = new fabric.Text(text, {
        left: x,
        top: y,
        fontSize: fontSize,
        fill: color,
        selectable: true,
      });
      canvas.add(textObj);
      canvas.renderAll();
    }
  
    // Function to handle adding an animated GIF to canvas
    function addAnimatedGIFToCanvas(imageURL, x, y) {
        fetch(imageURL)
          .then(response => response.arrayBuffer())
          .then(buffer => {
            const gif = new GifReader(new Uint8Array(buffer));
            const frames = gif.numFrames();
            const canvasImages = [];
      
            for (let i = 0; i < frames; i++) {
              const frameInfo = gif.frameInfo(i);
              const delay = frameInfo.delay * 10; // Adjust delay as necessary
      
              const imageData = gif.decodeAndBlitFrameRGBA(i, new Uint8Array(buffer), 0);
      
              const canvasImage = new fabric.Image.fromURL(imageData, function(img) {
                img.set({
                  left: x,
                  top: y,
                  selectable: true,
                  visible: i === 0, // Show only the first frame initially
                });
                canvas.add(img);
                canvas.renderAll();
              });
      
              canvasImages.push(canvasImage);
      
              setTimeout(() => {
                canvasImages.forEach((image, index) => {
                  image.visible = index === i;
                });
                canvas.requestRenderAll();
              }, delay * i);
            }
          })
          .catch(error => {
            console.error('Error loading GIF:', error);
          });
        }
    // Your other functions...
  
    // For example:
    function redrawPen(data) {
      // Redraw pen logic using Fabric.js
      const path = new fabric.Path(data.path, {
        stroke: data.color,
        strokeWidth: data.size,
        strokeLineCap: 'round',
        strokeLineJoin: 'round',
      });
      canvas.add(path);
      canvas.renderAll();
    }
  
    function showChristmasGIFs() {
      // Logic to handle showing/hiding Christmas GIFs and other operations
  
      const showGIFsBTN = document.getElementById('showChristmasGIFs');
      const christmasGIFsDIV = document.getElementById('christmasGIFs');
  
      showGIFsBTN.addEventListener('click', function() {
        // Show Christmas GIFs
        christmasGIFsDIV.style.display = 'block';
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
          canvas.drawImage(img, x, y, img.width, img.height); // Draw the dropped image at the specified location
        };
      });
    }
  
    showChristmasGIFs(); // Initialize the logic for showing Christmas GIFs
  
    // Your remaining logic...
  }
  
  DesignArt();
  
export default function showChristmasGIFs(
    showGIFsBTN,
    christmasGIFsDIV,
    canvas,
    ctx,
    christmasGIFs // This would be an array of elements
  ) {
    let gifsVisible = false;
  
    showGIFsBTN.addEventListener('click', function() {
      if (gifsVisible) {
        christmasGIFsDIV.style.display = 'none';
      } else {
        christmasGIFsDIV.style.display = 'block';
      }
      gifsVisible = !gifsVisible;
    });
  
    christmasGIFs.forEach(function(gif) {
      gif.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', JSON.stringify({
          src: gif.src,
          width: gif.width,
          height: gif.height
        }));
      });
    });
  
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
        ctx.drawImage(img, x, y, width, height);
      };
    });
  }
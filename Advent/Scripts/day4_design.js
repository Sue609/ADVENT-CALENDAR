function DesginArt() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    canvas.style.border = '1px solid black';
    canvas.style.backgroundColor = 'lightblue';
    canvas.style.width = '700px';
    canvas.style.height ='500px';

    function increaseCanvasSize() {
        canvas.width += 30;
        canvas.height += 30;
        redrawCanvas();
    };

    function decreaseCanvasSize() {
        if (canvas.width > 30 && canvas.height > 30) {
            canvas.width += 30;
            canvas.height += 30;
            redrawCanvas();
        }
    };

    
}
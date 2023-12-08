function DesignArt() {
  const stage = new Konva.Stage({
    container: 'myCanvas',
    width: 400,
    height: 400,
  });

  const layer = new Konva.Layer();
  stage.add(layer);

  const rect = new Konva.Rect({
    width: stage.width(),
    height: stage.height(),
    fill: 'lightpink', // Set the canvas background color here
  });
  layer.add(rect);

  layer.draw();
}

DesignArt();


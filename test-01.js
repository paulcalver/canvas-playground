const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080]
};

const sketch = () => {
  return ({ context, width, height }) => {
	context.fillStyle = 'white';
	context.fillRect(0, 0, width, height);

	context.fillStyle = 'black';
	context.beginPath();
	context.arc(width / 2, height / 2, 200, 0, Math.PI * 2, true);
	context.fill();
  };
};

canvasSketch(sketch, settings);
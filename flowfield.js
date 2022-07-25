const width = 400;
const height = 400;
let left_x = parseInt(width * -0.5);
let right_x = parseInt(width * 1.5);
let top_y = parseInt(height * -0.5);
let bottom_y = parseInt(height * 1.5);
let resolution = parseInt(width * 0.01);
let num_columns = (right_x - left_x) / resolution;
let num_rows = (bottom_y - top_y) / resolution;
let grid = new Array(num_columns)

for (let column = 0; column < num_columns; column++) {
  grid[column] = new Array(num_rows)
  for (let row = 0; row < num_rows; row++) {          
    let angle = (row / parseFloat(num_rows)) * 3.14;
    grid[column][row] = angle;
  } 
}
// console.log(grid)
// for (let column = 0; column < num_columns; column++) {
//   for (let row = 0; row < num_rows; row++) {  
//       console.log(grid[column][row])
//   } 
// }

function setup() {
  createCanvas(width, height);
  noLoop();
}

let num_steps = 20
let step_length = 0.01*width
let repeats = 10000

function draw() {
  background(350);
  for (var i = 0; i< repeats; i++) {
    var x = getRandomInt(left_x, right_x)
    var y = getRandomInt(bottom_y, top_y)
    beginShape();
    for (let n = 0; n < num_steps; n++) {
      vertex(x, y);
      var x_offset = x - left_x;
      var y_offset = y - top_y;
      var column_index = parseInt(x_offset / resolution);
      var row_index = parseInt(y_offset / resolution);
      if (column_index >= num_columns || column_index < 0 || row_index >= num_rows || num_rows < 0) {
        break;
      }
      var grid_angle = grid[column_index][row_index];
      var x_step = step_length * cos(grid_angle);
      var y_step = step_length * sin(grid_angle);
      x = x + x_step;
      y = y + y_step ;
    }
    endShape();
  }
  
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); 
}
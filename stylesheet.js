var numSquares = 6;
var color = genetrateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  color = genetrateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i=0; i<squares.length; i++){
    if(color[i])
    {
      squares[i].style.background = color[i];
    }else
    {
      squares[i].style.display ="none";
    }
  }
});
hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  color = genetrateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i=0; i<squares.length; i++){
      squares[i].style.background = color[i];
      squares[i].style.display ="block";
    }
});

resetButton.addEventListener("click", function(){
  //generate all new colors
  color = genetrateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors";

  messageDisplay.textContent = "";
  //change colors to squares
  for(i=0; i<squares.length; i++){
    squares[i].style.background = color[i];
  }
  h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++)
{
    // add initial colors to squares
    squares[i].style.background = color;

    // add eventListener to squares
    squares[i].addEventListener("click", function(){
    //grab color of picked square
       var clickedColor = this.style.background;
    //compare color to picked color
       if(clickedColor === pickedColor)
       {
           messageDisplay.textContent = "Correct";
           resetButton.textContent = "Play Again?"
           changecolors(clickedColor);
           h1.style.background = clickedColor;
       }else
       {
           this.style.background = "#232323";
           messageDisplay.textContent = "Try Again";
       }
    });
}
function changecolors(color)
{
  //loop through all square
  for(var i=0; i<squares.length; i++)
  {
  //change each color to match given color
    squares[i].style.background = color;
  }
}
function pickColor()
{
  var random = Math.floor(Math.random() * color.length)
  return color[random];
}

//////////////////// Generate random numbers /////////////////////////
function genetrateRandomColors(num){
  //make an array
  var arr = []
  //repeat num times
  for(var i=0; i<num; i++){
  //get random color and push into array
  arr.push(randomColors())
  }
  //return that array
  return arr;
}
function randomColors()
{
  //pich red from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick green from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick blue from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
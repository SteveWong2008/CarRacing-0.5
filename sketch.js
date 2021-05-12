var database;
var canvas,backgroundImg;
var gamestate = 0;
var playercount, form , player, games;



function setup(){
  
  canvas = createCanvas(400,400)
  database = firebase.database();
  console.log(database);
  games = new Game();
  games.getState();
  games.start();
  
}

function draw(){
  
  console.log(mouseX,mouseY)
    
    
  
}


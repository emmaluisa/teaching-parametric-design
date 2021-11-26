
function setup()
{
  
  createCanvas(1000, 1000, SVG);

}

function draw() {
  background(255);
  
  fill("black");
  //textSize(70);
  

  //text('dis     con    nected', 300, 200);
  //text('dis     con    nected', 100, 400);


  fill("red");
  //text('con–nected', 600, 500);
  //text('con–nected', 300, 100);
  //text('con–nected', 260, 600);

  
  
  fill("white");
  stroke("red");
  strokeWeight(5);
  circle(500, 700, 100);
  circle(500, 600, 100);
  circle(300, 400, 100);
  circle(100, 700, 100);
  circle(100, 100, 100);
  circle(100, 400, 180);
  circle(600, 800, 180); 
  circle(300, 100, 170);
 


  fill("black");
noStroke();
  for(let i = 20; i < 50; i += 1) {
    for(let y = -20; y < 50; y +=1){
      circle(30 * i, 50 * y, 20);
    }
  }
 
      save(); 
noLoop();


      

}



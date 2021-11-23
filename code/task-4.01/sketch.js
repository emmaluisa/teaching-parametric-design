
function setup()
{
  
  createCanvas(1000, 1000, SVG);

}

function draw() {
  background(255);
  
  fill("black");
  textSize(70);
  
  //text('connected', 300, 200);
  //text('connected', 400, 400);
  //text('connected', 200, 200);
  text('dis     con    nected', 300, 200);
  //text('con–nected', 400, 200);
  
  text('dis     con    nectedd', 100, 400);


  fill("red");
  text('con–nected', 600, 500);
  text('con–nected', 300, 100);
  text('con–nected', 260, 600);

  
  
  fill("red");
  stroke("red")
  strokeWeight(5)
  circle(500, 700, 100);

  
  circle(100, 100, 100);

  fill("black");

  for(let i = 20; i < 50; i += 1) {
    for(let y = -20; y < 50; y +=1)
      circle(30 * i, 50 * y, 10);}
  
noLoop();
save(); 

      

}


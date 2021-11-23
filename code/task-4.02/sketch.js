
function setup() {
    createCanvas(1000, 1000);
  }
  
  function draw() 
 
 { background(30); 
  stroke(0);
  strokeWeight(2);

  for(let i = 0; i < 60; i += 1) {
    for(let y = 0; y < 60; y +=1)
      circle(35 * i, 300 * y, 300);}

  
   
  
translate(300, 200);
  
    strokeWeight(2);
    stroke("black");
    beginShape();

  curveVertex(100, 400);
    curveVertex(100, 300);
    curveVertex(500, 100);
    curveVertex(400, 100);
    curveVertex( 500, 600);

    endShape(CLOSE);

    beginShape();

  curveVertex(80,-44);
    curveVertex(100, 400);
    curveVertex(200, 100);
    curveVertex(300, 100);
    curveVertex(-300, 600);

    endShape(CLOSE);


    beginShape();

    curveVertex(10, 200);
      curveVertex(20, 150);
      curveVertex(40, 50);
      curveVertex(60, 50);
      curveVertex( 80, 300);
  
      endShape(CLOSE);


beginShape();

      curveVertex(700, 600);
      curveVertex(600, 300);
      curveVertex(800, 700);
     

      endShape(CLOSE);







beginShape();

vertex(-0, -80);
vertex(80, -80);
vertex(80, 80);
vertex(-80, 80);

beginContour();
vertex(-200, -200);
vertex(-200, 200);
vertex(200, 200);
vertex(200, -200);
endContour();

beginContour();
vertex(-200, -200);
vertex(-200, 200);
vertex(200, 200);
vertex(200, -200);
vertex(-400, 400);
endContour();

endShape(CLOSE);

noLoop();
save('Sketch.png');







     
    }
  

   
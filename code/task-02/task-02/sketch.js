function setup() {
  createCanvas(400, 400);
}

function draw() {
  noLoop();
  background(255)
  
nofill();
stroke(0);
strokeWeight(1);
strokeColor ("black");

beginShape();
vertex(0, 0);
vertex(100, 0);
vertex(100, 100);
vertex(0, 100);
endShape(CLOSE);

beginShape();
vertex(0, 0);
vertex(50, 0);
vertex(50, 50);
vertex(0, 50);
endShape(CLOSE);

beginShape();
vertex (0, 50);
vertex(50, 0);
vertex(50, 100);
vertex(0, 100);
endShape(CLOSE);

beginShape();
vertex(50, 50);
vertex(100, 50);
vertex(100, 100);
vertex(50, 100);
endShape(CLOSE);

beginShape();
vertex(50, 0);
vertex(100, 0);
vertex(100, 50);
vertex(50, 50);
endShape(CLOSE);

beginShape();
vertex(50, 0);
vertex(75, 0);
vertex(75, 25);
vertex(50, 25);
endShape(CLOSE);

beginShape();
vertex(0, 66.6);
vertex(16.6, 66.60);
vertex(16.6, 83.2);
vertex(0, 83.2);
endShape(CLOSE);

beginShape();
vertex(57.5, 57.5);
vertex(92.5, 57.5);
vertex(92.5, 92.5);
vertex(57.5, 92.5);
endShape(CLOSE);


stroke("black");
strokeWeight(1);
line(0, 50, 50, 100);

stroke("black");
strokeWeight(1);
line(100, 0, 50, 50);

stroke("black");
strokeWeight(1);
nofill();
circle(75, 75, 50);

stroke("black");
strokeWeight(1);
nofill();
circle(25, 87.5, 50);

stroke("black");
strokeWeight(1);
nofill();
circle(12,5,12.5,25);

stroke("black");
strokeWeight(1);
nofill();
circle(12.5,37.5,25)

stroke("black");
strokeWeight(1);
nofill();
circle(37.5,12.5,25)

stroke("black");
strokeWeight(1);
nofill();
circle(37.5,37.5,25)



}







  function setup() {
    createCanvas(500, 1000, WEBGL);
  }
  function draw() {
    background(200);
   
    let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;

  translate(-25, 0, 0);
  lightFalloff(1, 0, 0);
  pointLight(250, 250, 250, locX, locY, 50);
  sphere(20);

  translate(-50, 100, 0);
  lightFalloff(0.9, 0.01, 0);
  pointLight(250, 250, 250, locX, locY, 50);
  sphere(20);


  translate(-90, 150, 0);
  lightFalloff(0.9, 0.01, 0);
  pointLight(250, 250, 250, locX, locY, 50);
  sphere(50);



    let dirX = (mouseX / width - 0.5) * 2;
    let dirY = (mouseY / height - 0.5) * 2;

    directionalLight(700, 200, 200, -dirX, -dirY, -1);
    noStroke();
    sphere(40);

    let a = 0.0;
let inc = TWO_PI / 25.0;
for (let i = 0; i < 25; i++) {
  line(i * 4, 50, i * 4, 50 + sin(a) * 40.0);
  a = a + inc;
}



  }

  
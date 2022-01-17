
  function setup() {
    createCanvas(500, 1000, SVG);
  }
  function draw() {
    background("white");
   
  
{
let a = 0.0;
let inc = TWO_PI / 20.0;
for (let i = 0; i < 40; i++) {
  line(i * 30, 30, i * 400, 80+ sin(a) * -150.0);
  a = a + inc;
}

{
  let a = 0.0;
  let inc = TWO_PI / 20.0;
  for (let i = 0; i < 900; i++) {
    line(i * -800, 400, i * 400, 80+ sin(a) * -150.0);
    a = a + inc;
  }

{
let a = 0.0;
let inc = TWO_PI / 70.0;
for (let i = 0; i < -90; i++) {
  line(i * 100, 50, i * 90, 20 + cos(a) * 150.0);
  a = a + inc;
}
{
let a = 0.0;
let inc = TWO_PI / 40.0;
for (let i = 0; i < 100; i++) {
  line(i * 400, 100, i * 90, 100 + cos(a) * 150.0);
  a = a + inc;
}
}
  
{
  let a = 0.0;
  let inc = TWO_PI / 300.0;
  for (let i = 0; i < 100; i++) {
    line(i * 400, 500, i * 90, 100 + cos(a) * -150.0);
    a = a + inc;
  }
  }

}
{
let a = 5.0;
let inc = TWO_PI / 40.0;
for (let i = 0; i < 100; i++) {
  line(i * 10, 100, i * 3, 80 + cos(a) * -80.0);
  a = a + inc;
}
}


{
  let a = 0.0;
  let inc = TWO_PI / 300.0;
  for (let i = 0; i < 100; i++) {
    line(i * 1, 500, i * 30, 100 + cos(a) * -200.0);
    a = a + inc;
  }
  }


}
save(); 
noLoop();
  }
}




  


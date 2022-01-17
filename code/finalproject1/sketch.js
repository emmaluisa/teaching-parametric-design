
  function setup()
  {
    
    createCanvas(1000, 1000, SVG);
  }
  function draw() {
    background("white");
   
  
{
let a = 0.0;
let inc = TWO_PI / 70.0;
for (let i = 0; i < 40; i++) {
  line(i * 10, 50, i * 90, 100 + sin(a) * 80.0);
  a = a + inc;
}

{
  let a = 20.0;
  let inc = TWO_PI / 90.0;
  for (let i = 0; i < 40; i++) {
    line(i * 10, 100, i * 90, 500 + sin(a) * 100.0);
    a = a + inc;
  }



{
  let a = 0.0;
let inc = TWO_PI / 80.0;
for (let i = 0; i < 60; i++) {
  line(i * 50, 50, i * 10, 200 + sin(a) * 80.0);
  a = a + inc;
}

{
//let a = 0.0;
//let inc = TWO_PI / 70.0;
//for (let i = 0; i < 70; i++) {
  //line(i * 10, 50, i * 3, 30 + cos(a) * 100.0);
  //a = a + inc;
//}
{
let a = 0.0;
let inc = TWO_PI / 40.0;
for (let i = 0; i < 100; i++) {
  line(i * 10, 100, i * 3, 80 + cos(a) * 80.0);
  a = a + inc;
}
}
  
}
{
let a = 120.0;
let inc = TWO_PI / 200.0;
for (let i = 0; i < 60; i++) {
  line(i * -50, 100, i * 5, 80 + cos(a) * -100.0);
  a = a + inc;

}
{
let a = -100.0;
let inc = TWO_PI / 400.0;
for (let i = 0; i < 100; i = i + 600) {
  line(i, 300, i, 400 + tan(a) * 80.0);
  a = a + inc;
}

{
  let a = -90;
let inc = TWO_PI / -80.0;
for (let i = 0; i < 100; i++) {
  line(i * 10, 70, i * 3, 80 + cos(a) * 50.0);
  a = a + inc;
  }

}
  }
  }


  }
  
  }}


  save(); 
  noLoop();
}

  

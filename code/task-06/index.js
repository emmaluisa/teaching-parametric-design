const jscad = require('@jscad/modeling')
const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;

const main = () => {
    
  const cylinderShape = cylinder({
      center: [0, 0, 0],
      height: 50,
      radius: 25,
      segments: 9

  });
 //const cubeShape = cube({
    //size: 40,
    //center: [0, 0, 0]

  //})
  const sphereShape = sphere({
    radius: 20,
    center: [10, 10, 10]
  });
  
   
  const unionShape = union([ cylinderShape, sphereShape]);
const unionShapes = [];
for (let c = 0; c < 5; c += 1) {
    
    unionShapes.push(translate(
      [0, c*25, 0],
      unionShape
    ));
  }

  return unionShapes;
}

module.exports = { main };
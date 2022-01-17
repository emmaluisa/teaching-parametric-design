const jscad = require('@jscad/modeling')
const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;

const main = () => {

  const cubeShape = cube({
    size: 30

  });

  const sphereShape = sphere({
    radius:20,
    center: [0, 0, 0]
  })
   
  
  const unionShape = union([sphereShape, cubeShape]);
const unionShape = [];
  for (let c = 0; c < 10; c += 1) {
    
    unionShapes.push(translate(
      [0, c*15, 0],
      unionShape
    ));
  }

  return unionShapes;
}


module.exports = { main };
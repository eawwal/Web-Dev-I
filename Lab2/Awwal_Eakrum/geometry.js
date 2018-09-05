const checkVal = (val, name) => {
  switch (typeof val) {
    case "string":
      throw `${name || "provided variable"} is a string and not a number`;
    case "undefined":
      throw `${name || "provided variable"} is undefined and not a number`;
    case "boolean":
      throw `${name || "provided variable"} is a boolean and not a number`;
    case "symbol":
      throw `${name || "provided variable"} is a symbol and not a number`;
    case "function":
      throw `${name || "provided variable"} is a function and not a number`;
    case "object":
      throw `${name || "provided variable"} is an object and not a number`;
    case "number":
      return console.log(`${name}..verified`);
  }
};

const volumeOfRectangularPrism = (length, width, height) => {
  checkVal(length, "length");
  checkVal(width, "width");
  checkVal(height, "height");

  return console.log("volume of prism is: ", length * width * height);
};


const surfaceAreaOfRectangularPrism = (length, width, height) => {
  checkVal(length, "length");
  checkVal(width, "width");
  checkVal(height, "height");

  return console.log(2 * (width * height + length * width + length * height));
};

const volumeOfSphere = radius => {
  checkVal(radius, "radius");
  radiusCubed = radius * radius * radius;
  return console.log((4 / 3) * Math.PI * radiusCubed);
};

const surfaceAreaOfSphere = radius => {
  checkVal(radius, "radius");
  radiusSquared = radius * radius;
  return console.log(4 * Math.PI * radiusSquared);
};


module.exports = {
  volumeOfRectangularPrism,
  surfaceAreaOfRectangularPrism,
  volumeOfSphere,
  surfaceAreaOfSphere
};
function myNes() {
  var myStorage = {
    car: {
      inside: {
        "glove box": "maps",
        "passenger seat": "crubs",
      },
      outside: {
        trunk: "jack",
      },
    },
  };
  // change this
  var gloveBoxContent = myStorage.car.inside["glove box"];
  return gloveBoxContent;
  // change this
}

console.log(myNes());
module.exports = myNes;

/*

function myNes() {
  var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crubs",
      },
      "outside": {
        "trunk": "jack",
      },
    },
  };
  // change this
  var gloveBoxContent = myStorage.car.inside["glove box"];
return gloveBoxContent;
  // change this
}

console.log(myNes());
module.exports = myNes;

*/

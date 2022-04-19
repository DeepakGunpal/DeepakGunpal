const mid1 = function (req, req, next) {
  console.log("Hello I am first middleware");

  next();
};

const mid2 = function (req, req, next) {
  console.log("Hello I am second middleware");

  next();
};

const mid3 = function (req, req, next) {
  console.log(
    "Hello I am third and last middleware and next you will get your requested data"
  );

  next();
};

module.exports.mid1 = mid1;
module.exports.mid2 = mid2;
module.exports.mid3 = mid3;

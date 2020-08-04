const db = require("../data/dbConfig.js");

function findAllColors() {
  return db("colors");
}

function findColorById(colorId) {
  return db("colors").where("id", colorId);
}

function findColorsPagination(pageNumber) {
  return db("colors").paginate({ perPage: 15, currentPage: pageNumber });
}

module.exports = {
  findAllColors,
  findColorById,
  findColorsPagination,
};

// https://animaapp.github.io/sketch-web-viewer/

const db = require("../data/dbConfig.js");

function findAllColors() {
  return db("colors");
}

function findColorById(colorId) {
  return db("colors").where("id", colorId);
}

function findColorsPagination(pageNumber) {
  return db("colors").paginate({ perPage: 12, currentPage: pageNumber });
}

function findLastColorId() {
  return db("colors").max("id");
}

module.exports = {
  findAllColors,
  findColorById,
  findColorsPagination,
  findLastColorId,
};

// https://animaapp.github.io/sketch-web-viewer/

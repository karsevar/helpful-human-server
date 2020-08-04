const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const colorData = require("../colorData.json");
const colorsDb = require("./colorsModel.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/colorData", (req, res) => {
  const newColorData = colorData.map((color) => {
    return {
      name: color.name,
      hexString: color.hexString,
    };
  });
  res
    .status(200)
    .json({ message: "the server is working", data: newColorData });
});

server.get("/getAllColors", (req, res) => {
  colorsDb
    .findAllColors()
    .then((colorInfo) => {
      res.status(200).json({
        message: "Receiving all colors from database",
        data: colorInfo,
      });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Something happened in the database", error: error });
    });
});

server.get("/getColorById/:colorId", (req, res) => {
  const colorId = req.params.colorId;

  colorsDb
    .findColorById(colorId)
    .then((color) => {
      if (color.length > 0) {
        res.status(200).json({ data: color[0] });
      } else {
        res.status(404).json({
          message: `Could not find color with colorId ${colorId} in the database.`,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "database error.", error: error });
    });
});

server.get("/getColorsByPagination", (req, res) => {
  const page = req.query.page;
  colorsDb
    .findColorsPagination(page)
    .then((colors) => {
      res.status(200).json({
        message: `Querying colors from page number: ${page}`,
        data: colors,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something happened with the pagination function",
        error: error,
      });
    });
});

module.exports = server;

const knex = require("knex");
const { attachPaginate } = require("knex-paginate");
attachPaginate();

const knexConfig = require("../knexfile");

const environment = "development";

module.exports = knex(knexConfig[environment]);

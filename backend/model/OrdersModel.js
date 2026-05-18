const {model} = require("mongoose");

const {OrdersSchema} = require("../schemas/OrdersSchema");

const OrdersModel = new model("position",OrdersSchema);

module.exports = {OrdersModel};
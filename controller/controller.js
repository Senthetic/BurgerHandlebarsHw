const express = require("express");
const app = express();

const orm = require("../config/orm.js");
app.get("/", function (req, res) {
    orm.selectAll("burgers", function (response) {
      console.log("response:" ,res);
      res.render("index",(err,response) => {
          res.send(response);
      });
    });
  });
  
  app.post("/api/burger", function (req, res) {
    console.log(req.body);
  });
  
  app.put("api/burger/:id", function (req, res) {});
  
  module.exports = app;
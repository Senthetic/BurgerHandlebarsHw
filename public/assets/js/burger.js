const orm = require("../config/orm.js");
const express = require("express");
const app = express();

$(function () {
  $("#burgerSubmit").on("submit", (event) => {
    event.preventDefault();
    let newBurger = {
      burger_name: $("#burgerName").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      location.reload();
    });
  });
const express = require("express");
const tagRouter = express.Router();

const { getAllTags } = require("../db");

tagRouter.get("/", async (req, res) => {
  try {
    const allTags = await getAllTags();

    console.log("these are my tags", allTags);

    res.send({
      allTags,
    });
  } catch (error) {
    console.log("error in posts", error);
  }
});

module.exports = tagRouter;

const express = require("express");
const postRouter = express.Router();

const { getAllPosts } = require("../db");

postRouter.get("/", async (req, res) => {
  try {
    const allPosts = await getAllPosts();

    console.log("this is my posts", allPosts);

    res.send({
      allPosts,
    });
  } catch (error) {
    console.log("error in posts", error);
  }
});

module.exports = postRouter;

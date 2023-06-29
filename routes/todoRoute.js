const express = require("express");
const todoRouter = express.Router();
const authenticate=require("../middleware/authMiddleware");
const { getToDo, saveToDo, updateToDo, deleteToDo,searchTodo } = require("../controllers/todoController");

todoRouter.get("/",authenticate,getToDo)
todoRouter.post("/",authenticate,saveToDo)
todoRouter.put("/:id",authenticate,updateToDo)
todoRouter.delete("/:id",authenticate,deleteToDo)
todoRouter.get("/search",authenticate,searchTodo)

module.exports = todoRouter;

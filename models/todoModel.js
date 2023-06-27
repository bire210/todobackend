const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    title:{ type: "String", required: true },
    description:{
        type: "String"
    }
  },
  { timestaps: true }
);

const todoModel = mongoose.model("todo", todoSchema);

module.exports = todoModel;

const todoModel = require("../models/todoModel");


const getToDo = async (req, res) => {
    
   try {
    const todo = await todoModel.find({userId:req.body.userId});
    res.status(200).json(todo);
   } catch (error) {
    res.status(405).json(error.message)
   }
}

const saveToDo =async (req, res) => {
   
   try {
    const newTodo=new todoModel(req.body)
    const savedTodo=await newTodo.save();
    res.status(200).json("Todo is created")
   } catch (error) {
    res.status(500).json("Not Created")
   }
}

const deleteToDo = async(req, res) => {
   console.log(req.params.id)
   try {
    const deleted=await todoModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted ")
   } catch (error) {
    res.status(500).json("Not Deleted")
   }
}

const updateToDo =async (req, res) => {
try {
    const updatedTodo=await todoModel.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json("Updted")
} catch (error) {
    res.status(500).json("Not Updated")
}

}

const searchTodo=async(req,res)=>{
   
let todoLidt=[]
   try {
      const todo = await todoModel.find({userId:req.body.userId});
     todoLidt=[...todo]
     const { q } = req.query;
     const keys = ["title"];
   
     const search = (data) => {
       return data.filter((item) =>
         keys.some((key) => item[key].toLowerCase().includes(q))
       );
     };
   
     q ? res.json(search(todoLidt).slice(0, 10)) : res.json(todoLidt.slice(0, 10));
     } catch (error) {
      res.status(405).json(error.message)
     }


   
 
}

module.exports={
getToDo,
updateToDo,
deleteToDo,
saveToDo,
searchTodo
}
const express = require("express")

const TaskRouter = express.Router()

TaskRouter.get("/",getAllTask);
TaskRouter.post("/create")
TaskRouter.post("/edit")
TaskRouter.delete("/delete")


export default TaskRouter
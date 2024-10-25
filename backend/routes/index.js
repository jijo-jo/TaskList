const express = require("express")

const Router = express.Router()

const SignInRoute = require('./signInroutes')
const TaskRoutes = require('./tasksroutes')

Router.use(SignInRoute)
Router.use(TaskRoutes)

export default Router


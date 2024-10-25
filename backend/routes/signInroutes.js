const express = require("express")

const SignInRoute = express.Router()

SignInRoute.post("/login",login);

export default SignInRoute
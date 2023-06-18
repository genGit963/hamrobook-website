import express from "express"
import uploadBook from "./controller.js"

const Router =  express.Router()

Router.post("/post", uploadBook )

export default Router
import { addSong, listSong } from "../controllers/songController"
import express from "express"
import upload from "../middleware/multer"

const songRouter = express.Router()

songRouter.post('/add', upload.fields([{name:'image', maxCount:1}, {name:'audio', maxCount: 1}]), addSong)
songRouter.get('/list', listSong)

export default songRouter

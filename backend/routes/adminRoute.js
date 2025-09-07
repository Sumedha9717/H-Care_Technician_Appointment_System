import express from 'express'
import { addTechnician } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'


const adminRouter = express.Router()

// create endpoints
adminRouter.post('/add-technician',upload.single('image'),addTechnician)

export default adminRouter
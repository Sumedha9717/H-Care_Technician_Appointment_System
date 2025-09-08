import express from 'express'
import { addTechnician,loginAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'


const adminRouter = express.Router()

// create endpoints
adminRouter.post('/add-technician',authAdmin,upload.single('image'),addTechnician)

// admin login route
adminRouter.post('/login',loginAdmin)

export default adminRouter
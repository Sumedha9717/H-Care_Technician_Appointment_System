import express from 'express'
import { addTechnician,allTechnicians,loginAdmin,appointmentsAdmin,appointmentCancel } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailability } from '../controllers/technicianController.js'


const adminRouter = express.Router()

// create endpoints
adminRouter.post('/add-technician',authAdmin,upload.single('image'),addTechnician)

// admin login route
adminRouter.post('/login',loginAdmin)

// All Technician list route
adminRouter.post('/all-technicians',authAdmin,allTechnicians)

// Change availability route
adminRouter.post('/change-availability',authAdmin,changeAvailability)

// all apointments
adminRouter.get('/appointments',authAdmin,appointmentsAdmin)

// cancel appointment
adminRouter.post('/cancel-appointment',authAdmin,appointmentCancel)

export default adminRouter
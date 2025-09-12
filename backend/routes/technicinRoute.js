import express from 'express'
import { technicianList } from '../controllers/technicianController.js'

const technicianRouter = express.Router()

technicianRouter.get('/list',technicianList)


export default technicianRouter
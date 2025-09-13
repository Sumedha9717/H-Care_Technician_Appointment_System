import validator from "validator"
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from "cloudinary"
import technicianModel from "../models/technicianModel.js"
import fs from "fs"  // to remove local file after upload
import jwt from 'jsonwebtoken'
import { error } from "console"
import appointmentModel from "../models/appointmentModel.js"




//API for adding technician
const addTechnician = async (req,res) => {
  
    try {

        const {name, email, password, speciality, degree, experience, about, city, address, fees } = req.body
        const imageFile = req.file

        // checking for all data to add technician
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !city || !address || !fees){
            return res.json({success:false,message:"Missing Details"})
        }

        // Validating email format
        if(!validator.isEmail(email)){
             return res.json({success:false,message:"Please enter a valid email"})
        }

        // Validating strong password
        if(password.length < 8){
             return res.json({success:false,message:"Please enter a strong password"})
        }

        // hashing technician password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"});
        const imageUrl = imageUpload.secure_url;

        // delete file from local uploads after successful upload
        fs.unlinkSync(imageFile.path);

        // save data in database
        const technicianData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            city,
            address:JSON.parse(address),
            fees,
            date:Date.now()
        }

        const newTechnician = new technicianModel(technicianData)
        await newTechnician.save()

        res.json({success:true,message:"Technician Added Successfully"})


    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

// API for the admin login
const loginAdmin = async (req,res) => {
    try {

        const {email,password} = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})

        } else {
            res.json({success:false,message:"Invalid credentials"})
        }
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// API to get all Technician list for admin panel
const allTechnicians = async (req,res) => {
    try {
        
        const technicians = await technicianModel.find({}).select('-password')
        res.json({success:true,technicians})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// API to get all appointments list
const appointmentsAdmin = async (req,res) => {
    try {

        const appointments = await appointmentModel.find({})
        res.json({success:true,appointments})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// API for appointment cancellation
const appointmentCancel = async (req,res) => {
    try {

         const {appointmentId} = req.body

         const appointmentData = await appointmentModel.findById(appointmentId)

        await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled:true})

        // releasing technician slot
        const {tecId, slotDate, slotTime} = appointmentData

        const technicianData = await technicianModel.findById(tecId)

        let slots_booked = technicianData.slots_booked

        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)

        await technicianModel.findByIdAndUpdate(tecId, {slots_booked})

        res.json({success:true,message:'Appointment Cancelled'})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}


export {addTechnician,loginAdmin,allTechnicians,appointmentsAdmin,appointmentCancel}
import technicianModel from "../models/technicianModel.js"


const changeAvailability = async (req,res) => {

    try {

        const {tecId} = req.body

        const techData = await technicianModel.findById(tecId)
        await technicianModel.findByIdAndUpdate(tecId,{available: !techData.available})
        res.json({success:true, message: 'Availability Changed'})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

// TechnicianList api
const technicianList = async (req,res) => {

    try {

        const technicians = await technicianModel.find({}).select(['-password','-email'])

        res.json({success:true,technicians})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export {changeAvailability,technicianList}
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

export {changeAvailability}
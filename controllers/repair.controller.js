const repairs = require("../models/repairs.model");


const findRepairPending = async(req, res) =>{
  try {
    const repairsPending = await repairs.findAll({
      where:{'status':'pending'}
    })
    return res.status(200).json(repairsPending)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status:'fail',
      message:'An error  has ocurred, talk to the adminitrator'
    })
  }
}

const findRepairPendingById = async(req, res)=>{
  try {
    const repairsPendingById = await repairs.findOne({
      where:{
        'id': req.params.id
      }})
      return res.status(200).json(repairsPendingById)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status:'fail',
      message:'An error  has ocurred, talk to the adminitrator'
    })
  }
}

const submitRepair = async(req, res)=>{
  try {
    const cite = {
      date:req.body.date,
      status:'pending',
      userId:req.body.userId
    }
    console.log(cite)
    const createCite = await repairs.create(cite)
    return res.status(200).json(cite)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status:'fail',
      message:'An error  has ocurred, talk to the adminitrator'
    })
  }
}

const updateStatus = async(req, res) => {
  try {
    const statusUpdate = await repairs.update({
      'status':'completed'
    },{where: {
      'id': req.params.id
    }})
      return res.status(200).json(statusUpdate)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status:'fail',
      message:'An error  has ocurred, talk to the adminitrator'
    })
  }
}

const updateStatusDelete = async(req, res) => {
  try {
    const statusUpdate = await repairs.update({
      'status':'cancelled'
    },{where: {
      'id': req.params.id
    }})
      return res.status(200).json(statusUpdate)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status:'fail',
      message:'An error  has ocurred, talk to the adminitrator'
    })
  }
}

module.exports = {
  findRepairPending, findRepairPendingById, submitRepair, updateStatus, updateStatusDelete
}
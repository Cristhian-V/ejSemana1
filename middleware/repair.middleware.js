const repairs = require("../models/repairs.model");

const validateIdRepairs = async(req, res, next) => {
  const repairData = await repairs.findOne({where:{
    'id': req.params.id
  }})

  if(!repairData){
    return res.status(400).json('Es id ingesado no exsiste')
  }else if (repairData.status != 'pending' ){
    return res.status(400).json('solo se puede realizar esta operacion en citas con estado pendiente')
  } else{
    next()
  }
}

module.exports = {
  validateIdRepairs
}
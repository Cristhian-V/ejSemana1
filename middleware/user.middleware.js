const Users = require('../models/users.model')

const validateUpdate = (req, res, next) =>{
  const keysbody = Object.keys(req.body)
  let keyName = false
  let keyEmail = false

  for(let i=0; i<keysbody.length ;i++){
    if(keysbody[i] === 'name'){
      keyName = true
    }else if(keysbody[i] === 'email'){
      keyEmail = true
    }
  }

  console.log(keyName,keyEmail)
  if(keyName && keyEmail ){
    next()
  }else{
    return res.status(400).json('solo se permite actulizar nombre y correo electronico')
  }
}

module.exports = {
  validateUpdate
}
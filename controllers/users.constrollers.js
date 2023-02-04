
const { Association } = require('sequelize')
const Users =require('../models/users.model')

const findAllUsers = async (req, res) => {
  try {
    const allUsers = await Users.findAll({where:{'status': true}})
    return res.status(200).json(allUsers)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status:'fail',
      message:'An error  has ocurred, talk to the adminitrator'
    })
  }
}

const findUser = async (req, res) => {
  try {
    const user = await Users.findOne({where:{'id':req.params.id}})
    return res.status(200).json(user)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status:'fail',
      message:'An error  has ocurred, talk to the adminitrator'
    })
  }
}

const createUser = async(req, res) => {
  try {
    const user = req.body 
//    console.log(req.body)
    const create = await Users.create(user)
    return res.status(200).json(create)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status:'fail',
      message:'An error  has ocurred, talk to the adminitrator'
    })
  }
}

const updateUser = async(req, res) => {
  try {
    const user = req.body
    const id = req.params.id
    const upUser = await Users.update({
      'name':user.name,
      'email':user.email
      },{
        where:{
        'id':id
      }
    })
    return res.status(200).json('Usuario Actualizado con exito')
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status:'fail',
      message:'An error  has ocurred, talk to the adminitrator'
    })
  }
} 

const deleteUser = async(req, res) => {
  try {
    const id = req.params.id
    const upUser = await Users.update({
      'status': false
      },{
        where:{
        'id':id
      }
    })
    return res.status(200).json('Usuario eliminado con exito')
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status:'fail',
      message:'An error  has ocurred, talk to the adminitrator'
    })
  }
}


module.exports = {
  findAllUsers, findUser, createUser, updateUser, deleteUser
}
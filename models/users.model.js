const { DataTypes } = require('sequelize')
const {db} = require('../database/config')

const Users = db.define('Users', {
  id:{
    primaryKey:true,
    autoIncrement:true,
    allowNull:false,
    type: DataTypes.INTEGER
  },
  name:{
    allowNull: false,
    type: DataTypes.STRING
  },
  email:{
    allowNull:false,
    type: DataTypes.STRING
  },
  password:{
    allowNull:false,
    type: DataTypes.STRING
  },
  role:{
    allowNull:false,
    defaultValue:'normal',
    type: DataTypes.ENUM(['client','employee'])
  },
  status:{
    allowNull:false,
    defaultValue:true,
    type:DataTypes.BOOLEAN
}
})

module.exports = Users
const express = require('express')
const {db} = require('../database/config')
const {userRoutes} =require('../routes/users.routes')


class Server {
  constructor(){
    this.app = express()
    this.port = process.env.PORT || 3000

    this.path = {
      users: '/api/v1/users',
      repairs: '/api/v1/repairs'
    }

    this.dataBase()
    this.middlewares()
    this.routes()
  }

  middlewares(){
    this.app.use(express.json())
  }

  dataBase(){
    db.authenticate()
      .then(() => console.log('estamos autenticados'))
      .catch(err => console.log(err))

    db.sync()
      .then(() => console.log('estamos sincronizados'))
      .catch(err => console.log(err))
  }

  routes(){
    this.app.use(this.path.users, userRoutes)
  }

  listen(){
    this.app.listen(this.port, () => {
      console.log(`estamos saliendo por el puerto ${this.port}`)
    })
  }
}

module.exports = Server
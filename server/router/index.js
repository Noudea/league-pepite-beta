

const authRoutes = require('./api/auth/index.js')


const Router = (app) => {
  app.use(`${process.env.BASE_API_URL}/auth`, authRoutes)
}

module.exports = Router

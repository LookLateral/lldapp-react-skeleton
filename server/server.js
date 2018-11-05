import path from 'path'
import express from 'express'
import template from './../template'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import mongoose from 'mongoose'
import config from './../config/config'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'

// Comment out before releasing to production
import devBundle from './devBundle'

const app = express()
// Comment out before releasing to production
devBundle.compile(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

// Routes
app.use('/', authRoutes)
app.use('/', userRoutes)

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('/', (req, res) => {
  res.status(200).send(template())
})

let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', port)
})

// Database Connection URL
//const url = process.env.MONGODB_URI || 'mongodb://mern:v9z3rp74vk@ds235243.mlab.com:35243/mern'
// Use connect method to connect to the server
//MongoClient.connect(url, (err, db)=>{
 // console.log("Connected successfully to mongodb server")
//  db.close()
//})

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri)

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`)
})

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  }
})

export default app
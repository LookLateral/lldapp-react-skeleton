const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "UparkH77@1209#v9z3rp74vk",
    mongoUri: process.env.MONGODB_URI ||
      process.env.MONGO_HOST || 'mongodb://mern:v9z3rp74vk@ds235243.mlab.com:35243/mern'
  }
  
  export default config
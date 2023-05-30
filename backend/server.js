const app = require('./app')
const connectDatabase = require('./config/database')

const dotenv = require('dotenv')

dotenv.config({path: 'backend/config/config.env'})

connectDatabase()
app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT} on ${process.env.NODE_ENV}`)
})
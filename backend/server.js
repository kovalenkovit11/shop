const app = require('./app')
const connectDatabase = require('./config/database')
const dotenv = require('dotenv')

process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down due to uncaught exception');
    process.exit(1)
})

dotenv.config({ path: 'backend/config/config.env'})

connectDatabase()

const server = app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT} on ${process.env.NODE_ENV}`)
})

//Promise rejected

process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down the server due to Unhandled Promise rejection');
    server.close(() => {
        process.exit(1)
    })
})
const ErrorHandler = require ('../utils/ErrorHandler');


module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    if (process.env.NODE_ENV === 'DEVELOPMENT') {
        console.log(err);
    
        res.status(err.statusCode).json({
            success: false,
            error: err,
            errMessage: err.message,
            stack: err.stack
        })
    }
    
    if (process.env.NODE_ENV === 'PRODUCTION') {
        let error = { ...err }
    
        error.message = err.message;
    
        // Wrong Mongoose Object ID Error
        if (err.name === 'CastError') {
            const message = `Resource not found. Invalid: ${err.path}`
            error = new ErrorHandler(message, 400)
        }
        if(err.name === 'ValidatorError') {
            const message = Object.values(err.errors).map(value => value.message);
            error = new ErrorHandler(message, 400)
        }
    
        res.status(err.statusCode).json({
            success: false,
            error: err.message || 'Internal server Error'
         })
    }
   
}

const User = require('../models/User');

const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

//Register => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const {name, email, password} = req.body;
    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id: 'image/upload/v1685538567/cld-sample-5',
            url: 'https://res.cloudinary.com/dogpih53c/image/upload/v1685538567/cld-sample-5.jpg'
        }
    })
    const token = user.getJwtToken()
    res.status(201).json({
        success: true,
        token
    })
})


// login user => api/v1/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => { const {email, password} = req.body
    if(!email || !password){
        return next(new ErrorHandler('Please enter your email & password', 400));

    }

    const user = await User.findOne({email,}).select('+password')
    if(!user){
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    // Check if password is correct

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }
    const token = user.getJwtToken();
    res.status(200).json({
        success: true,
        token
    })
})
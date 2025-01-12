// step 1: check username + password in POST/login request
// step 2: if exists, create new JWT (JSON web token)
// step 3: send back to front end
// step 4: setup authentication so only the request with JWT can access the dashboard 

const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors');

const login = async (req, res) => {
    const { username, password } = req.body;

    // option 1: mongoose can check validation 
    // option 2: setup additional layer of validation, would sit in front of all requests; using Joi package
    // option 3: check values have been provided here in controllers, else error response (error routes)

    if (!username || !password) {
        throw new BadRequestError('Please provide email and password'); 
    }

    //normally ID would come from data/database, this is just for example
    const id = new Date().getDate();

    //try to keep payload small, better for UX
    // this is just for the demo, in production use long, complex, unguessable values for jwt
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn:'30d'});

    res.status(200).json({msg:'User created', token})
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random()*100);
    //response is now coming from decoded token data in controllers 
    res.status(200).json({msg:`Hello, ${req.user.username}`,secret:`Here is your authorized data, your lucky number is ${luckyNumber}`});
}

module.exports = {
    login, dashboard
}
const {User} = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


createUser = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const {name , email, password, role} = req.body;
        const user =await  User.create({name, email, password: hashedPassword , role});
        res.status(201).json(user);
    }catch(error){
        res.status(500).json({error: `An error occurred: ${error}`})
    }
}
        
getUsers = async(req, res) => {
    try{
        users =await User.findAll()
        res.status(200).json(users)
    }
    catch(error) {
        res.status(500).json({error: `An error occurred: ${error}`})
    }
}


module.exports = { getUsers, createUser }
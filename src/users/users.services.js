const { getUser, getUserById, postUser } = require("./users.controllers")


const getUsers = (req,res)=>{
    const data = getUser();
    res.status(200).json(data)
}


const getOneUser = (req,res)=>{
    const {id} = req.params;

    const data= getUserById(id);

    if(data){
        res.status(200).json(data)
    } else {
        res.status(404).json({id: id, message: 'Invalid ID'})
    }

}

const createNewUser = (req, res) => {
    const { first_name,last_name,email,password,birthday } = req.body

    if(first_name,last_name,email,password,birthday){
        const data = postUser(first_name,last_name,email,password,birthday);
        res.status(201).json(data)
    } else {
        res.status(400).json({message: 'Missing Data'})
    }
}
module.exports={
    getUsers,
    getOneUser,
    createNewUser
}
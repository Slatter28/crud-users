const { restart } = require('nodemon');
const uuid = require('uuid');

const userDB = [
    {
        "id": "df16467a-a396-4036-a040-cf16e7bc200e",
        "first_name": "Roger",
        "last_name": "Matamoros",
        "email": "rmatamoros25@gmail.com",
        "password": "sdfwqaedqeqe213123",
        "birthday": "1997/02/25"
      }
    // {
    //     id: 'uuid',
    //     first_name: 'string',
    //     last_name: 'string',
    //     email: 'string',
    //     password: 'string',
    //     birthday: 'YYYY/MM/DD'
    // },
  ];

const getUser=()=>{
    return userDB;
}


const postUser=(first_name,last_name,email,password,birthday)=>{
    const newUser = {
        id: uuid.v4(),
        first_name,
        last_name,
        email,
        password,
        birthday
    }
    userDB.push(newUser)
    return userDB
}

const getUserById=(id)=>{
    const data = userDB.find(user => user.id === id)
    return data
}


module.exports={
    getUser,
    postUser,
    getUserById
}
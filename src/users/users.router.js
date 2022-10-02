const {Router} = require( 'express');
const { getUsers, getOneUser, createNewUser } = require('./users.services');

const router = Router();


router.get('/users',getUsers)
router.post('/users',createNewUser)
router.get('/users/:id',getOneUser)


module.exports= router;
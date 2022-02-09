const router = require('express').Router();
const { query } = require('express');
const { Op } = require('sequelize');
const { Name } = require('../db');

router.get('/', async(req, res) => {
    const { name } = req.query;
    try {
        if(name) {
            let nameuser = await Name.findAll({
                where : {name:{[Op.iLike]:`%${name}%`}}
            })
            return nameuser? res.json(nameuser) : res.sendStatus(404)
        } 
    } catch (error){
        res.status(505).send(error)
    }
})


router.post('/add', async (req, res) => {
    
    let { newname } = req.body;

    try {
        let add = await Name.findOrCreate({
            where: {
                name:newname
            }
        });

        res.json(add);

    }catch (error){
        res.status(505).send(error)
    }
})


module.exports = router;
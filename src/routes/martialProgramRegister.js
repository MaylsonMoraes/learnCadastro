const express = require('express');
const router = express.Router();
const MartialProgramRegister = require('../models/martialProgramRegister');

//list all
router.get('/', async (req, res) => {
    try {
        const martialProgramRegisters = await MartialProgramRegister.find();
        res.json({ error: false, martialProgramRegisters});
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

//um registro com id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const martialProgramRegister = await MartialProgramRegister.findById(id);
        res.json({ error: false, martialProgramRegister });
    } catch (err) {
        res.json({ error: true, message: err.message});
    }
});

//criar registro
router.post('/', async (req, res) => {
    try {
        const martialProgramRegister = req.body;
        const response = await new MartialProgramRegister(martialProgramRegister).save();
        res.json({ error: false, martialProgramRegister: response });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
    
});

//atualizar somente o registro com o id
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const novo_martialProgramRegister = req.body;
        const martialProgramRegister = await MartialProgramRegister.findByIdAndUpdate(id, novo_martialProgramRegister);
        res.json({ error: false, martialProgramRegister });
    } catch (err) {
        res.json({ error:true, message: err.message });
    }
});

//Deletar somente o registro com id
router.delete('/:id', async (req, res) => {

        try {
            const id = req.params.id
            const martialProgramRegister = await MartialProgramRegister.findByIdAndDelete( id );

            res.status(200).json({message: 'Arquivo removido com sucesso!'})

        } catch (err) {
            res.status(422).json({message: 'O arquivo não foi encontrado!'});
        }
});

module.exports = router;
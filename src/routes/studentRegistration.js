const express = require('express');
const router = express.Router();
const StudentRegistration = require('../models/studentRegistration');

//list all
router.get('/', async (req, res) => {
    try {
        const studentRegistrations = await StudentRegistration.find();
        res.json({ error: false, studentRegistrations});
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

//um registro com id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const studentRegistration = await StudentRegistration.findById(id);
        res.json({ error: false, studentRegistration });
    } catch (err) {
        res.json({ error: true, message: err.message});
    }
});

//criar registro
router.post('/', async (req, res) => {
    try {
        const studentRegistration = req.body;
        const response = await new StudentRegistration(studentRegistration).save();
        res.json({ error: false, studentRegistration: response });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
    
});

//atualizar somente o registro com o id
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const novo_studentRegistration = req.body;
        const studentRegistration = await StudentRegistration.findByIdAndUpdate(id, novo_studentRegistration);
        res.json({ error: false, studentRegistration });
    } catch (err) {
        res.json({ error:true, message: err.message });
    }
});

//Deletar somente o registro com id
router.delete('/:id', async (req, res) => {

        try {
            const id = req.params.id
            const studentRegistration = await StudentRegistration.findByIdAndDelete( id );

            res.status(200).json({message: 'Arquivo removido com sucesso!'})

        } catch (err) {
            res.status(422).json({message: 'O arquivo não foi encontrado!'});
        }
});

module.exports = router;
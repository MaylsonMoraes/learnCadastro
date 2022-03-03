const express = require('express');
const router = express.Router();
const MartialGraduation = require('../models/martialGraduation');

//list all
router.get('/', async (req, res) => {
    try {
        const martialGraduations = await MartialGraduation.find();
        res.json({ error: false, martialGraduations});
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

//um registro com id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const martialGraduation = await MartialGraduation.findById(id);
        res.json({ error: false, martialGraduation });
    } catch (err) {
        res.json({ error: true, message: err.message});
    }
});

//criar registro
router.post('/', async (req, res) => {
    try {
        const martialGraduation = req.body;
        const response = await new MartialGraduation(martialGraduation).save();
        res.json({ error: false, martialGraduation: response });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
    
});

//atualizar somente o registro com o id
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const novo_martialGraduation = req.body;
        const martialGraduation = await MartialGraduation.findByIdAndUpdate(id, novo_martialGraduation);
        res.json({ error: false, martialGraduation });
    } catch (err) {
        res.json({ error:true, message: err.message });
    }
});

//Deletar somente o registro com id
router.delete('/:id', async (req, res) => {

        try {
            const id = req.params.id
            const martialGraduation = await MartialGraduation.findByIdAndDelete( id );

            res.status(200).json({message: 'Arquivo removido com sucesso!'})

        } catch (err) {
            res.status(422).json({message: 'O arquivo não foi encontrado!'});
        }
});

module.exports = router;
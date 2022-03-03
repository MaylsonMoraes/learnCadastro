const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const Schema = mongoose.Schema;

module.exports = mongoose.model('MartialProgramRegister', new Schema
    (
        {

            name: {
                type: String,
                required: true
            },
            martialArtorStyle: {
                type: String,
                required: true
            },
            programType: {
                type: String,
                required: true
            }

            },
        {
            timestamps: true
        }
    )
);
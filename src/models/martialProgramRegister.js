const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('MartialProgramRegister', new Schema
    (
        {

            name: {
                type: String
            },
            martialArtorStyle: {
                type: String
            },
            programType: {
                type: String
            }

            },
        {
            timestamps: true
        }
    )
);
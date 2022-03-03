const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('StudentRegistration', new Schema
    (
        {
            martialGraduation: {
                type: mongoose.Types.ObjectId,
                ref: 'MartialGraduation',
                required: true
            },
            martialProgramRegister: {
                type: mongoose.Types.ObjectId,
                ref: 'MartialProgramRegister',
                required: true
            },
            fullName: {
                type: String,
                required: true
            },
            registration: {
                type: Number,
                required: true
            },
            cpf: {
                type: Number,
                required: true
            },
            dateOfBirth: {
                type: Date,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            whatsApp: {
                type: Number,
                required: true
            },
            rg: {
                type: Number
            },
            naturalness: {
                type: String
            },
            nationality: {
                type: String
            },
            profession: {
                type: String
            },
            address: {
                type: String
            },
            state: {
                type: String
            },
            city: {
                type: String
            },
            nameofParentorGuardian: {
                type: String
            },
            whatAllergies: {
                type: String
            },
            whichDiseases: {
                type: String
            },
            medicalHistory: {
                type: String
            },
            historicoDeCirurgias: {
                type: String
            },
            medicalContact: {
                type: String
            },
            information: {
                type: String
            }

            },
        {
            timestamps: true
        }
    )
);
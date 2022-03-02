const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('StudentRegistration', new Schema
    (
        {

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
            MedicalHistory: {
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
            históricoDeCirurgias: {
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
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('MartialGraduation', new Schema
    (
        {

            martialProgramRegister: {
                type: mongoose.Types.ObjectId,
                ref: 'MartialProgramRegister',
                required: true
            },
            graduationStatus: {
                type: String,
                required: true
            },
            graduationtype: {
                type: String,
                required: true
            },
            orderOfGraduation: {
                type: String,
            },
            graduationName: {
                type: String,
            },
            bandMainColor: {
                type: String,
            },
            secondaryColorOrBandDetail: {
                type: String,
            },
            minimumLengthOfStay: {
                type: Number
            },
            maximumStayTime: {
                type: Number
            },
            canTeach: {
                type: Boolean
            },
            minimumFrequency: {
                type: Number
            }

            },
        {
            timestamps: true
        }
    )
);
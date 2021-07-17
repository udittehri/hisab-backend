const path = require('path').resolve;
const config = require(path('config/constants'));
const mongoose = require('mongoose');
const moment = require('moment-timezone');

class Helper
{
    generateOTP () {
        return Math.floor(100000 + Math.random() * 900000);
    }

    // async validateIfRefExistsInOtherCollection (modelName, id) {
    //     let output = await modelName.findById(id);
    //     console.log('output', output);
    //     if(output) return true;

    //     return false;
    // }

    isValidMongoId (str) {
        return mongoose.Types.ObjectId.isValid(str);
    }

    slotDivision(days, interval, startTime, endTime) {


    }
}

module.exports = new Helper();
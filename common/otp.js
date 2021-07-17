const path = require('path').resolve;
const SendOtp = require('sendotp');

const helper = require('../common/helper');
const config = require(path('config/constants'));

// Create instance of SendOtp.
const sendOtp = new SendOtp(config.otp.authKey);

class OTPService
{
    send (contactNumber)
    {
        try {
            // Set OTP expiry.
            sendOtp.setOtpExpiry(config.otp.expiry);

            // Append country code with the phone number
            contactNumber = config.otp.countryCode + contactNumber;

            let senderId = config.otp.sender,
                OTP = helper.generateOTP(); 

            // Send OTP to the user
            sendOtp.send(contactNumber, senderId, OTP, (error, data) => {
                if (error) console.log(error);
                else console.log(data);
            });

        } catch (error) { console.log(error); }
    }

    verify (contactNumber, otp, cb) 
    {
        try {
            contactNumber = config.otp.countryCode + contactNumber;

            // Verify OTP
            sendOtp.verify(contactNumber, otp, (error, data) => {
                if (error) cb(error, null);
                else cb(null, data);
            });
        } catch (error) { console.log(error); }
    }

}

module.exports = new OTPService();
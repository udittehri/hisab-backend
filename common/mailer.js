const path = require('path').resolve;
const nodemailer = require('nodemailer');
const constants = require(path('config/constants'));

const mailFrom = constants.mailer.mailFrom;

// Setting up email credentials
const transporter = nodemailer.createTransport({
    service: constants.mailer.service,
    auth: {
        user: constants.mailer.email,
        pass: constants.mailer.password
    },
});

class MailerService {
    /*
     * Send OTP through email to the user
     */
    async sendContactResponse(name, emailId) {
        try {
            // let emailId = user.email;

            // Prepare payload to send to user
            var payload = {
                to: emailId,
                from: mailFrom,
                subject: 'Subject Title',
                html: `<h4>Dear ${name}!</h4><p>Thank You For Contacting Us. We will Get back to you soon.</p><br>`
            };

            // Mail password to user
            let mailer = await MailerService.sendMail(payload);
            if (mailer.status === false) throw mailer.error;

            return { status: true, data: mailer.data };

        } catch (e) {
            console.log(e);
            return { status: false, error: e };
        }
    }

    /*
     * Mail function, Expects payload object and users email address as well.
     * Mails user a randomly generated password through which users can log into the app.
     */
    static async sendMail(payload) {
        try {
            // Send mail to user
            let mailer = await transporter.sendMail(payload);

            return { status: true, data: mailer };

        } catch (e) {
            console.log(e);
            return { status: false, error: e };
        }

    }

}

module.exports = new MailerService();

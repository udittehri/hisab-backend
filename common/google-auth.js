const { OAuth2Client } = require('google-auth-library');
const config = require('../config/constants');

const client = new OAuth2Client(config.googleClientId);
async function verify(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
    });
    const payload = ticket.getPayload();

    return payload;
}

module.exports = {verify};
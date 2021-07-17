const mongoose = require('mongoose');
const messages = require('../common/messages');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, messages.FULL_NAME_REQUIRED],
    },
    user_id: {
        type: String,
        required:true,
        unique: true,
        sparse: true
    },
    email: {
        type: String,
        required:false,
        unique: true,
        sparse: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        sparse: true
    },
    picture: {
        type: String,
        required: false,
        default: null
    },
    address: {
        type: String,
        required: false 
    },
    password_reset_token: String,

}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('XOXO', schema);

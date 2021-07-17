const mongoose = require('mongoose');
const messages = require('./../../common/messages');

var schema = new mongoose.Schema({
    note: {
        type: String,
        required: false
    },
    amount: {
        type: Number,
        required: true
    },
    picture: {
        type: String,
        required: false,
        unique: true,
        sparse: true
    },
    currentBalance: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
        unique: true,
        sparse: true
    },
    isCr: {
        type: String,
        required: false,
        default: null
    },
    status: {
        type: Number,
        enum: [1, 2], // 1-> Active , 2->Inactive, 3-> Absconded,
        default: 1
    },
    xoxo_id: {
        type: String,
        required: true
    },
    password_reset_token: String,

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('Transactions', schema);
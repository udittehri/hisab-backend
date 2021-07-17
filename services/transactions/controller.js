// const config = require(path('config/constants'));

const apiError = require('../../common/api-errors');

const messages = require('../../common/messages');
const ResponseService = require('../../common/response');

const TransactionService = require('./service')
const XOXOService = require('./../xoxo/service')

class TransactionController {
    create = async (req, res) => {
        try {
            let request = {
                ...req.body
            }
            // If no username provided, Throw error.
            if (!request.amount) throw new apiError.ValidationError('username', messages.AMOUNT_REQUIRED);
            if (!request.xoxo_id) throw new apiError.ValidationError('username', messages.USER_ID_REQUIRED);

            let criteria = {
                amount: request.amount,
                xoxo_id: request.xoxo_id,
                note: request.note ? request.note : "",
            }

            const user = await XOXOService.getXOXO({
                _id: request.xoxo_id
            })
            // let cb;
            if (!user) throw new apiError.ValidationError('user', messages.ID_INVALID);
            if (!request.isCr) { // Considering a credit 
                criteria.isCr = true
                criteria.currentBalance = user.balance - request.amount
            } else {
                criteria.isCr = true
                criteria.currentBalance = user.balance + request.amount
            }

            XOXOService.updateXOXO({
                balance: criteria.currentBalance
            }, {
                _id: request.xoxo_id
            })

            criteria.date = request.date ? new Date(request.date) : new Date()


            let r = TransactionService.createtransaction(criteria);

            return res.status(200).send(ResponseService.success());
        } catch (err) {
            return res.status(err.code || 500).send(ResponseService.failure(err));
        }

    }
    // editXO = async (req, res) => {
    //     try {
    //         let request = {
    //             ...req.body
    //         }

    //         if (request.user_id) throw new apiError.ValidationError('usrer_id', messages.ID_INVALID);
    //         let ID = request._id;
    //         delete request._id;
    //         let response = XOXOService.updateXOXO(request, {
    //             _id: ID
    //         })
    //         return res.status(200).send(ResponseService.success(response));
    //     } catch (err) {
    //         return res.status(err.code || 500).send(ResponseService.failure(err));
    //     }
    // }

}

module.exports = new TransactionController;
// const config = require(path('config/constants'));

const apiError = require('../../common/api-errors');

const messages = require('./../../common/messages');
const ResponseService = require('../../common/response');

const XOXOService = require('./service')

class XOXOController {
    addXO = async (req, res) => {
        try {
            let request = {
                ...req.body
            }

            // If no username provided, Throw error.
            if (!request.name) throw new apiError.ValidationError('username', messages.NAME_REQUIRED);
            if (!request.user_id) throw new apiError.ValidationError('username', messages.USER_ID_REQUIRED);

            let r = XOXOService.createXOXO(request);

            return res.status(200).send(ResponseService.success(r));
        } catch (err) {
            return res.status(err.code || 500).send(ResponseService.failure(err));
        }

    }
    showall = async (req, res) => {
        try {
            let request = {
                ...req.body
            }
            let response = await XOXOService.getAllXOXOs(request);
            return res.status(200).send(ResponseService.success(response));

        } catch (err) {
            return res.status(err.code || 500).send(ResponseService.failure(err));

        }
    }
    showXO = async (req, res) => {
        try {
            let request = {
                ...req.body
            }


        } catch (err) {

        }
    }
    editXO = async (req, res) => {
        try {
            let request = {
                ...req.body
            }

            if (request.user_id) throw new apiError.ValidationError('usrer_id', messages.ID_INVALID);
            let ID = request._id;
            delete request._id;
            let response = XOXOService.updateXOXO(request, {
                _id: ID
            })
            return res.status(200).send(ResponseService.success(response));
        } catch (err) {
            return res.status(err.code || 500).send(ResponseService.failure(err));
        }
    }

}

module.exports = new XOXOController;
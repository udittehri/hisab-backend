const XOXO = require('./XOXO');

class XOXOService {

    getXOXO(request) {
        return XOXO.findOne(request);
    }
    getAllXOXOs(request) {
        return XOXO.find(request);
    }

    createXOXO(details) {
        return new XOXO(details).save();
    }

    updateXOXO(criteria, details) {
        return XOXO.findOneAndUpdate(criteria, details, { new: true })
    }

    // Delete XOXO is To Update XOXO with status Disabled 
}

module.exports = new XOXOService();
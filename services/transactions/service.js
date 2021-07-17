const transaction = require('./transactions');

class transactionService {

    gettransaction(request) {
        return transaction.findOne(request);
    }
    getAlltransactions(request) {
        return transaction.find(request);
    }

    createtransaction(details) {
        return new transaction(details).save();
    }

    updatetransaction(criteria, details) {
        return transaction.findOneAndUpdate(criteria, details, {
            new: true
        })
    }

    // Delete transaction is To Update transaction with status Disabled 
}

module.exports = new transactionService();
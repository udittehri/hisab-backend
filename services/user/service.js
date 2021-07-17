const User = require('../../models/user');

class UserService {

    getUser(request) {
        return User.findOne(request);
    }
    getAllUsers(request) {
        return User.find(request);
    }

    createUser(details) {
        return new User(details).save();
    }

    updateUser(criteria, details) {
        return User.findOneAndUpdate(criteria, details, { new: true })
    }

    // Delete User is To Update User with status Disabled 
}

module.exports = new UserService();
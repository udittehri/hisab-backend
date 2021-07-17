
class ApiError extends Error {
    constructor(message, code) {

        // Calling parent constructor of base Error class.
        super(message);

        // Saving class name in the property of our custom error as a shortcut.
        this.name = this.constructor.name;

        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(this, this.constructor);

        // Http response code, default 500 if not provided.
        this.code = code || 500;
    }
}

class UnauthorizedError extends ApiError {
    constructor(message, error) {

        let defaultMessage = 'You are not logged in, e.g. using a valid access token.';
        super(message || defaultMessage, 401);

        this.error = error || {};
    }
}

class ForbiddenError extends ApiError {
    constructor(message, error) {

        let defaultMessage = 'You are authenticated but do not have access to what you are trying to do.';
        super(message || defaultMessage, 403);

        this.error = error || {};
    }
}

class NotFoundError extends ApiError {
    constructor(resource, error) {

        let defaultMessage = `The resource ${resource} you are requesting does not exist.`;
        super(defaultMessage, 404);

        this.error = error || {};
    }
}

class ResourceAlreadyExistError extends ApiError {
    constructor(field, message) {

        let defaultMessage = 'The resource you are requesting already exists.';
        super(message || defaultMessage, 409);

        this.error = { [field]: [message] };
    }
}

class ValidationError extends ApiError {
    constructor(field, message) {

        let defaultMessage = 'Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.';
        super(message || defaultMessage, 422);

        this.error = { validation: { [field]: [message] } };
    }
}

class ModelValidationError extends ApiError {
    constructor(error) {

        let defaultMessage = 'Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.';

        super(error.message || defaultMessage, 422);

        this.error = { validation: error };
    }
}

class InternalServerError extends ApiError {
    constructor(error, message) {

        let defaultMessage = 'An error occured on the server which was not the consumer\s fault.';
        super(message || defaultMessage, 500);

        this.error = error || {};
    }
}

class UnexpectedError extends ApiError {
    constructor(message, error) {

        let defaultMessage = 'Something went wrong.';
        super(message || defaultMessage, 500);

        this.error = error || {};
    }
}

module.exports = {
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    ResourceAlreadyExistError,
    ValidationError,
    ModelValidationError,
    InternalServerError,
    UnexpectedError
}
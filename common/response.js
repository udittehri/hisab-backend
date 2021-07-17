// Requiring response codes service
const ResponseCodeService = require('./response-codes');

class ResponseService {

    success (data = {})
    {
        console.table([{ data: data }]);

        return {
            success: true,
            code: 200,
            data: data
        };
    }

    failure (e) 
    {
        // Console error 
        console.table([{ code: e.code, name: e.name, message: e.message }]);

        return {
            success: false,
            code: ResponseCodeService.getCode(e.code),
            singleStringMessage: e.message ? e.message.replace(/\s+$/g, '.') : e.message,
            error: e.error || e
        };
    }

}

module.exports = new ResponseService();
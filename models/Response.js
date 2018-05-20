var Response = function()                              //response function 
{
    this.success = function(message, data)
    {
        var responseMessage = {};
        responseMessage.code = 200;
        responseMessage.message = message;
        responseMessage.data = data;
        return responseMessage;
    };

    this.error = function(message, data)
    {
        var responseMessage = {};
        responseMessage.code = 500;
        responseMessage.message = message;
        responseMessage.data = data;
        return responseMessage;
    };

}

module.exports = new Response();
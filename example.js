const pusha = require('./')('YOUR_API_KEY');

pusha.send({
    recipients: ['USER_TOKEN_1', 'USER_TOKEN_2'],
    message: 'hello from node'
}).then(response => {
    console.log(response)
}).catch(error => {
    console.error(error)
})





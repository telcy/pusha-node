const pusha = require('./')('YOUR_API_KEY');

pusha.send({
    token: 'USER_TOKEN',
    message: 'hello from node'
}).then(response => {
    console.log(response)
}).catch(error => {
    console.error(error)
})





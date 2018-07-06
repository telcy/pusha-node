"use strict"

const request = require('request')
const API_BASE_URL = 'https://api.pusha.io/v1'

function Pusha(key) {
    if (!(this instanceof Pusha)) {
        return new Pusha(key)
    }
    this.setApiKey(key)
}

Pusha.prototype = {
    setApiKey(key) {
        if (key) {
            this.apiKey = key
        }
    },
    send: function(notificationOptions = null) {
        if (notificationOptions === null) {
            notificationOptions = {}
        }

        return new Promise((resolve, reject) => {
            var requestOptions = {
                url: API_BASE_URL + '/notifications',
                headers: { 'apikey': this.apiKey },
                formData: notificationOptions
            }

            request.post(requestOptions, (error, response, body) => {
                this._checkResponse(response, body, reject)
                return resolve(JSON.parse(body))
            })
        })
    },
    _checkResponse: function(response, body, reject) {
        if (!response || !body) {
            return reject({'status': 'failure', 'message': 'Invalid response from the server.'})
        }

        if (response.statusCode == 200) {
            return true
        }

        if (response.statusCode >= 400) {
            if (body) return reject(JSON.parse(body))
        }

        return reject({'status': 'failure', 'message': 'Invalid response from the server.', 'response': response})
    }
}

module.exports = Pusha
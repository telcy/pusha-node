Pusha Node Package
=======================

This Node package provides a simplified way to interact with the [Pusha](https://www.pusha.io) API.

## Documentation

See the full documentation on [Pusha's documentation](https://www.pusha.io/documentation).

## Installation

    npm install --save pusha

### Requirements

* [Request](https://www.npmjs.com/package/request)

## Usage

This library needs to be configured with your `API Key` which can be found [here](https://www.pusha.io/applications).

```javascript
const pusha = require('pusha')('YOUR_API_KEY');
```

### Basic example

The user token is needed from every user you wanna send notifications to. They can find it [here](https://www.pusha.io/tokens).

```javascript
const pusha = require('pusha')('YOUR_API_KEY');

pusha.send({
    recipients: ['USER_TOKEN_1', 'USER_TOKEN_2'],
    message: 'hello from node'
}).then(response => {
    console.log(response)
}).catch(error => {
    console.error(error)
})

```

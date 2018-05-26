# Noger-ui(Beta)

Noger-ui is a npm module which can be used to test the api's without using the 3rd party tools.Noger-ui uses the **noger.json** file to create the ui, for more details on how to use Noger-ui follow the [link](https://github.com/vikram1794/noger-ui/blob/master/readme.md). Noger-ui provides you an UI for checking basic authentication, get, post, put, delete requestes. So no overhead of using 3rd part tools to test the api's or making any documentation.

## Installation
  
 To use Noger-ui you must have [**nodejs**](https://nodejs.org/) and [**npm**](https://nodejs.org/) preinstalled in your system. To install Noger-ui use 

   `npm install noger-ui`

This will install Noger-ui so that it can be used with-in your project for documentaion and testing purposes.

## How to use

 - The basic structure of the **noger.json** file would look like:
 `{
    "route": [
        "user",
        "user",
        "user",
        "user"
    ],
    "path": [
        "api/getName",
        "api/addName",
        "api/updateName",
        "api/deleteName"
    ],
    "type": [
        "get",
        "post",
        "put",
        "delete"
    ],
    "name": [
        "getName",
        "addName",
        "updateName",
        "deleteName"
    ]
}`
   
 - Express setup(changes in project's main.js file)

   `const nogerFile = require('./noger.json');`
    `const nogerUi = require('noger-ui');`

   ` nogerUi.setUp(app, nogerFile, port);`

 - Load noger-ui from url 
    `http://localhost:portnumber/noger-ui`

    `for example http://localhost:3000/noger-ui`

## License

Apache 2.0

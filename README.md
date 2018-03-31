# REST-API with Express
***
## Module 2 Tutorial
***
### Packages which will be in dependencies:

1. morgan
2. body-parser
3. errorhandler
4. body-parser
5. node-dev

To install them: `npm i express morgan errorhandler -E`
To install node-dev `npm i node-dev -DE`
***

#### How to run it?

Launch server with `node server.js` in Terminal/Command Prompt from the project root

#### How to use it?

Use Postman, CURL or any other HTTP request agent to test this server.

[Postman download](https://www.getpostman.com/apps)
> When using Postman for the POST request, make sure to select body, 
> raw and JSON (application/json) settings to avoid a common mistake 
> of not providing the right request payload format.

#### Here's the CURL code which you can execute to create a new account (POST), update it (PUT), retrieve it account (GET) and then delete it (DELETE).

*posts account data*
`curl -H "Content-Type: application/json" -X POST -d '{"balance": 100, "name":"checking"}'  "http://localhost:3000/accounts"`

*updates account data at a specified id*
`curl -H 'Content-Type: application/json' -X PUT -d '{"balance": 200, "name": "savings"}'  "http://localhost:3000/accounts/0"`

*gets account data*
`curl "http://localhost:3000/accounts"`

*deletes account data and a specified id*
`curl -X DELETE "http://localhost:3000/accounts/0"`
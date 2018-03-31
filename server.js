// server.js
// Module 2 Tutorial
// Introduction to nodejs: Microsoft

// Importing dependencies
const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')

// Port
const port = 3000

// Variables for in-memory data store
let store = {}
store.accounts = []

// Creating Express app
let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

// Implementing GET/accounts
app.get('/accounts', (req, res) => {
	res.status(200).send(store.accounts)
})

// Define POST: to creat new account
app.post('/accounts', (req, res) => {
	let newAccount = req.body 
	let id = store.accounts.length
	store.accounts.push(newAccount)
	res.status(201).send({id: id})
})

// PUT method: to modify accounts
app.put('/accounts/:id', (req, res) => {
	store.accounts[req.params.id] = req.body
	res.status(200).send(store.accounts[req.params.id])
})

// DELETE method: to erase accounts from data base
app.delete('/accounts/:id', (req, res) => {
	store.accounts.splice(req.params.id, 1)
	res.status(204).send()
})

app.listen(port)
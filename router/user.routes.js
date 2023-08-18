const express = require('express');
const app = express();
const db = require('../utils/db');
const { UserController} = require('../controller')

app.get('/get-user', UserController.getUser);
app.post('/create-user', UserController.createUser);
app.put('/update-user', UserController.updateUser);
app.delete('/delete-user', UserController.deleteUser);
  
module.exports = app;
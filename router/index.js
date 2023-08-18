const express = require('express');
const Router = express();
const UserRoutes = require('./user.routes');
Router.use("/user", UserRoutes);

module.exports = Router;
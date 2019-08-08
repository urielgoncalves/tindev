const express = require('express');
const DevController = require('./controllers/DevController');
const routes = express.Router();

//GET, POST, PUT, DELETE
// routes.get('/', (req, res)=>{
//     console.log(req.body);
//     //return res.send(`Hello ${req.query.name}`);
//     //return res.json({message: `Hello ${req.query.name}`});
//     //return res.send('Hello World');
//     return req.json({ok:true});
// });

//routes.post('/devs', (req, res)=>{
routes.post('/devs', DevController.store);

module.exports = routes;
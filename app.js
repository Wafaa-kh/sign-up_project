const express = require('express')
const app = express()
app.use(express.static('public'))
//view engine setup
app.set('view engine', 'ejs');
const bodybarser= require ("body-parser");
const { request } = require('express');
app.use(express.urlencoded({extended : true}));


app.get('/', function(req, res) {
    res.render('pages/index');
  });

  app.get('/data', (req, res,next)=>{
    res.render('pages/data',{
      name:req.query.name,
      email:req.query.email,
      password: req.query.password})
    })
  
app.listen(5000,()=>{ 
    console.log("Server listening on port:5000");
})
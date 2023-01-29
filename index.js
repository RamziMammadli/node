const express = require("express");

const app = express();

const customer = require("./data");

app.get("/customer", (req, res) => {
  res.send("Datalari cekecenmi?)))");
});

app.post("/customer", function (req, res) {
  let data = req.body;

  companyName = req.body.data;
  contactName = req.body.data;

  console.log(req.body);
  res.send();
});

app.delete("/customer/:id", (req, res) => {
  const { id } = req.params;

  const custs = custs.filter((p) => p.id !== id);

  res.send("DELETE Request Called");
});

// const express = require('express')

// const app = express()

// app.get('/api/products', function(req,res){

//     let products = ["a", 'v']
//     res.json(products)

// })

app.listen(8080);

// const http = require('hhtp')

// http.createServer(function(req,res) {
//     res.writeHead(200, {'Content-Type' : 'text/plaion'})
//     res.end('Hello world')
// }).listen(8080)

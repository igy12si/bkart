const express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'mediana'
});
const app = express();

connection.connect(function(err){
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }  
  console.log('connected as id ' + connection.threadId);
});


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-access-token');
  next()
});

app.use(express.json());

app.get('/', (req,res)=>{
  res.send("dela");
});

app.get('/api/mediana/get', (req,res)=>{
  var sql= 'SELECT * from data ORDER BY CREATED_AT desc';
  connection.query(sql, function (error, results){
    if (error) throw error;
    res.send(results);
  })
});

app.post('/api/mediana/calculate', (req,res) => {
  console.log(req.body);
  const numbers = req.body.numbers;

  const median = arr => {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };
  const mediana = median(numbers);
  console.log(mediana);

  const numbersString = JSON.stringify(numbers);

  var sql ='INSERT INTO data (MEDIANA, STEVILA) values ('+  mediana + ', "'+numbersString+'")';

  connection.query(sql, function (error, results){
    if (error) throw error;
    res.send("OK");
    console.log("Shranjeno v bazo!");
  })
});
 


// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Active on localhost:'+port));

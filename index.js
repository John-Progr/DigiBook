import {book} from './models/books.js';
import {bookDAO} from './models/bookDAO.js';


import { createRequire } from "module";
const require = createRequire(import.meta.url)
const express=require('express')
const path = require('path')


const __dirname = path.resolve()
console.log(__dirname)
const app=express()

app.use('/static', express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//var bodyParser = require("body-parser");
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
var bookdatabase=new bookDAO()
app.get('/', function(req, res){

  var options = {
      root: path.join(__dirname, 'public')
  }

  res.sendFile('index.html', options, function(err){
      console.log(err)
  })
});
//app.use(express.static('public'));
app.post('/addbook',function(request,response){
  console.log('i got a request')
  
bookdatabase.addBook(new book(request.body['work_id'],request.body['author'],request.body['title'],'')).then(function(result){
  if(result=='ok'){
    response.status(201).send('ok')
  }else{
    response.status(500).send('not ok')
  }
});
 
});

app.delete('/deletebook',function(request,response){
  console.log('i got request')
  bookdatabase.deleteBook(new book(request.body['work_id'],'','','','')).then(function(result){
    response.status(201).send(result)
  });
});


app.post('/bookid',function(request,response){
  console.log('i got request')
  bookdatabase.searchBookById(new book(request.body['work_id'],'','','')).then(function(result){
    response.status(201).send(result)
  });

});

  

app.get('/searchbook',function(request,response){
  console.log('i got request')
  //console.log('json',request.body);

  bookdatabase.searchBook(new book('','','','')).then(function(result){
    response.send(result)
  });
  
});


app.post('/editbook',function(request,response){
  console.log('i got request')
  //console.log('json',request.body);
  

  bookdatabase.editBook(new book(request.body.work_id,request.body.Author,request.body.Title,request.body.review)).then(function(result){
    response.redirect('static/list.html')
   // response.send(result);
  });
});



app.listen(3000,()=>console.log('listening at 3000'))



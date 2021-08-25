'use strict';
import { createRequire } from "module";



export class bookDAO{

   


    
async addBook(book){

    const id=book.work_id;
    const auth=book.auth;
    const name=book.name;
    
     var resp='';
     const require = createRequire(import.meta.url);
    
    const sql = require('mssql/msnodesqlv8')

     const pool = new sql.ConnectionPool({
             database: 'favourite_books',
             server: '127.0.0.1',
             driver: 'msnodesqlv8',
            options: {
               trustedConnection: true
            }
        })
   
   
  


       try{
             await  pool.connect();
            console.log('Connected!');
            var sql_query=`INSERT INTO books(work_id,title,author) VALUES('${id}','${name}','${auth}')`;
            console.log(sql_query);
            const result=await  pool.query(sql_query);
            resp='ok'
          
           

          
        }catch(err){
            console.log('error')


        }


      
        console.log(resp);
        return resp;
              
         
            
    
  
   
}  


               
    

   
    


async deleteBook(book){
    const require = createRequire(import.meta.url);
    const id=book.work_id;
    
    var resp=''
    const sql = require('mssql/msnodesqlv8')

     const pool = new sql.ConnectionPool({
             database: 'favourite_books',
             server: '127.0.0.1',
             driver: 'msnodesqlv8',
            options: {
               trustedConnection: true
            }
        })

        try{
            await  pool.connect();
           console.log('Connected!');
           var sql_query=`DELETE FROM books WHERE work_id='${id}'`;
           const result=await  pool.query(sql_query);
           resp="ok"
      
          

         
       }catch(err){
           console.log('error')


       }


     
       //console.log(resp);
       return resp;


   


}



async searchBook(book){
    const require = createRequire(import.meta.url);
    const id=book.work_id;
    var resp=''
    const sql = require('mssql/msnodesqlv8')

     const pool = new sql.ConnectionPool({
             database: 'favourite_books',
             server: '127.0.0.1',
             driver: 'msnodesqlv8',
            options: {
               trustedConnection: true
            }
        })

    try{
        await  pool.connect();
       console.log('Connected!');
       var sql_query=`SELECT* FROM books`;
       const result=await  pool.query(sql_query);
       resp=JSON.stringify(result);
      // console.log(result);
      

     
   }catch(err){
       console.log('error')


   }


   
   //console.log(resp);
   return resp;


}

async searchBookById(book){

    const require = createRequire(import.meta.url);
    const id=book.work_id;
    var resp=''
    const sql = require('mssql/msnodesqlv8')

     const pool = new sql.ConnectionPool({
             database: 'favourite_books',
             server: '127.0.0.1',
             driver: 'msnodesqlv8',
            options: {
               trustedConnection: true
            }
        })

    try{
        await  pool.connect();
       console.log('Connected!');
       var sql_query=`SELECT* FROM books WHERE work_id='${id}'`;
       const result=await  pool.query(sql_query);
       console.log(result);
       resp=JSON.stringify(result);
      // console.log(result);
      

     
   }catch(err){
       console.log('error')


   }



   //console.log(resp);
   return resp;


}

async editBook(book){

    const require = createRequire(import.meta.url);
    const id=book.work_id;
    const author=book.author;
    const book_name=book.book_name;
    const review=book.review;
    var resp=''
    const sql = require('mssql/msnodesqlv8')

     const pool = new sql.ConnectionPool({
             database: 'favourite_books',
             server: '127.0.0.1',
             driver: 'msnodesqlv8',
            options: {
               trustedConnection: true
            }
        })

    try{
        await  pool.connect();
       console.log('Connected!');
       var sql_query=`UPDATE books SET title='${book_name}',author='${author}',review='${review}' WHERE work_id='${id}'`;
       const result=await  pool.query(sql_query);
       resp=JSON.stringify(result);
      // console.log(result);

     
   }catch(err){
       console.log('error')


   }



   //console.log(resp);
   return resp;
}










      //simple query
   

}
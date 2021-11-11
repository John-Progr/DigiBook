//PX1 JAVASCRIPT CODE


document.getElementById('getTitles').addEventListener('click', getTitles);

document.querySelector('button').addEventListener('click', getTitles);

function getTitles(){

document.getElementById('demo').innerHTML='wait for a moment...';

let myHeaders = new Headers()
myHeaders.append('Accept','application/json')

let init={
method:"GET",
headers: myHeaders
}

var key=document.getElementById('key').value

final_url='https://reststop.randomhouse.com/resources/works?start=0&max=5&search='.concat(key)

fetch(final_url,init)
.then(response => response.json())
.then(data => {
  let output = '<h2>Book-Results</h2>'

  var i;

  output+=data.work.length+' results have been found!'

  for( i=0; i<data.work.length; i++){
    let title=data.work[i].titleweb.replace(/['']/g,"");
    let id = data.work[i].workid
    let author = data.work[i].authorweb
      var save_id= "save_"+data.work[i].workid;
      var del_id= "del_"+data.work[i].workid;
      var p_mess='p_'+data.work[i].workid;
      output +=` 
                  <div>
                      <p>Book_id: ${id}</p>
                      <p>Title: ${title}</p>
                      <p>Author: ${author}</p>
                       <p id="${p_mess}"></p>
                      <button id="${save_id}" onclick ="btn_save(${save_id},${del_id},'${title}',${id},'${author}','${p_mess}')">Save</button>
                      <button hidden id="${del_id}" onclick ="btn_del(${save_id},${del_id},${id},${p_mess})">Undo</button>

                  </div>
                      `;
    
  }

document.getElementById('demo').innerHTML=output;
})

.catch((error)=>{
  document.getElementById('demo').innerHTML='No results found';

})

}

// PX2 JAVASCRIPT CODE

function btn_save(save_id,del_id,title,id,author,p_mess){
  //if(document.getElementById(del_id.id).hidden = true){
   // document.getElementById(save_id.id).hidden = true;
  //  document.getElementById(del_id.id).hidden = true;
  //}
  document.getElementById(save_id.id).hidden=true;
  document.getElementById(del_id.id).hidden=false;

  addBook(id,author,title,p_mess);
}

function btn_del(save_id,del_id,id,p_mess){
  document.getElementById(save_id.id).hidden=false;
  document.getElementById(del_id.id).hidden=true;

  undoBook(id,p_mess);
 
}



function addBook(work_id,author,title,p_mess){
console.log(p_mess);
console.log(title);
  var obj={author:author,title:title};
  var json_obj=JSON.stringify(obj);
  console.log(json_obj);

 console.log(work_id)
  const options={
    method:'POST',
    headers: { "Content-Type": "application/json"},
    body: json_obj
    
  }

  fetch(`/addbook/${work_id} `,options).
  then(response=>response.text()).then(data=>{
    console.log(data);
    if(data=='ok'){
      output='Your book was added';
      document.getElementById(p_mess).innerHTML=output;
    }else{
      output='book already exists';
      document.getElementById(p_mess).innerHTML=output
    }
  });
}


function undoBook(work_id,p_mess){
  var obj={work_id:work_id};
  var json_obj=JSON.stringify(obj);
  console.log(json_obj);


  const options={
    method:'DELETE',
    headers: { "Content-Type": "application/json"},
    body: json_obj
    
  }
   console.log('hello');
  fetch('/deletebook ',options).
  then(response=>response.text()).then(data=>{
    console.log(data);
    output="book removed!";
    console.log(output);
    if(data=="ok"){
      document.getElementById(p_mess.id).innerHTML=output;
    }
   

  });

}

    





  
  







 
  

 
 
  









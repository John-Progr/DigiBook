

function getTitles(){

    //document.getElementById('demo').innerHTML='Loading...';
    
    let myHeaders = new Headers()
    myHeaders.append('Accept','application/json')
    
    let init={
    method:"GET",
    headers: myHeaders
    }
    
    //var key=document.getElementById('key').value
    
    final_url='/searchbook ';
    
    
    fetch(final_url,init)
    .then(response => response.json())
    .then(data => {
        let output = '<h2>Books</h2>'
      //  console.log(data.recordset.);

        for( i=0;i<data.recordset.length; i++){
            let title=data.recordset[i].title;
            let id=data.recordset[i].work_id;
            let author=data.recordset[i].author;
            let del_id='del_'+data.recordset[i].work_id;
            var p_mess='p_'+data.recordset[i].work_id;
            console.log(p_mess);
            var li_id='li_'+data.recordset[i].work_id;
            var edit_id='edit_'+data.recordset[i].work_id;
            let review=data.recordset[i].review;
            if(review==null){
              review=""
            }
            console.log(title);
           // var p_mess='p_'+data.recordset.workid;

            output +=` 
              <li id=${li_id}>
                <p>work_id:${id}</p>
                <p>title:${title}</p>
                <p>author:${author}</p>
                <p>review:${review}</p>
                <p id="${p_mess}"></p>
                <button id="${del_id}" onclick ="btn_del(${id},${p_mess},${li_id})">Delete</button>
                <button id="${edit_id}" onclick="edit_btn(${id})">Edit</button>
             </li>       
            
                `;
        }
        document.getElementById('favourite_list').innerHTML=output;

    });
}
    
        
function btn_del(id,p_mess,li_id){
   
  
    deleteBook(id,p_mess,li_id);
   
  }
        
        

function deleteBook(work_id,p_mess,li_id){
    var obj={work_id:work_id};
    var json_obj=JSON.stringify(obj);
    console.log(json_obj);
    console.log(p_mess.id);
  
    const options={
      method:'DELETE',
      headers: { "Content-Type": "application/json"},
      body: json_obj
      
    }
  
    fetch('/deletebook ',options).
    then(response=>response.text()).then(data=>{
      console.log(data);
      output="book removed!";
      console.log(output);
      document.getElementById(p_mess.id).innerHTML=output;
      document.getElementById(li_id.id).hidden=true;
    });
  
  }
        


  function filterBooks() {

    setTimeout(function(){

   
    // Declare variables
    console.log('hello');
    var  a, i, txtValue;
    var input = document.getElementById('myInput');
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("favourite_list");
    var  li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("p")[1];
      txtValue = a.textContent;
      txtValue=txtValue.substring(6, txtValue.length)
      console.log(txtValue);
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  },1000)
  }

function edit_btn(id){
  //make a remove in case
  //put the id on local storage
  //
  localStorage.clear();
  window.location.href="form.html";
  localStorage.setItem("id",id)
 

}

getTitles();
    
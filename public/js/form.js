



function editClick(element){
    document.getElementById(element).readOnly=false;
}




function makethemAppear(){
    //we take the id from local storage 
    //we fetch the right information 
    //and we can edit them!
 
    var work_id=localStorage.getItem('id');
    console.log(work_id);
    let myHeaders = new Headers()
    
    var obj={work_id:work_id};
    var json_obj=JSON.stringify(obj);
    console.log(json_obj);
    
    let init={
    method:"POST",
    headers: { "Content-Type": "application/json"},
    body: json_obj
    }
    
    //var key=document.getElementById('key').value
    
    final_url='/bookid';
    
    
    fetch(final_url,init)
    .then(response => response.json())
    .then(data => {
        var work_id=data.recordset[0].work_id;
        var author=data.recordset[0].author;
        var title=data.recordset[0].title;
        var review=data.recordset[0].review;
       console.log(work_id);
       console.log(author);
       console.log(title);
       document.getElementById("work_id").value = work_id;
       document.getElementById("Author").value=author;
       document.getElementById("Title").value=title;
       document.getElementById("review").value=review;


    });

        
        
      //  console.log(data.recordset.);

        

}

makethemAppear();
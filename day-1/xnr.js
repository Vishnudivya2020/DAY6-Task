let XMLHTTPRequst=require('xhr2');

let xhr=new XMLHTTPRequst();

xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.onload=function(){
   // let users=JSON.parse(xhr.responseText);
   for(let index in JSON.parse(xhr.responseText)){
    console.log(JSON.parse(xhr.responseText)[index].name);
    console.log(JSON.parse(xhr.responseText)[index].population);
    console.log(JSON.parse(xhr.responseText)[index].region.subregion);

    
   }
   
       
   
}

xhr.send();

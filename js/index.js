var urlName=document.getElementById("urlName");
var urlLink=document.getElementById("urlLink");
var btnSubmit=document.querySelector(".submit_btn");
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))


btnSubmit.addEventListener("click",function(){
    addlink();
})

var linksarray;
if(localStorage.getItem("links")==null){
    linksarray=[];
}else{
   linksarray=JSON.parse(localStorage.getItem("links")) 
   displayData()
}

function addlink(){
    if(empty()==true){

        var user={
            urlName:urlName.value,
            urlLink:urlLink.value,
            urlnumber:hello()
    
        }
        console.log(user);
    linksarray.push(user);
        displayData()
        localStorage.setItem("links",JSON.stringify(linksarray));
    clearform();
    }else{
        // document.querySelector(".modal-dialog").classList.replace("d-none","d-block");
        myModal.show()
    }

}
function clearform(){
    urlName.value=null;
    urlLink.value=null;
}

function hello(){
    for(var i=0;i<linksarray.length;i++){
    }
    return i+=1;
}
function displayData(){
    cartuona="";
    



    for(var i=0;i<linksarray.length;i++){
    //${linksarray[i].urlnumber} 

cartuona+=`               <tr >
                <td class="py-3">${i+1}</td>
                <td class="py-3">${linksarray[i].urlName}</td>
                <td class="py-3">
                    <a id="good"   onclick="visit(${i})"><button class="btn visit-bg text-white px-3">
                   <i class="fa-solid fa-eye me-1"></i>
                    Visit</button></a>
                </td>
                <td class="py-3">
            <button onclick="deleteitem(${i})"  class="btn btn-danger px-3">
            <i class="fa-solid fa-trash-can me-1"></i>
            Delete</button>
                </td>

            </tr>
  `
}

document.getElementById("demo").innerHTML=cartuona;

}



function visit(term){
window.open(linksarray[term].urlLink,"_blank")

// location.href=linksarray[term].urlLink;
}



function deleteitem(term){
linksarray.splice(term,1);
displayData()
localStorage.setItem("links",JSON.stringify(linksarray));
}




urlName.addEventListener("input",function(){
validation(this)
})
urlLink.addEventListener("input",function(){
    validation(this)
    })

  function validation(element){
    var regex={
        urlName:/[a-zA-z]{3,}/ ,
        urlLink:/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]{2,}(\/[a-zA-Z0-9#]+\/?)*(\/)?$/

    }


if(regex[element.id].test(element.value)){

    element.classList.remove("input_focus")
    element.classList.add("is-valid")
    element.classList.remove("is-invalid")
    return true;

}else{

    element.classList.remove("input_focus")
    element.classList.remove("is-valid")
    element.classList.add("is-invalid")
    return false;

}
    
  }  

  function empty(){
    if(urlName.value==""||urlLink.value==""){
        return false;
    }
    else{
        return true
    }
  }






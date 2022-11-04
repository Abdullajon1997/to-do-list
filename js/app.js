const elform=document.querySelector(".modal");
const elformbtn=document.querySelector(".out__btn");
const elclose=document.querySelector(".close");
const elwrapper=document.querySelector(".wrapper")



elformbtn.addEventListener("click",()=>{
    elform.style.display='flex'
})

elclose.addEventListener("click",()=>{
    elform.style.display=`none`
})

let BASE_URL=`http://localhost:7070`

//================== DATA=================//

const getAllData =async()=>{
    const response =await fetch(`http://localhost:7070/Products`);
    const data= await response.json();
    dataRander(data)
}
getAllData()


//====================RENDER====================//

function dataRander(data=[]){
    data.forEach((e)=>{
        console.log(e);
       let tr=
       `<tr>
       <td>${e.id}</td>
        <td>${e.isname}</td>
        <td>${e.data}</td>
        <td>${e.mark}</td>
        <td>${e.status}</td>
        <td><button class="btn btn-primary"data-edit="${e.id}" ><i class="bi bi-pencil-square"></i></button></td>
        <td><button class="btn btn-danger"data-del="${e.id}"><i class="bi bi-trash3-fill"></i></button></td>
       </tr>` 
    
        elwrapper.insertAdjacentHTML("afterbegin",tr)
    })

}
//=========== render end==============//


function postData(){
    const isName=$('#name').value.trim();
    const islastname=$('#lastname').value;
    const ismark=$('#mark').value;

    const params={
        isName:isName,
        islastname:lastname,
        ismark:mark,
    }
    console.log(patams);
}postData()
$('.modal__button').addEventListener(`click`,()=>{
    postData()
})
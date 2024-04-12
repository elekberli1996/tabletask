const btn_plus=document.querySelector(".plus");
const body_table= document.querySelector("tbody");
let allow=true;

btn_plus.addEventListener("click",()=>{
    if(!allow){
        alert(" asagidaki emeliyatlari yerine yetire bilersiniz ");
        return;
    }
    allow=false;
    
    const row=document.createElement("tr");
    const td_no=document.createElement("td");
    

    const td_name= document.createElement("td");
    const input_name=document.createElement("input");
    input_name.setAttribute("placeholder","adiniz");
    input_name.setAttribute("type","text");
    td_name.append(input_name);

    const td_surname=document.createElement("td");
    const input_surname=document.createElement("input");
    input_surname.setAttribute("placeholder","soyadiniz");
    input_surname.setAttribute("type","text");
    td_surname.append(input_surname);

    const td_age=document.createElement("td");
    const input_age=document.createElement("input");
    input_age.setAttribute("placeholder","yasiniz");
    input_age.setAttribute("type","number");
    td_age.append(input_age);


    const td_operations=document.createElement("td");
    const btn_add=document.createElement("button");
    btn_add.textContent="Yadda saxla";
    btn_add.classList.add("add");
    const btn_cancel=document.createElement("button");
    btn_cancel.textContent="Legv et";
    btn_cancel.classList.add("cancel");
    td_operations.append(btn_add,btn_cancel);

    row.append(td_no,td_name,td_surname,td_age,td_operations);
    body_table.prepend(row);

    btn_add.addEventListener("click",(e)=>{
        if(e.target.textContent==="Yadda saxla")
        {
          added(e);  
        }
       else{
        
       update(e);
       }
        
    });
    btn_cancel.addEventListener("click",cancel);

    orderRow();


});

const orderRow=()=>{
    const rows=[...document.querySelectorAll("tbody tr")]
   rows.map((row,key)=>{
    row.querySelector("td").textContent=key+1;
   })
}

const cancel=(e)=>{

    e.target.parentElement.parentElement.remove();
    allow=true;
    orderRow();

}

const added=(e)=>{
 
    let ok=true;
    const inputs = [...document.querySelectorAll("input")];
    inputs.map(input=>{
        if(!input.value){
            ok=false;
            
        }
    })
    if(ok){
    inputs.map(input=>{
        
        input.parentElement.textContent=input.value;
    })
    allow=true;
      e.target.textContent="Duzelis et";
   e.target.classList.remove("add");
   e.target.classList.add("update");
   e.target.nextElementSibling.textContent="Sil";
 
   }
    else{
 
        alert("butun xanalar dolmalidir...")
    }

    const element= e.target.parentElement.parentElement;
    e.target.parentElement.parentElement.remove();
    body_table.append(element);
    orderRow();
  
}
const update=(e)=>{
    
    if(!allow){
       alert("emeliyati yekunlasdirin");

       return;
    }
    allow=false;
    const row=e.target.parentElement.parentElement;
    let children=[...row.children];
    children.map((td,key)=>{
        
        if(key>0&&key<4)
        {
            console.log(td,key);
            const input= document.createElement("input");
            input.value=td.textContent;
            td.textContent="";
            td.append(input);
            console.log(input);
            

        }
    })
    console.log(children);
    e.target.textContent="Yadda saxla";
    e.target.classList.remove("update");
    e.target.classList.add("add");
  
}




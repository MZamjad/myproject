

// No need to declare 'box' again; just use it
boxes = document.querySelectorAll(".box");
TurnO = true;



boxes.forEach((box) => {

    box.addEventListener("click",()=>{

        if(TurnO){
          box.innerText ="O";
          TurnO = false
          box.classList.add("hide");
        }
        else{
          box.innerText = "X";
          TurnO= true;
          box.classList.add("hide1");
        }
        box.disabled = true;

    })
    
})



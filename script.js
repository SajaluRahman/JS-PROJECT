
//    const inptext = document.getElementById('inp');
//    const add = document.getElementById('btn');
//    const list = document.getElementById('lists');

//  function addItem() {
//        const text = inptext.value.trim();
//        if (text) {
//         // listss
//            const newli = document.createElement("li");
//            newli.textContent = text;
//            newli.style.width="200px"
//            newli.style.display="flex"
//            newli.style.justifyContent="space-between"

           
//                 //   deletebutton
//            const deleteButton = document.createElement("button");
//                deleteButton.style.background="transparent"
//                deleteButton.style.border="none";


//                 deleteButton.innerHTML = `<svg class="svgs" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>`
//                 deleteButton.classList.add("deleteBtn");
//                 newli.appendChild(deleteButton);

               

//                 deleteButton.addEventListener("click", function() {
//                     list.removeChild(newli);
//                 });
                     

//                 // edit button

//                 const editbutton=document.createElement('button');
//                 editbutton.textContent="editt";
//                 editbutton.classList.add("editBtn")
//                 newli.appendChild(editbutton)

//                 const textSpan = document.createElement("span");
//                 textSpan.textContent = text;
//                 newli.appendChild(textSpan);


//                 list.appendChild(newli);

//                 inptext.value = "";

                
//                 editbutton.addEventListener("click",function(){
//                   const inputfield=document.createElement("input");
//                   inputfield.valur=textSpan.textContent;
//                   inputfield.classList.add("editable");
                    
//                      newli.replaceChild(inputfield,textSpan);
//                      inputfield.focus();

//                      inputfield.addEventListener("keydown", function(event){
//                         if(event.key==="Enter"){
//                             textSpan.textContent=inputfield.value;
//                             newli.replaceChild(textSpan,inputfield);
//                         }
//                      })
                      
//                 });

//                   inputfield.addEventListener("blur",function(){
//                             textSpan.textContent=inputfield.value;
//                             newli.replaceChild(textSpan,inputfield)
//                         });
                    

   

           

//        }
       
//    };

//    add.addEventListener("click", addItem);

//    inptext.addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//         addItem();
//     }
// });



const inptext = document.getElementById('inp');
const add = document.getElementById('btn');
const list = document.getElementById('lists');

function addItem() {
    const text = inptext.value.trim();
    if (text) {
        // Create li
        const newLi = document.createElement("li");
       newLi.className="lis";
       newLi.style.paddingLeft="20px"
       newLi.style.marginLeft="20px"

       


        //text span
        const textSpan = document.createElement("span");
        textSpan.textContent = text;
        newLi.appendChild(textSpan);
       textSpan.className="tex";



        //edit button
        const editButton = document.createElement("button");
        editButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>`;
        // editButton.style.float="right"
        editButton.className="editBtn";
        editButton.style.marginRight="10px";
        newLi.appendChild(editButton);
        



        
        //delete button
        const deleteButton = document.createElement("button");
        deleteButton.style.background = "transparent";
        // deleteButton.style.border = "none";
        // deleteButton.style.float = "right";
        deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>`;
        deleteButton.className="deleteBtn";
        deleteButton.style.marginRight="10px"
        newLi.appendChild(deleteButton);

    
        deleteButton.addEventListener("click", function () {
            list.removeChild(newLi);
        });

        
        list.appendChild(newLi);

     
        inptext.value = "";

        
        editButton.addEventListener("click", function () {

            const inputField = document.createElement("input");
            inputField.value = textSpan.textContent;
            inputField.className="editable";


            newLi.replaceChild(inputField, textSpan);
            // inputField.focus();


            inputField.addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    textSpan.textContent = inputField.value;
                    newLi.replaceChild(textSpan, inputField);
                }
            });


            inputField.addEventListener("blur", function () {
                textSpan.textContent = inputField.value;
                newLi.replaceChild(textSpan, inputField);
            });
        });
    }
}


add.addEventListener("click", addItem);


inptext.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addItem();
    }
});
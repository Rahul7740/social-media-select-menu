let popup = document.querySelector(".popup")
let victor = document.querySelector(".victor")
let popup_divs = document.querySelectorAll(".popup-divs")



function func(){
    popup.classList.toggle("showPopup")
    victor.classList.toggle("victorRotate")
}
for(let o of popup_divs){
    o.addEventListener("click",()=>{
         let print = document.querySelector(".print")
         print.innerHTML = o.innerHTML 
         func()
    })
}
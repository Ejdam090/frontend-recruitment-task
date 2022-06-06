/// variabels
const btn = document.querySelector(".btn");
const popupText = document.querySelector(".popup-text");
const popupShadow = document.querySelector('.popup-shadow');
const popupContainer =document.querySelector('.popup-container');
const xmark = document.querySelector('#close');
const resetBTn = document.querySelector(".reset"); 
let count = localStorage.getItem("count") || 0;

/// function which show popup
const showPanel =()=>{
   if(!(popupShadow.style.display === "block")){
       popupShadow.style.display = "block";
       count ++;
   }
   else{
       popupShadow.style.display = "none";
   }
   if(count > 4){
       resetBTn.style.display = "block";
       resetBTn.addEventListener("click", ()=>{
        count = 0;
    })
   }
   localStorage.setItem("count",count);
   popupText.innerHTML = `You have clicked <strong>${count} times</strong> to related button`;
} 



//listener on click

btn.addEventListener("click", showPanel);
xmark.addEventListener("click",showPanel);
window.addEventListener("click", (e)=>{
    e.target === popupShadow ? showPanel() : false
});


const cartSidebar=document.getElementById("cart-sidebar")
const cartItems=document.getElementById("cart-items")
const cartToggle=document.getElementById("cart-toggle");
let cart=[];
  cartToggle.addEventListener("click",()=>{
    cartSidebar.classList.toggle("active");
  })


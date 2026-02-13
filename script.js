/* Cart */
let cartCount=0;
function addToCart(){ cartCount++; document.getElementById("cart-count").innerText=cartCount; alert("Added to cart!");}
function checkout(){ window.location.href="https://buy.stripe.com/test_123456789"; }

/* Lightbox */
function changeImage(src){ document.getElementById("main-image").src=src;}
document.getElementById("main-image")?.addEventListener("click", function(){
  document.getElementById("lightbox").style.display="flex";
  document.getElementById("lightbox-img").src=this.src;
});
function closeLightbox(){ document.getElementById("lightbox").style.display="none"; }

/* Countdown Timer */
const countdownDate = new Date(new Date().getTime() + 48*60*60*1000);
function updateTimer(){
  let now = new Date().getTime();
  let distance = countdownDate - now;
  let h=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
  let m=Math.floor((distance%(1000*60*60))/(1000*60));
  let s=Math.floor((distance%(1000*60))/1000);
  document.getElementById("timer") && (document.getElementById("timer").innerHTML=`${h}h ${m}m ${s}s`);
  if(distance<0){ document.getElementById("timer").innerHTML="Offer expired!"; }
}
setInterval(updateTimer,1000);

/* Auto Currency Detection */
let currency = navigator.language.includes("en-CA") ? "CAD" : "USD";
document.querySelectorAll(".price").forEach(p=>{ p.innerText=p.innerText.replace("$",currency==="CAD"?"C$":"$"); });


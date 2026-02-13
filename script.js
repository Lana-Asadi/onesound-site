let cartCount = 0;

function changeImage(src) {
  document.getElementById("main-image").src = src;
}

document.getElementById("main-image").addEventListener("click", function() {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = this.src;
});

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  alert("Added to cart!");
}

function checkout() {
  window.location.href = "https://buy.stripe.com/test_28E6oH2YIeNN3Sa3mO8g000";
}


let cartCount = 0;
const cartLink = document.querySelector('a[href="cart.html"]');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        updateCartLink();
    });
});

function updateCartLink() {
    cartLink.textContent = `Cart (${cartCount})`;
}
const shopNowBtn = document.getElementById("shopNowBtn");

       
        shopNowBtn.addEventListener("click", function() {
        
            window.location.href = "nextpage.html";  
        });

document.getElementById("nextPageBtn").addEventListener("click", function() {

    window.location.href = "nextpage.html"; 
});
function msg()
{
    alert ("Are you sign in or not ");
}

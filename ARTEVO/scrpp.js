
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
function openLoginForm() {
    document.getElementById('loginPopup').style.display = 'flex';
}

// Function to close login popup
function closeLoginForm() {
    document.getElementById('loginPopup').style.display = 'none';
}

// Function to handle login
function login() {
    var username = document.getElementById('username').value;
    if (username) {
        // Hide login link after successful login
        document.getElementById('loginLink').style.display = 'none';

        // Show the user's greeting
        document.getElementById('userGreeting').innerText = "Hello, " + username;

        // Show the user dropdown
        document.getElementById('userDropdown').style.display = 'inline-block';

        closeLoginForm(); // Close the login form after successful login
    } else {
        alert("Please enter a username!");
    }
}

// Function to log out
function logout() {
    // Reset the greeting
    document.getElementById('userGreeting').innerText = "Hello, User";

    // Hide the user dropdown
    document.getElementById('userDropdown').style.display = 'none';

    // Show the login link again
    document.getElementById('loginLink').style.display = 'inline-block';
}
window.onload = function() {
    document.getElementById("signupModal").style.display = "block";
};

// Function to close the modal
function closeModal() {
    document.getElementById("signupModal").style.display = "none";
}

// Optional: Close the modal when the user clicks anywhere outside the modal
window.onclick = function(event) {
    if (event.target == document.getElementById("signupModal")) {
        closeModal();
    }
};



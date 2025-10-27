// Cart state
let cart = [];

// Load cart from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedCart = localStorage.getItem('portfolioCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
});

// Toggle cart sidebar
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Add item to cart
function addToCart(item) {
    const itemNames = {
        'about': '🍕 About Me',
        'experience': '💼 Experience',
        'projects': '🚀 Projects',
        'skills': '⚡ Skills',
        'resume': '📄 Resume'
    };

    if (!cart.includes(item)) {
        cart.push(item);
        localStorage.setItem('portfolioCart', JSON.stringify(cart));
        updateCartUI();
        showNotification(`${itemNames[item]} added to cart!`);
    } else {
        showNotification(`${itemNames[item]} is already in your cart!`);
    }
}

// Remove item from cart
function removeFromCart(item) {
    cart = cart.filter(i => i !== item);
    localStorage.setItem('portfolioCart', JSON.stringify(cart));
    updateCartUI();
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const placeOrderBtn = document.getElementById('place-order-btn');

    cartCount.textContent = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty. Add some items from the menu!</p>';
        placeOrderBtn.disabled = true;
    } else {
        const itemNames = {
            'about': '🍕 About Me',
            'experience': '💼 Experience',
            'projects': '🚀 Projects',
            'skills': '⚡ Skills',
            'resume': '📄 Resume'
        };

        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <span class="cart-item-name">${itemNames[item]}</span>
                <button class="remove-item" onclick="removeFromCart('${item}')">✕</button>
            </div>
        `).join('');

        placeOrderBtn.disabled = false;
    }
}

// Place order - navigate to order page
function placeOrder() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    window.location.href = 'order.html';
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

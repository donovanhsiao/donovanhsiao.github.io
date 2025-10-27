// Cart state
let cart = [];

// Load cart from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedCart = localStorage.getItem('portfolioCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
    
    // Add scroll animations
    addScrollAnimations();
    
    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Scroll animations for menu items
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.menu-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(item);
    });
}

// Toggle cart sidebar
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    const isActive = sidebar.classList.contains('active');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevent body scroll when cart is open
    document.body.style.overflow = isActive ? 'auto' : 'hidden';
}

// Add item to cart with enhanced feedback
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
        showNotification(`${itemNames[item]} added to cart!`, 'success');
        animateCartIcon();
    } else {
        showNotification(`${itemNames[item]} is already in your cart!`, 'info');
    }
}

// Animate cart icon when item is added
function animateCartIcon() {
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.animation = 'none';
    setTimeout(() => {
        cartIcon.style.animation = 'shake 0.5s ease-in-out';
    }, 10);
}

// Remove item from cart
function removeFromCart(item) {
    cart = cart.filter(i => i !== item);
    localStorage.setItem('portfolioCart', JSON.stringify(cart));
    updateCartUI();
    showNotification('Item removed from cart', 'info');
}

// Update cart UI with smooth transitions
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const placeOrderBtn = document.getElementById('place-order-btn');

    // Animate count change
    cartCount.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartCount.textContent = cart.length;
        cartCount.style.transform = 'scale(1)';
    }, 150);

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

        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item" style="animation-delay: ${index * 0.05}s">
                <span class="cart-item-name">${itemNames[item]}</span>
                <button class="remove-item" onclick="removeFromCart('${item}')" aria-label="Remove ${itemNames[item]}">✕</button>
            </div>
        `).join('');

        placeOrderBtn.disabled = false;
    }
}

// Place order - navigate to order page with transition
function placeOrder() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    // Add loading state
    const btn = document.getElementById('place-order-btn');
    btn.textContent = 'Processing...';
    btn.style.opacity = '0.7';
    
    setTimeout(() => {
        window.location.href = 'order.html';
    }, 500);
}

// Enhanced notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    // Add icon based on type
    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️'
    };
    
    notification.innerHTML = `${icons[type] || icons.success} ${message}`;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Close cart when clicking outside
document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('cart-sidebar');
    const cartIcon = document.querySelector('.cart-icon');
    
    if (sidebar && cartIcon && 
        !sidebar.contains(e.target) && 
        !cartIcon.contains(e.target) && 
        sidebar.classList.contains('active')) {
        toggleCart();
    }
});

// Keyboard accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const sidebar = document.getElementById('cart-sidebar');
        if (sidebar && sidebar.classList.contains('active')) {
            toggleCart();
        }
    }
});

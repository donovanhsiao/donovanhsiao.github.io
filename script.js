// Popup Ad System
let clickCount = 0;
let targetSection = null;

// Random popup ad content
const popupAds = [
    {
        title: "🎰 WIN BIG NOW!",
        content: `
            <div class="ad-content">
                <h3>CONGRATULATIONS! You're our 1,000,000th visitor!</h3>
                <p>Click below to claim your prize of $1,000,000!</p>
                <div style="font-size: 4rem; margin: 2rem 0;">💰💎🎁</div>
                <button class="ad-cta">CLAIM NOW!</button>
                <p style="font-size: 0.8rem; margin-top: 1rem; color: #999;">
                    *Just kidding, this is a fake ad. Close to continue!
                </p>
            </div>
        `
    },
    {
        title: "🔥 HOT SINGLES IN YOUR AREA",
        content: `
            <div class="ad-content">
                <h3>Hot Developers Near You!</h3>
                <p>127 senior engineers are waiting to pair program with you!</p>
                <div style="font-size: 4rem; margin: 2rem 0;">👨‍💻💕👩‍💻</div>
                <button class="ad-cta">MEET THEM NOW</button>
                <p style="font-size: 0.8rem; margin-top: 1rem; color: #999;">
                    *This is satire. Close to view actual content.
                </p>
            </div>
        `
    },
    {
        title: "⚡ UNLIMITED POWER",
        content: `
            <div class="ad-content">
                <h3>Download More RAM!</h3>
                <p>Your computer is running slow! Download 32GB of RAM for FREE!</p>
                <div style="font-size: 4rem; margin: 2rem 0;">💾⚡🚀</div>
                <button class="ad-cta">DOWNLOAD RAM</button>
                <p style="font-size: 0.8rem; margin-top: 1rem; color: #999;">
                    *Obviously fake. Close this popup ad!
                </p>
            </div>
        `
    },
    {
        title: "🎮 PLAY NOW",
        content: `
            <div class="ad-content">
                <h3>THIS GAME WILL MAKE YOU CRY!</h3>
                <p>97% of players can't reach level 2!</p>
                <div style="font-size: 4rem; margin: 2rem 0;">🎮😭🏆</div>
                <button class="ad-cta">PLAY FREE NOW</button>
                <p style="font-size: 0.8rem; margin-top: 1rem; color: #999;">
                    *Fake mobile game ad. Close to continue browsing!
                </p>
            </div>
        `
    },
    {
        title: "💊 DOCTORS HATE HIM",
        content: `
            <div class="ad-content">
                <h3>Learn to Code in 5 Minutes!</h3>
                <p>This one weird trick will make you a senior developer instantly!</p>
                <div style="font-size: 4rem; margin: 2rem 0;">📚🧠💡</div>
                <button class="ad-cta">LEARN THE SECRET</button>
                <p style="font-size: 0.8rem; margin-top: 1rem; color: #999;">
                    *Spoiler: Practice and time. Close this ad!
                </p>
            </div>
        `
    },
    {
        title: "🛡️ VIRUS ALERT",
        content: `
            <div class="ad-content">
                <h3 style="color: #ff2e63;">⚠️ WARNING: VIRUS DETECTED!</h3>
                <p>Your computer has 47 viruses! Click to remove them now!</p>
                <div style="font-size: 4rem; margin: 2rem 0;">🦠🚨💻</div>
                <button class="ad-cta">REMOVE VIRUSES</button>
                <p style="font-size: 0.8rem; margin-top: 1rem; color: #999;">
                    *Classic fake antivirus ad. You're safe, just close this!
                </p>
            </div>
        `
    }
];

// Get random ad content
function getRandomAd() {
    const randomIndex = Math.floor(Math.random() * popupAds.length);
    return popupAds[randomIndex];
}

// Show popup ad
function showPopup(section) {
    targetSection = section;
    const popup = document.getElementById('popup-overlay');
    const popupContent = document.getElementById('popup-content');
    
    const ad = getRandomAd();
    
    popupContent.innerHTML = ad.content;
    
    popup.classList.add('active');
    
    // Prevent body scroll when popup is open
    document.body.style.overflow = 'hidden';
}

// Close popup
function closePopup() {
    const popup = document.getElementById('popup-overlay');
    popup.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    clickCount++;
    targetSection = null;
}

// Show hero section
function showHero() {
    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show hero
    document.getElementById('hero').style.display = 'flex';
    
    // Reset ad counter when returning to homepage
    clickCount = 0;
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show specific section
function showSection(sectionName) {
    // Hide hero
    document.getElementById('hero').style.display = 'none';
    
    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetElement = document.getElementById(`${sectionName}-section`);
    if (targetElement) {
        targetElement.classList.add('active');
        // Scroll to top of section
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Handle navigation clicks
function handleNavClick(e) {
    e.preventDefault();
    const section = e.currentTarget.dataset.section;
    
    // If user has already closed 2 ads, go directly to the section
    if (clickCount >= 2) {
        showSection(section);
    } else {
        // Show popup ad
        showPopup(section);
    }
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers to all navigation links and featured buttons
    const navLinks = document.querySelectorAll('.nav-link, .featured-btn');
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Close popup button
    document.getElementById('close-popup').addEventListener('click', closePopup);
    
    // Close popup when clicking outside
    document.getElementById('popup-overlay').addEventListener('click', (e) => {
        if (e.target.id === 'popup-overlay') {
            closePopup();
        }
    });
    
    // Prevent clicks on popup content from closing the popup
    document.querySelector('.popup-ad').addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    // Handle fake ad CTA buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('ad-cta')) {
            e.preventDefault();
            alert('Nice try! Close the popup to continue 😄');
        }
    });
    
    // Download resume button
    document.getElementById('download-resume-btn').addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'files/Donovan_Hsiao_resume.pdf';
        link.download = 'Donovan_Hsiao_resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

// Add some Easter eggs
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        alert('🎮 Konami Code activated! You found the Easter egg! 🎉');
        document.body.style.animation = 'spin 2s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
    }
});

// Add spin animation for Easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

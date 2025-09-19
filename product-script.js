// Enhanced product data with multiple images and detailed information
const enhancedProducts = {
    1: {
        id: 1,
        title: "Wireless Bluetooth Headphones",
        category: "electronics",
        price: 89.99,
        originalPrice: 129.99,
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
        detailedDescription: "Experience premium audio quality with these state-of-the-art wireless Bluetooth headphones. Featuring advanced noise cancellation technology, these headphones provide crystal-clear sound in any environment. The ergonomic design ensures comfort during extended listening sessions, while the 30-hour battery life keeps you connected all day long. Perfect for music lovers, professionals, and anyone who demands the best in audio technology.",
        keyFeatures: [
            "Active Noise Cancellation (ANC)",
            "30-hour battery life with quick charge",
            "Premium sound quality with deep bass",
            "Comfortable over-ear design",
            "Bluetooth 5.0 connectivity",
            "Built-in microphone for calls",
            "Foldable design for easy storage"
        ],
        specifications: {
            "Battery Life": "30 hours",
            "Charging Time": "2 hours",
            "Connectivity": "Bluetooth 5.0",
            "Frequency Response": "20Hz - 20kHz",
            "Impedance": "32 ohms",
            "Weight": "250g",
            "Warranty": "2 years"
        },
        reviews: [
            {
                name: "Sarah Johnson",
                rating: 5,
                date: "2024-01-15",
                text: "Amazing sound quality! The noise cancellation works perfectly on my daily commute. Battery life is incredible - I only charge once a week."
            },
            {
                name: "Mike Chen",
                rating: 5,
                date: "2024-01-10",
                text: "Best headphones I've ever owned. The comfort is outstanding, and the sound is crystal clear. Worth every penny!"
            },
            {
                name: "Emily Davis",
                rating: 4,
                date: "2024-01-08",
                text: "Great headphones overall. The noise cancellation is impressive, though I wish the ear cups were slightly larger for my ears."
            }
        ]
    },
    2: {
        id: 2,
        title: "Smartphone 128GB",
        category: "electronics",
        price: 699.99,
        originalPrice: 899.99,
        images: [
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Latest smartphone with advanced camera system and all-day battery.",
        detailedDescription: "Discover the future of mobile technology with our flagship smartphone. Boasting a revolutionary camera system with 108MP main sensor, this device captures stunning photos and videos in any lighting condition. The all-day battery life ensures you stay connected from dawn to dusk, while the lightning-fast processor handles everything from gaming to professional work with ease.",
        keyFeatures: [
            "108MP Triple Camera System",
            "All-day battery life (4000mAh)",
            "6.7-inch Super AMOLED Display",
            "5G connectivity",
            "128GB internal storage",
            "Water and dust resistant (IP68)",
            "Wireless charging support"
        ],
        specifications: {
            "Display": "6.7-inch Super AMOLED",
            "Processor": "Snapdragon 8 Gen 2",
            "RAM": "8GB",
            "Storage": "128GB",
            "Camera": "108MP + 12MP + 5MP",
            "Battery": "4000mAh",
            "OS": "Android 14"
        },
        reviews: [
            {
                name: "Alex Rodriguez",
                rating: 5,
                date: "2024-01-20",
                text: "Incredible camera quality! The photos are so sharp and detailed. The battery easily lasts all day with heavy usage."
            },
            {
                name: "Lisa Wang",
                rating: 5,
                date: "2024-01-18",
                text: "Love the large display and fast performance. The 5G speeds are amazing. Highly recommend this phone!"
            }
        ]
    },
    4: {
        id: 4,
        title: "Cotton T-Shirt",
        category: "clothing",
        price: 24.99,
        originalPrice: 34.99,
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Comfortable 100% cotton t-shirt in various colors and sizes.",
        detailedDescription: "Made from premium 100% organic cotton, this t-shirt offers unmatched comfort and durability. The soft, breathable fabric feels great against your skin, while the classic fit flatters every body type. Available in multiple colors and sizes, it's perfect for casual wear, workouts, or layering.",
        keyFeatures: [
            "100% organic cotton",
            "Pre-shrunk fabric",
            "Reinforced seams",
            "Tagless design",
            "Machine washable",
            "Available in 6 colors",
            "Sizes XS to XXL"
        ],
        specifications: {
            "Material": "100% Organic Cotton",
            "Weight": "180 GSM",
            "Fit": "Regular",
            "Care": "Machine wash cold",
            "Origin": "Made in USA",
            "Colors": "6 available",
            "Sizes": "XS-XXL"
        },
        reviews: [
            {
                name: "Jessica Brown",
                rating: 5,
                date: "2024-01-12",
                text: "So soft and comfortable! The quality is excellent and it washes well. I bought one in every color."
            },
            {
                name: "David Lee",
                rating: 4,
                date: "2024-01-05",
                text: "Great basic tee. Fits perfectly and the fabric is really soft. Good value for money."
            }
        ]
    }
};

// Get product ID from URL parameters
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id')) || 1;
}

// Load product details
function loadProductDetails() {
    const productId = getProductIdFromUrl();
    const product = enhancedProducts[productId];
    
    if (!product) {
        console.error('Product not found');
        return;
    }
    
    // Update page title
    document.title = `${product.title} - ShopEverything`;
    
    // Update breadcrumb
    document.getElementById('breadcrumb-category').textContent = product.category;
    document.getElementById('breadcrumb-product').textContent = product.title;
    
    // Update product info
    document.getElementById('product-category').textContent = product.category;
    document.getElementById('product-title').textContent = product.title;
    document.getElementById('current-price').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('original-price').textContent = `$${product.originalPrice.toFixed(2)}`;
    document.getElementById('discount-badge').textContent = `Save ${Math.round((1 - product.price / product.originalPrice) * 100)}%`;
    document.getElementById('product-description').textContent = product.description;
    
    // Load main image
    const mainImage = document.getElementById('main-image');
    mainImage.src = product.images[0];
    mainImage.alt = product.title;
    
    // Load thumbnails
    const thumbnailGallery = document.getElementById('thumbnail-gallery');
    thumbnailGallery.innerHTML = product.images.map((image, index) => `
        <img src="${image}" alt="${product.title} ${index + 1}" 
             class="thumbnail ${index === 0 ? 'active' : ''}" 
             onclick="changeMainImage('${image}', this)">
    `).join('');
    
    // Load key features
    const keyFeaturesList = document.getElementById('key-features-list');
    keyFeaturesList.innerHTML = product.keyFeatures.map(feature => `<li>${feature}</li>`).join('');
    
    // Load specifications
    const specifications = document.getElementById('specifications');
    specifications.innerHTML = Object.entries(product.specifications).map(([key, value]) => `
        <div class="spec-item">
            <span class="spec-label">${key}:</span>
            <span class="spec-value">${value}</span>
        </div>
    `).join('');
    
    // Load detailed description
    document.getElementById('detailed-description').innerHTML = `<p>${product.detailedDescription}</p>`;
    
    // Load detailed specifications
    document.getElementById('detailed-specifications').innerHTML = Object.entries(product.specifications).map(([key, value]) => `
        <div class="spec-item">
            <span class="spec-label">${key}:</span>
            <span class="spec-value">${value}</span>
        </div>
    `).join('');
    
    // Load reviews
    loadReviews(product.reviews);
    
    // Load related products
    loadRelatedProducts(product.category, product.id);
}

// Change main image
function changeMainImage(imageSrc, thumbnail) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = imageSrc;
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}

// Load reviews
function loadReviews(reviews) {
    const reviewsList = document.getElementById('reviews-list');
    reviewsList.innerHTML = reviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <span class="reviewer-name">${review.name}</span>
                <span class="review-date">${new Date(review.date).toLocaleDateString()}</span>
            </div>
            <div class="review-rating">
                ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
            </div>
            <div class="review-text">${review.text}</div>
        </div>
    `).join('');
}

// Load related products
function loadRelatedProducts(category, currentId) {
    const relatedProducts = Object.values(enhancedProducts)
        .filter(product => product.category === category && product.id !== currentId)
        .slice(0, 4);
    
    const relatedGrid = document.getElementById('related-products');
    relatedGrid.innerHTML = relatedProducts.map(product => `
        <div class="product-card">
            <img src="${product.images[0]}" alt="${product.title}" class="product-image" loading="lazy">
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="goToProduct(${product.id})">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Go to product page
function goToProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// Change quantity
function changeQuantity(delta) {
    const quantityInput = document.getElementById('quantity');
    const currentValue = parseInt(quantityInput.value);
    const newValue = Math.max(1, Math.min(10, currentValue + delta));
    quantityInput.value = newValue;
}

// Add to cart from detail page
function addToCartFromDetail() {
    const productId = getProductIdFromUrl();
    const product = enhancedProducts[productId];
    const quantity = parseInt(document.getElementById('quantity').value);
    
    if (product) {
        // Add to cart (using the same cart functionality from main script)
        for (let i = 0; i < quantity; i++) {
            addToCart(productId);
        }
        showNotification(`${product.title} (${quantity}x) added to cart!`);
    }
}

// Add to wishlist
function addToWishlist() {
    const productId = getProductIdFromUrl();
    const product = enhancedProducts[productId];
    
    if (product) {
        showNotification(`${product.title} added to wishlist!`);
    }
}

// Tab functionality
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            button.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });
}

// Image zoom functionality
function setupImageZoom() {
    const mainImageContainer = document.querySelector('.main-image-container');
    const zoomModal = document.getElementById('image-zoom-modal');
    const zoomedImage = document.getElementById('zoomed-image');
    const zoomClose = document.querySelector('.zoom-close');
    
    mainImageContainer.addEventListener('click', () => {
        const mainImage = document.getElementById('main-image');
        zoomedImage.src = mainImage.src;
        zoomModal.style.display = 'flex';
    });
    
    zoomClose.addEventListener('click', () => {
        zoomModal.style.display = 'none';
    });
    
    zoomModal.addEventListener('click', (e) => {
        if (e.target === zoomModal) {
            zoomModal.style.display = 'none';
        }
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadProductDetails();
    setupTabs();
    setupImageZoom();
    
    // Load cart count
    updateCartCount();
});

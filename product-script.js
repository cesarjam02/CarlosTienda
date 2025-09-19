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
    3: {
        id: 3,
        title: "Laptop Pro 15-inch",
        category: "electronics",
        price: 1299.99,
        originalPrice: 1599.99,
        images: [
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Powerful laptop perfect for work and creative projects.",
        detailedDescription: "Unleash your creativity and productivity with this professional-grade laptop. Featuring a stunning 15-inch Retina display, powerful M2 processor, and all-day battery life, this laptop is perfect for designers, developers, and business professionals. The sleek aluminum design and backlit keyboard make it a joy to use in any environment.",
        keyFeatures: [
            "15-inch Retina Display",
            "M2 Chip with 8-core CPU",
            "16GB unified memory",
            "512GB SSD storage",
            "Up to 18 hours battery life",
            "Backlit Magic Keyboard",
            "Touch ID for secure authentication"
        ],
        specifications: {
            "Display": "15-inch Retina (2880x1800)",
            "Processor": "Apple M2",
            "Memory": "16GB unified memory",
            "Storage": "512GB SSD",
            "Graphics": "10-core GPU",
            "Battery": "Up to 18 hours",
            "Weight": "3.5 lbs"
        },
        reviews: [
            {
                name: "David Kim",
                rating: 5,
                date: "2024-01-22",
                text: "Incredible performance! The M2 chip is blazing fast and the battery life is amazing. Perfect for my design work."
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
    },
    5: {
        id: 5,
        title: "Denim Jeans",
        category: "clothing",
        price: 59.99,
        originalPrice: 79.99,
        images: [
            "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Classic blue denim jeans with perfect fit and comfort.",
        detailedDescription: "Crafted from premium denim, these jeans offer the perfect combination of style and comfort. The classic straight fit flatters every body type, while the durable construction ensures they'll last for years. Available in multiple washes and sizes.",
        keyFeatures: [
            "Premium denim construction",
            "Classic straight fit",
            "Reinforced stress points",
            "Multiple wash options",
            "Sizes 28-40",
            "Machine washable",
            "Made to last"
        ],
        specifications: {
            "Material": "98% Cotton, 2% Elastane",
            "Fit": "Straight",
            "Rise": "Mid-rise",
            "Care": "Machine wash cold",
            "Origin": "Made in USA",
            "Washes": "3 available",
            "Sizes": "28-40"
        },
        reviews: [
            {
                name: "Michael Torres",
                rating: 5,
                date: "2024-01-14",
                text: "Perfect fit and great quality! These jeans are comfortable and look great. Highly recommend!"
            }
        ]
    },
    6: {
        id: 6,
        title: "Winter Jacket",
        category: "clothing",
        price: 129.99,
        originalPrice: 179.99,
        images: [
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Warm and stylish winter jacket for cold weather.",
        detailedDescription: "Stay warm and stylish during the coldest months with this premium winter jacket. Featuring advanced insulation technology and a water-resistant shell, this jacket provides superior protection against the elements while maintaining a sleek, modern design.",
        keyFeatures: [
            "Advanced insulation technology",
            "Water-resistant shell",
            "Adjustable hood",
            "Multiple pockets",
            "Available in 4 colors",
            "Sizes S-XXL",
            "Machine washable"
        ],
        specifications: {
            "Material": "Polyester shell, synthetic insulation",
            "Water Resistance": "10,000mm",
            "Breathability": "5,000g/m²/24h",
            "Care": "Machine wash cold",
            "Origin": "Made in Canada",
            "Colors": "4 available",
            "Sizes": "S-XXL"
        },
        reviews: [
            {
                name: "Sarah Wilson",
                rating: 5,
                date: "2024-01-16",
                text: "Incredibly warm and stylish! Perfect for cold weather. The quality is outstanding."
            }
        ]
    },
    7: {
        id: 7,
        title: "Coffee Maker",
        category: "home",
        price: 79.99,
        originalPrice: 99.99,
        images: [
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Programmable coffee maker for the perfect morning brew.",
        detailedDescription: "Start your day right with this programmable coffee maker that delivers consistently perfect coffee every time. Featuring a 12-cup capacity, programmable timer, and auto-shutoff, this coffee maker is designed for convenience and quality.",
        keyFeatures: [
            "12-cup capacity",
            "Programmable timer",
            "Auto-shutoff",
            "Permanent filter",
            "Glass carafe",
            "Easy to clean",
            "2-year warranty"
        ],
        specifications: {
            "Capacity": "12 cups",
            "Power": "900W",
            "Material": "Stainless steel and plastic",
            "Filter": "Permanent gold-tone",
            "Timer": "24-hour programmable",
            "Warranty": "2 years",
            "Dimensions": "10.5 x 8 x 11 inches"
        },
        reviews: [
            {
                name: "Robert Garcia",
                rating: 5,
                date: "2024-01-18",
                text: "Great coffee maker! The programmable timer is perfect for my morning routine. Coffee tastes great every time."
            }
        ]
    },
    8: {
        id: 8,
        title: "Indoor Plant Set",
        category: "home",
        price: 39.99,
        originalPrice: 49.99,
        images: [
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Beautiful set of 3 indoor plants to brighten your space.",
        detailedDescription: "Transform your living space with this curated collection of 3 easy-care indoor plants. Each plant is carefully selected for its beauty and low-maintenance requirements, making them perfect for both beginners and experienced plant enthusiasts.",
        keyFeatures: [
            "3 easy-care plants",
            "Decorative planters included",
            "Care instructions provided",
            "Air-purifying properties",
            "Perfect for beginners",
            "Various sizes",
            "30-day guarantee"
        ],
        specifications: {
            "Plants": "3 different varieties",
            "Planters": "Included",
            "Care Level": "Easy",
            "Light": "Bright indirect",
            "Watering": "Weekly",
            "Guarantee": "30 days",
            "Height": "6-12 inches"
        },
        reviews: [
            {
                name: "Emma Thompson",
                rating: 5,
                date: "2024-01-19",
                text: "Beautiful plants! They arrived in perfect condition and are thriving in my home. Great addition to my space."
            }
        ]
    },
    9: {
        id: 9,
        title: "Kitchen Knife Set",
        category: "home",
        price: 89.99,
        originalPrice: 119.99,
        images: [
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Professional-grade knife set for all your cooking needs.",
        detailedDescription: "Elevate your culinary skills with this professional-grade knife set. Each knife is crafted from high-carbon stainless steel and features ergonomic handles for comfort and precision. Perfect for both home cooks and professional chefs.",
        keyFeatures: [
            "High-carbon stainless steel",
            "Ergonomic handles",
            "Professional sharpness",
            "Dishwasher safe",
            "Lifetime warranty",
            "Storage block included",
            "6-piece set"
        ],
        specifications: {
            "Material": "High-carbon stainless steel",
            "Handles": "Ergonomic design",
            "Set": "6 pieces",
            "Care": "Dishwasher safe",
            "Warranty": "Lifetime",
            "Storage": "Wooden block included",
            "Origin": "Made in Germany"
        },
        reviews: [
            {
                name: "Chef Maria",
                rating: 5,
                date: "2024-01-21",
                text: "Excellent knife set! Sharp, well-balanced, and comfortable to use. The quality is outstanding."
            }
        ]
    },
    10: {
        id: 10,
        title: "Yoga Mat",
        category: "sports",
        price: 34.99,
        originalPrice: 49.99,
        images: [
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Non-slip yoga mat for comfortable practice sessions.",
        detailedDescription: "Enhance your yoga practice with this premium non-slip yoga mat. Made from eco-friendly materials, this mat provides excellent grip and cushioning for all types of yoga poses and exercises.",
        keyFeatures: [
            "Non-slip surface",
            "Eco-friendly materials",
            "Extra thick for comfort",
            "Lightweight and portable",
            "Easy to clean",
            "Available in 4 colors",
            "1-year warranty"
        ],
        specifications: {
            "Material": "Eco-friendly TPE",
            "Thickness": "6mm",
            "Length": "72 inches",
            "Width": "24 inches",
            "Weight": "2.5 lbs",
            "Care": "Hand wash",
            "Warranty": "1 year"
        },
        reviews: [
            {
                name: "Yoga Instructor Lisa",
                rating: 5,
                date: "2024-01-17",
                text: "Perfect yoga mat! Great grip and cushioning. My students love it too."
            }
        ]
    },
    11: {
        id: 11,
        title: "Running Shoes",
        category: "sports",
        price: 119.99,
        originalPrice: 149.99,
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Lightweight running shoes with excellent cushioning and support.",
        detailedDescription: "Take your running to the next level with these lightweight, high-performance running shoes. Featuring advanced cushioning technology and breathable materials, these shoes provide the perfect balance of comfort and performance.",
        keyFeatures: [
            "Lightweight design",
            "Advanced cushioning",
            "Breathable upper",
            "Durable outsole",
            "Available in 5 colors",
            "Sizes 7-12",
            "30-day trial"
        ],
        specifications: {
            "Weight": "8.5 oz",
            "Drop": "8mm",
            "Upper": "Mesh and synthetic",
            "Midsole": "EVA foam",
            "Outsole": "Rubber",
            "Sizes": "7-12",
            "Colors": "5 available"
        },
        reviews: [
            {
                name: "Marathon Runner Tom",
                rating: 5,
                date: "2024-01-13",
                text: "Best running shoes I've ever owned! Light, comfortable, and great for long distances."
            }
        ]
    },
    12: {
        id: 12,
        title: "Dumbbell Set",
        category: "sports",
        price: 89.99,
        originalPrice: 119.99,
        images: [
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Adjustable dumbbell set for home workouts.",
        detailedDescription: "Build strength and muscle with this versatile adjustable dumbbell set. Perfect for home gyms, this set allows you to adjust the weight from 5 to 50 pounds per dumbbell, giving you endless workout possibilities in a compact design.",
        keyFeatures: [
            "Adjustable weight (5-50 lbs)",
            "Compact design",
            "Easy weight adjustment",
            "Durable construction",
            "Includes storage rack",
            "Workout guide included",
            "2-year warranty"
        ],
        specifications: {
            "Weight Range": "5-50 lbs per dumbbell",
            "Material": "Cast iron plates",
            "Grip": "Ergonomic design",
            "Adjustment": "Quick-dial system",
            "Storage": "Rack included",
            "Warranty": "2 years",
            "Weight": "45 lbs total"
        },
        reviews: [
            {
                name: "Fitness Enthusiast John",
                rating: 5,
                date: "2024-01-11",
                text: "Amazing dumbbell set! Saves so much space and the weight adjustment is super easy. Perfect for home workouts."
            }
        ]
    },
    13: {
        id: 13,
        title: "Programming Book",
        category: "books",
        price: 49.99,
        originalPrice: 69.99,
        images: [
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Comprehensive guide to modern programming techniques.",
        detailedDescription: "Master modern programming with this comprehensive guide that covers everything from basic concepts to advanced techniques. Written by industry experts, this book provides practical examples and real-world applications that will help you become a better programmer.",
        keyFeatures: [
            "Comprehensive coverage",
            "Practical examples",
            "Real-world applications",
            "Expert authors",
            "Updated content",
            "Online resources",
            "500+ pages"
        ],
        specifications: {
            "Pages": "512",
            "Format": "Paperback",
            "Language": "English",
            "Publisher": "Tech Press",
            "Edition": "3rd",
            "ISBN": "978-1234567890",
            "Year": "2024"
        },
        reviews: [
            {
                name: "Software Developer Alex",
                rating: 5,
                date: "2024-01-09",
                text: "Excellent book! Clear explanations and great examples. Helped me improve my programming skills significantly."
            }
        ]
    },
    14: {
        id: 14,
        title: "Cookbook Collection",
        category: "books",
        price: 29.99,
        originalPrice: 39.99,
        images: [
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Delicious recipes from around the world.",
        detailedDescription: "Explore the world through food with this amazing collection of recipes from different cultures. From Italian pasta to Asian stir-fries, this cookbook offers something for every taste and skill level.",
        keyFeatures: [
            "International recipes",
            "Beautiful photography",
            "Step-by-step instructions",
            "Dietary information",
            "Cooking tips",
            "200+ recipes",
            "Hardcover edition"
        ],
        specifications: {
            "Pages": "320",
            "Format": "Hardcover",
            "Language": "English",
            "Publisher": "Culinary Press",
            "Edition": "1st",
            "ISBN": "978-0987654321",
            "Year": "2024"
        },
        reviews: [
            {
                name: "Home Chef Sarah",
                rating: 5,
                date: "2024-01-07",
                text: "Love this cookbook! The recipes are easy to follow and the photos are beautiful. Great variety of dishes."
            }
        ]
    },
    15: {
        id: 15,
        title: "Fiction Novel",
        category: "books",
        price: 19.99,
        originalPrice: 29.99,
        images: [
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Bestselling fiction novel that will keep you engaged.",
        detailedDescription: "Immerse yourself in this captivating fiction novel that has captured the hearts of readers worldwide. With compelling characters and an engaging plot, this book is perfect for anyone who loves a good story.",
        keyFeatures: [
            "Bestselling author",
            "Compelling storyline",
            "Well-developed characters",
            "Page-turner",
            "Award-winning",
            "Book club favorite",
            "400+ pages"
        ],
        specifications: {
            "Pages": "432",
            "Format": "Paperback",
            "Language": "English",
            "Publisher": "Fiction House",
            "Edition": "1st",
            "ISBN": "978-1122334455",
            "Year": "2024"
        },
        reviews: [
            {
                name: "Book Lover Emma",
                rating: 5,
                date: "2024-01-06",
                text: "Absolutely loved this book! Couldn't put it down. The story is engaging and the characters are so well-written."
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
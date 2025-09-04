// Application State
class FoodMartApp {
    constructor() {
        this.products = [
            {
                "id": 1,
                "name": "Fresh Bananas",
                "price": 32,
                "subscriptionPrice": 30,
                "category": "Fruits",
                "emoji": "🍌",
                "unit": "per kg",
                "availability": ["FreshMart Express", "QuickGrocery", "Daily Needs", "Fresh & Fast"]
            },
            {
                "id": 2,
                "name": "Red Apples",
                "price": 180,
                "subscriptionPrice": 170,
                "category": "Fruits",
                "emoji": "🍎",
                "unit": "per kg",
                "availability": ["FreshMart Express", "SuperBazaar", "City Market", "Fresh & Fast"]
            },
            {
                "id": 3,
                "name": "Fresh Oranges",
                "price": 90,
                "subscriptionPrice": 85,
                "category": "Fruits",
                "emoji": "🍊",
                "unit": "per kg",
                "availability": ["QuickGrocery", "Daily Needs", "City Market", "Fresh & Fast"]
            },
            {
                "id": 4,
                "name": "Green Grapes",
                "price": 120,
                "subscriptionPrice": 110,
                "category": "Fruits",
                "emoji": "🍇",
                "unit": "per kg",
                "availability": ["FreshMart Express", "SuperBazaar", "Fresh & Fast"]
            },
            {
                "id": 5,
                "name": "Fresh Tomatoes",
                "price": 46,
                "subscriptionPrice": 42,
                "category": "Vegetables",
                "emoji": "🍅",
                "unit": "per kg",
                "availability": ["FreshMart Express", "QuickGrocery", "Daily Needs", "SuperBazaar", "City Market"]
            },
            {
                "id": 6,
                "name": "White Onions",
                "price": 40,
                "subscriptionPrice": 38,
                "category": "Vegetables",
                "emoji": "🧅",
                "unit": "per kg",
                "availability": ["QuickGrocery", "Daily Needs", "SuperBazaar", "City Market", "Fresh & Fast"]
            },
            {
                "id": 7,
                "name": "Fresh Potatoes",
                "price": 35,
                "subscriptionPrice": 33,
                "category": "Vegetables",
                "emoji": "🥔",
                "unit": "per kg",
                "availability": ["FreshMart Express", "QuickGrocery", "Daily Needs", "City Market"]
            },
            {
                "id": 8,
                "name": "Green Lettuce",
                "price": 45,
                "subscriptionPrice": 42,
                "category": "Vegetables",
                "emoji": "🥬",
                "unit": "per head",
                "availability": ["FreshMart Express", "SuperBazaar", "Fresh & Fast"]
            },
            {
                "id": 9,
                "name": "Fresh Carrots",
                "price": 60,
                "subscriptionPrice": 55,
                "category": "Vegetables",
                "emoji": "🥕",
                "unit": "per kg",
                "availability": ["QuickGrocery", "Daily Needs", "SuperBazaar", "City Market"]
            },
            {
                "id": 10,
                "name": "Whole Milk",
                "price": 60,
                "subscriptionPrice": 57,
                "category": "Dairy",
                "emoji": "🥛",
                "unit": "per liter",
                "availability": ["FreshMart Express", "QuickGrocery", "Daily Needs", "SuperBazaar", "Fresh & Fast"]
            },
            {
                "id": 11,
                "name": "Fresh Eggs",
                "price": 83,
                "subscriptionPrice": 78,
                "category": "Dairy",
                "emoji": "🥚",
                "unit": "per dozen",
                "availability": ["FreshMart Express", "Daily Needs", "SuperBazaar", "City Market"]
            },
            {
                "id": 12,
                "name": "Cheddar Cheese",
                "price": 450,
                "subscriptionPrice": 425,
                "category": "Dairy",
                "emoji": "🧀",
                "unit": "per 500g",
                "availability": ["FreshMart Express", "SuperBazaar", "Fresh & Fast"]
            },
            {
                "id": 13,
                "name": "Greek Yogurt",
                "price": 180,
                "subscriptionPrice": 170,
                "category": "Dairy",
                "emoji": "🥛",
                "unit": "per 500g",
                "availability": ["FreshMart Express", "QuickGrocery", "SuperBazaar", "Fresh & Fast"]
            },
            {
                "id": 14,
                "name": "White Bread",
                "price": 44,
                "subscriptionPrice": 42,
                "category": "Bakery",
                "emoji": "🍞",
                "unit": "per loaf",
                "availability": ["QuickGrocery", "Daily Needs", "SuperBazaar", "City Market", "Fresh & Fast"]
            },
            {
                "id": 15,
                "name": "Basmati Rice",
                "price": 120,
                "subscriptionPrice": 115,
                "category": "Grains",
                "emoji": "🍚",
                "unit": "per 2kg",
                "availability": ["FreshMart Express", "QuickGrocery", "Daily Needs", "SuperBazaar", "City Market"]
            },
            {
                "id": 16,
                "name": "Potato Chips",
                "price": 50,
                "subscriptionPrice": 47,
                "category": "Snacks",
                "emoji": "🥔",
                "unit": "per pack",
                "availability": ["QuickGrocery", "Daily Needs", "SuperBazaar", "City Market", "Fresh & Fast"]
            },
            {
                "id": 17,
                "name": "Chocolate Cookies",
                "price": 80,
                "subscriptionPrice": 75,
                "category": "Snacks",
                "emoji": "🍪",
                "unit": "per pack",
                "availability": ["FreshMart Express", "SuperBazaar", "Fresh & Fast"]
            },
            {
                "id": 18,
                "name": "Mixed Nuts",
                "price": 850,
                "subscriptionPrice": 800,
                "category": "Snacks",
                "emoji": "🥜",
                "unit": "per kg",
                "availability": ["FreshMart Express", "SuperBazaar", "Fresh & Fast"]
            },
            {
                "id": 19,
                "name": "Orange Juice",
                "price": 120,
                "subscriptionPrice": 115,
                "category": "Beverages",
                "emoji": "🧃",
                "unit": "per liter",
                "availability": ["FreshMart Express", "QuickGrocery", "SuperBazaar", "Fresh & Fast"]
            },
            {
                "id": 20,
                "name": "Cola Soft Drink",
                "price": 40,
                "subscriptionPrice": 38,
                "category": "Beverages",
                "emoji": "🥤",
                "unit": "per 500ml",
                "availability": ["QuickGrocery", "Daily Needs", "SuperBazaar", "City Market", "Fresh & Fast"]
            },
            {
                "id": 21,
                "name": "Green Tea",
                "price": 155,
                "subscriptionPrice": 145,
                "category": "Beverages",
                "emoji": "🍵",
                "unit": "per 250g",
                "availability": ["FreshMart Express", "SuperBazaar", "Fresh & Fast"]
            },
            {
                "id": 22,
                "name": "Coffee Beans",
                "price": 500,
                "subscriptionPrice": 475,
                "category": "Beverages",
                "emoji": "☕",
                "unit": "per 200g",
                "availability": ["FreshMart Express", "SuperBazaar", "Fresh & Fast"]
            },
            {
                "id": 23,
                "name": "Chicken Breast",
                "price": 270,
                "subscriptionPrice": 255,
                "category": "Meat",
                "emoji": "🍗",
                "unit": "per kg",
                "availability": ["FreshMart Express", "SuperBazaar", "Fresh & Fast"]
            },
            {
                "id": 24,
                "name": "Fresh Fish",
                "price": 400,
                "subscriptionPrice": 380,
                "category": "Meat",
                "emoji": "🐟",
                "unit": "per kg",
                "availability": ["FreshMart Express", "Daily Needs", "Fresh & Fast"]
            },
            {
                "id": 25,
                "name": "Vanilla Ice Cream",
                "price": 250,
                "subscriptionPrice": 235,
                "category": "Frozen",
                "emoji": "🍦",
                "unit": "per 500ml",
                "availability": ["FreshMart Express", "QuickGrocery", "SuperBazaar", "Fresh & Fast"]
            }
        ];

        this.locations = [
            {
                "id": 1,
                "name": "Mumbai",
                "areas": ["Bandra", "Andheri", "Powai", "Lower Parel", "Worli", "Juhu", "Malad", "Borivali"]
            },
            {
                "id": 2,
                "name": "Delhi",
                "areas": ["Connaught Place", "Karol Bagh", "Lajpat Nagar", "Dwarka", "Rohini", "Vasant Kunj", "Saket", "Greater Kailash"]
            },
            {
                "id": 3,
                "name": "Bangalore",
                "areas": ["Koramangala", "Indiranagar", "Whitefield", "Electronic City", "HSR Layout", "BTM Layout", "Jayanagar", "Malleshwaram"]
            },
            {
                "id": 4,
                "name": "Chennai",
                "areas": ["T. Nagar", "Anna Nagar", "Velachery", "Adyar", "Mylapore", "Nungambakkam", "Porur", "OMR"]
            },
            {
                "id": 5,
                "name": "Hyderabad",
                "areas": ["Banjara Hills", "Jubilee Hills", "Gachibowli", "Hitech City", "Kondapur", "Kukatpally", "Secunderabad", "Begumpet"]
            },
            {
                "id": 6,
                "name": "Pune",
                "areas": ["Koregaon Park", "Hinjewadi", "Baner", "Wakad", "Kothrud", "Shivaji Nagar", "Camp", "Hadapsar"]
            }
        ];

        this.shops = [
            {
                "id": 1,
                "name": "FreshMart Express",
                "rating": 4.6,
                "deliveryTime": "25-35",
                "distance": 0.8,
                "type": "Premium Grocery"
            },
            {
                "id": 2,
                "name": "QuickGrocery",
                "rating": 4.3,
                "deliveryTime": "20-30",
                "distance": 1.2,
                "type": "Fast Delivery"
            },
            {
                "id": 3,
                "name": "SuperBazaar",
                "rating": 4.5,
                "deliveryTime": "30-45",
                "distance": 2.1,
                "type": "Supermarket"
            },
            {
                "id": 4,
                "name": "Daily Needs",
                "rating": 4.2,
                "deliveryTime": "35-45",
                "distance": 1.8,
                "type": "Neighborhood Store"
            },
            {
                "id": 5,
                "name": "Fresh & Fast",
                "rating": 4.7,
                "deliveryTime": "20-25",
                "distance": 0.5,
                "type": "Express Delivery"
            },
            {
                "id": 6,
                "name": "City Market",
                "rating": 4.4,
                "deliveryTime": "40-50",
                "distance": 3.2,
                "type": "Wholesale Market"
            }
        ];

        this.subscriptionFrequencies = [
            {
                "id": "weekly",
                "name": "Weekly",
                "description": "Every week",
                "discount": 8
            },
            {
                "id": "biweekly",
                "name": "Bi-weekly", 
                "description": "Every 2 weeks",
                "discount": 6
            },
            {
                "id": "monthly",
                "name": "Monthly",
                "description": "Every month",
                "discount": 5
            }
        ];

        this.cart = [];
        this.filteredProducts = [...this.products];
        this.currentCategory = 'All';
        this.searchTerm = '';
        this.selectedAddress = null;
        this.selectedShop = null;
        this.addressSuggestions = [];
        this.selectedSubscription = '';
        this.isDarkMode = false;
        
        // Slide checkout state
        this.slideHandle = null;
        this.isDragging = false;
        this.startX = 0;
        this.currentX = 0;
        this.slideTrack = null;
        this.slideTrackRect = null;

        this.init();
    }

    init() {
        this.initTheme();
        this.generateAddressSuggestions();
        this.renderProducts();
        this.updateCartUI();
        // Delay event binding to ensure DOM is ready
        requestAnimationFrame(() => {
            this.bindEvents();
            // Initialize slide checkout after binding events
            setTimeout(() => {
                this.initSlideCheckout();
            }, 500);
        });
    }

    initTheme() {
        // Default to light theme
        document.documentElement.setAttribute('data-theme', 'light');
        this.updateThemeIcon();
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        const theme = this.isDarkMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        this.updateThemeIcon();
    }

    updateThemeIcon() {
        const themeIcon = document.getElementById('themeIcon');
        if (themeIcon) {
            themeIcon.textContent = this.isDarkMode ? '🌙' : '☀️';
        }
    }

    generateAddressSuggestions() {
        this.addressSuggestions = [];
        
        this.locations.forEach(location => {
            // Add city as main option
            this.addressSuggestions.push({
                id: `city_${location.id}`,
                main: location.name,
                sub: `${location.areas.length} areas available`,
                type: 'city',
                city: location.name,
                area: null
            });
            
            // Add areas
            location.areas.forEach((area, index) => {
                this.addressSuggestions.push({
                    id: `area_${location.id}_${index}`,
                    main: `${area}, ${location.name}`,
                    sub: 'Delivery available',
                    type: 'area',
                    city: location.name,
                    area: area
                });
            });
        });
    }

    bindEvents() {
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleTheme();
            });
        }

        // Cart toggle - ensure we get the right element and avoid conflicts
        const cartToggle = document.getElementById('cartToggle');
        if (cartToggle) {
            // Remove any existing listeners
            cartToggle.replaceWith(cartToggle.cloneNode(true));
            const newCartToggle = document.getElementById('cartToggle');
            newCartToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleCart();
            });
        }

        const cartClose = document.getElementById('cartClose');
        if (cartClose) {
            cartClose.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeCart();
            });
        }

        const cartOverlay = document.getElementById('cartOverlay');
        if (cartOverlay) {
            cartOverlay.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeCart();
            });
        }

        // Address search functionality
        const addressInput = document.getElementById('addressInput');
        if (addressInput) {
            addressInput.addEventListener('input', (e) => {
                this.handleAddressSearch(e.target.value);
            });
            
            addressInput.addEventListener('focus', (e) => {
                this.showAddressDropdown();
                if (!e.target.value.trim()) {
                    this.renderAddressDropdown(this.addressSuggestions.slice(0, 10));
                }
            });
            
            addressInput.addEventListener('click', (e) => {
                e.stopPropagation();
                this.showAddressDropdown();
                if (!e.target.value.trim()) {
                    this.renderAddressDropdown(this.addressSuggestions.slice(0, 10));
                }
            });
        }

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
        }

        // Category filters
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleCategoryFilter(e.target.dataset.category);
            });
        });

        // Subscription radio buttons
        const subscriptionInputs = document.querySelectorAll('input[name="subscription"]');
        subscriptionInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                this.selectedSubscription = e.target.value;
                this.updateCartTotal();
            });
        });

        // Modal events
        const modalClose = document.getElementById('modalClose');
        const modalOkBtn = document.getElementById('modalOkBtn');
        const addressModal = document.getElementById('addressModal');
        
        if (modalClose) {
            modalClose.addEventListener('click', (e) => {
                e.preventDefault();
                this.hideAddressModal();
            });
        }
        if (modalOkBtn) {
            modalOkBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.hideAddressModal();
            });
        }
        if (addressModal) {
            addressModal.addEventListener('click', (e) => {
                if (e.target === addressModal) {
                    this.hideAddressModal();
                }
            });
        }

        // Checkout modal
        const closeCheckoutModal = document.getElementById('closeCheckoutModal');
        if (closeCheckoutModal) {
            closeCheckoutModal.addEventListener('click', (e) => {
                e.preventDefault();
                this.hideCheckoutModal();
            });
        }

        // Global click handler for address dropdown
        document.addEventListener('click', (e) => {
            const addressSearch = document.querySelector('.address-search');
            if (!addressSearch || !addressSearch.contains(e.target)) {
                this.hideAddressDropdown();
            }
        });
    }

    initSlideCheckout() {
        this.slideHandle = document.getElementById('slideHandle');
        this.slideTrack = document.querySelector('.slide-track');
        
        if (!this.slideHandle || !this.slideTrack) {
            console.log('Slide elements not found, retrying...');
            setTimeout(() => {
                this.initSlideCheckout();
            }, 1000);
            return;
        }

        console.log('Initializing slide checkout...');
        
        // Get track dimensions
        this.updateSlideTrackRect();
        
        // Mouse events
        this.slideHandle.addEventListener('mousedown', (e) => {
            e.preventDefault();
            this.startSlide(e);
        });
        
        // Global mouse events
        document.addEventListener('mousemove', (e) => {
            if (this.isDragging) {
                e.preventDefault();
                this.handleSlide(e);
            }
        });
        
        document.addEventListener('mouseup', (e) => {
            if (this.isDragging) {
                e.preventDefault();
                this.endSlide();
            }
        });
        
        // Touch events for mobile
        this.slideHandle.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.startSlide(e);
        }, { passive: false });
        
        document.addEventListener('touchmove', (e) => {
            if (this.isDragging) {
                e.preventDefault();
                this.handleSlide(e);
            }
        }, { passive: false });
        
        document.addEventListener('touchend', (e) => {
            if (this.isDragging) {
                e.preventDefault();
                this.endSlide();
            }
        });

        console.log('Slide checkout initialized successfully');
    }

    updateSlideTrackRect() {
        if (this.slideTrack) {
            this.slideTrackRect = this.slideTrack.getBoundingClientRect();
        }
    }

    startSlide(e) {
        if (this.cart.length === 0) {
            console.log('Cannot slide: cart is empty');
            return;
        }
        
        if (!this.selectedAddress) {
            console.log('Cannot slide: no address selected');
            this.showAddressModal();
            return;
        }
        
        console.log('Starting slide...');
        this.isDragging = true;
        this.slideHandle.classList.add('dragging');
        
        // Update track rect in case layout changed
        this.updateSlideTrackRect();
        
        if (e.type === 'mousedown') {
            this.startX = e.clientX - this.slideTrackRect.left - this.slideHandle.offsetLeft;
        } else if (e.type === 'touchstart') {
            this.startX = e.touches[0].clientX - this.slideTrackRect.left - this.slideHandle.offsetLeft;
        }
        
        // Prevent text selection
        document.body.style.userSelect = 'none';
    }

    handleSlide(e) {
        if (!this.isDragging || !this.slideTrackRect) return;
        
        let clientX;
        if (e.type === 'mousemove') {
            clientX = e.clientX;
        } else if (e.type === 'touchmove') {
            clientX = e.touches[0].clientX;
        } else {
            return;
        }
        
        // Calculate position relative to track
        this.currentX = clientX - this.slideTrackRect.left - this.startX;
        const maxX = this.slideTrack.offsetWidth - this.slideHandle.offsetWidth - 8; // Account for padding
        
        // Constrain movement
        this.currentX = Math.max(0, Math.min(this.currentX, maxX));
        
        // Apply position
        this.slideHandle.style.left = (this.currentX + 4) + 'px'; // Add padding offset
        
        // Update text opacity based on position
        const progress = this.currentX / maxX;
        const slideText = document.querySelector('.slide-text');
        if (slideText) {
            slideText.style.opacity = Math.max(0, 1 - (progress * 2));
        }

        console.log(`Sliding: ${Math.round(progress * 100)}%`);
    }

    endSlide() {
        if (!this.isDragging) return;
        
        console.log('Ending slide...');
        this.isDragging = false;
        this.slideHandle.classList.remove('dragging');
        
        // Restore text selection
        document.body.style.userSelect = '';
        
        if (!this.slideTrackRect) {
            this.resetSlide();
            return;
        }
        
        const maxX = this.slideTrack.offsetWidth - this.slideHandle.offsetWidth - 8;
        const progress = this.currentX / maxX;
        
        console.log(`Slide ended at ${Math.round(progress * 100)}%`);
        
        if (progress > 0.75) { // Reduced threshold for easier completion
            console.log('Checkout completed!');
            this.completeCheckout();
        } else {
            console.log('Slide not far enough, resetting...');
            this.resetSlide();
        }
    }

    resetSlide() {
        console.log('Resetting slide position...');
        if (this.slideHandle) {
            this.slideHandle.style.left = '4px';
            this.slideHandle.style.transition = 'all 0.3s ease';
            
            // Remove transition after animation
            setTimeout(() => {
                if (this.slideHandle) {
                    this.slideHandle.style.transition = '';
                }
            }, 300);
        }
        
        const slideText = document.querySelector('.slide-text');
        if (slideText) {
            slideText.style.opacity = '1';
        }
        
        const slideCheckout = document.getElementById('slideCheckout');
        if (slideCheckout) {
            slideCheckout.classList.remove('completed');
        }
    }

    completeCheckout() {
        console.log('Completing checkout...');
        const slideCheckout = document.getElementById('slideCheckout');
        if (slideCheckout) {
            slideCheckout.classList.add('completed');
        }
        
        // Show success modal after a brief delay
        setTimeout(() => {
            this.showCheckoutModal();
            // Reset cart and slide after showing modal
            setTimeout(() => {
                this.cart = [];
                this.selectedSubscription = '';
                // Reset subscription radio button
                const oneTimeRadio = document.querySelector('input[name="subscription"][value=""]');
                if (oneTimeRadio) {
                    oneTimeRadio.checked = true;
                }
                this.updateCartUI();
                this.resetSlide();
                this.closeCart();
            }, 1000);
        }, 500);
    }

    showCheckoutModal() {
        const modal = document.getElementById('checkoutModal');
        const orderDetails = document.getElementById('orderDetails');
        
        if (modal && orderDetails) {
            const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
            const baseTotal = this.cart.reduce((sum, item) => {
                const price = this.selectedSubscription ? item.subscriptionPrice : item.price;
                return sum + (price * item.quantity);
            }, 0);
            
            let discount = 0;
            let subscriptionText = 'One-time purchase';
            
            if (this.selectedSubscription) {
                const frequency = this.subscriptionFrequencies.find(f => f.id === this.selectedSubscription);
                if (frequency) {
                    discount = Math.round(baseTotal * frequency.discount / 100);
                    subscriptionText = `${frequency.name} subscription (${frequency.discount}% off)`;
                }
            }
            
            const finalTotal = baseTotal - discount;
            
            orderDetails.innerHTML = `
                <div class="order-summary">Items: ${totalItems}</div>
                <div class="order-summary">Subtotal: ₹${baseTotal}</div>
                <div class="order-summary">Subscription: ${subscriptionText}</div>
                ${discount > 0 ? `<div class="order-summary">Discount: -₹${discount}</div>` : ''}
                <div class="order-summary"><strong>Total: ₹${finalTotal}</strong></div>
                <div class="order-summary">📍 ${this.selectedAddress.main}</div>
                <div class="order-summary">⏱️ Estimated delivery: ${this.selectedShop ? this.selectedShop.deliveryTime : '30-45'} minutes</div>
            `;
            
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    hideCheckoutModal() {
        const modal = document.getElementById('checkoutModal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }

    handleAddressSearch(searchTerm) {
        const dropdown = document.getElementById('addressDropdown');
        if (!dropdown) return;

        if (searchTerm.trim() === '') {
            this.renderAddressDropdown(this.addressSuggestions.slice(0, 10));
            this.showAddressDropdown();
            return;
        }

        const filteredSuggestions = this.addressSuggestions.filter(suggestion =>
            suggestion.main.toLowerCase().includes(searchTerm.toLowerCase()) ||
            suggestion.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (suggestion.area && suggestion.area.toLowerCase().includes(searchTerm.toLowerCase()))
        );

        this.renderAddressDropdown(filteredSuggestions);
        this.showAddressDropdown();
    }

    renderAddressDropdown(suggestions) {
        const dropdown = document.getElementById('addressDropdown');
        if (!dropdown) return;

        dropdown.innerHTML = '';

        if (suggestions.length === 0) {
            const noResults = document.createElement('div');
            noResults.className = 'address-option';
            noResults.innerHTML = `
                <div class="address-option-main">No locations found</div>
                <div class="address-option-sub">Try searching for a different area</div>
            `;
            dropdown.appendChild(noResults);
            return;
        }

        suggestions.forEach(suggestion => {
            const option = document.createElement('div');
            option.className = 'address-option';
            option.innerHTML = `
                <div class="address-option-main">${suggestion.main}</div>
                <div class="address-option-sub">${suggestion.sub}</div>
            `;
            
            option.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.selectAddress(suggestion);
            });
            
            dropdown.appendChild(option);
        });
    }

    selectAddress(address) {
        this.selectedAddress = address;
        this.selectShop(address);
        
        const addressInput = document.getElementById('addressInput');
        if (addressInput) {
            addressInput.value = address.main;
            addressInput.classList.add('selected');
        }
        
        this.hideAddressDropdown();
        this.updateDeliveryInfo();
    }

    selectShop(address) {
        // Select a shop based on the location (simple random selection for demo)
        const availableShops = this.shops.filter(shop => Math.random() > 0.3);
        if (availableShops.length > 0) {
            this.selectedShop = availableShops[Math.floor(Math.random() * availableShops.length)];
        } else {
            this.selectedShop = this.shops[0]; // fallback
        }
    }

    showAddressDropdown() {
        const dropdown = document.getElementById('addressDropdown');
        if (dropdown) {
            dropdown.classList.remove('hidden');
        }
    }

    hideAddressDropdown() {
        const dropdown = document.getElementById('addressDropdown');
        if (dropdown) {
            dropdown.classList.add('hidden');
        }
    }

    updateDeliveryInfo() {
        const deliveryInfo = document.getElementById('deliveryInfo');
        if (!deliveryInfo) return;

        if (this.selectedAddress && this.selectedShop) {
            deliveryInfo.innerHTML = `
                <div class="delivery-address">📍 Delivering to: ${this.selectedAddress.main}</div>
                <div class="delivery-time">🏪 ${this.selectedShop.name} • ⏱️ ${this.selectedShop.deliveryTime} minutes</div>
            `;
            deliveryInfo.style.display = 'block';
        } else {
            deliveryInfo.innerHTML = '';
            deliveryInfo.style.display = 'none';
        }
    }

    showAddressModal() {
        const modal = document.getElementById('addressModal');
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    hideAddressModal() {
        const modal = document.getElementById('addressModal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }

    renderProducts() {
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid) return;

        productsGrid.innerHTML = '';

        this.filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card fade-in';
            productCard.innerHTML = `
                <span class="product-emoji">${product.emoji}</span>
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-unit">${product.unit}</p>
                <div class="product-price">₹${product.price}</div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" data-product-id="${product.id}">
                        Add to Cart
                    </button>
                    <button class="subscribe-btn" data-product-id="${product.id}">
                        Subscribe & Save ₹${product.price - product.subscriptionPrice}
                    </button>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });

        // Bind add to cart events after rendering
        setTimeout(() => {
            this.bindProductEvents();
        }, 100);
    }

    bindProductEvents() {
        const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
        addToCartBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const productId = parseInt(e.target.dataset.productId);
                this.addToCart(productId, false);
            });
        });

        const subscribeBtns = document.querySelectorAll('.subscribe-btn');
        subscribeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const productId = parseInt(e.target.dataset.productId);
                this.addToCart(productId, true);
            });
        });
    }

    handleSearch(searchTerm) {
        this.searchTerm = searchTerm.toLowerCase().trim();
        this.filterProducts();
    }

    handleCategoryFilter(category) {
        // Update active filter button
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        const activeBtn = document.querySelector(`[data-category="${category}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }

        this.currentCategory = category;
        this.filterProducts();
    }

    filterProducts() {
        this.filteredProducts = this.products.filter(product => {
            const matchesCategory = this.currentCategory === 'All' || product.category === this.currentCategory;
            const matchesSearch = this.searchTerm === '' || product.name.toLowerCase().includes(this.searchTerm);
            return matchesCategory && matchesSearch;
        });
        this.renderProducts();
    }

    addToCart(productId, isSubscription = false) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
            if (isSubscription) {
                existingItem.isSubscription = true;
            }
        } else {
            this.cart.push({
                ...product,
                quantity: 1,
                isSubscription: isSubscription
            });
        }

        // Set subscription if adding subscription item
        if (isSubscription && !this.selectedSubscription) {
            this.selectedSubscription = 'weekly';
            const weeklyRadio = document.querySelector('input[value="weekly"]');
            if (weeklyRadio) {
                weeklyRadio.checked = true;
            }
        }

        this.updateCartUI();
        this.animateAddToCart(productId, isSubscription);
        this.animateCartCount();
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.updateCartUI();
    }

    updateQuantity(productId, change) {
        const item = this.cart.find(item => item.id === productId);
        if (!item) return;

        item.quantity += change;

        if (item.quantity <= 0) {
            this.removeFromCart(productId);
        } else {
            this.updateCartUI();
        }
    }

    updateCartUI() {
        this.updateCartCount();
        this.updateCartItems();
        this.updateCartTotal();
        this.toggleEmptyCart();
        this.updateDeliveryInfo();
        
        // Re-initialize slide checkout when cart updates
        if (this.cart.length > 0 && this.selectedAddress) {
            setTimeout(() => {
                this.updateSlideTrackRect();
            }, 100);
        }
    }

    updateCartCount() {
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    }

    updateCartItems() {
        const cartItems = document.getElementById('cartItems');
        if (!cartItems) return;

        cartItems.innerHTML = '';

        this.cart.forEach(item => {
            const price = (this.selectedSubscription && item.subscriptionPrice) ? item.subscriptionPrice : item.price;
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <span class="cart-item-emoji">${item.emoji}</span>
                <div class="cart-item-info">
                    <div class="cart-item-name">
                        ${item.name}
                        ${item.isSubscription ? '<span style="color: var(--color-success); font-size: 0.8em;">📦 Subscription</span>' : ''}
                    </div>
                    <div class="cart-item-price">₹${price} ${item.unit}</div>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn decrease-btn" data-product-id="${item.id}">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn increase-btn" data-product-id="${item.id}">+</button>
                    <button class="remove-item-btn" data-product-id="${item.id}">Remove</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });

        // Bind cart item events
        this.bindCartItemEvents();
    }

    bindCartItemEvents() {
        // Quantity decrease buttons
        const decreaseBtns = document.querySelectorAll('.decrease-btn');
        decreaseBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const productId = parseInt(e.target.dataset.productId);
                this.updateQuantity(productId, -1);
            });
        });

        // Quantity increase buttons
        const increaseBtns = document.querySelectorAll('.increase-btn');
        increaseBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const productId = parseInt(e.target.dataset.productId);
                this.updateQuantity(productId, 1);
            });
        });

        // Remove item buttons
        const removeBtns = document.querySelectorAll('.remove-item-btn');
        removeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const productId = parseInt(e.target.dataset.productId);
                this.removeFromCart(productId);
            });
        });
    }

    updateCartTotal() {
        const cartTotal = document.getElementById('cartTotal');
        if (cartTotal) {
            const baseTotal = this.cart.reduce((sum, item) => {
                const price = this.selectedSubscription ? item.subscriptionPrice : item.price;
                return sum + (price * item.quantity);
            }, 0);
            
            let discount = 0;
            if (this.selectedSubscription) {
                const frequency = this.subscriptionFrequencies.find(f => f.id === this.selectedSubscription);
                if (frequency) {
                    discount = Math.round(baseTotal * frequency.discount / 100);
                }
            }
            
            const finalTotal = baseTotal - discount;
            cartTotal.textContent = `₹${finalTotal}`;
        }

        // Show/hide subscription options based on cart contents
        const subscriptionOptions = document.getElementById('subscriptionOptions');
        if (subscriptionOptions) {
            const hasSubscriptionItems = this.cart.some(item => item.isSubscription);
            subscriptionOptions.style.display = hasSubscriptionItems ? 'block' : 'none';
        }
    }

    toggleEmptyCart() {
        const cartEmpty = document.getElementById('cartEmpty');
        const cartItems = document.getElementById('cartItems');
        
        if (this.cart.length === 0) {
            if (cartEmpty) cartEmpty.classList.remove('hidden');
            if (cartItems) cartItems.style.display = 'none';
        } else {
            if (cartEmpty) cartEmpty.classList.add('hidden');
            if (cartItems) cartItems.style.display = 'flex';
        }
    }

    toggleCart() {
        const cartSidebar = document.getElementById('cartSidebar');
        if (!cartSidebar) return;

        const isHidden = cartSidebar.classList.contains('hidden');
        
        if (isHidden) {
            this.openCart();
        } else {
            this.closeCart();
        }
    }

    openCart() {
        const cartSidebar = document.getElementById('cartSidebar');
        if (!cartSidebar) return;

        cartSidebar.classList.remove('hidden');
        cartSidebar.classList.add('visible');
        document.body.style.overflow = 'hidden';
        
        // Update slide track rect when cart opens
        setTimeout(() => {
            this.updateSlideTrackRect();
        }, 300);
    }

    closeCart() {
        const cartSidebar = document.getElementById('cartSidebar');
        if (!cartSidebar) return;

        cartSidebar.classList.remove('visible');
        cartSidebar.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    animateAddToCart(productId, isSubscription) {
        const selector = isSubscription ? `.subscribe-btn[data-product-id="${productId}"]` : `.add-to-cart-btn[data-product-id="${productId}"]`;
        const btn = document.querySelector(selector);
        if (!btn) return;

        btn.classList.add('adding');
        const originalText = btn.textContent;
        btn.textContent = isSubscription ? 'Subscribed!' : 'Added!';
        
        setTimeout(() => {
            btn.classList.remove('adding');
            btn.textContent = originalText;
        }, 1000);
    }

    animateCartCount() {
        const cartCount = document.getElementById('cartCount');
        if (!cartCount) return;

        cartCount.classList.add('animate');
        
        setTimeout(() => {
            cartCount.classList.remove('animate');
        }, 600);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new FoodMartApp();
});

// Handle keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && window.app) {
        const cartSidebar = document.getElementById('cartSidebar');
        const addressModal = document.getElementById('addressModal');
        const checkoutModal = document.getElementById('checkoutModal');
        
        if (checkoutModal && !checkoutModal.classList.contains('hidden')) {
            window.app.hideCheckoutModal();
        } else if (addressModal && !addressModal.classList.contains('hidden')) {
            window.app.hideAddressModal();
        } else if (cartSidebar && !cartSidebar.classList.contains('hidden')) {
            window.app.closeCart();
        }
    }
});
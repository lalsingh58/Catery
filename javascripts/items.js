
// Data for each category
const foodData = {
    appetizers: [
        { name: "Samosa", price: "₹80", description: "A delicious fried pastry filled with spiced potatoes.", image: "/catery/images/samosa.jpg" },
        { name: "Pani Puri", price: "₹50", description: "Crispy puris filled with tamarind water and spicy potatoes.", image: "/catery/images/panipuri.webp" },
        { name: "Pakora", price: "₹70", description: "Fried fritters made with gram flour and potatoes.", image: "/catery/images/pakoda.jpeg" },
        { name: "Dhokla", price: "₹60", description: "Steamed spongy cake made from fermented rice and chickpea flour.", image: "/catery/images/dhokla.jpg" },
        { name: "Aloo Tikki", price: "₹90", description: "Fried potato patties served with tamarind chutney.", image: "/catery/images/alootikki.jpeg" },
        { name: "Pav Bhaji", price: "₹120", description: "Spicy mashed vegetables served with buttered pav.", image: "/catery/images/pavbhaji.jpg" },
        { name: "Kachori", price: "₹60", description: "Fried pastry filled with spicy lentils.", image: "/catery/images/kachori.jpg" }
    ],
    maindishes: [
        { name: "Butter Chicken", price: "₹250", description: "Creamy chicken curry with buttery tomato sauce.", image: "/catery/images/butterchicken.jpg" },
        { name: "Paneer Butter Masala", price: "₹180", description: "Paneer cubes cooked in a rich buttery tomato gravy.", image: "/catery/images/paneer.jpg" },
        { name: "Biryani", price: "₹300", description: "Fragrant rice dish with marinated chicken and spices.", image: "/catery/images/biryani.jpg" },
        { name: "Dal Tadka", price: "₹120", description: "Yellow lentils cooked with tempering of garlic, cumin, and ghee.", image: "/catery/images/daltadka.jpg" },
        { name: "Palak Paneer", price: "₹150", description: "Paneer cubes in a spinach curry.", image: "/catery/images/palakpaneer.jpg" },
        { name: "Tandoori Chicken", price: "₹200", description: "Grilled chicken marinated in tandoori spices.", image: "/catery/images/tandoorichicken.jpg" },
        { name: "Kadhi Pakora", price: "₹140", description: "Fried gram flour dumplings in a tangy yogurt-based curry.", image: "/catery/images/kadhipakora.jpg" },
        { name: "Chole Bhature", price: "₹180", description: "Spicy chickpea curry with deep-fried bread.", image: "/catery/images/cholebhature.jpeg" },
        { name: "Chicken Korma", price: "₹250", description: "Aromatic chicken curry with a blend of spices and nuts.", image: "/catery/images/chickenkorma.jpeg" }
    ],
    desserts: [
        { name: "Gulab Jamun", price: "₹50", description: "Fried dumplings soaked in sugary syrup.", image: "/catery/images/gulabjamun.jpg" },
        { name: "Rasgulla", price: "₹60", description: "Spongy balls of chhena soaked in light syrup.", image: "/catery/images/rasgulla.jpg" },
        { name: "Jalebi", price: "₹40", description: "Crispy fried rings soaked in sweet syrup.", image: "/catery/images/jalebi.jpg" },
        { name: "Kheer", price: "₹100", description: "Rice pudding with milk, sugar, and cardamom.", image: "/catery/images/kheer.png" },
        { name: "Ladoo", price: "₹50", description: "Sweet balls made from flour, sugar, and ghee.", image: "/catery/images/ladoo.jpg" },
        { name: "Barfi", price: "₹70", description: "Milk-based sweet with nuts and cardamom.", image: "/catery/images/barfi.jpg" },
        { name: "Falooda", price: "₹150", description: "Rose syrup, vermicelli, and sweet basil seeds with milk.", image: "/catery/images/falooda.jpg" }
    ],
    beverages: [
        { name: "Masala Chai", price: "₹40", description: "Spiced Indian tea brewed with milk and spices.", image: "/catery/images/chai.jpg" },
        { name: "Cold Drink", price: "₹50", description: "Popular Indian cola drink.", image: "/catery/images/colddrink.jpg" },
        { name: "Coffee", price: "₹100", description: "Indian-style brewed coffee.", image: "/catery/images/coffee.jpg" },
        { name: "Cold Coffee", price: "₹120", description: "Iced coffee with milk and sugar.", image: "/catery/images/coldcoffee.jpg" }
    ]
};


// Function to render the selected category
function loadCategory(category) {
    const foodItems = document.getElementById('food-items');
    foodItems.innerHTML = ''; // Clear any previous content

    const categoryItems = foodData[category];

    // Render each item
    categoryItems.forEach(function(item) {
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="food-card">
                <div class="foodimg">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="nameprice">
                    <h3>${item.name}</h3>
                    <div class="price">${item.price}</div>
                </div>
                <p>${item.description}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
        foodItems.appendChild(card);

        // Add event listener for 'Add to Cart' button
        card.querySelector('.add-to-cart').addEventListener('click', () => addToCart(item));
    });
}

// Call the default category on content load
document.addEventListener('DOMContentLoaded', function () {
    loadCategory('appetizers');

    const buttons = document.querySelectorAll('.nav-button'); // Assuming these are your category buttons
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const category = button.getAttribute('data-category');
            loadCategory(category);
        });
    });
});

let cart = []; // Cart array to store items

// Function to add items to the cart
function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
        existingItem.quantity += 1; // If the item is already in the cart, increase the quantity
    } else {
        cart.push({ ...item, quantity: 1 }); // If the item is new, add it to the cart
    }
    renderCart(); // Update the cart display
}

// Render the cart section
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous cart items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((cartItem, index) => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';
            cartItemDiv.innerHTML = `
                <div class="cart-item-image">
                    <img src="${cartItem.image}" alt="${cartItem.name}">
                </div>
                <div class="cart-item-info">
                    <h4>${cartItem.name}</h4>
                    <div class="cart-item-price">${cartItem.price}</div>
                    <div class="cart-item-quantity">
                        <button class="decrease-quantity" data-index="${index}">-</button>
                        <span>${cartItem.quantity}</span>
                        <button class="increase-quantity" data-index="${index}">+</button>
                    </div>
                    <button class="remove-item" data-index="${index}">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
        });
    }

    // Calculate total price
    updateTotalAmount();

    // Attach event listeners for quantity controls and removing items
    attachCartEventListeners();
}


// Attach event listeners for increase, decrease, and remove buttons
function attachCartEventListeners() {
    // Increase quantity
    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            cart[index].quantity += 1;
            renderCart();
        });
    });

    // Decrease quantity
    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            } else {
                cart.splice(index, 1); // Remove item if quantity is 1 and user decreases it
            }
            renderCart();
        });
    });

    // Remove item from cart
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            cart.splice(index, 1); // Remove the item from the cart
            renderCart();
        });
    });
}

function updateTotalAmount() {
    const totalAmountCart = cart.reduce((sum, cartItem) => sum + (parseFloat(cartItem.price.replace('₹', '')) * cartItem.quantity), 0);
    document.getElementById('total-amount-cart').innerText = totalAmountCart.toFixed(2);
}


//Payment popup when checkout is clicked
function openPaymentPopup() {
    const popup = document.getElementById('payment-popup');
    const cartItemsList = document.getElementById('cart-items-list');
    const popupTotalAmount = document.getElementById('popup-total-amount');

    cartItemsList.innerHTML = '';

    let totalPrice = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
        <div>
            <h4>${item.name}</h4>
            <div>Quantity: ${item.quantity}</div>
            <div>Price: ${(parseFloat(item.price.replace('₹', '')) * item.quantity).toFixed(2)}</div>
        </div>    
        `;
        cartItemsList.appendChild(cartItem);

        totalPrice += parseFloat(item.price.replace('₹', '')) * item.quantity;

    });

    popupTotalAmount.innerText = totalPrice.toFixed(2); 

    // Show popup
    popup.style.display = 'flex';
}

// Close the payment popup
function closePaymentPopup() {
    const popup = document.getElementById('payment-popup');
    popup.style.display = 'none';
}

//When Place order is clicked
function placeOrder() {
    const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked');
    
    // Check if a payment method is selected
    if (!selectedPaymentMethod) {
        alert('Please select a payment method.');
        return; // Stop execution if no method is selected
    }

    const ordersList = document.getElementById('orders-list');
    const totalAmount = document.getElementById('total-amount-cart').innerText;
    
    // Get current date and time
    const orderTime = new Date().toLocaleString();

    // Create a new order summary container
    const orderItem = document.createElement('div');
    orderItem.classList.add('order-item');
    orderItem.style.border = "1px solid #ddd";
    orderItem.style.padding = "1rem";
    orderItem.style.marginBottom = "1rem";
    orderItem.style.borderRadius = "10px";
    orderItem.style.backgroundColor = "#f9f9f9";

    // Create a detailed summary of the items
    let orderSummary = `<h4>Order Summary</h4>`;
    orderSummary += `<div><strong>Payment Method:</strong> ${selectedPaymentMethod.value}</div>`;
    orderSummary += `<div><strong>Time of Order:</strong> ${orderTime}</div>`;
    orderSummary += `<div><strong>Items Ordered:</strong></div><ul>`;

    // List each item with quantity and price
    cart.forEach(item => {
        orderSummary += `<li>${item.name} - Quantity: ${item.quantity} - Price: ₹${(parseFloat(item.price.replace('₹', '')) * item.quantity).toFixed(2)}</li>`;
    });

    orderSummary += `</ul>`;
    orderSummary += `<div><strong>Total Amount:</strong> ₹${totalAmount}</div>`;

    // Add the order summary to the new order item container
    orderItem.innerHTML = orderSummary;
    
    // Append the new order item to the orders list
    ordersList.appendChild(orderItem);

    // Close popup after placing the order
    closePaymentPopup();
    
    // Clear the cart
    cart = [];
    renderCart();
}



// Event listeners
document.getElementById('place-order-btn').addEventListener('click', placeOrder);
document.getElementById('close-popup-btn').addEventListener('click', closePaymentPopup);



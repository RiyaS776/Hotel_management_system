// Function to show a specific section
function showSection(section) {
    const sections = ['registration', 'rooms', 'checkout', 'items', 'availability', 'sales'];
    sections.forEach(s => {
        document.getElementById(s).style.display = (s === section) ? 'block' : 'none';
    });
}

// Registration functionality
// Registration functionality
// Registration functionality
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('reg-name').value;
    const phone = document.getElementById('reg-phone').value;
    const email = document.getElementById('reg-email').value;
    const address = document.getElementById('reg-address').value;

    alert(`Registration successful!\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nAddress: ${address}`);
    showSection('rooms'); // Redirect to available rooms section
});



// Room booking functionality
function bookRoom(room) {
    alert(`You have booked the ${room}.`);
    showSection('checkout');
}

// Checkout functionality
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('checkout-email').value;
    alert(`Checkout successful for: ${email}`);
    showSection('items');
});

// Add item functionality
document.getElementById('item-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const itemName = document.getElementById('item-name').value;
    const itemPrice = document.getElementById('item-price').value;
    
    alert(`Item added: ${itemName}, Price: $${itemPrice}`);
    showSection('availability');
});

// Check availability functionality
document.getElementById('availability-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    
    alert(`Checking availability from ${checkIn} to ${checkOut}.`);
    showSection('sales');
});

// Daily sales functionality
function viewSales() {
    const salesReport = "Total sales for today: $500."; // Example static report
    document.getElementById('sales-report').innerText = salesReport;
    showSection('sales');
}

// Initially show the registration section
showSection('registration');

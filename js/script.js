// === FILTERING PRODUCTS ===
document.addEventListener('DOMContentLoaded', () => {
  const categoryFilter = document.getElementById('category-filter');
  const characterFilter = document.getElementById('character-filter');
  const productCards = document.querySelectorAll('.product-card');

  if (categoryFilter && characterFilter && productCards.length > 0) {
    function filterProducts() {
      const selectedCategory = categoryFilter.value;
      const selectedCharacter = characterFilter.value;

      productCards.forEach(card => {
        const category = card.dataset.category;
        const character = card.dataset.character;

        const matchCategory = selectedCategory === 'All' || category === selectedCategory;
        const matchCharacter = selectedCharacter === 'All' || character === selectedCharacter;

        if (matchCategory && matchCharacter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }

    categoryFilter.addEventListener('change', filterProducts);
    characterFilter.addEventListener('change', filterProducts);
  }
});

// === THEME TOGGLE ===
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
}

// === CART PAGE LOGIC ===
document.addEventListener('DOMContentLoaded', () => {
  const cartSection = document.getElementById('cartItems');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cartSection) {
    if (cart.length === 0) {
      cartSection.innerHTML = '<p>Your cart is empty.</p>';
    } else {
      let subtotal = 0;
      cart.forEach((item, index) => {
        subtotal += parseInt(item.price);
        cartSection.innerHTML += `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" />
            <div>
              <h4>${item.name}</h4>
              <p>Size: ${item.size}</p>
              <p>Price: ₹${item.price}</p>
            </div>
          </div>
        `;
      });

      document.getElementById('subtotal').textContent = subtotal;
      document.getElementById('total').textContent = subtotal + 80;

      document.getElementById('placeOrder').addEventListener('click', () => {
        const orderSummary = cart.map(item => `${item.name} (${item.size}) - ₹${item.price}`).join('%0A');
        const total = subtotal + 80;
        const message = `Hi! I'd like to order:%0A${orderSummary}%0ADelivery: ₹80%0ATotal: ₹${total}`;
        localStorage.removeItem('cart');
        window.location.href = `https://www.instagram.com/messages/compose/?recipient_id=wearotakufuel&text=${message}`;
      });
    }
  }
});

let cart = [];

function addToCart(item, price) {
  cart.push({ item, price });
  document.getElementById('cart-count').innerText = cart.length;
  alert(item + " added to cart!");
}

function toggleCart() {
  const section = document.getElementById('cart-section');
  section.classList.toggle('hidden');
  renderCart();
}

function renderCart() {
  const list = document.getElementById('cart-items');
  list.innerHTML = '';
  cart.forEach((p, i) => {
    const li = document.createElement('li');
    li.textContent = `${p.item} — ₹${p.price}`;
    list.appendChild(li);
  });
}

function placeOrder() {
  const name = document.getElementById('user-name').value;
  const address = document.getElementById('user-address').value;
  const number = document.getElementById('user-number').value;
  const message = encodeURIComponent(`New Order from OtakuFuel:
Name: ${name}
Address: ${address}
Phone: ${number}
Items: ${cart.map(p => p.item + ' - ₹' + p.price).join(', ')}`);
  window.location.href = `https://instagram.com/wearotakufuel`;
}

function searchProducts() {
  const input = document.getElementById('search').value.toLowerCase();
  const products = document.querySelectorAll('.product');
  products.forEach(p => {
    const name = p.dataset.name;
    p.style.display = name.includes(input) ? 'block' : 'none';
  });
}

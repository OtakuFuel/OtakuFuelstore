const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');
});

function toggleTheme(productEl) {
  const peaceImg = productEl.querySelector('.product-img.peace');
  const villainImg = productEl.querySelector('.product-img.villain');
  peaceImg.classList.toggle('hidden');
  villainImg.classList.toggle('hidden');
}

function addToCart(event) {
  event.stopPropagation();
  const cartAnim = document.getElementById('cart-animation');
  cartAnim.classList.remove('hidden');
  setTimeout(() => cartAnim.classList.add('hidden'), 1500);
  window.location.href = 'https://wa.me/yourwhatsapplink';
}

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');
  const price = urlParams.get('price');
  const character = urlParams.get('char');

  document.getElementById('productName').textContent = name || 'Anime Tee';
  document.getElementById('productPrice').textContent = price || '0';

  const productImage = document.getElementById('productImage');
  if (character === 'Naruto') productImage.src = 'images/naruto-shirt.png';
  else if (character === 'Luffy') productImage.src = 'images/luffy-shirt.png';
  else productImage.src = 'images/logo.png';

  document.getElementById('addToCartBtn').addEventListener('click', () => {
    const size = document.getElementById('size').value;
    if (!size) {
      alert('Please select a size!');
      return;
    }

    const item = {
      name,
      price,
      size,
      image: productImage.src
    };

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
    window.location.href = 'cart.html';
  });

  document.getElementById('wishlistBtn').addEventListener('click', () => {
    alert('Added to wishlist ❤️');
  });
});

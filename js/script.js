// === FILTERING PRODUCTS ===
document.addEventListener('DOMContentLoaded', () => {
  const categoryFilter = document.getElementById('category-filter');
  const characterFilter = document.getElementById('character-filter');
  const productCards = document.querySelectorAll('.product-card');

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
});


// === THEME TOGGLE ===
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

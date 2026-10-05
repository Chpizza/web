const cartButton = document.querySelector('.cart-button b');
const toast = document.querySelector('.toast');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.desktop-nav');
let cartCount = 0;

function showToast() {
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2200);
}

document.querySelectorAll('.add-button').forEach((button) => {
  button.addEventListener('click', () => {
    cartCount += 1;
    cartButton.textContent = cartCount;
    showToast();
  });
});

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('mobile-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  nav.style.setProperty('display', isOpen ? 'flex' : 'none', 'important');
  nav.style.position = isOpen ? 'absolute' : '';
  nav.style.top = isOpen ? '70px' : '';
  nav.style.left = isOpen ? '0' : '';
  nav.style.right = isOpen ? '0' : '';
  nav.style.margin = isOpen ? '0' : '';
  nav.style.padding = isOpen ? '24px 6vw' : '';
  nav.style.background = isOpen ? 'var(--paper)' : '';
  nav.style.flexDirection = isOpen ? 'column' : '';
  nav.style.gap = isOpen ? '20px' : '';
});

document.querySelectorAll('.desktop-nav a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('mobile-open'));
});

const revealItems = document.querySelectorAll('.statement-content, .statement-image, .feature, .product-card');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => revealObserver.observe(item));

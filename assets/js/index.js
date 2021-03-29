const toggle = document.querySelector('.js-switch');
const price = document.querySelector('.js-price');
const viewCount = document.querySelector('.js-view-count');
const slider = document.querySelector('.js-slider');
const subs = document.querySelector('.js-subscription');

const viewsList = ['10K', '50K', '100K', '500K', '1M'];
const pricesList = [8, 12, 16, 24, 36];

const displayView = (value = slider.value) => {
  viewsList.textContent = viewsList[value];
};

const displayPrice = () => {
  price.textContent = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(
    toggle.checked ? pricesList[slider.value] * 0.75 : pricesList[slider.value]
  );

  subs.textContent = toggle.checked ? '/ year' : '/ month';
};

displayView();
displayPrice();

slider.addEventListener('input', () => {
  displayView();
  displayPrice();
});

toggle.addEventListener('input', () => {
  displayPrice();
});

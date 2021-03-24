const views = document.querySelector('#js-view-count');
const price = document.querySelector('#price');
const subscription = document.querySelector('#js-subscription');
const slider = document.querySelector('.slider');
const toggle = document.querySelector('.toggle__input');

const viewsList = ['10K', '50K', '100K', '500K', '1M'];
const pricesList = [8, 12, 16, 24, 36];

const discount = (() => {
  return (
    (100 - parseInt(document.querySelector('.discount').textContent)) / 100
  );
})();

const showPrice = () => {
  price.textContent = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(
    toggle.checked
      ? pricesList[slider.value] * discount
      : pricesList[slider.value]
  );

  subscription.textContent = toggle.checked ? '/ year' : '/ month';
};

const showViews = (value = slider.value) => {
  views.textContent = viewsList[value];
};

showViews();
showPrice();

slider.addEventListener('input', () => {
  showViews();
  showPrice();
});

toggle.addEventListener('change', showPrice);

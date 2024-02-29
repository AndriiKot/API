const tabItems = Array.from(
  document.querySelector('.tab-list__app-open-meteo').children
);
const contentItems = Array.from(
  document.querySelector('.content-list__app-open-meteo').children
);

const clearActiveClass = (elements, className = 'is-active') => {
  elements.find((item) => item.classList.remove(`${className}`));
};

const setActiveClass = (elements, index, className = 'is-active') => {
  elements[index].classList.add(`${className}`);
};

const checkoutTabs = (item, index) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('is-active')) return;

    clearActiveClass(tabItems);
    clearActiveClass(contentItems);

    setActiveClass(tabItems, index);
    setActiveClass(contentItems, index);
  });
};

Array.from(tabItems).forEach(checkoutTabs);

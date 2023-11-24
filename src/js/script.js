/**
 * This function toggles the classList active for the faqItems, changing its background color, text color,
 * and position of the arrows if it's active. Also, it opens/changes the display of faq__description to block.
 */

const faqItem = () => {
  const faqItems = document.querySelectorAll('.js-faq-item');

  faqItems.forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.classList.toggle('faq__item--active');
    });
  });
};

/**
 * This function toggles the classList active for the solutionItems, changing its background color,
 * text color, and position of the arrows if it's active.
 */

const solutionItem = () => {
  const solutionItems = document.querySelectorAll('.js-solution-nav');

  solutionItems.forEach((solutionItem) => {
    const solutionDescription = solutionItem.querySelector('.js-solution-description');
    const arrowLeft = solutionItem.querySelector('.js-solution-arrow-left');
    const arrowRight = solutionItem.querySelector('.js-solution-arrow-right');

    solutionItem.addEventListener('click', () => {
      const isActive = solutionItem.classList.contains('hr-solutions__nav-content--active');

      solutionItems.forEach((item) => {
        const itemDescription = item.querySelector('.js-solution-description');
        const itemArrowLeft = item.querySelector('.js-solution-arrow-left');
        const itemArrowRight = item.querySelector('.js-solution-arrow-right');

        if (item === solutionItem) {
          // Toggle active class for the clicked item
          item.classList.toggle('hr-solutions__nav-content--active', !isActive);
          itemDescription.classList.toggle('hr-solutions__description--active', !isActive);
          itemArrowLeft.classList.toggle('hr-solutions__arrow-left-icon--active', !isActive);
          itemArrowRight.classList.toggle('hr-solutions__arrow-right-icon--active', !isActive);
        } else {
          // Remove active class for other items
          item.classList.remove('hr-solutions__nav-content--active');
          itemDescription.classList.remove('hr-solutions__description--active');
          itemArrowLeft.classList.remove('hr-solutions__arrow-left-icon--active');
          itemArrowRight.classList.remove('hr-solutions__arrow-right-icon--active');
        }
      });
    });
  });
};


// Call the functions when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  faqItem();
  solutionItem();
});
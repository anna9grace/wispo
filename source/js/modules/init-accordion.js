const initAccordion = () => {
  const accordion = document.querySelector('.js-accordion');
  const btns = accordion.querySelectorAll('.feature__title');
  const smallScreen = window.matchMedia('(max-width: 767px)');

  if (!accordion || btns.length < 1) {
    return;
  }

  const accordionToggleHandler = (evt) => {
    const accordionItem = evt.target.closest('.feature');
    accordionItem.classList.toggle('feature--closed');
  };

  const setAccordionActive = () => {
    btns.forEach((btn) => {
      const accordionItem = btn.closest('.feature');
      if (accordionItem) {
        btn.addEventListener('click', accordionToggleHandler);
        accordionItem.classList.add('feature--closed');
      }
    });
  };

  const handleScreenChange = () => {
    if (smallScreen.matches) {
      setAccordionActive();
    } else {
      btns.forEach((btn) => {
        const accordionItem = btn.closest('.feature');
        if (accordionItem) {
          btn.removeEventListener('click', accordionToggleHandler);
        }
        if (accordionItem.classList.contains('feature--closed')) {
          accordionItem.classList.remove('feature--closed');
        }
      });
    }
  };

  if (smallScreen.matches) {
    setAccordionActive();
  }

  if (smallScreen.addEventListener) {
    smallScreen.addEventListener('change', handleScreenChange);
  } else {
    smallScreen.addListener(handleScreenChange);
  }
};

export {initAccordion};

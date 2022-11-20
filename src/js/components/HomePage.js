import { templates, select, classNames } from '../settings.js';

class HomePage {
  constructor (element) {
    const thisHomePage = this;

    thisHomePage.render(element);
    thisHomePage.initWidgets();
  }

  render(element) {
    const thisHomePage = this;

    const generatedHTML = templates.homeWidget();
    thisHomePage.dom = {};
    thisHomePage.dom.wrapper = element;
    thisHomePage.dom.wrapper.innerHTML = generatedHTML;
    thisHomePage.dom.orderOnline = element.querySelector(select.homePage.orderLink);
    thisHomePage.dom.bookTable = element.querySelector(select.homePage.bookLink);
    thisHomePage.dom.homeSection = document.querySelector(select.sections.home);
    thisHomePage.dom.homeNav = document.querySelector(select.nav.homeLink);
  }

  forwardingToOrder() {
    const thisHomePage = this;

    const orderNav = document.querySelector(select.nav.orderLink);
    const orderSection = document.querySelector(select.sections.order);
    thisHomePage.dom.homeSection.classList.remove(classNames.pages.active);
    orderSection.classList.add(classNames.pages.active);
    thisHomePage.dom.homeNav.classList.remove(classNames.nav.active);
    orderNav.classList.add(classNames.nav.active);
  }

  forwardingToBooking() {
    const thisHomePage = this;

    const bookingNav = document.querySelector(select.nav.bookingLink);
    const bookingSection = document.querySelector(select.sections.booking);
    thisHomePage.dom.homeSection.classList.remove(classNames.pages.active);
    bookingSection.classList.add(classNames.pages.active);
    thisHomePage.dom.homeNav.classList.remove(classNames.nav.active);
    bookingNav.classList.add(classNames.nav.active);
  }

  initWidgets() {
    const thisHomePage = this;

    thisHomePage.dom.orderOnline.addEventListener('click', function(event) {
      event.preventDefault();
      thisHomePage.forwardingToOrder();
    });

    thisHomePage.dom.bookTable.addEventListener('click', function(event) {
      event.preventDefault();
      thisHomePage.forwardingToBooking();
    });
  }
  

}

export default HomePage;
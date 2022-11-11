import { select } from '..settings.js';
import AmountWidget from './AmountWidget.js';


class CartProduct{
  constructor(menuProduct, element){
    const thisCartProduct = this;
    
    thisCartProduct.id = menuProduct.id;
    thisCartProduct.name = menuProduct.name;
    thisCartProduct.amount = menuProduct.amount;
    thisCartProduct.priceSingle = menuProduct.priceSingle;
    thisCartProduct.price = menuProduct.price;
    thisCartProduct.params = menuProduct.params;

    thisCartProduct.getElements(element);
    thisCartProduct.initAmountWidget();
    thisCartProduct.initActions();
  }

  getElements(element){
    const thisCartProduct = this; 

    thisCartProduct.dom = {};
    thisCartProduct.dom.wrapper = element;
    thisCartProduct.dom.amountWidget = element.querySelector(select.cartProduct.amountWidget);
    thisCartProduct.dom.price = element.querySelector(select.cartProduct.price);
    thisCartProduct.dom.edit = element.querySelector(select.cartProduct.edit);
    thisCartProduct.dom.remove = element.querySelector(select.cartProduct.remove);
  }

  initAmountWidget(){
    const thisCartProduct = this;

    thisCartProduct.amountWidget  = new AmountWidget(thisCartProduct.dom.amountWidget);
    
    thisCartProduct.dom.amountWidget.addEventListener('updated', function(){
      const productAmount = thisCartProduct.amountWidget.value;
      let productPrice = thisCartProduct.priceSingle;
      productPrice *= productAmount;
      thisCartProduct.dom.price.innerHTML = productPrice;
      thisCartProduct.price = productPrice;
      thisCartProduct.amount = productAmount;
    });
  }

  initActions(){
    const thisCartProduct = this;

    thisCartProduct.dom.edit.addEventListener('click', function(event){
      event.preventDefault();
    });

    thisCartProduct.dom.remove.addEventListener('click', function(event){
      event.preventDefault();
      thisCartProduct.remove(event);
    });
  }

  remove(){
    const thisCartProduct = this;

    const event = new CustomEvent ('remove', {
      bubbles: true,
      detail: {
        cartProduct: thisCartProduct,
      },
    });
    thisCartProduct.dom.wrapper.dispatchEvent(event);
  }

  getData(){
    const thisCartProduct = this;

    const getDataProducts = {
      id : thisCartProduct.id,
      amount: thisCartProduct.amount,
      price: thisCartProduct.price,
      priceSingle: thisCartProduct.priceSingle,
      name: thisCartProduct.name,
      params: thisCartProduct.params
    };
    return getDataProducts;
  }
}

export default CartProduct;
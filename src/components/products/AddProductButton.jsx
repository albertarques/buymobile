'use client'

function handlerAddProductToLocalstorage(product) {
    //TODO: Add product to localStorage and quantity and update the cart icon
    console.log(product)
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    let productInCart = cart.find(p => p.id === product.id)
    if (productInCart) {
        productInCart.quantity += 1
        }
    else {
        product.quantity = 1
        cart.push(product)
        }
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  
export default function AddProductButton({product}) {
    return (
        <button className="bg-blue-500 rounded-xl px-4 py-2 text-white my-4"
        // TODO: save the product on localStorage
        onClick={() => handlerAddProductToLocalstorage(product)}
      >Buy one</button>
);
}
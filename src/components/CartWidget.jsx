import Cart from "../assets/Carrito.png"

export const CartWidget = () => {
    return(<div id="cart-widget">
        <img src={Cart} alt="Cart" width={35}/>
        <span>89</span>
        </div>
    );
};
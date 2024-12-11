import React, { useCallback } from 'react'
//redux-toolkit
import { useAppDispatch, useAppSelector } from '../../hooks'
import CartProduct from './CartProduct/CartProduct'
import { clearCart } from '../../store/slices/cartSlice'

//types
import { ICardItem } from '../../Types/ICardItem'
import { ICart } from '../../Types/ICart'

import './cart.style.scss'

const Cart: React.FC<ICart> = ({ visibleCart }) => {
    const { cartContainer } = useAppSelector((state) => state.cartContainer)
    const dispatch = useAppDispatch()

    const cartCleanHandler = useCallback(() => {
        dispatch(clearCart())
    }, [dispatch])

    const fullPrice = cartContainer.reduce(
        (accumulator: number, item: ICardItem) => {
            return accumulator + item.price
        },
        0,
    )

    if (visibleCart) {
        return (
            <div className="cart-menu">
                <div className="cart-list">
                    {cartContainer.map((item: ICardItem, index: number) => (
                        <CartProduct
                            key={index}
                            name={item.name}
                            description={item.description}
                            filter={item.filter}
                            image={item.image}
                            price={item.price}
                            discount={item.discount}
                            id={item.id}
                        />
                    ))}
                </div>
                <div className="cart-email">
                    <p>Email для чека:</p>
                    <input type="text"/>
                </div>
                <div className="cart-confirm">
                    <div className="cart-controls">
                        <p className="cart-fullprice">Итого: {fullPrice} ₽</p>
                        <button
                            onClick={cartCleanHandler}
                            className="confirm-button clean-cart"
                        >
                            Очистить корзину
                        </button>
                    </div>
                    <a
                        href="https://t.me/agreatcchaos"
                        target="_blank"
                        className="confirm-button"
                    >
                        Оформить заказ
                    </a>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default Cart

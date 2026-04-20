import './checkout/CheckoutHeader.css';
import './CheckoutPage.css';
import {CheckoutHeader} from "./checkout/CheckoutHeader.jsx";
import {formatMoney} from "../utils/money.js";
import axios from "axios";
import {useEffect, useState} from "react";
import dayjs from "dayjs";


export function CheckoutPage({ cart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);

    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            .then(response => {
                setDeliveryOptions(response.data);
            })
    }, [])

    let totalQuantity = 0;
    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity
    });

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="/checkout-favicon.png"/>
            <title>Checkout</title>
            <CheckoutHeader totalItems={totalQuantity}/>
            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <div className="order-summary">
                        {deliveryOptions.length > 0 && cart.map((cartItem) => {
                                const selectedDeliveryOption = deliveryOptions.find(option => option.id === cartItem.deliveryOptionId);
                                const estimatedDeliveryTime = dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D');
                                return (
                                    <div key={cartItem.id} className="cart-item-container">
                                        <div className="delivery-date">
                                            Delivery date: {estimatedDeliveryTime}
                                        </div>

                                        <div className="cart-item-details-grid">
                                            <img className="product-image"
                                                 src="/images/products/athletic-cotton-socks-6-pairs.jpg"/>

                                            <div className="cart-item-details">
                                                <div className="product-name">
                                                    {cartItem.product.name}
                                                </div>
                                                <div className="product-price">
                                                    {formatMoney(cartItem.product.priceCents)}
                                                </div>
                                                <div className="product-quantity">
                                                      <span>
                                                        Quantity: <span
                                                          className="quantity-label">{cartItem.quantity}</span>
                                                      </span>
                                                    <span className="update-quantity-link link-primary">
                                                            Update
                                                          </span>
                                                    <span className="delete-quantity-link link-primary">
                                                            Delete
                                                          </span>
                                                </div>
                                            </div>

                                            <div className="delivery-options">
                                                <div className="delivery-options-title">
                                                    Choose a delivery option:
                                                </div>

                                                {deliveryOptions.map((option) => {
                                                        return (<div key={option.id} className="delivery-option">
                                                                <input type="radio"
                                                                       checked={option.id === cartItem.deliveryOptionId}
                                                                       className="delivery-option-input"
                                                                       name={`delivery-option-${cartItem.productId}`}/>
                                                                <div>
                                                                    <div className="delivery-option-date">
                                                                        {dayjs(option.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                                                                    </div>
                                                                    <div className="delivery-option-price">
                                                                        {option.priceCents === 0 ? 'FREE SHIPPING' : formatMoney(option.priceCents)}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>

                    <div className="payment-summary">
                        <div className="payment-summary-title">
                            Payment Summary
                        </div>

                        <div className="payment-summary-row">
                            <div>Items {totalQuantity}:</div>
                            <div className="payment-summary-money">$42.75</div>
                        </div>

                        <div className="payment-summary-row">
                            <div>Shipping &amp; handling:</div>
                            <div className="payment-summary-money">$4.99</div>
                        </div>

                        <div className="payment-summary-row subtotal-row">
                            <div>Total before tax:</div>
                            <div className="payment-summary-money">$47.74</div>
                        </div>

                        <div className="payment-summary-row">
                            <div>Estimated tax (10%):</div>
                            <div className="payment-summary-money">$4.77</div>
                        </div>

                        <div className="payment-summary-row total-row">
                            <div>Order total:</div>
                            <div className="payment-summary-money">$52.51</div>
                        </div>

                        <button className="place-order-button button-primary">
                            Place your order
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
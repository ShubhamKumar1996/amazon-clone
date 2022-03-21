import React from 'react';
import './Product.css';

function Product({ title, image, price, rating }) {
  return (
    <div className='product'>
        <div class="product__info">
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div class="product__rating">
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <p>⭐</p>
                  ))
                }
            </div>
        </div>

        <img 
            src={image} alt='The Lean Startup Book' />
        
        <button>Add to Basket</button>
    </div>
  )
}

export default Product;


import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">

        <img className='home__image'
            src="https://m.media-amazon.com/images/I/81LAm3twLhL._SX3000_.jpg"
            alt="Amazon Background" />

        <div className='home__row'>
          < Product 
            id="4903850"
            title='The Lean Startup'
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={4}
          />
          < Product 
            id="23445930"
            title='Oppo A51'
            price={198.99}
            image="https://m.media-amazon.com/images/I/41Kq0k+DGKL._SY300_SX300_.jpg"
            rating={3}
          />
        </div>

        <div className='home__row'>
          < Product 
            id="3"
            title="Apple Ipod Pro"
            price={98.99}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-11-select-202104_GEO_IN?wid=545&hei=550&fmt=jpeg&qlt=95&.v=1617864721000"
            rating={5}
          />
          < Product 
            id="23445930"
            title='Amazon Echo'
            price={98.99}
            image="https://press.aboutamazon.com/system/files-encrypted/nasdaq_kms/inline-images/Heather%20Gray%20Echo%20TH.jpg"
            rating={5}
          />
          < Product 
            id="25675464"
            title="Apple Smart Watch"
            price={122.25}
            image="https://www.reliancedigital.in/medias/realme-RMA161-Smart-Watches-491946586-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxOTgzNTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDc3L2gzZS85NDcxNTY4NjQyMDc4LmpwZ3xmOTYwMzQ2ZWY0OWQ1YzhmMmZlMGUwN2ZlYjAxNDE3OGQxNjM3OTBhYTc5YjcwY2ZlZDM5YjMwMjZmNGUxYzli"
            rating={4}
          />
        </div>

        <div className='home__row'>
          
          < Product 
            id="453"
            title="Lenevo IdeaPad"
            price={125.67}
            image="https://images-eu.ssl-images-amazon.com/images/I/41PnIUzyYML._SX300_SY300_QL70_FMwebp_.jpg"
            rating={4}
          />

          < Product 
            id="4534"
            title="Asus IdeaPad"
            price={129.67}
            image="https://images-eu.ssl-images-amazon.com/images/I/414057taYKL._SX300_SY300_QL70_FMwebp_.jpg"
            rating={4}
          />
        </div>
        
      </div>
    </div>
  )
}

export default Home;
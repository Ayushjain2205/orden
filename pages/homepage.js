import React from "react";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../Components/Navbar";
import EmblaCarousel from "../Components/EmblaCarousel";
import NFTtile from "../Components/NFTtile";
import CreatorTile from "../Components/CreatorTile";
import Overlay from "react-overlay-component";

function Homepage() {
  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  const [isOpen, setOverlay] = useState(false);

  const closeOverlay = () => setOverlay(false);

  const configs = {
    animate: true,
    // clickDismiss: false,
    // escapeDismiss: false,
    // focusOutline: false,
  };
  return (
    <div>
      <Navbar />
      <h1 className='page-heading'>Discover</h1>
      <div className='banner-holder'>
        <EmblaCarousel slides={slides} />
      </div>
      <h2 className='section-heading'>Top Sellers</h2>
      <div
        className='nft-holder'
        onClick={() => {
          console.log("clicked");
          setOverlay(true);
        }}
      >
        <NFTtile
          title='Random'
          username='John'
          price='1.05'
          url='https://i.postimg.cc/VL2Jr6d3/Rectangle-60.png'
        />
        <NFTtile
          title='Glass/Phone'
          username='John Doe'
          price='5.05'
          url='https://i.postimg.cc/MGJ6KhJ5/photo-1624106784587-facb5dcfef45.jpg'
        />
        <NFTtile
          title='Karizma'
          username='Sol'
          price='1.00'
          url='https://i.postimg.cc/kgN8Y49k/Rectangle-61.png'
        />
        <NFTtile
          title='Zeal'
          username='EmA'
          price='2.90'
          url='https://i.postimg.cc/gjjdTp3z/photo-1610337673044-720471f83677.jpg'
        />
        <NFTtile
          title='Waves'
          username='Chuk'
          price='9.00'
          url='https://i.postimg.cc/fb2v5LfM/t2-Sai-Aq-Ip-I.png'
        />
        <NFTtile
          title='My NFT'
          username='Ayush'
          price='1.00'
          url='https://i.postimg.cc/9M07fYTh/Rectangle-62.png'
        />
      </div>
      <h2 className='section-heading'>Creators</h2>
      <div className='creator-holder'>
        <CreatorTile
          url='https://i.postimg.cc/cJtBjmH6/Rectangle-150.png'
          name='Jane123'
        />
        <CreatorTile
          url='https://i.postimg.cc/PqhJCzg7/Rectangle-157-1.png'
          name='cheng32'
        />
        <CreatorTile
          url='https://i.postimg.cc/FK9FrFc5/Rectangle-134.png'
          name='Ray$34'
        />
        <CreatorTile
          url='https://i.postimg.cc/Mpg4596s/Rectangle-129.png'
          name='paige99'
        />
        <CreatorTile
          url='https://i.postimg.cc/cJtBjmH6/Rectangle-150.png'
          name='Ema_ema'
        />
      </div>
      <br />
      <br />
      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <h2 className='checkout-heading'>Checkout</h2>
        <p>
          You’re about to purchase <strong>Glass/Phone</strong> by
          <strong> @johndoe</strong>
        </p>
        <div className='price-top'>
          <div className='top-left'>
            <h6>Quantity</h6>
            <h2>1</h2>
          </div>
          <div className='top-right'>
            <h6>Price</h6>
            <h2>5.05 MATIC</h2>
          </div>
        </div>

        <div className='price-bottom'>
          <div className='bottom-row'>
            <h6 className='left'>Your Balance</h6>
            <h6 className='right balance'>14.054 MATIC</h6>
          </div>
          <div className='bottom-row'>
            <h6 className='left'>Service Fee</h6>
            <h6 className='right'>0</h6>
          </div>
          <div className='bottom-row'>
            <h6 className='left'>Total Price</h6>
            <h6 className='right'>5.05 MATIC</h6>
          </div>
        </div>
        <div className='button-row'>
          <button className='proceed'>Proceed to Payment</button>
          <button
            className='danger'
            onClick={() => {
              setOverlay(false);
            }}
          >
            Cancel
          </button>
        </div>
      </Overlay>
    </div>
  );
}

export default Homepage;

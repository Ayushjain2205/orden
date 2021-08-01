import React from "react";

function NFTtile({ title, username, price, url }) {
  return (
    <div
      className='nft-tile'
      style={{
        background: `url(${url})`,
        backgroundSize: "300px 400px",
      }}
    >
      <div className='bottom-part'>
        <div className='bottom-left'>
          <h5 className='nft-title'>{title}</h5>
          <h5 className='nft-username'>{`@${username}`}</h5>
        </div>
        <div className='bottom-right'>
          {/* <h6 className='current'>Current Bid</h6> */}
          <h6 className='price'>{`${price} MAT`}</h6>
        </div>
      </div>
    </div>
  );
}

export default NFTtile;

import React from "react";

function CreatorTile({ url, name }) {
  return (
    <div className='creator-card'>
      <div className='top-half'>
        <img class='cover' src={url} alt='' />
        <div className='overlay'>
          <img
            className='overlay-image'
            src='https://i.postimg.cc/qRkgnJ90/Ellipse-18.png'
            alt=''
          />
        </div>
      </div>
      <div className='bottom-half'>{name}</div>
    </div>
  );
}

export default CreatorTile;

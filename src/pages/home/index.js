import React from 'react';
import './style.css';
import { image2, imageExample } from '../../assets';
import { isUserAuthenticated } from '../../utils/cookie';
import { ProductGet } from '../../components';

const Home = () => {
  return (
    <div className="pageHome-wrapper">
      {isUserAuthenticated() ? <ProductGet /> : <div />}
      <img className="pageHome-img1" alt="background1" src={imageExample} />
      <img className="pageHome-img2" alt="background2" src={image2} />
    </div>
  );
};

export default Home;

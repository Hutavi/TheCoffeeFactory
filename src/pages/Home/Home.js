import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Components/Header/Header';
import Description from './Description.js/Description';
import Gallery from './Garlery/Gallery';
import Footer from '../../Components/Footer/Footer';
import BestSale from './BestSale/BestSale';


const Home = () => {
  return (
    <div>
      <Header />
      <Description />
      <Gallery />
      <BestSale />
      <Footer />
    </div>
  );
};


Home.propTypes = {

};


export default Home;

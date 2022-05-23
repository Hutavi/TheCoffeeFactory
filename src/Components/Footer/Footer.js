import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";
import {
  BsFacebook,
  BsTelegram,
  BsFillTelephoneFill,
  BsGeoAltFill,
  BsEnvelopeOpenFill,
} from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { AiFillGooglePlusCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <div className="title-icons">
                  <BsGeoAltFill className="point-icon" />
                </div>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>
                    224 Nguyen Van Cu, Quan 1, TP Ho Chi Minh (Co so 1)
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <div className="title-icons">
                  <BsFillTelephoneFill className="phone-icon" />
                </div>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>0814488935</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <div className="title-icons">
                  <BsEnvelopeOpenFill className="letter-icon" />
                </div>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>huynhtanvinhktqn123@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img
                      src="../../img/coffeeFactory.png"
                      className="img-fluid"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="https://www.facebook.com/tanvinh.huynh.9999/">
                    <BsFacebook className="fb-icon" />
                  </a>
                  <a href="https://www.instagram.com/vinhktqn.hutavi/">
                    <IoLogoInstagram className="ig-icon" />
                  </a>
                  <a href="/">
                    <AiFillGooglePlusCircle className="gg-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">about</a>
                  </li>
                  <li>
                    <a href="#">services</a>
                  </li>
                  <li>
                    <a href="#">portfolio</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Expert Team</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Latest News</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <BsTelegram className="telegram-icon" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;

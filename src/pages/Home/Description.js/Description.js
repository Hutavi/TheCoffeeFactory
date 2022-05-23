import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Description.css";


const Description = () => {
  return (
    <div className="describe-grid">
      <Row className="form-row-grid">
        <Col xl={6}>
          <img
            width="100%"
            height="100%"
            src="https://theme.hstatic.net/200000399631/1000761068/14/our-story-h3-1.jpg?v=262"
            alt="img1"
          />
        </Col>
        <Col xl={6}>
          <div className="main-describe">
            <h1 className="title-produce">Giới thiệu</h1>
            <h2 className="describe-produce">
              The Coffee Factory <br /> Chuỗi cà phê rang tươi đầu tiên tại Việt
              Nam
            </h2>
            <p className="details-describe">
              Tháng 11/2013, cửa hàng The Coffee Factory đầu tiên bắt đầu hoạt
              động ngay mặt tiền đường Trương Định, TP.HCM với phong cách khá lạ
              mắt: tất cả máy rang, xay cà phê, bàn ghế, ống nước cùng được bố
              trí trong một không gian nhỏ thoáng đãng.
            </p>
            <Button id="detail-button" variant="outline-danger danger">
              Xem chi tiết
            </Button>{" "}
          </div>
        </Col>
      </Row>
      <Row className="form-row-grid">
        <Col>
          {" "}
          <div className="main-describe margin2">
            <div>
              <h1 className="title-produce">Sứ mệnh</h1>
              <h2 className="describe-produce">
                “Tôi muốn tạo ra ly cà phê trung thực.”
              </h2>
              <p className="details-describe">
                Với mong muốn đem lại một hương vị cà phê tươi độc đáo, chất
                lượng nhất để người Việt chúng ta được thương thức mỗi ngày với
                giá cả phải chăng.
              </p>
              <Button id="detail-button" variant="outline-danger danger">
                Xem chi tiết
              </Button>{" "}
            </div>
          </div>
        </Col>
        <Col>
          <img
            width="100%"
            height="100%"
            src="https://theme.hstatic.net/200000399631/1000761068/14/our-story-h3-2.jpg?v=262"
            alt="img2"
          />
        </Col>
      </Row>
    </div>
  );
};


Description.propTypes = {

};


export default Description;

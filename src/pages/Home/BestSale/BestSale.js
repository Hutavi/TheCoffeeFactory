import React from 'react';
import PropTypes from 'prop-types';
import { CardGroup, Card } from "react-bootstrap";
import "./BestSale.css"

const BestSale = () => {
  return (
    <div>
      <div className="contain-detail">
        <div className="title-best-sellre">
          <h1>Sản Phẩm Bán Chạy</h1>
        </div>
        <div className="detail-produces">
          <CardGroup>
            <Card className="padding-cards">
              <Card.Img
                className="img-cards"
                variant="top"
                src="../../imgBestSeller/cf.jpg"
              />
              <Card.Body>
                <Card.Title>Cà Phê nguyên chất</Card.Title>
                <Card.Text>
                  <p>
                    Được pha chế từ kĩ thuật truyền thống. Vẫn giữ nguyên được
                    hương vị nguyên chất của từng hạt cà phê. Mang lại cho người
                    uống một cảm giác khó tả.
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="padding-cards">
              <Card.Img
                className="img-cards"
                variant="top"
                src="../../imgBestSeller/cf.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="padding-cards">
              <Card.Img
                className="img-cards"
                variant="top"
                src="../../imgBestSeller/cf.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card className="padding-cards">
              <Card.Img
                className="img-cards"
                variant="top"
                src="../../imgBestSeller/cf.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="padding-cards">
              <Card.Img
                className="img-cards"
                variant="top"
                src="../../imgBestSeller/cf.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="padding-cards">
              <Card.Img
                className="img-cards"
                variant="top"
                src="../../imgBestSeller/cf.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  );
};


BestSale.propTypes = {

};


export default BestSale;

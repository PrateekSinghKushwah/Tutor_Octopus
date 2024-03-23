import React from "react";
import "../styles/PricingCard.css";
import { Col, Row, Stack } from "react-bootstrap";
const PricingCard = ({ img, price, users, sendUp, color }) => {
  return (
    <div className="PricingCard">
      <header>
      <button className="card-btn"><a href={users} style={{color:"black"}}>{sendUp}</a></button>
        <p className="card-img my-4"> <img src={img}  width={60}/></p>
        <h1 className="card-price">{price}</h1>
      </header>
      {/* features here */}
      <div className="card-features">
      
        <div className="card-storage border45"><p className="">Pay fee in easy (interest free) instalments. You can choose
          from monthly / quarterly payment options.</p></div>
        <div className="card-users-allowed border45">
        <Row >
          <Col sm={6}>
          <p>Ads</p>
          </Col>
          <Col sm={6}>
         <p className="bppp">5</p>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
        <p>  Subscription</p>
          </Col>
          <Col sm={6}>
          <p className="bppp">5</p>
          </Col>
        </Row>
        </div>
        <div className="border45">
        <button className="card-btn1 "><a href={users} style={{color:"black"}}>{sendUp}</a></button>
        </div>
        
      </div>
     
    </div>
  );
};

export default PricingCard;

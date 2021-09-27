import React from 'react';
import './card.css';

const Card = (props) => {

  const { name, age, img, salary, country, gender } = props.actor;

  return (
    <>
      <div className="col">
        <div className="card h-100">
          <div className="card-image">
            <img src={img} className="card-img-top img-fluid" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">Name: {name}</h5>
            <div className="card-text line-height">
              <p>Age: {age}</p>
              <p>Gender: {gender}</p>
              <p>Salary: ${salary}</p>
              <p>Country: {country}</p>
            </div>
          </div>
          <div className="card-footer pb-3">
            <button className="btn btn-info px-4 fw-bold" onClick={() => props.handleCard(props.actor)}><i class="fas fa-cart-plus"></i> Add Actor</button>
          </div>
        </div>
      </div>
    </>

  );
};

export default Card;
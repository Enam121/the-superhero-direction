import React from 'react';

const AddCard = (props) => {

  const { name, img } = props;

  return (
    <div className="card rounded-3 my-3">
      <div className="row align-items-center ">
        <div className="col-md-4">
          <img src={img} alt="" className="img-fluid rounded-3 " />
        </div>
        <div className="col-md-7 ">
          <h5>{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
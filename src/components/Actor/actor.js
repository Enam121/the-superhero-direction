import React, { useEffect, useState } from 'react';
import AddCard from '../AddCard/addCard';
import Card from '../Card/card';

const Actor = () => {
  const [actors, setActors] = useState([]);
  const [addCard, setAddCard] = useState([]);

  useEffect(() => {
    fetch('./data.JSON')
      .then(res => res.json())
      .then(data => setActors(data))
  }, [])


  const handleCard = (actor) => {
    const newAttor = [...addCard, actor];
    setAddCard(newAttor)

  }

  let totalCost = 0;
  for (const perActor of addCard) {
    totalCost = totalCost + perActor.salary;

  }


  return (
    <div className="container">

      <div className="row">
        <div className="col-md-9">
          <div className="row row-cols-1 row-cols-md-3 g-4 ">
            {
              actors.map(actor => <Card
                key={actor.key}
                actor={actor}
                handleCard={handleCard}>

              </Card>)
            }
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white sticky-md-top">
            <div className="card-body">
              <h3 className="card-title">Actors Added: {addCard.length}</h3>
              <h5 className="card-text">Total Cost: ${totalCost}</h5>
              {
                addCard.map(actor => <AddCard
                  key={actor.key}
                  name={actor.name}
                  img={actor.img}>

                </AddCard>)
              }
              <button className="btn btn-info px-3 my-3">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Actor;
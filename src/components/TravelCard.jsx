import React from "react";

const TravelCard = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <img src={props.data.imageUrl} />
      </div>
      <div>
        <a href={props.data.googleMapsUrl} />
        <p>{props.data.location}</p>
        <h1>{props.data.title}</h1>
        <h3>
          {props.data.startDate} {props.data.endDate}
        </h3>
        <p>{props.data.description}</p>
      </div>
    </div>
  );
};

export default TravelCard;

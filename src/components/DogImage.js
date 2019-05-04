import React from "react";

const DogImage = props => <img src={props.imgSrc} alt={`Picture of a ${props.dogBreed}`}  />;

export default DogImage;

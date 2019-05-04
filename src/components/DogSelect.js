import React from "react";

const DogSelect = props => (
  <label>
    Please choose a Breed:
    <select
      name="Breeds"
      id="breedsSelect"
      onChange={props.selectOnChange}
      defaultValue={"none"}
    >
    <option value="none" disabled>Random</option>
      <option value="dane-great/">Great Dane</option>
      <option value="retriever/golden/">Golden Retriever</option>
      <option value="terrier/american/">American Terrier</option>
    </select>
  </label>
);

export default DogSelect;

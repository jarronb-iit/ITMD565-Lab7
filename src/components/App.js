import React from "react";
import axios from "axios";

import DogImage from "./DogImage";
import DogSelect from "./DogSelect";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBreed: "",
      imgSrc: "",
      url: "https://dog.ceo/api/breeds/image/random"
    };

    this.selectOnChange = this.selectOnChange.bind(this);
    this.btnClickHandler = this.btnClickHandler.bind(this);
  }

  componentDidMount() {
    axios
      .get(this.state.url)
      .then(response => {
        return response.data.message;
      })
      .then(imgSrc => {
        this.setState({
          imgSrc
        });
        console.log(this.state.imgSrc);
      });
  }

  selectOnChange() {
    let selectedBreed = document.getElementById("breedsSelect").value;
    this.setState({
      selectedBreed,
      url: `https://dog.ceo/api/breed/${selectedBreed}images/random`
    });

    axios
      .get(`https://dog.ceo/api/breed/${selectedBreed}images/random`)
      .then(response => {
        return response.data.message;
      })
      .then(imgSrc => {
        this.setState({
          imgSrc
        });
        console.log(this.state.imgSrc);
      });
  }

  btnClickHandler() {
    axios
      .get(this.state.url)
      .then(response => {
        return response.data.message;
      })
      .then(imgSrc => {
        this.setState({
          imgSrc
        });
        console.log(this.state.imgSrc);
      });
    this.setState({
      selectedBreed: document.getElementById("breedsSelect").value,
      url: `https://dog.ceo/api/breed/${this.state.selectedBreed}images/random`,
      buttonClicked: false
    });
  }

  render() {
    let dogBreed;
    if (this.state.selectedBreed === "dane-great/") {
      dogBreed = "Great Dane";
    } else if (this.state.selectedBreed === "retriever/golden/") {
      dogBreed = "Golden Retriever";
    } else if (this.state.selectedBreed === "terrier/american/") {
      dogBreed = "American Terrier";
    }
    return (
      <div>
        <h1>{dogBreed} Dog Image Generator</h1>
        <h2>Jarron Bailey - jbailey6@hawk.iit.edu - ITMD-565</h2>
        <p>Please press the button to generate a new random image.</p>
        <DogSelect selectOnChange={this.selectOnChange} />
        <button onClick={this.btnClickHandler}>Fetch</button>
        <div>
          <hr />
          <DogImage imgSrc={this.state.imgSrc} dogBreed={dogBreed} />
        </div>
      </div>
    );
  }
}

export default App;

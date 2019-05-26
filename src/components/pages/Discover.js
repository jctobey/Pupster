import React, { Component } from "react";
import API from "../../utils/API/DogCEO";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Discover.css";
class Discover extends Component {
  state = {
    pup: "",
    likeCounter: 0,
    pupMatch: false
  };
  componentDidMount() {
    this.searchPups();
  }
  searchPups = () => {
    API.search()
      .then(res => this.setState({ pup: res.data.message }))
      .catch(err => console.log(err));
  };
  handlePupLike = () => {
    this.setState({ pupMatch: false });
    if (Math.random() > 0.8) {
      this.setState({
        likeCounter: this.state.likeCounter + 1,
        pupMatch: true
      });
    }
    this.searchPups();
  };

  render() {
    const { pup, pupMatch, likeCounter } = this.state;
    return (
      <div>
        <h1>Make New Friends</h1>
        <h2>Thumbs up on any pups you'd like to meet!</h2>
        {pup ? (
          <div className="row">
            <Card className="col-md-3 col-md-offset-3">
              <Card.Img
                src={pup}
                alt="Card image"
                style={{ height: "400px", width: "300px" }}
              />
              <Card.ImgOverlay>
                {" "}
                <Button
                  onClick={this.handlePupLike}
                  className="button like"
                  variant="success"
                >
                  <span role="img" aria-label="like">
                    {" "}
                    👍
                  </span>
                </Button>
                <Button
                  onClick={this.searchPups}
                  className="button dis"
                  variant="danger"
                >
                  <span role="img" aria-label="dislike">
                    👎
                  </span>
                </Button>
              </Card.ImgOverlay>
            </Card>
          </div>
        ) : (
          ""
        )}

        <h3>
          <p>Made friends with {likeCounter} pups so far!</p>
        </h3>
        {pupMatch ? (
          <h4>
            <p> That pup liked you too!</p>
          </h4>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Discover;

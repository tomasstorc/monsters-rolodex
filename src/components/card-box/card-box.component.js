import { Component } from "react";
import "./card-box.styles.css";

class CardBox extends Component {
  render() {
    const { id, name, email } = this.props;
    return (
      <div className="card-container">
        <img src={`https://robohash.org/${id}?set=set2`} alt="" />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default CardBox;

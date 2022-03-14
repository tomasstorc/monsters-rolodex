import { Component } from "react";
import "./card-list.styles.css";
import CardBox from "../card-box/card-box.component";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { id, name, email } = monster;
          return <CardBox key={id} id={id} name={name} email={email} />;
        })}
      </div>
    );
  }
}

export default CardList;

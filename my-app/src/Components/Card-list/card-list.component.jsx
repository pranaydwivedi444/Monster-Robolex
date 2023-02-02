import { Component } from "react";
import CardDetail from "./card-detail.component";
import "./card-list.component.css";
function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <CardDetail monster={monster} />;
      })}
    </div>
  );
}
/*
class CardList extends Component {
  render() {
    console.log("render");
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardDetail monster={monster} />;
        })}
      </div>
    );
  }
}
*/

export default CardList;

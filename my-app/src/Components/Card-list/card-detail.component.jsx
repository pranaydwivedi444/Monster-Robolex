import { Component } from "react";
import "./card-detail.component.css";

const CardDetail = function ({ monster: { id, name, email } }) {
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="monsters"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
/*
class CardDetail extends Component {
  render() {
    console.log(this.props);
    const { id, name, email } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt="monsters"
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
*/
export default CardDetail;
